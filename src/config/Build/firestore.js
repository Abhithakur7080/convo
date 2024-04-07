import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  where,
  query,
  setDoc,
} from "firebase/firestore";
import { firestoreDB } from "../firebase";

export const useFirestore = () => {
  const addDataToFirestore = (collectionName, data) => {
    return new Promise((resolve, reject) => {
      addDoc(collection(firestoreDB, collectionName), data)
        .then(() => resolve())
        .catch((error) => reject(error));
    });
  };

  const setDataToFirestoreRef = (collectionName, reference, data) => {
    return new Promise((resolve, reject) => {
      setDoc(doc(firestoreDB, collectionName, reference), data)
        .then(() => resolve())
        .catch((error) => reject(error));
    });
  };

  const setDataToFirestoreNoRef = (collectionName, data) => {
    return new Promise((resolve, reject) => {
      setDoc(doc(collection(firestoreDB, collectionName)), data)
        .then(() => resolve())
        .catch((error) => reject(error));
    });
  };

  const updateDataFromFirestore = (collectionName, reference, data) => {
    return new Promise((resolve, reject) => {
      updateDoc(doc(firestoreDB, collectionName, reference), data)
        .then(() => resolve())
        .catch((error) => reject(error));
    });
  };

  const deleteDataFromFirestore = (collectionName, reference) => {
    return new Promise((resolve, reject) => {
      deleteDoc(doc(firestoreDB, collectionName, reference))
        .then(() => resolve())
        .catch((error) => reject(error));
    });
  };

  const getADocsFromFirestore = (collectionName, reference) => {
    return new Promise((resolve, reject) => {
      getDoc(doc(firestoreDB, collectionName, reference))
        .then((docSnap) => {
          if (docSnap.exists()) {
            resolve(docSnap.data());
          } else {
            resolve(null);
          }
        })
        .catch((error) => reject(error));
    });
  };

  const getMultipleDocsFromFirestore = (collectionName, key, value) => {
    return new Promise((resolve, reject) => {
      getDocs(
        query(collection(firestoreDB, collectionName), where(key, "==", value))
      )
        .then((querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  };

  const getAllDocsFromFirestore = (collectionName) => {
    return new Promise((resolve, reject) => {
      getDocs(collection(firestoreDB, collectionName))
        .then((querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  };

  return {
    addDataToFirestore,
    setDataToFirestoreRef,
    setDataToFirestoreNoRef,
    updateDataFromFirestore,
    deleteDataFromFirestore,
    getADocsFromFirestore,
    getMultipleDocsFromFirestore,
    getAllDocsFromFirestore,
  };
};
