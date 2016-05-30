import { EventEmitter } from "events";
import dispatcher from "./Dispatcher";

class TodoStore extends EventEmitter{
  constructor(){
    super();
    this.item = ['Washing Clothes',
                'Cleaning toilets',
                'Studying']
  }
  getItem(){
    return this.item;
  }
  createTodo(item){
    console.log(this);
    console.log('createTodo function...', item);
    this.item.push(item);
    this.emit("change");
  }
  deleteTodo(item){
    console.log('in deleteTodo fn...', item);
    var index = this.item.indexOf(item);
    if(index > -1){
      this.item.splice(index,1);
      this.emit("change");
    }
  }
  receiveTodos(item){
    console.log('in receive todos....', item);
    this.item = item;
    this.emit('change');
  }
  handleActions(action){
    console.log('action received in Todo store', action);
    switch(action.type){
      case 'CREATE_TODO':
        console.log('switch case CREATE_TODO...');
        this.createTodo(action.item);
        break;
      case 'DELETE_TODO':
        this.deleteTodo(action.item);
        break;
      case 'RECEIVE_TODOS':
        this.receiveTodos(action.item);
        break;
    }
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.todoStore = todoStore;

window.dispatcher = dispatcher;
export default todoStore;
