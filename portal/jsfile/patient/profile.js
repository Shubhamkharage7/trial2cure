

var microChart = new sap.m.ProgressIndicator({
    showValue:true,
    width:"15%",
    percentValue:"100",
    state: "Success",
    percentValue:"38.5",
    displayValue: "38.5%"
}),
oFieldP1 = new sap.m.Input({value:"Sachin Upadhyay", width:"80%"});
oFieldP2 = new sap.m.Input({value:"30-Oct-1999 11:11 AM", width:"80%"});
oFieldP3 = new sap.m.Input({value:"189", description:"Cm"});
oFieldP4 = new sap.m.Input({value:"75", description:"Kg",
            liveChange:function(){
                var height = parseFloat(oFieldP3.getValue())/100;
                var bmi = parseFloat(parseFloat(oFieldP4.getValue())/(height*height)).toFixed(2);
                microChart.setPercentValue(bmi);
                microChart.setDisplayValue(bmi);
                if(bmi < 18.5){
                    microChart.setState("Warning");
                }else if(bmi <= 24.9 && bmi > 18.4 ){
                    microChart.setState("Success");
                }else{
                    microChart.setState("Error");
                }
            }});
oFieldP5 = new sap.m.MultiComboBox({
    selected:"Common Cold",
    width:"80%",
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
]}).addEventDelegate({onAfterRendering: function(e) {oFieldP5.$().find("input").attr("readonly", true);}});


var generalInfo = new sap.ui.layout.form.Form({ editable: true,
    layout: new sap.ui.layout.form.ResponsiveGridLayout(),
    formContainers: [
        new sap.ui.layout.form.FormContainer({
            formElements: [
                new sap.ui.layout.form.FormElement({ 
                    label: new sap.m.Label({required: true, text: oBundle.getText("Name")}),
                    fields: [oFieldP1]
                }),
                new sap.ui.layout.form.FormElement({ 
                    label: new sap.m.Label({required: true, text: oBundle.getText("DOB")}),
                    fields: [oFieldP2]
                }),
                new sap.ui.layout.form.FormElement({
                    label: new sap.m.Label({ text: oBundle.getText("Height") }),
                    fields: [oFieldP3]
                }),
                new sap.ui.layout.form.FormElement({ 
                    label: new sap.m.Label({required: true, text: oBundle.getText("Weight")}),
                    fields: [oFieldP4]
                }),
                new sap.ui.layout.form.FormElement({ 
                    label: new sap.m.Label({required: true, text: oBundle.getText("Existing Disease")}),
                    fields: [oFieldP5]
                }),
                
             ]})
    ]}).addStyleClass("sapUiNoContentPadding");


var oTableDoc = new sap.m.Table({ growing: true,
    noDataText:oBundle.getText("No_Data"), growingTriggerText:oBundle.getText("More"),
    sticky:[sap.m.Sticky.ColumnHeaders,sap.m.Sticky.HeaderToolbar,sap.m.Sticky.InfoToolbar],
    growingThreshold: 5, growingScrollToLoad : false,
    columns: [
        new sap.m.Column({header: new sap.m.Label({text: oBundle.getText("Description"),design: sap.m.LabelDesign.Bold})}),
        new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Date"),design: sap.m.LabelDesign.Bold})}),
        new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("ID"),design: sap.m.LabelDesign.Bold})}),
        // new sap.m.Column({header: new sap.m.Label({ text: oBundle.getText("Note"), design: sap.m.LabelDesign.Bold})}),
    ]
});
var oTableDocTemplate = new sap.m.ColumnListItem({
    cells: [
        new sap.m.Label({wrapping:true,text: "{doc_name}"}),
        new sap.m.Label({wrapping:true,text: "{created_date}"}),
        new sap.m.Button({
            text: oBundle.getText("Download"),
            icon: "sap-icon://download",
            type: sap.m.ButtonType.Emphasized,
            text: {
                path: "image",
                formatter: function (custom1) {
                    // if (custom1 != null) {
                    //     if (custom1.length > 12) {
                    //          this.setVisible(true);
                    //     } else {
                    //          this.setVisible(false);
                    //     }
                    // } else {
                    //     this.setVisible(false);
                    // }
                    return oBundle.getText("Download");
                }
            },
            press: function (e) {
                // var model = this.getModel();
                // var path = e.getSource().getBindingContext().getPath();
                // var obj = model.getProperty(path);
                // var blob_path = obj['image'];

                // window.open(blob_path, "_blank");
            }
        }),
        // new sap.m.Label({wrapping:true,text: "{note}"}),
    ]
});

