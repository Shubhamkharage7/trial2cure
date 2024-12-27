var oProcessFlowPL = new sap.suite.ui.commons.ProcessFlow({nodePress:function(){funGetNodeData(oProcessFlowPL.getFocusedNode())},width:"100%",showLabels:true,scrollable: true, wheelZoomable: true });
    
oProcessFlowPL.addLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 0,iconSrc: "sap-icon://clinical-tast-tracker",
    text: "Patient List",position: 0
}));

var node1 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 0,laneId: 0,
    title: "Date's",
    
    state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,
    texts: ["500"],
    children: [{
        nodeId: 1,
        // connectionLabel: new sap.suite.ui.commons.ProcessFlowConnectionLabel({width:"100%",
        //     text: "JanDta"
        // })
    }]
});

oProcessFlowPL.insertNode(node1);

oProcessFlowPL.addLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 1,iconSrc: "sap-icon://inspection",
text: "Eligible",position: 1
}));
var node2 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 1,laneId: 1,
    title: "25-Feb-2022",
    texts: ["250"],
    state: sap.suite.ui.commons.ProcessFlowNodeState.Positive,
    children: [{
        nodeId:2
    }]
});
oProcessFlowPL.insertNode(node2);


oProcessFlowPL.addLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 2,iconSrc: "sap-icon://inspection",
text: "Screened",position: 2
}));
var node3 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 2,laneId: 2,
    title: "28-Feb-2022",
    texts: ["250"],
    state: sap.suite.ui.commons.ProcessFlowNodeState.Critical,
    children: [{
        nodeId:3
    }]
});
oProcessFlowPL.insertNode(node3);


oProcessFlowPL.addLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 3,iconSrc: "sap-icon://inspection",
text: "Enrolled",position: 3
}));
var node4 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 3,laneId: 3,
    title: "28-Feb-2022",
    texts: ["250"],
    state: sap.suite.ui.commons.ProcessFlowNodeState.Critical,
    children: [{
        nodeId:4,
    }]
});


oProcessFlowPL.addLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 4,iconSrc: "sap-icon://inspection",
text: "Ongoing Medical Records",position: 4
}));
oProcessFlowPL.insertNode(node4);
var node5 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 4,laneId:4 ,
    title: "28-Feb-2022",
    texts: ["100"],
    state: sap.suite.ui.commons.ProcessFlowNodeState.Critical
});
oProcessFlowPL.insertNode(node5);
var node51 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 41,laneId:4 ,
    title: "Dropped",
    texts: ["30"],
    state: sap.suite.ui.commons.ProcessFlowNodeState.Negative
});
oProcessFlowPL.insertNode(node51);

