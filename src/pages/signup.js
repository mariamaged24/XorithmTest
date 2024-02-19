import { useState } from 'react';
import styles from '@/styles/custom.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase'
import Link from 'next/link';



export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('Signing Up was Successful')

  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
 
  });
  };

  return (
    <div style={{height: "100vh", background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(92,9,121,1) 38%, rgba(0,212,255,1) 100%)", }}> 
      <p style={{ textAlign: "center", lineHeight:"100px", fontSize: "40px", color: "white" }}>XOrithm's Dashboard</p>
      <div className={styles.container}>
        <div style={{marginBottom:"50px"}} className={styles.loginBox}>
        <div className="mb-3">
            <p style={{fontWeight:"bold"}}>Sign up to view dashboard</p>
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email</label>
            <div className="mb-3">
            <input 
              type="email" 
              id="inputEmail" 
              className="form-control" 
              aria-describedby="emailHelpBlock"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <div className="mb-3">
            <input 
              type="password" 
              id="inputPassword" 
              className="form-control" 
              aria-describedby="passwordHelpBlock"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          </div>
          <div style={{textAlign:"center", padding:"2em"}}>
          <Link href="/login"><button style ={{textAlign:"center", marginRight:"1em"}} type="button" className="btn btn-primary">Back to Sign in</button></Link>
          <button style ={{textAlign:"center"}} type="button" className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
