console.log('bhai print ho raha hai')
showNotes()

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click",function(e){
    let addtxt=document.getElementById('addtxt');
    let notes=localStorage.getItem('notes');
    if(notes == null) {
        notesObj= [];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value="";
    // console.log(notes);
    showNotes();
});

// show item

function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = '';
    Array.from(notesObj).forEach(function(element,index){
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
            <div class="card-body">
              <h5 class="card-title">TODO ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <button id="${index}" onclick="del(this.id)" class="btn btn-primary">Delete</button>
            </div>
          </div>
        `;
    });
    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML=html;
    }else{
        notesElm.innerHTML="plz insert todo list"
    }
}

// delete item

function del(index){
//    console.log('item deleted',index)
   let notes=localStorage.getItem('notes');
   if(notes==null){
       notesObj=[];
   }
   else{
       notesObj=JSON.parse(notes);
   }
//    console.log(notes)
   notesObj.splice(index,1);
   localStorage.setItem("notes",JSON.stringify(notesObj));
   showNotes();
}

 let searchTxt= document.getElementById('searchTxt');
 searchTxt.addEventListener('input',function(){
     let inputVal=searchTxt.value.toLowerCase();
    //  console.log("ye chal raha hai",inputVal);
     let noteCard =document.getElementsByClassName('noteCard');
    // noteCard.forEach(function(element){
        Array.from(noteCard).forEach(function(element){
         let cardTxt=element.getElementsByTagName('p')[0].innerText;
         if(cardTxt.includes(inputVal)){
             element.style.display="block";
         }else{
            element.style.display="none" ;
         }
        //  console.log(cardTxt)
     })
 })