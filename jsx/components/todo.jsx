import React from "react";
import ReactDOM from "react-dom";

export default class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {editText: '', indexOfEdit: '', showButtonIndex: ''};
  }
  onDoubleClickListItem(index){
    this.setState({indexOfEdit: index, editText: this.props.items[index]});
    this.onMouseLeaveListItem();
  }
  onEditText(e){
    this.setState({editText: e.target.value});
  }
  updateListItem(e){
    if(e.key == 'Enter'){
      let index = this.state.indexOfEdit;
      this.setState({indexOfEdit: ''});
      this.props.changeListItem(this.state.editText, index);
    }
  }
  onBlurListItem(){
    let index = this.state.indexOfEdit;
    this.setState({indexOfEdit: ''});
    this.props.changeListItem(this.state.editText, index);
  }
  onDeleteClick(index){
    this.props.removeListItem(index);
  }
  onMouseEnterListItem(index){
    this.setState({showButtonIndex: index});
  }
  onMouseLeaveListItem(){
    this.setState({showButtonIndex: ''});
  }
  render(){
    const { items }= this.props;
    let { indexOfEdit, editText, showButtonIndex } = this.state;
    var createItem = function(currValue, index){
      let todoComponent, buttonComponent;
      if(showButtonIndex === index){
        buttonComponent = <button onClick={this.onDeleteClick.bind(this,index)}>
                            <span class="glyphicon glyphicon-trash"></span>
                          </button>;
      }
      else {
        buttonComponent = null;
      }

      if(currValue){
        if(indexOfEdit === index){
          todoComponent = <input class="class-list-item" type="text" value={editText} autoFocus="autofocus"
            onChange={this.onEditText.bind(this)} onKeyPress={this.updateListItem.bind(this)}
            onBlur={this.onBlurListItem.bind(this)} />;
        }else{
          todoComponent =
              <label class="class-list-item"
                onDoubleClick={this.onDoubleClickListItem.bind(this,index)}>{currValue}</label>;
        }
        return (
            <li key={index} onMouseEnter= {this.onMouseEnterListItem.bind(this,index)}
                onMouseLeave={this.onMouseLeaveListItem.bind(this,index)}>
              {todoComponent}
              {buttonComponent}
            </li>
      );
    }
  }.bind(this);
    return (<ul>{items.map(createItem)}</ul>);
  }
}
