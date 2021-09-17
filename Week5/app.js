var app = new Vue({
    el:'#app',
    data: {
        yourname:'Nicola',
        tvshow:''
    }
})
Vue.component('towatch-movie', {
  props: ['towatch'],
  template: '<li>{{ towatch.title }}</li>'
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    myList: [
      { id: 0, title: 'The Sound of Music' },
      { id: 1, title: 'Princess Diaries' },
      { id: 2, title: 'Ella Enchanted' },
      { id: 2, title: 'Wild Child' }
    ]
  }
})