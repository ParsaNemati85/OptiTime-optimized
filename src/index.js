import { user_generated_code } from "./script";
import {getVR} from "./script";

function showDiv(div){
  div.style.display = "block";
}

function hideDiv(div){
  div.style.display = "none";
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore, collection, getDoc, setDoc, addDoc, doc, onSnapshot, getDocs
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "---------------------",
  authDomain: "the-worst-thing-in-the-world.firebaseapp.com",
  projectId: "the-worst-thing-in-the-world",
  storageBucket: "the-worst-thing-in-the-world.firebasestorage.app",
  messagingSenderId: "10476846364",
  appId: "1:10476846364:web:6a9c889d9303e786784ed9",
  measurementId: "G-PP2F4KTTLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();



// user generated code
// Set up an event listener for the button click

const collectionName = user_generated_code.toString();

const createCollectionButton = document.getElementById("code_maker");
createCollectionButton.addEventListener("click", async () => {
    try {
      const collectionName = user_generated_code.toString();
      await setDoc(doc(db, collectionName, "personNull"), {
        av: Array(24).fill(0)
      });

    } catch (error) {
      console.error("Error creating document: ", error);
      alert("Error creating collection.");
    }
  });

  function final_color(finalData){
    const final_array_color_change_blocks = document.querySelectorAll('.boxR')
    const MAX = Math.max(...finalData)
    const MIN = Math.min(...finalData)
        let temp = [];
        for (let index = 0; index < finalData.length; index++) {
            const element = finalData[index]
            let stdSCORE = (element - MIN)/(MAX-MIN)
            temp.push(255 - stdSCORE * (255-64))
        for (let index = 0; index < final_array_color_change_blocks.length; index++) {
            document.getElementById(index+24).style.backgroundColor = `rgb(0, ${Math.floor(temp[index])},0)`
        }
    }
}

var returnArray = []
const addNewPerson = document.getElementById("submit_user_plan");
addNewPerson.addEventListener("click", async () => {

    try{
      let ar = getVR();
      const collectionName = user_generated_code.toString();
      await setDoc(doc(db, collectionName, document.getElementById("user_name_input").value),{
        av: ar
      })

      console.log(sumAvField(collectionName))
      returnArray = await sumAvField(collectionName)
      final_color(returnArray);
      showDiv(document.getElementById("results"))
    }
    catch (error){
         console.log("We ended you :(", (error))
        }
     }) 



async function sumAvField(collectionName) {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    let totalArray = Array(24).fill(0);

    for (let i = 0; i < snapshot.docs.length; i++) {
        const doc = snapshot.docs[i];
        const av = doc.data().av;
        
        if (Array.isArray(av) && av.length === 24) {
            for (let j = 0; j < 24; j++) {
                totalArray[j] += av[j];
            }
        }
    }

    return totalArray;
}


export {returnArray, sumAvField}




