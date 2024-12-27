var oBundle = "";
        var browserLang = navigator.language || navigator.userLanguage;
        var languageCode = browserLang.toLowerCase();

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
var TableHeader = new sap.m.Label({ wrapping: true, design:sap.m.LabelDesign.Bold});
var oTableAppointment = new sap.m.Table({ growing: true,alternateRowColors:true,
    noDataText:oBundle.getText("No_Data"), growingTriggerText:oBundle.getText("More"),
    sticky:[sap.m.Sticky.ColumnHeaders,sap.m.Sticky.HeaderToolbar,sap.m.Sticky.InfoToolbar],
    growingThreshold: 25, growingScrollToLoad : false,
    columns: [
        new sap.m.Column({width:"100px",header: new sap.m.Label({text: oBundle.getText("Action"),design: sap.m.LabelDesign.Bold})}),
        new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Appointment ID"),design: sap.m.LabelDesign.Bold})}),
        new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Date"),design: sap.m.LabelDesign.Bold})}),
        new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Status"),design: sap.m.LabelDesign.Bold})}),
       
        new sap.m.Column({header: new sap.m.Label({ text: oBundle.getText("Disease"), design: sap.m.LabelDesign.Bold})}),

        new sap.m.Column({header: new sap.m.Label({ text: oBundle.getText("Appointment Time"), design: sap.m.LabelDesign.Bold})}),
        new sap.m.Column({header: new sap.m.Label({ text: oBundle.getText("Doctor"), design: sap.m.LabelDesign.Bold})}),
        new sap.m.Column({ header: TableHeader.clone().setText(oBundle.getText("Note")),
                minScreenWidth : "2500px",popinDisplay : "Inline",demandPopin : true}),
    ]
});
var oTableAppointmentTemplate = new sap.m.ColumnListItem({
    cells: [
            new sap.m.Button({ type: "Emphasized",icon: "sap-icon://action",text: oBundle.getText("Action"),
            press: function (event) {
                var model = this.getModel();
                var path = event.getSource().getBindingContext().getPath();
                var obj = model.getProperty(path);
                displayMenuParts(event, obj);
            }
        }),
        new sap.m.Label({wrapping:true,text: "{id}"}),
        new sap.m.Label({wrapping:true,text: "{created_date}"}),
        new sap.tnt.InfoLabel({
            text: {
                path: "status",
                formatter: function (status) {
                    
                    if (status == "1") {
                        this.setColorScheme(8);
                        return oBundle.getText("Checked-In");
                    } else if (status == "2") {
                        this.setColorScheme(3);
                        return oBundle.getText("Missed");
                    } else if (status == "3") {
                        this.setColorScheme(1);
                        return oBundle.getText("Upcomming");
                    }
                }
            }
        }),
        new sap.m.Label({wrapping:true,text: "{disease}"}),
        new sap.m.Label({wrapping:true,text: "{time}"}),
        new sap.m.Label({wrapping:true,text: "{doctor}"}),
        new sap.m.Label({wrapping:true,text: "{note}"}),
    ]
});
oTableAppointment.setHeaderToolbar(new sap.m.Toolbar({
    content: [
        new sap.m.Button({
            type: sap.m.ButtonType.Emphasized,
            icon: "sap-icon://add",
            text: oBundle.getText("New Appointment"),
            press: function () {
                addAppointment(1);
            }
        }),
        new sap.m.ToolbarSpacer(),
        new sap.m.SearchField({
            placeholder: oBundle.getText("Search"),
            width: "300px",
            liveChange: function (event) {
                var oBinding = oTableAppointment.getBinding("items");
                var searchStr = this.getValue();
                if (oBinding) {
                    var oFilters = [
                    new sap.ui.model.Filter("id", sap.ui.model.FilterOperator.Contains, searchStr),
                    new sap.ui.model.Filter("created_date", sap.ui.model.FilterOperator.Contains, searchStr),
                    new sap.ui.model.Filter("disease", sap.ui.model.FilterOperator.Contains, searchStr),
                    new sap.ui.model.Filter("time", sap.ui.model.FilterOperator.Contains, searchStr),

                    new sap.ui.model.Filter("doctor", sap.ui.model.FilterOperator.Contains, searchStr),
                    new sap.ui.model.Filter("note", sap.ui.model.FilterOperator.Contains, searchStr),
                    ];
                    var filterObj = new sap.ui.model.Filter(oFilters, false);
                    oBinding.filter(filterObj);
                } else {
                    oBinding.filter([]);
                }
            }

        }),
    ]
}));

