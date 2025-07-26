touch()
function touch() {
  var tpoints1 = 0;
  var tpointlim= 80;
  var tpointbign= 50;
  var sbar =document.querySelector('#sidebar');
  var sbarc =document.querySelector('#sidebarc');
  document.addEventListener('touchstart',e=>{
   
    [...e.changedTouches].forEach(touch=>{
      if (touch.pageX<tpointlim) {
        console.log(touch.pageX);
        console.log(touch.pageY);
        console.log('hello');
        tpoints1 = 1;
        console.log(tpoints1);
      }
    })
  })
 
    document.addEventListener('touchmove', e => {
            [...e.changedTouches].forEach(touch => {
              if (touch.pageX>tpointlim&&tpoints1>0) {
        console.log('moved');
        
          tpoints1 = 0
        //  console.log(opensm)
        opensm()
        function opensm() {
          sbar.classList.remove('sbclose');
          sbar.classList.add('sbopen');
          sbarc.classList.remove('sbclose');
          sbarc.classList.add('opbutbo');
        }
        
        console.log(tpoints1)
            }
            if (touch.pageX<tpointbign&&tpoints1<1) {
        console.log('moved');
        
          tpoints1 = 0
        //  console.log(opensm)
        closesm()
        function closesm() {
          
          sbar.classList.remove('sbopen');
          sbar.classList.add('sbclose');
          sbarc.classList.remove('sbopen');
          sbarc.classList.add('sbclose');
        }
        
        console.log(tpoints1)
            }
      })
    })
 
  
}
var tutorial=localStorage.getItem('tutorialdone');
localStorage.setItem('tutorialdone', JSON.parse(tutorial));
 if (tutorial=='null') {
  var tutorial=0;
}
if (tutorial == 0 && movement == 1) {
  example1.style.visibility = 'visible';
  example2.style.visibility = 'hidden'

  example3.style.visibility = 'hidden'

  example4.style.visibility = 'hidden'

  example5.style.visibility = 'hidden'

  example6.style.visibility = 'hidden'

  example7.style.visibility = 'hidden'
}
  
 localStorage.getItem('tutorialdone');
 


  var movement = 1;
  var nextbutton = document.getElementById('nextbtn');
  var previousbutton = document.getElementById('previousbtn');
  nextbutton.style.visibility = 'hidden'
  previousbutton.style.visibility = 'hidden'
  //var tutorial = 0;
  console.log(movement);
  console.log(tutorial);
  if (tutorial == 1) {
    var tutorial = 1;
    localStorage.setItem('tutorialdone', JSON.parse(tutorial));
    nextbutton.style.visibility='hidden'
    previousbutton.style.visibility='hidden'
  }
    
  if (tutorial==0) {
    var tutorial = 0;
    localStorage.setItem('tutorialdone', JSON.parse(tutorial));
  previousbutton.style.visibility='visible'
  nextbutton.style.visibility='visible'
  }else{
    var tutorial = 1;
  }
  

  
var num= 0;
;







const itemsarray= localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];
const namesarray= localStorage.getItem("names")?JSON.parse(localStorage.getItem("names")):[];

//console.log(itemsarray);
//console.log(namesarray);
var num= 0;

document.querySelector("#enterbtn").addEventListener("click",()=>{
  
  
  const item = document.querySelector("#item")
  createItem(item)
  const name = document.querySelector("#name")
  createtitle(name)
  num += 1;
})
console.log(num)
var checked = 0;
function checked(checked){
  var pick= document.getElementById('pick');
  pick.style.background='green';
  pick.style.bordercolor='lime';
var gotten = document.getElementById('connection').value;
var prelink = document.getElementById('connection').value;
    if (gotten.value = 'text') {
      prelink = 'text';
      var checked = 5;
      console.log(gotten);
      contentToggle();
    }
    if (gotten.value = 'website') {
      prelink = 'web';
      var checked = 1;
      console.log(gotten);
      contentToggle();
    }
    if (gotten.value = 'e-mail') {
      var checked = 2;
      console.log(gotten);
      contentToggle();
    }
    if (gotten.value = 'phone') {
      var checked = 3;
      console.log(gotten);
      contentToggle();
    }
    if (gotten.value = 'sMS') {
      var checked = 4;
      console.log(gotten);
      contentToggle();
    }
}
var connection = document.querySelector('#connection');
connection.addEventListener("onload",()=>{
  var content = document.querySelector('#content');
  content.style.display = 'none';
})
connection.addEventListener("change",(checked)=>{
  var content = document.querySelector('#content');/*
  if (checked===1) {
    content.style.display='blue';
    console.log('blue');
    console.log(checked);
  }*/
  var gotten = document.getElementById('connection').value;
  switch (gotten) {
    case 'text':
      content.style.display = 'none';
      console.log(gotten)
    break;
    case 'sMS':
      content.style.display = 'flex';
      console.log(gotten)
      break;
    case 'website':
      content.style.display = 'none';
      console.log(gotten)
      break;
    case 'email':
      content.style.display = 'none';
      console.log(gotten)
      break;
    case 'phone':
      content.style.display = 'none';
      console.log(gotten)
      break;
    
  }
function contentToggle(gotten) {
  
}content.style.display='blue';
console.log('blue');
})



