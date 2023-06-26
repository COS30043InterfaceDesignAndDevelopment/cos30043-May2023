var unitsData = [{ "code": "ICT10001", "desc": "1 Problem Solving with ICT" },
{ "code": "COS10005", "desc": "2 Web Development" },
{ "code": "INF10003", "desc": "3 Introduction to Business Information Systems" },
{ "code": "INF10002", "desc": "4 Database Analysis and Design" },
{ "code": "COS10009", "desc": "5 pageIntroduction to Programming" },
{ "code": "INF30029", "desc": "6 Information Technology Project Management" },
{ "code": "ICT30005", "desc": "7 Professional Issues in Information Technology" },
{ "code": "ICT30001", "desc": "8 Information Technology Project" },
{ "code": "COS20001", "desc": "9 User-Centred Design" },
{ "code": "TNE10005", "desc": "10 Network Administration" },
{ "code": "COS20016", "desc": "11 Operating System Configuration" },
{ "code": "SWE20001", "desc": "12 Development Project 1 - Tools and Practices" },
{ "code": "COS20007", "desc": "13 Object Oriented Programming" },
{ "code": "COS30015", "desc": "14 IT Security" },
{ "code": "COS30043", "desc": "15 Interface Design and Development" },
{ "code": "COS30017", "desc": "16 Software Development for Mobile Devices" },
{ "code": "INF20012", "desc": "17 Enterprise Systems" },
{ "code": "ACC10007", "desc": "18 Financial Information for Decision Making" },
{ "code": "INF20003", "desc": "19 Requirements Analysis and Modelling" },
{ "code": "ACC20014", "desc": "20 Management Decision Making" },
{ "code": "INF30005", "desc": "21 Business Process Management" },
{ "code": "INF30003", "desc": "22 Business Information Systems Analysis" },
{ "code": "INF30020", "desc": "23 Information Systems Risk and Security" },
{ "code": "INF30001", "desc": "24 Systems Acquisition & Implementation Management" }]

Vue.component('paginate', VuejsPaginate) // creating new VueJSPaginate component

Vue.component('app-lookup2', // indicating the component tag
  {
    // ducmle: IMPROVED to allow configuration of paginate's parameters
    // defining data to be used in the component
    data: function () {
      return {
        units: unitsData,
        // ducmle: paginate parameters
        pageSize: 2, 
        pageRange: 5, marginPages: 1,
        pageCount: 0,
        currentPage: 1,
      }
    },
    // define the template for the component
    template: `
      <div>
        <h1>Unit Descriptions </h1>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <!-- Using v-for to loop units and list them -->
            <tbody>
              <tr v-for="unit in getItems" :key="unit.code" >
                <td>{{unit.code}}</td>
                <td>{{unit.desc}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!-- Vue Paginate template -->
        <!-- Sets the paginate parameters -->
        <paginate 
          :page-count="getPageCount"    
          :page-range="pageRange" 
          :margin-pages="marginPages"
          :click-handler="clickCallback" 
          :prev-text="'Prev'" 		
          :next-text="'Next'" 
          :container-class="'pagination'" 
          :active-class="'currentPage'"
          :page-class="'page-item'"
        >
        </paginate>
      </div>
      `
    // 	:page-count                 --Total count of pages. required   
    //	:page-range                 -- number of pages displayed, default 3.It is recommended to use an odd number, so that the same number of pages are displayed before and after the active page
    //	:margin-pages              --  The number of displayed pages for margins. default: 1
    //	:click-handler="clickCallback" 
    //	:prev-text=" 'Prev' " 		
    //	:next-text="'Next'" 
    //	:container-class="'pagination'" 
    //	:page-class="'page-item'"
    ,computed: {
      // compute the current page items (relative from the currentPage's position)
      getItems: function () {
        let end = this.currentPage * this.pageSize;  // total 24 units, suppose 2 per page, 12 pages
        let start = end - this.pageSize;
        return this.units.slice(start, end);
      },
      getPageCount: function () {
        return Math.ceil(this.units.length / this.pageSize);
      }
    },
    methods: {
      clickCallback: function (pageNum) {
        this.currentPage = Number(pageNum);
      }
    }
  });

//create new Vuetify instance
//create new vue instance and indicate the id for vue app
new Vue({
  el: '#app',
  vuetify: new Vuetify()
});
