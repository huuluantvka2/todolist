import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    render() {
      let {items} = this.props;
      let elmItems = items.map((item,index) => (
        <Item 
          key ={index} 
          item ={item} 
          index ={index} 
          onClickDelete = {this.props.onClickDelete}
          onClickEdit = {this.props.onClickEdit}
          />
      ));
        return (
            <div className="panel panel-success mt-4 d-block">
              <div className="panel-heading">Danh sách</div>
              <table className="table table-hover ">
                <thead>
                  <tr>
                    <th style={{width: '10%'}} className="text-center">#</th>
                    <th>Tên công việc</th>
                    <th style={{width: '20%'}} className="text-center">Level</th>
                    <th style={{width: '20%'}}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {elmItems}
                </tbody>
              </table>
            </div>
        );
    }
}

export default List;