

//chatMachine input data


   let chats= [
    {
      "from": "Luke",
      "message": "Hey, anyone there?",
      "id": 0,
      "added": "Fri Apr 14 2017 10:32:24 GMT+0000 (UTC)"
    },
    {
      "from": "Elsa the Snow Queen",
      "message": "Is there anybody out there?",
      "id": 1,
      "added": "Fri Apr 14 2017 10:32:24 GMT+0000 (UTC)"
    },
    {
      "from": "Trogdor",
      "message": "IM HERE",
      "id": 2,
      "added": "Fri Apr 14 2017 10:32:24 GMT+0000 (UTC)"
    }
  ];     

  function displayALLChats(chat){
       //console.log('Users'+chat[0].from);


     let mainul =document.querySelector('main ul');

   // for( let i=0; i<chats.length;i++){ 
     let el= document.createElement('li');
        //el.classList.add(chat);
        el.textContent=chat.from;

      let msg=document.createElement('p');
        msg.textContent=chat.message;

        if(chat.message === ':)')
        {
          let smileImage= document.createElement('img');
              smileImage.setAttribute('src', 'image/smile.png');
              mainul.appendChild(smileImage);
        }
        //if(chat.message ===)

   
     mainul.appendChild(el);
    mainul.appendChild(msg);

 // }
 }
//window.addEventListener('load',function(){
  //displayALLChats();

//});

/// Its code for get Data from api and show to the browser.

function getAllChat(){
    let chat1 = new XMLHttpRequest();
    chat1.open('Get', 'https://tiy-28202.herokuapp.com/chats');


    chat1.addEventListener('load', function(){
        let chatResponse = JSON.parse(chat1.responseText);
        console.log(chatResponse.chats[0].from);
        for ( let i=0; i<chatResponse.chats.length; i++){          
             displayALLChats(chatResponse.chats[i]);
        }

     // getAllChat(chat);

    });
    chat1.send();
}
// When the page loads.
window.addEventListener('load',function() {
  getAllChat();
 
}); 


// Window.addEventListener('load',function(){
// });/

//// This code would be post data to the server

 window.addEventListener('load',function(){
      //getAllChat();

     let btnSend= document.querySelector('#send1');
       btnSend.addEventListener('click',function(){
             let userName=document.querySelector('#txtuser');
             let messages=document.querySelector('#usermsg1');
             console.log(userName.value);
      

      let response=new XMLHttpRequest();
      response.open('post','https://tiy-28202.herokuapp.com/chats');
      response.addEventListener('load',function(){
            console.log('received reaponses');
      });

      response.send(JSON.stringify({
         from: userName.value,
         message:messages.value 


     }));

  getAllChat();
 });    

}); 




