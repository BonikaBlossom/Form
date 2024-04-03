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