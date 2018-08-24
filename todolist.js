new Vue({
  el: '#app',
  data: {
    input: '',
    items: [
      'I have a pen',
      'I have an apple',
      'ahh apple-pen'
    ],
  },
  methods: {
    addItem() {
      this.items.push(this.input);
      this.input = '';
    },
    removeItem(index) {
      this.items.splice(index, 1);
    }
  }
});
