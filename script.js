



////////////////////////////
//step one page js starts here

function stepOne(){
   var frm = document.querySelector('#theForm');
    var numIcon2 = document.querySelector('.ab2_2');
    var numIcon3 = document.querySelector('.ab3_3');
    var numIcon4 = document.querySelector('.ab4_4');
    var numIcon1 = document.querySelector('.ab1_1');
    var disDataNum1 = document.querySelector('.displayed_data1');
    var disDataNum2 = document.querySelector('.displayed_data2');
    var disDataNum3 = document.querySelector('.displayed_data3');
    var disDataNum4 = document.querySelector('.displayed_data4');
    var disDataNum5 = document.querySelector('.displayed_data5');
    
    //var others = document.querySelector('');

//////////////////////////////////////////////////////////////////////////////



    //back buttons
    var typBk1 = document.querySelector('.btn_back2');
    var typBk2 = document.querySelector('.btn_back3');
    var typBk3 = document.querySelector('.btn_back4');

    //next buttons
    var typBt2 = document.querySelector('.nxtbtn1');
    var typBt3 = document.querySelector('.nxtbtn2');
    var typBt4 = document.querySelector('.nxtbtn3');
    var typBt5 = document.querySelector('.nxtbtn4');

    // back buttons condition
 
    typBk1.style.display = 'none';
    typBk2.style.display = 'none';
    typBk3.style.display = 'none';

    // next buttons condition

    typBt2.style.display = 'block';
    typBt3.style.display = 'none';
    typBt4.style.display = 'none';
    typBt5.style.display = 'none';


/////////////////////////////////////////////////////////////////////
    numIcon2.style.background = 'rgba(2, 2, 86, 0)';
    numIcon2.style.color = 'white';
    numIcon2.innerText = '2';
    numIcon1.style.background = 'rgb(191, 247, 247)';
    numIcon1.style.color = 'black';
    numIcon1.innerText = '1';
    numIcon3.style.background = 'rgba(2, 2, 86, 0)';
    numIcon3.style.color = 'white';
    numIcon4.style.background = 'rgba(2, 2, 86, 0)';
    numIcon4.style.color = 'white';
///////////////////////////////////////////////////////////////////

    
    // typBt1.style.display = 'none';
    
    // typBt2.style.backgroundColor = 'rgb(2, 2, 86)';
    // typBt2.innerHTML = 'Next Step';
    //typBt2.addEventListener('click', stepTwo);
    
    

    disDataNum2.style.display = 'none';
    disDataNum1.style.display = 'block';
    disDataNum3.style.display = 'none';
    disDataNum4.style.display = 'none';
    disDataNum5.style.display = 'none';
    
    
    
    


}

//step one page js ends here here

//step two page js starts here


