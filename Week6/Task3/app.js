Vue.createApp({
    data() {
      return {
        selected: 'Small',
        options: [
          { text: 'XS', value: 'Extra Small' },
          { text: 'S', value: 'Small' },
          { text: 'M', value: 'Medium' },
          { text: 'L', value: 'Large' },
          { text: 'XL', value: 'Extra Large' }
        ]
      }
    }
}).mount('#v-model-select-dynamic')