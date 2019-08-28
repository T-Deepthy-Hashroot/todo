import React from 'react'
import {Button} from 'react-bootstrap'
class Encrypt extends React.Component {
    render() { 
        return ( 
            <div>
                <form onSubmit={this.props.encrypt}>
                   <Button type="submit">Add Task</Button>
                </form>
            </div>
        )
    }
  }
  
export default Encrypt