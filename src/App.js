import React, { Component } from 'react';
import logo from './logo.svg';
import CodeBlock from './CodeBlock';
import { foo, callToExternalCode, failingCode } from './code-samples/codeSamples';
import { myCodeZone, otherCodeZone } from './errors/errorBoundaries';
import './App.css';

const codes = [
  { label: 'Foo', func: foo, toString: foo.toString() },
  { label: 'Failing Code (my own)', func: myCodeZone(failingCode), toString: failingCode.toString()},
  { label: 'Failing Code (others)', func: otherCodeZone(failingCode), toString: failingCode.toString() }
];

class App extends Component {
  state = {
    codeToExecute: codes[0]
  };

  render() {
    const { label, func, toString } = this.state.codeToExecute;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Error Boundaries & Error Reporting Example App</h1>
        </header>
        <div className="App-intro">
          <CodeBlock title={label} realFunction={func} codeString={toString} />
          <div>
            <CodeBlock title={'Executor'} realFunction={callToExternalCode.bind(null, func)} codeString={callToExternalCode.toString()} />
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
