import React, {Component} from "react";
import "./App.css";
import Header from "./Components/Header";
import axios from 'axios';
import Completed from './Components/Completed'
import AddTask from './Components/AddTask'
import Current from './Components/Current'
class App extends Component {
  constructor() {
    super();

    this.state = {
      entry: []
    };
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  ////////AXIOS GET RESPONSE THAT DISPLAYS THE ENTRY=[]////////////
  componentDidMount(){
    axios.get('/api/journal').then(res => {
      this.setState({
        entry: res.data
      })
    })
  }

  render() {
    /////FILTER COMPLETE BOOLEAN/////////
   let completedArr = this.state.entry.filter(element => element.completed)
    let incompleteArr = this.state.entry.filter(element => !element.completed)
    return (
      <div className="App">
        <Header />
        <AddTask cleanSlate={this.componentDidMount}/>
         {incompleteArr.map(element => <Current cleanSlate={this.componentDidMount} id={element.id} task={element.task} completed={element.completed} />)}
        <div id="photo-div">
          <p id="complete-div">COMPLETE TASKS</p>
        </div>
        {completedArr.map(element => <Completed cleanSlate={this.componentDidMount} id={element.id} task={element.task}/>)}
        <div id="another-photo-div"></div>
      </div>
    );
  }
}

export default App;