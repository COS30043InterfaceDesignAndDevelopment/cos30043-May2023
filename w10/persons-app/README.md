# persons-app

## Instructions
**Back-end assumption**: 
- Localhost with XAMPP, PHP, MySQL

1. Set up database
- Execute the SQL script: ```src/assets/api/idd_person.sql```

2. Run XAmpp Apache to serve the back-end script
The **back-end PHP script** is an adaptation of the one from week 9: `src/assets/api/apis.php`

- Under folder `$XAMPP/htdocs`, create a subdirectory named ```persons-app```
- Copy the back-end PHP script to that directory
- Change the URL value of the property `dbapi` in the Persons-related components (`Persons.vue`, `PersonsCreate.vue`, `PersonsDelete.vue`, `PersonsUpdate.vue`) to point the URL of the back-end PHP script. The new value should be:
  `http://localhost/persons-app/api/apis.php`

3. Configure `package.json/eslintConfig`: Add the following rules to the `elintconfig`.rules part:
```
"rules": {
      "vue/multi-word-component-names": "off",
      "no-unused-vars": "off"
    }
```
4. Steps to run the front-end

In the `persons-app` folder of your front-end project:

- if it is a light-weight app then install dependencies first:
```
npm install
```
- install bootstrap:
```
npm install bootstrap jquery popper.js
```
- install Vue router:
```
vue add router
```
- Now, run the app:
  ```
  npm run serve
  ```
  (ignoring the warning messages, if any)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
