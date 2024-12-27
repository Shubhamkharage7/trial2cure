// //--------------------------------------------Start Nested Data--------------------------------------------
// var oChartNestedStatus = new sap.viz.ui5.controls.VizFrame({'width': '100%',
//     'height': '350px',
//     'uiConfig': {
//         'applicationSet': 'fiori'
//     },
//     'vizType': 'column',
//     selectData: function (e){
//         // oTableID.getColumns()[0].setVisible (true);
//         // oTableID.getColumns()[1].setVisible (true);
//         // oTableID.getColumns()[2].setVisible (true);
//         // oTableID.getColumns()[3].setVisible (true);
//         // oTableID.getColumns()[4].setVisible (true);
//         // oTableID.getColumns()[5].setVisible (true);
//         // oTableID.getColumns()[6].setVisible (true);
//         // oTableID.getColumns()[7].setVisible (true);
//         // oTableID.getColumns()[8].setVisible (true);
    
//         var aSelectData = e.getParameter("data");
//         var selectedData = statusData.filter(function(obj, event){ return obj.title == aSelectData[0]['data']['Category']});
//         console.log(selectedData[0]['data'])
//         // var oModel01 = new sap.ui.model.json.JSONModel();
//         // oModel01.setData({ modelData: actionStatusIDjson[aSelectData[0]['data']['Category']]});
//         // oTableID.setModel(oModel01);
//         // oTableID.bindItems({ path: "/modelData", template: oTableIDTemplate });
//         InspDashDialog1 = new sap.m.Dialog({
//             draggable:true,
//             title: "Chart",
//             resizable:true,
//             contentWidth:"80%",
//             content:[new sap.m.Label({text:''})],
//             buttons: [
//                 new sap.m.Button({ text: oBundle.getText("Close"), icon: "sap-icon://decline",
//                     press: function (oEvent) {InspDashDialog1.close();}
//                 })
//             ],
//         })
//         InspDashDialog1.open();
//         InspDashDialog1.setTitle(aSelectData[0]['data']['Category'] + " " + oBundle.getText("Corrective_Action"));
//     }
// });
            
// var oChartSetNestedStatus = new sap.viz.ui5.data.FlattenedDataset({
//     dimensions: [{
//         name:  "Name",
//         value: "{title}"
//     }],
//     measures: [{
//         name:  oBundle.getText('Percentage'),
//         value: '{count}',
        
//     }],
//     data: {
//         path: "/modelData",
//     }
// });
// oChartNestedStatus.setVizProperties({
//     title:{visible: true, text:"Clinical Trials by Status"},
//     plotArea: {
//         dataLabel: {visible: true},
//         isRoundCorner: true,
//         animation:{dataLoading:true},
//         drawingEffect: sap.viz.ui5.types.VerticalBar_drawingEffect.glossy,
//         // dataPointStyle: {"rules":
//         //         [{
//         //             "dataContext": {"Category": oBundle.getText("Completed")},
//         //             "properties": {
//         //                 "color":"#2b7c2b"
//         //             },
//         //             "displayName":oBundle.getText("Completed")
//         //         },
//         //             {
//         //             "dataContext": {"Category": oBundle.getText("Ongoing, recruiting")},
//         //             "properties": {
//         //                 "color":"#ffb200"
//         //             },
//         //             "displayName":oBundle.getText("Ongoing, recruiting")
//         //         },
//         //             {
//         //             "dataContext": {"Category": oBundle.getText("Withdraw")},
//         //             "properties": {
//         //                 "color":"#5e696e"
//         //             },
//         //             "displayName":oBundle.getText("Withdraw")
//         //         },
//         //             {
//         //             "dataContext": {"Category": oBundle.getText("Terminated")},
//         //             "properties": {
//         //                 "color":"#bb0000"
//         //             },
//         //             "displayName":oBundle.getText("Terminated")
//         //         },
//         //             {
//         //             "dataContext": {"Category": oBundle.getText("Planned")},
//         //             "properties": {
//         //                 "color":"#4765bf"
//         //             },
//         //             "displayName":oBundle.getText("Planned")
//         //         },
//         //             {
//         //             "dataContext": {"Category": oBundle.getText("Ongoing, non recruiting")},
//         //             "properties": {
//         //                 "color":"#d18f1a"
//         //             },
//         //             "displayName":oBundle.getText("Ongoing, non recruiting")
//         //         },
//         //             {
//         //             "dataContext": {"Category": oBundle.getText("Suspended")},
//         //             "properties": {
//         //                 "color":"#b7c9ff"
//         //             },
//         //             "displayName":oBundle.getText("Suspended")
//         //         },
//         //         ]
//         //     },
//         },
//         valueAxis: {title: {visible: true}},
//         categoryAxis: {title: {visible: false}},
//         legend: {visible:false},
// });

