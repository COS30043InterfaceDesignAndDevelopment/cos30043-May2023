# Vue App Development Process

1. Create **view(s)**
2. Identify and define the **model**
   1. based on the user input 
   2. group input into objects (if necessary); e.g. firstName, lastName can be grouped into a User object having these two properties.
3. Create the **view model**
   1. view-model binding using directives (based on step 2.1 above)
   2. define event handling methods for user interactions
      1. using other directives (e.g. `v-on:click`)