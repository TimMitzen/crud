import React, {useState} from 'react';
import UserTable from "./tables/UserTable"
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import './App.css';

const App = () => {
  const usersData =[
   { id: 1, name: "Tim", username: "mit" },
   { id: 2, name: "Kim", username: "mik" },
   { id: 3, name: "Jim", username: "mij"}
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length +1;
    setUsers([...users, user]);
  }

  const deleteUser = id =>{
    setUsers(users.filter(user => user.id !== id))
  };

  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name:"", username: ""};

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);

    setCurrentUser({id: user.id, name: user.name, username: user.username});
  }

  const updateUser = (id,updatedUser) => {
    setEditing(false);

    setUsers(users.map(user =>(user.id=== id ? updatedUser: user)));
  }

  return (
    <div className="App">
      <h1>Crud</h1>
      <div>
        <div>
          <h2>Edit user</h2>
          <EditUserForm editing={editing}
          setEditing={setEditing}
          currentUser={currentUser}
          updateUser={updateUser}
          />
        
        </div>
        <h2>Add user</h2>
        <AddUserForm addUser={addUser}/>
      </div>
      <h2>View users</h2>
      <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>

      
    </div>
  );
}

export default App;
