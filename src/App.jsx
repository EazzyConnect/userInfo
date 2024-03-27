import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SigunUp';

const App = () => {
  const [logged, setLogged] = useState("true");

  const toggleLog = () => {
    let presentState = logged
    setLogged(!presentState)
  }

  return (
    <>
      {
        logged ?

          <Login signUpTab={toggleLog} />

          :

          <SignUp logInTab={toggleLog} />
      }

    </>
  )
}

export default App;
