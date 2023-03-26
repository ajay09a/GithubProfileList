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
      <div class="container">
        <div class="heading"><span>GitHub Users &#8702;</span>
        </div>
      </div>


      <ul className='users'>
        {user.map((user)=>{
          const {id, login, avatar_url, html_url} = user;
          return(
            <li key={id}>
              <div className='profile'>
                <img src={avatar_url} alt={login} />
                <div className='name'>
                  <h4>{login}</h4>
                  <a href={html_url}>Profile</a>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </>
)
}

export default App;
