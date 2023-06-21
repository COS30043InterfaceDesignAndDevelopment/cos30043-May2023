// Binding variables
var inputStr = '';
var rdoGender = '';
var rdoGender3 = '';
var inputNum = 0;

var students = ["Amy", "Cassie"];
var a=3;var b=2;
var string = "apple"
var flag=true;
var inputStr1 = '';
var inputStr2 = '';
var people = ["Bella",'Adrian', 'Max', 'Terry']
var myVar = '';

//Creating new Vue instance
new Vue({
  el: '#app',//specifying the app
  data: { //passing the data to be used in the app
    students,a,b,flag,inputStr1,inputStr2, checked, myVar,inputStr, rdoGender3,rdoGender,num:0,num2:0,
    person: {name:'Bella', age:'22'},
    personObj: [
      {name:'Brian', age:'22'},
      {name:'Josh', age:'23'},
      {name:'Nina', age:'20'},
      {name:'Renae', age:'19'},
    ],
  },
  filters: {
    uppercase: function(str){
      return str.toUpperCase();
    },
    lowercase: function(str){
      return str.toLowerCase();
    }
  }
});
