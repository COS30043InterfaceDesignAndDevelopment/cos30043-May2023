# A Basic Restful Fullstack App
1. **FronEnd**: Vuejs
2. **Backend**: PHP/Mysql

This app uses a PHP/MySQL backend, which can ONLY be run using a proper web server. 

Basic steps: 
1. Follow the instructions in "Environment setup" to run the web server hosting this app
2. On the browser: `http://localhost/dev.idd/www/w08/restfulfullstack/`

# Environment setup 
1. An Xampp server has been started with Apache and MySQL services.
2. The `restfulfullstack` directory is hosted in the default Apache web server at the following address:
   http://localhost/dev.idd/www/w08/restfulfullstack/
   - copy the directory to the `htdocs/dev.idd/www/w08` directory of the XAMPP server
   - the URL could be different depending on your web server setup
3. Set up the database with test data. Execute the `resources/idd_person.sql` script in MySQL, e.g.
```
MariaDB [test]> source /path-to-folder-w08/restfulfullstack/resources/idd_person.sql
```

# Testing the Backend using PostMan
- Start the PostMan Desktop Agent as described in `../setup-postman.md`
- Create a Workspace and a Collection for `week8`
- Organise the requests within the collection

The following sections describe how to use PostMan to test the application API.

# GET
- All persons
http://localhost/dev.idd/www/w08/restfulfullstack/resources/apis.php

- Person by name
http://localhost/dev.idd/www/w08/restfulfullstack/resources/apis.php/name/Billy

# POST

http://localhost/dev.idd/www/w08/restfulfullstack/resources/apis.php
- Method: POST
- Body/raw/JSON:

```
{
  "name": "DucLe",
  "age": "45",
  "fpath": "img/smiley2.png"
}
```

# PUT

http://localhost/dev.idd/www/w08/restfulfullstack/resources/apis.php/name/DucLe

- Body/raw/JSON:

```
{
  "age": "55",
  "fpath": "img/smiley1.png"
}
```

# DELETE

http://localhost/dev.idd/www/w08/restfulfullstack/resources/apis.php/name/DucLe
