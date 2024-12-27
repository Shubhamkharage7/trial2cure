// var client = new WindowsAzure.MobileServiceClient('https://hvi-mobile-service.azurewebsites.net');
var loginTable = client.getTable('HVI_Login');
var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


jQuery.sap.require("sap.m.MessageBox");
var browserLang = navigator.language || navigator.userLanguage;
var languageCode = browserLang.toLowerCase();
var oBusyDialog = new sap.m.BusyDialog({});
var oBundle = "";

if (languageCode.includes("en")) {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_en.properties" });
} else if (languageCode.includes("nl")) {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_nl.properties" });
} else {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_en.properties" });
};


function addWaitlist(){
    
    var userid = document.getElementById("userid").value;
    var username = document.getElementById("username").value;
    var mobile = document.getElementById("contact_no").value;
    if(username == '' || username == null){
       sap.m.MessageBox.error(oBundle.getText("Enter User Name."));
       return ;
    }
    console.log(userid)
    if((userid == '' || userid == null) && (mobile == '' || mobile == null) ){
        sap.m.MessageBox.error(oBundle.getText("Enter Email Address or Phone Number."));
        return ;
    }
    if (regEmail.test(userid) == false) {
        sap.m.MessageBox.error(oBundle.getText("Email Invalid."));
        return ;
    }
    oBusyDialog.open();
    loginTable.insert({
        id:userid,
        email:userid,
        vehicle_count:username,
        app_name:"Peearz",
        mobile_number:mobile
        
    }).done(function(event){
        document.getElementById("userid").value = "";
        document.getElementById("username").value = "";
        document.getElementById("contact_no").value = "";
        oBusyDialog.close();
        sap.m.MessageBox.success(oBundle.getText("Thanks You."));
    },failure)

};
function failure(){
    document.getElementById("userid").value = "";
    oBusyDialog.close();
    sap.m.MessageBox.error(oBundle.getText("Already Registered with this Email."));
}
// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//     "recaptcha-container",
//     {
//     size: "normal",
//     callback: function(response) {
//         submitPhoneNumberAuth();
//     }
//     }
// );

// function submitPhoneNumberAuth() {
//     console.log("First")
//     // We are using the test phone numbers we created before
//     var phoneNumber = document.getElementById("email").value;
//     // var phoneNumber = '+16005551234';
//     console.log(phoneNumber)
//     var appVerifier = window.recaptchaVerifier;
//     console.log(appVerifier)
//     console.log('hy')
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//     .then(function(confirmationResult) {
//         console.log(confirmationResult)
//         window.confirmationResult = confirmationResult;
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
// };

// function submitPhoneNumberAuthCode() {
//     console.log("Second")
//     // We are using the test code we created before
//     var code = document.getElementById("code").value;
//     // var code = '123456';
//     console.log(code)
//     console.log(confirmationResult)
//     confirmationResult
//     .confirm(code)
//     .then(function(result) {
//         var user = result.user;
//         console.log(user);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
// };


function directPatientLogin(){
    var user1 = document.getElementById("patient_email").value;

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
            new sap.m.Button({ text: oBundle.getText("Sign-In"), icon: "sap-icon://accept",press: function () { window.open("patientPortal.html", "_self");}}),
            new sap.m.Button({ text: oBundle.getText("Close"), icon: "sap-icon://decline",press: function () { oDialogAP.close();}})
        ]
    }).addStyleClass("centerBox").open();
};

function firebasePatientLogin() {
    var user1 = document.getElementById("patient_email").value;
 
    if (user1.trim() == "") {
        sap.m.MessageBox.error(oBundle.getText("Enter Mobile Number"));
        return ;
    };
    var randomValue = Math.floor(100000 + Math.random() * 900000);

    var otpLabel = new sap.m.Label({text:"OTP has been sent to your mobile number " + user1});
    var otpInput = new sap.m.Input({width:"40%",value:randomValue,placeholder:"OTP"});
    var oDialogAP = new sap.m.Dialog({escapeHandler:function(){},
        contentWidth: "35%", 
        contentHeight: "25%", draggable: true, resizable: true,
        title: oBundle.getText("OTP Verification"),
        content: [otpLabel,otpInput],
        buttons: [
            new sap.m.Button({ text: oBundle.getText("Sign-In"), icon: "sap-icon://accept",press: function () { window.open("patientPortal.html", "_self");}}),
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
    //     window.open("patientPortal.html", "_self");
    // }
  

};
