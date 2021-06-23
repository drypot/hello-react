import React, {useState} from 'react';
import ReactDOM from "react-dom";

export default function Example() {

  const name = 'Josh Perez';

  function Welcome(props) {
    return <p>Hello, {props.name}</p>;
  }

  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: new Date() };
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div>
          <p>It is {this.state.date.toLocaleTimeString()}.</p>
        </div>
      );
    }
  }

  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isToggleOn: true };

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    render() {
      return (
        <button onClick={ this.handleClick } className={ this.props.className } >
          { this.state.isToggleOn ? 'ON' : 'OFF' }
        </button>
      );
    }
  }

  return (
    <div className="space-y-4">
      <div className="border rounded p-4">
        <p>Simple Component.</p>
        <p>Hello, {name}</p>
        <p>Escaping: {"&<>%20"}</p>
      </div>
      <div className="border rounded p-4">
        <Clock/>
      </div>
      <div className="border rounded p-4">
        <Welcome name="Sara"/>
        <Welcome name="Cahal"/>
        <Welcome name="Edite"/>
      </div>
      <div className="border rounded p-4">
        <Toggle className="btn"/>
      </div>
    </div>
  );
}