function createItem(item) {
  var gotten = document.getElementById('connection').value;
  console.log(gotten);
  switch (gotten) {
    case 'website':
      itemsarray.unshift("https://" + item.value +".com"+'\r\n')
      localStorage.setItem("items", JSON.stringify(itemsarray));
      location.reload();
      break;
      case 'e-mail':
        itemsarray.unshift("mailto:" + item.value+'\r\n')
        localStorage.setItem("items", JSON.stringify(itemsarray));
        location.reload();
        break;
      case 'phone':
      itemsarray.unshift("tel:" + item.value+'\r\n')
      localStorage.setItem("items", JSON.stringify(itemsarray));
      location.reload();
      break;
      case 'sMS':
        itemsarray.unshift("sms://" + item.value+"?body="+content.value+'\r\n')
        localStorage.setItem("items", JSON.stringify(itemsarray));
        location.reload();
        break;
      case'text':
        itemsarray.unshift(item.value+'\r\n')
        localStorage.setItem("items", JSON.stringify(itemsarray));
        location.reload();
        break;
      if (item.value==='\r\n') {
        item.value='empty';
      }
  }
    
  
  
}
function createtitle(name) {
  var gotten = document.getElementById('connection').value;
  switch (gotten) {
    case 'website':
      namesarray.unshift(name.value+'\r\n')
      localStorage.setItem("names", JSON.stringify(namesarray));
      location.reload();
      break;
    case 'e-mail':
      namesarray.unshift( name.value+'\r\n')
      localStorage.setItem("names", JSON.stringify(namesarray));
      location.reload();
      break;
    case 'phone':
      namesarray.unshift( name.value+'\r\n')
      localStorage.setItem("names", JSON.stringify(namesarray));
      location.reload();
      break;
    case 'sMS':
      namesarray.unshift(name.value+'\r\n')
      localStorage.setItem("names", JSON.stringify(namesarray));
      location.reload();
      break;
    case 'text':
      namesarray.unshift(name.value+'\r\n')
      localStorage.setItem("names", JSON.stringify(namesarray));
      location.reload();
      break;
   /*namesarray.unshift(name.value)
  localStorage.setItem("name3s", JSON.stringify(namesarray));
  location.reload();*/
}
}

/*function displayitems2(){

}*/
var i=3
itemidcont=itemsarray[i];
console.log(itemidcont)
itemid=JSON.stringify(itemsarray)
console.log(itemid.search(itemid[i]));


