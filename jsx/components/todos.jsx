import React from "react";
import ReactDOM from "react-dom";
import Todo from "./todo";
import Footer from "./footer";

export default class Todos extends React.Component{
  constructor(props){
    super(props);
    this.state= { todoItem: ''};
    const { item } = this.props;
  }
  updateInputOnChange(event){
    this.setState({todoItem: event.target.value});
  }
  updateInputOnKeypress(event){
    if(event.key== 'Enter'){
      const { item } = this.props;
      const { todoItem } = this.state;
      this.setState({todoItem: ''});
      if(typeof this.props.addTodoListItem === 'function'){
        this.props.addTodoListItem(todoItem);
      }
    }
  }
  updateTodoListItem(editText, index){
    this.props.updateTodoListItem(editText, index);
  }
  removeTodoListItem(index){
    this.props.removeTodoListItem(index);
  }
  render(){
    const { todoItem } = this.state;
    let { item } = this.props;
    let defaultTodoContent;
    if(item.length <= 0){
      defaultTodoContent = <p>No items added!! </p>;
    }else{
      defaultTodoContent = null;
    }
    return(
      <div class="div_todo">
        <h2> Todo App </h2>
        <input value={todoItem} type="text" onKeyPress={this.updateInputOnKeypress.bind(this)}
          onChange= {this.updateInputOnChange.bind(this)} autoFocus="autofocus" />
        <br />
        <h3> Todo List </h3>
        {defaultTodoContent}
        <Todo removeListItem={this.removeTodoListItem.bind(this)}
          changeListItem={this.updateTodoListItem.bind(this)} items={item} />
        <Footer />
      </div>
    );
  }
}