var docArray = [
    {
        doc_name:"SSN",
        image:"",
        created_date:"01-Oct-2023 11:28 AM",
        note:""
    },
    // {
    //     doc_name:"PAN",
    //     image:"",
    //     created_date:"09-Sep-2021 06:28 AM",
    //     note:""
    // },
    {
        doc_name:"Driving licence",
        image:"",
        created_date:"02-Aug-2021 10:10 AM",
        note:""
    },
    {
        doc_name:"Birth Certificate",
        image:"",
        created_date:"",
        note:""
    },
    {
        doc_name:"Insurance paper",
        image:"",
        created_date:"28-Feb-2021 10:11 AM",
        note:"Insurance paper"
    },
    {
        doc_name:"health Plus",
        image:"",
        created_date:"25-Jan-2021 11:28 AM",
        note:"Healt Plus policy paper"
    },
];

var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({ modelData: docArray });
oTableDoc.setModel(oModel);
oTableDoc.bindItems({ path: "/modelData", template: oTableDocTemplate });



var userProfile = new sap.uxap.ObjectPageLayout({ headerContentPinnable: false, 
    preserveHeaderStateOnScroll: true, useIconTabBar: true, toggleHeaderOnTitleClick: true,
    headerTitle: new sap.uxap.ObjectPageDynamicHeaderTitle({
        actions:[new sap.m.Label({text: oBundle.getText("BMI: "),design: sap.m.LabelDesign.Bold}),microChart],
        heading: [
            new sap.m.HBox({
                alignItems: "Center",
                items: [
                    new sap.f.Avatar({src: "Images/user1.jpeg",displaySize: "L",displayShape: "Circle",imageFitType: "Cover"}).addStyleClass("sapUiTinyMarginTop sapUiTinyMarginEnd"),
                    new sap.m.VBox({
                        alignItems: "Center",
                        items: [
                            new sap.m.Label({text: oBundle.getText("Sachin Upadhyay"),design: sap.m.LabelDesign.Bold}),
                            new sap.m.Label({text: oBundle.getText("+91 9413775527")}),
                        ]
                    })
                ]
            }),
            
            
        ],
        // actions:[new sap.f.Avatar({src: "{image}",displaySize: "L",displayShape: "Circle",imageFitType: "Cover"}),
    // ]
    }),
    
    headerContent: [
        new sap.m.HBox({
            alignItems: "Center",
            items: [
                new sap.m.Label({text: oBundle.getText("Email-ID: "),design: sap.m.LabelDesign.Bold}),
                new sap.m.Label({text: oBundle.getText("Sachin@oxmaint.com")}),
            ]
        }),
        new sap.m.HBox({
            alignItems: "Center",
            items: [
                new sap.m.Label({text: oBundle.getText("Location: "),design: sap.m.LabelDesign.Bold}),
                new sap.m.Label({text: oBundle.getText("India")}),
            ]
        }), 
        new sap.m.HBox({
            alignItems: "Center",
            items: [
                new sap.m.Label({text: oBundle.getText("Address: "),design: sap.m.LabelDesign.Bold}),
                new sap.m.Label({text: oBundle.getText("94 A Ganesh Marg Gopalpura by pass, Jaipur")}),
            ]
        }), 
    ],
    sections: [    
        new sap.uxap.ObjectPageSection({ showTitle: true, title: oBundle.getText("General Info"),
        subSections: new sap.uxap.ObjectPageSubSection({ blocks: [generalInfo] })
        }),
        new sap.uxap.ObjectPageSection({ showTitle: true, title: oBundle.getText("Documents"),
            subSections: new sap.uxap.ObjectPageSubSection({ blocks: [oTableDoc]})
        }),
]});