// oChartNestedStatus.setDataset(oChartSetNestedStatus);
        
// oChartNestedStatus.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
//     'uid': "primaryValues",
//     'type': "Measure",
//     'values': ["Percentage"]
// }));
// oChartNestedStatus.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
//     'uid': "axisLabels",
//     'type': "Dimension",
//     'values': ['Name']
// })); 


// //--------------------------------------------End Nested Data----------------------------------------------


// var oBundle = "";
// var browserLang = navigator.language || navigator.userLanguage;
var languageCode = localStorage.getItem('languageCode');
if(languageCode == null){ languageCode = "EN";}
console.log(languageCode)
if (languageCode.includes("EN")) {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_en.properties" });
} else if (languageCode.includes("HI")) {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_hi.properties" });
} else if (languageCode.includes("ES")) {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_es.properties" });
}  else {
    oBundle = jQuery.sap.resources({ url: "i18n/i18n_en.properties" });
}
//---------------------------------------------Clinical test By Status-----------------------------------------

var oChartStatus = new sap.viz.ui5.controls.VizFrame({'width': '100%',
    'height': '350px',
    'uiConfig': {
        'applicationSet': 'fiori'
    },
    'vizType': 'column',
    selectData: function (e){
        // oTableID.getColumns()[0].setVisible (true);
        // oTableID.getColumns()[1].setVisible (true);
        // oTableID.getColumns()[2].setVisible (true);
        // oTableID.getColumns()[3].setVisible (true);
        // oTableID.getColumns()[4].setVisible (true);
        // oTableID.getColumns()[5].setVisible (true);
        // oTableID.getColumns()[6].setVisible (true);
        // oTableID.getColumns()[7].setVisible (true);
        // oTableID.getColumns()[8].setVisible (true);
    
        var aSelectData = e.getParameter("data");
        var selectedData = statusData.filter(function(obj, event){ return obj.title == oBundle.getText(aSelectData[0]['data']['Category'])});
        // console.log(selectedData[0]['data'])//s
        // var oModel01 = new sap.ui.model.json.JSONModel();
        // oModel01.setData({ modelData: actionStatusIDjson[aSelectData[0]['data']['Category']]});
        // oTableID.setModel(oModel01);
        // oTableID.bindItems({ path: "/modelData", template: oTableIDTemplate });
        InspDashDialog1 = new sap.m.Dialog({
            draggable:true,
            title: "Chart",
            resizable:true,
            contentWidth:"80%",
            content:[new sap.m.Label({text:''})],
            buttons: [
                new sap.m.Button({ text: oBundle.getText("Close"), icon: "sap-icon://decline",
                    press: function (oEvent) {InspDashDialog1.close();}
                })
            ],
        })
        InspDashDialog1.open();
        InspDashDialog1.setTitle(oBundle.getText(aSelectData[0]['data']['Category']) + " " + oBundle.getText("Status"));
    }
});
            
