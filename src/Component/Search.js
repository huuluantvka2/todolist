import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleGo = this.handleGo.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleChange(event) {
    this.setState({strSearch: event.target.value});
  }

  handleGo(){
    this.props.onClickGo(this.state.strSearch)
  }
  handleClear(){
    this.setState({strSearch: ''});
    this.props.onClickGo('')
  }
    render() {
        return (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
                <div className="input-group">
                  <input type="text" value={this.state.strSearch} onChange={this.handleChange} className="form-control" ref="search" placeholder="Tìm kiếm..." />
                  <span className="input-group-btn">
                    <div className="btn-group">
                      <button className="btn btn-info" type="submit" onClick = {this.handleGo}>Go!</button>
                      <button className="btn btn-warning" type="submit" onClick = {this.handleClear}>Xóa!</button>
                    </div>
                  </span>
                </div>
            </div>
        );
    }
}

export default Search;