import { createStore, combineReducers, compose} from 'redux'
import firebase from 'firebase';
import 'firebase/firestore';
import { reduxFirestore , firestoreReducer } from 'redux-firestore';
import { reactReduxFirebase , firebaseReducer } from 'react-redux-firebase'
//Reducers
import notifyReducer from '../reducers/notifyReducer'


//@todo

const firebaseConfig = {
    apiKey: "AIzaSyDzoAzz2SClw6zerv1sLmn_m_q8sKAyDwc",
    authDomain: "clientfire-55e12.firebaseapp.com",
    databaseURL: "https://clientfire-55e12.firebaseio.com",
    projectId: "clientfire-55e12",
    storageBucket: "clientfire-55e12.appspot.com",
    messagingSenderId: "454755241325"
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);
  
// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  notify: notifyReducer
})

// create initial state
const initialState = {};

// create store
const store = createStoreWithFirebase(rootReducer,initialState, compose(
  reactReduxFirebase(firebase) ,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;