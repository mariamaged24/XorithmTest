
import { initializeApp} from "firebase/app";
import {getAuth} from  "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBC2UkzrWZckXr0cYVFngDcFuzBxgmqQP8",
  authDomain: "xorithm-1e259.firebaseapp.com",
  databaseURL: "https://xorithm-1e259-default-rtdb.firebaseio.com",
  projectId: "xorithm-1e259",
  storageBucket: "xorithm-1e259.appspot.com",
  messagingSenderId: "25166048227",
  appId: "1:25166048227:web:cc8345692aef97abf4ced6",
  measurementId: "G-4G64JQ7V0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default function(){
  return (<>Nothing Is Here</>)
}