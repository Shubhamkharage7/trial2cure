
var oBundle = "";
jQuery.sap.require("sap.m.MessageBox");
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
    title: "Ram Upadhayay",
    description: "",
    icon: "sap-icon://employee"
});



var userView = new sap.m.QuickView({
    placement: sap.m.PlacementType.Auto,
    pages: [userDetailQuickView]
});
var logout = new sap.m.Button({
    type: sap.m.ButtonType.Default,
    icon: sap.ui.core.IconPool.getIconURI("log"),
    press: function () {
        sap.m.MessageBox.show(oBundle.getText("Do_you_want_to_logout"),
            sap.m.MessageBox.Icon.ERROR,
            oBundle.getText("Alert"),
            [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
            function (bConfirmed) {
                if (bConfirmed == "YES") {
                    window.open("patient.html", "_self");
                }
            })
}});
var refreshBtn = new sap.m.Button({
    type: sap.m.ButtonType.Default,
    icon: sap.ui.core.IconPool.getIconURI("synchronize"),
    layoutData: new sap.m.OverflowToolbarLayoutData({priority: "High"}),
    press: function () {refresh();}
});
var fullScreen = new sap.m.Button({
    type: sap.m.ButtonType.Default,
    icon: sap.ui.core.IconPool.getIconURI("full-screen"),
    layoutData: new sap.m.OverflowToolbarLayoutData({priority: "Low"}),
    press: function () { GoInFullscreen();}
});

var userImg = new sap.m.Button({
    type: sap.m.ButtonType.Default,
    icon: sap.ui.core.IconPool.getIconURI("employee"),
    layoutData: new sap.m.OverflowToolbarLayoutData({priority: "Low"}),
    press: function () {userView.openBy(this);}
});
var toolHeader = new sap.tnt.ToolHeader({
    content: [
        new sap.m.Button({
            icon: 'sap-icon://menu2',
            type: sap.m.ButtonType.Transparent,
            press: function () {
                var sideExpanded = toolPage.getSideExpanded();
                toolPage.setSideExpanded(!sideExpanded);
            },
            layoutData: new sap.m.OverflowToolbarLayoutData({priority: "NeverOverflow"})
        }),
        // new sap.m.Label({ text: "Patient"+" :Sachin Upadhyay", design: sap.m.LabelDesign.Bold }),
        new sap.m.ToolbarSpacer({width: '40%'}),
        new sap.m.Image({ src: "Images/logo.png", width: "40px", height: "35px",
        layoutData: new sap.m.OverflowToolbarLayoutData({priority: "NeverOverflow"})}).addStyleClass("sapUiTinyMarginTop"), 
        new sap.m.Label({ text: "Trial2Cure Patient Portal", design: sap.m.LabelDesign.Bold }),
        new sap.tnt.ToolHeaderUtilitySeparator({ }), new sap.m.ToolbarSpacer(),
        // languageDB,
        userImg,refreshBtn,logout,fullScreen
    ]
});


var navContainer = new sap.m.NavContainer({
    pages: [
        new sap.m.ScrollContainer('p0',{ vertical: true,height: "100%",width: "100%",
            horizontal: false,content: [oAppHome]}),
        // new sap.m.ScrollContainer('p1',{ vertical: true,height: "100%",width: "100%",
        //     horizontal: false,content: [oAppPharmaHome]}),
    ]
}).addStyleClass("page");

// console.log(navContainer.getPages()[0].setVisible(false))
var toolPage = new sap.tnt.ToolPage({
    header: toolHeader,
    // sideContent: sideNavigation,
    mainContents: [navContainer]
});


var portalPage = new sap.m.Page({
    showHeader: false,
    content: [toolPage]
});
var app = new sap.m.App({initialPage:portalPage});
app.addPage(portalPage).placeAt("body");


function GoInFullscreen() {
    
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
       (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        fullScreen.setIcon(sap.ui.core.IconPool.getIconURI("exit-full-screen"));
        toolPage.setSideExpanded(false);
    } else {
        toolPage.setSideExpanded(true);
        fullScreen.setIcon(sap.ui.core.IconPool.getIconURI("full-screen"));
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}