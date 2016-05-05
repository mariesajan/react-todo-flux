import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component{
  constructor(props){
    super(props);
    let storage_item= [];
    if(typeof(Storage) !== "undefined"){
      let check_item = localStorage["item_key"];
      try{  // the stored items should be an array
        storage_item = JSON.parse(check_item);
        if(!Array.isArray(storage_item)){
          storage_item = [];
        }
      }
      catch(e){
        console.log('Error found. The stored value is incorrect',e);
      }
    }else{
      console.log("Local Storage not supported in the browser");
    }
    this.state= {listItem: storage_item};
  }

  componentDidUpdate(){
    const { listItem } = this.state;
    localStorage["item_key"] = JSON.stringify(listItem);
  }

  updateTodoListItem(editText, index){
    const { listItem } = this.state;
    listItem[index] = editText;
    this.setState({listItem: listItem});
  }

  removeTodoListItem(index){
    const { listItem } = this.state;
    listItem.splice(index, 1);
    this.setState({listItem: listItem});
  }
  addTodoListItem(item){
    const { listItem } = this.state;
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
      </div>
    );
  }
}
