import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card.list.component';
import SearchBox from './components/search-box/search.box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          },
        )
      );
  }
  onSearchChange = (event) => {
    const searchBarField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField: searchBarField };
      }
    );
  }
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filterValue = monsters.filter(
      (monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      }
    );
    return (
      <div className="App">
        <h1 className='title'>Monsters</h1>
        < SearchBox onChangeHandler = {onSearchChange} placeholder='search monsters' className = 'searchBoxMonster' id='searchBoxMonster' />
        <CardList monsters= {filterValue} />
      </div>
    );
  }
}

export default App;



















/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  HI {this.state.name}
</p>
<button
  className="App-link"
  onClick={
    ()=>{
      this.setState(
        () => {
          return {
            name:'Sebin'
          }
        },
        () => {
          return console.log(this.state);
        }
      );
    }
  }
> 

  Change Name
</button>
</header> */