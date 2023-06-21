
	 // Variable declaration
	var countryVar="";
	var cityVar="";
	var nameVar="";
	var morningVar="";
	var eveningVar="";
	
	var allCities=
		[{country:'Australia', city:'Melbourne'},
		{country:'Australia', city:'Sydney'},
		{country:'Canada', city:'Vancouver'},
		{country:'Canada', city:'Toronto'}];
		
		
    //creating new vue instance
  	new Vue({
      el: '#app',//specifying the app
      data: { countryVar, cityVar, nameVar,allCities , morningVar, eveningVar},

      computed:{
        //custom filter for filtering phones in the select list
      	filteredCity: function(){
					return this.allCities.filter((c)=>{
							return c.country.toLowerCase().match(this.countryVar.toLowerCase());
					});
				}
			}

    });