var patientList = [
    {
      "name": "Aiden Bryant",
      "job": "Account Representative",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00606",
      "bmi": "88",
      "rating": "3",
      "age": "55",
      "site": "Alamance Regional Medical Center"
    },
    {
      "name": "Ayla Ng",
      "job": "Account Representative",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.71427, -74.00644",
      "bmi": "82",
      "rating": "2",
      "age": "59",
      "site": "Albemarle Hospital"
    },
    {
      "name": "Eliza Adams",
      "job": "Account Representative",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65016",
      "bmi": "75",
      "rating": "5",
      "age": "50",
      "site": "Alexander Hospital"
    },
    {
      "name": "Isla Chavez",
      "job": "Account Representative",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "29.42412, -98.49365",
      "bmi": "90",
      "rating": "1",
      "age": "26",
      "site": "Alleghany Memorial Hospital"
    },
    {
      "name": "Jade Yi",
      "job": "Account Representative",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "29.42412, -98.49386",
      "bmi": "95",
      "rating": "1",
      "age": "55",
      "site": "Angel Medical Center"
    },
    {
      "name": "Jonathan Khan",
      "job": "Account Representative",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "32.71571, -117.16482",
      "bmi": "54",
      "rating": "4",
      "age": "57",
      "site": "Annie Penn Hospital"
    },
    {
      "name": "Joshua Gupta",
      "job": "Account Representative",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "32.71571, -117.16497",
      "bmi": "83",
      "rating": "3",
      "age": "27",
      "site": "Anson Community Hospital"
    },
    {
      "name": "Mateo Vu",
      "job": "Account Representative",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.68149, -73.83674",
      "bmi": "80",
      "rating": "2",
      "age": "25",
      "site": "Ashe Memorial Hospital"
    },
    {
      "name": "Nova Herrera",
      "job": "Account Representative",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "30.33218, -81.65577",
      "bmi": "73",
      "rating": "1",
      "age": "29",
      "site": "Asheville Specialty Hospital"
    },
    {
      "name": "William Vu",
      "job": "Account Representative",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "35.22709, -80.84319",
      "bmi": "85",
      "rating": "2",
      "age": "34",
      "site": "Vidant Beaufort Hospital"
    },
    {
      "name": "Xavier Zheng",
      "job": "Account Representative",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "35.22709, -80.84325",
      "bmi": "76",
      "rating": "5",
      "age": "36",
      "site": "Vidant Bertie Hospital"
    },
    {
      "name": "Alice Soto",
      "job": "Analyst",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "40.71427, -74.00610",
      "bmi": "99",
      "rating": "5",
      "age": "27",
      "site": "Betsy Johnson Regional Hospital"
    },
    {
      "name": "Allison Ayala",
      "job": "Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00613",
      "bmi": "63",
      "rating": "5",
      "age": "59",
      "site": "Blowing Rock Hospital"
    },
    {
      "name": "Axel Jordan",
      "job": "Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00641",
      "bmi": "84",
      "rating": "0",
      "age": "51",
      "site": "Blue Ridge Regional Hospital"
    },
    {
      "name": "Caroline Jenkins",
      "job": "Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24379",
      "bmi": "85",
      "rating": "0",
      "age": "31",
      "site": "Novant Health Brunswick Medical Center"
    },
    {
      "name": "Connor Vang",
      "job": "Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24401",
      "bmi": "92",
      "rating": "1",
      "age": "41",
      "site": "Caldwell Memorial Hospital"
    },
    {
      "name": "Dominic Guzman",
      "job": "Analyst",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "34.05223, -118.24418",
      "bmi": "83",
      "rating": "0",
      "age": "65",
      "site": "Cape Fear Valley Medical Center"
    },
    {
      "name": "Elena Vang",
      "job": "Analyst",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24430",
      "bmi": "55",
      "rating": "2",
      "age": "64",
      "site": "Cape Fear Valley-Bladen County Hospital"
    },
    {
      "name": "Eli Soto",
      "job": "Analyst",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "41.85003, -87.65005",
      "bmi": "55",
      "rating": "3",
      "age": "64",
      "site": "CarePartners Rehabilitation Hospital"
    },
    {
      "name": "Ella Hunter",
      "job": "Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65018",
      "bmi": "20",
      "rating": "0",
      "age": "45",
      "site": "CarolinaEast Medical Center"
    },
    {
      "name": "Emma Cao",
      "job": "Analyst",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "41.85003, -87.65031",
      "bmi": "15",
      "rating": "1",
      "age": "56",
      "site": "Carolinas Medical Center-Pineville"
    },
    {
      "name": "Evelyn Jung",
      "job": "Analyst",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "41.85003, -87.65041",
      "bmi": "15",
      "rating": "0",
      "age": "36",
      "site": "Carolinas Medical Center-Lincoln"
    },
    {
      "name": "Genesis Banks",
      "job": "Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16388",
      "bmi": "25",
      "rating": "3",
      "age": "59",
      "site": "Carolinas Medical Center-NorthEast"
    },
    {
      "name": "Jack Brown",
      "job": "Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49374",
      "bmi": "22",
      "rating": "3",
      "age": "37",
      "site": "Carolinas Medical Center-Union"
    },
    {
      "name": "Leonardo Dixon",
      "job": "Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80688",
      "bmi": "17",
      "rating": "3",
      "age": "44",
      "site": "Carolinas Medical Center-University"
    },
    {
      "name": "Lillian Park",
      "job": "Analyst",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.6501, -73.94965",
      "bmi": "21",
      "rating": "5",
      "age": "41",
      "site": "Carolinas Medical Center/Center for Mental Health"
    },
    {
      "name": "Luke Martin",
      "job": "Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94981",
      "bmi": "18",
      "rating": "2",
      "age": "56",
      "site": "Carolinas Rehabilitation"
    },
    {
      "name": "Madelyn Mehta",
      "job": "Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83660",
      "bmi": "19",
      "rating": "2",
      "age": "43",
      "site": "Carolinas Rehabilitation Mt. Holly"
    },
    {
      "name": "Maria Chin",
      "job": "Analyst",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.68149, -73.83662",
      "bmi": "20",
      "rating": "2",
      "age": "64",
      "site": "Carolinas Specialty Hospital"
    },
    {
      "name": "Nolan Pena",
      "job": "Analyst",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "30.33218, -81.65573",
      "bmi": "19",
      "rating": "2",
      "age": "63",
      "site": "Carteret General Hospital"
    },
    {
      "name": "Nora Santiago",
      "job": "Analyst",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "30.33218, -81.65575",
      "bmi": "25",
      "rating": "3",
      "age": "28",
      "site": "Catawba Valley Medical Center"
    },
    {
      "name": "Owen Han",
      "job": "Analyst",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "30.33218, -81.65579",
      "bmi": "18",
      "rating": "2",
      "age": "65",
      "site": "Central Carolina Hospital"
    },
    {
      "name": "Penelope Coleman",
      "job": "Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41946",
      "bmi": "18",
      "rating": "5",
      "age": "61",
      "site": "Charles A. Cannon, Jr. Memorial Hospital"
    },
    {
      "name": "Samantha Woods",
      "job": "Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99891",
      "bmi": "20",
      "rating": "0",
      "age": "30",
      "site": "Chatham Hospital"
    },
    {
      "name": "Sarah Ayala",
      "job": "Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32086",
      "bmi": "25",
      "rating": "0",
      "age": "27",
      "site": "Vidant Chowan Hospital"
    },
    {
      "name": "Sophie Ali",
      "job": "Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32104",
      "bmi": "17",
      "rating": "5",
      "age": "32",
      "site": "Cleveland Regional Medical Center"
    },
    {
      "name": "Amelia Salazar",
      "job": "Analyst II",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "41.71557, -71.00616",
      "bmi": "19",
      "rating": "2",
      "age": "34",
      "site": "Columbus Regional Healthcare System"
    },
    {
      "name": "Angel Powell",
      "job": "Analyst II",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "41.71557, -71.00622",
      "bmi": "15",
      "rating": "1",
      "age": "27",
      "site": "Cone Health"
    },
    {
      "name": "Athena Carrillo",
      "job": "Analyst II",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00621",
      "bmi": "15",
      "rating": "2",
      "age": "35",
      "site": "Crawley Memorial Hospital"
    },
    {
      "name": "Benjamin Ford",
      "job": "Analyst II",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00648",
      "bmi": "22",
      "rating": "0",
      "age": "57",
      "site": "Davie County Hospital"
    },
    {
      "name": "Connor Simmons",
      "job": "Analyst II",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24400",
      "bmi": "18",
      "rating": "5",
      "age": "30",
      "site": "Davis Regional Medical Center"
    },
    {
      "name": "Connor Walker",
      "job": "Analyst II",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24402",
      "bmi": "22",
      "rating": "5",
      "age": "53",
      "site": "Duke Health Raleigh Hospital"
    },
    {
      "name": "Dominic Thomas",
      "job": "Analyst II",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24420",
      "bmi": "24",
      "rating": "4",
      "age": "52",
      "site": "Duke University Hospital"
    },
    {
      "name": "Emily Contreras",
      "job": "Analyst II",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "41.85003, -87.65028",
      "bmi": "22",
      "rating": "4",
      "age": "37",
      "site": "Vidant Duplin Hospital"
    },
    {
      "name": "Eva Figueroa",
      "job": "Analyst II",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65036",
      "bmi": "17",
      "rating": "1",
      "age": "29",
      "site": "Durham Regional Hospital"
    },
    {
      "name": "Hudson Thompson",
      "job": "Analyst II",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "33.44838, -112.07411",
      "bmi": "24",
      "rating": "4",
      "age": "40",
      "site": "FirstHealth Montgomery Memorial Hospital"
    },
    {
      "name": "John Contreras",
      "job": "Analyst II",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16477",
      "bmi": "22",
      "rating": "2",
      "age": "32",
      "site": "FirstHealth Moore Regional Hospital and Pinehurst Treatment"
    },
    {
      "name": "Joseph Martin",
      "job": "Analyst II",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16492",
      "bmi": "25",
      "rating": "3",
      "age": "37",
      "site": "FirstHealth Moore Regional Hospital Hoke Campus"
    },
    {
      "name": "Leilani Butler",
      "job": "Analyst II",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80683",
      "bmi": "21",
      "rating": "1",
      "age": "52",
      "site": "FirstHealth Richmond Memorial Hospital"
    },
    {
      "name": "Mason Cao",
      "job": "Analyst II",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.68149, -73.83667",
      "bmi": "18",
      "rating": "1",
      "age": "45",
      "site": "Novant Health Forsyth Medical Center"
    },
    {
      "name": "Melody Ho",
      "job": "Analyst II",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.33939, -121.89503",
      "bmi": "19",
      "rating": "5",
      "age": "64",
      "site": "Novant Health Franklin Regional Medical Center"
    },
    {
      "name": "Miles Hsu",
      "job": "Analyst II",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "30.26715, -97.74307",
      "bmi": "19",
      "rating": "2",
      "age": "27",
      "site": "Frye Regional Medical Center"
    },
    {
      "name": "Nicholas Brooks",
      "job": "Analyst II",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "30.33218, -81.65567",
      "bmi": "25",
      "rating": "0",
      "age": "25",
      "site": "Gaston Memorial Hospital"
    },
    {
      "name": "Samuel Morales",
      "job": "Analyst II",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99892",
      "bmi": "23",
      "rating": "4",
      "age": "35",
      "site": "Grace Hospital"
    },
    {
      "name": "Samuel Vega",
      "job": "Analyst II",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99893",
      "bmi": "24",
      "rating": "5",
      "age": "36",
      "site": "Granville Health System"
    },
    {
      "name": "Vivian Guzman",
      "job": "Analyst II",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "35.22709, -80.84313",
      "bmi": "17",
      "rating": "4",
      "age": "33",
      "site": "Halifax Regional Medical Center"
    },
    {
      "name": "Alice Young",
      "job": "Automation Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00612",
      "bmi": "23",
      "rating": "5",
      "age": "52",
      "site": "Harris Regional Hospital"
    },
    {
      "name": "Asher Morales",
      "job": "Automation Engineer",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "40.71427, -74.00620",
      "bmi": "23",
      "rating": "1",
      "age": "46",
      "site": "Haywood Regional Medical Center"
    },
    {
      "name": "Ezra Simmons",
      "job": "Automation Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16380",
      "bmi": "24",
      "rating": "1",
      "age": "46",
      "site": "Vidant Edgecombe Hospital"
    },
    {
      "name": "Nevaeh Kang",
      "job": "Automation Engineer",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "30.33218, -81.65566",
      "bmi": "25",
      "rating": "2",
      "age": "45",
      "site": "High Point Regional Health System"
    },
    {
      "name": "Stella Alexander",
      "job": "Automation Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.76838, -86.15806",
      "bmi": "15",
      "rating": "3",
      "age": "55",
      "site": "Highlands-Cashiers Hospital"
    },
    {
      "name": "Andrew Huynh",
      "job": "Business Partner",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "41.71557, -71.00618",
      "bmi": "24",
      "rating": "3",
      "age": "44",
      "site": "Highsmith-Rainey Specialty Hospital"
    },
    {
      "name": "Cameron Powell",
      "job": "Business Partner",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24370",
      "bmi": "18",
      "rating": "1",
      "age": "44",
      "site": "Hoots Memorial Hospital"
    },
    {
      "name": "Caroline Alexander",
      "job": "Business Partner",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24376",
      "bmi": "15",
      "rating": "2",
      "age": "45",
      "site": "Hugh Chatham Memorial Hospital"
    },
    {
      "name": "Emery Chang",
      "job": "Business Partner",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "41.85003, -87.65024",
      "bmi": "19",
      "rating": "5",
      "age": "36",
      "site": "Iredell Memorial Hospital"
    },
    {
      "name": "Grayson Soto",
      "job": "Business Partner",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16397",
      "bmi": "21",
      "rating": "4",
      "age": "38",
      "site": "J. Arthur Dosher Memorial Hospital"
    },
    {
      "name": "Liliana Soto",
      "job": "Business Partner",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94963",
      "bmi": "18",
      "rating": "2",
      "age": "41",
      "site": "Johnston Health"
    },
    {
      "name": "Nathan Lau",
      "job": "Business Partner",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "30.26715, -97.74314",
      "bmi": "25",
      "rating": "1",
      "age": "30",
      "site": "Novant Health Kernersville Medical Center"
    },
    {
      "name": "Scarlett Figueroa",
      "job": "Business Partner",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32090",
      "bmi": "23",
      "rating": "0",
      "age": "43",
      "site": "Kindred Hospital - Greensboro"
    },
    {
      "name": "Willow Mai",
      "job": "Business Partner",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "35.22709, -80.84321",
      "bmi": "22",
      "rating": "5",
      "age": "32",
      "site": "Kings Mountain Hospital"
    },
    {
      "name": "Zoey Jackson",
      "job": "Business Partner",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.78343, -73.96626",
      "bmi": "16",
      "rating": "3",
      "age": "58",
      "site": "Lake Norman Regional Medical Center"
    },
    {
      "name": "Adeline Yang",
      "job": "Cloud Infrastructure Architect",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.71427, -74.00604",
      "bmi": "21",
      "rating": "3",
      "age": "37",
      "site": "Lenoir Memorial Hospital"
    },
    {
      "name": "Anna Mehta",
      "job": "Cloud Infrastructure Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00613",
      "bmi": "18",
      "rating": "5",
      "age": "38",
      "site": "Lexington Memorial Hospital"
    },
    {
      "name": "Genesis Navarro",
      "job": "Cloud Infrastructure Architect",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "39.95233, -75.16390",
      "bmi": "22",
      "rating": "0",
      "age": "55",
      "site": "LifeCare Hospitals of North Carolina"
    },
    {
      "name": "Greyson Sanders",
      "job": "Cloud Infrastructure Architect",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16400",
      "bmi": "21",
      "rating": "1",
      "age": "57",
      "site": "Margaret R. Pardee Memorial Hospital"
    },
    {
      "name": "Jade Hunter",
      "job": "Cloud Infrastructure Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49383",
      "bmi": "19",
      "rating": "1",
      "age": "36",
      "site": "Maria Parham Medical Center"
    },
    {
      "name": "Sofia Parker",
      "job": "Cloud Infrastructure Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32101",
      "bmi": "21",
      "rating": "2",
      "age": "30",
      "site": "Martin General Hospital"
    },
    {
      "name": "Benjamin Moua",
      "job": "Computer Systems Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.71427, -74.00649",
      "bmi": "20",
      "rating": "5",
      "age": "40",
      "site": "Novant Health Medical Park Hospital"
    },
    {
      "name": "Charlotte Ruiz",
      "job": "Computer Systems Manager",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "34.05223, -118.24389",
      "bmi": "23",
      "rating": "1",
      "age": "34",
      "site": "Memorial Mission Hospital and Asheville Surgery Center"
    },
    {
      "name": "Cora Evans",
      "job": "Computer Systems Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24404",
      "bmi": "17",
      "rating": "0",
      "age": "60",
      "site": "Morehead Memorial Hospital"
    },
    {
      "name": "Gabriella Johnson",
      "job": "Computer Systems Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16387",
      "bmi": "17",
      "rating": "3",
      "age": "41",
      "site": "Murphy Medical Center"
    },
    {
      "name": "Ian Miller",
      "job": "Computer Systems Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "33.44838, -112.07414",
      "bmi": "20",
      "rating": "2",
      "age": "53",
      "site": "Nash General Hospital"
    },
    {
      "name": "Jacob Khan",
      "job": "Computer Systems Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "29.42412, -98.49381",
      "bmi": "16",
      "rating": "2",
      "age": "45",
      "site": "New Hanover Regional Medical Center"
    },
    {
      "name": "Kennedy Do",
      "job": "Computer Systems Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80671",
      "bmi": "23",
      "rating": "4",
      "age": "30",
      "site": "North Carolina Specialty Hospital"
    },
    {
      "name": "Lincoln Reyes",
      "job": "Computer Systems Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94968",
      "bmi": "21",
      "rating": "5",
      "age": "26",
      "site": "Northern Hospital of Surry County"
    },
    {
      "name": "Madeline Shin",
      "job": "Computer Systems Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83658",
      "bmi": "21",
      "rating": "4",
      "age": "45",
      "site": "Onslow Memorial Hospital"
    },
    {
      "name": "Nolan Bui",
      "job": "Computer Systems Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "30.33218, -81.65571",
      "bmi": "15",
      "rating": "4",
      "age": "42",
      "site": "Our Community Hospital"
    },
    {
      "name": "Penelope Jordan",
      "job": "Computer Systems Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41949",
      "bmi": "15",
      "rating": "0",
      "age": "41",
      "site": "Park Ridge Health"
    },
    {
      "name": "Wyatt Rojas",
      "job": "Computer Systems Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "35.22709, -80.84323",
      "bmi": "23",
      "rating": "3",
      "age": "48",
      "site": "Pender Memorial Hospital"
    },
    {
      "name": "Adeline Huang",
      "job": "Controls Engineer",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.71427, -74.00603",
      "bmi": "24",
      "rating": "1",
      "age": "29",
      "site": "Person Memorial Hospital"
    },
    {
      "name": "Andrew Thomas",
      "job": "Controls Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "41.71557, -71.00620",
      "bmi": "20",
      "rating": "1",
      "age": "27",
      "site": "Novant Health Presbyterian Medical Center"
    },
    {
      "name": "Camila Rogers",
      "job": "Controls Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24373",
      "bmi": "25",
      "rating": "3",
      "age": "33",
      "site": "Novant Health Huntersville Medical Center"
    },
    {
      "name": "David Chu",
      "job": "Controls Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24413",
      "bmi": "24",
      "rating": "1",
      "age": "26",
      "site": "Novant Health Matthews Medical Center"
    },
    {
      "name": "Jose Molina",
      "job": "Controls Engineer",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "32.71571, -117.16489",
      "bmi": "23",
      "rating": "2",
      "age": "31",
      "site": "Novant Health Charlotte Orthopaedic Hospital"
    },
    {
      "name": "Theodore Ngo",
      "job": "Controls Engineer",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "39.76838, -86.15808",
      "bmi": "16",
      "rating": "2",
      "age": "53",
      "site": "Vidant Pungo Hospital"
    },
    {
      "name": "Aurora Simmons",
      "job": "Development Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00628",
      "bmi": "18",
      "rating": "1",
      "age": "34",
      "site": "Randolph Hospital"
    },
    {
      "name": "Autumn Reed",
      "job": "Development Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00633",
      "bmi": "15",
      "rating": "3",
      "age": "54",
      "site": "Rex Healthcare"
    },
    {
      "name": "Carter Reed",
      "job": "Development Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24385",
      "bmi": "24",
      "rating": "4",
      "age": "32",
      "site": "Vidant Roanoke-Chowan Hospital"
    },
    {
      "name": "Ella White",
      "job": "Development Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65020",
      "bmi": "23",
      "rating": "4",
      "age": "28",
      "site": "Novant Health Rowan Medical Center"
    },
    {
      "name": "Jade Acosta",
      "job": "Development Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49382",
      "bmi": "24",
      "rating": "5",
      "age": "31",
      "site": "Rutherford Regional Medical Center"
    },
    {
      "name": "Kai Flores",
      "job": "Development Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80670",
      "bmi": "17",
      "rating": "1",
      "age": "45",
      "site": "Sampson Regional Medical Center"
    },
    {
      "name": "Mateo Mendez",
      "job": "Development Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83673",
      "bmi": "19",
      "rating": "1",
      "age": "48",
      "site": "Sandhills Regional Medical Center"
    },
    {
      "name": "Melody Cooper",
      "job": "Development Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.33939, -121.89502",
      "bmi": "15",
      "rating": "5",
      "age": "56",
      "site": "Scotland Memorial Hospital and Edwin Morgan Center"
    },
    {
      "name": "Noah King",
      "job": "Development Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "30.33218, -81.65570",
      "bmi": "24",
      "rating": "3",
      "age": "27",
      "site": "Select Specialty Hospital - Durham"
    },
    {
      "name": "Rylee Dinh",
      "job": "Development Engineer",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "39.96118, -82.99884",
      "bmi": "19",
      "rating": "1",
      "age": "55",
      "site": "Select Specialty Hospital - Winston-Salem"
    },
    {
      "name": "Adam Dang",
      "job": "Director",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.71427, -74.00598",
      "bmi": "16",
      "rating": "5",
      "age": "64",
      "site": "Select Specialty Hospital-Greensboro"
    },
    {
      "name": "Adam Nelson",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00600",
      "bmi": "22",
      "rating": "0",
      "age": "50",
      "site": "Southeastern Regional Medical Center"
    },
    {
      "name": "Anna Gutierrez",
      "job": "Director",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "41.71557, -71.00625",
      "bmi": "24",
      "rating": "0",
      "age": "51",
      "site": "St. Luke's Hospital"
    },
    {
      "name": "Aria Xi",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00618",
      "bmi": "23",
      "rating": "1",
      "age": "36",
      "site": "Stanly Regional Medical Center"
    },
    {
      "name": "Aubrey Romero",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00624",
      "bmi": "20",
      "rating": "0",
      "age": "42",
      "site": "Stokes-Reynolds Memorial Hospital"
    },
    {
      "name": "Ava Garza",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00635",
      "bmi": "18",
      "rating": "4",
      "age": "41",
      "site": "Swain County Hospital"
    },
    {
      "name": "Bella Powell",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00646",
      "bmi": "18",
      "rating": "4",
      "age": "29",
      "site": "The McDowell Hospital"
    },
    {
      "name": "Caroline Owens",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24380",
      "bmi": "17",
      "rating": "5",
      "age": "44",
      "site": "The Outer Banks Hospital"
    },
    {
      "name": "Carson Chau",
      "job": "Director",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24382",
      "bmi": "18",
      "rating": "1",
      "age": "41",
      "site": "Thomasville Medical Center"
    },
    {
      "name": "Connor Joseph",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24399",
      "bmi": "22",
      "rating": "3",
      "age": "61",
      "site": "Transylvania Regional Hospital"
    },
    {
      "name": "Daniel Richardson",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24411",
      "bmi": "18",
      "rating": "0",
      "age": "50",
      "site": "University of North Carolina Hospitals"
    },
    {
      "name": "David Barnes",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24412",
      "bmi": "18",
      "rating": "1",
      "age": "49",
      "site": "Valdese General Hospital"
    },
    {
      "name": "Dylan Thao",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24424",
      "bmi": "18",
      "rating": "1",
      "age": "60",
      "site": "Vidant Medical Center"
    },
    {
      "name": "Eli Gupta",
      "job": "Director",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24431",
      "bmi": "20",
      "rating": "2",
      "age": "42",
      "site": "Wake Forest Baptist Medical Center"
    },
    {
      "name": "Elias Dang",
      "job": "Director",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "41.85003, -87.65010",
      "bmi": "22",
      "rating": "5",
      "age": "39",
      "site": "WakeMed"
    },
    {
      "name": "Eloise Griffin",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65022",
      "bmi": "25",
      "rating": "1",
      "age": "55",
      "site": "WakeMed Cary Hospital"
    },
    {
      "name": "Eva Coleman",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65035",
      "bmi": "21",
      "rating": "4",
      "age": "39",
      "site": "Washington County Hospital"
    },
    {
      "name": "Eva Rivera",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65039",
      "bmi": "20",
      "rating": "4",
      "age": "28",
      "site": "Watauga Medical Center"
    },
    {
      "name": "Evelyn Dinh",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65040",
      "bmi": "18",
      "rating": "2",
      "age": "65",
      "site": "Wayne Memorial Hospital"
    },
    {
      "name": "Everleigh Espinoza",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.76328, -95.36328",
      "bmi": "15",
      "rating": "3",
      "age": "52",
      "site": "Wilkes Regional Medical Center"
    },
    {
      "name": "Everleigh Fernandez",
      "job": "Director",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "29.76328, -95.36329",
      "bmi": "25",
      "rating": "2",
      "age": "62",
      "site": "Wilson Medical Center"
    },
    {
      "name": "Everleigh Jiang",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.76328, -95.36330",
      "bmi": "19",
      "rating": "2",
      "age": "39",
      "site": "Wayne Memorial Hospital"
    },
    {
      "name": "Ezekiel Desai",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "29.76328, -95.36340",
      "bmi": "20",
      "rating": "1",
      "age": "63",
      "site": "Wilkes Regional Medical Center"
    },
    {
      "name": "Grace Campos",
      "job": "Director",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "39.95233, -75.16394",
      "bmi": "24",
      "rating": "0",
      "age": "27",
      "site": "Wilson Medical Center"
    },
    {
      "name": "Grayson Walker",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16398",
      "bmi": "18",
      "rating": "5",
      "age": "37",
      "site": "Wilson Medical Center"
    },
    {
      "name": "Hadley Contreras",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16401",
      "bmi": "17",
      "rating": "4",
      "age": "37",
      "site": "Broughton Hospital"
    },
    {
      "name": "Hailey Shin",
      "job": "Director",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "39.95233, -75.16405",
      "bmi": "17",
      "rating": "3",
      "age": "46",
      "site": "Central Regional Hospital"
    },
    {
      "name": "Henry Shah",
      "job": "Director",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "33.44838, -112.07408",
      "bmi": "16",
      "rating": "2",
      "age": "54",
      "site": "Cherry Hospital"
    },
    {
      "name": "Ian Flores",
      "job": "Director",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "33.44838, -112.07413",
      "bmi": "16",
      "rating": "1",
      "age": "30",
      "site": "Dorothea Dix Hospital"
    },
    {
      "name": "Jack Cheng",
      "job": "Director",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "29.42412, -98.49375",
      "bmi": "20",
      "rating": "3",
      "age": "28",
      "site": "Alamance Regional Medical Center"
    },
    {
      "name": "Jack Maldonado",
      "job": "Director",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "29.42412, -98.49378",
      "bmi": "24",
      "rating": "5",
      "age": "40",
      "site": "Albemarle Hospital"
    },
    {
      "name": "Jacob Davis",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49380",
      "bmi": "24",
      "rating": "5",
      "age": "49",
      "site": "Alexander Hospital"
    },
    {
      "name": "Jade Li",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49384",
      "bmi": "25",
      "rating": "4",
      "age": "39",
      "site": "Alleghany Memorial Hospital"
    },
    {
      "name": "Jade Rojas",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49385",
      "bmi": "20",
      "rating": "4",
      "age": "61",
      "site": "Angel Medical Center"
    },
    {
      "name": "Jordan Truong",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16485",
      "bmi": "23",
      "rating": "5",
      "age": "46",
      "site": "Annie Penn Hospital"
    },
    {
      "name": "Jose Henderson",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16487",
      "bmi": "21",
      "rating": "4",
      "age": "35",
      "site": "Anson Community Hospital"
    },
    {
      "name": "Kennedy Zhang",
      "job": "Director",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "32.78306, -96.80674",
      "bmi": "15",
      "rating": "5",
      "age": "33",
      "site": "Ashe Memorial Hospital"
    },
    {
      "name": "Leilani Chow",
      "job": "Director",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "32.78306, -96.80684",
      "bmi": "17",
      "rating": "0",
      "age": "61",
      "site": "Asheville Specialty Hospital"
    },
    {
      "name": "Lincoln Hall",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94967",
      "bmi": "15",
      "rating": "1",
      "age": "45",
      "site": "Vidant Beaufort Hospital"
    },
    {
      "name": "Logan Rivera",
      "job": "Director",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "40.6501, -73.94971",
      "bmi": "21",
      "rating": "1",
      "age": "51",
      "site": "Vidant Bertie Hospital"
    },
    {
      "name": "Luca Truong",
      "job": "Director",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.6501, -73.94973",
      "bmi": "16",
      "rating": "1",
      "age": "55",
      "site": "Betsy Johnson Regional Hospital"
    },
    {
      "name": "Lucas Phan",
      "job": "Director",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.6501, -73.94974",
      "bmi": "17",
      "rating": "2",
      "age": "46",
      "site": "Blowing Rock Hospital"
    },
    {
      "name": "Lucy Alexander",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94977",
      "bmi": "17",
      "rating": "0",
      "age": "30",
      "site": "Blue Ridge Regional Hospital"
    },
    {
      "name": "Luke Munoz",
      "job": "Director",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "40.6501, -73.94982",
      "bmi": "19",
      "rating": "3",
      "age": "54",
      "site": "Novant Health Brunswick Medical Center"
    },
    {
      "name": "Luke Zheng",
      "job": "Director",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.6501, -73.94983",
      "bmi": "17",
      "rating": "0",
      "age": "54",
      "site": "Caldwell Memorial Hospital"
    },
    {
      "name": "Luna Sanders",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83652",
      "bmi": "25",
      "rating": "0",
      "age": "45",
      "site": "Cape Fear Valley Medical Center"
    },
    {
      "name": "Madison Kumar",
      "job": "Director",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.68149, -73.83661",
      "bmi": "19",
      "rating": "1",
      "age": "49",
      "site": "Cape Fear Valley-Bladen County Hospital"
    },
    {
      "name": "Mila Soto",
      "job": "Director",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "37.33939, -121.89511",
      "bmi": "21",
      "rating": "5",
      "age": "55",
      "site": "CarePartners Rehabilitation Hospital"
    },
    {
      "name": "Miles Mehta",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "30.26715, -97.74308",
      "bmi": "17",
      "rating": "3",
      "age": "62",
      "site": "CarolinaEast Medical Center"
    },
    {
      "name": "Nicholas Rivera",
      "job": "Director",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "30.33218, -81.65568",
      "bmi": "18",
      "rating": "0",
      "age": "28",
      "site": "Carolinas Medical Center-Pineville"
    },
    {
      "name": "Olivia Harris",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "30.33218, -81.65578",
      "bmi": "16",
      "rating": "5",
      "age": "33",
      "site": "Carolinas Medical Center-Lincoln"
    },
    {
      "name": "Piper Sun",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41955",
      "bmi": "20",
      "rating": "1",
      "age": "32",
      "site": "Carolinas Medical Center-NorthEast"
    },
    {
      "name": "Ruby Medina",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99883",
      "bmi": "19",
      "rating": "4",
      "age": "32",
      "site": "Carolinas Medical Center-Union"
    },
    {
      "name": "Rylee Yu",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99885",
      "bmi": "15",
      "rating": "3",
      "age": "55",
      "site": "Carolinas Medical Center-University"
    },
    {
      "name": "Savannah He",
      "job": "Director",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "32.72541, -97.32089",
      "bmi": "17",
      "rating": "4",
      "age": "58",
      "site": "Carolinas Medical Center/Center for Mental Health"
    },
    {
      "name": "Skylar Liu",
      "job": "Director",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "32.72541, -97.32098",
      "bmi": "18",
      "rating": "4",
      "age": "34",
      "site": "Carolinas Rehabilitation"
    },
    {
      "name": "Thomas Vazquez",
      "job": "Director",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "39.76838, -86.15812",
      "bmi": "23",
      "rating": "5",
      "age": "27",
      "site": "Carolinas Rehabilitation Mt. Holly"
    },
    {
      "name": "Vivian Barnes",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.76838, -86.15815",
      "bmi": "24",
      "rating": "0",
      "age": "61",
      "site": "Carolinas Specialty Hospital"
    },
    {
      "name": "William Watson",
      "job": "Director",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "35.22709, -80.84320",
      "bmi": "24",
      "rating": "3",
      "age": "47",
      "site": "Carteret General Hospital"
    },
    {
      "name": "Zoe Rodriguez",
      "job": "Director",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "35.22709, -80.84326",
      "bmi": "22",
      "rating": "2",
      "age": "40",
      "site": "Catawba Valley Medical Center"
    },
    {
      "name": "Aria Castro",
      "job": "Engineering Manager",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "40.71427, -74.00617",
      "bmi": "25",
      "rating": "4",
      "age": "30",
      "site": "Central Carolina Hospital"
    },
    {
      "name": "Carson Lu",
      "job": "Engineering Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24383",
      "bmi": "24",
      "rating": "4",
      "age": "45",
      "site": "Charles A. Cannon, Jr. Memorial Hospital"
    },
    {
      "name": "Christopher Vega",
      "job": "Engineering Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24391",
      "bmi": "22",
      "rating": "3",
      "age": "30",
      "site": "Chatham Hospital"
    },
    {
      "name": "Eliana Grant",
      "job": "Engineering Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65006",
      "bmi": "19",
      "rating": "0",
      "age": "56",
      "site": "Vidant Chowan Hospital"
    },
    {
      "name": "Hudson Liu",
      "job": "Engineering Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "33.44838, -112.07410",
      "bmi": "22",
      "rating": "2",
      "age": "62",
      "site": "Cleveland Regional Medical Center"
    },
    {
      "name": "Jose Kang",
      "job": "Engineering Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "32.71571, -117.16488",
      "bmi": "25",
      "rating": "1",
      "age": "45",
      "site": "Columbus Regional Healthcare System"
    },
    {
      "name": "Jose Ross",
      "job": "Engineering Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16490",
      "bmi": "21",
      "rating": "4",
      "age": "46",
      "site": "Cone Health"
    },
    {
      "name": "Julia Pham",
      "job": "Engineering Manager",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "32.71571, -117.16502",
      "bmi": "22",
      "rating": "3",
      "age": "48",
      "site": "Crawley Memorial Hospital"
    },
    {
      "name": "Kai Chow",
      "job": "Engineering Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80669",
      "bmi": "23",
      "rating": "4",
      "age": "27",
      "site": "Davie County Hospital"
    },
    {
      "name": "Paisley Hunter",
      "job": "Engineering Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41942",
      "bmi": "21",
      "rating": "4",
      "age": "53",
      "site": "Davis Regional Medical Center"
    },
    {
      "name": "Skylar Carrillo",
      "job": "Engineering Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32096",
      "bmi": "17",
      "rating": "3",
      "age": "59",
      "site": "Duke Health Raleigh Hospital"
    },
    {
      "name": "Autumn Joseph",
      "job": "Enterprise Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00631",
      "bmi": "20",
      "rating": "2",
      "age": "55",
      "site": "Duke University Hospital"
    },
    {
      "name": "Ava Ortiz",
      "job": "Enterprise Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00637",
      "bmi": "19",
      "rating": "2",
      "age": "43",
      "site": "Vidant Duplin Hospital"
    },
    {
      "name": "Daniel Perry",
      "job": "Enterprise Architect",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24410",
      "bmi": "25",
      "rating": "1",
      "age": "55",
      "site": "Durham Regional Hospital"
    },
    {
      "name": "Gabriel Holmes",
      "job": "Enterprise Architect",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16384",
      "bmi": "21",
      "rating": "0",
      "age": "51",
      "site": "FirstHealth Montgomery Memorial Hospital"
    },
    {
      "name": "Jameson Alvarado",
      "job": "Enterprise Architect",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "29.42412, -98.49388",
      "bmi": "15",
      "rating": "1",
      "age": "54",
      "site": "FirstHealth Moore Regional Hospital and Pinehurst Treatment"
    },
    {
      "name": "Leah Pena",
      "job": "Enterprise Architect",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "32.78306, -96.80681",
      "bmi": "17",
      "rating": "0",
      "age": "47",
      "site": "FirstHealth Moore Regional Hospital Hoke Campus"
    },
    {
      "name": "Mateo Williams",
      "job": "Enterprise Architect",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "37.33939, -121.89496",
      "bmi": "16",
      "rating": "2",
      "age": "55",
      "site": "FirstHealth Richmond Memorial Hospital"
    },
    {
      "name": "Mia Wu",
      "job": "Enterprise Architect",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "37.33939, -121.89506",
      "bmi": "22",
      "rating": "4",
      "age": "50",
      "site": "Novant Health Forsyth Medical Center"
    },
    {
      "name": "Nora Brown",
      "job": "Enterprise Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "30.33218, -81.65574",
      "bmi": "24",
      "rating": "1",
      "age": "31",
      "site": "Novant Health Franklin Regional Medical Center"
    },
    {
      "name": "Piper Cheng",
      "job": "Enterprise Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41951",
      "bmi": "23",
      "rating": "2",
      "age": "47",
      "site": "Frye Regional Medical Center"
    },
    {
      "name": "Sophia Huynh",
      "job": "Enterprise Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32103",
      "bmi": "19",
      "rating": "5",
      "age": "29",
      "site": "Gaston Memorial Hospital"
    },
    {
      "name": "Alexander Bryant",
      "job": "Field Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00607",
      "bmi": "25",
      "rating": "5",
      "age": "38",
      "site": "Grace Hospital"
    },
    {
      "name": "Athena Vasquez",
      "job": "Field Engineer",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "40.71427, -74.00623",
      "bmi": "22",
      "rating": "3",
      "age": "29",
      "site": "Granville Health System"
    },
    {
      "name": "Audrey Smith",
      "job": "Field Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00626",
      "bmi": "16",
      "rating": "2",
      "age": "33",
      "site": "Halifax Regional Medical Center"
    },
    {
      "name": "Autumn Ortiz",
      "job": "Field Engineer",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "40.71427, -74.00632",
      "bmi": "25",
      "rating": "5",
      "age": "50",
      "site": "Harris Regional Hospital"
    },
    {
      "name": "Claire Jones",
      "job": "Field Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24392",
      "bmi": "15",
      "rating": "3",
      "age": "46",
      "site": "Haywood Regional Medical Center"
    },
    {
      "name": "Everleigh Nunez",
      "job": "Field Engineer",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "29.76328, -95.36332",
      "bmi": "25",
      "rating": "4",
      "age": "57",
      "site": "Vidant Edgecombe Hospital"
    },
    {
      "name": "Ivy Soto",
      "job": "Field Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49372",
      "bmi": "16",
      "rating": "1",
      "age": "49",
      "site": "High Point Regional Health System"
    },
    {
      "name": "Joseph Ruiz",
      "job": "Field Engineer",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "32.71571, -117.16493",
      "bmi": "24",
      "rating": "2",
      "age": "54",
      "site": "Highlands-Cashiers Hospital"
    },
    {
      "name": "Josephine Salazar",
      "job": "Field Engineer",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "32.71571, -117.16495",
      "bmi": "17",
      "rating": "5",
      "age": "28",
      "site": "Highsmith-Rainey Specialty Hospital"
    },
    {
      "name": "Mateo Chu",
      "job": "Field Engineer",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.68149, -73.83671",
      "bmi": "21",
      "rating": "5",
      "age": "30",
      "site": "Hoots Memorial Hospital"
    },
    {
      "name": "Nolan Guzman",
      "job": "Field Engineer",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "30.33218, -81.65572",
      "bmi": "23",
      "rating": "3",
      "age": "36",
      "site": "Hugh Chatham Memorial Hospital"
    },
    {
      "name": "Piper Lewis",
      "job": "Field Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41952",
      "bmi": "22",
      "rating": "3",
      "age": "36",
      "site": "Iredell Memorial Hospital"
    },
    {
      "name": "William Foster",
      "job": "Field Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "35.22709, -80.84318",
      "bmi": "25",
      "rating": "2",
      "age": "30",
      "site": "J. Arthur Dosher Memorial Hospital"
    },
    {
      "name": "Charles Robinson",
      "job": "HRIS Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24387",
      "bmi": "23",
      "rating": "2",
      "age": "29",
      "site": "Johnston Health"
    },
    {
      "name": "Dylan Padilla",
      "job": "HRIS Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24423",
      "bmi": "19",
      "rating": "4",
      "age": "47",
      "site": "Novant Health Kernersville Medical Center"
    },
    {
      "name": "Eva Garcia",
      "job": "HRIS Analyst",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "41.85003, -87.65037",
      "bmi": "15",
      "rating": "4",
      "age": "35",
      "site": "Kindred Hospital - Greensboro"
    },
    {
      "name": "Everleigh Washington",
      "job": "HRIS Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.76328, -95.36333",
      "bmi": "22",
      "rating": "5",
      "age": "25",
      "site": "Kings Mountain Hospital"
    },
    {
      "name": "Everly Walker",
      "job": "HRIS Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.76328, -95.36337",
      "bmi": "20",
      "rating": "5",
      "age": "45",
      "site": "Lake Norman Regional Medical Center"
    },
    {
      "name": "Isaac Sanders",
      "job": "HRIS Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "33.44838, -112.07418",
      "bmi": "21",
      "rating": "2",
      "age": "58",
      "site": "Lenoir Memorial Hospital"
    },
    {
      "name": "Luke Mai",
      "job": "HRIS Analyst",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.6501, -73.94980",
      "bmi": "21",
      "rating": "4",
      "age": "51",
      "site": "Lexington Memorial Hospital"
    },
    {
      "name": "Robert Edwards",
      "job": "HRIS Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41960",
      "bmi": "19",
      "rating": "3",
      "age": "48",
      "site": "LifeCare Hospitals of North Carolina"
    },
    {
      "name": "Austin Edwards",
      "job": "IT Coordinator",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00629",
      "bmi": "25",
      "rating": "1",
      "age": "36",
      "site": "Margaret R. Pardee Memorial Hospital"
    },
    {
      "name": "Clara Huynh",
      "job": "IT Coordinator",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24393",
      "bmi": "23",
      "rating": "2",
      "age": "59",
      "site": "Maria Parham Medical Center"
    },
    {
      "name": "Emma Hill",
      "job": "IT Coordinator",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65032",
      "bmi": "19",
      "rating": "1",
      "age": "45",
      "site": "Martin General Hospital"
    },
    {
      "name": "Ezekiel Kumar",
      "job": "IT Coordinator",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "29.76328, -95.36343",
      "bmi": "15",
      "rating": "1",
      "age": "29",
      "site": "Novant Health Medical Park Hospital"
    },
    {
      "name": "Miles Salazar",
      "job": "IT Coordinator",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "30.26715, -97.74309",
      "bmi": "21",
      "rating": "1",
      "age": "62",
      "site": "Memorial Mission Hospital and Asheville Surgery Center"
    },
    {
      "name": "Caleb Marquez",
      "job": "IT Systems Architect",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "34.05223, -118.24368",
      "bmi": "16",
      "rating": "1",
      "age": "51",
      "site": "Morehead Memorial Hospital"
    },
    {
      "name": "Jeremiah Chu",
      "job": "IT Systems Architect",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "32.71571, -117.16474",
      "bmi": "23",
      "rating": "1",
      "age": "47",
      "site": "Murphy Medical Center"
    },
    {
      "name": "Maria He",
      "job": "IT Systems Architect",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.68149, -73.83664",
      "bmi": "16",
      "rating": "2",
      "age": "40",
      "site": "Nash General Hospital"
    },
    {
      "name": "Serenity Bailey",
      "job": "IT Systems Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32092",
      "bmi": "19",
      "rating": "0",
      "age": "28",
      "site": "New Hanover Regional Medical Center"
    },
    {
      "name": "Alexander Choi",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00608",
      "bmi": "19",
      "rating": "0",
      "age": "29",
      "site": "North Carolina Specialty Hospital"
    },
    {
      "name": "Allison Medina",
      "job": "Manager",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "41.71557, -71.00613",
      "bmi": "23",
      "rating": "3",
      "age": "46",
      "site": "Northern Hospital of Surry County"
    },
    {
      "name": "Amelia Choi",
      "job": "Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.71557, -71.00615",
      "bmi": "17",
      "rating": "0",
      "age": "45",
      "site": "Onslow Memorial Hospital"
    },
    {
      "name": "Aurora Ali",
      "job": "Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00627",
      "bmi": "17",
      "rating": "4",
      "age": "30",
      "site": "Our Community Hospital"
    },
    {
      "name": "Colton Thao",
      "job": "Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24395",
      "bmi": "21",
      "rating": "0",
      "age": "48",
      "site": "Park Ridge Health"
    },
    {
      "name": "Connor Fong",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24397",
      "bmi": "24",
      "rating": "5",
      "age": "51",
      "site": "Pender Memorial Hospital"
    },
    {
      "name": "Cooper Mitchell",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24403",
      "bmi": "22",
      "rating": "3",
      "age": "28",
      "site": "Person Memorial Hospital"
    },
    {
      "name": "Easton Bailey",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24425",
      "bmi": "24",
      "rating": "1",
      "age": "36",
      "site": "Novant Health Presbyterian Medical Center"
    },
    {
      "name": "Eli Jones",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24433",
      "bmi": "24",
      "rating": "3",
      "age": "40",
      "site": "Novant Health Huntersville Medical Center"
    },
    {
      "name": "Elias Ali",
      "job": "Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "41.85003, -87.65008",
      "bmi": "21",
      "rating": "5",
      "age": "51",
      "site": "Novant Health Matthews Medical Center"
    },
    {
      "name": "Elijah Henry",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65013",
      "bmi": "22",
      "rating": "0",
      "age": "45",
      "site": "Novant Health Charlotte Orthopaedic Hospital"
    },
    {
      "name": "Ian Ngo",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "33.44838, -112.07415",
      "bmi": "21",
      "rating": "2",
      "age": "44",
      "site": "Vidant Pungo Hospital"
    },
    {
      "name": "Isla Espinoza",
      "job": "Manager",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "29.42412, -98.49366",
      "bmi": "18",
      "rating": "0",
      "age": "64",
      "site": "Randolph Hospital"
    },
    {
      "name": "Jack Edwards",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49376",
      "bmi": "22",
      "rating": "4",
      "age": "30",
      "site": "Rex Healthcare"
    },
    {
      "name": "Jack Huynh",
      "job": "Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "29.42412, -98.49377",
      "bmi": "18",
      "rating": "0",
      "age": "28",
      "site": "Vidant Roanoke-Chowan Hospital"
    },
    {
      "name": "James Bui",
      "job": "Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "29.42412, -98.49387",
      "bmi": "23",
      "rating": "4",
      "age": "33",
      "site": "Novant Health Rowan Medical Center"
    },
    {
      "name": "Jayden Jimenez",
      "job": "Manager",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "32.71571, -117.16473",
      "bmi": "25",
      "rating": "2",
      "age": "51",
      "site": "Rutherford Regional Medical Center"
    },
    {
      "name": "Jonathan Patel",
      "job": "Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "32.71571, -117.16483",
      "bmi": "17",
      "rating": "0",
      "age": "25",
      "site": "Sampson Regional Medical Center"
    },
    {
      "name": "Josiah Lewis",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16499",
      "bmi": "24",
      "rating": "2",
      "age": "42",
      "site": "Sandhills Regional Medical Center"
    },
    {
      "name": "Julian Ross",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80668",
      "bmi": "15",
      "rating": "5",
      "age": "34",
      "site": "Scotland Memorial Hospital and Edwin Morgan Center"
    },
    {
      "name": "Kennedy Foster",
      "job": "Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80672",
      "bmi": "18",
      "rating": "1",
      "age": "48",
      "site": "Select Specialty Hospital - Durham"
    },
    {
      "name": "Leo Fernandez",
      "job": "Manager",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "32.78306, -96.80686",
      "bmi": "16",
      "rating": "5",
      "age": "33",
      "site": "Select Specialty Hospital - Winston-Salem"
    },
    {
      "name": "Leonardo Martin",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80689",
      "bmi": "19",
      "rating": "1",
      "age": "41",
      "site": "Select Specialty Hospital-Greensboro"
    },
    {
      "name": "Liam Jung",
      "job": "Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.6501, -73.94961",
      "bmi": "21",
      "rating": "5",
      "age": "55",
      "site": "Southeastern Regional Medical Center"
    },
    {
      "name": "Luca Duong",
      "job": "Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.6501, -73.94972",
      "bmi": "15",
      "rating": "1",
      "age": "36",
      "site": "St. Luke's Hospital"
    },
    {
      "name": "Lucas Thomas",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94976",
      "bmi": "20",
      "rating": "4",
      "age": "31",
      "site": "Stanly Regional Medical Center"
    },
    {
      "name": "Lucy Johnson",
      "job": "Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94979",
      "bmi": "21",
      "rating": "2",
      "age": "53",
      "site": "Stokes-Reynolds Memorial Hospital"
    },
    {
      "name": "Maria Griffin",
      "job": "Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83663",
      "bmi": "22",
      "rating": "1",
      "age": "43",
      "site": "Swain County Hospital"
    },
    {
      "name": "Maya Ngo",
      "job": "Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.33939, -121.89501",
      "bmi": "18",
      "rating": "4",
      "age": "37",
      "site": "The McDowell Hospital"
    },
    {
      "name": "Mila Juarez",
      "job": "Manager",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "37.33939, -121.89508",
      "bmi": "20",
      "rating": "1",
      "age": "38",
      "site": "The Outer Banks Hospital"
    },
    {
      "name": "Natalia Owens",
      "job": "Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "30.26715, -97.74311",
      "bmi": "25",
      "rating": "4",
      "age": "49",
      "site": "Thomasville Medical Center"
    },
    {
      "name": "Nathan Mendez",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "30.26715, -97.74315",
      "bmi": "22",
      "rating": "5",
      "age": "45",
      "site": "Transylvania Regional Hospital"
    },
    {
      "name": "Nathan Sun",
      "job": "Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "30.26715, -97.74317",
      "bmi": "16",
      "rating": "3",
      "age": "50",
      "site": "University of North Carolina Hospitals"
    },
    {
      "name": "Roman Yang",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99881",
      "bmi": "61",
      "rating": "5",
      "age": "64",
      "site": "Valdese General Hospital"
    },
    {
      "name": "Ruby Barnes",
      "job": "Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99882",
      "bmi": "75",
      "rating": "4",
      "age": "55",
      "site": "Vidant Medical Center"
    },
    {
      "name": "Santiago f Gonzalez",
      "job": "Manager",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32085",
      "bmi": "72",
      "rating": "4",
      "age": "45",
      "site": "Wake Forest Baptist Medical Center"
    },
    {
      "name": "Vivian Lewis",
      "job": "Manager",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "35.22709, -80.84314",
      "bmi": "88",
      "rating": "4",
      "age": "39",
      "site": "WakeMed"
    },
    {
      "name": "Wesley Sharma",
      "job": "Manager",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "35.22709, -80.84317",
      "bmi": "82",
      "rating": "5",
      "age": "40",
      "site": "WakeMed Cary Hospital"
    },
    {
      "name": "Connor Bell",
      "job": "Network Administrator",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24396",
      "bmi": "81",
      "rating": "5",
      "age": "48",
      "site": "Washington County Hospital"
    },
    {
      "name": "Daniel Jordan",
      "job": "Network Administrator",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24409",
      "bmi": "67",
      "rating": "3",
      "age": "64",
      "site": "Watauga Medical Center"
    },
    {
      "name": "Everett Lee",
      "job": "Network Administrator",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "29.76328, -95.36327",
      "bmi": "22",
      "rating": "4",
      "age": "85",
      "site": "Wayne Memorial Hospital"
    },
    {
      "name": "Ezra Simmons",
      "job": "Network Administrator",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16381",
      "bmi": "80",
      "rating": "4",
      "age": "43",
      "site": "Wilkes Regional Medical Center"
    },
    {
      "name": "Luna Taylor",
      "job": "Network Administrator",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83654",
      "bmi": "95",
      "rating": "5",
      "age": "50",
      "site": "Wilson Medical Center"
    },
    {
      "name": "Addison Roberts",
      "job": "Network Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00602",
      "bmi": "89",
      "rating": "4",
      "age": "27",
      "site": "Alamance Regional Medical Center"
    },
    {
      "name": "Angel Chang",
      "job": "Network Architect",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "41.71557, -71.00621",
      "bmi": "23",
      "rating": "4",
      "age": "55",
      "site": "Albemarle Hospital"
    },
    {
      "name": "Eliza Hernandez",
      "job": "Network Architect",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "41.85003, -87.65017",
      "bmi": "18",
      "rating": "2",
      "age": "41",
      "site": "Alexander Hospital"
    },
    {
      "name": "Everleigh White",
      "job": "Network Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.76328, -95.36334",
      "bmi": "20",
      "rating": "2",
      "age": "34",
      "site": "Alleghany Memorial Hospital"
    },
    {
      "name": "Isaac Mitchell",
      "job": "Network Architect",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "33.44838, -112.07417",
      "bmi": "19",
      "rating": "5",
      "age": "47",
      "site": "Angel Medical Center"
    },
    {
      "name": "Jaxon Park",
      "job": "Network Architect",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "29.42412, -98.49390",
      "bmi": "22",
      "rating": "1",
      "age": "32",
      "site": "Annie Penn Hospital"
    },
    {
      "name": "Jeremiah Lu",
      "job": "Network Architect",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "32.71571, -117.16475",
      "bmi": "25",
      "rating": "0",
      "age": "39",
      "site": "Anson Community Hospital"
    },
    {
      "name": "Lily Carter",
      "job": "Network Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94966",
      "bmi": "23",
      "rating": "1",
      "age": "26",
      "site": "Ashe Memorial Hospital"
    },
    {
      "name": "Miles Evans",
      "job": "Network Architect",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "30.26715, -97.74306",
      "bmi": "18",
      "rating": "2",
      "age": "40",
      "site": "Asheville Specialty Hospital"
    },
    {
      "name": "Skylar Watson",
      "job": "Network Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32099",
      "bmi": "21",
      "rating": "3",
      "age": "32",
      "site": "Vidant Beaufort Hospital"
    },
    {
      "name": "Zoe Romero",
      "job": "Network Architect",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "35.22709, -80.84327",
      "bmi": "22",
      "rating": "5",
      "age": "58",
      "site": "Vidant Bertie Hospital"
    },
    {
      "name": "Charlotte Chu",
      "job": "Network Engineer",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24388",
      "bmi": "18",
      "rating": "4",
      "age": "58",
      "site": "Betsy Johnson Regional Hospital"
    },
    {
      "name": "Gabriel Brooks",
      "job": "Network Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16382",
      "bmi": "21",
      "rating": "5",
      "age": "42",
      "site": "Blowing Rock Hospital"
    },
    {
      "name": "Matthew Gupta",
      "job": "Network Engineer",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "37.33939, -121.89498",
      "bmi": "22",
      "rating": "4",
      "age": "26",
      "site": "Blue Ridge Regional Hospital"
    },
    {
      "name": "Addison Do",
      "job": "Operations Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00601",
      "bmi": "22",
      "rating": "0",
      "age": "38",
      "site": "Novant Health Brunswick Medical Center"
    },
    {
      "name": "Andrew Moore",
      "job": "Operations Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "41.71557, -71.00619",
      "bmi": "22",
      "rating": "0",
      "age": "64",
      "site": "Caldwell Memorial Hospital"
    },
    {
      "name": "Daniel Dixon",
      "job": "Operations Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24407",
      "bmi": "23",
      "rating": "3",
      "age": "38",
      "site": "Cape Fear Valley Medical Center"
    },
    {
      "name": "Natalia Diaz",
      "job": "Operations Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "30.26715, -97.74310",
      "bmi": "18",
      "rating": "4",
      "age": "55",
      "site": "Cape Fear Valley-Bladen County Hospital"
    },
    {
      "name": "Sofia Dinh",
      "job": "Operations Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32100",
      "bmi": "17",
      "rating": "0",
      "age": "45",
      "site": "CarePartners Rehabilitation Hospital"
    },
    {
      "name": "Abigail Mejia",
      "job": "Quality Engineer",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "40.71427, -74.00597",
      "bmi": "22",
      "rating": "3",
      "age": "43",
      "site": "CarolinaEast Medical Center"
    },
    {
      "name": "Axel Soto",
      "job": "Quality Engineer",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "40.71427, -74.00642",
      "bmi": "21",
      "rating": "3",
      "age": "34",
      "site": "Carolinas Medical Center-Pineville"
    },
    {
      "name": "Dominic Clark",
      "job": "Quality Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24417",
      "bmi": "24",
      "rating": "5",
      "age": "40",
      "site": "Carolinas Medical Center-Lincoln"
    },
    {
      "name": "Gianna Williams",
      "job": "Quality Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16393",
      "bmi": "24",
      "rating": "1",
      "age": "52",
      "site": "Carolinas Medical Center-NorthEast"
    },
    {
      "name": "Harper Chin",
      "job": "Quality Engineer",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "33.44838, -112.07405",
      "bmi": "25",
      "rating": "3",
      "age": "52",
      "site": "Carolinas Medical Center-Union"
    },
    {
      "name": "Isla Yoon",
      "job": "Quality Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49370",
      "bmi": "23",
      "rating": "1",
      "age": "47",
      "site": "Carolinas Medical Center-University"
    },
    {
      "name": "Julian Fong",
      "job": "Quality Engineer",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "32.78306, -96.80667",
      "bmi": "17",
      "rating": "2",
      "age": "65",
      "site": "Carolinas Medical Center/Center for Mental Health"
    },
    {
      "name": "Mila Vasquez",
      "job": "Quality Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.33939, -121.89512",
      "bmi": "24",
      "rating": "4",
      "age": "31",
      "site": "Carolinas Rehabilitation"
    },
    {
      "name": "Parker James",
      "job": "Quality Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41944",
      "bmi": "23",
      "rating": "0",
      "age": "41",
      "site": "Carolinas Rehabilitation Mt. Holly"
    },
    {
      "name": "Piper Patterson",
      "job": "Quality Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41953",
      "bmi": "21",
      "rating": "3",
      "age": "30",
      "site": "Carolinas Specialty Hospital"
    },
    {
      "name": "Anna Zhu",
      "job": "Service Desk Analyst",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.71427, -74.00615",
      "bmi": "22",
      "rating": "4",
      "age": "58",
      "site": "Carteret General Hospital"
    },
    {
      "name": "Brooklyn Reyes",
      "job": "Service Desk Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00650",
      "bmi": "15",
      "rating": "2",
      "age": "54",
      "site": "Catawba Valley Medical Center"
    },
    {
      "name": "Ella Nguyen",
      "job": "Service Desk Analyst",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "41.85003, -87.65019",
      "bmi": "16",
      "rating": "5",
      "age": "40",
      "site": "Central Carolina Hospital"
    },
    {
      "name": "Evelyn Liang",
      "job": "Service Desk Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65042",
      "bmi": "21",
      "rating": "5",
      "age": "63",
      "site": "Charles A. Cannon, Jr. Memorial Hospital"
    },
    {
      "name": "Jace Zhang",
      "job": "Service Desk Analyst",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "29.42412, -98.49373",
      "bmi": "15",
      "rating": "0",
      "age": "40",
      "site": "Chatham Hospital"
    },
    {
      "name": "Jaxson Wright",
      "job": "Service Desk Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16472",
      "bmi": "21",
      "rating": "5",
      "age": "65",
      "site": "Vidant Chowan Hospital"
    },
    {
      "name": "Liliana Do",
      "job": "Service Desk Analyst",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.6501, -73.94962",
      "bmi": "20",
      "rating": "5",
      "age": "57",
      "site": "Cleveland Regional Medical Center"
    },
    {
      "name": "Elias Zhang",
      "job": "Solutions Architect",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "41.85003, -87.65012",
      "bmi": "16",
      "rating": "0",
      "age": "27",
      "site": "Columbus Regional Healthcare System"
    },
    {
      "name": "Emma Perry",
      "job": "Solutions Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65033",
      "bmi": "25",
      "rating": "3",
      "age": "31",
      "site": "Cone Health"
    },
    {
      "name": "Silas Hunter",
      "job": "Solutions Architect",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32094",
      "bmi": "23",
      "rating": "2",
      "age": "45",
      "site": "Crawley Memorial Hospital"
    },
    {
      "name": "Violet Hall",
      "job": "Solutions Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.76838, -86.15814",
      "bmi": "21",
      "rating": "5",
      "age": "47",
      "site": "Davie County Hospital"
    },
    {
      "name": "Emma Brooks",
      "job": "Sr. Account Representative",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65030",
      "bmi": "22",
      "rating": "1",
      "age": "55",
      "site": "Davis Regional Medical Center"
    },
    {
      "name": "Gabriella Gupta",
      "job": "Sr. Account Representative",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "39.95233, -75.16386",
      "bmi": "22",
      "rating": "2",
      "age": "51",
      "site": "Duke Health Raleigh Hospital"
    },
    {
      "name": "Lucy Fong",
      "job": "Sr. Account Representative",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.6501, -73.94978",
      "bmi": "20",
      "rating": "2",
      "age": "25",
      "site": "Duke University Hospital"
    },
    {
      "name": "Thomas Aguilar",
      "job": "Sr. Account Representative",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.76838, -86.15809",
      "bmi": "19",
      "rating": "0",
      "age": "37",
      "site": "Vidant Duplin Hospital"
    },
    {
      "name": "Adrian Ruiz",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "40.71427, -74.00605",
      "bmi": "19",
      "rating": "2",
      "age": "62",
      "site": "Durham Regional Hospital"
    },
    {
      "name": "Alexander Rivera",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "40.71427, -74.00609",
      "bmi": "19",
      "rating": "2",
      "age": "31",
      "site": "FirstHealth Montgomery Memorial Hospital"
    },
    {
      "name": "Anna Molina",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00614",
      "bmi": "17",
      "rating": "0",
      "age": "64",
      "site": "FirstHealth Moore Regional Hospital and Pinehurst Treatment"
    },
    {
      "name": "Austin Vo",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00630",
      "bmi": "18",
      "rating": "0",
      "age": "25",
      "site": "FirstHealth Moore Regional Hospital Hoke Campus"
    },
    {
      "name": "Avery Bailey",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00638",
      "bmi": "15",
      "rating": "4",
      "age": "59",
      "site": "FirstHealth Richmond Memorial Hospital"
    },
    {
      "name": "Bella Lopez",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00645",
      "bmi": "15",
      "rating": "4",
      "age": "40",
      "site": "Novant Health Forsyth Medical Center"
    },
    {
      "name": "Connor Grant",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24398",
      "bmi": "18",
      "rating": "5",
      "age": "31",
      "site": "Novant Health Franklin Regional Medical Center"
    },
    {
      "name": "Cora Rivera",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24406",
      "bmi": "15",
      "rating": "0",
      "age": "45",
      "site": "Frye Regional Medical Center"
    },
    {
      "name": "David Owens",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24415",
      "bmi": "15",
      "rating": "2",
      "age": "49",
      "site": "Gaston Memorial Hospital"
    },
    {
      "name": "Dominic Baker",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24416",
      "bmi": "23",
      "rating": "1",
      "age": "46",
      "site": "Grace Hospital"
    },
    {
      "name": "Dylan Dominguez",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "34.05223, -118.24422",
      "bmi": "21",
      "rating": "5",
      "age": "46",
      "site": "Granville Health System"
    },
    {
      "name": "Eleanor Delgado",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "34.05223, -118.24427",
      "bmi": "16",
      "rating": "3",
      "age": "45",
      "site": "Halifax Regional Medical Center"
    },
    {
      "name": "Eli Han",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24432",
      "bmi": "21",
      "rating": "0",
      "age": "40",
      "site": "Harris Regional Hospital"
    },
    {
      "name": "Emery Hunter",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65025",
      "bmi": "17",
      "rating": "0",
      "age": "48",
      "site": "Haywood Regional Medical Center"
    },
    {
      "name": "Ezekiel Bryant",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "29.76328, -95.36339",
      "bmi": "23",
      "rating": "2",
      "age": "31",
      "site": "Vidant Edgecombe Hospital"
    },
    {
      "name": "Genesis Hu",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "39.95233, -75.16389",
      "bmi": "23",
      "rating": "2",
      "age": "30",
      "site": "High Point Regional Health System"
    },
    {
      "name": "Hannah Nelson",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16407",
      "bmi": "20",
      "rating": "2",
      "age": "55",
      "site": "Highlands-Cashiers Hospital"
    },
    {
      "name": "Harper Alexander",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "33.44838, -112.07404",
      "bmi": "19",
      "rating": "3",
      "age": "28",
      "site": "Highsmith-Rainey Specialty Hospital"
    },
    {
      "name": "Hunter Ortiz",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "33.44838, -112.07412",
      "bmi": "20",
      "rating": "3",
      "age": "45",
      "site": "Hoots Memorial Hospital"
    },
    {
      "name": "Ian Wu",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "33.44838, -112.07416",
      "bmi": "16",
      "rating": "4",
      "age": "45",
      "site": "Hugh Chatham Memorial Hospital"
    },
    {
      "name": "Jaxson Sandoval",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "29.42412, -98.49394",
      "bmi": "19",
      "rating": "3",
      "age": "63",
      "site": "Iredell Memorial Hospital"
    },
    {
      "name": "Jordan Gomez",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "32.71571, -117.16484",
      "bmi": "23",
      "rating": "0",
      "age": "55",
      "site": "J. Arthur Dosher Memorial Hospital"
    },
    {
      "name": "Landon Lopez",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "32.78306, -96.80678",
      "bmi": "19",
      "rating": "3",
      "age": "47",
      "site": "Johnston Health"
    },
    {
      "name": "Leilani Yee",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "32.78306, -96.80685",
      "bmi": "22",
      "rating": "4",
      "age": "29",
      "site": "Novant Health Kernersville Medical Center"
    },
    {
      "name": "Levi Brown",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94958",
      "bmi": "25",
      "rating": "4",
      "age": "34",
      "site": "Kindred Hospital - Greensboro"
    },
    {
      "name": "Logan Carrillo",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94970",
      "bmi": "16",
      "rating": "2",
      "age": "28",
      "site": "Kings Mountain Hospital"
    },
    {
      "name": "Luna Simmons",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83653",
      "bmi": "17",
      "rating": "1",
      "age": "31",
      "site": "Lake Norman Regional Medical Center"
    },
    {
      "name": "Madeline Walker",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83659",
      "bmi": "24",
      "rating": "0",
      "age": "50",
      "site": "Lenoir Memorial Hospital"
    },
    {
      "name": "Matthew Lim",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "37.33939, -121.89499",
      "bmi": "20",
      "rating": "1",
      "age": "39",
      "site": "Lexington Memorial Hospital"
    },
    {
      "name": "Mila Leung",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "37.33939, -121.89509",
      "bmi": "21",
      "rating": "1",
      "age": "35",
      "site": "LifeCare Hospitals of North Carolina"
    },
    {
      "name": "Natalia Salazar",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "30.26715, -97.74312",
      "bmi": "19",
      "rating": "2",
      "age": "54",
      "site": "Margaret R. Pardee Memorial Hospital"
    },
    {
      "name": "Natalie Hwang",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "30.26715, -97.74313",
      "bmi": "17",
      "rating": "3",
      "age": "47",
      "site": "Maria Parham Medical Center"
    },
    {
      "name": "Penelope Johnson",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41948",
      "bmi": "22",
      "rating": "4",
      "age": "26",
      "site": "Martin General Hospital"
    },
    {
      "name": "Piper Richardson",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41954",
      "bmi": "25",
      "rating": "5",
      "age": "42",
      "site": "Novant Health Medical Park Hospital"
    },
    {
      "name": "Robert Yang",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99879",
      "bmi": "16",
      "rating": "1",
      "age": "47",
      "site": "Memorial Mission Hospital and Asheville Surgery Center"
    },
    {
      "name": "Scarlett Rodriguez",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "32.72541, -97.32091",
      "bmi": "19",
      "rating": "2",
      "age": "60",
      "site": "Morehead Memorial Hospital"
    },
    {
      "name": "Thomas Chang",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "39.76838, -86.15810",
      "bmi": "23",
      "rating": "0",
      "age": "36",
      "site": "Murphy Medical Center"
    },
    {
      "name": "Wesley Gray",
      "job": "Sr. Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "35.22709, -80.84316",
      "bmi": "15",
      "rating": "3",
      "age": "31",
      "site": "Nash General Hospital"
    },
    {
      "name": "Zoe Sanchez",
      "job": "Sr. Analyst",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "40.78343, -73.96625",
      "bmi": "23",
      "rating": "1",
      "age": "55",
      "site": "New Hanover Regional Medical Center"
    },
    {
      "name": "Aubrey Yoon",
      "job": "Sr. Business Partner",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.71427, -74.00625",
      "bmi": "22",
      "rating": "4",
      "age": "51",
      "site": "North Carolina Specialty Hospital"
    },
    {
      "name": "Ethan Clark",
      "job": "Sr. Business Partner",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65034",
      "bmi": "21",
      "rating": "5",
      "age": "48",
      "site": "Northern Hospital of Surry County"
    },
    {
      "name": "Henry Alvarez",
      "job": "Sr. Business Partner",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "33.44838, -112.07406",
      "bmi": "16",
      "rating": "4",
      "age": "58",
      "site": "Onslow Memorial Hospital"
    },
    {
      "name": "Liam Grant",
      "job": "Sr. Business Partner",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94960",
      "bmi": "24",
      "rating": "5",
      "age": "29",
      "site": "Our Community Hospital"
    },
    {
      "name": "Lucas Ramos",
      "job": "Sr. Business Partner",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94975",
      "bmi": "24",
      "rating": "0",
      "age": "25",
      "site": "Park Ridge Health"
    },
    {
      "name": "Matthew Chau",
      "job": "Sr. Business Partner",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "37.33939, -121.89497",
      "bmi": "18",
      "rating": "1",
      "age": "36",
      "site": "Pender Memorial Hospital"
    },
    {
      "name": "Mila Pena",
      "job": "Sr. Business Partner",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "37.33939, -121.89510",
      "bmi": "23",
      "rating": "3",
      "age": "37",
      "site": "Person Memorial Hospital"
    },
    {
      "name": "Owen Lam",
      "job": "Sr. Business Partner",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "30.33218, -81.65580",
      "bmi": "16",
      "rating": "4",
      "age": "57",
      "site": "Novant Health Presbyterian Medical Center"
    },
    {
      "name": "Skylar Doan",
      "job": "Sr. Business Partner",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32097",
      "bmi": "24",
      "rating": "5",
      "age": "59",
      "site": "Novant Health Huntersville Medical Center"
    },
    {
      "name": "Andrew Do",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "41.71557, -71.00617",
      "bmi": "24",
      "rating": "3",
      "age": "37",
      "site": "Novant Health Matthews Medical Center"
    },
    {
      "name": "Asher Jackson",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00619",
      "bmi": "21",
      "rating": "2",
      "age": "30",
      "site": "Novant Health Charlotte Orthopaedic Hospital"
    },
    {
      "name": "Ava Ayala",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "40.71427, -74.00634",
      "bmi": "18",
      "rating": "3",
      "age": "49",
      "site": "Vidant Pungo Hospital"
    },
    {
      "name": "Ayla Brown",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00643",
      "bmi": "21",
      "rating": "2",
      "age": "48",
      "site": "Randolph Hospital"
    },
    {
      "name": "Camila Li",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24372",
      "bmi": "16",
      "rating": "1",
      "age": "51",
      "site": "Rex Healthcare"
    },
    {
      "name": "Camila Silva",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24374",
      "bmi": "16",
      "rating": "0",
      "age": "56",
      "site": "Vidant Roanoke-Chowan Hospital"
    },
    {
      "name": "Caroline Herrera",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "34.05223, -118.24377",
      "bmi": "23",
      "rating": "4",
      "age": "36",
      "site": "Novant Health Rowan Medical Center"
    },
    {
      "name": "Caroline Hu",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24378",
      "bmi": "16",
      "rating": "2",
      "age": "38",
      "site": "Rutherford Regional Medical Center"
    },
    {
      "name": "Caroline Phan",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24381",
      "bmi": "19",
      "rating": "5",
      "age": "56",
      "site": "Sampson Regional Medical Center"
    },
    {
      "name": "Carter Mejia",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "34.05223, -118.24384",
      "bmi": "19",
      "rating": "2",
      "age": "52",
      "site": "Sandhills Regional Medical Center"
    },
    {
      "name": "Charles Diaz",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "34.05223, -118.24386",
      "bmi": "25",
      "rating": "1",
      "age": "53",
      "site": "Scotland Memorial Hospital and Edwin Morgan Center"
    },
    {
      "name": "Clara Kang",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24394",
      "bmi": "20",
      "rating": "1",
      "age": "60",
      "site": "Select Specialty Hospital - Durham"
    },
    {
      "name": "Eleanor Chan",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24426",
      "bmi": "21",
      "rating": "2",
      "age": "63",
      "site": "Select Specialty Hospital - Winston-Salem"
    },
    {
      "name": "Eleanor Li",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24428",
      "bmi": "21",
      "rating": "1",
      "age": "37",
      "site": "Select Specialty Hospital-Greensboro"
    },
    {
      "name": "Elias Alvarado",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "41.85003, -87.65009",
      "bmi": "17",
      "rating": "2",
      "age": "30",
      "site": "Southeastern Regional Medical Center"
    },
    {
      "name": "Elias Figueroa",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65011",
      "bmi": "18",
      "rating": "4",
      "age": "30",
      "site": "St. Luke's Hospital"
    },
    {
      "name": "Elijah Watson",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65015",
      "bmi": "24",
      "rating": "4",
      "age": "45",
      "site": "Stanly Regional Medical Center"
    },
    {
      "name": "Ellie Chung",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "41.85003, -87.65021",
      "bmi": "18",
      "rating": "4",
      "age": "55",
      "site": "Stokes-Reynolds Memorial Hospital"
    },
    {
      "name": "Emily Davis",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65029",
      "bmi": "23",
      "rating": "1",
      "age": "33",
      "site": "Swain County Hospital"
    },
    {
      "name": "Eva Jenkins",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65038",
      "bmi": "24",
      "rating": "1",
      "age": "65",
      "site": "The McDowell Hospital"
    },
    {
      "name": "Everleigh Ng",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "29.76328, -95.36331",
      "bmi": "16",
      "rating": "0",
      "age": "60",
      "site": "The Outer Banks Hospital"
    },
    {
      "name": "Everly Chow",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "29.76328, -95.36335",
      "bmi": "24",
      "rating": "5",
      "age": "56",
      "site": "Thomasville Medical Center"
    },
    {
      "name": "Everly Walker",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.76328, -95.36338",
      "bmi": "17",
      "rating": "5",
      "age": "53",
      "site": "Transylvania Regional Hospital"
    },
    {
      "name": "Ezekiel Jordan",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "29.76328, -95.36342",
      "bmi": "17",
      "rating": "2",
      "age": "36",
      "site": "University of North Carolina Hospitals"
    },
    {
      "name": "Ezekiel Reed",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16379",
      "bmi": "15",
      "rating": "1",
      "age": "46",
      "site": "Valdese General Hospital"
    },
    {
      "name": "Genesis Perry",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16391",
      "bmi": "21",
      "rating": "1",
      "age": "38",
      "site": "Vidant Medical Center"
    },
    {
      "name": "Grayson Cooper",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16396",
      "bmi": "25",
      "rating": "0",
      "age": "62",
      "site": "Wake Forest Baptist Medical Center"
    },
    {
      "name": "Hadley Guerrero",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "39.95233, -75.16402",
      "bmi": "18",
      "rating": "5",
      "age": "61",
      "site": "WakeMed"
    },
    {
      "name": "Henry Campos",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "33.44838, -112.07407",
      "bmi": "21",
      "rating": "0",
      "age": "59",
      "site": "WakeMed Cary Hospital"
    },
    {
      "name": "Ivy Daniels",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49371",
      "bmi": "16",
      "rating": "3",
      "age": "49",
      "site": "Washington County Hospital"
    },
    {
      "name": "Jaxon Tran",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "29.42412, -98.49391",
      "bmi": "18",
      "rating": "5",
      "age": "64",
      "site": "Watauga Medical Center"
    },
    {
      "name": "Jaxson Dinh",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "29.42412, -98.49392",
      "bmi": "17",
      "rating": "5",
      "age": "57",
      "site": "Wayne Memorial Hospital"
    },
    {
      "name": "John Chow",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "32.71571, -117.16476",
      "bmi": "18",
      "rating": "4",
      "age": "52",
      "site": "Wilkes Regional Medical Center"
    },
    {
      "name": "John Soto",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16479",
      "bmi": "21",
      "rating": "0",
      "age": "40",
      "site": "Wilson Medical Center"
    },
    {
      "name": "Joseph Vazquez",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16494",
      "bmi": "16",
      "rating": "4",
      "age": "49",
      "site": "Alamance Regional Medical Center"
    },
    {
      "name": "Julia Luong",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "32.71571, -117.16500",
      "bmi": "24",
      "rating": "2",
      "age": "43",
      "site": "Albemarle Hospital"
    },
    {
      "name": "Julia Morris",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16501",
      "bmi": "17",
      "rating": "3",
      "age": "31",
      "site": "Alexander Hospital"
    },
    {
      "name": "Layla Torres",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "32.78306, -96.80680",
      "bmi": "18",
      "rating": "4",
      "age": "55",
      "site": "Alleghany Memorial Hospital"
    },
    {
      "name": "Lillian Chen",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94964",
      "bmi": "80",
      "rating": "4",
      "age": "41",
      "site": "Angel Medical Center"
    },
    {
      "name": "Logan Bryant",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.6501, -73.94969",
      "bmi": "76",
      "rating": "3",
      "age": "34",
      "site": "Annie Penn Hospital"
    },
    {
      "name": "Madeline Coleman",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83656",
      "bmi": "77",
      "rating": "3",
      "age": "41",
      "site": "Anson Community Hospital"
    },
    {
      "name": "Mason Watson",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83669",
      "bmi": "82",
      "rating": "4",
      "age": "40",
      "site": "Ashe Memorial Hospital"
    },
    {
      "name": "Mia Cheng",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.33939, -121.89504",
      "bmi": "19",
      "rating": "5",
      "age": "42",
      "site": "Asheville Specialty Hospital"
    },
    {
      "name": "Mia Lam",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.33939, -121.89505",
      "bmi": "16",
      "rating": "0",
      "age": "31",
      "site": "Vidant Beaufort Hospital"
    },
    {
      "name": "Nathan Pham",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "30.26715, -97.74316",
      "bmi": "22",
      "rating": "4",
      "age": "49",
      "site": "Vidant Bertie Hospital"
    },
    {
      "name": "Noah Chen",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "30.33218, -81.65569",
      "bmi": "18",
      "rating": "4",
      "age": "42",
      "site": "Betsy Johnson Regional Hospital"
    },
    {
      "name": "Peyton Huang",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "37.77493, -122.41950",
      "bmi": "21",
      "rating": "1",
      "age": "46",
      "site": "Blowing Rock Hospital"
    },
    {
      "name": "Raelynn Gupta",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "37.77493, -122.41957",
      "bmi": "17",
      "rating": "2",
      "age": "37",
      "site": "Blue Ridge Regional Hospital"
    },
    {
      "name": "Riley Marquez",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41958",
      "bmi": "22",
      "rating": "2",
      "age": "51",
      "site": "Novant Health Brunswick Medical Center"
    },
    {
      "name": "Roman Martinez",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "39.96118, -82.99880",
      "bmi": "17",
      "rating": "0",
      "age": "46",
      "site": "Caldwell Memorial Hospital"
    },
    {
      "name": "Sadie Washington",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99887",
      "bmi": "17",
      "rating": "4",
      "age": "55",
      "site": "Cape Fear Valley Medical Center"
    },
    {
      "name": "Santiago f Brooks",
      "job": "Sr. Manger",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99894",
      "bmi": "17",
      "rating": "2",
      "age": "43",
      "site": "Cape Fear Valley-Bladen County Hospital"
    },
    {
      "name": "Sarah Daniels",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32087",
      "bmi": "15",
      "rating": "1",
      "age": "48",
      "site": "CarePartners Rehabilitation Hospital"
    },
    {
      "name": "Savannah Ali",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32088",
      "bmi": "20",
      "rating": "2",
      "age": "48",
      "site": "CarolinaEast Medical Center"
    },
    {
      "name": "Sophia Ahmed",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32102",
      "bmi": "25",
      "rating": "1",
      "age": "51",
      "site": "Carolinas Medical Center-Pineville"
    },
    {
      "name": "Sophie Vang",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "39.76838, -86.15805",
      "bmi": "18",
      "rating": "4",
      "age": "46",
      "site": "Carolinas Medical Center-Lincoln"
    },
    {
      "name": "Victoria Johnson",
      "job": "Sr. Manger",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.76838, -86.15813",
      "bmi": "16",
      "rating": "2",
      "age": "33",
      "site": "Carolinas Medical Center-NorthEast"
    },
    {
      "name": "Athena Jordan",
      "job": "System Administrator ",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00622",
      "bmi": "19",
      "rating": "3",
      "age": "42",
      "site": "Carolinas Medical Center-Union"
    },
    {
      "name": "Genesis Xiong",
      "job": "System Administrator ",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16392",
      "bmi": "25",
      "rating": "5",
      "age": "55",
      "site": "Carolinas Medical Center-University"
    },
    {
      "name": "Jonathan Chavez",
      "job": "System Administrator ",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16481",
      "bmi": "19",
      "rating": "1",
      "age": "50",
      "site": "Carolinas Medical Center/Center for Mental Health"
    },
    {
      "name": "Jose Brown",
      "job": "System Administrator ",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16486",
      "bmi": "18",
      "rating": "3",
      "age": "26",
      "site": "Carolinas Rehabilitation"
    },
    {
      "name": "Lydia Williams",
      "job": "System Administrator ",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83655",
      "bmi": "22",
      "rating": "3",
      "age": "55",
      "site": "Carolinas Rehabilitation Mt. Holly"
    },
    {
      "name": "Nova Coleman",
      "job": "System Administrator ",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "30.33218, -81.65576",
      "bmi": "22",
      "rating": "5",
      "age": "50",
      "site": "Carolinas Specialty Hospital"
    },
    {
      "name": "Wesley Adams",
      "job": "System Administrator ",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "35.22709, -80.84315",
      "bmi": "23",
      "rating": "3",
      "age": "28",
      "site": "Carteret General Hospital"
    },
    {
      "name": "Ava Nelson",
      "job": "Systems Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00636",
      "bmi": "18",
      "rating": "1",
      "age": "39",
      "site": "Catawba Valley Medical Center"
    },
    {
      "name": "Avery Yee",
      "job": "Systems Analyst",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00639",
      "bmi": "21",
      "rating": "2",
      "age": "31",
      "site": "Central Carolina Hospital"
    },
    {
      "name": "Axel Chu",
      "job": "Systems Analyst",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.71427, -74.00640",
      "bmi": "22",
      "rating": "5",
      "age": "55",
      "site": "Charles A. Cannon, Jr. Memorial Hospital"
    },
    {
      "name": "Leo Owens",
      "job": "Systems Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80687",
      "bmi": "20",
      "rating": "5",
      "age": "52",
      "site": "Chatham Hospital"
    },
    {
      "name": "Madeline Hoang",
      "job": "Systems Analyst",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.68149, -73.83657",
      "bmi": "21",
      "rating": "2",
      "age": "55",
      "site": "Vidant Chowan Hospital"
    },
    {
      "name": "Maverick Mehta",
      "job": "Systems Analyst",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "37.33939, -121.89500",
      "bmi": "18",
      "rating": "3",
      "age": "56",
      "site": "Cleveland Regional Medical Center"
    },
    {
      "name": "Miles Cho",
      "job": "Systems Analyst",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "37.33939, -121.89513",
      "bmi": "18",
      "rating": "2",
      "age": "47",
      "site": "Columbus Regional Healthcare System"
    },
    {
      "name": "Gabriel Yu",
      "job": "Technical Architect",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "39.95233, -75.16385",
      "bmi": "21",
      "rating": "5",
      "age": "63",
      "site": "Cone Health"
    },
    {
      "name": "Hannah Gomez",
      "job": "Technical Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16406",
      "bmi": "25",
      "rating": "4",
      "age": "63",
      "site": "Crawley Memorial Hospital"
    },
    {
      "name": "Isla Han",
      "job": "Technical Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49367",
      "bmi": "15",
      "rating": "0",
      "age": "55",
      "site": "Davie County Hospital"
    },
    {
      "name": "Joshua Lin",
      "job": "Technical Architect",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "32.71571, -117.16498",
      "bmi": "25",
      "rating": "2",
      "age": "55",
      "site": "Davis Regional Medical Center"
    },
    {
      "name": "Leilani Baker",
      "job": "Technical Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80682",
      "bmi": "24",
      "rating": "2",
      "age": "42",
      "site": "Duke Health Raleigh Hospital"
    },
    {
      "name": "Mason Zhao",
      "job": "Technical Architect",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.68149, -73.83670",
      "bmi": "20",
      "rating": "4",
      "age": "39",
      "site": "Duke University Hospital"
    },
    {
      "name": "Penelope Choi",
      "job": "Technical Architect",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "37.77493, -122.41945",
      "bmi": "15",
      "rating": "4",
      "age": "35",
      "site": "Vidant Duplin Hospital"
    },
    {
      "name": "Riley Padilla",
      "job": "Technical Architect",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41959",
      "bmi": "25",
      "rating": "5",
      "age": "45",
      "site": "Durham Regional Hospital"
    },
    {
      "name": "Silas Chavez",
      "job": "Technical Architect",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32093",
      "bmi": "17",
      "rating": "2",
      "age": "25",
      "site": "FirstHealth Montgomery Memorial Hospital"
    },
    {
      "name": "Theodore Dinh",
      "job": "Technical Architect",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "39.76838, -86.15807",
      "bmi": "18",
      "rating": "0",
      "age": "47",
      "site": "FirstHealth Moore Regional Hospital and Pinehurst Treatment"
    },
    {
      "name": "Adam Espinoza",
      "job": "Test Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00599",
      "bmi": "24",
      "rating": "3",
      "age": "42",
      "site": "FirstHealth Moore Regional Hospital Hoke Campus"
    },
    {
      "name": "Benjamin Delgado",
      "job": "Test Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00647",
      "bmi": "23",
      "rating": "3",
      "age": "35",
      "site": "FirstHealth Richmond Memorial Hospital"
    },
    {
      "name": "Cameron Evans",
      "job": "Test Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24369",
      "bmi": "18",
      "rating": "1",
      "age": "45",
      "site": "Novant Health Forsyth Medical Center"
    },
    {
      "name": "Dominic Parker",
      "job": "Test Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24419",
      "bmi": "21",
      "rating": "1",
      "age": "52",
      "site": "Novant Health Franklin Regional Medical Center"
    },
    {
      "name": "Emilia Rivera",
      "job": "Test Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65027",
      "bmi": "23",
      "rating": "5",
      "age": "57",
      "site": "Frye Regional Medical Center"
    },
    {
      "name": "Gabriel Carter",
      "job": "Test Engineer",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16383",
      "bmi": "15",
      "rating": "3",
      "age": "56",
      "site": "Gaston Memorial Hospital"
    },
    {
      "name": "Mila Hong",
      "job": "Test Engineer",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "37.33939, -121.89507",
      "bmi": "21",
      "rating": "3",
      "age": "46",
      "site": "Grace Hospital"
    },
    {
      "name": "Quinn Xiong",
      "job": "Test Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41956",
      "bmi": "22",
      "rating": "3",
      "age": "43",
      "site": "Granville Health System"
    },
    {
      "name": "Samantha Adams",
      "job": "Test Engineer",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99888",
      "bmi": "24",
      "rating": "1",
      "age": "53",
      "site": "Halifax Regional Medical Center"
    },
    {
      "name": "Alice Xiong",
      "job": "Vice President",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.71427, -74.00611",
      "bmi": "19",
      "rating": "1",
      "age": "47",
      "site": "Harris Regional Hospital"
    },
    {
      "name": "Allison Roberts",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.71557, -71.00614",
      "bmi": "17",
      "rating": "0",
      "age": "62",
      "site": "Haywood Regional Medical Center"
    },
    {
      "name": "Angel Stewart",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "41.71557, -71.00623",
      "bmi": "21",
      "rating": "1",
      "age": "35",
      "site": "Vidant Edgecombe Hospital"
    },
    {
      "name": "Angel Xiong",
      "job": "Vice President",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "41.71557, -71.00624",
      "bmi": "22",
      "rating": "4",
      "age": "27",
      "site": "High Point Regional Health System"
    },
    {
      "name": "Anthony Rogers",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00616",
      "bmi": "25",
      "rating": "2",
      "age": "55",
      "site": "Highlands-Cashiers Hospital"
    },
    {
      "name": "Brooks Marquez",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.71427, -74.00651",
      "bmi": "25",
      "rating": "1",
      "age": "63",
      "site": "Highsmith-Rainey Specialty Hospital"
    },
    {
      "name": "Cameron Young",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24371",
      "bmi": "22",
      "rating": "1",
      "age": "53",
      "site": "Hoots Memorial Hospital"
    },
    {
      "name": "Camila Watson",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24375",
      "bmi": "18",
      "rating": "4",
      "age": "54",
      "site": "Hugh Chatham Memorial Hospital"
    },
    {
      "name": "Christian Sanders",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24390",
      "bmi": "23",
      "rating": "4",
      "age": "43",
      "site": "Iredell Memorial Hospital"
    },
    {
      "name": "Cora Jiang",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24405",
      "bmi": "22",
      "rating": "2",
      "age": "64",
      "site": "J. Arthur Dosher Memorial Hospital"
    },
    {
      "name": "Daniel Huang",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24408",
      "bmi": "20",
      "rating": "1",
      "age": "65",
      "site": "Johnston Health"
    },
    {
      "name": "David Desai",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "34.05223, -118.24414",
      "bmi": "23",
      "rating": "3",
      "age": "42",
      "site": "Novant Health Kernersville Medical Center"
    },
    {
      "name": "Dylan Choi",
      "job": "Vice President",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24421",
      "bmi": "23",
      "rating": "2",
      "age": "35",
      "site": "Kindred Hospital - Greensboro"
    },
    {
      "name": "Elena Tan",
      "job": "Vice President",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "34.05223, -118.24429",
      "bmi": "16",
      "rating": "1",
      "age": "64",
      "site": "Kings Mountain Hospital"
    },
    {
      "name": "Elias Ahmed",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65007",
      "bmi": "19",
      "rating": "0",
      "age": "55",
      "site": "Lake Norman Regional Medical Center"
    },
    {
      "name": "Elijah Kang",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65014",
      "bmi": "22",
      "rating": "2",
      "age": "32",
      "site": "Lenoir Memorial Hospital"
    },
    {
      "name": "Emery Acosta",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65023",
      "bmi": "20",
      "rating": "5",
      "age": "45",
      "site": "Lexington Memorial Hospital"
    },
    {
      "name": "Emery Mitchell",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "41.85003, -87.65026",
      "bmi": "25",
      "rating": "1",
      "age": "35",
      "site": "LifeCare Hospitals of North Carolina"
    },
    {
      "name": "Everly Coleman",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.76328, -95.36336",
      "bmi": "24",
      "rating": "1",
      "age": "38",
      "site": "Margaret R. Pardee Memorial Hospital"
    },
    {
      "name": "Ezekiel Fong",
      "job": "Vice President",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "29.76328, -95.36341",
      "bmi": "20",
      "rating": "4",
      "age": "54",
      "site": "Maria Parham Medical Center"
    },
    {
      "name": "Grayson Brown",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16395",
      "bmi": "15",
      "rating": "4",
      "age": "28",
      "site": "Martin General Hospital"
    },
    {
      "name": "Greyson Lam",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16399",
      "bmi": "23",
      "rating": "0",
      "age": "26",
      "site": "Novant Health Medical Park Hospital"
    },
    {
      "name": "Hadley Parker",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.95233, -75.16403",
      "bmi": "17",
      "rating": "5",
      "age": "45",
      "site": "Memorial Mission Hospital and Asheville Surgery Center"
    },
    {
      "name": "Hailey Lai",
      "job": "Vice President",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "39.95233, -75.16404",
      "bmi": "21",
      "rating": "4",
      "age": "57",
      "site": "Morehead Memorial Hospital"
    },
    {
      "name": "Henry Zhu",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "33.44838, -112.07409",
      "bmi": "25",
      "rating": "0",
      "age": "59",
      "site": "Murphy Medical Center"
    },
    {
      "name": "Isabella Soto",
      "job": "Vice President",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "29.42412, -98.49363",
      "bmi": "19",
      "rating": "1",
      "age": "48",
      "site": "Nash General Hospital"
    },
    {
      "name": "Isabella Xi",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49364",
      "bmi": "25",
      "rating": "5",
      "age": "30",
      "site": "New Hanover Regional Medical Center"
    },
    {
      "name": "Isla Lai",
      "job": "Vice President",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "29.42412, -98.49368",
      "bmi": "18",
      "rating": "2",
      "age": "31",
      "site": "North Carolina Specialty Hospital"
    },
    {
      "name": "Isla Wong",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49369",
      "bmi": "18",
      "rating": "5",
      "age": "50",
      "site": "Northern Hospital of Surry County"
    },
    {
      "name": "Jackson Perry",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49379",
      "bmi": "17",
      "rating": "5",
      "age": "51",
      "site": "Onslow Memorial Hospital"
    },
    {
      "name": "Jameson Chen",
      "job": "Vice President",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "29.42412, -98.49389",
      "bmi": "18",
      "rating": "5",
      "age": "42",
      "site": "Our Community Hospital"
    },
    {
      "name": "Jaxson Mai",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "29.42412, -98.49393",
      "bmi": "18",
      "rating": "1",
      "age": "45",
      "site": "Park Ridge Health"
    },
    {
      "name": "John Moore",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.71571, -117.16478",
      "bmi": "24",
      "rating": "5",
      "age": "64",
      "site": "Pender Memorial Hospital"
    },
    {
      "name": "John Vega",
      "job": "Vice President",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "32.71571, -117.16480",
      "bmi": "24",
      "rating": "4",
      "age": "59",
      "site": "Person Memorial Hospital"
    },
    {
      "name": "Joseph Ly",
      "job": "Vice President",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "32.71571, -117.16491",
      "bmi": "23",
      "rating": "3",
      "age": "41",
      "site": "Novant Health Presbyterian Medical Center"
    },
    {
      "name": "Joshua Fong",
      "job": "Vice President",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "32.71571, -117.16496",
      "bmi": "20",
      "rating": "3",
      "age": "42",
      "site": "Novant Health Huntersville Medical Center"
    },
    {
      "name": "Kennedy Rahman",
      "job": "Vice President",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "32.78306, -96.80673",
      "bmi": "15",
      "rating": "1",
      "age": "54",
      "site": "Novant Health Matthews Medical Center"
    },
    {
      "name": "Kinsley Acosta",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80675",
      "bmi": "23",
      "rating": "4",
      "age": "37",
      "site": "Novant Health Charlotte Orthopaedic Hospital"
    },
    {
      "name": "Kinsley Vega",
      "job": "Vice President",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "32.78306, -96.80676",
      "bmi": "23",
      "rating": "1",
      "age": "58",
      "site": "Vidant Pungo Hospital"
    },
    {
      "name": "Landon Brown",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80677",
      "bmi": "17",
      "rating": "3",
      "age": "47",
      "site": "Randolph Hospital"
    },
    {
      "name": "Landon Luu",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "32.78306, -96.80679",
      "bmi": "25",
      "rating": "0",
      "age": "60",
      "site": "Rex Healthcare"
    },
    {
      "name": "Levi Mendez",
      "job": "Vice President",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "40.6501, -73.94959",
      "bmi": "19",
      "rating": "0",
      "age": "38",
      "site": "Vidant Roanoke-Chowan Hospital"
    },
    {
      "name": "Luna Liu",
      "job": "Vice President",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.6501, -73.94984",
      "bmi": "25",
      "rating": "2",
      "age": "63",
      "site": "Novant Health Rowan Medical Center"
    },
    {
      "name": "Maria Hong",
      "job": "Vice President",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "40.68149, -73.83665",
      "bmi": "19",
      "rating": "0",
      "age": "60",
      "site": "Rutherford Regional Medical Center"
    },
    {
      "name": "Maria Wilson",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83666",
      "bmi": "25",
      "rating": "5",
      "age": "42",
      "site": "Sampson Regional Medical Center"
    },
    {
      "name": "Mason Cho",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "40.68149, -73.83668",
      "bmi": "19",
      "rating": "2",
      "age": "34",
      "site": "Sandhills Regional Medical Center"
    },
    {
      "name": "Mateo Her",
      "job": "Vice President",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "40.68149, -73.83672",
      "bmi": "21",
      "rating": "4",
      "age": "53",
      "site": "Scotland Memorial Hospital and Edwin Morgan Center"
    },
    {
      "name": "Nevaeh Jones",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "30.33218, -81.65565",
      "bmi": "17",
      "rating": "0",
      "age": "39",
      "site": "Select Specialty Hospital - Durham"
    },
    {
      "name": "Paisley Kang",
      "job": "Vice President",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "37.77493, -122.41943",
      "bmi": "19",
      "rating": "4",
      "age": "58",
      "site": "Select Specialty Hospital - Winston-Salem"
    },
    {
      "name": "Penelope Guerrero",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "37.77493, -122.41947",
      "bmi": "23",
      "rating": "1",
      "age": "60",
      "site": "Select Specialty Hospital-Greensboro"
    },
    {
      "name": "Rylee Yu",
      "job": "Vice President",
      "gender": "Female",
      "location": "USA",
      "geo_coordinates": "39.96118, -82.99886",
      "bmi": "23",
      "rating": "5",
      "age": "34",
      "site": "Southeastern Regional Medical Center"
    },
    {
      "name": "Samantha Barnes",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99889",
      "bmi": "22",
      "rating": "2",
      "age": "60",
      "site": "St. Luke's Hospital"
    },
    {
      "name": "Samantha Foster",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "39.96118, -82.99890",
      "bmi": "21",
      "rating": "1",
      "age": "53",
      "site": "Stanly Regional Medical Center"
    },
    {
      "name": "Skylar Bell",
      "job": "Vice President",
      "gender": "Female",
      "location": "United States",
      "geo_coordinates": "32.72541, -97.32095",
      "bmi": "17",
      "rating": "5",
      "age": "58",
      "site": "Stokes-Reynolds Memorial Hospital"
    },
    {
      "name": "Sophie Silva",
      "job": "Vice President",
      "gender": "Female",
      "location": "Brazil",
      "geo_coordinates": "39.76838, -86.15804",
      "bmi": "19",
      "rating": "4",
      "age": "25",
      "site": "Swain County Hospital"
    },
    {
      "name": "Thomas Padilla",
      "job": "Vice President",
      "gender": "Male",
      "location": "Brazil",
      "geo_coordinates": "39.76838, -86.15811",
      "bmi": "25",
      "rating": "0",
      "age": "46",
      "site": "The McDowell Hospital"
    },
    {
      "name": "Wyatt Chin",
      "job": "Vice President",
      "gender": "Male",
      "location": "United States",
      "geo_coordinates": "35.22709, -80.84322",
      "bmi": "24",
      "rating": "0",
      "age": "39",
      "site": "The Outer Banks Hospital"
    },
    {
      "name": "Xavier Park",
      "job": "Vice President",
      "gender": "Male",
      "location": "USA",
      "geo_coordinates": "35.22709, -80.84324",
      "bmi": "22",
      "rating": "1",
      "age": "50",
      "site": "Thomasville Medical Center"
    }
  ];
