import React, { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }
  handleSort(value1,value2){
    this.props.onClickSort(value1,value2);
  }
    render() {
        return (
            <div className=" col-6 col-sm-6 col-md-6 col-lg-3">
                <div className="dropdown">
                  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                    Sắp Xếp <span className="caret" />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a onClick ={() => this.handleSort('name','asc')} className="dropdown-item" href="/#" role="button">Tên: A->Z</a></li>
                    <li><a onClick ={() => this.handleSort('name','desc')} className="dropdown-item" href="/#" role="button">Tên: Z->A</a></li>
                    <div className="dropdown-divider" />
                    <li><a onClick ={() => this.handleSort('level','asc')} className="dropdown-item" href="/#" role="button">Level: A->Z</a></li>
                    <li><a onClick ={() => this.handleSort('level','desc')} className="dropdown-item" href="/#" role="button">Level: Z->A</a></li>
                  </ul>
                </div>
            </div>
        );
    }
}

export default Sort;