const months = [
  'January', 'Feburary','March','April','May','June',
  'July','August','September','October','November','December'
];
const days = [
  'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'
];

let app = new Vue({  //creating new Vue instance
  el: '#app', //Provide the Vue instance an existing DOM element to mount on.
  data:  {sele: 'week', days, months},    //passing variables into vue app
  computed: {
    isMonth: function() {
      console.log('computed: isMonth');
      return this.sele == 'month';
    },
    psele: {
      get: function() {
        return this.sele;
      }, 
      set: function(newVal) {
        this.sele = newVal;
      }
    }
  },
  methods: {
    setSele: function(newVal) {
      this.sele = newVal;
    },
    isWeek: function() {
      console.log('method: isWeek');

      return this.sele == 'week';
    },
  }
});