function validacion()
{
    var usuario = document.getElementById("Usuario").value;
    var password= document.getElementById("Password").value;
    var resultado;
    
    console.log("entro");
    alert("entro");
    //Validación de que el email este completo
    //alert(nombre + " " + apellido);
    
    if (usuario == "" || password =="") {
        alert ("Todos los campos son obligatorios");
        //return false;
    } else {
      alert('Los datos ingresados son correctos');  }  
      return true;
    
      //console.log(validateEmail("javier@g,ail.com"));
    if(validateEmail())
        {
            alert('El mail esta correcto');                
        }
        else
        {
            alert('el mail no esta correcto');    
        }
      
      
    
      return true;     
}

function validateEmail(usario) {
    var re = /\S+@\S+\.\S+/;
    return re.test(usario);
  }
function validatePassword(password)
 {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
    return re.test(password);
    
}