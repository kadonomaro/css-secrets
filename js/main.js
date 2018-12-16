window.onload = function (){
//изменение и вывод кода цвета
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
//изменения угла наклона градиента
    var linear = document.querySelector('.background');
    var linearRange = document.querySelector('.background__range');
    var linearValue = document.querySelector('.background__value');

    linearValue.textContent = linearRange.value;

    linearRange.addEventListener('input', function () {
        
        linearValue.textContent = linearRange.value;
        linear.style.background = "repeating-linear-gradient(" + linearRange.value + "deg, #fb3, #fb3 15px, #58a 0, #58a 30px)";
        
    });

// кодировка символов
    var textArr = document.querySelector('.text-array');
    var textArrStr = textArr.textContent;
    
    textArr.textContent = textArrStr.split('').reverse().join('');
    
    var textChar = document.querySelector('.text-char');
    var textCharArr = [];
    for (let i = 0; i <= textChar.textContent.length - 1; i++) {
        
        textCharArr[i] = textChar.textContent.charCodeAt(i);
        textCharArr[i] *= 3;
        textCharArr[i] += ' ';
        
    }
    textCharArr =  textCharArr.join('');
    textChar.textContent = textCharArr;
    
    
//форма для кодировки введенных символов
    var charText = document.querySelector('.char__text');
    var charButton = document.querySelector('.char__button');
    var charArea = document.querySelector('.char__area');
    var charTextArr = [];
    var charTextValue;


    charButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        charTextValue = charText.value;
        for (let i = 0; i <= charTextValue.length - 1; i++) {
            
            charTextArr[i] = charTextValue.charCodeAt(i);
            charTextArr[i] += ' ';
        }
        var charTextArrJoin = charTextArr.join('');
        charArea.value = charTextArrJoin;
    });


}
