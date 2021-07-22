function validate()
{
    
    var a=document.getElementById("user").value;
    var b=document.getElementById("passwd").value;
   
   if(a!="" && b!="")
   {
    
      sessionStorage.setItem("id",a);
      alert("Login SuccessFully Done");
      return true;
   }
   else
   {
    alert("Invalid User Id Password");
    return false;
   }
}