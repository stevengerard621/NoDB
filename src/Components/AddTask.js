import React, {Component} from 'react';
import '../../src/App.css'
import Axios from 'axios';

class AddTask extends Component {
    constructor(){
        super();

        this.state = {
            task: ''
        }
    };

    inputHandler(str){
        this.setState({task: str})
    };

    resetForm(){
        document.getElementById("myForm").reset()
    }
    
    addTask(){
        Axios.post('/api/journal', this.state).then(res => {
            this.setState({
                entry: res.data
            })
            this.resetForm();
            this.props.cleanSlate();
        })
    }

    render(){
        return(
            <div id="addTask">
                <form id="myForm">
                <button className="button-hover" id="task-button" onClick={ () => this.addTask()}>Add Task</button>
                    <input id="task-input" placeholder=' + NEW TASK' type="text" onChange={(e) => this.inputHandler(e.target.value)}/>
                </form>
            </div>
        )
    }
}

export default AddTask;

