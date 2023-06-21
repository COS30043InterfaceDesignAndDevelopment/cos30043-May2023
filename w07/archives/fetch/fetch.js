function fetchData(url) {
  fetch(url)
  .then(response => { // process the response object: extrac JSON data from it
    console.log("...got a response");
    let e = document.createElement('h3');
    e.append('...Got a response');
    document.getElementById('body').append(e);
    return response.json();
  })
  .then(json => {   // process the JSON data returned from the above handler
    console.log(json);
    let e = document.createElement('pre');
    e.append(JSON.stringify(json));
    document.getElementById('body').append(e);
  });
}