function funGetNodeData(node){
    console.log(node)
    var oTablePatientList = new sap.m.Table({ growing: true,alternateRowColors:true,
        noDataText:oBundle.getText("No_Data"), growingTriggerText:oBundle.getText("More"),
        sticky:[sap.m.Sticky.ColumnHeaders,sap.m.Sticky.HeaderToolbar,sap.m.Sticky.InfoToolbar],
        growingThreshold: 50, growingScrollToLoad : false,
        columns: [
            new sap.m.Column({width:"100px",header: new sap.m.Label({text: oBundle.getText("Action"),design: sap.m.LabelDesign.Bold})}),
            new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Name"),design: sap.m.LabelDesign.Bold})}),
            new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Gender"),design: sap.m.LabelDesign.Bold})}),
            new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Age"),design: sap.m.LabelDesign.Bold})}),
           
            new sap.m.Column({header: new sap.m.Label({ text: oBundle.getText("Location"), design: sap.m.LabelDesign.Bold})}),
    
            new sap.m.Column({header: new sap.m.Label({ text: oBundle.getText("Location"), design: sap.m.LabelDesign.Bold})}),
            new sap.m.Column({header: new sap.m.Label({ text: oBundle.getText("Match"), design: sap.m.LabelDesign.Bold})}),
            new sap.m.Column({header: new sap.m.Label({ text: oBundle.getText("Record"), design: sap.m.LabelDesign.Bold})}),
            new sap.m.Column({header: new sap.m.Label({ text: oBundle.getText("Site"), design: sap.m.LabelDesign.Bold})}),
        ],
        headerToolbar:[
            new sap.m.Toolbar({
                content: [
                    new sap.m.ToolbarSpacer(),
                    new sap.m.SearchField({
                        placeholder: oBundle.getText("Search"),
                        width: "300px",
                        liveChange: function (event) {
            
                            var oBinding = oTablePatientList.getBinding("items");
                            var searchStr = this.getValue();
                            if (oBinding) {
                            var oFilters = [new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, searchStr),
                            new sap.ui.model.Filter("gender", sap.ui.model.FilterOperator.Contains, searchStr),
                            new sap.ui.model.Filter("age", sap.ui.model.FilterOperator.Contains, searchStr),
                            new sap.ui.model.Filter("location", sap.ui.model.FilterOperator.Contains, searchStr),
                            new sap.ui.model.Filter("drug_name", sap.ui.model.FilterOperator.Contains, searchStr),
                            new sap.ui.model.Filter("rating", sap.ui.model.FilterOperator.Contains, searchStr),
                            new sap.ui.model.Filter("bmi", sap.ui.model.FilterOperator.Contains, searchStr),
                           
                            ];
                                var filterObj = new sap.ui.model.Filter(oFilters, false);
                                oBinding.filter(filterObj);
                            } else {
                                oBinding.filter([]);
                            }
                        }
                    }),
                ]})]
    });
    var oTablePatientListTemplate = new sap.m.ColumnListItem({
        cells: [
                new sap.m.Button({ type: "Emphasized",icon: "sap-icon://action",text: oBundle.getText("Detail"),
                press: function (event) {
                    var model = this.getModel();
                    var path = event.getSource().getBindingContext().getPath();
                    var obj = model.getProperty(path);
                    displayPatientData(obj);
                }
            }),
            new sap.m.Label({wrapping:true,text: "{name}"}),
            new sap.tnt.InfoLabel({
                text: {
                    path: "gender",
                    formatter: function (gender) {
                        if (gender == "Male") {
                            this.setColorScheme(8);
                            return oBundle.getText('Male');
                        }else if (gender == "Female") { 
                            this.setColorScheme(2);
                            return oBundle.getText('Female');
                        }
                    }
                }
            }),
           // new sap.m.Label({wrapping:true,text: "{gender}"}),
            new sap.m.Label({wrapping:true,text: "{age}"}),
            new sap.m.Label({wrapping:true,text: "{location}"}),
            // new sap.m.Label({wrapping:true,text: "{drug_name}"}),
            new sap.m.Button({ 
                icon: "sap-icon://map",
                press: function (event) {
                    var model = this.getModel();
                    var path = event.getSource().getBindingContext().getPath();
                    var obj = model.getProperty(path);
                    console.log(obj)
                    openDialogMapVehicle(obj);
                }
            }),
            new sap.m.RatingIndicator({maxValue:5,value:"{rating}",iconSize:"12px"}),
            new sap.m.ProgressIndicator({
                showValue:true,
                width:"15%",
                percentValue:"100",
                state: {
                    parts: [{ path: "bmi", type: new sap.ui.model.type.String()},],
                   formatter: function (bmi) {
                    if(bmi < 30){
                      return "Error";
                    }else if(bmi <= 31 && bmi > 80 ){
                      return "Warning";  
                    }else{
                      return "Success";
                    }
                   }
               },
                percentValue:"{bmi}",
                displayValue:{
                    parts: [{ path: "bmi", type: new sap.ui.model.type.String()},],
                    formatter: function (bmi) {
                         return  bmi + "%";
                     }
                    }
            }),
            new sap.m.Label({wrapping:true,text: "{site}"}),
        ],
        highlight: {
            path: "rating",
            formatter: function (rating) {
                if (rating <= 2) {
                    return "Error";
                }
                if (rating == 3) {
                    return "Warning";
                }
                if (rating >= 4) {
                    return "Success";
                }
                return "None";
            }
        }
    });

    var oDialog = new sap.m.Dialog({contentWidth:"80%",draggable:true, resizable: true,
    title: oBundle.getText("Subjects List") + "List",
    content: [oTablePatientList],
    buttons: [
        new sap.m.Button({text: oBundle.getText("Close"),icon: "sap-icon://decline",
        press: function () {oDialog.close();}
        })
    ]
    }).open();
    
    var modelValue;
    if(node == '__node0'){
        oDialog.setTitle("Patient List");
        modelValue = patientList; 
        oTablePatientList.removeColumn(8);
    }else if(node == '__node1'){
        modelValue = patientList.slice(250); 
        oDialog.setTitle("Eligible")
        oTablePatientList.removeColumn(8);
    }else if(node == '__node2'){
        modelValue = patientList.slice(250);
        oDialog.setTitle("Screened")
        oTablePatientList.removeColumn(8);
    }else if(node == '__node3'){
        modelValue = patientList.slice(250);
        oDialog.setTitle("Enrolled")
    }else if(node == '__node4'){
        oDialog.setTitle("Ongoing Medical Record")
        var filterValue = patientList.filter(function(object, event){
            return (object.rating == "4" || object.rating == "5");
        })
        console.log(filterValue)
        modelValue = filterValue.slice(0,100);
    }else if(node == '__node5'){
        oDialog.setTitle("Dropped")
        var filterValue = patientList.filter(function(object, event){
            return (object.rating == "4" || object.rating == "5");
        })
        console.log(filterValue)
        modelValue = filterValue.slice(0,50);
    };
    
    var oModel = new sap.ui.model.json.JSONModel();
    oModel.setData({ modelData: modelValue });
    
    oTablePatientList.setModel(oModel);
    oTablePatientList.bindItems({ path: "/modelData", template: oTablePatientListTemplate });
};

