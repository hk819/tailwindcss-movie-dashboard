import { storage, db } from "./firebase";
import {
  serverTimestamp,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

// Initialize the camera
async function initCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.getElementById("webcam");
    video.srcObject = stream;
  } catch (error) {
    console.error("Error accessing the camera:", error);
  }
}

// Call the function to initialize the camera when the page loads
window.addEventListener("load", () => {
  initCamera();
});

// Load the TensorFlow.js model
async function loadModel() {
  const modelURL = await storage
    .ref("path/to/your/model.json")
    .getDownloadURL();
  const model = await tf.loadGraphModel(modelURL);
  return model;
}

// Perform real-time detection
async function detect(model) {
  const video = document.getElementById("webcam");
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const predictions = await model.detect(imageData);
  console.log(predictions);
  await addDoc(collection(db, "detections"), {
    predictions,
    timestamp: serverTimestamp(),
  });
  requestAnimationFrame(() => detect(model));
}

// Initialize the app
async function init() {
  const model = await loadModel();
  detect(model);
}
