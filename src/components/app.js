import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>FasticBoss Portfolio</h1>
        <h3>
          {moment().format('MMMM Do YYYY, h:MM:ss a')}
        </h3>
        <li class="li"> Change me im a li tag </li>
      </div>
      
    );
  }
}