function displayPatientData(obj){
    var timelineCopy1 = new sap.suite.ui.commons.Timeline({
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
                    funGetUserParameter(yearValue)
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
                    funGetUserParameter(yearValue)
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
                    funGetUserParameter(yearValue)
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
                    funGetUserParameter(yearValue)
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
                    funGetUserParameter(yearValue)
                },
            }),
        ]
    });

    var oDialog = new sap.m.Dialog({contentWidth:"80%",draggable:true, resizable: true,
    title: obj['name'] + " Medical History",
    content: [timelineCopy1],
    buttons: [
        new sap.m.Button({text: oBundle.getText("Close"),icon: "sap-icon://decline",
        press: function () {oDialog.close();}
        })
    ]
    }).open();
};


//-----------------------------------------------------------Process Flow Nested----------------------------------------------
{
var oProcessFlow1 = new sap.suite.ui.commons.ProcessFlow({
    nodePress:function(event){
        funUserParameterData(oProcessFlow1.getFocusedNode())}, width:"100%",showLabels:true,scrollable: true, wheelZoomable: true });

oProcessFlow1.addLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 0,iconSrc: "sap-icon://clinical-tast-tracker",
    text: "Primary Diagnosis",position: 0
}));

var nodeUP1 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 0,laneId: 0,
    //title: "Date's",
    state: sap.suite.ui.commons.ProcessFlowNodeState.Positive,
    texts: ["Primary Diagnosis"],
    children: [{
        nodeId:1,
    }]
});

