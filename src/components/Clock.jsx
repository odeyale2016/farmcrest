import React, { Component } from 'react';
class Clock extends React.Component {
    render() { 
        return <div><h2>
            Countdown: {this.state.date.toLocaleString()}
        </h2></div>;
    }
}
 
export default Clock;