function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    
    if (name == "" || email == "" || age == "") {
        alert("Kaikki kentät on täytettävä!");
        return false;
    }
    return true;
}