function stepTwo(){
    
    var numIcon2 = document.querySelector('.ab2_2');
    var numIcon3 = document.querySelector('.ab3_3');
    var numIcon4 = document.querySelector('.ab4_4');
    var numIcon1 = document.querySelector('.ab1_1');

    var disDataNum1 = document.querySelector('.displayed_data1');
    var disDataNum2 = document.querySelector('.displayed_data2');
    var disDataNum3 = document.querySelector('.displayed_data3');
    var disDataNum4 = document.querySelector('.displayed_data4');
    var disDataNum5 = document.querySelector('.displayed_data5');
    //var others = document.querySelector('');

    //////////////////////////////////////////////////////////////////////////////

//onerror messages name_fld

var fid1 = document.getElementById('name').value;
var fid1_ = document.querySelector('.name_fld');
var fid2 = document.getElementById('email').value;
var fid2_ = document.querySelector('.email_fld');
var fid3 = document.getElementById('pnumer').value;
var fid3_ = document.querySelector('.pnumer_fld');

  var err1 = document.querySelector('.onErr1');
  var err2 = document.querySelector('.onErr2');
  var err3 = document.querySelector('.onErr3');

    //back buttons
    var typBk1 = document.querySelector('.btn_back2');
    var typBk2 = document.querySelector('.btn_back3');
    var typBk3 = document.querySelector('.btn_back4');

    //next buttons
    var typBt2 = document.querySelector('.nxtbtn1');
    var typBt3 = document.querySelector('.nxtbtn2');
    var typBt4 = document.querySelector('.nxtbtn3');
    var typBt5 = document.querySelector('.nxtbtn4');

/////////////////////////////////////////////////////////////////////
    
        if(fid1 === ""){
            err1.style.display = 'block';
             fid1_.style.borderColor = 'red';

            numIcon1.style.background = 'red';
        numIcon1.style.color = 'white';
        numIcon1.innerText = '!';
        }
        else if(fid2 === ""){
            err2.style.display = 'block';
            fid2_.style.borderColor = 'red';

            numIcon1.style.background = 'red';
        numIcon1.style.color = 'white';
        numIcon1.innerText = '!';
        }
        else if(fid3 === ""){
            err3.style.display = 'block';
            fid3_.style.borderColor = 'red';

            numIcon1.style.background = 'red';
        numIcon1.style.color = 'white';
        numIcon1.innerText = '!';
        }
        else{
            numIcon1.innerText = '1';
            numIcon1.style.background = 'rgba(2, 2, 86, 0)';

            err1.style.display = 'none'
            err2.style.display = 'none'
            err3.style.display = 'none'
           
            fid3_.style.borderColor = 'rgba(205, 201, 201, 0.607)';
    fid2_.style.borderColor = 'rgba(205, 201, 201, 0.607)';
    fid1_.style.borderColor = 'rgba(205, 201, 201, 0.607)';
           
            // back buttons condition
 
    typBk1.style.display = 'block';
    typBk2.style.display = 'none';
    typBk3.style.display = 'none';

    // next buttons condition

    typBt2.style.display = 'none';
    typBt3.style.display = 'block';
    typBt4.style.display = 'none';
    typBt5.style.display = 'none';

    numIcon1.innerText = '1';

    numIcon2.style.background = 'rgb(191, 247, 247)';
    numIcon2.style.color = 'black';
    numIcon2.innerText = '2';
    numIcon1.style.background = 'rgba(2, 2, 86, 0)';
    numIcon1.style.color = 'white';
    numIcon3.style.background = 'rgba(2, 2, 86, 0)';
    numIcon3.style.color = 'white';
    numIcon4.style.background = 'rgba(2, 2, 86, 0)';
    numIcon4.style.color = 'white';
            

    disDataNum2.style.display = 'block';
    disDataNum1.style.display = 'none';
    disDataNum3.style.display = 'none';
    disDataNum4.style.display = 'none';
    disDataNum5.style.display = 'none';
        }

}

//plan selection page

function selectPlanA(){
   
    let arx = document.querySelector('.arx');
    let adv = document.querySelector('.adv');
    let pro = document.querySelector('.pro');

    arx.style.border = '2px solid blue';
    arx.style.opacity = '0.5';
    adv.style.border = '2px solid rgba(192, 192, 192, 0.434)';
    adv.style.opacity = '1';
    pro.style.border = '2px solid rgba(192, 192, 192, 0.434)';
    pro.style.opacity = '1';

}
function selectPlanB(){

    let arx = document.querySelector('.arx');
let adv = document.querySelector('.adv');
let pro = document.querySelector('.pro');
   
    arx.style.border = '2px solid rgba(192, 192, 192, 0.434)';
    arx.style.opacity = '1';
    adv.style.border = '2px solid blue';
    adv.style.opacity = '0.5';
    pro.style.border = '2px solid rgba(192, 192, 192, 0.434)';
    pro.style.opacity = '1';
}
function selectPlanC(){

    let arx = document.querySelector('.arx');
let adv = document.querySelector('.adv');
let pro = document.querySelector('.pro');
   
    arx.style.border = '2px solid rgba(192, 192, 192, 0.434)';
    arx.style.opacity = '1';
    adv.style.border = '2px solid rgba(192, 192, 192, 0.434)';
    adv.style.opacity = '1';
    pro.style.border = '2px solid blue';
    pro.style.opacity = '0.5';
}