function displayitems() {
  
  let name = "";
  let item = "";
  for (let i=0,l= 0; i<itemsarray.length,l<namesarray.length; i++,l++) {
   item,name+=`<div style="display: flex;margin:0px;justify-content:flex-end;flex-ditection:row;box-shadow:0px -3px 0px white;border-radius:30px;background-color:white" class="names">
                  
                  <div class="inputcontroler2" style="display:flex;">
                     <textarea placeholder="no name inserted" disabled style="color: green; border:none; id="${namesarray[l]}" background:none;resize:none">${namesarray[l]}</textarea>
                     </div>
                  <div class="editcontroler2" style="display:flex;justify-content:flex-end;"margin:0px;>
                     <button class="editbutton2 item-namebtn"><img src="../resources /edit.png"style="width:50px; height:50px;padding:0px;"></button>
                     </div> 
   <div class = "updatecontroller2" >
   <button class="savebtn2 item-namebtn"type="submit"  ><img src="../resources /save.png"style="width:50px; height:50px;padding:0px;"</button> <button class = "canclebtn2 item-namebtn"
   type = "submit" > <img src="../resources /cancle.png"style="width:50px; height:50px;padding:0px;"</button> 
   </div> 
     </div>` +
     `<div class="items" style="
                      width:100%;box-shadow:0px 2.5px 0px grey;margin-bottom:10px;display:flex;justify-content:flex-end;border-bottom-width:5px;border-bottom-style:solid;
                      border-bottom-color:white; ">
   
                  <div class="inputcontroler" style="display:flex;">
                      <textarea style="padding:0;background-image:linear-gradient(to bottom right, white, white);border-style:solid;border-width:2px;border-color:green; resize: vertical;" id="${itemsarray[i].trim()+itemid[i]}" placeholder="no title inserted">${itemsarray[i]}</textarea>
                      </div>
                  <div class="editcontroler"style="display:flex;flex-direction: column;flex-wrap:wrap;justify-content:flex-end;">
                       <button class="editbutton item-namebtn"><img src="../resources /edit.png"style="width:50px; height:50px;padding:0px;"></button>
                       <button class="deletebutton item-namebtnhidden"><img src="../resources /trash.png"style="width:50px; height:50px;padding:0px;"</button>
                       </div>
                                   
                                     
                  <div class="updatecontroller" style="margin-right: 6px; display:none;flex-direction: column;flex-wrap:wrap;justify-content:flex-end; width:54px;">
                        <button class="savebtn item-namebtn"type="submit"  ><img src="../resources /save.png"style="width:50px; height:50px;padding:0px;"</button>
                        <button class="canclebtn item-namebtn"type="submit" ><img src="../resources /cancle.png"style="width:50px; height:50px;padding:0px;"></button>
                        
                        </div>
   
                   <div class="searchbuttons" style="display:flex;flex-direction:row;flex-wrap:wrap;margin-right:8px; width:50px;justify-content:flex-start;">              
                        <a target='_self' id="inappsearch" onclick="inappsearch()" href=""style="visibility:hidden;
                        position: absolute;"><button type="submit" class="item-namebtn"><img src="../resources /inappsearch.png"style="width:50px; height:50px;padding:0px;"></button></a>
                        <a target='blank' id="linking" onclick="searching()" href="" style="">
                        <button type="submit" class="item-namebtn" ><img src="../resources /search.png"style="width50px; height:50px;padding:0px;"></button></a>    
                        </div>
                  <div class="copydiv">
                        <button class="copybtn item-namebtn"type="submit" onclick="copybtn()"><img src="../resources /copy.png"style="width:50px; height:50px;padding:0px;"</button>
                        </div>               
                 </div>
                                     `
                                
document.querySelector("#savedLinks").innerHTML = item
document.querySelector("#savedNames").innerHTML = name
  }
  
            
  activateeditbtn2();
  activatesavebtn2();
  activatecanclebtn2();



  activatedeletebtn();
  activateeditbtn();
  activatesavebtn();
  activatecanclebtn();
  
  
  
  searching();
  inappsearch();
  downloadsearch();
  movebtn();
}

/*
for (var i = 0, picking =2 ; i<picking; i++) {
  function checked() {
    var gotten = document.getElementById('connection').value;
    var checked = 0;
    if (gotten.value = 'website') {
      var checked = 1;
      console.log(checked);
    }
    if (gotten.value = 'e-mail') {
      var checked = 2;
      console.log(checked);
    }
    if (gotten.value = 'phone') {
      var checked = 3;
      console.log(checked);
    }
    if (gotten.value = 'sMS') {
      var checked = 4;
      console.log(checked);
    }
  
  }
}
<button onclick="checked()", id="pick" ,type="submit">pick</button>*/
/*
var inapp = document.getElementById('inapp');
var alreadyinapp = 'yes';
var linking = document.getElementById('linking');
inapp.addEventListener('click', ()=>{
  if (alreadyinapp==='yes') {
    alreadyinapp = 'no';
  window.open('_self');
  console.log(window.open);
  } else if (alreadyinapp==='no') {
    window.open('_blank');
    console.log(window);
  }
})*/
/*
const download = document.querySelector('download-segment');
download.addEventListener('click',()=>{
  download.href=itemsarray[i];
})*//*
function createItem(item) {
  const updatecontroller2 = document.querySelectorAll(".updatecontroller2")
  updatecontroller2.forEach((ebb,i)=>{ebb.addEventListener('click',()=>{switch (gotten) {
      case 'website':
        updatecontroller2[i].style.background = "blue";
        break;
      case 'e-mail':
    
        break;
      case 'phone':
    
        break;
      case 'sMS':
    
        break;
      case 'text':
    
        break;
    
    }})
})
  


}

*/

/*var move2 = document.getElementById('move2');
hreft=itemsarray;

  var move = document.getElementById('move');
  
  herft2 = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
  
  const a2 = document.createElement('a');
  
  a2.href = "#savedNames";
  a2.className = 'a2';
  move.appendChild(a2);
  console.log(a2.href);
  console.log(herft2[2]);*/
  

function movebtn() {

  const movebtn = document.querySelectorAll("#move2");
  const input = document.querySelectorAll(".inputcontroler textarea")
  var move = document.getElementById('move');
  const a2 = document.createElement('a');
  movebtn.forEach((mb, i) => {
    input[i].style.visibility = "hidden";
    mb.addEventListener("click", () => {

      a2.href = "#" + input[i].id;
      a2.className = 'a2';
      move.appendChild(a2);

      console.log(a2.href);

      console.log(move);
      console.log(input[i].id)
    })
  })
}
  
