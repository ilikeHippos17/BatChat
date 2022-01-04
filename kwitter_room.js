//<img src="m2.png">

//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyAYdIWmrJWKNfOu8qDUujo9XcBsnLIygek",
      authDomain: "chat-app-b971d.firebaseapp.com",
      databaseURL: "https://chat-app-b971d-default-rtdb.firebaseio.com",
      projectId: "chat-app-b971d",
      storageBucket: "chat-app-b971d.appspot.com",
      messagingSenderId: "349973805585",
      appId: "1:349973805585:web:e6e69e8f179995171d4fb0",
      measurementId: "G-FJDJXSFDMN"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").ariaValueMax;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}

function send()
{
  msg = document.getElementById("msg").ariaValueMax;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });

  document.getElementById("msg").value = "";
}