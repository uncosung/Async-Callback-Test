import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.populateData = this.populateData.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    // axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
    //   .then((res) => {
    //     this.setState({
    //       drinks: res.data.drinks
    //     })
    //   })
    // $.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka', (data) => {
    //   this.setState({
    //     drinks: data.drinks
    //   })
    // })
  }
  populateData() {
    axios.post('/api/route1', [
      {
        name: 'Eric',
        location: 'Orange County'
      },
      {
        name: 'Jonathan',
        location: 'Los Angeles'
      },
      {
        name: 'Julian',
        location: 'Oahu'
      }])
      .then((res) => {
        this.fetchData();
      })
  }
  fetchData() {
    axios.get('/api/route2')
    .then((res) => {
      this.setState({
        people: res.data
      })
    })
  }
  handleClick() {
    this.populateData();
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click to populate data</button>
        {this.state.people.map((person) => (
          <div>
            <div>{person.name}, {person.location}</div>
          </div>
        ))}
      </div>
    )
  }
}