const button = document.querySelector('button');
const form = document.querySelector('#blabla');

button.addEventListener('click', () => {
    form.classList.add('open');
  });

/*buttonBuy.addEventListener('click', () => {
 form.style.display = 'block';
})
textform.textContent = newText;

let getList = document.querySelectorAll('.firstmenu');

for(let a  of getList) {
    console.log(a);
    a.addEventListener('click' , showList);
}
function showList () {
    let getmenu = document.querySelector('.menu');
    console.log(getmenu);
    for (let i = 0; i < 1; i++) {
        if(getmenu.style.display == 'block') {
            getmenu.style.display = 'none';
        } else { 
            getmenu.style.display = 'block';
        }
    }
}*/


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const formObject = {};

    formData.forEach(function(value, key) {
        if(!formObject[key]) {
        formObject[key] = value
        } else {
        formObject[key] = `${formObject[key]}, ${value}`
        }
    })
    console.log(formObject)

    document.querySelector('.formfields').classList.add('open');

    document.querySelector('.user-name').textContent = `ПІБ покупця: ${formObject.user_name}`;
    document.querySelector('.text-city').textContent = `Місто (вибір зі списку): ${formObject.city}`;
    document.querySelector('.text-sklad').textContent = `Склад Нової пошти для надсилання: ${formObject.sklad}`;
    document.querySelector('.text-card').textContent = `Післяплати або оплати банківської картки: ${formObject.card}`;
    document.querySelector('.text-howmatch').textContent = `Кількість продукції, що купується: ${formObject.howmatch}`;
    document.querySelector('.text-comment').textContent = `Коментар до замовлення: ${formObject.comment}`;

    validate(formObject)  
})

function validate(object) {
    if(object.name.length = /[A-z][A-z][A-z]/) {
        document.querySelector('span').style.display ='inline';
    }
function validate(object) {
    if(object.password.length < 4) {
        document.querySelector('span').style.display ='inline';
    }
}