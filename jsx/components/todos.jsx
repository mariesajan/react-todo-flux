import React from "react";
import ReactDOM from "react-dom";
import Todo from "./todo";

export default class Todos extends React.Component{
  constructor(props){
    super(props);
    this.state= { todoItem: ''};
    const { item } = this.props;
    console.log('constructor of Todos..',item);
  }
  updateInputOnChange(event){
    this.setState({todoItem: event.target.value});
  }
  updateInputOnKeypress(event){
    if(event.key== 'Enter'){
      const { item } = this.props
      console.log('after Enter pressed:',this.props);
      const { todoItem } = this.state;
      this.setState({todoItem: ''});
      console.log('in console type of:',typeof this.props.addTodoListItem);
      if(typeof this.props.addTodoListItem === 'function'){
        console.log('inside typeof if...');
        this.props.addTodoListItem(todoItem);
      }
    }
  }
  updateTodoListItem(editText, index){
    this.props.updateTodoListItem(editText, index);
  }
  removeTodoListItem(index){
    console.log('in removeTodoListItem...', index);
    this.props.removeTodoListItem(index);
  }
  render(){
    const { todoItem } = this.state;
    let { item } = this.props;
    console.log('item is... ',item);
    return(
      <div class="div_todo">
        <h3>Todo</h3>
        <input value={todoItem} type="text" onKeyPress={this.updateInputOnKeypress.bind(this)}
          onChange= {this.updateInputOnChange.bind(this)} autoFocus="autofocus" />
        <br />
        <p>Items added are: </p>
        <Todo removeListItem={this.removeTodoListItem.bind(this)}
          changeListItem={this.updateTodoListItem.bind(this)} items={item} />
      </div>
    );
  }
}
