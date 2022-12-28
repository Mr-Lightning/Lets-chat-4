

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBf_U3pqgF1jBmFgF7VMlshnlER2fx48oU",
      authDomain: "chat-box-b2dc8.firebaseapp.com",
      databaseURL: "https://chat-box-b2dc8-default-rtdb.firebaseio.com",
      projectId: "chat-box-b2dc8",
      storageBucket: "chat-box-b2dc8.appspot.com",
      messagingSenderId: "690786231217",
      appId: "1:690786231217:web:46cb7f9549a548f31d5390",
      measurementId: "G-8S8S321MCZ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    room_name = localStorage.getItem("Roomname");
    user_name = localStorage.getItem("Username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("index.html");
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                dislike:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();
