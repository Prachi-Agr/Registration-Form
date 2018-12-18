function validate() {
    /*if (document.RegForm.name.value == "") {
        alert("Enter a name");
        document.myForm.name.focus();
        return false;
    }*/
    if (!/^[a-zA-Z]*$/g.test(document.RegForm.name.value)) {
        alert("Please enter valid name.");
        document.RegForm.name.focus();
        return false;
    }
    if(document.RegForm.Age.value<1 || document.RegForm.Age.value>27)
       {
        alert("The age must be between 1 and 28");
        return false;
       }

    if(!/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g.test(document.RegForm.email.value)) {
        alert("Please enter again. Capital letters not allowed.");
        document.RegForm.email.focus();
        return false;


    }

    if(!/^[0-9]{10}$/g.test(document.RegForm.contact.value)) {
        alert("Please enter contact number again.");
        document.RegForm.contact.focus();
        return false;
    }

    if(document.RegForm.passwd.value==document.RegForm.name.value) {
        alert("Please enter another password.");
        document.RegForm.passwd.focus();
        return false;
    }



  



}