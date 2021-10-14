import React , { Component} from 'react';
export default class App extends Component {
  
  currentTime()  {
    return new Date().toLocaleTimeString();
  }
 
  constructor(props) {
    super(props);
    this.interval = null;
    this.isOdd = false;
    this.state= {
        time: this.currentTime()
    }
    if(this.state.time % 2 === 1  ) { 
      this.isOdd = true
    }
  }
  
  render() {
    return (
     
    <div className="App" style = {{backgroundColor : this.isOdd ? "white" : "black"}}>
     <h1 style = {{ color: this.isOdd ? "black" : "white"}}>Current Time : {this.state.time}</h1>
    </div>
  );
}
  componentDidMount() {
    this.interval = setInterval(()=> this.setState({ time: this.currentTime() }), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