var oChartSetStatus = new sap.viz.ui5.data.FlattenedDataset({
    dimensions: [{
        name:  "Category",
        value: "{title}"
    }],
    measures: [{
        name:  oBundle.getText('Percentage'),
        value: '{count}',
        
    }],
    data: {
        path: "/modelData",
    }
});
oChartStatus.setVizProperties({
    title:{visible: true, text:oBundle.getText("Clinical_Trials_by_Status")},
    plotArea: {
        dataLabel: {visible: true},
        isRoundCorner: true,
        animation:{dataLoading:true},
        drawingEffect: sap.viz.ui5.types.VerticalBar_drawingEffect.glossy,
        dataPointStyle: {"rules":
                [{
                    "dataContext": {"Category": "Completed"},
                    "properties": {
                        "color":"#2b7c2b"
                    },
                    "displayName":oBundle.getText("Completed")
                },
                    {
                    "dataContext": {"Category": "Ongoing recruiting"},
                    "properties": {
                        "color":"#ffb300"
                    },
                    "displayName":oBundle.getText("Ongoing_recruiting")
                },
                    {
                    "dataContext": {"Category": "Withdraw"},
                    "properties": {
                        "color":"#5e696e"
                    },
                    "displayName":oBundle.getText("Withdraw")
                },
                    {
                    "dataContext": {"Category": "Terminated"},
                    "properties": {
                        "color":"#bb0000"
                    },
                    "displayName":oBundle.getText("Terminated")
                },
                    {
                    "dataContext": {"Category": "Planned"},
                    "properties": {
                        "color":"#4765bf"
                    },
                    "displayName":oBundle.getText("Planned")
                },
                    {
                    "dataContext": {"Category": "Ongoing, non recruiting"},
                    "properties": {
                        "color":"#d18f1a"
                    },
                    "displayName":oBundle.getText("Ongoing_non_recruiting")
                },
                    {
                    "dataContext": {"Category": "Suspended"},
                    "properties": {
                        "color":"#b7c9ff"
                    },
                    "displayName":oBundle.getText("Suspended")
                },
                ]
            },
        },
        valueAxis: {title: {visible: true}},
        categoryAxis: {title: {visible: false}},
        legend: {visible:false},
});

oChartStatus.setDataset(oChartSetStatus);
        
oChartStatus.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
    'uid': "primaryValues",
    'type': "Measure",
    'values': [oBundle.getText("Percentage")]
}));
oChartStatus.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
    'uid': "axisLabels",
    'type': "Dimension",
    'values': ['Category']
})); 


var statusData = [
    {
        "title":"Completed",
        "count":28,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Ongoing, recruiting",
        "count":28,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Withdraw",
        "count":13.1,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Terminated",
        "count":7.2,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Planned",
        "count":6.0,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Ongoing, non recruiting",
        "count":5.8,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Suspended",
        "count":0.4,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
   
]

var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({ modelData: statusData});
oChartStatus.setModel(oModel);
oChartStatus.setBusy(false);
//-------------------------------------------------End Clinical trial by status-----------------------------------------------------




//-------------------------------------------------Start Clinical trial by Phase----------------------------------------------------- 
var oPieChartPhases = new sap.viz.ui5.controls.VizFrame({
    'uiConfig': {
        'applicationSet': 'fiori'
    },
    'width': '100%',
    'height': '250px',
    'vizType': 'donut'
});

var oPieChartSetPhases = new sap.viz.ui5.data.FlattenedDataset({
dimensions: [{
    name: 'Phase',
    value: "{title}"
}],
measures: [{
    name: 'Number',
    value: '{count}'
}],
data: {
    path: "/modelData"
}
});

oPieChartPhases.setDataset(oPieChartSetPhases);
oPieChartPhases.setVizProperties({
    plotArea: {
        dataLabel: {visible: true},
        legend:{title:{visible: true}},
        colorPalette : ['#5899DA','#19A979','#FCE903','#ED4A7B','#E8743B']
    },
    legendGroup: {layout:{position : 'right'}},
    title:{visible: true,text: oBundle.getText("Clinical_Trial_by_Phase")}
});

oPieChartPhases.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
    'uid': "size",
    'type': "Measure",
    'values': ["Number"]
}));
oPieChartPhases.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
    'uid': "color",
    'type': "Dimension",
    'values': ["Phase"]
}));