var patientAppointmentJSON = [
    {
        "id":"AP1011",
        "created_date":"01-Oct-2023 11:28 AM",
        "disease":"Flu",
        "status":"3",
        "time":"10:00 AM",
        "doctor":"Dr. A",
        "note":"Swine flu",
    },
    {
        "id":"AP1010",
        "created_date":"01-Jan-2023 05:00 PM",
        "disease":"Cough & Cold",
        "status":"2",
        "time":"10:00 AM",
        "doctor":"Dr. A",
        "note":"",
    },
    {
        "id":"AP1009",
        "created_date":"09-Dec-2022 11:45 AM",
        "disease":"Diabetes",
        "status":"1",
        "time":"10:00 AM",
        "doctor":"Dr. A",
        "note":"Taking doses of A medicine",
    },
    {
        "id":"AP1008",
        "created_date":"10-Oct-2022 03:28 PM",
        "disease":"Depression",
        "status":"1",
        "time":"10:00 AM",
        "doctor":"Dr. A",
        "note":"",
    },
    {
        "id":"AP1007",
        "created_date":"09-Sep-2021 06:28 AM",
        "disease":"Coronavirus (COVID-19)",
        "status":"2",
        "time":"10:00 AM",
        "doctor":"Dr. A",
        "note":"Last night I ate pizza wihtout washing my hands.",
    },
    {
        "id":"AP1006",
        "created_date":"02-Aug-2021 10:10 AM",
        "disease":"Cough",
        "status":"1",
        "time":"10:00 AM",
        "doctor":"Dr. A",
        "note":"",
    },
    {
        "id":"AP1005",
        "created_date":"31-Jul-2021 01:28 PM",
        "disease":"Chronic pain",
        "status":"2",
        "time":"10:00 AM",
        "doctor":"Dr. A",
        "note":"",
    },
    {
        "id":"AP1004",
        "created_date":"28-Feb-2021 10:11 AM",
        "disease":"Cough & Cold",
        "status":"1",
        "time":"10:00 AM",
        "doctor":"Dr. A",
        "note":"A little Cold And Fever with body pain",
    },
    {
        "id":"AP1003",
        "created_date":"25-Jan-2021 11:28 AM",
        "disease":"Asthma",
        "status":"1",
        "time":"10:00 AM",
        "doctor":"Dr. A",
        "note":"I have been taking the medicines (a, b, c)  from past few years",
    },
    {
        "id":"AP1002",
        "created_date":"08-Oct-2020 07:28 AM",
        "disease":"Chest pain",
        "status":"1",
        "time":"10:00 AM",
        "doctor":"Dr. A",
        "note":"It Occur suddenly after 1-2 Hours.",
    },
    {
        "id":"AP1001",
        "created_date":"01-Jan-2020 01:28 PM",
        "disease":"Anxiety",
        "status":"1",
        "time":"10:00 AM",
        "doctor":"Dr. A",
        "note":"Shaking Hands & Sleepless nights",
    },
]

var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({ modelData: patientAppointmentJSON });
oTableAppointment.setModel(oModel);
oTableAppointment.bindItems({ path: "/modelData", template: oTableAppointmentTemplate });

