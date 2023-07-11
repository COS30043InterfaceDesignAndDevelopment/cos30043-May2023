<template>
  <div>
    <h2>Persons - Delete</h2>
    <form @submit.prevent>
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" v-model="nm">
      <button @click="deleteData(nm)"> Delete </button><p/>
    </form>
    <p>Message : {{ msg }}</p>
    <p>Error: {{err}}</p>
  </div>
</template>

<script>
// export component
export default{
  name: "PersonsDelete",
  data: function() {
    return {
      dbapi: 'http://localhost/persons-app/api/apis.php/',
      err: '', msg: '',
      nm: ''
    }
  },
  methods: {
    // DELETE
    deleteData: function (nm) {
      // POST request using fetch with error handling
      var url = this.dbapi + '/name/' +nm;
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nm
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
  