var testPhaseData = [
    {
        "title":"Phase 1",
        "count":28,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Phase 2",
        "count":28,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Phase 3",
        "count":13.1,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Phase 4",
        "count":7.2,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Phase 5",
        "count":6.0,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Phase 6",
        "count":5.8,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Phase 7",
        "count":0.4,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
   
];

var oModel1 = new sap.ui.model.json.JSONModel();
oModel1.setData({ modelData: testPhaseData});
oPieChartPhases.setModel(oModel1);
oPieChartPhases.setBusy(false);

//-------------------------------------------------End Clinical trial by Phase-----------------------------------------------------




//-------------------------------------------------Start Clinical trial by Location----------------------------------------------------- 
var oPieChartLocation = new sap.viz.ui5.controls.VizFrame({
    'uiConfig': {
        'applicationSet': 'fiori'
    },
    'width': '100%',
    'height': '250px',
    'vizType': 'donut'
});

var oPieChartSetLocation = new sap.viz.ui5.data.FlattenedDataset({
dimensions: [{
    name: 'Location',
    value: "{title}"
}],
measures: [{
    name: 'Number',
    value: '{count}'
}],
data: {
    path: "/modelData"
}
});

oPieChartLocation.setDataset(oPieChartSetLocation);
oPieChartLocation.setVizProperties({
    plotArea: {
        dataLabel: {visible: true},
        legend:{title:{visible: true}},
        colorPalette : ['#5899DA','#19A979','#FCE903','#ED4A7B','#E8743B']
    },
    legendGroup: {layout:{position : 'right'}},
    title:{visible: true,text: oBundle.getText("Clinical_Trial_by_Location")}
});

oPieChartLocation.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
    'uid': "size",
    'type': "Measure",
    'values': ["Number"]
}));
oPieChartLocation.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
    'uid': "color",
    'type': "Dimension",
    'values': ["Location"]
}));

var testLocationData = [
    {
        "title":"India",
        "count":5,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"USA",
        "count":8,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"Dubai",
        "count":13,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    },
    {
        "title":"New Zealand",
        "count":12,
        data:[
            {
                "name":"sachin",
                "age":"23",
                "location":"India"
            },
            {
                "name":"Ram",
                "age":"29",
                "location":"India"
            },
            {
                "name":"Aditya",
                "age":"25",
                "location":"India"
            },
            {
                "name":"Vaibhav",
                "age":"28",
                "location":"India"
            },
            {
                "name":"Yash",
                "age":"23",
                "location":"India"
            },
            {
                "name":"yasha",
                "age":"23",
                "location":"India"
            }
        ]
    }
];

var oModel2 = new sap.ui.model.json.JSONModel();
oModel2.setData({ modelData: testLocationData});
oPieChartLocation.setModel(oModel2);
oPieChartLocation.setBusy(false);

//-------------------------------------------------End Clinical trial by Location-----------------------------------------------------

//--------------------------------------------------Start Tiles---------------------------------------------------------------
var contentPTile1 = new sap.m.NumericContent({
    value:"11",
    animateTextChange:true,
    truncateValueTo:30,
    withMargin:false,
});
var PTile1 = new sap.m.GenericTile({
    header:oBundle.getText("Lab_Reports"),
    headerImage:"sap-icon://lab",
    backgroundImage:"Images/img1.jpg",
    frameType:"TwoByOne",
    tileContent:{unit:oBundle.getText("Count"),content:[contentPTile1]},  
    press:function(){
        oAppPharmaHome.setSelectedSection("ph2");
    }
}).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop");

