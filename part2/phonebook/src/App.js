import {useState} from 'react'
import Contact from './components/Contact'

const App = () => {
  const [personList, addPerson] = useState([{ name: 'Manas Tripathi' }]);
  const [newName, setNewName] = useState('');

  const handleChange = (event) => {
    setNewName(event.target.value);
  }

  const addNewPerson = (event) => {
    //console.log(personList);
    //console.log(newName);
    event.preventDefault();
    const inputName = {
      name: newName
    }
    //console.log(inputName);
    addPerson(personList.concat(inputName));
    setNewName('');
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          Name: <input value={newName} onChange={handleChange}/>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>List of Contacts: </h2>
      <Contact list={personList}/>
    </>
  );
}

export default App;
