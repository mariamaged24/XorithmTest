import {srv1, srv2, srv3} from "@/mockData";
import 'bootstrap/dist/css/bootstrap.min.css';
import UptimeChart from "@/Components/UptimeChart";
import {signOut } from "firebase/auth";
import {auth} from './firebase'
import { useEffect } from "react";
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import  { signOut as signOutGoogle } from 'next-auth/react'


export default function Dashboard() {
const router = useRouter()
const { status } = useSession()
 const handleSignout = ()=>{
  signOut(auth).then(() => {
    router.replace("/login")
  }).catch((error) => {
  });
  if(status==='authenticated'){
    signOutGoogle()
  }
 }
return(
    <div>
      
<nav style={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(92,9,121,1) 38%, rgba(0,212,255,1) 100%)", }} className="navbar bg-body-tertiary">
  <form className="container-fluid">
    <p style={{color:"white"}}> XOrithm's Dashboard</p>
    <div style={{textAlign:"right"}}>
    <div className="dropdown">
  <button style={{borderColor:"white", color:"white"}}className="btn btn-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><a className="dropdown-item" href="https://xorithm.com/">Home</a></li>
    <li><a className="dropdown-item" onClick={handleSignout}>Sign out</a></li>
  </ul>
</div>
    </div>
  </form>
</nav>

<div className="container d-flex justify-content-center align-items-center vh-100">

            <div className="column">
            <span style={{textAlign:"center", width:"58rem", height:"100px", display:"inline-block", fontSize:"1.5rem", paddingTop:"1.5rem"}}className="badge text-bg-success col-md-4 mb-5">All Systems Operational</span>
            <p className="mb-2" style={{textAlign:"left",color:"grey"}}><small>Uptime over The Past 90 Days</small></p>
                <div className="col-md-4 mb-4">
                    <UptimeChart server={srv1} />
                </div>
                <div className="col-md-4 mb-4">
                    <UptimeChart server={srv2} />
                </div>
                <div className="col-md-4 mb-4">
                    <UptimeChart server={srv3} />
                </div>
            </div>
        </div>
    </div>
 );
}