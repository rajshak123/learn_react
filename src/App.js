import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/person'
class App extends Component {
    state={
        persons:[{id:'sdfgf',name:'Rocky',age:28},{id:'dsfd',name:'Ricky',age:29},{id:'fdgfd',name:'Kiara',age:30}],
        showPersons:false
    }
switchHandler=()=>{
   this.setState({ persons:[{name:'Rotttt',age:28},{name:'Ricky',age:29},{name:'Kiara',age:18}]})
}
nameChangedHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{return p.id===id})
    const person={...this.state.persons[personIndex]}
    person.name=event.target.value
    const persons=[...this.state.persons]
    persons[personIndex]=person
    this.setState({persons:persons})
}
switchToggle=()=>{
    const doesShow=this.state.showPersons
    this.setState({showPersons:!doesShow})
}

deletePersonHandler=(personIndex)=>{
    const person=[...this.state.persons]
    person.splice(personIndex,1)
    this.setState({persons:person})
    
}
  render() {
      let persons=null
      if(this.state.showPersons){
          persons=(
              <div>
                  {this.state.persons.map((person,index)=>{
                      return <Person 
                                 name={person.name} 
                                 age={person.age} 
                                 click={this.deletePersonHandler.bind(this,index)}
                                 key={person.id}
                                 changed={(event)=>this.nameChangedHandler(event,person.id)}
                                 />
                  })}


            </div>)
      }
    return (
      <div className='title'>
            <button onClick={this.switchToggle}>Switch Name</button>
            {persons}
            
        
        </div>
    );
  }
}

export default App;
