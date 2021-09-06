import React, { Component } from 'react';
import CardList from './component/card-list/card-list';
import SearchBox from './component/search-box/search-box';
import './App.css';

class App extends Component {
constructor(){
  super();


  this.state= {
    monsters: [
     /*  {
        name: 'Frankstein',
        id: 'asc1'

      },
      {
        name: 'Dracula',
        id:'asr2'
      },

    {
      name: 'Zombie',
      id:'asw1'
    } */
    ],
    searchField: ''
  }
}
 
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users=> this.setState({ monsters: users}));
}



  render(){
    const { monsters, searchField} = this.state;
    const filteredMonsters= monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));


      const handleChange= (value) =>{
        this.setState({ searchField: value});
      };

   return(
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search monsters' handleChange={handleChange}/>
      <CardList  monsters={filteredMonsters} > </CardList>
     </div>
   );
  };
}



export default App;