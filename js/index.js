var firebaseConfig = {
    apiKey: "AIzaSyDR_0az32ymnS_dQww9kQK4Xh06K_qnDBI",
    authDomain: "personalblog-3fe3f.firebaseapp.com",
    databaseURL: "https://personalblog-3fe3f.firebaseio.com",
    projectId: "personalblog-3fe3f",
    storageBucket: "personalblog-3fe3f.appspot.com",
    messagingSenderId: "19015357122",
    appId: "1:19015357122:web:af2f8fa66db1faf33da15b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL;

  

  $("#btn-login").click(function(){
        
        console.log("clicked");
        var email = $("#email").val();
        var password = $("#password").val();
        
        if(email != "" && password != "")
        {
            var result = firebase.auth().signInWithEmailAndPassword(email,password);

        }else{
            window.alert("Please fill out all form!!!");
        }
  });

  $("#logout").click(function(){
    console.log('exit');
firebase.auth().signOut();
});

//content:::::::::::::::::::::::::::::::::



//content:::::::::::::::::::::::::::::::::