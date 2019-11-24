import React, {Component} from 'react';
// import PastDays from './PastDays'
// import Axios from 'axios';
import '../../src/App.css'
import Axios from 'axios';

class AddTask extends Component {
    constructor(){
        super();

        this.state = {
            task: ''
        }
    };

    inputHandler(val){
        this.setState({task: val})
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
            <div id="addTask" >
                <form id="myForm">
                    <input placeholder='Dont be a Bum' type="text" onChange={(e) => this.inputHandler(e.target.value)}/>
                </form>
                <button onClick={ () => this.addTask()}>Add Task</button>
            </div>
        )
    }
}

export default AddTask;

