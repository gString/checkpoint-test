import { useState } from 'react'
import './App.css'
import Login from "./Login";
import {login_check} from "./fakeApi/login_server";
import Board from "./Board";

function App() {
  const [logged, setLogged] = useState(false);

  const handleLogin = async (user, password) => {
      const loginAttempt = await login_check(user, password);
      if (loginAttempt) setLogged(true);
  }

  return (
    <>
      {
        logged ?
          <Board /> : <Login loginHandler={handleLogin}/>
      }
    </>
  )
}

export default App
