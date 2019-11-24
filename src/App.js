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
   let completedArr = this.state.entry.filter(element => element.completed)
    let incompleteArr = this.state.entry.filter(element => !element.completed)
    return (
      <div className="App">
        <Header />
        <h1>Add Task</h1>
        <AddTask cleanSlate={this.componentDidMount}/>
        <h1>current</h1>
         {incompleteArr.map(element => <Current cleanSlate={this.componentDidMount} id={element.id} task={element.task} completed={element.completed} />)}
         <h1>Completed</h1>
        {completedArr.map(element => <Completed cleanSlate={this.componentDidMount} id={element.id} task={element.task}/>)}  
      </div>
    );
  }
}

export default App;