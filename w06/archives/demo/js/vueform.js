new Vue({
  el: '#app',
  data: {
    fname: '', lname: '', errors: []
  },
  methods: {
    checkForm: function(event) {
      let valid = true;
      if (!this.fname) {
        this.errors.push('You must specify a first name');
        valid = false;
      } 

      if (!this.lname) {
        this.errors.push('You must specify a last name');
        valid = false;
      } 
      
      if(!valid) {
        event.preventDefault();
      }
      
      return valid;
    }
  }
});