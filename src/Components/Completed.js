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
            <div className='past-days'>
                <h2><button onClick={ () => this.deleteTask(this.props.id)}>X</button>{this.props.task}</h2>
            </div>
        )
    }
}

export default Completed;