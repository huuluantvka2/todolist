import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(id){
        this.props.onClickDelete(id);
    }
    handleEdit(item){
        this.props.onClickEdit(item);
    }
    render() {
        let {item} = this.props;
        return (
            <tr>
                <td className="text-center">{this.props.index + 1}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.filterLevel(item.level)}</td>
                <td>
                    <button onClick = {() => this.handleEdit(item)} type="button" className="btn btn-warning">Edit</button>
                    <button onClick = {() => this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
    filterLevel(level){
        let leVel = <span className="badge badge-danger">High</span>;
        if(level === 0){
            leVel = <span className="badge badge-success">Small</span>;
        }
        else if(level === 1){
            leVel = <span className="badge badge-warning">Medium</span>;
        }
        return leVel;
    }
}

export default Item;