;

function downloadsearch(){
var download_requrement= itemsarray;
const input = document.querySelectorAll(".inputcontroler textarea")
download_requrement.forEach((i)=>{

console.log(download_requrement)
var inputcontroler = document.querySelectorAll("inputcontroler");
inputcontroler
})

}

const entercheck = document.getElementById('enterbtn');

entercheck.addEventListener('click',()=>{
  let namespace = document.querySelectorAll(".name");
  namespace.forEach((ec,l)=>{
    ec.addEventListener('click',()=>{
      name[l].style.color='red';
      console.log('red');
    })
  })
})
var email =2;
var phone = 3;
var sms= 4;


function activatedeletebtn() {
  let deletebtn = document.querySelectorAll(".deletebutton")
  deletebtn.forEach((db, i,l)=>{
    db.addEventListener("click", ()=>{deleteItem(i,l)})
  })
}/*
function activatedeletebtn2() {
  let deletebtn2 = document.querySelectorAll(".deletebutton2")
  deletebtn2.forEach((db2, l)=>{
    db2.addEventListener("click", ()=>{deleteItem(l)})
  })
}*/

const one= "yes";
let two="no";

function activateeditbtn() {
  let deletebtn = document.querySelectorAll(".deletebutton")
const editbtn = document.querySelectorAll(".editbutton");
const updatecontroller = document.querySelectorAll(".updatecontroller")
const input = document.querySelectorAll(".inputcontroler textarea")
const edit= document.querySelectorAll(".editbutton")
const textareaglow =document.querySelectorAll(".inputcontroler textarea")
const searchbuttons =document.querySelectorAll(".searchbuttons")
var move = document.getElementById('move');
var move2 = document.getElementById('move2');
const a2 = document.createElement('a');
var tarray =[namesarray,itemsarray];
var tarrayt = document.querySelector('.tarrayt');

editbtn.forEach((eb,i)=>{
  input[i].style.visibility="hidden";
  eb.addEventListener("click", ()=>{
    input[i].style.visibility="visible";
    updatecontroller[i].style.display="block";
    searchbuttons[i].style.display="flex";
    edit[i].style.opacity="0.5"
    textareaglow[i].style.color="green";
    textareaglow[i].style.background="silver";
   /* input[i].disabled=false
  tarrayt.innerHTML.split('G');
    tarrayt.innerHTML=tarray;
    console.log(tarrayt.innerHTML);*/
    deletebtn[i].style.visibility="true";
    
   /* herft2 = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
    move.href = '#' + JSON.stringify(herft2[i]);*/
    
      
      
      

    input[i].style.transition="0.5s";
    if (one == "yes"&&two == "no") {
      deletebtn[i].style.visibility="visible";
      two="yes";
    }
    
  })
})
}
function activateeditbtn2() {
  const editbtn2 = document.querySelectorAll(".editbutton2");
  const updatecontroller2 = document.querySelectorAll(".updatecontroller2")
  const input2 = document.querySelectorAll(".inputcontroler2 textarea")
  const edit2 = document.querySelectorAll(".editbutton2")
  const textareaglow2 = document.querySelectorAll(".inputcontroler2 textarea")
  editbtn2.forEach((eb2, l) => {
    eb2.addEventListener("click", () => {
      updatecontroller2[l].style.display = "block"
      edit2[l].style.opacity = "0.5"
      textareaglow2[l].style.color = "green";
      textareaglow2[l].style.background="silver";
      input2[l].disabled = false
    })
  })
}
function activatesavebtn() {
  const savebtn = document.querySelectorAll(".savebtn");
  const input = document.querySelectorAll(".inputcontroler textarea")
  savebtn.forEach((sb,i) => {
        sb.addEventListener("click", () => {
          updateitems(input[i].value,i)
        })
})
}
function activatesavebtn2() {
  const savebtn2 = document.querySelectorAll(".savebtn2");
  const input2 = document.querySelectorAll(".inputcontroler2 textarea")
  savebtn2.forEach((sb2, l) => {
    sb2.addEventListener("click", () => {
      updateitems2(input2[l].value,l)
    })
  })
}
function activatecanclebtn(){
  const canclebtn= document.querySelectorAll(".canclebtn");
  const input = document.querySelectorAll(".inputcontroler textarea")
  const deletebutton = document.querySelectorAll(".deletebutton")
  
  const updatecontroller = document.querySelectorAll(".updatecontroller")
  canclebtn.forEach((cb,i)=>{cb.addEventListener("click", ()=>{
    updatecontroller[i].style.display="none"
    input[i].disabled=true
    
    if (one == "yes" && two == "yes") {
      deletebutton[i].style.visibility="hidden";
      two = "no";
    }
    location.reload();
    
  })})
}
function activatecanclebtn2(){
  const canclebtn2= document.querySelectorAll(".canclebtn2");
  const input2= document.querySelectorAll(".inputcontroler2 textarea")
  const updatecontroller2= document.querySelectorAll(".updatecontroller2")
  const textareaglow2 = document.querySelectorAll(".inputcontroler2 textarea")
  const edit2 = document.querySelectorAll(".editbutton2")
  canclebtn2.forEach((cb2,l)=>{cb2.addEventListener("click", ()=>{
    updatecontroller2[l].style.display="none"
    input2[l].disabled=true;
    edit2[l].style.opacity="1";
    textareaglow2[l].style.background="none";
    edit2[l].style.opacity="1";
  })})
}
function updateitems(text,i){
  itemsarray[i]=text;
  localStorage.setItem("items",JSON.stringify(itemsarray))
  location.reload();
}
function updateitems2(text2,l) {
  namesarray[l] = text2;
  localStorage.setItem("names",JSON.stringify(namesarray))
  location.reload();
}
function deleteItem(i,l) {
  itemsarray.splice(i,1)
  localStorage.setItem("items",JSON.stringify(itemsarray));
  
    namesarray.splice(i, 1)
    localStorage.setItem("names",JSON.stringify(namesarray))
    location.reload();
}



