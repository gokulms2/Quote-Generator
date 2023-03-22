let quoteArray = [];
let index = 0;
let textposition = 0;
let flag = true;
let destination = document.getElementById("typedtext");

window.addEventListener('load',typewriter);


function loadquote(){
    const url = " https://api.quotable.io/random";

    fetch(url)

        .then(Response => {
            if (Response.ok)
                return Response.json();

            else
                console.log(Response.status);
        })
        .then(data => {
            quoteArray[index] = data.content;
        })
}
function typewriter() {
    if (flag) {
        loadquote();
        quoteArray[index] += " ";
        flag = false;
    }

    destination.innerHTML=quoteArray[index].substring(0,textposition)+"<span>\u25AE</span>"

    if(textposition++ != quoteArray[index].length){
        setTimeout("typewriter()",100);
    }
    else{
        quoteArray[index]=" ";
        setTimeout("typewriter",3000);
        textposition=0;
        flag=true;
    }

}