function monthly(){
    let mont = document.querySelector('.plan_type_cost1');
    let yer = document.querySelector('.plan_type_cost2');
    let montB = document.querySelector('.plan_type_cost1_B');
    let yerB = document.querySelector('.plan_type_cost2_B');
    let montC = document.querySelector('.plan_type_cost1_C');
    let yerC = document.querySelector('.plan_type_cost2_C');
    let fmri = document.querySelector('.fmri');
    let fmriB = document.querySelector('.fmriB');
    let fmriC = document.querySelector('.fmriC');

    var mon_S3 = document.querySelector('.monly');
    var yer_S3 = document.querySelector('.yly');
    var monB_S3 = document.querySelector('.monlyB');
    var yerB_S3 = document.querySelector('.ylyB');
    var monC_S3 = document.querySelector('.monlyC');
    var yerC_S3 = document.querySelector('.ylyC');
    
    yer.style.display = 'none';
    fmri.style.display = 'none';
    mont.style.display = 'block';

    yerB.style.display = 'none';
    fmriB.style.display = 'none';
    montB.style.display = 'block';

    yerC.style.display = 'none';
    fmriC.style.display = 'none';
    montC.style.display = 'block';

    yer_S3.style.display = 'none';
    mon_S3.style.display = 'block';

    yerB_S3.style.display = 'none';
    monB_S3.style.display = 'block';

    yerC_S3.style.display = 'none';
    monC_S3.style.display = 'block';
}
function yearly(){
    let mont = document.querySelector('.plan_type_cost1');
    let yer = document.querySelector('.plan_type_cost2')
    let montB = document.querySelector('.plan_type_cost1_B');
    let yerB = document.querySelector('.plan_type_cost2_B')
    let montC = document.querySelector('.plan_type_cost1_C');
    let yerC = document.querySelector('.plan_type_cost2_C')
    let fmri = document.querySelector('.fmri');
    let fmriB = document.querySelector('.fmriB');
    let fmriC = document.querySelector('.fmriC');

    var mon_S3 = document.querySelector('.monly');
    var yer_S3 = document.querySelector('.yly');
    var monB_S3 = document.querySelector('.monlyB');
    var yerB_S3 = document.querySelector('.ylyB');
    var monC_S3 = document.querySelector('.monlyC');
    var yerC_S3 = document.querySelector('.ylyC');


    yer.style.display = 'block';
    fmri.style.display = 'block';
    mont.style.display = 'none';

    yerB.style.display = 'block';
    fmriB.style.display = 'block';
    montB.style.display = 'none';

    yerC.style.display = 'block';
    fmriC.style.display = 'block';
    montC.style.display = 'none';

    yer_S3.style.display = 'block';
    mon_S3.style.display = 'none';

    yerB_S3.style.display = 'block';
    monB_S3.style.display = 'none';

    yerC_S3.style.display = 'block';
    monC_S3.style.display = 'none';
}

//step two page js ends here here

//step three page js starts here

