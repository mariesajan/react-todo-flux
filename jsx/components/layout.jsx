import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state= {listItem: []};
  }
  updateTodoListItem(editText, index){
    let { listItem } = this.state;
    listItem[index] = editText;
    this.setState({listItem: listItem});
  }
  removeTodoListItem(index){
    let { listItem } = this.state;
    listItem.splice(index, 1);
    this.setState({listItem: listItem});
  }
  addTodoListItem(item){
    let { listItem } = this.state;
    let allItems = listItem.concat(item);
    this.setState({listItem: allItems});
  }
  render(){
    var activeLink = {
      color: "white",
      background: "blue"
    }
    let { listItem } =this.state;
    return(
      <div>
        <ul class="nav nav-pills nav-justified">
          <li><Link to="todos"
            activeStyle={activeLink}>Todos</Link></li>
          <li><Link to="/favorites" activeStyle={activeLink}>Favorites</Link></li>
          <li><Link to="/settings" activeStyle={activeLink}>Settings</Link></li>
        </ul>
        {React.cloneElement(this.props.children, {
                    item: listItem,
                    addTodoListItem: this.addTodoListItem.bind(this),
                    updateTodoListItem: this.updateTodoListItem.bind(this),
                    removeTodoListItem: this.removeTodoListItem.bind(this)
                  }
        )}
        {/*{this.props.children}*/}
      </div>
    );
  }
}
