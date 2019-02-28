import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const APIKey = '144702e0c9d6b4582e76c83ca798361d'

class App extends Component {

  state = {
    value: '',
    date: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    city: '',
    clouds: '',
    err: false,

  }
  handleChangeInput = e => {
    this.setState({
      value: e.target.value,
    })
  }
  // handleSubmitForm = e => {
  //   e.preventDefault();
  //   const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`

  //   fetch(API)
  //     .then(response => {
  //       if (response.ok) {
  //         return response
  //       }
  //       throw Error('Nie działa')
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       const date = new Date().toLocaleString()
  //       this.setState(prevState => ({
  //         err: false,
  //         date: date,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //         city: prevState.value,
  //         clouds: data.clouds.all,
  //       }))
  //     })
  //     .catch(err => {
  //       this.setState(prevState => ({
  //         err: true,
  //         city: prevState.value,
  //       }))
  //     })
  // }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value === this.state.value) return;
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error('Nie działa')
      })
      .then(response => response.json())
      .then(data => {
        const date = new Date().toLocaleString()
        this.setState(prevState => ({
          err: false,
          date: date,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          clouds: data.clouds.all,
          city: prevState.value,
        }))
      })
      .catch(err => {
        this.setState(prevState => ({
          err: true,
          city: prevState.value,
        }))
      })
  }

  render() {

    return (
      <div className="App">
        <h1>Aplikacja pogodowa</h1>
        <Form value={this.state.value} change={this.handleChangeInput} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
