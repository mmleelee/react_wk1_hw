import { getFirestore,collection,addDoc, getDocs, deleteDoc, setDoc, doc  } from "firebase/firestore";
import { getApps, getApp, initializeApp } from 'firebase/app'
import images from "../json/images.json"

const firebaseConfig = {
    //apiKey: "AIzaSyDqkB5reAfWEzJDD2zx25wQh6G4lXgMY4o",
    // authDomain: "react-wk10-c685c.firebaseapp.com",
    // projectId: "react-wk10-c685c",
    // storageBucket: "react-wk10-c685c.appspot.com",
    // messagingSenderId: "748157732919",
    // appId: "1:748157732919:web:9a3827553d99aeac8317b2",
    // measurementId: "G-5SYXLYCYDS",
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};



const app_length = getApps().length > 0 ;

const app = app_length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const imagesCollection = collection(db,"images");

export const feedImages = async()=>{
    
    const querySnapshot = await getDocs(imagesCollection);
    querySnapshot.forEach(async(img)=>{
        await deleteDoc(doc(db,"images",img.id));

    });

    images.forEach(async (img)=>{
        const docRef = await doc(imagesCollection);
        await setDoc(docRef,{...img, id: docRef.id});
    });
};





export const getImagesById = async ({ queryKey }) =>{
    const [id] = queryKey;
    const docRef = await doc(db,"images",id);
    const docSnap = await getDocs(docRef);
    return docSnap.data();
};


export const getImages = async () =>{
    const querySnapshot = await getDocs(imagesCollection);
    let result = [];
    querySnapshot.forEach(async (img)=>{
        await result.push(img.data());
    });
    return result;
};