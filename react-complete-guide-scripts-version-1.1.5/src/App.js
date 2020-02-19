import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';


// if latest then  react 16.8 hooks !!!! 

const App = (props) => {
  const [personState, setPersonState] = useState({
    person: [
      { name: 'Mariusz', age: 35 },
      { name: 'Judyta', age: 33 },
      { name: 'Borys', age: 10 }

    ],
    family: [
      { name: 'Jogi', age: 35 },
    ]
  });

  const switchNameHandler = (newName) => {
    console.log('click!!');
    // DONT DO THIS !!! this.state.person[0].name = 'Borys';
    setPersonState({
      person:
        [
          { name: newName, age: 11 },
          { name: 'Judyta', age: 33 },
          { name: 'aaa', age: 10 }]
    })
  };
  const nameChangeHandler= (event) =>{
    setPersonState({
      person:
        [
          { name: 'Mariusz', age: 11 },
          { name: 'Judyta', age: 33 },
          { name: event.target.value, age: 10 }]
    })
  }

  //inline style, no full power of css!! 


  const styleButon = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid, blue',
    borderRadius: '5px',
    padding: '8x',
    cursor: 'pointer'
  };


  
  return (
    <div className="App">
      <h1>Hi, i am React App </h1>
      <button 
      style={styleButon}
      onClick={() => switchNameHandler('Borys')}>Swich Name</button>

      <Person
      name= {personState.person[2].name}
      age={personState.person[2].age}/>
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
        job='racer'
        changed={nameChangeHandler}>My hobby: warhammer</Person>
      <Person
        name={personState.person[1].name}
        age={personState.person[1].age}
        click={switchNameHandler.bind(this, 'max')}>My hobby: warhammer</Person>
    </div>
  )


  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'jak to dziala'), `I'm react component`);
}

// if class this react 16.7
// class App extends Component{
//   state = {
//     person:[
//       {name: 'Mariusz', age: 35},
//       {name: 'Judyta', age: 33},
//       {name: 'Borys', age: 10}
  
//     ],
//     family:[
//       {name: 'Jogi', age: 35},
//     ]
//   }
  
//   switchNameHandler = () =>{
//     console.log('click!!');
//     // DONT DO THIS !!! this.state.person[0].name = 'Borys';
//     this.setState({ person:
//       [
//       {name: 'Mariusz', age: 11},
//       {name: 'Judyta', age: 33},
//       {name: 'Borys', age: 10}]
//     })
//     console.log(this.state);
//   }

//   nameChangeHandler = (event) =>{
//     console.log('czy ta funkcja dziial??')
//     this.setState({ person:
//       [
//       {name: 'Mariusz', age: 11},
//       {name: event.target.value , age: 33},
//       {name: 'Borys', age: 10}]
//     })

//   }
  
  
//   render() {
//     return(
//     <div className="App">
//      <h1>Hi, i am React App </h1>
//      <button onClick={this.switchNameHandler}>Swich Name</button>
//      <Person />
//      <Person 
//      name = {this.state.person[0].name} 
//      age = {this.state.person[0].age} job = 'racer'>My hobby: warhammer</Person>
//      <Person 
//      name = {this.state.person[1].name} 
//      age = {this.state.person[2].age}
//      changed = {this.nameChangeHandler} ></Person>
//     </div>
//     )
//   }
  
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'jak to dziala'), `I'm react component`);
//}
  

export default App;
