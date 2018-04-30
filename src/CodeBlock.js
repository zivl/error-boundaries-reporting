import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/light";
import js from 'react-syntax-highlighter/languages/hljs/javascript';
import sunburst from 'react-syntax-highlighter/styles/hljs/sunburst';
import './CodeBlock.css';

registerLanguage('javascript', js);

class CodeBlock extends Component {
    render() {
        return (
            <div className='code-block'>
                <h2>{this.props.title}</h2>
                <div className='syntax'>
                    <SyntaxHighlighter language={'javascript'} style={sunburst}>{this.props.codeString}</SyntaxHighlighter>
                </div>
                <div className='controller'>
                    <button onClick={() => this.runCode()}>Run Code</button>
                </div>
            </div>
        );
    }

    runCode() {
        this.props.realFunction();
    }
}

CodeBlock.propTypes = {
    codeString: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    realFunction: PropTypes.func.isRequired
};

export default CodeBlock;
