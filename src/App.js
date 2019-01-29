import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      started: false,
      secondsLeft: 1500,
      workSeconds: 1500,
      restSeconds: 300,

    }
  }

  twoDigits = (num) => {
    return num > 9 ? "" + num : "0" + num;
  }
  convertH = (seconds) => {
    const h = this.twoDigits(Math.floor(seconds / 3600));
    return (h);
  };
  convertM = (seconds) => {
    const m = this.twoDigits(Math.floor((seconds % 3600) / 60));
    return (m);
  };

  convertS = (seconds) => {
    const s = this.twoDigits(Math.floor(seconds % 3600 % 60));
    return (s);
  };


  handleFinish = () => {
    this.setState({
      started: false,
      secondsLeft: this.state.restSeconds,
    })
    alert(this.convertH(this.state.workSeconds) + ":" + this.convertM(this.state.workSeconds) + ":" + this.convertS(this.state.workSeconds) + " work time was finished! You can take a rest now.");

  }

  updateTimer = () => {

    let secondsLeft = this.state.secondsLeft;
    if (secondsLeft < 1)
      this.handleFinish();
    else {
      secondsLeft -= 1;
      this.setState({
        secondsLeft: secondsLeft,
      });
      console.log(this.state.secondsLeft);
    }
  }

  handleStart = () => {
    this.setState({
      started: true,
    });
    this.interval = setInterval(() => this.updateTimer(), 1000);
  }

  handleStop = () => {
    this.handlePause();
    this.setState({
      secondsLeft: this.state.workSeconds,
    });
  }

  handlePause = () => {
    this.setState({
      started: false,
    });
    clearInterval(this.interval);
  }

  render() {
    if (!this.state.started)
      return (
        <div className="App">
          <img className="logo" src="https://www.foodandhealth.com/images/clipart/Tomato.png"></img>
          <div className="timer" >
            <p>{this.convertH(this.state.secondsLeft)}:{this.convertM(this.state.secondsLeft)}:{this.convertS(this.state.secondsLeft)}</p>
          </div>
          <div className="btn-container">
            <div className="btn-run" onClick={() => this.handleStart()}>
              Run
            </div>
          </div>
          <p className="rest" onClick={() => this.handleFinish()}>take a rest</p>
        </div>
      );
    return (
      <div className="App">
        <img className="logo" src="https://www.foodandhealth.com/images/clipart/Tomato.png"></img>
        <div className="timer" >
          <p>{this.convertH(this.state.secondsLeft)}:{this.convertM(this.state.secondsLeft)}:{this.convertS(this.state.secondsLeft)}</p>
        </div>
        <div className="btn-container">
          <div className="btn-pause" onClick={() => this.handlePause()}>
            Pause
          </div>
          <div className="btn-stop" onClick={() => this.handleStop()}>
            Stop
          </div>
        </div>
      </div>
    );
  }
}

export default App;
