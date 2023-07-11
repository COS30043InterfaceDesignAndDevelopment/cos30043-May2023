<template>
  <div>
    <h2>Persons</h2>
    <!--using Bootstrap to organise data into a table-->
    <div class="container">
      <div class="row bg-info">
        <div class="col-md border border-dark"><b>Name</b></div>
        <div class="col-md border border-dark"><b>Age</b></div>
        <div class="col-md border border-dark"><b>Icon</b></div>
      </div>
      <div class="row" v-bind:key="person.id" v-for="person in persons">
        <div class="col-md border border-dark">{{person.name}}</div>
        <div class="col-md border border-dark">{{person.age}}</div>
        <div class="col-md border border-dark"><img v-bind:src='person.fpath' class="img-rounded" alt="smiley" height="30px" /></div>
      </div>
    </div>
    <p>Message : {{ msg }}</p>
    <p>Error: {{err}}</p>
  </div>
</template>

<script>
// export component
export default{
  name: "Persons",
  data: function() {
    return {
      dbapi: 'http://localhost/persons-app/api/apis.php',
      persons: [], err: '', msg: ''
    }
  },
  methods: {
    // GET
    get: function(url) { 
      // GET request using fetch with error handling
      fetch(url)
      .then(response => {
        //turning the response into the usable data
        // return response.json( );
        if (!response.ok) {
          this.err = response.status;
          return response.ok;
        } else {
          return response.json();
        }
      })
      .then(data => {
        //This is the data you wanted to get from url
        // console.log('data: ' + data);
        if (!data) {  // !response.ok
          this.msg = "Unsuccessful!";
        } else {
          this.persons = data;
          this.msg = "Successful!";  
        }
      })
      .catch(error => {
        // console.log("error" + error);
        this.err = error
      })
    }
  },
  created: function() {
    this.get(this.dbapi);
  }
}
</script>

<style />