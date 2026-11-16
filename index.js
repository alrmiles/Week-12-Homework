const saved=JSON.parse(localStorage.getItem("clicks"));
if(!saved || saved.best ===undefined) {
    localStorage.setItem("clicks", JSON.stringify({
        count:saved ? saved.count:0,
        lastUpdated:saved ? saved.lastUpdated: null,
        best:saved ? saved.count : 0

    }))
}

const click=()=>{
    const data =JSON.parse(localStorage.getItem("clicks"));
    data.count+=1;
    data.lastUpdated=new Date().toLocaleTimeString();
    if (data.count >data.best){
        data.best=data.count;
    }

    localStorage.setItem("clicks", JSON.stringify(data)); writeDisplay();
};
const rando=()=>{
    const data =JSON.parse(localStorage.getItem("clicks"));
    const random=Math.floor(Math.random()*201)-150;
    data.count+= random;
    if(data.count < 0){
        data.count = 0;
    }
    if (data.count > data.best){
        data.best=data.count;
    }
    data.lastUpdated=new Date().toLocaleTimeString();


    localStorage.setItem("clicks", JSON.stringify(data)); writeDisplay();
};

const unclick=()=>{
    const data =JSON.parse(localStorage.getItem("clicks"));
    if(data.count >0){
        data.count-=1;
        data.lastUpdated=new Date().toLocaleTimeString();
        localStorage.setItem("clicks", JSON.stringify(data));
        writeDisplay();
    }
};

const reset=()=>{
    const data =JSON.parse(localStorage.getItem("clicks"));
    data.count=0;
    data.lastUpdated=new Date().toLocaleTimeString();
    localStorage.setItem("clicks", JSON.stringify(data));
    writeDisplay();
}

function writeDisplay(){
    const data =JSON.parse(localStorage.getItem("clicks"));
    document.getElementById("display").innerHTML="How Many  Click? : " + data.count + " clicks";
    document.getElementById("lastUpdated").innerHTML="Last updated: " + (data.lastUpdated);
    document.getElementById("clicks").innerHTML="All Time Click Legend Score: " +data.best;
}
document.getElementById("click").addEventListener("click", ()=>click());
document.getElementById("unclick").addEventListener("click", ()=>unclick());
document.getElementById("reset").addEventListener("click", ()=>reset());
document.getElementById("rando").addEventListener("click", ()=>rando());

writeDisplay();