var linking = document.getElementById ("linking");

function searching() {
  const input = document.querySelectorAll(".inputcontroler textarea")
  const searchbtn = document.querySelectorAll("#linking");
  searchbtn.forEach((seb,i)=>{seb.addEventListener("click", ()=>{
    searchbtn[i].href=itemsarray[i];
  })})
  
  
}
function inappsearch() {
  const input = document.querySelectorAll(".inputcontroler textarea")
  const inappsearchbtn = document.querySelectorAll("#inappsearch");
  inappsearchbtn.forEach((ab,i)=>{ab.addEventListener("click", ()=>{
    inappsearchbtn[i].href=itemsarray[i];
  })})
  
  
}
localStorage.getItem('inappcheck')
var inappstart=document.querySelector('.showinapp');

var inappactive='no';

inappstart.addEventListener('click',()=>{const inappsearchbtn = document.querySelectorAll("#inappsearch"); 
const backup = document.querySelector(".save");
const backuppopcln = document.querySelector(".saveoption");

if (inappactive=='yes') {
  inappsearchbtn.forEach((inb, i) => {
  
    inappsearchbtn[i].style.visibility = 'hidden';
    backup.style.visibility = 'hidden';
    backuppopcln.style.visibility = 'hidden';
    backup.style.position = 'absolute';
    inappsearchbtn[i].style.transition = '0s';
    inappsearchbtn[i].style.position = 'absolute';
    inappactive = 'no';
    console.log(inappsearchbtn[i].style.visibility);
  console.log(inappactive);
  localStorage.setItem('inappcheck',JSON.stringify(inappactive));
  })
} else if (inappactive=='no') {
  inappsearchbtn.forEach((inb, i) => {
  
    inappsearchbtn[i].style.visibility = 'visible';
  backup.style.visibility = 'visible';
  searchbox.style.visibility = 'hidden';
  backup.style.position = 'relative';
  backup.style.boxshadow = '0 0 0 grey';
    inappsearchbtn[i].style.transition = '0s';
    inappsearchbtn[i].style.position = 'static';
    inappactive = 'yes';
    console.log(inappsearchbtn[i].style.visibility);
  console.log(inappactive)
  localStorage.setItem('inappcheck',JSON.stringify(inappactive));
  })
}
 })
 
  /*displayitems2();*/

console.log(linking);

//backup
const backup = document.querySelector(".save");
const backuppop = document.querySelector(".saveoption");
const filename = document.querySelector(".filename");
const backupbtn = document.querySelector(".backupbtn");
const filetype = document.querySelector(".filetype");
const test = document.querySelector("textarea");
const newtext = JSON.stringify(test);
var searchbox = document.getElementById('searchBox')


