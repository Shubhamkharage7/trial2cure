var timeline1 = new sap.suite.ui.commons.Timeline({
    id:"idTimeline",
    // itemFiltering:"onItemFiltering",
    enableDoubleSided:true,
    groupByType:"Year",
    groupBy:"dateTime",
    textHeight:"250px",
    sortOldestFirst:false,
    content:[
        new sap.suite.ui.commons.TimelineItem({
            userName:"DR. Laurent Dubois",
            title:"Cardiologist ",
            //userPicture:"/images/Laurent_Dubois.png",
            icon:"sap-icon://activity-individual",
            filterValue:"Cardiologist",
            text:"1.) Perform a physical examination" + "\n"+"2.) Order tests like blood tests," +
                    "electrocardiogram ( ECG ), exercise stress test or imaging studies of the heart."+
                    " \n\n"+"Prescription:"+"\n"+"Apixaban (Eliquis), Dabigatran (Pradaxa)",
            dateTime:"Date(1371020400000)",
            select:function(){
                console.log('hy')
                yearValue = this.getDateTime().getFullYear()
                funClick(yearValue)
            },
        }),
        new sap.suite.ui.commons.TimelineItem({
            userName: "Dr. Sabine Mayer",
            title:"Neurologist",
            filterValue:"Neurologist",
            userPicture:"/images/Sabine_Mayer.png",
            icon:"sap-icon://settings",
            text:"Perform These Tests."+ "\n" + "1.)Lumbar puncture"+ "\n" + "2.) Tensilon test"+ "\n" + "3.) Tensilon test"+ "\n" + "4.) Electroencephalogram (EEG)",
            dateTime:"2020",
            select:function(){
                yearValue = this.getDateTime().getFullYear()
                funClick(yearValue)
            },
        }),
        new sap.suite.ui.commons.TimelineItem({
            userName:"Dr. Alain Chevalier",
            title:"Psychiatrist",
            filterValue:"Psychiatrist",
            userPicture:"/images/Alain_Chevalier.png",
            icon:"sap-icon://manager-insight",
            text:"Prescription:" + "\n" +"1.) Alprazolam" + "\n" +"2.) Bromazepam" + "\n" +"3.) Chlordiazepoxide" + "\n" +"4.) Clobazam" + "\n" +"5.) Clonazepam" + "\n" +"6.) Clorazepate",
            dateTime:"Date(1422777600000)",
            select:function(){
                yearValue = this.getDateTime().getFullYear()
                funClick(yearValue)
            },
        }),
        new sap.suite.ui.commons.TimelineItem({
            userName:"Dr. Monique Legrand",
            title:"Psychiatrist",
            filterValue:"Psychiatrist",
            userPicture:"/images/Monique_Legrand.png",
            icon:"sap-icon://account",
            text:"Medications to help treat mental health conditions." + "\n" + " These medications work to alter chemical signaling and communication within your brain, which can minimize some symptoms of certain psychiatric conditions.",
            dateTime:"Date(1422777600000)",
            select:function(){
                yearValue = this.getDateTime().getFullYear()
                funClick(yearValue)
            },
        }),
        new sap.suite.ui.commons.TimelineItem({
            userName:"Dr. S.S Khatri",
            
            title:"Orthopaedic",
            filterValue:"Orthopaedic",
            userPicture:"/images/Monique_Legrand.png",
            icon:"sap-icon://account",
            text:"Bed Rest for 1 month.",
            dateTime:"2019",
            select:function(){
                yearValue = this.getDateTime().getFullYear()
                funClick(yearValue)
            },
        }),
    ]
})




