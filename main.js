function validateForm() {
    let fieldA = document.getElementById("fieldA").value;
    let fieldB = document.getElementById("fieldB").value;
    if (fieldB > fieldA) {
        alert("Parabéns, você conseguiu!");
        return true;
    } else {
        alert("Campo B deve ser maior do que o campo A");
        return false;
    }
}