var saving = 0;
backup.addEventListener('click',()=>{
  
  if (saving==0) {
    backuppop.style.visibility="visible";
    saving=1;
    console.log(saving);
  }
  else if (saving==1) {
    searchbox.style.visibility="hidden";
    backuppop.style.visibility = "hidden";
    saving = 0;
    console.log(saving);
  }
  
  
})
backupbtn.addEventListener("click",()=>{
  const blob = new Blob(["Link names:"+namesarray+"\r\nLinks:"+itemsarray],{type:"text/plain"});
  const fileURL = URL.createObjectURL(blob);
  backupbtn.href=fileURL;
  backupbtn.download=fileURL.value;
  
  
})/*
const sampleData = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];

// Store sample data in local storage if not already present
if (!localStorage.getItem('fruits')) {
  localStorage.setItem('fruits', JSON.stringify(sampleData));
}


*/
  // Tab to edit

document.getElementById('txtfile').addEventListener('change', function(event) {
  
  
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      
      const content = e.target.result;
      document.querySelector('#importbtn').addEventListener('click', function(event) {
     var impnamestart =content.search('names');
     var impnamestop =content.search('Links');
     
     var implinkstart = content.search('Links');
     
     
     console.log(impnamestop);
      
      
      const linesArray = content.split('\r\n');
      console.log(linesArray);
     
      var namelistval= content.slice(impnamestart+6,impnamestop);
      var linklistval= content.slice(implinkstart+6)
      var namelistvalff = namelistval.split(/\r?\n/);
      var linklistvalff = linklistval.split(/\r?\n/);
      console.log(impnamestart+8)
      
      linklistvalff.splice(-1);
      namelistvalff.splice(-2);
      for (var i = 0; i < linklistvalff.length; i++) {
        var lastll = linklistvalff[i];
       if (lastll.slice(0,1)===',') {
          var lastllrid = lastll.slice(1);
          itemsarray.push(lastllrid);
          console.log(lastllrid)
        } else {
          itemsarray.push(lastll);
        }
       
        
        
      }
      for (var i = 0; i < namelistvalff.length; i++) {
        
        var lastl = namelistvalff[i];
       if (lastl.slice(0,1)===',') {
         var lastlrid = lastl.slice(1);
         namesarray.push(lastlrid);
        }
        
        else{
          namesarray.push(lastl);
        }

        
      }
      localStorage.setItem('names', JSON.stringify(namesarray));
      localStorage.setItem('items', JSON.stringify(itemsarray));
      location.reload();
      })/*
     console.log('length is:'+namelistvalff.length);
     console.log('length is:'+linklistvalff.length);*/
      
     
      //location.reload();
    };
    reader.readAsText(file);
  }

    
  })


  

  function getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem("items"))||[];
  }

  function filterData(query) {
    const data = getDataFromLocalStorage();
    return data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }
  

  function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    results.forEach((result,i )=> {
      const anchorl = document.createElement('a');
      

      anchorl.className = 'result-item';
      anchorl.textContent = result;
      anchorl.href='#'+result.trim()+itemid[i];
      
      resultsContainer.appendChild(anchorl);
      console.log(anchorl.href);
    })
  }
  

  var searchboxs = 'no';
  
  
    function csearch() {
      var searchbox = document.getElementById('searchBox')
      searchbox.style.visibility = 'hidden';
      var resultitem = document.getElementsByClassName('result-item')
      /*resultitem.style.visibility = 'visible';*/
     if (searchboxs=='no') {
        
       /* var resultitem = document.querySelectorAll('.result-item')
        resultitem.style.visibility='visible';*/
        var searchbox = document.getElementById('searchBox')
        searchbox.style.visibility = 'visible';
        
          searchboxs = 'yes';
           
        var searchbox =document.getElementById('searchBox').addEventListener('input', function() {
          const query = this.value;
          const results = filterData(query);
          displayResults(results);
        });
       localStorage.setItem('searchboxs',JSON.stringify(searchboxs));
       console.log(searchboxs);
      } else if (searchboxs=='yes'){
        var searchbox = document.getElementById('searchBox')
        searchbox.style.visibility = 'hidden';
        /*var resultitem = document.querySelectorAll('.result-item');
        resultitem.style.visibility='visible';*/
        searchboxs = 'no';
        localStorage.setItem('searchboxs',JSON.stringify(searchboxs));
      }
      
      
  
  
  }
  


