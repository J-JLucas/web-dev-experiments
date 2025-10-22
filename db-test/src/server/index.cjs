const { initializeApp, applicationDefault, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp, FieldValue, Filter } = require("firebase-admin/firestore");
const dotenv = require("dotenv");

dotenv.config();

const serviceAccount = process.env.FIREBASE_CREDENTIALS_PATH;

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const docRef = db.collection("users").doc("alovelace");

async function run() {
  await docRef.set({
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
}

run();