oProcessFlow1.insertNode(nodeUP1);

oProcessFlow1.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 1,iconSrc: "sap-icon://clinical-tast-tracker",
    text: "Genetic Findings",position: 1
}));
var nodeUP2 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 1,laneId: 1,
    //title: "Date's",
    state: sap.suite.ui.commons.ProcessFlowNodeState.Positive,
    texts: ["Genetic Findings"],
    children: [{
        nodeId:2,
    }]
});
oProcessFlow1.insertNode(nodeUP2);

oProcessFlow1.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 2,iconSrc: "sap-icon://clinical-tast-tracker",
    text: "Growth Parameters",position: 2
}));
var nodeUP3 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 2,laneId: 2,
    //title: "Date's",
    state: sap.suite.ui.commons.ProcessFlowNodeState.Positive,
    texts: ["Growth Parameters"],
    children: [{
        nodeId:3,
    }]
});
oProcessFlow1.insertNode(nodeUP3);

oProcessFlow1.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 3,iconSrc: "sap-icon://clinical-tast-tracker",
    text: "Clinical Diagnosis",position: 3
}));
var nodeUP4 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 3,laneId: 3,
    //title: "Date's",
    state: sap.suite.ui.commons.ProcessFlowNodeState.Positive,
    texts: ["Clinical Diagnosis"],
    children: [{
        nodeId:4,
    }]
});
oProcessFlow1.insertNode(nodeUP4);

oProcessFlow1.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 4,iconSrc: "sap-icon://clinical-tast-tracker",
    text: "Exam Findings",position: 4
}));
var nodeUP5 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 4,laneId: 4,
    //title: "Date's",
    state: sap.suite.ui.commons.ProcessFlowNodeState.Positive,
    texts: ["Exam Findings"],
    children: [{
        nodeId:5,
    }]
});
oProcessFlow1.insertNode(nodeUP5);