function addAppointment(src){

    var reqLbl = new sap.m.Label({ required: true });
    var oFieldAP1 = new sap.m.Input({});
    var oFieldAP2 = new sap.m.DateTimePicker({width: "100%",
        displayFormat: "dd-MMM-yyyy hh:mm a",
        valueFormat: "dd-MMM-yyyy hh:mm a"
    });
    var oFieldAP3 = new sap.m.MultiComboBox({
        items:[
            new sap.ui.core.ListItem({key:oBundle.getText("Influenza"), text: oBundle.getText("Influenza")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Common Cold"), text: oBundle.getText("Common Cold")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Smallpox"), text: oBundle.getText("Smallpox")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Chickenpox"), text: oBundle.getText("Chickenpox")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Mumps"), text: oBundle.getText("Mumps")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Measles"), text: oBundle.getText("Measles")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Poliomyelitis"), text: oBundle.getText("Poliomyelitis")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Yellow fever"), text: oBundle.getText("Yellow fever")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Ebola haemorrhagic fever"), text: oBundle.getText("Ebola haemorrhagic fever")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Zika disease"), text: oBundle.getText("Zika disease")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Diphtheria"), text: oBundle.getText("Diphtheria")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Gonorrhoea"), text: oBundle.getText("Gonorrhoea")}),
    ]}).addEventDelegate({onAfterRendering: function(e) {oFieldAP3.$().find("input").attr("readonly", true);}});

    var oFieldAP4 = new sap.m.ComboBox({
        items:[
            new sap.ui.core.ListItem({key:oBundle.getText("Podiatrist"), text: oBundle.getText("Podiatrist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("General Practitioner"), text: oBundle.getText("General Practitioner")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Pediatrician"), text: oBundle.getText("Pediatrician")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Endocrinologist"), text: oBundle.getText("Endocrinologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Neurologist"), text: oBundle.getText("Neurologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Rheumatologist"), text: oBundle.getText("Rheumatologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Allergist/Immunologist"), text: oBundle.getText("Allergist/Immunologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Psychiatrist"), text: oBundle.getText("Psychiatrist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Nephrologist"), text: oBundle.getText("Nephrologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Pulmonologist"), text: oBundle.getText("Pulmonologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Surgeon"), text: oBundle.getText("Surgeon")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Ophthalmologist"), text: oBundle.getText("Ophthalmologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Oncologist"), text: oBundle.getText("Oncologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Urologist"), text: oBundle.getText("Urologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Otolaryngologist"), text: oBundle.getText("Otolaryngologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Dermatologist"), text: oBundle.getText("Dermatologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Radiologist"), text: oBundle.getText("Radiologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Gastroenterologist"), text: oBundle.getText("Gastroenterologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Cardiologist"), text: oBundle.getText("Cardiologist")}),
            new sap.ui.core.ListItem({key:oBundle.getText("Orthopedist"), text: oBundle.getText("Orthopedist")}),
    ]}).addEventDelegate({onAfterRendering: function(e) {oFieldAP4.$().find("input").attr("readonly", true);}});

    var oFieldAP5 = new sap.m.Input({});
   
    
    var oForm1 = new sap.ui.layout.form.Form({
        editable: true,
        layout: new sap.ui.layout.form.ResponsiveGridLayout(),
        formContainers: [
            new sap.ui.layout.form.FormContainer({
                formElements: [
                    new sap.ui.layout.form.FormElement({label: reqLbl.clone().setText(oBundle.getText("Appointment ID")), fields: [oFieldAP1]}),
                    new sap.ui.layout.form.FormElement({label: reqLbl.clone().setText(oBundle.getText("Date")), fields: [oFieldAP2]}),
                    new sap.ui.layout.form.FormElement({label: reqLbl.clone().setText(oBundle.getText("Disease")), fields: [oFieldAP3]}),
                    new sap.ui.layout.form.FormElement({label: reqLbl.clone().setText(oBundle.getText("Specialist")), fields: [oFieldAP4]}),
                    new sap.ui.layout.form.FormElement({label: reqLbl.clone().setText(oBundle.getText("Doctor Name")), fields: [oFieldAP5]}),
                    
                    
            ]})
        ]
    });
    var addApt = new sap.m.Button({ visible: true, icon: "sap-icon://add",
                text: oBundle.getText("Add_Appointment"),
                press: function () {

                  

                }
            });
    var oDialogAP = new sap.m.Dialog({escapeHandler:function(){},
        contentWidth: "40%", 
        contentHeight: "100%", draggable: true, resizable: true,
        title: oBundle.getText("New Appointment"),
        content: [oForm1],
        buttons: [addApt,
            new sap.m.Button({ text: oBundle.getText("Close"), icon: "sap-icon://decline",press: function () { oDialogAP.close();}})
        ]
    }).open();
}