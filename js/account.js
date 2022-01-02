let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");
for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");
    
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[i].classList.add("active");
  });
}
function Validate() {
        var password = document.getElementById("txtPassword").value;
        var confirmPassword = document.getElementById("txtConfirmPassword").value;
 if (password == ""){
alert("Please enter password");
return false;
        return true;
    }      
if (password != confirmPassword) {
            alert("Passwords do not match");
            return false;
        }
var a = document.getElementById("postalcode").value;
if (a == ""){
alert("Please enter postal code");
return false;
}
if(a.length<4){
alert("Please enter 4 digit postal code");
return false;}
return true;
}