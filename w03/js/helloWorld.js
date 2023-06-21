var app = Vue.createApp({ //creating new Vue instance
  data() {
    return {
      message: 'Hello ...!',
      greeting: "Hello, my name is ...!",
      imgSrc: "images/flower.jpg"
    };
  }
}).mount('#app');
