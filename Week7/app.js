var pageTitle = new Vue({
  el: "#page_title",
  data: {
      pageTitle: 'Week7 Prac',
  }
});
Vue.component('child',{
  props: {
    text: {
      type: String,
      required: true
    }
  },
  template: `<div>{{ text }}</div>`
});

new Vue({
  el: '#app',
  data() {
    return {
      message: 'This is Task 2 using Props'
    }
  }
})

Vue.component('component1', {
  template: "<h2>This is Global Component - And yes this is working!</h2>",          

});

var globalComponent = new Vue({
  el:'#GlobalComponent',
  data:{
    message:"MyGlobalComponent",
  }
});

var localComponent = new Vue({
  el:'#LocalComponent',
  components:{
    "component2":{
      template:"<h3>This is my Local Component - and yes this is working?</h3>",
    },
  },
});
