import React, { Component } from 'react';
import PropTypes from "prop-types";

class TodoItem extends Component {
    state = {  }
    getStyle = () => {
        if (this.props.todo.completed) {
            return{
                backgroundColor: '#f4f4f4',
                borderBottom: '1px #ccc dotted',
                padding : '10px',
                textDecoration :'line-through',
                color: 'blue' 
            }
        }else {
            return{
                backgroundColor: '#f4f4f4',
                borderBottom: '1px #ccc dotted',
                padding : '10px',
                textDecoration :'none',
                color: 'red' ,
                fontStyle: 'italic',
                fontWeight: 'bold'
            }
        }
        
    }


    render() { 
        const { id , title } = this.props.todo;
        return ( 
            <div  style={this.getStyle()}>
                
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} name="" id=""/> {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
                
            </div>
            
         );
    }
}
 

TodoItem.protoTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    padding : '6px 8px',
    backgroundColor: 'red',
    color : 'white',
    borderRadius : "50%",
    border : 'none',
    cursor: 'pointer',
    float: 'right',
    outline: 'none'
}

export default TodoItem;