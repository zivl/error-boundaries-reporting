import React, { Component } from 'react';
import logo from './logo.svg';
import CodeBlock from './CodeBlock';
import { foo, callToExternalCode, failingCode } from './codeSamples';
import './App.css';

const codes = [{ label: 'Foo', func: foo }, { label: 'Failing Code', func: failingCode }];

class App extends Component {
  state = {
    codeToExecute: codes[0]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Error Boundaries & Error Reporting Example App</h1>
        </header>
        <div className="App-intro">
          {codes.map(code => <CodeBlock key={code.label} title={code.label} realFunction={code.func} codeString={code.func.toString()} />)}
          <div>
            <CodeBlock title={'Executor'} realFunction={callToExternalCode.bind(null, this.state.codeToExecute.func)} codeString={callToExternalCode.toString()} />
            <select onChange={evt => this.onCodeSelect(evt)}>
              {codes.map(code => <option key={code.label} value={code.label}>{code.label}</option>)}
            </select>
          </div>
        </div>
      </div>
    );
  }

  onCodeSelect(evt) {
    this.setState({codeToExecute: codes.find(code => code.label === evt.target.value)})
  }
}

export default App;
