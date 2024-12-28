let answer="";  // Initialize the answer variable to 0

function fun1(){
   document.querySelector(".answer").innerHTML=`${answer=answer+1}`;
}

function fun2(){
    document.querySelector(".answer").innerHTML=`${answer=answer+2}`;
}

function fun3(){
    document.querySelector(".answer").innerHTML=`${answer=answer+3}`;
}

function fun4(){
    document.querySelector(".answer").innerHTML=`${answer=answer+4}`;
}

function fun5(){
    document.querySelector(".answer").innerHTML=`${answer=answer+5}`;
}

function fun6(){
    document.querySelector(".answer").innerHTML=`${answer=answer+6}`;
}

function fun7(){
    document.querySelector(".answer").innerHTML=`${answer=answer+7}`;
}

function fun8(){
    document.querySelector(".answer").innerHTML=`${answer=answer+8}`;
}

function fun9(){
    document.querySelector(".answer").innerHTML=`${answer=answer+9}`;
}

function fun0(){
    document.querySelector(".answer").innerHTML=`${answer=answer+0}`;  // Fixed this to display "0" instead of overwriting the `answer` variable
}

function clearAll(){
    document.querySelector(".answer").innerHTML=`0`;
    answer=0;
}

let op="";
function addOperator(op){
    if(op==="+"){
        document.querySelector(".answer").innerHTML=`${answer=answer+"+"}`; 
    
    }

    if(op==="-"){
        document.querySelector(".answer").innerHTML=`${answer=answer+"-"}`; 
    
    }

    if(op==="*"){
        document.querySelector(".answer").innerHTML=`${answer=answer+"*"}`; 
    
    }

    if(op==="/"){
        document.querySelector(".answer").innerHTML=`${answer=answer+"/"}`; 
    
    }

}

function calculateResult(){
    
    answer = eval(answer);
    

    document.querySelector(".answer").innerHTML=`${answer}`; 
    answer=String(answer);


}

function point(){
    document.querySelector(".answer").innerHTML=`${answer=answer+"."}`; 

}