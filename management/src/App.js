import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': 'Hong gil-dong',
    'birthday' : '961222',
    'gender' : 'Male',
    'jobs' : 'Graduent'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'Kim gae-ddong',
    'birthday' : '001201',
    'gender' : 'Male',
    'jobs' : 'Programmer'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'Park chul-soo',
    'birthday' : '930201',
    'gender' : 'Male',
    'jobs' : 'None'
  }
]
// Body Tag
class App extends Component{
  render(){
    return(
      <div>
        {
          customers.map(c => {
            return (<Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              birthday={c.birthday}
            />)
          })
        }
      </div>
    );
  }
}

export default App;