oProcessFlow1.insertLane(new sap.suite.ui.commons.ProcessFlowLaneHeader({laneId: 5,iconSrc: "sap-icon://clinical-tast-tracker",
    text: "Medication",position: 5
}));
var nodeUP6 =  new sap.suite.ui.commons.ProcessFlowNode({nodeId: 5,laneId: 5,
    //title: "Date's",
    state: sap.suite.ui.commons.ProcessFlowNodeState.Positive,
    texts: ["Medication"],
    // children: [{
    //     nodeId:6,
    // }]
});
oProcessFlow1.insertNode(nodeUP6);
}
//-----------------------------------------------------------Process Flow Nested----------------------------------------------

function funGetUserParameter(year){
 
    dialog1 = new sap.m.Dialog({
        draggable:true,
        title: year,
        resizable:true,
        contentWidth:"80%",
        content:[oProcessFlow1],
        buttons: [
            new sap.m.Button({ text: oBundle.getText("Close"), icon: "sap-icon://decline",
                press: function (oEvent) {dialog1.close();}
            })
        ],
    }).open();

};

function funUserParameterData(node){
    console.log(node)
    var table1;
    var table1Template;
    var modelValue;
    if(node == '__node6'){
        // oDialog.setTitle("Primary Diagnosis");
        table1 = new sap.m.Table({ growing: true,alternateRowColors:true,
            noDataText:oBundle.getText("No_Data"), growingTriggerText:oBundle.getText("More"),
            sticky:[sap.m.Sticky.ColumnHeaders,sap.m.Sticky.HeaderToolbar,sap.m.Sticky.InfoToolbar],
            growingThreshold: 50, growingScrollToLoad : false,
            columns: [
                new sap.m.Column({width:"100px",header: new sap.m.Label({text: oBundle.getText("Action"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Patient_UUID"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Primary_Diagnosis"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Date"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Age_Days"),design: sap.m.LabelDesign.Bold})}),
            ],
            headerToolbar:[
                new sap.m.Toolbar({
                    content: [
                        new sap.m.ToolbarSpacer(),
                        new sap.m.SearchField({
                            placeholder: oBundle.getText("Search"),
                            width: "300px",
                            liveChange: function (event) {
                
                                var oBinding = table1.getBinding("items");
                                var searchStr = this.getValue();
                                if (oBinding) {
                                var oFilters = [
                                new sap.ui.model.Filter("patient_uuid", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("primary_diagnosis", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("primary_diagnosis_date", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("age_days", sap.ui.model.FilterOperator.Contains, searchStr),
                               
                                ];
                                    var filterObj = new sap.ui.model.Filter(oFilters, false);
                                    oBinding.filter(filterObj);
                                } else {
                                    oBinding.filter([]);
                                }
                            }
                        }),
                    ]})]
        });
        table1Template = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Button({ type: "Emphasized",icon: "sap-icon://action",text: oBundle.getText("Detail"),
                    press: function (event) {
                        var model = this.getModel();
                        var path = event.getSource().getBindingContext().getPath();
                        var obj = model.getProperty(path);
                        displayPatientData(obj);
                    }
                }),
                new sap.m.Label({wrapping:true,text: "{patient_uuid}"}),
                new sap.m.Label({wrapping:true,text: "{primary_diagnosis}"}),
                new sap.m.Label({wrapping:true,text: "{primary_diagnosis_date}"}),
                new sap.m.Label({wrapping:true,text: "{age_days}"}),
            ]
        });
        modelValue =[
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "primary_diagnosis": "STXBP1 Encephalopathy with Epilepsy",
              "primary_diagnosis_date": "2020-09",
              "age_days": 456
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "primary_diagnosis": "STXBP1 Encephalopathy with Epilepsy",
              "primary_diagnosis_date": "2016-08",
              "age_days": 103
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "primary_diagnosis": "STXBP1 Encephalopathy with Epilepsy",
              "primary_diagnosis_date": "2018-08",
              "age_days": 90
            }
          ];
    }else if(node == '__node7'){
        // oDialog.setTitle("Genetic Findings")
        table1 = new sap.m.Table({ growing: true,alternateRowColors:true,
            noDataText:oBundle.getText("No_Data"), growingTriggerText:oBundle.getText("More"),
            sticky:[sap.m.Sticky.ColumnHeaders,sap.m.Sticky.HeaderToolbar,sap.m.Sticky.InfoToolbar],
            growingThreshold: 50, growingScrollToLoad : false,
            columns: [
                new sap.m.Column({width:"100px",header: new sap.m.Label({text: oBundle.getText("Action"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Patient_UUID"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Test_Company"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Test_name"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Gene"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Variant_DNA"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Variant_Protein"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Interpretation"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Test_Date"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Age_Days"),design: sap.m.LabelDesign.Bold})}),
            ],
            headerToolbar:[
                new sap.m.Toolbar({
                    content: [
                        new sap.m.ToolbarSpacer(),
                        new sap.m.SearchField({
                            placeholder: oBundle.getText("Search"),
                            width: "300px",
                            liveChange: function (event) {
                
                                var oBinding = table1.getBinding("items");
                                var searchStr = this.getValue();
                                if (oBinding) {
                                var oFilters = [
                                new sap.ui.model.Filter("patient_uuid", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("test_company", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("test_name", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("gene", sap.ui.model.FilterOperator.Contains, searchStr),
                                // new sap.ui.model.Filter("variant_dna", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("variant_protein", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("interpretation", sap.ui.model.FilterOperator.Contains, searchStr),
                                // new sap.ui.model.Filter("inheritance", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("test_date", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("age_days", sap.ui.model.FilterOperator.Contains, searchStr),
                               
                                ];
                                    var filterObj = new sap.ui.model.Filter(oFilters, false);
                                    oBinding.filter(filterObj);
                                } else {
                                    oBinding.filter([]);
                                }
                            }
                        }),
                    ]})]
        });
        table1Template = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Button({ type: "Emphasized",icon: "sap-icon://action",text: oBundle.getText("Detail"),
                    press: function (event) {
                        var model = this.getModel();
                        var path = event.getSource().getBindingContext().getPath();
                        var obj = model.getProperty(path);
                        displayPatientData(obj);
                    }
                }),
                new sap.m.Label({wrapping:true,text: "{patient_uuid}"}),
                new sap.m.Label({wrapping:true,text: "{test_company}"}),
                new sap.m.Label({wrapping:true,text: "{test_name}"}),
                new sap.m.Label({wrapping:true,text: "{gene}"}),
                new sap.m.Label({wrapping:true,text: "{variant_dna}"}),
                new sap.m.Label({wrapping:true,text: "{variant_protein}"}),
                new sap.m.Label({wrapping:true,text: "{interpretation}"}),
                // new sap.m.Label({wrapping:true,text: "{inheritance}"}),
                new sap.m.Label({wrapping:true,text: "{test_date}"}),
                new sap.m.Label({wrapping:true,text: "{age_days}"}),
            ]
        });
        modelValue = [
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "test_date": "2020-08",
              "age_days": 447,
              "test_company": "Invitae",
              "test_name": "Invitae Epilepsy Panel",
              "gene": "SPATA5",
              "transcript_ID": "NM_145207.2",
              "variant_dna": "c.2242C>T",
              "variant_protein": "p.Arg748Cys",
              "interpretation": "Variant of uncertain significance"
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "test_date": "2020-08",
              "age_days": 447,
              "test_company": "Invitae",
              "test_name": "Invitae Epilepsy Panel",
              "gene": "STXBP1",
              "transcript_ID": "NM_003165.3",
              "variant_dna": "c.364C>T",
              "variant_protein": "p.Arg122Ter",
              "interpretation": "Pathogenic"
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "test_date": "2016-08",
              "age_days": 78,
              "test_company": "GeneDx",
              "test_name": "ACADM Gene Sequencing",
              "gene": "ACADM",
              "variant_dna": "c.157C>T",
              "variant_protein": "p.Arg53Cys",
              "interpretation": "Pathogenic"
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "test_date": "2016-08",
              "age_days": 78,
              "test_company": "GeneDx",
              "test_name": "Comprehensive Epilepsy Panel",
              "gene": "STXBP1",
              "transcript_ID": "NM_003165.3",
              "variant_dna": "c.703C>T",
              "variant_protein": "p.Arg235Ter",
              "interpretation": "Pathogenic"
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "test_date": "2016-08",
              "age_days": 78,
              "test_company": "Nicklaus Children's Hospital",
              "test_name": "Chromosomal Microarray Analysis",
              "gene": "Chromosome pair 19",
              "variant_dna": "Chr19:1,075,192-1,902,389x3",
              "interpretation": "Likely pathogenic"
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "test_date": "2018-07",
              "age_days": 62,
              "test_company": "Children's Hospital of Philadelphia",
              "test_name": "CHOP Epilepsy Panel",
              "gene": "STXBP1",
              "transcript_ID": "NM_003165.3",
              "variant_dna": "c.663+1G>C",
              "interpretation": "Pathogenic"
            }
          ];
        
    }else if(node == '__node8'){
        
        table1 = new sap.m.Table({ growing: true,alternateRowColors:true,
            noDataText:oBundle.getText("No_Data"), growingTriggerText:oBundle.getText("More"),
            sticky:[sap.m.Sticky.ColumnHeaders,sap.m.Sticky.HeaderToolbar,sap.m.Sticky.InfoToolbar],
            growingThreshold: 50, growingScrollToLoad : false,
            columns: [
                new sap.m.Column({width:"100px",header: new sap.m.Label({text: oBundle.getText("Action"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Patient_UUID"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Growth_Parameter"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Growth_Value"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Date"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Age_Days"),design: sap.m.LabelDesign.Bold})}),
            ],
            headerToolbar:[
                new sap.m.Toolbar({
                    content: [
                        new sap.m.ToolbarSpacer(),
                        new sap.m.SearchField({
                            placeholder: oBundle.getText("Search"),
                            width: "300px",
                            liveChange: function (event) {
                
                                var oBinding = table1.getBinding("items");
                                var searchStr = this.getValue();
                                if (oBinding) {
                                var oFilters = [
                                new sap.ui.model.Filter("patient_uuid", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("growth_parameter", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("growth_value", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("date", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("age_days", sap.ui.model.FilterOperator.Contains, searchStr),
                               
                                ];
                                    var filterObj = new sap.ui.model.Filter(oFilters, false);
                                    oBinding.filter(filterObj);
                                } else {
                                    oBinding.filter([]);
                                }
                            }
                        }),
                    ]})]
        });
        table1Template = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Button({ type: "Emphasized",icon: "sap-icon://action",text: oBundle.getText("Detail"),
                    press: function (event) {
                        var model = this.getModel();
                        var path = event.getSource().getBindingContext().getPath();
                        var obj = model.getProperty(path);
                        displayPatientData(obj);
                    }
                }),
                new sap.m.Label({wrapping:true,text: "{patient_uuid}"}),
                new sap.m.Label({wrapping:true,text: "{growth_parameter}"}),
                new sap.m.HBox({
                    items:[new sap.m.Label({ wrapping: true, text: "{growth_value}" }),
                            new sap.m.Label({ wrapping: true, text: "{growth_unit}" }).addStyleClass("sapUiTinyMarginTop"),
                    ]}).addStyleClass("sapUiTinyMargin"),
                // new sap.m.Label({wrapping:true,text: "{growth_value}"}),
                new sap.m.Label({wrapping:true,text: "{date}"}),
                new sap.m.Label({wrapping:true,text: "{age_days}"})
            ]
        });
        modelValue = [
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body weight",
              "growth_value": 3.8,
              "growth_unit": "kg",
              "date": "2019-06",
              "age_days": 8
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 8
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Head circumference",
              "growth_value": 33,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 9
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 9
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Head circumference",
              "growth_value": 33,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 11
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body weight",
              "growth_value": 3.845,
              "growth_unit": "kg",
              "date": "2019-06",
              "age_days": 12
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 12
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body weight",
              "growth_value": 3.875,
              "growth_unit": "kg",
              "date": "2019-06",
              "age_days": 14
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 14
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body weight",
              "growth_value": 3.895,
              "growth_unit": "kg",
              "date": "2019-06",
              "age_days": 15
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 15
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body weight",
              "growth_value": 4.025,
              "growth_unit": "kg",
              "date": "2019-06",
              "age_days": 16
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 16
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 18
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 20
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 21
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 23
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body weight",
              "growth_value": 4.625,
              "growth_unit": "kg",
              "date": "2019-06",
              "age_days": 24
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 24
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body weight",
              "growth_value": 4.625,
              "growth_unit": "kg",
              "date": "2019-06",
              "age_days": 26
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 26
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 52,
              "growth_unit": "cm",
              "date": "2019-07",
              "age_days": 27
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body weight",
              "growth_value": 13.4,
              "growth_unit": "kg",
              "date": "2020-08",
              "age_days": 444
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 82,
              "growth_unit": "cm",
              "date": "2020-08",
              "age_days": 444
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body weight",
              "growth_value": 14.37,
              "growth_unit": "kg",
              "date": "2020-09",
              "age_days": 463
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Head circumference",
              "growth_value": 48,
              "growth_unit": "cm",
              "date": "2020-09",
              "age_days": 463
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "growth_parameter": "Body height",
              "growth_value": 84,
              "growth_unit": "cm",
              "date": "2020-09",
              "age_days": 463
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 48.5,
              "growth_unit": "cm",
              "date": "2016-05",
              "age_days": 3
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 2.512,
              "growth_unit": "kg",
              "date": "2016-05",
              "age_days": 3
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 53,
              "growth_unit": "cm",
              "date": "2016-07",
              "age_days": 53
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 4.1,
              "growth_unit": "kg",
              "date": "2016-07",
              "age_days": 53
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 57,
              "growth_unit": "cm",
              "date": "2016-08",
              "age_days": 75
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 4.85,
              "growth_unit": "kg",
              "date": "2016-08",
              "age_days": 75
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 4.405,
              "growth_unit": "kg",
              "date": "2016-08",
              "age_days": 76
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 56,
              "growth_unit": "cm",
              "date": "2016-08",
              "age_days": 76
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 4.4,
              "growth_unit": "kg",
              "date": "2016-08",
              "age_days": 78
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Head circumference",
              "growth_value": 38.5,
              "growth_unit": "cm",
              "date": "2016-08",
              "age_days": 78
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 4.4,
              "growth_unit": "kg",
              "date": "2016-08",
              "age_days": 79
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Head circumference",
              "growth_value": 38.5,
              "growth_unit": "kg",
              "date": "2016-08",
              "age_days": 79
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 52.2,
              "growth_unit": "cm",
              "date": "2016-08",
              "age_days": 90
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 4.64,
              "growth_unit": "kg",
              "date": "2016-08",
              "age_days": 90
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 4.74,
              "growth_unit": "kg",
              "date": "2016-08",
              "age_days": 94
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 60.5,
              "growth_unit": "cm",
              "date": "2016-10",
              "age_days": 140
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 72,
              "growth_unit": "cm",
              "date": "2017-04",
              "age_days": 322
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Head circumference",
              "growth_value": 45,
              "growth_unit": "cm",
              "date": "2017-04",
              "age_days": 322
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 10.5,
              "growth_unit": "kg",
              "date": "2017-04",
              "age_days": 322
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 11.78,
              "growth_unit": "kg",
              "date": "2017-10",
              "age_days": 504
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Head circumference",
              "growth_value": 46,
              "growth_unit": "cm",
              "date": "2017-10",
              "age_days": 504
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 83,
              "growth_unit": "cm",
              "date": "2017-10",
              "age_days": 519
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Head circumference",
              "growth_value": 46.5,
              "growth_unit": "cm",
              "date": "2018-04",
              "age_days": 706
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 11.8,
              "growth_unit": "kg",
              "date": "2018-04",
              "age_days": 706
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 83.5,
              "growth_unit": "cm",
              "date": "2018-04",
              "age_days": 706
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 12.7,
              "growth_unit": "kg",
              "date": "2018-10",
              "age_days": 889
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 88,
              "growth_unit": "cm",
              "date": "2018-10",
              "age_days": 889
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Head circumference",
              "growth_value": 47.5,
              "growth_unit": "cm",
              "date": "2018-10",
              "age_days": 889
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 91,
              "growth_unit": "cm",
              "date": "2019-04",
              "age_days": 1057
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Head circumference",
              "growth_value": 48.5,
              "growth_unit": "cm",
              "date": "2019-04",
              "age_days": 1057
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 13.75,
              "growth_unit": "kg",
              "date": "2019-04",
              "age_days": 1057
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 91,
              "growth_unit": "cm",
              "date": "2019-08",
              "age_days": 1193
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 13.6,
              "growth_unit": "kg",
              "date": "2019-08",
              "age_days": 1193
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Head circumference",
              "growth_value": 48.5,
              "growth_unit": "cm",
              "date": "2019-10",
              "age_days": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 13.35,
              "growth_unit": "kg",
              "date": "2019-10",
              "age_days": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 92.5,
              "growth_unit": "cm",
              "date": "2019-10",
              "age_days": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 13.35,
              "growth_unit": "kg",
              "date": "2020-07",
              "age_days": 1512
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Head circumference",
              "growth_value": 48.5,
              "growth_unit": "cm",
              "date": "2020-07",
              "age_days": 1512
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 92.5,
              "growth_unit": "cm",
              "date": "2020-07",
              "age_days": 1512
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body height",
              "growth_value": 101.5,
              "growth_unit": "cm",
              "date": "2021-04",
              "age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Body weight",
              "growth_value": 15.5,
              "growth_unit": "kg",
              "date": "2021-04",
              "age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "growth_parameter": "Head circumference",
              "growth_value": 49.5,
              "growth_unit": "cm",
              "date": "2021-04",
              "age_days": 1799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 4.2,
              "growth_unit": "kg",
              "date": "2018-05",
              "age_days": 0
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 5.15,
              "growth_unit": "kg",
              "date": "2018-06",
              "age_days": 58
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 5.42,
              "growth_unit": "kg",
              "date": "2018-07",
              "age_days": 69
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 41.5,
              "growth_unit": "cm",
              "date": "2018-07",
              "age_days": 69
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 56.5,
              "growth_unit": "cm",
              "date": "2018-07",
              "age_days": 69
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 5.665,
              "growth_unit": "kg",
              "date": "2018-07",
              "age_days": 76
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 57.7,
              "growth_unit": "cm",
              "date": "2018-07",
              "age_days": 76
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 41.9,
              "growth_unit": "cm",
              "date": "2018-07",
              "age_days": 76
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 6.5,
              "growth_unit": "kg",
              "date": "2018-08",
              "age_days": 96
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 57.8,
              "growth_unit": "cm",
              "date": "2018-08",
              "age_days": 96
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 41.5,
              "growth_unit": "cm",
              "date": "2018-08",
              "age_days": 96
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 6.295,
              "growth_unit": "kg",
              "date": "2018-08",
              "age_days": 102
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 57.7,
              "growth_unit": "cm",
              "date": "2018-08",
              "age_days": 102
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 41.8,
              "growth_unit": "cm",
              "date": "2018-08",
              "age_days": 102
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 6.49,
              "growth_unit": "kg",
              "date": "2018-08",
              "age_days": 104
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 42.5,
              "growth_unit": "cm",
              "date": "2018-08",
              "age_days": 104
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 0.585,
              "growth_unit": "m",
              "date": "2018-08",
              "age_days": 104
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 7.455,
              "growth_unit": "kg",
              "date": "2018-09",
              "age_days": 132
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 63.5,
              "growth_unit": "cm",
              "date": "2018-09",
              "age_days": 132
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 45,
              "growth_unit": "cm",
              "date": "2018-09",
              "age_days": 132
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 64,
              "growth_unit": "cm",
              "date": "2018-09",
              "age_days": 146
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 7.755,
              "growth_unit": "kg",
              "date": "2018-09",
              "age_days": 146
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 63.3,
              "growth_unit": "cm",
              "date": "2018-10",
              "age_days": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 44.6,
              "growth_unit": "cm",
              "date": "2018-10",
              "age_days": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 7.895,
              "growth_unit": "kg",
              "date": "2018-10",
              "age_days": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 8.295,
              "growth_unit": "kg",
              "date": "2018-11",
              "age_days": 190
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 65,
              "growth_unit": "cm",
              "date": "2018-11",
              "age_days": 190
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 8.56,
              "growth_unit": "kg",
              "date": "2018-11",
              "age_days": 196
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 0.68,
              "growth_unit": "m",
              "date": "2018-11",
              "age_days": 210
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 45.5,
              "growth_unit": "cm",
              "date": "2018-11",
              "age_days": 210
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 9.205,
              "growth_unit": "kg",
              "date": "2018-11",
              "age_days": 210
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 9.87,
              "growth_unit": "kg",
              "date": "2018-12",
              "age_days": 224
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 46.2,
              "growth_unit": "cm",
              "date": "2018-12",
              "age_days": 224
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 0.665,
              "growth_unit": "m",
              "date": "2018-12",
              "age_days": 224
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 70,
              "growth_unit": "cm",
              "date": "2019-01",
              "age_days": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 9.85,
              "growth_unit": "kg",
              "date": "2019-01",
              "age_days": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 46,
              "growth_unit": "cm",
              "date": "2019-01",
              "age_days": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 70.5,
              "growth_unit": "cm",
              "date": "2019-01",
              "age_days": 267
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 10.1,
              "growth_unit": "kg",
              "date": "2019-01",
              "age_days": 267
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 46.7,
              "growth_unit": "cm",
              "date": "2019-01",
              "age_days": 267
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 0.742,
              "growth_unit": "m",
              "date": "2019-04",
              "age_days": 361
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 46.7,
              "growth_unit": "cm",
              "date": "2019-04",
              "age_days": 361
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 77.5,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 410
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 46.5,
              "growth_unit": "cm",
              "date": "2019-06",
              "age_days": 410
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 10.4,
              "growth_unit": "kg",
              "date": "2019-06",
              "age_days": 410
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 11.4,
              "growth_unit": "kg",
              "date": "2019-09",
              "age_days": 508
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 0.76,
              "growth_unit": "m",
              "date": "2019-09",
              "age_days": 508
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 47.5,
              "growth_unit": "cm",
              "date": "2019-09",
              "age_days": 508
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 12.6,
              "growth_unit": "kg",
              "date": "2019-12",
              "age_days": 592
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 0.8,
              "growth_unit": "m",
              "date": "2019-12",
              "age_days": 592
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 47.3,
              "growth_unit": "cm",
              "date": "2019-12",
              "age_days": 592
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 15,
              "growth_unit": "kg",
              "date": "2020-07",
              "age_days": 809
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 0.881,
              "growth_unit": "m",
              "date": "2020-07",
              "age_days": 809
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 90,
              "growth_unit": "cm",
              "date": "2020-11",
              "age_days": 932
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 14.8,
              "growth_unit": "kg",
              "date": "2020-11",
              "age_days": 932
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 49.5,
              "growth_unit": "cm",
              "date": "2020-11",
              "age_days": 932
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Head circumference",
              "growth_value": 49.6,
              "growth_unit": "cm",
              "date": "2021-03",
              "age_days": 1047
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body weight",
              "growth_value": 15.8,
              "growth_unit": "kg",
              "date": "2021-03",
              "age_days": 1047
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "growth_parameter": "Body height",
              "growth_value": 91.4,
              "growth_unit": "cm",
              "date": "2021-03",
              "age_days": 1047
            }
          ];
        // oDialog.setTitle("Growth Parameters")
    }else if(node == '__node9'){
        table1 = new sap.m.Table({ growing: true,alternateRowColors:true,
            noDataText:oBundle.getText("No_Data"), growingTriggerText:oBundle.getText("More"),
            sticky:[sap.m.Sticky.ColumnHeaders,sap.m.Sticky.HeaderToolbar,sap.m.Sticky.InfoToolbar],
            growingThreshold: 50, growingScrollToLoad : false,
            columns: [
                new sap.m.Column({width:"100px",header: new sap.m.Label({text: oBundle.getText("Action"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Patient_UUID"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Clinical_diagnosis"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("First_Date"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Last_Date"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("First_Age_Days"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Last_Age_Days"),design: sap.m.LabelDesign.Bold})}),
            ],
            headerToolbar:[
                new sap.m.Toolbar({
                    content: [
                        new sap.m.ToolbarSpacer(),
                        new sap.m.SearchField({
                            placeholder: oBundle.getText("Search"),
                            width: "300px",
                            liveChange: function (event) {
                
                                var oBinding = table1.getBinding("items");
                                var searchStr = this.getValue();
                                if (oBinding) {
                                var oFilters = [
                                new sap.ui.model.Filter("patient_uuid", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("clinical_diagnosis", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("first_date", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("last_date", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("first_age_days", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("last_age_days", sap.ui.model.FilterOperator.Contains, searchStr),
                               
                                ];
                                    var filterObj = new sap.ui.model.Filter(oFilters, false);
                                    oBinding.filter(filterObj);
                                } else {
                                    oBinding.filter([]);
                                }
                            }
                        }),
                    ]})]
        });
        table1Template = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Button({ type: "Emphasized",icon: "sap-icon://action",text: oBundle.getText("Detail"),
                    press: function (event) {
                        var model = this.getModel();
                        var path = event.getSource().getBindingContext().getPath();
                        var obj = model.getProperty(path);
                        displayPatientData(obj);
                    }
                }),
                new sap.m.Label({wrapping:true,text: "{patient_uuid}"}),
                new sap.m.Label({wrapping:true,text: "{clinical_diagnosis}"}),
                new sap.m.Label({wrapping:true,text: "{first_date}"}),
                new sap.m.Label({wrapping:true,text: "{last_date}"}),
                new sap.m.Label({wrapping:true,text: "{first_age_days}"}),
                new sap.m.Label({wrapping:true,text: "{last_age_days}"})
            ]
        });
        modelValue = [
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Neonatal seizures",
              "first_date": "2019-06",
              "last_date": "2019-06",
              "first_age_days": 8,
              "last_age_days": 26
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Altered mental status",
              "first_date": "2019-06",
              "last_date": "2019-06",
              "first_age_days": 9,
              "last_age_days": 9
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Meningoencephalitis",
              "first_date": "2019-06",
              "last_date": "2019-06",
              "first_age_days": 9,
              "last_age_days": 9
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Encephalitis",
              "first_date": "2019-06",
              "last_date": "2020-08",
              "first_age_days": 25,
              "last_age_days": 446
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Epilepsy",
              "first_date": "2020-08",
              "last_date": "2021-02",
              "first_age_days": 444,
              "last_age_days": 624
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Muscle weakness",
              "first_date": "2020-09",
              "last_date": "2020-09",
              "first_age_days": 463,
              "last_age_days": 463
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Decreased muscle tone",
              "first_date": "2020-09",
              "last_date": "2020-09",
              "first_age_days": 463,
              "last_age_days": 463
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Abnormal gait",
              "first_date": "2020-09",
              "last_date": "2020-09",
              "first_age_days": 463,
              "last_age_days": 463
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Feeding difficulty",
              "first_date": "2020-09",
              "last_date": "2021-02",
              "first_age_days": 463,
              "last_age_days": 624
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Global developmental delay",
              "first_date": "2020-09",
              "last_date": "2021-02",
              "first_age_days": 463,
              "last_age_days": 624
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Dysmorphic features",
              "first_date": "2020-09",
              "last_date": "2021-02",
              "first_age_days": 463,
              "last_age_days": 624
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Speech delay",
              "first_date": "2020-09",
              "last_date": "2020-09",
              "first_age_days": 463,
              "last_age_days": 463
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Obese",
              "first_date": "2021-02",
              "last_date": "2021-02",
              "first_age_days": 624,
              "last_age_days": 624
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Abnormal weight gain",
              "first_date": "2021-02",
              "last_date": "2021-02",
              "first_age_days": 624,
              "last_age_days": 624
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "clinical_diagnosis": "Tall stature",
              "first_date": "2021-02",
              "last_date": "2021-02",
              "first_age_days": 624,
              "last_age_days": 624
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Epilepsy",
              "first_date": "2016-08",
              "last_date": "2016-10",
              "first_age_days": 75,
              "last_age_days": 162
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Hypotonia",
              "first_date": "2016-08",
              "last_date": "2021-04",
              "first_age_days": 77,
              "last_age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Poor visual tracking",
              "first_date": "2016-08",
              "last_date": "2017-10",
              "first_age_days": 78,
              "last_age_days": 504
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Global developmental delay",
              "first_date": "2016-08",
              "last_date": "2021-04",
              "first_age_days": 91,
              "last_age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Infantile spasms",
              "first_date": "2016-08",
              "last_date": "2016-08",
              "first_age_days": 91,
              "last_age_days": 92
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Strabismus",
              "first_date": "2017-04",
              "last_date": "2017-10",
              "first_age_days": 322,
              "last_age_days": 504
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Heart murmur",
              "first_date": "2017-10",
              "last_date": "2017-10",
              "first_age_days": 519,
              "last_age_days": 519
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Hypertelorism",
              "first_date": "2018-04",
              "last_date": "2019-10",
              "first_age_days": 706,
              "last_age_days": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Sialorrhea",
              "first_date": "2018-04",
              "last_date": "2021-04",
              "first_age_days": 706,
              "last_age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Automatism",
              "first_date": "2018-09",
              "last_date": "2019-04",
              "first_age_days": 859,
              "last_age_days": 1057
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Stereotypy",
              "first_date": "2019-04",
              "last_date": "2021-04",
              "first_age_days": 1057,
              "last_age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Sleep terror disorder",
              "first_date": "2019-04",
              "last_date": "2019-10",
              "first_age_days": 1057,
              "last_age_days": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Problem behavior",
              "first_date": "2019-04",
              "last_date": "2019-04",
              "first_age_days": 1057,
              "last_age_days": 1057
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Tremor",
              "first_date": "2019-10",
              "last_date": "2021-04",
              "first_age_days": 1239,
              "last_age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Sleep disorder",
              "first_date": "2019-10",
              "last_date": "2021-04",
              "first_age_days": 1239,
              "last_age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Muscle weakness",
              "first_date": "2020-05",
              "last_date": "2020-05",
              "first_age_days": 1474,
              "last_age_days": 1474
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Joint hypermobility",
              "first_date": "2020-05",
              "last_date": "2020-05",
              "first_age_days": 1474,
              "last_age_days": 1474
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "clinical_diagnosis": "Autism spectrum disorder",
              "first_date": "2021-04",
              "last_date": "2021-04",
              "first_age_days": 1799,
              "last_age_days": 1799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Epilepsy",
              "first_date": "2018-05",
              "last_date": "2020-08",
              "first_age_days": 3,
              "last_age_days": 839
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Hypotonia",
              "first_date": "2018-07",
              "last_date": "2020-11",
              "first_age_days": 69,
              "last_age_days": 932
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Poor visual tracking",
              "first_date": "2018-07",
              "last_date": "2018-12",
              "first_age_days": 69,
              "last_age_days": 224
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Developmental regression",
              "first_date": "2018-07",
              "last_date": "2018-07",
              "first_age_days": 76,
              "last_age_days": 76
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Infantile spasms",
              "first_date": "2018-07",
              "last_date": "2019-01",
              "first_age_days": 77,
              "last_age_days": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Atelectasis",
              "first_date": "2018-07",
              "last_date": "2018-07",
              "first_age_days": 77,
              "last_age_days": 77
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Gross motor developmental delay",
              "first_date": "2018-07",
              "last_date": "2018-07",
              "first_age_days": 78,
              "last_age_days": 78
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Nystagmus",
              "first_date": "2018-08",
              "last_date": "2018-08",
              "first_age_days": 102,
              "last_age_days": 102
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Coordination problem",
              "first_date": "2018-08",
              "last_date": "2018-08",
              "first_age_days": 102,
              "last_age_days": 102
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Hyperirritability",
              "first_date": "2018-08",
              "last_date": "2018-10",
              "first_age_days": 104,
              "last_age_days": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Constipation",
              "first_date": "2018-10",
              "last_date": "2020-04",
              "first_age_days": 176,
              "last_age_days": 718
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Disturbance in sleep behavior",
              "first_date": "2018-10",
              "last_date": "2018-10",
              "first_age_days": 176,
              "last_age_days": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Vomiting",
              "first_date": "2018-10",
              "last_date": "2018-10",
              "first_age_days": 176,
              "last_age_days": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Delayed visual maturation",
              "first_date": "2018-11",
              "last_date": "2018-11",
              "first_age_days": 197,
              "last_age_days": 197
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Gastroesophageal reflux disease (GERD)",
              "first_date": "2018-11",
              "last_date": "2019-04",
              "first_age_days": 210,
              "last_age_days": 361
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Fatigue",
              "first_date": "2018-11",
              "last_date": "2018-11",
              "first_age_days": 210,
              "last_age_days": 210
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Global developmental delay",
              "first_date": "2019-01",
              "last_date": "2020-07",
              "first_age_days": 246,
              "last_age_days": 799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Hyperopic astigmatism",
              "first_date": "2019-03",
              "last_date": "2019-03",
              "first_age_days": 308,
              "last_age_days": 308
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Mild conductive hearing loss, bilateral",
              "first_date": "2019-04",
              "last_date": "2019-04",
              "first_age_days": 358,
              "last_age_days": 358
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Sleep terror disorder",
              "first_date": "2020-04",
              "last_date": "2020-07",
              "first_age_days": 718,
              "last_age_days": 799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Severe receptive language delay",
              "first_date": "2020-07",
              "last_date": "2020-07",
              "first_age_days": 803,
              "last_age_days": 803
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "clinical_diagnosis": "Severe expressive language delay",
              "first_date": "2020-07",
              "last_date": "2020-07",
              "first_age_days": 803,
              "last_age_days": 803
            }
          ];
        // oDialog.setTitle("Clinical Diagnosis")
    }else if(node == '__node10'){
        table1 = new sap.m.Table({ growing: true,alternateRowColors:true,
            noDataText:oBundle.getText("No_Data"), growingTriggerText:oBundle.getText("More"),
            sticky:[sap.m.Sticky.ColumnHeaders,sap.m.Sticky.HeaderToolbar,sap.m.Sticky.InfoToolbar],
            growingThreshold: 50, growingScrollToLoad : false,
            columns: [
                new sap.m.Column({width:"100px",header: new sap.m.Label({text: oBundle.getText("Action"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Patient_UUID"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Exam_Type"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Exam_Section"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Exam_finding"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Date"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Age_Days"),design: sap.m.LabelDesign.Bold})}),
            ],
            headerToolbar:[
                new sap.m.Toolbar({
                    content: [
                        new sap.m.ToolbarSpacer(),
                        new sap.m.SearchField({
                            placeholder: oBundle.getText("Search"),
                            width: "300px",
                            liveChange: function (event) {
                
                                var oBinding = table1.getBinding("items");
                                var searchStr = this.getValue();
                                if (oBinding) {
                                var oFilters = [
                                new sap.ui.model.Filter("patient_uuid", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("exam_type", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("exam_section", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("exam_finding", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("date", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("age_days", sap.ui.model.FilterOperator.Contains, searchStr),
                               
                                ];
                                    var filterObj = new sap.ui.model.Filter(oFilters, false);
                                    oBinding.filter(filterObj);
                                } else {
                                    oBinding.filter([]);
                                }
                            }
                        }),
                    ]})]
        });
        table1Template = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Button({ type: "Emphasized",icon: "sap-icon://action",text: oBundle.getText("Detail"),
                    press: function (event) {
                        var model = this.getModel();
                        var path = event.getSource().getBindingContext().getPath();
                        var obj = model.getProperty(path);
                        displayPatientData(obj);
                    }
                }),
                new sap.m.Label({wrapping:true,text: "{patient_uuid}"}),
                new sap.m.Label({wrapping:true,text: "{exam_type}"}),
                new sap.m.Label({wrapping:true,text: "{exam_section}"}),
                new sap.m.Label({wrapping:true,text: "{exam_finding}"}),
                new sap.m.Label({wrapping:true,text: "{date}"}),
                new sap.m.Label({wrapping:true,text: "{age_days}"})
            ]
        });
        // oDialog.setTitle("Exam Findings")
        modelValue = [
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "exam_type": "Neurology",
              "exam_section": "coordination",
              "exam_finding": "No abnormal movement",
              "date": "2019-06",
              "age_days": 9
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2019-06",
              "age_days": 9
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2019-06",
              "age_days": 9
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Normal tone in skeletal muscle",
              "date": "2019-06",
              "age_days": 9
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2019-06",
              "age_days": 9
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "exam_type": "Neurology",
              "exam_section": "coordination",
              "exam_finding": "No abnormal movement",
              "date": "2019-06",
              "age_days": 11
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2019-06",
              "age_days": 11
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2019-06",
              "age_days": 11
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Normal tone in skeletal muscle",
              "date": "2019-06",
              "age_days": 11
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2019-06",
              "age_days": 11
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Poor visual tracking",
              "date": "2016-08",
              "age_days": 77
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Generalized hypotonia",
              "date": "2016-08",
              "age_days": 77
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Clonus",
              "date": "2016-08",
              "age_days": 77
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Light touch sensation present",
              "date": "2016-08",
              "age_days": 77
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2016-08",
              "age_days": 78
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2016-08",
              "age_days": 78
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Decreased muscle tone",
              "date": "2016-08",
              "age_days": 78
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Clonus",
              "date": "2016-08",
              "age_days": 78
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensation grossly intact",
              "date": "2016-08",
              "age_days": 78
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2016-08",
              "age_days": 79
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2016-08",
              "age_days": 79
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Decreased muscle tone",
              "date": "2016-08",
              "age_days": 79
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Clonus",
              "date": "2016-08",
              "age_days": 79
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensation grossly intact",
              "date": "2016-08",
              "age_days": 79
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2016-08",
              "age_days": 86
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2016-08",
              "age_days": 86
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Decreased muscle tone",
              "date": "2016-08",
              "age_days": 86
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Clonus",
              "date": "2016-08",
              "age_days": 86
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensation grossly intact",
              "date": "2016-08",
              "age_days": 86
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2016-08",
              "age_days": 92
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2016-08",
              "age_days": 92
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Decreased muscle tone",
              "date": "2016-08",
              "age_days": 92
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Clonus",
              "date": "2016-08",
              "age_days": 92
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensation grossly intact",
              "date": "2016-08",
              "age_days": 92
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2016-08",
              "age_days": 94
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2016-08",
              "age_days": 94
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Decreased muscle tone",
              "date": "2016-08",
              "age_days": 94
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Clonus",
              "date": "2016-08",
              "age_days": 94
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensation grossly intact",
              "date": "2016-08",
              "age_days": 94
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "coordination",
              "exam_finding": "Normal coordination",
              "date": "2017-04",
              "age_days": 322
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Strabismus",
              "date": "2017-04",
              "age_days": 322
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2017-04",
              "age_days": 322
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Head lag",
              "date": "2017-04",
              "age_days": 322
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Generalized hypotonia",
              "date": "2017-04",
              "age_days": 322
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2017-04",
              "age_days": 322
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Normal sensation",
              "date": "2017-04",
              "age_days": 322
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "coordination",
              "exam_finding": "Normal coordination",
              "date": "2017-10",
              "age_days": 504
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Strabismus",
              "date": "2017-10",
              "age_days": 504
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2017-10",
              "age_days": 504
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Generalized hypotonia",
              "date": "2017-10",
              "age_days": 504
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2017-10",
              "age_days": 504
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Normal sensation",
              "date": "2017-10",
              "age_days": 504
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "coordination",
              "exam_finding": "Normal coordination",
              "date": "2018-04",
              "age_days": 706
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2018-04",
              "age_days": 706
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2018-04",
              "age_days": 706
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Generalized hypotonia",
              "date": "2018-04",
              "age_days": 706
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2018-04",
              "age_days": 706
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Normal sensation",
              "date": "2018-04",
              "age_days": 706
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "coordination",
              "exam_finding": "Normal coordination",
              "date": "2018-10",
              "age_days": 889
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2018-10",
              "age_days": 889
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "gait",
              "exam_finding": "Unable to walk",
              "date": "2018-10",
              "age_days": 889
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2018-10",
              "age_days": 889
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Generalized hypotonia",
              "date": "2018-10",
              "age_days": 889
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2018-10",
              "age_days": 889
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Normal sensation",
              "date": "2018-10",
              "age_days": 889
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "coordination",
              "exam_finding": "Normal coordination",
              "date": "2019-04",
              "age_days": 1057
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2019-04",
              "age_days": 1057
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "gait",
              "exam_finding": "Unable to walk",
              "date": "2019-04",
              "age_days": 1057
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2019-04",
              "age_days": 1057
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Generalized hypotonia",
              "date": "2019-04",
              "age_days": 1057
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2019-04",
              "age_days": 1057
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Normal sensation",
              "date": "2019-04",
              "age_days": 1057
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "coordination",
              "exam_finding": "Normal coordination",
              "date": "2019-10",
              "age_days": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2019-10",
              "age_days": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "gait",
              "exam_finding": "Unable to walk",
              "date": "2019-10",
              "age_days": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2019-10",
              "age_days": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Generalized hypotonia",
              "date": "2019-10",
              "age_days": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2019-10",
              "age_days": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Normal sensation",
              "date": "2019-10",
              "age_days": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "coordination",
              "exam_finding": "Normal coordination",
              "date": "2020-07",
              "age_days": 1512
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2020-07",
              "age_days": 1512
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "gait",
              "exam_finding": "Unable to walk",
              "date": "2020-07",
              "age_days": 1512
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2020-07",
              "age_days": 1512
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Generalized hypotonia",
              "date": "2020-07",
              "age_days": 1512
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2020-07",
              "age_days": 1512
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Normal sensation",
              "date": "2020-07",
              "age_days": 1512
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "coordination",
              "exam_finding": "No abnormal movement",
              "date": "2021-04",
              "age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2021-04",
              "age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "gait",
              "exam_finding": "Unable to walk",
              "date": "2021-04",
              "age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2021-04",
              "age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Generalized hypotonia",
              "date": "2021-04",
              "age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2021-04",
              "age_days": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensation grossly intact",
              "date": "2021-04",
              "age_days": 1799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Fix and follow",
              "date": "2018-06",
              "age_days": 58
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Antigravity strength",
              "date": "2018-06",
              "age_days": 58
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Normal tone in skeletal muscle",
              "date": "2018-06",
              "age_days": 58
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Moro reflex absent",
              "date": "2018-06",
              "age_days": 58
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Stepping reflex absent",
              "date": "2018-06",
              "age_days": 58
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2018-06",
              "age_days": 58
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Poor visual tracking",
              "date": "2018-07",
              "age_days": 69
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2018-07",
              "age_days": 69
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Axial hypotonia",
              "date": "2018-07",
              "age_days": 69
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2018-07",
              "age_days": 69
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2018-07",
              "age_days": 69
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Poor visual tracking",
              "date": "2018-07",
              "age_days": 76
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2018-07",
              "age_days": 76
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2018-07",
              "age_days": 76
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Normal light touch sensation",
              "date": "2018-07",
              "age_days": 76
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Poor visual tracking",
              "date": "2018-07",
              "age_days": 77
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2018-07",
              "age_days": 77
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Palmar reflex absent",
              "date": "2018-07",
              "age_days": 77
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Normal light touch sensation",
              "date": "2018-07",
              "age_days": 77
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Poor visual tracking",
              "date": "2018-08",
              "age_days": 96
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2018-08",
              "age_days": 96
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Axial hypotonia",
              "date": "2018-08",
              "age_days": 96
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2018-08",
              "age_days": 96
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2018-08",
              "age_days": 96
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Poor visual tracking",
              "date": "2018-08",
              "age_days": 104
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2018-08",
              "age_days": 104
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2018-08",
              "age_days": 104
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2018-08",
              "age_days": 104
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2018-09",
              "age_days": 139
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Antigravity strength",
              "date": "2018-09",
              "age_days": 139
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Axial hypotonia",
              "date": "2018-09",
              "age_days": 139
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2018-09",
              "age_days": 139
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Normal light touch sensation",
              "date": "2018-09",
              "age_days": 139
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Poor visual tracking",
              "date": "2018-09",
              "age_days": 146
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2018-09",
              "age_days": 146
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Increased muscle tone",
              "date": "2018-09",
              "age_days": 146
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2018-09",
              "age_days": 146
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2018-09",
              "age_days": 146
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Extraocular movements full",
              "date": "2018-10",
              "age_days": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2018-10",
              "age_days": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Increased muscle tone",
              "date": "2018-10",
              "age_days": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2018-10",
              "age_days": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2018-10",
              "age_days": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2018-11",
              "age_days": 197
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2018-11",
              "age_days": 197
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Unable to elicit reflexes",
              "date": "2018-11",
              "age_days": 197
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Poor visual tracking",
              "date": "2018-12",
              "age_days": 224
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2018-12",
              "age_days": 224
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Normal tone in skeletal muscle",
              "date": "2018-12",
              "age_days": 224
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2018-12",
              "age_days": 224
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2018-12",
              "age_days": 224
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2019-01",
              "age_days": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2019-01",
              "age_days": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Hypertonia, lower extremities",
              "date": "2019-01",
              "age_days": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2019-01",
              "age_days": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2019-01",
              "age_days": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2019-01",
              "age_days": 267
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2019-01",
              "age_days": 267
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Normal tone in skeletal muscle",
              "date": "2019-01",
              "age_days": 267
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2019-01",
              "age_days": 267
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2019-01",
              "age_days": 267
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2019-04",
              "age_days": 361
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2019-04",
              "age_days": 361
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Normal tone in skeletal muscle",
              "date": "2019-04",
              "age_days": 361
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2019-04",
              "age_days": 361
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2019-04",
              "age_days": 361
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2019-06",
              "age_days": 410
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2019-06",
              "age_days": 410
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Normal tone in skeletal muscle",
              "date": "2019-06",
              "age_days": 410
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Parachute reflex absent",
              "date": "2019-06",
              "age_days": 410
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2019-06",
              "age_days": 410
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2019-06",
              "age_days": 410
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2019-09",
              "age_days": 508
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2019-09",
              "age_days": 508
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Normal tone in skeletal muscle",
              "date": "2019-09",
              "age_days": 508
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2019-09",
              "age_days": 508
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2019-09",
              "age_days": 508
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2019-12",
              "age_days": 592
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2019-12",
              "age_days": 592
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Normal tone in skeletal muscle",
              "date": "2019-12",
              "age_days": 592
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2019-12",
              "age_days": 592
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2019-12",
              "age_days": 592
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2020-04",
              "age_days": 718
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2020-04",
              "age_days": 718
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Weight-bearing",
              "date": "2020-04",
              "age_days": 718
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Normal tone in skeletal muscle",
              "date": "2020-04",
              "age_days": 718
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2020-04",
              "age_days": 718
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Parachute reflex present",
              "date": "2020-04",
              "age_days": 718
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2020-04",
              "age_days": 718
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2020-07",
              "age_days": 799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2020-07",
              "age_days": 799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Weight-bearing",
              "date": "2020-07",
              "age_days": 799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Normal tone in skeletal muscle",
              "date": "2020-07",
              "age_days": 799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Symmetric reflexes",
              "date": "2020-07",
              "age_days": 799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Parachute reflex present",
              "date": "2020-07",
              "age_days": 799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2020-07",
              "age_days": 799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2020-08",
              "age_days": 839
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Symmetric muscle strength",
              "date": "2020-08",
              "age_days": 839
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Normal tone in skeletal muscle",
              "date": "2020-08",
              "age_days": 839
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "coordination",
              "exam_finding": "Normal coordination",
              "date": "2020-11",
              "age_days": 932
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "cranialNerves",
              "exam_finding": "Normal cranial nerves",
              "date": "2020-11",
              "age_days": 932
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "gait",
              "exam_finding": "Wide-based gait",
              "date": "2020-11",
              "age_days": 932
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Normal strength",
              "date": "2020-11",
              "age_days": 932
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleStrengthBulk",
              "exam_finding": "Skeletal muscle size normal",
              "date": "2020-11",
              "age_days": 932
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "muscleTone",
              "exam_finding": "Decreased muscle tone",
              "date": "2020-11",
              "age_days": 932
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "reflexes",
              "exam_finding": "Normal reflex",
              "date": "2020-11",
              "age_days": 932
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "exam_type": "Neurology",
              "exam_section": "sensation",
              "exam_finding": "Sensitive to touch",
              "date": "2020-11",
              "age_days": 932
            }
          ];
    }else if(node == '__node11'){
        table1 = new sap.m.Table({ growing: true,alternateRowColors:true,
            noDataText:oBundle.getText("No_Data"), growingTriggerText:oBundle.getText("More"),
            sticky:[sap.m.Sticky.ColumnHeaders,sap.m.Sticky.HeaderToolbar,sap.m.Sticky.InfoToolbar],
            growingThreshold: 50, growingScrollToLoad : false,
            columns: [
                new sap.m.Column({width:"100px",header: new sap.m.Label({text: oBundle.getText("Action"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Patient_UUID"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Medication"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Doses"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Medication_Indication"),design: sap.m.LabelDesign.Bold})}),
                new sap.m.Column({header: new sap.m.Label({wrapping:true,text: oBundle.getText("Date"),design: sap.m.LabelDesign.Bold})}),
            ],
            headerToolbar:[
                new sap.m.Toolbar({
                    content: [
                        new sap.m.ToolbarSpacer(),
                        new sap.m.SearchField({
                            placeholder: oBundle.getText("Search"),
                            width: "300px",
                            liveChange: function (event) {
                
                                var oBinding = table1.getBinding("items");
                                var searchStr = this.getValue();
                                if (oBinding) {
                                var oFilters = [
                                new sap.ui.model.Filter("patient_uuid", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("medication", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("doses", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("medication_indication", sap.ui.model.FilterOperator.Contains, searchStr),
                                new sap.ui.model.Filter("medication_firstDate", sap.ui.model.FilterOperator.Contains, searchStr),
                                // new sap.ui.model.Filter("", sap.ui.model.FilterOperator.Contains, searchStr),
                               
                                ];
                                    var filterObj = new sap.ui.model.Filter(oFilters, false);
                                    oBinding.filter(filterObj);
                                } else {
                                    oBinding.filter([]);
                                }
                            }
                        }),
                    ]})]
        });
        table1Template = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Button({ type: "Emphasized",icon: "sap-icon://action",text: oBundle.getText("Detail"),
                    press: function (event) {
                        var model = this.getModel();
                        var path = event.getSource().getBindingContext().getPath();
                        var obj = model.getProperty(path);
                        displayPatientData(obj);
                    }
                }),
                new sap.m.Label({wrapping:true,text: "{patient_uuid}"}),
                new sap.m.Label({wrapping:true,text: "{medication}"}),
                // new sap.m.Label({wrapping:true,text: "{doses}"}),
                new sap.m.HBox({
                    items:[new sap.m.Label({ wrapping: true, text: "{doses}" }),
                            new sap.m.Label({ wrapping: true, text: "{unit}" }).addStyleClass("sapUiTinyMarginTop"),
                    ]}).addStyleClass("sapUiTinyMargin"),
                new sap.m.Label({wrapping:true,text: "{medication_indication}"}),
                new sap.m.Label({wrapping:true,text: "{medication_firstDate}"})
            ]
        });

        modelValue = [
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "medication": "Phenobarbital",
              "medication_firstDate": "2019-06",
              "medication_lastDate": "2019-06",
              "doses": "5",
              "unit": "mg/kg/d",
              "medication_indication": "Neonatal seizures",
              "age_days_firstDate": 9,
              "age_days_lastDate": 9
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "medication": "Phenobarbital",
              "medication_firstDate": "2019-06",
              "medication_lastDate": "2019-06",
              "doses": "20",
              "unit": "mg/kg",
              "medication_indication": "Neonatal seizures",
              "age_days_firstDate": 9,
              "age_days_lastDate": 9
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "medication": "Phenobarbital",
              "medication_firstDate": "2019-07",
              "medication_lastDate": "2019-08",
              "doses": "11.6",
              "unit": "mg/12h",
              "medication_indication": "Neonatal seizures",
              "age_days_firstDate": 30,
              "age_days_lastDate": 58
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "medication": "Levetiracetam",
              "medication_firstDate": "2020-08",
              "medication_lastDate": "2020-08",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 444,
              "age_days_lastDate": 444
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "medication": "Lorazepam",
              "medication_firstDate": "2020-08",
              "medication_lastDate": "2020-08",
              "doses": "1",
              "unit": "U/PRN",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 444,
              "age_days_lastDate": 444
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "medication": "Levetiracetam",
              "medication_firstDate": "2020-08",
              "medication_lastDate": "2020-08",
              "doses": "200",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 445,
              "age_days_lastDate": 445
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "medication": "Levetiracetam",
              "medication_firstDate": "2020-08",
              "medication_lastDate": "2020-08",
              "doses": "250",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 447,
              "age_days_lastDate": 447
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "medication": "Clonazepam",
              "medication_firstDate": "2020-08",
              "medication_lastDate": "2020-08",
              "doses": "0.125",
              "unit": "mg/PRN",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 448,
              "age_days_lastDate": 448
            },
            {
              "patient_uuid": "1302457c-107e-45aa-8fbd-0cace7dc7498",
              "medication": "Diazepam",
              "medication_firstDate": "2020-08",
              "medication_lastDate": "2020-08",
              "doses": "7.5",
              "unit": "mg/PRN",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 448,
              "age_days_lastDate": 448
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Levetiracetam",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "doses": "50",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 75,
              "age_days_lastDate": 75
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Levetiracetam",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "doses": "50",
              "unit": "mg",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 75,
              "age_days_lastDate": 75
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Topiramate",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "doses": "5",
              "unit": "mg/kg",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 77,
              "age_days_lastDate": 77
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Pyridoxal phosphate",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "doses": "50",
              "unit": "mg/6h",
              "age_days_firstDate": 77,
              "age_days_lastDate": 77
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Levetiracetam",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "doses": "40",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 77,
              "age_days_lastDate": 77
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Prednisone",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "doses": "10",
              "unit": "mg/6h",
              "age_days_firstDate": 77,
              "age_days_lastDate": 91
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Famotidine",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "doses": "2.2",
              "unit": "mg/12h",
              "age_days_firstDate": 77,
              "age_days_lastDate": 91
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Clonazepam",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2021-04",
              "doses": "0.125",
              "unit": "mg/PRN",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 78,
              "age_days_lastDate": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Sodium bicarbonate",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "doses": "325",
              "unit": "mg/d",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 78,
              "age_days_lastDate": 78
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Topiramate",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "doses": "11",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 78,
              "age_days_lastDate": 78
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Leucovorin",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "doses": "5",
              "unit": "mg/d",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 78,
              "age_days_lastDate": 78
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Topiramate",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "doses": "13.215",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 78,
              "age_days_lastDate": 78
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Pyridoxine",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "doses": "50",
              "unit": "mg/d",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 78,
              "age_days_lastDate": 78
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "ACTH",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2016-08",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 90,
              "age_days_lastDate": 94
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Levetiracetam",
              "medication_firstDate": "2016-08",
              "medication_lastDate": "2017-04",
              "doses": "100",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 92,
              "age_days_lastDate": 322
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Topiramate",
              "medication_firstDate": "2016-10",
              "medication_lastDate": "2016-10",
              "doses": "10.8",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 136,
              "age_days_lastDate": 136
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Vigabatrin",
              "medication_firstDate": "2017-04",
              "medication_lastDate": "2017-06",
              "doses": "250",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 322,
              "age_days_lastDate": 379
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Levetiracetam",
              "medication_firstDate": "2017-07",
              "medication_lastDate": "2019-10",
              "doses": "150",
              "unit": "mg/12h",
              "age_days_firstDate": 418,
              "age_days_lastDate": 1239
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Melatonin",
              "medication_firstDate": "2018-10",
              "medication_lastDate": "2020-07",
              "doses": "1",
              "unit": "mg/d",
              "age_days_firstDate": 889,
              "age_days_lastDate": 1512
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Levetiracetam",
              "medication_firstDate": "2019-10",
              "medication_lastDate": "2021-04",
              "doses": "200",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 1239,
              "age_days_lastDate": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Clonidine",
              "medication_firstDate": "2020-07",
              "medication_lastDate": "2020-07",
              "doses": "0.025",
              "unit": "mg/d",
              "medication_indication": "Sleep disorder",
              "age_days_firstDate": 1512,
              "age_days_lastDate": 1512
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Clonidine",
              "medication_firstDate": "2021-04",
              "medication_lastDate": "2021-04",
              "doses": "2.5",
              "unit": "mL/d",
              "medication_indication": "Sleep disorder",
              "age_days_firstDate": 1799,
              "age_days_lastDate": 1799
            },
            {
              "patient_uuid": "4a579704-e0a7-4d60-a4d6-9c5f3fdbeb0e",
              "medication": "Melatonin",
              "medication_firstDate": "2021-04",
              "medication_lastDate": "2021-04",
              "medication_indication": "Sleep disorder",
              "age_days_firstDate": 1799,
              "age_days_lastDate": 1799
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Phenobarbital",
              "medication_firstDate": "2018-05",
              "medication_lastDate": "2018-05",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 3,
              "age_days_lastDate": 3
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Phenobarbital",
              "medication_firstDate": "2018-05",
              "medication_lastDate": "2018-05",
              "doses": "20",
              "unit": "mg/d",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 8,
              "age_days_lastDate": 8
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Phenobarbital",
              "medication_firstDate": "2018-06",
              "medication_lastDate": "2018-06",
              "doses": "51.35",
              "unit": "mg",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 58,
              "age_days_lastDate": 58
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Phenobarbital",
              "medication_firstDate": "2018-06",
              "medication_lastDate": "2018-06",
              "doses": "25.6",
              "unit": "mg/d",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 58,
              "age_days_lastDate": 58
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Lorazepam",
              "medication_firstDate": "2018-06",
              "medication_lastDate": "2018-06",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 58,
              "age_days_lastDate": 58
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Levetiracetam",
              "medication_firstDate": "2018-06",
              "medication_lastDate": "2018-06",
              "doses": "255",
              "unit": "mg",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 58,
              "age_days_lastDate": 58
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Levetiracetam",
              "medication_firstDate": "2018-07",
              "medication_lastDate": "2018-07",
              "doses": "80",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 62,
              "age_days_lastDate": 69
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Phenobarbital",
              "medication_firstDate": "2018-07",
              "medication_lastDate": "2018-07",
              "doses": "12.8",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 62,
              "age_days_lastDate": 62
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Phenobarbital",
              "medication_firstDate": "2018-07",
              "medication_lastDate": "2018-07",
              "doses": "28",
              "unit": "mg/d",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 69,
              "age_days_lastDate": 77
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Levetiracetam",
              "medication_firstDate": "2018-07",
              "medication_lastDate": "2018-07",
              "doses": "140",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 77,
              "age_days_lastDate": 77
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Leucovorin",
              "medication_firstDate": "2018-07",
              "medication_lastDate": "2018-07",
              "doses": "12.5",
              "unit": "mg/12h",
              "age_days_firstDate": 77,
              "age_days_lastDate": 77
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Pyridoxal phosphate",
              "medication_firstDate": "2018-07",
              "medication_lastDate": "2018-07",
              "doses": "100",
              "unit": "mg/8h",
              "age_days_firstDate": 77,
              "age_days_lastDate": 77
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Cholecalciferol",
              "medication_firstDate": "2018-07",
              "medication_lastDate": "2018-07",
              "doses": "800",
              "unit": "[iU]",
              "age_days_firstDate": 77,
              "age_days_lastDate": 77
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Omeprazole",
              "medication_firstDate": "2018-07",
              "medication_lastDate": "2018-08",
              "doses": "2.8",
              "unit": "mg/12h",
              "medication_indication": "Gastroesophageal reflux disease (GERD)",
              "age_days_firstDate": 77,
              "age_days_lastDate": 104
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "ACTH",
              "medication_firstDate": "2018-07",
              "medication_lastDate": "2018-07",
              "doses": "0.28",
              "unit": "mL/12h",
              "medication_indication": "Infantile spasms",
              "age_days_firstDate": 77,
              "age_days_lastDate": 77
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Levetiracetam",
              "medication_firstDate": "2018-08",
              "medication_lastDate": "2018-08",
              "doses": "150",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 91,
              "age_days_lastDate": 91
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Phenobarbital",
              "medication_firstDate": "2018-08",
              "medication_lastDate": "2018-08",
              "doses": "16",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 96,
              "age_days_lastDate": 104
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "ACTH",
              "medication_firstDate": "2018-08",
              "medication_lastDate": "2018-08",
              "doses": "0.06",
              "unit": "mL/d",
              "medication_indication": "Infantile spasms",
              "age_days_firstDate": 96,
              "age_days_lastDate": 96
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Levetiracetam",
              "medication_firstDate": "2018-08",
              "medication_lastDate": "2018-08",
              "doses": "350",
              "unit": "mg/d",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 96,
              "age_days_lastDate": 104
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Pyridoxal phosphate",
              "medication_firstDate": "2018-08",
              "medication_lastDate": "2018-08",
              "doses": "100",
              "unit": "mg/d",
              "age_days_firstDate": 96,
              "age_days_lastDate": 96
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Prednisolone",
              "medication_firstDate": "2018-08",
              "medication_lastDate": "2018-08",
              "doses": "0.5",
              "unit": "mg/d",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 104,
              "age_days_lastDate": 104
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Phenobarbital",
              "medication_firstDate": "2018-09",
              "medication_lastDate": "2018-09",
              "doses": "20",
              "unit": "mg/d",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 139,
              "age_days_lastDate": 139
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Vigabatrin",
              "medication_firstDate": "2018-09",
              "medication_lastDate": "2018-09",
              "doses": "190",
              "unit": "mg/12h",
              "medication_indication": "Infantile spasms",
              "age_days_firstDate": 139,
              "age_days_lastDate": 139
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Levetiracetam",
              "medication_firstDate": "2018-09",
              "medication_lastDate": "2019-01",
              "doses": "200",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 139,
              "age_days_lastDate": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Phenobarbital",
              "medication_firstDate": "2018-09",
              "medication_lastDate": "2018-09",
              "doses": "16",
              "unit": "mg/d",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 146,
              "age_days_lastDate": 146
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Vigabatrin",
              "medication_firstDate": "2018-09",
              "medication_lastDate": "2018-12",
              "doses": "500",
              "unit": "mg/12h",
              "medication_indication": "Infantile spasms",
              "age_days_firstDate": 146,
              "age_days_lastDate": 224
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Prednisolone",
              "medication_firstDate": "2018-10",
              "medication_lastDate": "2018-10",
              "doses": "9",
              "unit": "mg/6h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 162,
              "age_days_lastDate": 162
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Ranitidine",
              "medication_firstDate": "2018-10",
              "medication_lastDate": "2018-10",
              "doses": "1.8",
              "unit": "mL/12h",
              "medication_indication": "Gastroesophageal reflux disease (GERD)",
              "age_days_firstDate": 176,
              "age_days_lastDate": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Prednisolone",
              "medication_firstDate": "2018-10",
              "medication_lastDate": "2018-10",
              "doses": "6",
              "unit": "mg/8h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 176,
              "age_days_lastDate": 176
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Cholecalciferol",
              "medication_firstDate": "2018-11",
              "medication_lastDate": "2021-03",
              "doses": "400",
              "unit": "[iU]",
              "age_days_firstDate": 197,
              "age_days_lastDate": 1047
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Polyethylene glycol 3350",
              "medication_firstDate": "2018-11",
              "medication_lastDate": "2018-11",
              "doses": "1",
              "unit": "g/12h",
              "medication_indication": "Constipation",
              "age_days_firstDate": 197,
              "age_days_lastDate": 197
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Levetiracetam",
              "medication_firstDate": "2018-11",
              "medication_lastDate": "2019-01",
              "doses": "250",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 197,
              "age_days_lastDate": 267
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Clobazam",
              "medication_firstDate": "2018-12",
              "medication_lastDate": "2019-04",
              "doses": "2.5",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 224,
              "age_days_lastDate": 361
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Lansoprazole",
              "medication_firstDate": "2018-12",
              "medication_lastDate": "2019-01",
              "doses": "15",
              "unit": "mg/d",
              "medication_indication": "Gastroesophageal reflux disease (GERD)",
              "age_days_firstDate": 224,
              "age_days_lastDate": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Polyethylene glycol 3350",
              "medication_firstDate": "2018-12",
              "medication_lastDate": "2019-01",
              "doses": "2",
              "unit": "g/12h",
              "medication_indication": "Constipation",
              "age_days_firstDate": 224,
              "age_days_lastDate": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Ranitidine",
              "medication_firstDate": "2018-12",
              "medication_lastDate": "2019-04",
              "doses": "37.5",
              "unit": "mg/12h",
              "medication_indication": "Gastroesophageal reflux disease (GERD)",
              "age_days_firstDate": 224,
              "age_days_lastDate": 361
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Vigabatrin",
              "medication_firstDate": "2019-01",
              "medication_lastDate": "2019-01",
              "doses": "450",
              "unit": "mg/12h",
              "medication_indication": "Infantile spasms",
              "age_days_firstDate": 246,
              "age_days_lastDate": 246
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Vigabatrin",
              "medication_firstDate": "2019-01",
              "medication_lastDate": "2019-01",
              "doses": "150",
              "unit": "mg/12h",
              "medication_indication": "Infantile spasms",
              "age_days_firstDate": 267,
              "age_days_lastDate": 267
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Lansoprazole",
              "medication_firstDate": "2019-01",
              "medication_lastDate": "2019-04",
              "doses": "15",
              "unit": "mg/12h",
              "medication_indication": "Gastroesophageal reflux disease (GERD)",
              "age_days_firstDate": 267,
              "age_days_lastDate": 361
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Polyethylene glycol 3350",
              "medication_firstDate": "2019-04",
              "medication_lastDate": "2019-06",
              "doses": "3",
              "unit": "g/12h",
              "medication_indication": "Constipation",
              "age_days_firstDate": 361,
              "age_days_lastDate": 410
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Levetiracetam",
              "medication_firstDate": "2019-04",
              "medication_lastDate": "2019-04",
              "doses": "125",
              "unit": "mg/12h",
              "medication_indication": "Epilepsy",
              "age_days_firstDate": 361,
              "age_days_lastDate": 361
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Polyethylene glycol 3350",
              "medication_firstDate": "2019-09",
              "medication_lastDate": "2019-09",
              "doses": "8",
              "unit": "g/d",
              "medication_indication": "Constipation",
              "age_days_firstDate": 508,
              "age_days_lastDate": 508
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Polyethylene glycol 3350",
              "medication_firstDate": "2020-04",
              "medication_lastDate": "2020-04",
              "doses": "4",
              "unit": "g/12h",
              "medication_indication": "Constipation",
              "age_days_firstDate": 718,
              "age_days_lastDate": 718
            },
            {
              "patient_uuid": "8a408e42-5b31-4c09-af3d-5f75cd9b68df",
              "medication": "Polyethylene glycol 3350",
              "medication_firstDate": "2020-11",
              "medication_lastDate": "2020-11",
              "doses": "8.5",
              "unit": "g/d",
              "medication_indication": "Constipation",
              "age_days_firstDate": 932,
              "age_days_lastDate": 932
            }
          ]
    };
    
    var oModel = new sap.ui.model.json.JSONModel();
    oModel.setData({ modelData: modelValue });
    table1.setModel(oModel);
    table1.bindItems({ path: "/modelData", template: table1Template });

    var oDialog = new sap.m.Dialog({contentWidth:"80%",draggable:true, resizable: true,
    title: oBundle.getText("Patient List") + "List",
    content: [table1],
    buttons: [
        new sap.m.Button({text: oBundle.getText("Close"),icon: "sap-icon://decline",
        press: function () {oDialog.close();}
        })
    ]
    }).open();

    if(node == '__node6'){
        oDialog.setTitle("Primary Diagnosis");
    }else if(node == '__node7'){
        oDialog.setTitle("Genetic Findings");        
    }else if(node == '__node8'){
        oDialog.setTitle("Growth Parameters")
    }else if(node == '__node9'){
        oDialog.setTitle("Clinical Diagnosis")
    }else if(node == '__node10'){
        oDialog.setTitle("Exam Findings");
    }else if(node == '__node11'){
        oDialog.setTitle("Medication");
    };
}