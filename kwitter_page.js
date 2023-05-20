//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBaOtFXEUySS6LcCcuRdKg_ZZTRI1-CnNo",
      authDomain: "class23-b74ac.firebaseapp.com",
      databaseURL: "https://class23-b74ac-default-rtdb.firebaseio.com",
      projectId: "class23-b74ac",
      storageBucket: "class23-b74ac.appspot.com",
      messagingSenderId: "511294703874",
      appId: "1:511294703874:web:4d18399501c2cada4a9a1b"
    };  
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData()
 { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
 { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose")
  {firebase_message_id = childKey; 
      message_data = childData;console.log(firebase_message_id);	       console.log(message_data);	       name = message_data['name'];	       message = message_data['message'];       	       like = message_data['like'];         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";      } });  }); }getData();      

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes
   });
   
}function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}