function stepThree(){
    var numIcon2 = document.querySelector('.ab2_2');
    var numIcon3 = document.querySelector('.ab3_3');
    var numIcon4 = document.querySelector('.ab4_4');
    var numIcon1 = document.querySelector('.ab1_1');
    var disDataNum1 = document.querySelector('.displayed_data1');
    var disDataNum2 = document.querySelector('.displayed_data2');
    var disDataNum3 = document.querySelector('.displayed_data3');
    var disDataNum4 = document.querySelector('.displayed_data4');
    var disDataNum5 = document.querySelector('.displayed_data5');
    //var others = document.querySelector('');

//if plan isn't selected

var arx = document.querySelector('.arx');
    var adv = document.querySelector('.adv');
    var pro = document.querySelector('.pro');

    //////////////////////////////////////////////////////////////////////////////

    //back buttons
    var typBk1 = document.querySelector('.btn_back2');
    var typBk2 = document.querySelector('.btn_back3');
    var typBk3 = document.querySelector('.btn_back4');

    //next buttons
    var typBt2 = document.querySelector('.nxtbtn1');
    var typBt3 = document.querySelector('.nxtbtn2');
    var typBt4 = document.querySelector('.nxtbtn3');
    var typBt5 = document.querySelector('.nxtbtn4');

    if(arx.style.border !== '2px solid blue' && adv.style.border !== '2px solid blue' && pro.style.border !== '2px solid blue'){
        numIcon2.style.background = 'red';
        numIcon2.style.color = 'white';
        numIcon2.innerText = '!';
      
    }
    else{

    // back buttons condition
 
    typBk1.style.display = 'none';
    typBk2.style.display = 'block';
    typBk3.style.display = 'none';

    // next buttons condition

    typBt2.style.display = 'none';
    typBt3.style.display = 'none';
    typBt4.style.display = 'block';
    typBt5.style.display = 'none';


/////////////////////////////////////////////////////////////////////
  

    numIcon2.style.background = 'rgba(2, 2, 86, 0)';
    numIcon2.style.color = 'white';
    numIcon1.style.background = 'rgba(2, 2, 86, 0)';
    numIcon1.style.color = 'white';
    numIcon3.style.background = 'rgb(191, 247, 247)';
    numIcon3.style.color = 'black';
    numIcon4.style.background = 'rgba(2, 2, 86, 0)';
    numIcon4.style.color = 'white';

    disDataNum2.style.display = 'none';
    disDataNum1.style.display = 'none';
    disDataNum3.style.display = 'block';
    disDataNum4.style.display = 'none';
    disDataNum5.style.display = 'none';
    }
    

}

 function pick_adons1(){
let chbx1 = document.getElementById('chbx1');
let adons1 = document.querySelector('.on_ser');
let chbx2 = document.getElementById('chbx2');
let adons2 = document.querySelector('.lar_stor');
let chbx3 = document.getElementById('chbx3');
let adons3 = document.querySelector('.cust_pro');

if(chbx1.checked == true){
        adons1.style.borderColor = 'blue';
        adons1.style.backgroundColor = 'rgba(4, 45, 45, 0.033)';
    }
    else if(chbx1.checked == false){
        adons1.style.borderColor = 'rgba(205, 201, 201, 0.607)';
        adons1.style.backgroundColor = '#ffffff';
       
    }


}
function pick_adons2(){
    let chbx1 = document.getElementById('chbx1');
    let adons1 = document.querySelector('.on_ser');
    let chbx2 = document.getElementById('chbx2');
    let adons2 = document.querySelector('.lar_stor');
    let chbx3 = document.getElementById('chbx3');
    let adons3 = document.querySelector('.cust_pro');
    
    if(chbx2.checked == true){
            adons2.style.borderColor = 'blue';
            adons2.style.backgroundColor = 'rgba(4, 45, 45, 0.033)';
        }
        else{
            adons2.style.borderColor = 'rgba(205, 201, 201, 0.607)';
            adons2.style.backgroundColor = '#ffffff';
        }
    
    
    }
    function pick_adons3(){
        let chbx1 = document.getElementById('chbx1');
        let adons1 = document.querySelector('.on_ser');
        let chbx2 = document.getElementById('chbx2');
        let adons2 = document.querySelector('.lar_stor');
        let chbx3 = document.getElementById('chbx3');
        let adons3 = document.querySelector('.cust_pro');
        
        if(chbx3.checked == true){
                adons3.style.borderColor = 'blue';
                adons3.style.backgroundColor = 'rgba(4, 45, 45, 0.033)';
            }
            else{
                adons3.style.borderColor = 'rgba(205, 201, 201, 0.607)';
                adons3.style.backgroundColor = '#ffffff';
            }
        
        
        }

//step three page js ends here here

//step four page js starts here

