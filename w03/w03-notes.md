# Vue.createApp()
explains (or ask students questions about) the syntax of this function:

```
Vue.createApp({
		data() { return {
			someUrl: "https://swin.edu.au",
			imageSrc: "flower.jpg",
			}  
		}					
	}).mount('#app');
```

- `Vue`: a class the provides the Vue's API
- `createApp`: creates a new application object (instance)
  - input object `{...}` is the root component of the app
  - output: the application instance
- `data()`: data method of the root component, which returns the model object that is going to be used on the view
- `return {...}`: returns a JS object, whose properties represent the model:
  - `imageSrc: "flower.jpg"`: `someUrl` is a property, `"flower.jpg"` is the initial value of the property. Value can be changed if the property is bounded to an input element of the view (using the `v-model` directive).
- `mount('#app')`: render the content of the app's root component to the view container, whose id is specified in the argument (`app`)
  - returns the root component instance

# helloWorld.html
- demo how to add a new v-bind for the flower's image URL that points to `https://swin.edu.au` (using `<a v-bind:href="imageUrl">...</a>`)

## To access the Vue object globally

There are two methods:
### Using Javascript
1. In your page, assign the Vue object to a global variable, e.g. `vue`
2. Press F12 to open to browser's dev-tool
3. access Vue object properties via `console.log`
e.g. 
```
console.log(vue._data['inputStr'])
```

### Using the browser's Vue-devtools extension 
Install Vue-devtools extension on the browser to view and manipulate model and view data directly from the console

1. Install the extension 
2. Press F12 to open the browser dev-tool
3. Look for Vue tab, click on Root to view the Vue object state
   1. can change the state by clicking the edit button next to a state variable and entering a new view
4. Alternatively, access & change model variables from the console
  - After clicking on the Root node to have it bound to the global variable `$vm0`:
  - access state variable via `$vm0`, e.g.: `$vm0.progName = 'Js'`

# References
## Javascript
URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript

1. Object expression syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals