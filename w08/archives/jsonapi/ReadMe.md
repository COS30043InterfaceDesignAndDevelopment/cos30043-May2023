# Environment
1. Nodejs: install it
2. Install Node package manage for Nodejs (NPM)
3. Install Express API
4. Install `nodemon` for application change detection: `npm install -g nodemon`
5. Install node module: `express-json-file-crud`
- Reference: URL: https://www.npmjs.com/package/express-json-file-crud
```
npm install --save express-json-file-crud
```

# JSON-API
A Node.js application that enables CRUD operations directly on a JSON file (without using any databases).

1. Create `app.js` that uses the module

See `app.js` file for detail.

2. Executing app.js

```
nodemon app.js
```

3. Access the app from the browser: 
   1. First test the home page: `http://localhost:3001`
      - change the listening port in `app.js` and observe the update
   2. Test accessing JSON Data of entity `car`: `http://localhost:3001/cars`
   3. Add a new car to file: `data/cars.json`. Run the test again to observe the difference
