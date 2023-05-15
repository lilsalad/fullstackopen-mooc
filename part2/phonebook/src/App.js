import {useState} from 'react'
import Contact from './components/Contact'

const App = () => {
  const [personList, addPerson] = useState([{ name: 'Manas Tripathi', number : '8888888888' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchString] = useState('');
  const [displayList, setDisplayList] = useState(personList);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const addNewPerson = (event) => {
    //console.log(personList);
    //console.log(newName);
    event.preventDefault();
    const inputName = {
      name: newName,
      number: newNumber
    }
    //console.log(inputName);
    //addPerson(personList.concat(inputName));
    if(personList.filter(person => person.name === inputName.name).length > 0) {
      alert('Person already present in list!')
    }else{
      addPerson(personList.concat(inputName));
    }
     
    setNewName('');
    setNewNumber('');
  }

  const handleSearch = (event) => {
    setSearchString(event.target.value);
  }

  const displayFilteredRecords = (event) => {
    console.log(searchQuery);
    event.preventDefault();
    if(searchQuery.length > 0){
      setDisplayList(personList.filter(person => person.name.startsWith(searchQuery)));
      console.log("In if block");
      console.log(displayList);
      console.log(personList);
    }
    else{
      setDisplayList(personList);
      console.log("In else block");
      console.log(displayList);
      console.log(personList);
    }
    setSearchString('');
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
         </div>
         <div>
          Number: <input value={newNumber} onChange={handleNumberChange}/>
         </div>
         <div> 
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Filter:</h2>
      <form onSubmit={displayFilteredRecords}>
      <div>
        Search: <input value={searchQuery} onChange={handleSearch}/>
        <button type="submit">Search</button>
      </div>
      </form>
      <h2>List of Contacts: </h2>
      <Contact list={displayList}/>
      <h2>Complete List of Contacts: </h2>
      <Contact list={personList}/>
    </>
  );
}

export default App;