function stepFour(){
    
    var numIcon2 = document.querySelector('.ab2_2');
    var numIcon3 = document.querySelector('.ab3_3');
    var numIcon4 = document.querySelector('.ab4_4');
    var numIcon1 = document.querySelector('.ab1_1');
    var disDataNum1 = document.querySelector('.displayed_data1');
    var disDataNum2 = document.querySelector('.displayed_data2');
    var disDataNum3 = document.querySelector('.displayed_data3');
    var disDataNum4 = document.querySelector('.displayed_data4');
    var disDataNum5 = document.querySelector('.displayed_data5');
    //var others = document.querySelector('');

//finishing up //////////////////////////////////////////////
 
var selectedPlan = document.querySelector('.setd_plan');
var selectedPlanCost = document.querySelector('.setd_plan_cost');
var whichPer = document.querySelector('.which_per');
var whichPer1 = document.querySelector('.which_per1');
var whichPer2= document.querySelector('.which_per2');
var whichPer3 = document.querySelector('.which_per3');
var whichPer4 = document.querySelector('.which_per4');

var selectedOns1 = document.querySelector('.setd_ons1');
var selectedOns2 = document.querySelector('.setd_ons2');
var selectedOns3 = document.querySelector('.setd_ons3');

var selectedOnsPlace = document.querySelector('.setd_ons_place');
var selectedOns1Place = document.querySelector('.setd_ons_place1');
var selectedOns2Place = document.querySelector('.setd_ons_place2');
var selectedOns3Place = document.querySelector('.setd_ons_place3');

var selectedOns1Cost = document.querySelector('.setd_ons1_cost');
var selectedOns2Cost = document.querySelector('.setd_ons2_cost');
var selectedOns3Cost = document.querySelector('.setd_ons3_cost');
var timly = document.querySelector('.timly');
var perType = document.querySelector('.per_typ');
var totalCost = document.querySelector('.ttl_cost');

var Total_Cost;


/////////////////////////////////////////////////////////////

// SELECTED COSTS

let yer = document.querySelector('.plan_type_cost2');
// Selected plans    /////////////////////////////////////////

var arx = document.querySelector('.arx');
    var adv = document.querySelector('.adv');
    var pro = document.querySelector('.pro');

    var sePlan;
    var sePlanY;
    var sePlanM;
   

/////////////////////////////////////////////////////
    
// Selected add-ons  /////////////////////////////////////

var chbx1 = document.getElementById('chbx1');
var chbx2 = document.getElementById('chbx2');
var chbx3 = document.getElementById('chbx3');

var seAddOns;
var seAddOnsY;
var seAddOnsM;


//onerror messages

var fid1 = document.getElementById('name').value;
var fid1_ = document.querySelector('.name_fld');
var fid2 = document.getElementById('email').value;
var fid2_ = document.querySelector('.email_fld');
var fid3 = document.getElementById('pnumer').value;
var fid3_ = document.querySelector('.pnumer_fld');

  var err1 = document.querySelector('.onErr1');
  var err2 = document.querySelector('.onErr2');
  var err3 = document.querySelector('.onErr3');


    //////////////////////////////////////////////////////////////////////////////

    //back buttons
    var typBk1 = document.querySelector('.btn_back2');
    var typBk2 = document.querySelector('.btn_back3');
    var typBk3 = document.querySelector('.btn_back4');

    //next buttons
    var typBt2 = document.querySelector('.nxtbtn1');
    var typBt3 = document.querySelector('.nxtbtn2');
    var typBt4 = document.querySelector('.nxtbtn3');
    var typBt5 = document.querySelector('.nxtbtn4');


    ///////////////////////////////

    //on confirming conditions

    if(fid1 === ""){
        numIcon1.style.background = 'red';
    numIcon1.style.color = 'white';
    numIcon1.innerText = '!';

    err1.style.display = 'block';
    fid1_.style.borderColor = 'red';
    }
    else if(fid2 === ""){
        numIcon1.style.background = 'red';
    numIcon1.style.color = 'white';
    numIcon1.innerText = '!';
    
    err2.style.display = 'block';
    fid2_.style.borderColor = 'red';
    }
    else if(fid3 === ""){
        numIcon1.style.background = 'red';
        numIcon1.style.color = 'white';
        numIcon1.innerText = '!';

        err3.style.display = 'block';
    fid3_.style.borderColor = 'red';
    }
    else if(arx.style.border !== '2px solid blue' && adv.style.border !== '2px solid blue' && pro.style.border !== '2px solid blue'){
        numIcon2.style.background = 'red';
        numIcon2.style.color = 'white';
        numIcon2.innerText = '!';
        
        err1.style.display = 'none';
    err2.style.display = 'none';
    err3.style.display = 'none';
    
    fid3_.style.borderColor = 'rgba(205, 201, 201, 0.607)';
    fid2_.style.borderColor = 'rgba(205, 201, 201, 0.607)';
    fid1_.style.borderColor = 'rgba(205, 201, 201, 0.607)';

    
    }
    else{
        numIcon1.innerText = '1';
        numIcon2.innerText = '2';
        numIcon1.style.background = 'rgba(2, 2, 86, 0)';
        numIcon2.style.background = 'rgba(2, 2, 86, 0)';
        
    fid3_.style.borderColor = 'rgba(205, 201, 201, 0.607)';
    fid2_.style.borderColor = 'rgba(205, 201, 201, 0.607)';
    fid1_.style.borderColor = 'rgba(205, 201, 201, 0.607)';

    err1.style.display = 'none';
    err2.style.display = 'none';
    err3.style.display = 'none';
    ////////////////////////////////////////

     // checking plan selection
    
     if(arx.style.opacity == '0.5'){
        selectedPlan.innerText = 'Arcade';
        sePlanY = 90;
        sePlanM = 9;
       
        if(yer.style.display != 'block'){
            selectedPlanCost.innerText = '9';
        }
        else{
            selectedPlanCost.innerText = '90';
        }
    }
    else if(adv.style.opacity == '0.5'){
        selectedPlan.innerText = 'Advanced';
        sePlanY = 120;
        sePlanM = 12;

        if(yer.style.display != 'block'){
            selectedPlanCost.innerText = '12';
        }
        else{
            selectedPlanCost.innerText = '120';
        }
    }
    else if(pro.style.opacity == '0.5'){
        selectedPlan.innerText = 'Pro';
        sePlanY = 150;
        sePlanM = 15;

        if(yer.style.display != 'block'){
            selectedPlanCost.innerText = '15';
        }
        else{
            selectedPlanCost.innerText = '150';
        }
    }
    else{
        sePlanY = 0;
        sePlanM = 0;
    }
//////////////////////////////////////////////////////////
//addons selection checking

if(chbx1.checked == true && chbx2.checked == true && chbx3.checked == true){
    seAddOnsY = 50;
    seAddOnsM = 5;
    selectedOns1.innerText = 'Online service';
    selectedOns2.innerText = 'Largest storage';
    selectedOns3.innerText = 'Customizable profile';

if(yer.style.display != 'block'){
    selectedOns1Cost.innerText = '1';
    selectedOns2Cost.innerText = '2';
    selectedOns3Cost.innerText = '2';
    selectedOnsPlace.style.display = 'block';
    selectedOns1Place.style.display = 'block';
    selectedOns2Place.style.display = 'block';
    selectedOns3Place.style.display = 'block';

}
else{
    selectedOns1Cost.innerText = '10';
    selectedOns2Cost.innerText = '20';
    selectedOns3Cost.innerText = '20';
    selectedOnsPlace.style.display = 'block';
    selectedOns1Place.style.display = 'block';
    selectedOns2Place.style.display = 'block';
    selectedOns3Place.style.display = 'block';
}

}
else if(chbx1.checked == true && chbx2.checked == true ){
    seAddOnsY = 30;
    seAddOnsM = 3;
    selectedOns1.innerText = 'Online service';
    selectedOns2.innerText = 'Largest storage';

    selectedOns3Place.style.display = 'none';
        selectedOns1Place.style.display = 'block';
        selectedOns2Place.style.display = 'block';

    if(yer.style.display != 'block'){
        selectedOns1Cost.innerText = '1';
        selectedOns2Cost.innerText = '2';
        selectedOns3Cost.innerText = '';
        selectedOns3.innerText = '';   
    }
    else{
        selectedOns1Cost.innerText = '10';
        selectedOns2Cost.innerText = '20';
        selectedOns3Cost.innerText = '';
        selectedOns3.innerText = '';
    }
}
else if(chbx1.checked == true && chbx3.checked == true ){

    seAddOnsY = 30;
    seAddOnsM = 3;
    selectedOns1.innerText = 'Online service';
    selectedOns3.innerText = 'Customizable profile';

    selectedOns2Place.style.display = 'none';
    selectedOns1Place.style.display = 'block';
    selectedOns3Place.style.display = 'block';

    if(yer.style.display != 'block'){
        selectedOns1Cost.innerText = '1';
        selectedOns2Cost.innerText = '';
        selectedOns2.innerText = '';
        selectedOns3Cost.innerText = '2';
    }
    else{
        selectedOns1Cost.innerText = '10';
        selectedOns3Cost.innerText = '20';
        selectedOns2Cost.innerText = '';
        selectedOns2.innerText = '';
    }

}

else if(chbx2.checked == true && chbx3.checked == true){
    seAddOnsY = 40;
    seAddOnsM = 4;
    selectedOns2.innerText = 'Largest storage';
    selectedOns3.innerText = 'Customizable profile';

    selectedOns1Place.style.display = 'none';
    selectedOns3Place.style.display = 'block';
    selectedOns2Place.style.display = 'block';

    if(yer.style.display != 'block'){
        selectedOns1.innerText = '';
        selectedOns1Cost.innerText = '';
        selectedOns2Cost.innerText = '2';
        selectedOns3Cost.innerText = '2';
    }
    else{
        selectedOns1Cost.innerText = '';
        selectedOns1.innerText = '';
        selectedOns2Cost.innerText = '20';
        selectedOns3Cost.innerText = '20';
    }
}

else if(chbx1.checked == true){
    seAddOnsY = 10;
    seAddOnsM = 1;
    selectedOns1.innerText = 'Online service';

    selectedOns2Place.style.display = 'none';
        selectedOns3Place.style.display = 'none';
        selectedOns1Place.style.display = 'block';

    if(yer.style.display != 'block'){
        selectedOns1Cost.innerText = '1';
        selectedOns2Cost.innerText = '';
        selectedOns3Cost.innerText = '';
        selectedOns2.innerText = '';
        selectedOns3.innerText = '';
    }
    else{
        selectedOns1Cost.innerText = '10';
        selectedOns2Cost.innerText = '';
        selectedOns3Cost.innerText = '';
        selectedOns2.innerText = '';
        selectedOns3.innerText = '';
    }
}

else if(chbx2.checked == true){
    seAddOnsY = 20;
    seAddOnsM = 2;
    selectedOns2.innerText = 'Largest storage';

    selectedOns3Place.style.display = 'none';
    selectedOns1Place.style.display = 'none';
    selectedOns2Place.style.display = 'block';

    if(yer.style.display != 'block'){
        selectedOns2Cost.innerText = '2';
        selectedOns1Cost.innerText = '';
        selectedOns3Cost.innerText = '';
        selectedOns1.innerText = '';
        selectedOns3.innerText = '';
    }
    else{
        selectedOns1.innerText = '';
        selectedOns3.innerText = '';
        selectedOns2Cost.innerText = '20';
        selectedOns1Cost.innerText = '';
        selectedOns3Cost.innerText = '';
    }

}


else if(chbx3.checked == true){
    seAddOnsY = 20;
    seAddOnsM = 2;
    selectedOns1.innerText = 'Customizable profile';

    selectedOns2Place.style.display = 'none';
        selectedOns3Place.style.display = 'block';
        selectedOns1Place.style.display = 'none';

    if(yer.style.display != 'block'){
        selectedOns3Cost.innerText = '2';
        selectedOns2Cost.innerText = '';
        selectedOns1Cost.innerText = '';
        selectedOns2.innerText = '';
        selectedOns1.innerText = '';
    }
    else{
        selectedOns3Cost.innerText = '20';
        selectedOns2Cost.innerText = '';
        selectedOns1Cost.innerText = '';
        selectedOns2.innerText = '';
        selectedOns1.innerText = '';
    }
}

else{
    seAddOnsY = 0;
    seAddOnsM = 0;

        selectedOns1Cost.innerText = '';
        selectedOns2Cost.innerText = '';
        selectedOns3Cost.innerText = '';
        selectedOns1.innerText = '';
        selectedOns2.innerText = '';
        selectedOns3.innerText = '';
        selectedOnsPlace.style.display = 'none';
        selectedOns1Place.style.display = 'none';
        selectedOns2Place.style.display = 'none';
        selectedOns3Place.style.display = 'none';
        

}
/////////////////////////////////////////////////////

    // back buttons condition
 
    typBk1.style.display = 'none';
    typBk2.style.display = 'none';
    typBk3.style.display = 'block';

    // next buttons condition

    typBt2.style.display = 'none';
    typBt3.style.display = 'none';
    typBt4.style.display = 'none';
    typBt5.style.display = 'block';


/////////////////////////////////////////////////////////////////////
  

    numIcon2.style.background = 'rgba(2, 2, 86, 0)';
    numIcon2.style.color = 'white';
    numIcon1.style.background = 'rgba(2, 2, 86, 0)';
    numIcon1.style.color = 'white';
    numIcon3.style.background = 'rgba(2, 2, 86, 0)';
    numIcon3.style.color = 'white';
    numIcon4.style.background = 'rgb(191, 247, 247)';
    numIcon4.style.color = 'black';


    disDataNum2.style.display = 'none';
    disDataNum1.style.display = 'none';
    disDataNum3.style.display = 'none';
    disDataNum4.style.display = 'block';
    disDataNum5.style.display = 'none';
///////////////////////////////////////////////////////////


    
    

//finishing up results
/// per month or per year  ///////

if(yer.style.display != 'block'){
    seAddOns = seAddOnsM;
    sePlan = sePlanM;
    whichPer.innerText = 'mo';
    whichPer1.innerText = 'mo';
    whichPer2.innerText = 'mo';
    whichPer3.innerText = 'mo';
    whichPer4.innerText = 'mo';

    perType.innerText = 'month';
    timly.innerText = 'Monthly';
}
else if(yer.style.display == 'block'){
    seAddOns = seAddOnsY;
    sePlan = sePlanY
    whichPer.innerText = 'yr';
    whichPer1.innerText = 'yr';
    whichPer2.innerText = 'yr';
    whichPer3.innerText = 'yr';
    whichPer4.innerText = 'yr';

    perType.innerText = 'year';
    timly.innerText = 'Yearly';
}

/////////////////////////////////////
  
Total_Cost = seAddOns + sePlan;

totalCost.innerText = Total_Cost;

}
}

