const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        { text: "Fare passeggiata", done: true },
        { text: "Leggere libro", done: false },
        { text: "Fare Sport", done: true },
        { text: "Meditare", done: false },
      ],
      newTodo: ''
    };
  },
  methods: {
    removeTodo: function(index) {
      this.todos.splice(index, 1);
    },
    addTodo: function() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({ text: this.newTodo, done: false });
        this.newTodo = '';
      }
    },

    markTodo: function(index) { 
        this.todos[index].done = true;

    }
  }
}).mount("#app");
