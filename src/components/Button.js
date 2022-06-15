import React from 'react'

class Button extends React.Component {
    render() {

        const handleClearSingleTodo = () => {
            this.props.clearSingleTodo()
        }

        return(
            <div className="button" onClick={handleClearSingleTodo}>Back</div>
        )
    }
}

export default Button 