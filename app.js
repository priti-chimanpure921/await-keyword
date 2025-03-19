
//Implementing async function with await keyword

console.log("Implementing async function with await keyword");
function getNum()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        },1000);
    });    
}

async function demo()
{
    await getNum();
    await getNum();
    await getNum();
}

let prom = demo();
console.log(prom);

//Implementing color change function with await keyword
console.log("Implementing color change function with await keyword");

let h1 = document.querySelector("h1");

function changeColor(color,delay)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color ;
            resolve();
        },delay);
    });
}

async function setColor()
{
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000);
    await changeColor("orange",1000);
}
setColor();

