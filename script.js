let popup = document.getElementById('popup');

function displayPopup(){

    setTimeout(function(){popup.classList.remove('hide')}, 5000);

}

function closeModal(){

    popup.classList.add('hide');

}