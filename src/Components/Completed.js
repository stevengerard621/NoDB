//////////this will display the entry Obj///////////////////
import React, {Component} from 'react';
import '../../src/App.css';
import Axios from 'axios';

class Completed extends Component {
    constructor(){
        super();

        this.state = {
            entry: []
        }
        this.deleteTask = this.deleteTask.bind(this)
    }

    deleteTask(id){
        Axios.delete(`/api/journal/${id}`).then(res => {
            this.setState({entry: res.data})
            this.props.cleanSlate();
        })
    }

    render(){
        return(
            <div className='completed'>
                <button className="button-hover" id="completed-button" onClick={ () => this.deleteTask(this.props.id)}>REMOVE</button>
                <p id="completed-font">{this.props.task}</p>
            </div>
        )
    }
}

export default Completed;