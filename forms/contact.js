
function sendWhatsapp() {
    var noWa = document.querySelector('.noWa').value;
    var name = document.querySelector('.name').value;
    var ph = document.querySelector('.tphone').value;
    var email = document.querySelector('.gemail').value;
    var subject = document.querySelector('.message').value;

    var url = "https://wa.me/" + noWa + "?text=" +
        "*Name :* " + name + "%0a" +
        "*Email :* " + email + "%0a" +
        "*Phone number :* " + ph + "%0a" +
        "*Message :* " + subject + "%0a%0a";
    window.open(url, '_blank').focus();
}