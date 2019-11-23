import React, {Component} from "react";
import "./App.css";
import Header from "./Components/Header";
import axios from 'axios';
import PastDays from './Components/PastDays'
import Daily from './Components/Daily'

class App extends Component {
  constructor() {
    super();

    this.state = {
      entry: []
    };
  }

  componentDidMount(){
    axios.get('/api/journal').then(res => {
      this.setState({
        entry: res.data
      })
    })
  }

  newEntry(body){
    axios.put('/api/journal').then(res => {
      this.setState({
        entry: res.data
      })
    })
  }

  render() {
    let past = this.state.entry.map((el, index) => {
      return <PastDays key={index} completed={el.completed} note={el.task}/>
    })
    return (
      <div className="App">
        <Header />
        <Daily />
        {past}
      </div>
    );
  }
}

export default App;