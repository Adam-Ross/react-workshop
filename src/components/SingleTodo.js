import React from 'react'

class SingleTodo extends React.Component {
    render() {
        return(
            <div className="singleTodo">
                <h1>{this.props.singleTodo.title}</h1>
                <p>UserId: {this.props.singleTodo.userId}</p>
            </div>
        )
    }
}

export default SingleTodo