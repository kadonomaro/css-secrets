window.onload = function (){
    var formText = document.querySelector('.form__text');
    var formColor = document.querySelector('.form__color');
    var formCode = document.querySelector('.form__code');
    var page = document.querySelector('.page');
    
    formText.value = formColor.value;
    

    formColor.addEventListener('input', function(){
        formText.value = formColor.value;
        var text = "background-color: " + formColor.value;

        page.style.backgroundColor = formColor.value;
        formCode.value = text;
    });
}
