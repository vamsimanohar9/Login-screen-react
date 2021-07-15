import react,{useState} from 'react';
import './App.css';
import Login from './Login';
import "./Login.css"

function App() {
  const data={
    email:'ravi@gmail.com',
    password:'1234'
  }

  const [user,setUser]=useState({name:'',email:''});
  const [error,setError]=useState('')

  const Loggin = details =>{
    console.log(details);

    if(details.email==data.email && details.password== data.password){
      console.log("logged in")
      setUser({
        email:details.email
      })
    }else{
      console.log("details didnt match")
    }
  }
  const Logout =()=>{
    console.log("logout");
  }
  return (
    <div className="App">
      {(user.email!="")?(
        <div className="welcome">
          <h1>Welcome</h1>
          <h2>{user.email}</h2>
          <button className='loginbutton'>Logout</button>
        </div>
      ):(
        <Login Loggin={Loggin} error={error} />
      )}
    </div>
  );
}

export default App;
