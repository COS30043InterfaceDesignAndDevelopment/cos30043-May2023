<template>
  <div>
    <h2>Persons - Update</h2>
    <form  @submit.prevent>
      <label for="name">Name:</label> <input type="text" name="name" id="name" v-model="nm"><p/>
      <label for="age">Age:</label> <input type="text" name="gage" id="age" v-model="age"><p/>
      <button @click="updateData(nm, age)"> Update </button><p/>
    </form>
    <p>Message : {{ msg }}</p>
    <p>Error: {{err}}</p>    
  </div>
</template>

<script>
// export component
export default {
  name: "Persons",
  data: function () {
    return {
      dbapi: "http://localhost/persons-app/api/apis.php",
      err: "",
      msg: "",
      nm: '', age: 0
    };
  },
  methods: {
    // PUT
    updateData: function (nm, age) {
      // TODO: what if user wants to change name?
      var url = this.dbapi + '/name/' + nm;
      var self = this;
      // POST request using fetch with error handling
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nm,
          age: age,
        }),
      };
      fetch(url, requestOptions)
        .then((response) => {
          // TODO: add handling for response.ok
          //turning the response into the usable data
          return response.json();
        })
        .then((data) => {
          //This is the data you wanted to get from url
          self.msg = "successful";
        })
        .catch((error) => {
          self.err = error;
        });
    },
  },
};
</script>
  