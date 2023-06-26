 # Prerequisites
 - A Node.js server has been started with `../app.js` as described in `../ReadMe.md`.
- PostMan Desktop Agent has been started as described in `../../setup-postman.md`.

The following sections describe how to use PostMan to test the application API.

 # POST 
http://localhost:3000/cars

```  
  {
    "manufacturer": "toyota",
    "model": "yaris",
    "year": 2021
  }
  ,{
    "manufacturer": "toyota",
    "model": "corona",
    "year": 2020
  }
  ,{
    "manufacturer": "honda",
    "model": "civic",
    "year": 2019
  }
  ,{
    "manufacturer": "bmw",
    "model": "x9",
    "year": 2010
  }
  ,{
    "manufacturer": "vinfast",
    "model": "sport",
    "year": 2021
  }
```

# GET

- http://localhost:3000/cars/1
- http://localhost:3000/cars/2

# PUT
http://localhost:3000/cars/1

```
{
    "manufacturer": "toyota",
    "model": "corona-extreme",
    "year": 2021
}
```

# DELETE

http://localhost:3000/cars/1