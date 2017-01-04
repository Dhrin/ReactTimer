var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
    	it('should set state to started and countdown', (done) => {
    		//done let the test run as step by step
    		var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    		countdown.handleSetCountdown(10);

    		expect(countdown.state.count).toBe(10);
    		expect(countdown.state.countdownStatus).toBe('started');

    		setTimeout(() => {
    			expect(countdown.state.count).toBe(9);
    			// call done to stop the test
    			done();
    		}, 1001);
    	});
    });

    describe('handleSetCountdown', () => {
    	it('should not countdown to -number', (done) => {
    		//done let the test run as step by step
    		var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    		countdown.handleSetCountdown(1);

    		setTimeout(() => {
    			expect(countdown.state.count).toBe(0);
    			// call done to stop the test
    			done();
    		}, 3001);
    	});
    });
});