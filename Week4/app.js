var app = new Vue({
    el: '#app',
    data:{
        message: 'Flowers with Colors',
        name:"Nicola",
        flower1: "Tulips",
        flower2: "Lavenders",
        flower3:"Roses"
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})
var app3 = new Vue({
    el: '#app-3',
    data: {
      showOwner: false
    },
    methods: {
        toggleOwner: function(){
          this.showOwner = !this.showOwner
        }
    }
})
var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Start with Declarative Rendering' },
        { text: 'Add some Conditionals & Loops' },
        { text: 'Wrap up this week Prac by polishing proposal' }
      ]
    }
  })