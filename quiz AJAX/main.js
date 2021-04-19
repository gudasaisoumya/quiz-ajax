function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    let num=document.forms["welcome_form"]["num"].value;
    localStorage.setItem("name",name);
    localStorage.setItem("ID",num);
   
  }