var contentPTile2 = new sap.m.NumericContent({
    value:"125",
    animateTextChange:true,
    truncateValueTo:30,
    withMargin:false,
});
var PTile2 = new sap.m.GenericTile({
    header:oBundle.getText("Latest_Test"),
    headerImage:"sap-icon://newspaper",
    backgroundImage:"Images/img2.jpg",
    frameType:"TwoByOne",
    tileContent:{unit:oBundle.getText("Count"),content:[contentPTile2]},  
    press:function(){
        oAppPharmaHome.setSelectedSection("ph3");
    }
}).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop");

var contentPTile3 = new sap.m.NumericContent({
    value:"25",
    animateTextChange:true,
    truncateValueTo:30,
    withMargin:false,
});
var PTile3 = new sap.m.GenericTile({
    header:oBundle.getText("Out_of_Range"),
    headerImage:"sap-icon://lab",
    backgroundImage:"Images/img1.jpg",
    frameType:"TwoByOne",
    tileContent:{unit:oBundle.getText("Count"),content:[contentPTile3]},  
    press:function(){
        oAppPharmaHome.setSelectedSection("ph4");
    }
}).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop");
//--------------------------------------------------EndTiles---------------------------------------------------------------

var pharmaBlock1 = new sap.ui.layout.BlockLayout({
    content: [
        new sap.ui.layout.BlockLayoutRow({
            content: [
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [PTile1]
                }),                
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [PTile2]
                }),                
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [PTile3]
                }),                
            ]
        }),
        new sap.ui.layout.BlockLayoutRow({
            content: [
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [oChartStatus]
                }),                
                                           
            ]
        }),
        new sap.ui.layout.BlockLayoutRow({
            content: [
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [oPieChartPhases]
                }),                
                new sap.ui.layout.BlockLayoutCell({ 
                    width: 1,
                    titleAlignment:"Center",
                    content: [oPieChartLocation]
                }),                            
            ]
        }),
    ]
});
function openDialogMapVehicle(value) {


	var oHBox = new sap.m.HBox({height: "400px",width: "100%"});
	var oBlockLayoutCell = new sap.ui.layout.BlockLayoutCell({content: [oHBox]});

	var oDialog = new sap.m.Dialog({ title: "Map",
		draggable:true, resizable: true,
		contentWidth: "60%",
		content: [oBlockLayoutCell],
		beginButton: new sap.m.Button({text: "Close",
			press: function(oEvent){
			oDialog.close();
		 }
		})
	});

	oDialog.open();

	var script = document.createElement("script");
	script.onload = function () {
		setMapDataVehicle(oHBox,value);
	};
	script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCKyhW2JqLM_CsXIjMGuu6vwxuUJq7XBmc";
	document.body.appendChild(script);
  
}

function nullCheckAll(value){
    return (value !=null && value !="null" && value != ""  && value!="undefined");
}

function setMapDataVehicle(oHBox, value) {
    var mapValue = patientList
    if(nullCheckAll(value)){
        mapValue = [value]
    }else{

    }
    var latlongCenter = new google.maps.LatLng(39.291035900000004, -84.320976);

	for(var i=0;i<mapValue.length;i++){
		var item = mapValue[i]['geo_coordinates'];
		if(item!=null){
			if(item!="" ){
			var splitArray = item.split(",");
			latlongCenter = new google.maps.LatLng(parseFloat(splitArray[0]), parseFloat(splitArray[1]));
			}
		}
	};
        
	var mapProperty = { center: latlongCenter, zoom: 12, scrollwheel: true, draggable: true, 
		mapTypeId: google.maps.MapTypeId.ROADMAP};
    
	var map = new google.maps.Map(oHBox.getDomRef(), mapProperty);
        console.log(mapValue)
	for(var i=0;i<mapValue.length;i++){
		var item = mapValue[i]['geo_coordinates'];
		var vehicle_Number = mapValue[i]['name'];
		// console.log(mapvalue[i])
		if(item!=null ){
			if(item!="" ){
			var splitArray = item.split(",");

			//alert(vehicle_Number);
			var latlong = new google.maps.LatLng(parseFloat(splitArray[0]), parseFloat(splitArray[1]));
			var marker = new google.maps.Marker({position: latlong , title: vehicle_Number,});
			var infowindow = new google.maps.InfoWindow({content: vehicle_Number, maxWidth: 200});


			google.maps.event.addListener(marker, 'click', function(evt) { // the click event function is called with the "event" as an argument
				//showInfoWindow(evt, this, service, map, infowindow);

				alert(marker.getTitle());
			  });

			/*marker.addListener('click', function(e) {

				alert(e.getMarker);
				alert(e.latLng);
				console.log(infowindow.getContent());

				 var getVehicle = vehicleJSONArray.filter(function(obj, index){
					return (obj.vehicle_serial === vehicle_Number);
				});

				var startDate = "01-Jan-2015";
				var endDate = "01-Jan-2025"+" "+"11:59 PM";
				vehicleOverviewDialog(getVehicle[0],startDate,endDate);
				
				//infowindow.open(map, marker);

			});*/
				
			infowindow.open(map, marker);

			marker.setMap(map);
		}
		}
	}

	window.map = map;
};





