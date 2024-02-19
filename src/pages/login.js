import { useState, useEffect } from 'react';
import styles from '@/styles/custom.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import {GoogleButtonSignIn } from '../components/GoogleButton'
import {auth} from './firebase'
import {signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    // Redirect to dashboard if user is already authenticated
    if (status === 'authenticated') {
      router.replace('/dashboard')
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    
    router.replace('/dashboard')
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
        <div className={styles.loginBox}>
          <div className="mb-3">
            <p style={{fontWeight:"bold"}}>Sign in to view dashboard</p>
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
          <div style={{textAlign:"center"}}>
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Sign in</button>
          </div>
          
          <div className="mt-3">
            <p style={{ textAlign:"center" }}><small>or</small></p>
          </div>
          <div style={{ textAlign:"center" }} className="mb-3">
            <GoogleButtonSignIn />
          </div>
        </div>
      </div>
      <div style={{  textAlign:"center" }} className="mt-3">
        <p style={{  color:"white" }}><small>Don't have an account? <Link href="/signup">Sign Up</Link></small></p>
      </div>
    </div>
  );
}
