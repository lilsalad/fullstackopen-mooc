import {useState} from 'react'
import Contact from './components/Contact'

const App = () => {
  const [personList, addPerson] = useState([{ name: 'Manas Tripathi', number : '8888888888' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');


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
      <h2>List of Contacts: </h2>
      <Contact list={personList}/>
    </>
  );
}

export default App;
