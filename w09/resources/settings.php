<?php
function getDBConfig() {
  $dbConfig = 
  /* localhost */
  array(
    "host" => "localhost",
    "user" => "admin", 
    "password" => "password",
    "dbname" => "test"
  )
  /* mercury db */
  // array(
  //   "host" => "feenix-mariadb.swin.edu.au",
  //   "user" => "s-your-student-id", 
  //   "password" => "your-password",
  //   "dbname" => "your-user_db"
  // )
  ;
  return $dbConfig;
}

?>