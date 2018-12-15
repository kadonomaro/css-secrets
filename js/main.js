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

    var linear = document.querySelector('.background');
    var linearRange = document.querySelector('.background__range');
    var linearValue = document.querySelector('.background__value');

    linearValue.textContent = linearRange.value;

    linearRange.addEventListener('input', function () {
        
        linearValue.textContent = linearRange.value;
        linear.style.background = "repeating-linear-gradient(" + linearRange.value + "deg, #fb3, #fb3 15px, #58a 0, #58a 30px)";
        
    });
}
