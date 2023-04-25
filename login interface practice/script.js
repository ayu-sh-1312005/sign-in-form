var n=0;
function handleClick(){
    var lcontainer=document.getElementById("innerdiv1");
    var rcontainer=document.getElementById("innerdiv2");
    if(n%2==0){
    lcontainer.style.width="40%";
    rcontainer.style.left="40%";
    }else{
        lcontainer.style.width="100%";
        rcontainer.style.left="0%"; 
    }
    n++;
    if(n==2){
        n=0;
    }
}