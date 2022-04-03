var location = "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_Slava\\log\\";
var scr_name = "sf_Slava22_3_33";

//#include "sf_scr_global_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\sf_scr_global_1.jsx"
#include "sf_scr_lib_slava_1.jsx"

// #include "json2.js"
// #include "sf_scr_lib_1.jsx"
// #include "sf_scr_lib_4.jsx"
// #include "sf_scr_lib_5.jsx"
// #include "sf_scr_lib_vika_2.jsx"

#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\json2.js"

#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_compos_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_final_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_folder_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_prop_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_sys_1.jsx"

// #include "lib_compos_1.jsx"
// #include "lib_final_1.jsx"
// #include "lib_folder_1.jsx"
// #include "lib_prop_1.jsx"


//#include "sf_scr_lib_1.jsx"
//#include "sf_scr_lib_4.jsx"
//#include "sf_scr_lib_5.jsx"


//#include "sf_scr_lib_vika_1.jsx"

// global vars
var durationSec     = 5;
var rotationEnable  = 1;

// global vars
//var location = "C:\\data";
//var location = "e:\\Setup\\!AE\\ae_scripts\\log\\";


//===================================================
function main() 
{

    //genXml = readXmlaeGenXml("e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_Dima\\xml\\gen_dima_22_solo_11.xml");

    // var logName       = genXml.logName;
    // var pathRrXml     = genXml.pathRrXml;


    lg.open("w","UTF-8")
    lg.writeln("====================");
    lg.writeln(scr_name + " Date: " + new Date().toString());

    var influenceIn = getRandomInt(0, 10);
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    var random = Math.round(Math.random());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());



    handleCompList() ;

    //lg.writeln('mainCompList.length= ' +  String(mainCompList.length)  );
    //lg.writeln('bgCompList.length= '   +  String(bgCompList.length)  );
    //
    //var c1  = mainCompList[0];
    //lg.writeln('mainCompList[0]= '   +  String(mainCompList[0])  );
    //var c1  = findItem(mainCompList[0],"CmpItm");
    //lg.writeln('c1= '   +  String(c1));



    //var compFinalName = "aeFinalSlavaBase_1";
    //var finalComp = app.project.items.addComp(compFinalName, compWidth, compHeight, 1.0, mainCompList.length*durationSec, 25);
    //
    //var c1  = mainCompList[0];
    //lg.writeln('mainCompList[0]= '   +  String(mainCompList[0])  );
    //if(c1 !=null ) {  
    //    //p1 = finalComp.layers.add(c1); p1.startTime = time; 
    //    time += c1.duration;
    //} // if(c1 !=null )
    //
    //
    //var c1  = mainCompList[1];
    //lg.writeln('mainCompList[1]= '   +  String(mainCompList[1])  );
    //if(c1 !=null ) {  
    //    //p1 = finalComp.layers.add(c1); p1.startTime = time; 
    //    time += c1.duration;
    //} // if(c1 !=null )



    var compFinalName = "aeFinalSlavaBase_1";
    finalComp = handleMainFinalCompBase(compFinalName);
    
    //var compFinalNameBg = "aeFinalSlavaBb_1";
    //finalComp = handleBgFinalComp(compFinalNameBg);



    lg.writeln("====================");
    lg.close();

}

//===================================================

app.beginUndoGroup("AR_" + scr_name); // Begin undo group
var vault = []; // Initialize array for storing everything necessary
main()
app.endUndoGroup(); // End undo group

