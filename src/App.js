import './App.css';
import Forminput from './components/Forminput';
import { useState } from 'react';




function App() {

  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
  })

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "name",
      errorMessage: "Name should we 3-16 characters and shouldnt't include any special charactes!",
      label: "name",
      pattern: `^[A-Za-z0-9]{3,16}$`,
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should we 3-16 characters and shouldnt't include any special charactes!",
      label: "Username",
      pattern: `^[A-Za-z0-9]{3,16}$`,
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should we a valid email address!",
      label: "Email",
      required: true,
    }


  ]

  const handleSubmit = (e) => {
    e.preventDefault();

  };


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  // console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        <h1>Register</h1>
        {inputs.map((input) => (
          <Forminput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
