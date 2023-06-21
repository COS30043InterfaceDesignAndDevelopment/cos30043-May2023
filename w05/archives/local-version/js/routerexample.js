//Defining the list of units in an array
var units = [{
    code: 'Math',
    desc: 'We learn Mathematics in this unit.' 
  },
  {
    code: 'English',
    desc: 'There are lots of fun classes' 
  },
  {
    code: 'Dancing',
    desc: 'Dancing classes with excellent teachers' 
  }
];


// creating a component to pass in the router
const Unit = {
  data: function() {  return {    units    }  },
	//define the template for the route results

	//A dynamic segment is denoted by a colon :   When a route is matched, the value of the dynamic segments will be exposed as this.$route.params
	
  template: `<div>
	 <hr>
		 <h2>Details of {{ $route.params.id }}</h2>
		 <ul v-for="unit in filteredUnits">
			 <li><strong>Code: </strong>{{unit.code}}</li>
			 <li><strong>Description: </strong>{{unit.desc}}</li>
		 </ul>
	 </div>`,

  computed: {
    //filter function (returns the selected unit object )
    filteredUnits: function() {
      return this.units.filter(unit => unit.code.toLowerCase().match((this.$route.params.id.toLowerCase())));
    }
  }
}

// Creating the VueRouter
const router = new VueRouter({
  routes: [{
      path: '/unit/:id',
      component: Unit
    } //defining path and the component
  ]
})

// creating component for the lookup table
Vue.component('example_component', {
  data: function() {
    return {
      units
    }
  },
	//defining template for the app
  template: `
		<div>
				<h1>Subject Information</h1>
					<table >
						<tr>
							<th>Code</th>
							<th>Description</th>
							<th>More Info</th>
						</tr>
						<tr v-for="unit in units">
							<td>{{ unit.code }}</td>
							<td>{{ unit.desc }}</td>
							<td><router-link :to="{ path:'/unit/'+unit.code }">Show Detail</router-link></td>
						</tr>

					</table>
			
					<router-view ></router-view>
				
		</div>
		`
})

//Creating new Vue instance
new Vue({
  router , //passing router instance
  el: "#app", //specifying the html element
		
});
