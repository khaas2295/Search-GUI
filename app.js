
var caseNum = 1;


    var target;
    var source;
    var customerName = document.getElementById("cName");
    var isCase = document.getElementById("case");
    var isIssue = document.getElementById("issue");
    var startDate = document.getElementById("dateStart");
    var endDate = document.getElementById("dateEnd");
    var name = document.getElementById("name");
    var searchinput = document.getElementById("searchfield");
    var whatbox = document.getElementById("box");

function submitted(){
    
    //LOGS TO THE CONSOLE FOR TROUBLESHOOTING
    
    for(var i=1; i<19 ; i++){
    var num = i.toString();
    var sRelease = document.getElementById("s7."+num);
    var tRelease = document.getElementById("t7."+num);
    if (sRelease.checked === true) {
        console.log("Source release: 7."+num);
        
        source = "7."+num;
    } 
    if (tRelease.checked === true) {
        console.log("Target release: 7."+num);
       
        target = "7."+num;
    } 
    var info2 = " " + source + " to " + target;
}



    console.log(customerName.value);
    if(isCase.checked ===true){
        console.log("true");
        var case1 = true;
    }else{
        console.log("false");
        var case1 = false;
    }

    if(isIssue.checked ===true){
        console.log("true");
        var issue1= true;
    }else{
        console.log("false");
        var issue1=false;
    }
  console.log(startDate.value);
  console.log(endDate.value);
  console.log(name.value);
  
        for(var i=1 ; i<80 ; i++){
            var num = i.toString();
            
            var whatbox = document.getElementById(num);

            if (whatbox.checked === true) {
                console.log("~~~~~~~~~~~" + num);

                var info8 =whatbox.id;
            } 
        }
       
       
        
    


  var info0 =caseNum
  var info1 =customerName.value
  var info3 =case1
  var info4 =issue1
  var info5 =startDate.value + " to " + endDate.value
  var info6 =searchinput.value
  var info7 =name.value
  

  

  var jsonObj = { 
    "SourceRelease":source,
    "TargetRelease":target, 
    "CustomerName":customerName.value, 
    "Case":case1, "Issue":issue1, 
    "StartDate":startDate.value, 
    "EndDate":endDate.value, 
    "Name":name.value, 
    "Search":searchinput.value,
    "Box":whatbox.value
   };
 
   var myJSON = JSON.stringify(jsonObj);
   console.log(myJSON);

  var table = document.getElementById("maintable");

  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");

  var txt1 = document.createTextNode(info1);
  var txt2 = document.createTextNode(info2);
  var txt3 = document.createTextNode(info3);
  var txt4 = document.createTextNode(info4);
  var txt5 = document.createTextNode(info5);
  var txt6 = document.createTextNode(info6);
  var txt7 = document.createTextNode(info7);
  var txt8 = document.createTextNode(info8);

  var button = document.createElement('button');
  button.innerHTML = info0;
  button.setAttribute('id',"push-button"+caseNum);
  button.addEventListener ("click", function() {
    
    var fef1 = this.id;
    localStorage.setItem('kyy1', fef1);
    localStorage.setItem('kyy2', myJSON);
    window.location.href = "resultpage.html";
  });
  button.style.backgroundColor="rgb(117, 185, 248)";
  button.style.width = "60px";
  button.style.marginLeft = "5px";
  button.classList="btn btn-primary";
  button.type = "button";
  
  
  if(caseNum%2===0){
    button.style.backgroundColor="rgb(117, 185, 248)";
  }else{
      
    button.style.backgroundColor="rgb(37, 149, 253)";
  }
  td8.style.textAlign = "center";

  td8.appendChild(button);td8.style.width = "3%";
  td1.appendChild(txt1);td1.style.width = "14%";
  td9.appendChild(txt8);td9.style.width = "10%";
  td2.appendChild(txt2);td2.style.width = "11%";
  td3.appendChild(txt3);td3.style.width = "6%";
  td4.appendChild(txt4);td4.style.width = "6%";
  td5.appendChild(txt5);td5.style.width = "14%";
  td7.appendChild(txt7);td7.style.width = "14%";
  td6.appendChild(txt6);td6.style.width = "31%";

  tr.appendChild(td8);
  tr.appendChild(td1);
  tr.appendChild(td9);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td7);
  tr.appendChild(td6);

  if(caseNum%2===0){
    tr.style.backgroundColor = "rgb(37, 149, 253)";
  }else{
    tr.style.backgroundColor = "rgb(117, 185, 248)";
  }

  table.appendChild(tr);



  
    

  caseNum++;
}

function test(sf){
  var bf = localStorage.getItem("kyy1");
  var bf2 = localStorage.getItem("kyy2");
  console.log(bf);
  console.log(bf2);
}

function change(){

    for(var i=1; i<19 ; i++){
        var num = i.toString();
        var sRelease = document.getElementById("s7."+num);
        var tRelease = document.getElementById("t7."+num);
        if (sRelease.checked === true) {
            source = "7."+num;
        } 
        if (tRelease.checked === true) {
            target = "7."+num;
        } 
    }

    console.log(source);
    document.getElementById('s1').innerHTML =source;
   
}
function change2(){

    for(var i=1; i<19 ; i++){
        var num = i.toString();
        var sRelease = document.getElementById("s7."+num);
        var tRelease = document.getElementById("t7."+num);
        if (sRelease.checked === true) {
            source = "7."+num;
        } 
        if (tRelease.checked === true) {

            target = "7."+num;
        } 
    }

    console.log(target);
    document.getElementById('t1').innerHTML =target;
   
}

function goBack() {
    console.log("test");
    window.history.back();
}

function newWindow(){
          var content1 = localStorage.getItem("kyy1");
          var content2 = localStorage.getItem("kyy2");
          var contentParsed = JSON.parse(content2);
          var thisList = document.getElementById("result2");



          var listobj = document.createElement('li');
          listobj.appendChild(document.createTextNode(content1));

          var listobj2 = document.createElement('li');
          listobj2.appendChild(document.createTextNode(contentParsed.SourceRelease));

          var listobj3 = document.createElement('li');
          listobj3.appendChild(document.createTextNode(contentParsed.TargetRelease));

          var listobj4 = document.createElement('li');
          listobj4.appendChild(document.createTextNode(contentParsed.CustomerName));

          var listobj5 = document.createElement('li');
          listobj5.appendChild(document.createTextNode(contentParsed.Case));

          var listobj6 = document.createElement('li');
          listobj6.appendChild(document.createTextNode(contentParsed.Issue));

          var listobj7 = document.createElement('li');
          listobj7.appendChild(document.createTextNode(contentParsed.StartDate));

          var listobj8 = document.createElement('li');
          listobj8.appendChild(document.createTextNode(contentParsed.EndDate));

          var listobj9 = document.createElement('li');
          listobj9.appendChild(document.createTextNode(contentParsed.Search));

          var listobj10 = document.createElement('li');
          listobj10.appendChild(document.createTextNode(contentParsed.Name));

          thisList.appendChild(listobj);
          thisList.appendChild(listobj2);
          thisList.appendChild(listobj3);
          thisList.appendChild(listobj4);
          thisList.appendChild(listobj5);
          thisList.appendChild(listobj6);
          thisList.appendChild(listobj7);
          thisList.appendChild(listobj8);
          thisList.appendChild(listobj10);
          thisList.appendChild(listobj9);
}