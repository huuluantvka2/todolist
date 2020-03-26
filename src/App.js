import React, { Component } from 'react';
import Title from './Component/Title';
import Control from './Component/Control';
import Form from './Component/Form';
import List from './Component/List';
import Contactfb from './Component/Contactfb';
import Task from './Component/Mock/Task';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : Task,
      isShowForm : false,
      strSearch : '',
      orderBy : '',
      orderDir : '',
      itemSelected : {
        id : ''
      }
    }
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleGo = this.handleGo.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleToggleForm(){
    this.setState({
      isShowForm : !this.state.isShowForm
    });
  }
  closeForm(){
    this.setState({
      isShowForm : false,
      itemSelected: {
        id : ''
      }
    });
  }
  handleGo(value){
    this.setState({
      strSearch : value
    });
  }
  handleSort(value1,value2){
    this.setState({
      orderBy : value1,
      orderDir : value2
    });
  }
  handleDelete(id){
    _.remove(this.state.items, function(item) {
      return item.id === id;
    });
    this.setState({
      items : this.state.items
    });
  }
  handleAdd(item){
    let items = this.state.items;
    if(item.id !== ''){
      items.forEach((elm,key) => {
        if(elm.id === item.id){
          items[key].name = item.name;
          items[key].level = item.level;
        }
      });
    }else{
      items.push({
        id : uuidv4(),
        level : +item.level,
        name : item.name
      });
    }
    this.setState({
      items : items,
      isShowForm:false,
      itemSelected: {
        id : ''
      }
    })
    localStorage.setItem('items' , JSON.stringify(items));
  }
  handleEdit(item){
    this.setState({
      itemSelected : item,
      isShowForm : true,
    });
  }
  render() {
    let {isShowForm,orderBy,orderDir,itemSelected} = this.state;
    let elmForm = null;
    if(isShowForm === true){
      elmForm = <Form 
                  onClickAdd = {this.handleAdd}
                  handleCancel = {this.closeForm}
                  itemSelected = {itemSelected}
                />
    }
    let search = this.state.strSearch.toLowerCase();
    let itemsOrigi = [...this.state.items];
    let items = [];
    items = _.filter(itemsOrigi, function(item) { return _.includes(item.name.toLowerCase(), search ) });
    items = _.orderBy(items, [orderBy], [orderDir]);
    return (
        <div className="container-fluid bg-snow">
          <div className="container">
            {/* TITLE : START */}
            <Title />
            {/* TITLE : END */}
            {/* CONTROL (SEARCH + SORT + ADD) : START */}
            <Control 
              handleToggleForm ={this.handleToggleForm} 
              isShowForm = {isShowForm} 
              onClickGo = {this.handleGo}
              orderBy = {orderBy}
              orderDir = {orderDir}
              onClickSort = {this.handleSort}
              />
            {/* CONTROL (SEARCH + SORT + ADD) : END */}
            {/* FORM : START */}
            {elmForm}
            {/* FORM : END */}
            {/* LIST : START */}
            <List 
              items = {items} 
              onClickDelete ={this.handleDelete}
              onClickEdit = {this.handleEdit}
              />
          </div>
          <Contactfb />
        </div>
    );
  }
}

export default App;
