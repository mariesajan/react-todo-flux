import dispatcher from  "./Dispatcher";

export function createTodo(item){
  dispatcher.dispatch({
    type: "CREATE_TODO",
    item: item
  });
}

export function deleteTodo(item){
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    item: item
  });
}

export function reloadTodos(){
  dispatcher.dispatch({type: "FETCH_TODO"});
  setTimeout(() => {
    dispatcher.dispatch({
      type: "RECEIVE_TODOS",
      item: ["Hug Yor Wife", "Go for shopping again"] })
    }
  ,1000);
}
