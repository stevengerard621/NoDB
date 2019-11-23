//////////this will display the entry Obj///////////////////
import React, {Component} from 'react';
//////????axios???/////

class PastDays extends Component {
    constructor(){
        super();

        this.state = {
            entry: []
        }
        console.log(this.state.entry)
    }
    
    render(){
        return(
            <div className='past-days'>
                <p className='task'>{this.props.completed ? "Completed" : "Not Completed"}</p>
                <p className='task'>{this.props.note}</p>
            </div>
        )
    }
}

export default PastDays;