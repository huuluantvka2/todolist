import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  constructor(props) {
    super(props);
    this.handleToggleForm = this.handleToggleForm.bind(this);
  }
  handleToggleForm(){
    this.props.handleToggleForm();
  }
    render() {
      let {isShowForm} = this.props;
      let showForm = <button onClick ={this.handleToggleForm} type="button" className="btn btn-info btn-block">Thêm công việc</button>
      if(isShowForm === true){
        showForm = <button onClick ={this.handleToggleForm} type="button" className="btn btn-secondary btn-block">Đóng</button>
      }
        return (
            <div className="row my-3">
              {/* SEARCH : START */}
              <Search onClickGo = {this.props.onClickGo} />
              {/* SEARCH : END */}
              {/* SORT : START */}
              <Sort 
                orderBy = {this.props.orderBy}
                orderDir = {this.props.orderDir}
                onClickSort = {this.props.onClickSort}
              />
              {/* SORT : END */}
              {/* ADD : START */}
              <div className="col-6 col-sm-6 col-md-10 col-lg-5">
                {showForm}
              </div>
              {/* ADD : END */}
            </div>
        );
    }
}

export default Control;