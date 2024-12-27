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
function firebasePatientSignup() {
    
    var email = document.getElementById("loginEmail").value;
    var user_name = document.getElementById("loginName").value;
    var previous_name = document.getElementById("previousName").value;
    var mobile_number = document.getElementById("mobileNumber").value;
    
    const selectedAge = document.querySelector('input[name="ageRange"]:checked').nextElementSibling.innerText;
    const selectedGender = document.querySelector('input[name="gender"]:checked').nextElementSibling.innerText;
    var disease_name = document.getElementById("diseaseName").value;
    var address = document.getElementById("addressName").value;
    var password1 = document.getElementById("loginPassword").value;
    var concentCheckbox = document.getElementById("concentCheckbox");
    // const isChecked = concentCheckbox.checked;
    // const stateText = isChecked ? "Checked" : "Unchecked";
    
    // console.log(email)
    // console.log(user_name)
    // console.log(previous_name)
    // console.log(mobile_number)
    // console.log(selectedAge)
    // console.log(selectedGender)
    // console.log(disease_name)
    // console.log(address)
    // console.log(password1)
    // console.log(stateText)
    // var dob = document.getElementById("dob").value;
    // var ssn_number = document.getElementById("ssn").value;
   
   



        
    if (regEmail.test(email) == false) {
        sap.m.MessageBox.error(oBundle.getText("Email_Invalid"));
        return ;
    };
    if (user_name.trim() == "") {
        sap.m.MessageBox.error(oBundle.getText("Name_Required"));
        return ;
    };
    if (previous_name.trim() == "") {
        sap.m.MessageBox.error(oBundle.getText("Previous_Name_Required"));
        return ;
    };
    if (mobile_number.trim() == "" || mobile_number.length < 6) {
        sap.m.MessageBox.error(oBundle.getText("Mobile_Number_Required"));
        return ;
    };
    if (disease_name.trim() == "") {
        sap.m.MessageBox.error(oBundle.getText("Disease_Name_Required"));
        return ;
    };
    if (address.trim() == "") {
        sap.m.MessageBox.error(oBundle.getText("Address_Required"));
        return ;
    };
    if (password1.trim() == "") {
        sap.m.MessageBox.error(oBundle.getText("Password_Required"));
        return ;
    };
    if (password1.length < 6) {
        sap.m.MessageBox.error(oBundle.getText("Password_Required_Atlest_6Characteer"));
        return ;
    };
    if (!concentCheckbox.checked) {
        sap.m.MessageBox.error(oBundle.getText("Please_Select_Concent_Form"));
        return ;
    };
    
    // if (dob.trim() == "") {
    //     sap.m.MessageBox.error(oBundle.getText("DOB_Required"));
    //     return ;
    // };
    // if (ssn_number.trim() == "" || ssn_number.length > 4 || ssn_number.length < 4) {
    //     sap.m.MessageBox.error(oBundle.getText("Invalid_SSN_Number"));
    //     return ;
    // };
    
    // console.log(email)
    // console.log(user_name)
    // console.log(previous_name)
    // console.log(mobile_number)
    // console.log(selectedAge)
    // console.log(selectedGender)
    // console.log(disease_name)
    // console.log(address)
    // console.log(password1)
    
    
    oBusyDialog.open();
    loginTable.insert({        
        id:email,
        email:email,
        vehicle_count:user_name,
        pin:previous_name,
        mobile_number:mobile_number,
        checklist:selectedAge,
        payload:selectedGender,
        device_id:disease_name,
        pdf_count:address,
        password:password1,
        app_name:"Peearz",
        sub_date:"Peearz"
        // subscription:ssn_number,
        // pdf_count:dob,

    }).done(function(event){
        oBusyDialog.close();
        
        sap.m.MessageBox.show("You are successfully signed up.", {
            icon: sap.m.MessageBox.Icon.SUCCESS,title: "SUCCESS",
            actions: [sap.m.MessageBox.Action.OK],
            onClose: function(oAction) {
              if (oAction === sap.m.MessageBox.Action.OK) {
                localStorage.setItem('patient_name',user_name );
                window.open("patientPortal.html", "_self");
              }
            }
          }
    );
    },failure)


    // if(user1 == "ram@gmail.com" && pass == "123456"){
    //     window.open("patientPortal.html", "_self");
    // };


}


function failure(){
    document.getElementById("loginEmail").value = "";
    oBusyDialog.close();
    sap.m.MessageBox.error(oBundle.getText("Already Registered with this Email."));
}