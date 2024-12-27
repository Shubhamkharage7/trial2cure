var oBundle = "";
var browserLang = navigator.language || navigator.userLanguage;
var languageCode = browserLang.toLowerCase();
// var client = new WindowsAzure.MobileServiceClient('https://hvi-mobile-service.azurewebsites.net');
var JRS_Peearz = client.getTable('JRS_Peearz');
if (languageCode.includes("en")) {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_en.properties" });
} else if (languageCode.includes("nl")) {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_nl.properties" });
} else {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_en.properties" });
}
var userDetailQuickView = new sap.m.QuickViewPage({
    header: oBundle.getText("Patient Info"),
    title: "Sachin Upadhyay",
    description: "",
    icon: "sap-icon://employee"
});

var GSDashboardDialog;

var GSlabel = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("Getting_Started_Info")}).addStyleClass('bigBoldTextHeader').addStyleClass("sapUiTinyMarginBottom");
var GSlabel1 = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("Men's Health")}).addStyleClass('bigBoldTextHeader');
var contentGStile1 = new sap.m.Image({
    backgroundSize:"Cover",
    src:"Images/img1.png", 
    width:"100%",
    press: function (e) {

    }
});

var GSlabel2 = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("Heart Health")}).addStyleClass('bigBoldTextHeader');
var contentGStile2 = new sap.m.Image({
    src:"Images/img2.png", 
    width:"100%",
    press: function(e){
        funGetHeartData();
    }
});

var GSlabel3 = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("Liver Health")}).addStyleClass('bigBoldTextHeader');
var contentGStile3 = new sap.m.Image({
    src:"Images/img3.png", 
    width:"100%",
    press: function(e){
        
    }
});

var GSlabel4 = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("Blood Health")}).addStyleClass('bigBoldTextHeader');
var contentGStile4 = new sap.m.Image({
    src:"Images/img4.png", 
    width:"100%",
    press:function(){

    }
})

var GSlabel5 = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("Vitamin & Nutrition")}).addStyleClass('bigBoldTextHeader');
var contentGStile5 = new sap.m.Image({
    src:"Images/img5.png", 
    width:"100%",
    press:function(){
       
    }
});

var GSlabel6 = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("Muscles, Bones & Joints ")}).addStyleClass('bigBoldTextHeader');
var contentGStile6 = new sap.m.Image({
    src:"Images/img6.png", 
    width:"100%",
    press:function(){
       
    }
});

var GSlabel7 = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("Kidney Health")}).addStyleClass('bigBoldTextHeader');
var contentGStile7 = new sap.m.Image({
    src:"Images/img7.png", 
    width:"100%",
    press:function(){
    
    }
});

var GSlabel8 = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("All Clinic Tests")}).addStyleClass('bigBoldTextHeader');
var contentGStile8 = new sap.m.Image({
    src:"Images/img8.png", 
    width:"100%",
    press:function(){
       
    }
});

var GSlabel9 = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("Inflammation & Immunity")}).addStyleClass('bigBoldTextHeader');
var contentGStile9 = new sap.m.Image({
    src:"Images/img9.png", 
    width:"100%",
    press:function(){
       
    }
});


var GSlabel10 = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("Medicine & Drug Level")}).addStyleClass('bigBoldTextHeader');
var contentGStile10 = new sap.m.Image({
    src:"Images/account_setting1.png", 
    width:"100%",
    press:function(){
    }
});

var GSlabel11 = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("All Clinic Tests")}).addStyleClass('bigBoldTextHeader');
var contentGStile11 = new sap.m.Image({
    src:"Images/incident4.png", 
    width:"100%",
    press:function(){
       
    }
});

var GSlabel12 = new sap.m.Label({width:"100%",textAlign:"Center",text: oBundle.getText("Other Clinic Tests")}).addStyleClass('bigBoldTextHeader');
var contentGStile12 = new sap.m.Image({
    src:"Images/add_labour1.png", 
    width:"100%",
    press:function(){
       
    }
});




