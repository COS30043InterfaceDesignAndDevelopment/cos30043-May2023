new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  methods: {
    validate() {
      this.$refs.myForm.validate() // validate all inputs  
    }
  },
  data: () => ({
    valid: true, firstName: '', email: '',
    lastName: '',
    nameRules: [
      v => !!v || 'Name is required',
      // arrow function:
      // function(v) { 
      //   return (!!v || 'Name is required'); 
      // }
      // Operator '!!' (double 'negation'): 
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) || 'E-mail must be valid',
    ]
  })
})
