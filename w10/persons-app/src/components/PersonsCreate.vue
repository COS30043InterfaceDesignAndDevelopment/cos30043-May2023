<template>
  <div>
    <h2>Persons - Create</h2>
    <form @submit.prevent>
      <fieldset>
        <label for="name">Name: </label><input type="text" name="name" id="name" v-model="nm"><p/>
        <label for="age">Age: </label><input type="number" name="age" id="age" v-model="age"><p/>
        <label for="imgVar1">White </label><input type="radio" name="imgVar" id="imgVar1" value="1" v-model="imgVar">  
        <label for="imgVar2">Yellow</label><input type="radio" name="imgVar" id="imgVar2" value="2" v-model="imgVar"><p/>
        <button @click="create(nm, age, imgVar)">Create</button><p/>
      </fieldset>
    </form>
    <p>Message : {{ msg }}</p>
    <p>Error: {{ err }}</p>      
  </div>
</template>

<script>
// export component
export default{
  name: "PersonsCreate",
  data: function() {
    return {
      dbapi: 'http://localhost/persons-app/api/apis.php',
      err: '', msg: '',
      nm: '', age: '', imgVar: ''
    }
  },
  methods: {
    // POST
    create: function (nm, age, img) {
      // POST request using fetch with error handling
      var url = this.dbapi;
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nm,
          age: age,
          fpath: 'img/smiley' + img + '.png'
        })
      };
      fetch(url, requestOptions)
        .then(response => {
          // TODO: add handling for response.ok
          //turning the response into the usable data
          return response.json();
        })
        .then(data => {
          //This is the data you wanted to get from url
          this.msg = "successful";
        })
        .catch(error => {
          this.err = error
        });
    }
  }
}
</script>

<style>
  input {
    margin: 5px
  }
</style>  