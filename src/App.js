import React from "react";
// TODO: import useFormik from formik library
import { ErrorMessage, Formik } from 'formik';
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const styleError = {color:'red'};
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit: values =>{
      console.log('form: ',values); 
      alert('Login Successful');
    },
    validate: values =>{
      let errors = {};
      if(!values.email) errors.email='Field required';
      if(!values.password) errors.password = 'Field required'; 
      return errors;
    }
  });

  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>

       <form onSubmit={formik.handleSubmit}>
        <div>Email :</div>
        <input id="emailField" name='email' type='text' onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={styleError}>{formik.errors.email}</div>:null}
        <div>Password :</div>
        <input id="pswField" name='password' type='text' onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={styleError}>{formik.errors.password}</div>:null}
        <button id="submitBtn" type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
