var unitsData=[{"code":"ICT10001", "desc":"Problem Solving with ICT" },
{"code":"COS10005", "desc":"Web Development" },
{"code":"INF10003", "desc":"Introduction to Business Information Systems" },
{"code":"INF10002", "desc":"Database Analysis and Design" },
{"code":"COS10009", "desc":"pageIntroduction to Programming" },
{"code":"INF30029", "desc":"Information Technology Project Management" },
{"code":"ICT30005", "desc":"Professional Issues in Information Technology" },
{"code":"ICT30001", "desc":"Information Technology Project" },
{"code":"COS20001", "desc":"User-Centred Design" },
{"code":"TNE10005", "desc":"Network Administration" },
{"code":"COS20016", "desc":"Operating System Configuration" },
{"code":"SWE20001", "desc":"Development Project 1 - Tools and Practices"},
{"code":"COS20007", "desc":"Object Oriented Programming"},
{"code":"COS30015", "desc":"IT Security"},
{"code":"COS30043", "desc":"Interface Design and Development"},
{"code":"COS30017", "desc":"Software Development for Mobile Devices" },
{"code":"INF20012", "desc":"Enterprise Systems" },
{"code":"ACC10007", "desc":"Financial Information for Decision Making" },
{"code":"INF20003", "desc":"Requirements Analysis and Modelling" },
{"code":"ACC20014", "desc":"Management Decision Making" },
{"code":"INF30005", "desc":"Business Process Management" },
{"code":"INF30003", "desc":"Business Information Systems Analysis" },
{"code":"INF30020", "desc":"Information Systems Risk and Security" },
{"code":"INF30001", "desc":"Systems Acquisition & Implementation Management" }]

const app = Vue.createApp({ })

app.component('app-lookup2', // indicating the component tag
{
	components: { // register Paginate as a subcomponent of this
			paginate: VuejsPaginateNext,
	},
    // defining data to be used in the component
    data: function() {
      return {
        currentPage: 1,
        units: unitsData
      }
    },
    // define the template for the component
    template: `
    <div>
		<h1>Unit Descriptions </h1>
      <v-table>
       <template v-slot:default>
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <!-- Using v-for to loop units and list them -->
        <tbody>
          <tr v-for="unit in getItems" :key="unit.code"  >
            <td>{{unit.code}}</td>
            <td>{{unit.desc}}</td>
          </tr>
        </tbody>
       </template>
      </v-table>
  	</div>
    <!-- Vue Paginate template -->
    <paginate 
      :page-range="6" 
      :page-count="4"    
      :click-handler="clickCallback" 
      :prev-text="'Prev Page'" 		
      :next-text="'Next Page'" 
      :container-class="'pagination'" 
      :page-class="'page-item'"
      :active-class="'active'"
      >
    </paginate>
    `,
	// 	:page-count                 --Total count of pages. required   
	//	:page-range                 -- number of pages displayed, default 3.It is recommended to use an odd number, so that the same number of pages are displayed before and after the active page
	//	:margin-pages              --  The number of displayed pages for margins. default: 1
	//	:click-handler="clickCallback" 
	//	:prev-text=" 'Prev' " 		
	//	:next-text="'Next'" 
	//	:container-class="'pagination'" 
	//	:page-class="'page-item'"
    computed: {
      getItems: function() {
          let current = this.currentPage * 6;  // total 24 units, suppose 2 per page, 12 pages
          let start = current - 6;
          return this.units.slice(start, current);
        }
    },
    methods: {
      //sets the clicked page
      clickCallback: function(pageNum) {
        this.currentPage = Number(pageNum);
      }
    }
});


const vuetify = Vuetify.createVuetify( )  
app.use(vuetify)
app.mount('#app')
 