import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Task_name : '',
      Task_level : 0,
      Task_id : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name] : value
    });
  }
  handleCancel(){
    this.props.handleCancel();
  }
  handleSubmit(event) {
    event.preventDefault();
    let item = {
      name : this.state.Task_name,
      level : + this.state.Task_level,
      id : this.state.Task_id
    }
    this.props.onClickAdd(item);
  }
  componentDidMount() {
    const item = this.props.itemSelected;
        if(item.id !== ''){
            this.setState({
                Task_name: item.name,
                Task_level: item.level,
                Task_id : item.id
            });
        }
  }
  componentWillReceiveProps(nextProps){
    const item = nextProps.itemSelected;
        if(item.id !== ''){
            this.setState({
                Task_name: item.name,
                Task_level: item.level,
                Task_id : item.id
            });
        }
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   let item = nextProps.itemSelected
  //   if (item.name !== prevState.Task_name) {
  //     return ({ 
  //       Task_name : item.name,
  //       Task_level : + item.level,
  //       Task_id : item.id
  //      })
  //   } else return null;
  // }
    render() {
        return (
            <div className="row">
              <div className="col-12 col-sm-12 col-md-9 col-lg-12 d-flex justify-content-end">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                  <div className="form-group mt-3 mt-sm-0">
                    <label className="sr-only">label</label>
                    <input type="text" value={this.state.Task_name} onChange={this.handleChange} name = "Task_name" className="form-control" placeholder="Tên công việc" />
                  </div>
                  <div className="form-group mt-3 mt-sm-0">
                    <label className="sr-only">label</label>
                    <select className="form-control" value={this.state.Task_level} onChange={this.handleChange} name = "Task_level" required="required">
                      <option value={0}>Small</option>
                      <option value={1}>Medium</option>
                      <option value={2}>High</option>
                    </select>
                  </div>
                  <div className="btn-group">
                    <button onClick ={this.handleSubmit} type = "submit" className="btn btn-primary">Submit</button>
                    <button onClick = {this.handleCancel} type ="button" className="btn btn-outline-dark">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
        );
    }
}

export default Form;