function funGetHeartData(){
    
    var heartData = new sap.m.Table({ growing: true,alternateRowColors:true,
        noDataText:oBundle.getText("No_Data"), growingTriggerText:oBundle.getText("More"),
        sticky:[sap.m.Sticky.ColumnHeaders,sap.m.Sticky.HeaderToolbar,sap.m.Sticky.InfoToolbar],
        growingThreshold: 25, growingScrollToLoad : false,
        columns: [
            new sap.m.Column({width:"100px",header: new sap.m.Label({text: oBundle.getText("Date & Time"),design: sap.m.LabelDesign.Bold})}),
            new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Blood Glucose"),design: sap.m.LabelDesign.Bold})}),
            new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Blood Pressure"),design: sap.m.LabelDesign.Bold})}),
            new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Heart Rate"),design: sap.m.LabelDesign.Bold})}),
        ]
    });
    var heartDataTemplate = new sap.m.ColumnListItem({
        cells: [
            new sap.m.Label({wrapping:true,text: "{createdAt}"}),
            new sap.m.Label({wrapping:true,text: "{blood_glucose}"}),
            new sap.m.Label({wrapping:true,text: "{blood_pressure}"}),
            new sap.m.Label({wrapping:true,text: "{heart_rate}"}),
        ]
    });
    
    
    var oDialog = new sap.m.Dialog({contentWidth: "50%", contentHeight: "40%", draggable: true,
        title: oBundle.getText("Heart Data"),
        content: [heartData],
        buttons: [
        new sap.m.Button({text: oBundle.getText("Cancel"),icon: "sap-icon://decline",press: function () { oDialog.close();}
    })]}).open();

    // GSDashboardDialog.open();
    JRS_Peearz.where({}).take(200).read().done(function (result) {
        console.log(result)
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData({ modelData: result });
        heartData.setModel(oModel);
        heartData.bindItems({ path: "/modelData", template : heartDataTemplate});
        // GSDashboardDialog.close();
    })
}



var GSblock1 = new sap.ui.layout.BlockLayout({
    background: sap.ui.layout.BlockBackgroundType.Dashboard,
    
    content: [
       
        new sap.ui.layout.BlockLayoutRow({
            content: [
                  
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [GSlabel1,contentGStile1,new sap.m.Button({width:"50%", text:"Latest Test"}),new sap.m.Button({width:"50%",text:"Out Of Range"})],
                }).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop"),               
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [GSlabel2,contentGStile2, new sap.m.Button({width:"50%", text:"Latest Test"}),new sap.m.Button({width:"50%",text:"Out Of Range"})]
                }).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop"),               
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [GSlabel3,contentGStile3, new sap.m.Button({width:"50%", text:"Latest Test"}),new sap.m.Button({width:"50%",text:"Out Of Range"})]
                }).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop"),      
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [GSlabel4,contentGStile4, new sap.m.Button({width:"50%", text:"Latest Test"}),new sap.m.Button({width:"50%",text:"Out Of Range"})]
                }).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop"),                
                     
                
            ]
        }),
        new sap.ui.layout.BlockLayoutRow({
            content: [
     
                
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [GSlabel5,contentGStile5, new sap.m.Button({width:"50%", text:"Latest Test"}),new sap.m.Button({width:"50%",text:"Out Of Range"})]
                }).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop"),    
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [GSlabel6,contentGStile6, new sap.m.Button({width:"50%", text:"Latest Test"}),new sap.m.Button({width:"50%",text:"Out Of Range"})]
                }).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop"),                
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [GSlabel7,contentGStile7, new sap.m.Button({width:"50%", text:"Latest Test"}),new sap.m.Button({width:"50%",text:"Out Of Range"})]
                }).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop"), 
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [GSlabel8,contentGStile8, new sap.m.Button({width:"50%", text:"Latest Test"}),new sap.m.Button({width:"50%",text:"Out Of Range"})]
                }).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop"), 
                              
                            
            ]
        }),
    ]
})
var GSblock2 = new sap.ui.layout.BlockLayout({
    content: [
        new sap.ui.layout.BlockLayoutRow({
            content: [
                new sap.ui.layout.BlockLayoutCell({
                    width: 1,
                    titleAlignment:"Center",
                    content: [
                        new sap.m.Label({textAlign:"Center" , width:"100%",wrapping:true,
                        text: oBundle.getText("If_you_get_any_problem_related_to_software_please_reach_us_on")}),
                        new sap.m.Label({textAlign:"Center" , width:"100%",text: oBundle.getText("contact@jrsinnovation.com")})
                    ],
                }),                          
            ]
        }),
    ]
}).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop");


var oAppHome = new sap.uxap.ObjectPageLayout({ headerContentPinnable: false, 
    preserveHeaderStateOnScroll: true, useIconTabBar: true, toggleHeaderOnTitleClick: true,
    sections: [
        new sap.uxap.ObjectPageSection({ showTitle: true,icon:new sap.f.Avatar({src: "{image}",displaySize: "L",displayShape: "Circle",imageFitType: "Cover"}), title: oBundle.getText("Dashboard"),
            subSections: new sap.uxap.ObjectPageSubSection({ blocks: [GSblock1]})
        }),        
        new sap.uxap.ObjectPageSection({ showTitle: true, title: oBundle.getText("Appointments"),
        subSections: new sap.uxap.ObjectPageSubSection({ blocks: [oTableAppointment] })
        }),
        new sap.uxap.ObjectPageSection({ showTitle: true, title: oBundle.getText("Patient History"),
            subSections: new sap.uxap.ObjectPageSubSection({ blocks: [timeline1]})
        }),
        new sap.uxap.ObjectPageSection({ showTitle: true, title: oBundle.getText("Personal Information"),
        subSections: new sap.uxap.ObjectPageSubSection({ blocks: [userProfile] })
        }),
]});