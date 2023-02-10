let i = document.getElementById('display');

let add = (calcoli) => {
    i.value += calcoli;
}

let tot = () =>{
    i.value = eval(i.value);
}

function C (){
    i.value = '';
}