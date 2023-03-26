import React, {useState, useEffect} from 'react';
import './App.css';

const url = "https://api.github.com/users";

const App = ()=>{
const [user, setuser] = useState([]);
useEffect(()=>{
  const fetchData = async()=>{
    try {
      const response = await fetch(url);
      const users = await response.json();
      setuser(users);
    } catch (error) {
      console.log("error")
    }
  }
  fetchData();
}, [])
return (
    <>
      <h2>GitHub Users</h2>
      <ul className='users'>
        {user.map((user)=>{
          const {id, login, avatar_url, html_url} = user;
          return(
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
)
}

export default App;
