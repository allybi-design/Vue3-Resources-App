import firebase from "firebase/app";
import "firebase/firestore";

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAv9ufBVmv663p4qQsz8fsNYih0jPI6KgU",
  authDomain: "vue3coachfinder.firebaseapp.com",
  projectId: "vue3coachfinder",
  storageBucket: "vue3coachfinder.appspot.com",
  messagingSenderId: "125069631036",
  appId: "1:125069631036:web:c5a22dd39431ebad28ad39",
});

const db = firebaseApp.firestore();

const coachesCollection = db.collection("coaches");

export const createCoach = async (user) => {
  return await coachesCollection.add(user);
};

export const getCoach = async (uid) => {
  const coach = await coachesCollection.doc(uid).get();
  return coach.exists ? coach.data() : new Error();
};

export const getAllCoaches = async () => {
  let coaches = [];
  await coachesCollection.get().then((querySnapShot) => {
    querySnapShot.forEach((doc) => {
      coaches.push(doc.data());
    });
  });
  return coaches;
};

export const deleteCoach = (uid) => {
  return coachesCollection.doc(uid).delete();
};

export const updateCoach = (uid, updatedCoach) => {
  return coachesCollection.doc(uid).update(updatedCoach);
};

export const useLoadCoaches = () => {
  let coaches = [];
  coachesCollection.onSnapshot((snapshot) => {
    coaches = snapshot.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    }));

    console.log("snapshot", coaches);
  });
  return coaches;
};
