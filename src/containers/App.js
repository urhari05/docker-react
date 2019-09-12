import React, {Component} from 'react';
import './App.css';
import Cockpit from '../components/cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      {
        id: 'asfa1',
        name: 'Max',
        age: 28
      }, {
        id: 'vasdf1',
        name: 'Manu',
        age: 29
      }, {
        id: 'asdf11',
        name: 'Stephanie',
        age: 26
      }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this
      .state
      .persons
      .findIndex(p => {
        return p.id === id;
      });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit style={style} click={this.togglePersonsHandler}/> {persons}
      </div>
    );
  }
}

export default App;
