import {
  onSnapshot,
  query,
  collection,
  where,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
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

  // const getADocsFromFirestore = (collectionName, reference) => {
  //   return new Promise((resolve, reject) => {
  //     getDoc(doc(firestoreDB, collectionName, reference))
  //       .then((docSnap) => {
  //         if (docSnap.exists()) {
  //           resolve(docSnap.data());
  //         } else {
  //           resolve(null);
  //         }
  //       })
  //       .catch((error) => reject(error));
  //   });
  // };
  const getADocsFromFirestore = (collectionName, reference, callback) => {
    const docRef = doc(firestoreDB, collectionName, reference);

    const unsubscribe = onSnapshot(
      docRef,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          callback(docSnapshot.data());
        } else {
          callback(null);
        }
      },
      (error) => {
        console.error("Error fetching document:", error);
      }
    );
    return unsubscribe;
  };

  const getMultipleDocsFromFirestore = (
    collectionName,
    key,
    value,
    callback
  ) => {
    const q = query(
      collection(firestoreDB, collectionName),
      where(key, "==", value)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      callback(data);
    });
    return unsubscribe;
  };

  const getAllDocsFromFirestore = (collectionName, callback) => {
    const q = collection(firestoreDB, collectionName);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      callback(data);
    });
    return unsubscribe;
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
