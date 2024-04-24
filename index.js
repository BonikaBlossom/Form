const buttonBuy = document.querySelector('button');

buttonBuy.addEventListener('click', () => {
 form.style.display = 'block'
})

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
}

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
    validate(formObject)  
    }) 
    function validate(form) {
    if(form.password = undefined) {
        document.querySelector('formfields').style.display ='inline';
    }
    }