/*let names = "";
  for (let l = 0; l < namesarray.length; l++) {
    names += `    <div class="items">
            <div class="inputcontroler">

              <textarea disabled>${namesarray[l]}</textarea>
              <div class="editcontroler"></div>
              <button class="editbutton"style="padding:0;background-image:linear-gradient(to bottom right, white, pink);border-style:solid;border-width:2px;border-color:red;box-shadow:0px 2px 2px darkred;"><img src="edit.png"style="width:50px; height:50px;padding:0px;"></button>
            </div>
            <div class="updatecontroller">
              <button class="savebtn"type="submit" style="padding:0;background-image:linear-gradient(to bottom, pink, white);border-style:solid;border-width:2px;border-color:red;box-shadow:0px 2px 2px darkred"><img src="save.png"style="width:50px; height:50px;padding:0px;"</button>
              <button class="canclebtn"type="submit" style="padding:0;background-image:linear-gradient(to bottom, pink, white);border-style:solid;border-width:2px;border-color:red;box-shadow:0px 2px 2px darkred"><img src="cancle.png"style="width:50px; height:50px;padding:0px;"</button>
            </div>
          </div>`
    document.querySelector(".savedNames").innerHTML = names;
  }
  
  activateeditbtn2();
  activatesavebtn2();
  activatecanclebtn2();
  */
  /*
  document.getElementsByName("enterbtn").addEventListener("clck", ()=>{
    const numberadd=0
    const input= document.querySelectorAll("inputcontroler textarea");
    const adding = numberadd += 1
    input.value = adding;*/
   /* if (input.value=null)
   {
      */
  /*})*/
  
  
  var seven2 = 0
  
  var gradient = document.getElementById('greybackground');
  var example1 = document.getElementById('exampleimage1');
  var example2 = document.getElementById('exampleimage2');
  var example3 = document.getElementById('exampleimage3');
  var example4 = document.getElementById('exampleimage4');
  var example5 = document.getElementById('exampleimage5');
  var example6 = document.getElementById('exampleimage6');
  var example7 = document.getElementById('exampleimage7');
  
  //landscape
  var example1b = document.getElementById('exampleimage1b');
  var example2b = document.getElementById('exampleimage2b');
  var example3b = document.getElementById('exampleimage3b');
  var example4b = document.getElementById('exampleimage4b');
  var example5b = document.getElementById('exampleimage5b');
  var example6b = document.getElementById('exampleimage6b');
  var example7b = document.getElementById('exampleimage7b');
  
  var goseven=0;
  if (tutorial == 0 && movement == 1) {
    example1.style.visibility = 'visible';
    example2.style.visibility = 'hidden'
  
    example3.style.visibility = 'hidden'
  
    example4.style.visibility = 'hidden'
  
    example5.style.visibility = 'hidden'
  
    example6.style.visibility = 'hidden'
  
    example7.style.visibility = 'hidden'
  
  }
  
  if(tutorial>0){
    gradient.style.visibility='hidden'
    
    example1.style.visibility='hidden'
    
    example2.style.visibility='hidden'
    
    example3.style.visibility='hidden'
    
    example4.style.visibility='hidden'
    
    example5.style.visibility='hidden'
    
    example6.style.visibility='hidden'
    
    example7.style.visibility='hidden'
  }
  
  function previous ()
  {
    movement-=1;
    if (movement < 1) {
      movement += 1
    }
    console.log(movement);
    if (movement<7) {
      seven2=0
    }
    if (tutorial == 0 && movement == 1) {
      example1.style.visibility = 'visible';
      example2.style.visibility = 'hidden'
    
      example3.style.visibility = 'hidden'
    
      example4.style.visibility = 'hidden'
    
      example5.style.visibility = 'hidden'
    
      example6.style.visibility = 'hidden'
    
      example7.style.visibility = 'hidden'
    }

    if (tutorial == 0 && movement == 2) {
      example1.style.visibility = 'hidden';
      example2.style.visibility = 'visible'
    
      example3.style.visibility = 'hidden'
    
      example4.style.visibility = 'hidden'
    
      example5.style.visibility = 'hidden'
    
      example6.style.visibility = 'hidden'
    
      example7.style.visibility = 'hidden'
    
    }
    if (tutorial == 0 && movement == 3) {
      example1.style.visibility = 'hidden';
      example2.style.visibility = 'hidden'
    
      example3.style.visibility = 'visible'
    
      example4.style.visibility = 'hidden'
    
      example5.style.visibility = 'hidden'
    
      example6.style.visibility = 'hidden'
    
      example7.style.visibility = 'hidden'
    
    }
    if (tutorial == 0 && movement == 4) {
      example1.style.visibility = 'visible';
      example2.style.visibility = 'hidden'
    
      example3.style.visibility = 'hidden'
    
      example4.style.visibility = 'visible'
    
      example5.style.visibility = 'hidden'
    
      example6.style.visibility = 'hidden'
    
      example7.style.visibility = 'hidden'
    
    }
    if (tutorial == 0 && movement == 5) {
      example1.style.visibility = 'hidden';
      example2.style.visibility = 'hidden'
    
      example3.style.visibility = 'hidden'
    
      example4.style.visibility = 'hidden'
    
      example5.style.visibility = 'visible'
    
      example6.style.visibility = 'hidden'
    
      example7.style.visibility = 'hidden'
    
    }
    if (tutorial == 0 && movement == 6) {
      example1.style.visibility = 'hidden';
      example2.style.visibility = 'hidden'
    
      example3.style.visibility = 'hidden'
    
      example4.style.visibility = 'hidden'
    
      example5.style.visibility = 'hidden'
    
      example6.style.visibility = 'visible'
    
      example7.style.visibility = 'hidden'
    
    }
    if (tutorial == 0 && movement == 7 && goseven == 1) {
      example1.style.visibility = 'hidden';
      example2.style.visibility = 'hidden'
    
      example3.style.visibility = 'hidden'
    
      example4.style.visibility = 'hidden'
    
      example5.style.visibility = 'hidden'
    
      example6.style.visibility = 'hidden'
    
      example7.style.visibility = 'visible'
    
    }
  }
   
  function next()
  
  {
    
    movement+=1;
    if (movement>7) {
      movement-=1
    }
    if (movement == 7) {
      tutorial = 0;
      localStorage.getItem('tutorialdone')
      localStorage.setItem('tutorialdone', JSON.parse(tutorial));
      seven2+=1;
      goseven=1
    }
    
    if(movement == 7 && seven2 == 2){
      previousbutton.style.visibility='hidden';
      nextbutton.style.visibility='visible';
      location.reload();
      tutorial = 1
      localStorage.setItem('tutorialdone', JSON.parse(tutorial));
      
    }/*
    var hidelayout = document.querySelector(".theList");
    if (seven2 == 2) {
      hidelayout.style.display = 'flex';
    } else {
      hidelayout.style.display = 'none';
    }*/
    document.addEventListener("DOMContentLoaded",init);
function init() {
  
  let query = window.matchMedia("(min-width: 361px)")
  if (query.matches) {
    const saverTitle = document.querySelector(".saverTitle");
    saverTitle.style.color='pink';
    saverTitle.style.background='yellow';
  }
}
    console.log(movement)
    console.log(seven2);
    console.log(tutorial);
    if (tutorial==0&&movement == 1) {
    example1.style.visibility = 'visible';
    example2.style.visibility='hidden'
    
    example3.style.visibility='hidden'
    
    example4.style.visibility='hidden'
    
    example5.style.visibility='hidden'
    
    example6.style.visibility='hidden'
    
    example7.style.visibility='hidden'
    
  }
  if (tutorial == 0 && movement == 2) {
    example1.style.visibility = 'hidden';
    example2.style.visibility = 'visible'
  
    example3.style.visibility = 'hidden'
  
    example4.style.visibility = 'hidden'
  
    example5.style.visibility = 'hidden'
  
    example6.style.visibility = 'hidden'
  
    example7.style.visibility = 'hidden'
  
  }
  if (tutorial == 0 && movement == 3) {
    example1.style.visibility = 'hidden';
    example2.style.visibility = 'hidden'
  
    example3.style.visibility = 'visible'
  
    example4.style.visibility = 'hidden'
  
    example5.style.visibility = 'hidden'
  
    example6.style.visibility = 'hidden'
  
    example7.style.visibility = 'hidden'
  
  }
  if (tutorial == 0 && movement == 4) {
    example1.style.visibility = 'visible';
    example2.style.visibility = 'hidden'
  
    example3.style.visibility = 'hidden'
  
    example4.style.visibility = 'visible'
  
    example5.style.visibility = 'hidden'
  
    example6.style.visibility = 'hidden'
  
    example7.style.visibility = 'hidden'
  
  }
  if (tutorial == 0 && movement == 5) {
    example1.style.visibility = 'hidden';
    example2.style.visibility = 'hidden'
  
    example3.style.visibility = 'hidden'
  
    example4.style.visibility = 'hidden'
  
    example5.style.visibility = 'visible'
  
    example6.style.visibility = 'hidden'
  
    example7.style.visibility = 'hidden'
  
  }
  if (tutorial == 0 && movement == 6) {
    example1.style.visibility = 'hidden';
    example2.style.visibility = 'hidden'
  
    example3.style.visibility = 'hidden'
  
    example4.style.visibility = 'hidden'
  
    example5.style.visibility = 'hidden'
  
    example6.style.visibility = 'visible'
  
    example7.style.visibility = 'hidden'
  
  }
  if (tutorial == 0 && movement == 7 &&goseven==1) {
    example1.style.visibility = 'hidden';
    example2.style.visibility = 'hidden'
  
    example3.style.visibility = 'hidden'
  
    example4.style.visibility = 'hidden'
  
    example5.style.visibility = 'hidden'
  
    example6.style.visibility = 'hidden'
  
    example7.style.visibility = 'visible'
  
  }
  }
  window.onload = 
  
  function() {
  
      displayitems();
  }