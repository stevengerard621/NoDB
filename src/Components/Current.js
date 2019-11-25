import React, {Component} from 'react'
import Axios from 'axios';
import '../../src/App.css'


class Current extends Component{
    constructor(){
        super();

        this.state = {
            completed: true
        }

        this.editComplete = this.editComplete.bind(this)
        this.saveComplete = this.saveComplete.bind(this)
    }



    editComplete(id, body){
        Axios.put(`/api/journal/${id}`, body).then(res => {
            this.setState({entry: res.data})
            this.props.cleanSlate()
        }); 
    }

    saveComplete(){
    
        this.editComplete(this.props.id, {completed: this.state.completed})
        
    }



    

    render(){
        return (
            <section id='current'>
                 <button className="button-hover" id="current-button" onClick={() => this.saveComplete()}>COMPLETE</button>
                 <p id="current-font">{this.props.task}</p>
            </section>
        )
    }
}
export default Current 