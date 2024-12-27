var oBundle = "";
var oBusyDialog = new sap.m.BusyDialog({});
jQuery.sap.require("sap.m.MessageBox");
var browserLang = navigator.language || navigator.userLanguage;
var languageCode = browserLang.toLowerCase();
var loginTable = client.getTable('HVI_Login');
var provider = new firebase.auth.GoogleAuthProvider();

if (languageCode.includes("en")) {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_en.properties" });
} else if (languageCode.includes("nl")) {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_nl.properties" });
} else {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_en.properties" });
};


function googleLogin(){
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
  
      //var token = result.credential.accessToken;
      var user = result.user;
      var name = user.displayName;
      var email  = user.email;
       oBusyDialog.open();
      azureLoginCheckGoogle(name,email,user);
 
    }).catch(function(error) {
 
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      var email = error.email;
      var credential = error.credential;
    });
}
function azureLoginCheckGoogle(name,email,user){
        
    
    var query = loginTable.select("id","pin","blocked").where({ id:email}).read().done(function (results) {
         
        if(results.length >0){
 
            window.open("pharmaPortal.html", "_self");
        }else{
            
            var newPassword = ""+Math.floor(100000 + Math.random() * 900000);
            user.updatePassword(newPassword).then(function() {
              // Update successful.
            }).catch(function(error) {
              // An error happened.
            });

           insertPeearzLogin(email,newPassword,name);
        }
}, function (err) {
    oBusyDialog.close();
   sap.m.MessageBox.error(oBundle.getText("Error_please_reach_us_on")+" contact@oxmaint.com");
});
};


function insertPeearzLogin(email,password,inspector_name){
    
    loginTable.insert({id:email,password: password,pin:password,blocked:'No',sub_date:'Peearz'
        }).done(function () {   
            window.open("pharmaPortal.html", "_self");
            console.log("Sign Up done")
     }); 

}

function firebasePharmaLogin() {
    var user1 = document.getElementById("email").value;

    if (user1.trim() == "") {
        sap.m.MessageBox.error(oBundle.getText("Enter Mobile Number"));
        return ;
    };
    var randomValue = Math.floor(100000 + Math.random() * 900000);

    var otpLabel = new sap.m.Label({text:"OTP has been sent to your mobile number " + user1});
    var otpInput = new sap.m.Input({width:"30%", value:randomValue, placeholder:"OTP"});
    var oDialogAP = new sap.m.Dialog({escapeHandler:function(){},
        contentWidth: "35%", 
        contentHeight: "20%", draggable: true, resizable: true,
        title: oBundle.getText("OTP Verification"),
        content: [otpLabel,otpInput],
        buttons: [
            new sap.m.Button({ text: oBundle.getText("Sign-In"), icon: "sap-icon://accept",press: function () { window.open("pharmaPortal.html", "_self");}}),
            new sap.m.Button({ text: oBundle.getText("Close"), icon: "sap-icon://decline",press: function () { oDialogAP.close();}})
        ]
    }).addStyleClass("centerBox").open();
    
    // var user1 = document.getElementById("email").value;
    // var pass = document.getElementById("password").value;
    // var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        

    // if (regEmail.test(user1) == false) {
    //     sap.m.MessageBox.error(oBundle.getText("Email_Invalid"));
    //     return ;
    //  }
    // if (pass.trim() == "") {
    //     sap.m.MessageBox.error(oBundle.getText("Password_Required"));
    //     return ;
    //  }

    // if(user1 == "ram@gmail.com" && pass == "123456"){
    //     // navContainer.to("p0");
    //     window.open("pharmaPortal.html", "_self");
    // }

    // oBusyDialog.open();
    // azureLoginCheckEmail(user1);
    // firebase.auth().signInWithEmailAndPassword(user1, pass)
    //     .then(function(firebaseUser) {
    //          azureLoginCheckEmail(user1);
    //        }).catch(function(error) {
    //          oBusyDialog.close();
    //        sap.m.MessageBox.error(oBundle.getText("You_are_not_an_authorised_user_please_check_email_or_password"));
    //     });

}
