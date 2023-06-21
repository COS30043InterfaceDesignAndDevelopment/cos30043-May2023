//  form validation
var vm = new Vue({
  el: "#app",
  data: {
    fName: null,
    errors: []
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];
      var result = true;
      if (!this.fName) {
        this.errors.push("First name required")
        result = false;
      }
      if (!result)
        e.preventDefault(); //prevent the form from submitting
      return result;
    }
  }
})

