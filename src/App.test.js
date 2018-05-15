import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactTestUtils from 'react-dom/test-utils';
import Raven from 'raven-js';
import testKitInitializer from 'raven-testkit';



describe('testing :)', function () {
  Raven.config('https://123abc@sentry.io/12345', { release: '1.3.0', environment: 'test' });
  const testKit = testKitInitializer(Raven);

  beforeEach(() => {
    testKit.reset();
  })

  it('raven reports my bad code', () => {
    const div = document.createElement('div');
    const appNode = ReactTestUtils.renderIntoDocument(<App raven={Raven} />);
    const select = ReactTestUtils.findRenderedDOMComponentWithTag(appNode, 'select');
    const buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(appNode, 'button');
    expect(buttons.length).toBe(2);
    ReactTestUtils.Simulate.change(select, {target:{value:'Failing Code (my own)'}})
    ReactTestUtils.Simulate.click(buttons[1], {})
    expect(testKit.reports().length).toBe(1)
  });

  it('raven does not report others bad code', () => {
    const div = document.createElement('div');
    const appNode = ReactTestUtils.renderIntoDocument(<App raven={Raven} />);
    const select = ReactTestUtils.findRenderedDOMComponentWithTag(appNode, 'select');
    const buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(appNode, 'button');
    expect(buttons.length).toBe(2);
    ReactTestUtils.Simulate.change(select, {target:{value:'Failing Code (others)'}})
    ReactTestUtils.Simulate.click(buttons[1], {})
    expect(testKit.reports().length).toBe(0)
  });
});