var pharmaBlock2 = new sap.m.Label({text:"Lab Reports"});
var pharmaBlock3 = new sap.m.Label({text:"New Trial Records"});
var pharmaBlock4 = new sap.m.Label({text:"Exceptions"});
var pharmaBlock5 = new sap.m.Label({text:"Test Records"});
var mapButton = new sap.m.Button({
    text: oBundle.getText("Map_View"),
    type: sap.m.ButtonType.Emphasized,
    icon: "sap-icon://map-2",
    press: function (e) {
        openDialogMapVehicle();
    }
});

var block01 = new sap.ui.layout.BlockLayout({
    content: [
        new sap.ui.layout.BlockLayoutRow({
            content: [
                new sap.ui.layout.BlockLayoutCell({
                    width: 1,
                    content: [mapButton]
                }),     
                                                             
            ]
        }), 
        new sap.ui.layout.BlockLayoutRow({
            content: [
                new sap.ui.layout.BlockLayoutCell({
                    width: 1,
                    titleAlignment:"Center",
                    content: [oProcessFlowPL]
                }),                                                       
            ]
        }),       
    ]
});


var oAppPharmaHome = new sap.uxap.ObjectPageLayout({ headerContentPinnable: false, 
    preserveHeaderStateOnScroll: true, useIconTabBar: true, toggleHeaderOnTitleClick: true,

    sections: [
        new sap.uxap.ObjectPageSection({ id:"ph1",showTitle: true, title: oBundle.getText("Dashboard"),
            subSections: new sap.uxap.ObjectPageSubSection({ blocks: [pharmaBlock1]})
        }),        
        new sap.uxap.ObjectPageSection({id:"ph2", showTitle: true, title: oBundle.getText("Reports"),
        subSections: new sap.uxap.ObjectPageSubSection({ blocks: [pharmaBlock2] })
        }),
        new sap.uxap.ObjectPageSection({id:"ph3", showTitle: true, title: oBundle.getText("New_Trials"),
            subSections: new sap.uxap.ObjectPageSubSection({ blocks: [pharmaBlock3]})
        }),
        new sap.uxap.ObjectPageSection({id:"ph4", showTitle: true, title: oBundle.getText("Exceptions"),
        subSections: new sap.uxap.ObjectPageSubSection({ blocks: [pharmaBlock4] })
        }),
        new sap.uxap.ObjectPageSection({id:"ph5", showTitle: true, title: oBundle.getText("Active_Study"),
        subSections: new sap.uxap.ObjectPageSubSection({ blocks: [block01] })
        }),
        // new sap.uxap.ObjectPageSection({id:"ph6", showTitle: true, title: oBundle.getText("Personal Information"),
        // subSections: new sap.uxap.ObjectPageSubSection({ blocks: [userProfile] })
        // }),
]});
