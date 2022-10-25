// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
    apiKey: "AIzaSyBqIA-1CzGwJzz4CIMhqymsuWj6C1_Hjr4",
    authDomain: "assignment-10-6cf4d.firebaseapp.com",
    projectId: "assignment-10-6cf4d",
    storageBucket: "assignment-10-6cf4d.appspot.com",
    messagingSenderId: "83572318376",
    appId: "1:83572318376:web:5c686e4b64213f7a1f229d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app