function funClick(year){
 
    var oProcessFlowSC = new sap.suite.ui.commons.ProcessFlow({width:"100%",showLabels:true,scrollable: true, wheelZoomable: true });
    
    oProcessFlowSC.addLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 0,iconSrc: "sap-icon://clinical-tast-tracker",
        text: "Jan",position: 0
    }));

    var node1 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 0,laneId: 0,
        //title: "Date's",
        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
        texts: ["January Report"],
        children: [{
            nodeId:1,
        }]
    });

    oProcessFlowSC.insertNode(node1);

    oProcessFlowSC.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 1,iconSrc: "sap-icon://clinical-tast-tracker",
        text: "Feb",position: 1
    }));
    var node2 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 1,laneId: 1,
        //title: "Date's",
        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
        texts: ["February Reports"],
        children: [{
            nodeId:2,
        }]
    });
    oProcessFlowSC.insertNode(node2);
    
    oProcessFlowSC.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 2,iconSrc: "sap-icon://clinical-tast-tracker",
        text: "Mar",position: 2
    }));
    var node3 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 2,laneId: 2,
        //title: "Date's",
        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
        texts: ["March Report"],
        children: [{
            nodeId:3,
        }]
    });
    oProcessFlowSC.insertNode(node3);

    oProcessFlowSC.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 3,iconSrc: "sap-icon://clinical-tast-tracker",
        text: "Apr",position: 3
    }));
    var node4 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 3,laneId: 3,
        //title: "Date's",
        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
        texts: ["April Report"],
        children: [{
            nodeId:4,
        }]
    });
    oProcessFlowSC.insertNode(node4);

    oProcessFlowSC.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 4,iconSrc: "sap-icon://clinical-tast-tracker",
        text: "May",position: 4
    }));
    var node5 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 4,laneId: 4,
        //title: "Date's",
        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
        texts: ["May Report"],
        children: [{
            nodeId:5,
        }]
    });
    oProcessFlowSC.insertNode(node5);

    oProcessFlowSC.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 5,iconSrc: "sap-icon://clinical-tast-tracker",
        text: "Jun",position: 5
    }));
    var node6 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 5,laneId: 5,
        //title: "Date's",
        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
        texts: ["June Report"],
        children: [{
            nodeId:6,
        }]
    });
    oProcessFlowSC.insertNode(node6);

    oProcessFlowSC.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 6,iconSrc: "sap-icon://clinical-tast-tracker",
        text: "Jul",position: 6
    }));
    var node7 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 6,laneId: 6,
        //title: "Date's",
        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
        texts: ["July Report"],
        children: [{
            nodeId:7,
        }]
    });
    oProcessFlowSC.insertNode(node7);

    oProcessFlowSC.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 7,iconSrc: "sap-icon://clinical-tast-tracker",
        text: "Aug",position: 7
    }));
    var node8 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 7,laneId: 7,
        //title: "Date's",
        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
        texts: ["August Report"],
        children: [{
            nodeId:8,
        }]
    });
    oProcessFlowSC.insertNode(node8);

    oProcessFlowSC.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 8,iconSrc: "sap-icon://clinical-tast-tracker",
        text: "Sep",position: 8
    }));
    var node9 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 8,laneId: 8,
        //title: "Date's",
        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
        texts: ["September Report"],
        children: [{
            nodeId:9,
        }]
    });
    oProcessFlowSC.insertNode(node9);
    
    oProcessFlowSC.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 9,iconSrc: "sap-icon://clinical-tast-tracker",
        text: "Oct",position: 9
    }));
    var node10 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 9,laneId: 9,
        //title: "Date's",
        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
        texts: ["October Report"],
        children: [{
            nodeId:10,
        }]
    });
    oProcessFlowSC.insertNode(node10);

    oProcessFlowSC.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 10,iconSrc: "sap-icon://clinical-tast-tracker",
        text: "Nov",position: 10
    }));
    var node11 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 10,laneId: 10,
        //title: "Date's",
        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
        texts: ["November Report"],
        children: [{
            nodeId:11,
        }]
    });
    oProcessFlowSC.insertNode(node11);

    oProcessFlowSC.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 11,iconSrc: "sap-icon://clinical-tast-tracker",
        text: "Dec",position: 11
    }));
    var node12 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 11,laneId: 11,
        //title: "Date's",
        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
        texts: ["December Report"],
    });
    oProcessFlowSC.insertNode(node12);




    dialog1 = new sap.m.Dialog({
        draggable:true,
        title: year,
        resizable:true,
        contentWidth:"80%",
        content:[oProcessFlowSC],
        buttons: [
            new sap.m.Button({ text: oBundle.getText("Close"), icon: "sap-icon://decline",
                press: function (oEvent) {dialog1.close();}
            })
        ],
    }).open();

}