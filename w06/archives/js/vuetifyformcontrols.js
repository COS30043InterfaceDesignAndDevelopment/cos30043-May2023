var vm = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  methods: {
    validate() {
      this.$refs.myForm.validate() // validate all inputs  
    }
  },
  data: () => ({
    valid: true, firstName: '', email: '', sex: 'M', program: ['P02'], 
    states: ['VIC', 'NSW', 'WA'], selectedState: 'NSW',

    selectedState2: 'VIC',
    states2: [
      { state: 'Victoria', abbr: 'VIC' },
      { state: 'New South Wales', abbr: 'NSW' },
      { state: 'Western Australia', abbr: 'WA' }
    ],


    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],

    emailRules: [
      v => !!v || 'E-mail is required',
      v => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) || 'E-mail must be valid',
    ]
  })
})