//step four page js ends here

//Step five page js starts here

function stepFive(){

    var numIcon2 = document.querySelector('.ab2_2');
    var numIcon3 = document.querySelector('.ab3_3');
    var numIcon4 = document.querySelector('.ab4_4');
    var numIcon1 = document.querySelector('.ab1_1');
    var disDataNum1 = document.querySelector('.displayed_data1');
    var disDataNum2 = document.querySelector('.displayed_data2');
    var disDataNum3 = document.querySelector('.displayed_data3');
    var disDataNum4 = document.querySelector('.displayed_data4');
    var disDataNum5 = document.querySelector('.displayed_data5');

    ////////////////////////////////////////////////////////////

    //back buttons
    var typBk1 = document.querySelector('.btn_back2');
    var typBk2 = document.querySelector('.btn_back3');
    var typBk3 = document.querySelector('.btn_back4');

    //next buttons
    var typBt2 = document.querySelector('.nxtbtn1');
    var typBt3 = document.querySelector('.nxtbtn2');
    var typBt4 = document.querySelector('.nxtbtn3');
    var typBt5 = document.querySelector('.nxtbtn4');


/////////////////////////////////////////////////////////////////////
  var sidebar1 = document.querySelector('.side_bar');
  var sidebar2 = document.querySelector('.side_bar2');


    

    if( numIcon1.innerText != '!' && numIcon2.innerText != '!' ){

         // back buttons condition
 
    typBk1.style.display = 'none';
    typBk2.style.display = 'none';
    typBk3.style.display = 'none';

    // next buttons condition

    typBt2.style.display = 'none';
    typBt3.style.display = 'none';
    typBt4.style.display = 'none';
    typBt5.style.display = 'none';

    numIcon2.style.background = 'rgba(2, 2, 86, 0)';
    numIcon2.style.color = 'white';
    numIcon1.style.background = 'rgba(2, 2, 86, 0)';
    numIcon1.style.color = 'white';
    numIcon3.style.background = 'rgba(2, 2, 86, 0)';
    numIcon3.style.color = 'white';
    numIcon4.style.background = 'rgb(191, 247, 247)';
    numIcon4.style.color = 'black';

    disDataNum2.style.display = 'none';
    disDataNum1.style.display = 'none';
    disDataNum3.style.display = 'none';
    disDataNum4.style.display = 'none';
    disDataNum5.style.display = 'block';
    sidebar2.style.display = 'block';
    sidebar1.style.display = 'none';
    
    }

}

//Step five page js ends here
    
