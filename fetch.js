'use strict'

//fecth(ajax) y peticiones a servicios /apis rest
var divusuarios = document.querySelector('#usuarios');
var divjanet = document.querySelector('#janet');
var divprofe = document.querySelector('#profesor');



getusers()//me da el link del api resreq una vez que tenga el link
.then(data=>data.json())//todo esos datos optenidos los combierto a un JSON
.then(users=>{
    listusers(users.data);
   return getinfo();//en el segunro tenfo que capturar su data por que del primero ya lo capture
})

.then(data => {
    divprofe.innerHTML=data;
   return getuserjanet();//para el tercero de aca sale la data
})

.then(data=>data.json())
.then(userjanet=>{
     mostrarjanet(userjanet.data);
  
})
//con el cacth captamos el error
.catch(error =>{
    alert("error en las peticiones"+error);//este catch capta el eerror en tus peticiones y el + error te avisa en donde estas mal
})







//funcion praobtener los usuarios
function getusers() {
    return fetch('https://reqres.in/api/users');
 }
 
 
 function getuserjanet() {
     return fetch('https://reqres.in/api/users/2');
  }

  //continuamos com promesas

  function getinfo(){//com es otro JSON tambien lo ponemos dentro de esas  variables

    var profesor={
        nombre:'marco',
        apellido:'cruzado',
        id:'123'
    };

      return new Promise((resolve, reject)=>{
        var profe_string = "";
        
         
        setTimeout(function() {
            profe_string = JSON.stringify(profesor);
           

            if (typeof profe_string != "string"|| profe_string =='') {
                return reject("ERRROR marco");
            }
            
                return resolve(profe_string);
               
        },3000)
      }); 
     
  }

//vamos a hacer promesas 
//       listusers(users.data); le estamos dando todos los datos optenidos al consumir el API
function listusers(usuarios) {
    usuarios.map((user,i)=>{//COMO esto es una data puedo recorrerlo con el .map  y obtener el index 
        let descriptionUser= document.createElement('p');//como lo quiero meter en la pagina tengo que crear elemento
        descriptionUser.innerHTML= i + "--"+user.last_name;//dentro de este elmento meto loosparametros 
        divusuarios.appendChild(descriptionUser);//lo inserto en el div creado para el 
        document.querySelector('.loading').style.display='none';
    });
}
//       mostrarjanet(userjanet.data);
function mostrarjanet(usuarios) {
        let descriptionjanet= document.createElement('h4');
        let avatarjanet= document.createElement('img');
        descriptionjanet.innerHTML= usuarios.first_name+ "--"+usuarios.last_name;
        avatarjanet.src=usuarios.avatar;
      //avatarjanet.border="10px solid blue";
        divjanet.appendChild(descriptionjanet);  
        divjanet.appendChild(avatarjanet);   
        document.querySelector('.loading2').style.display='none';
}




