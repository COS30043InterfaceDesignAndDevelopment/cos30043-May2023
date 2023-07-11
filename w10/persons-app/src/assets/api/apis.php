<?php
// Reference:
// https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/

// IMPORTANT: this is needed to allow your Node.js server to connect to this script
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

// Use this API for demonstration purposes only

// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];

// debug
error_log("method: " .$method);

if ($method === 'OPTIONS') {
  // pre-flight requests
  header('Content-Type: application/html');
  http_response_code(200);
} else {
  executeDb($method);
}

function executeDb($method) {
  $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
  $input = json_decode(file_get_contents('php://input'),true);
  
  error_log("method: " .$method."; input: " . print_r($input, true));

  // connect to the mysql database, provide the appropriate credentials

  // **************  change to your Mercury or localhost credentials !!  
  // $conn = mysqli_connect('feenix-mariadb.swin.edu.au', 's1234567', 'yourPassword', 's1234567_db');
  $database = 'test';
  $conn = mysqli_connect('localhost', 'admin', 'password', $database)
    or die("<p>Unable to connect to the database server: $database.</p>"
    . "<p>Error code " . mysqli_connect_errno()
    . ": " . mysqli_connect_error() . "</p>");
  
  mysqli_set_charset($conn,'utf8');

  // initialise the table name accordingly
  $table = "idd_person";

  // retrieve the search key field name and value from the path
  $fld = preg_replace('/[^a-z0-9_]+/i','',array_shift($request));
  $key = array_shift($request);
  // print_r($fld);

  // retrieve the data to prepare set values
  if (isset ($input))  {
    $columns = preg_replace('/[^a-z0-9_]+/i','',array_keys($input));
    $values = array_map(function ($value) use ($conn) {
      if ($value===null) return null;
      return mysqli_real_escape_string($conn,(string)$value);
    },array_values($input));

    $set = '';
    for ($i=0;$i<count($columns);$i++) {
      $set.=($i>0?',':'').'`'.$columns[$i].'`=';
      $set.=($values[$i]===null?'NULL':'"'.$values[$i].'"');
    }
  }

  // create SQL
  $sql = NULL;
  switch ($method) {
    case 'GET':
      $sql = "select * from `$table`".($key?" WHERE $fld='$key'":''); break;
    case 'PUT':
      $sql = "update `$table` set $set where ".($key?"$fld='$key'":"0=1"); break;
    case 'POST':
      $sql = "insert into `$table` set $set"; break;
    case 'DELETE':
      $sql = "delete from `$table` where ".($key?"$fld='$key'":"0=1"); break;
  }

  // debug
  error_log("sql: " . print_r($sql, true));

  // execute SQL statement
  $result = mysqli_query($conn,$sql);

  if ($result) {
    if ($method == 'GET') {
      header('Content-Type: application/json');
      echo '[';
      for ($i=0;$i<mysqli_num_rows($result);$i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
      }
      echo ']';
    } elseif ($method == 'POST') {
      error_log("POST result: " . $result);
      echo mysqli_insert_id($conn);
    } else {
      echo mysqli_affected_rows($conn);
    }
  } else {
    // ducmle: added response for error case
    http_response_code(500);  // internal server error
  }

  // close mysql connection
  mysqli_close($conn);
}
?>