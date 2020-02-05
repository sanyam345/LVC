
function result(x,y){
    
    var res=0;
    
    if(x=="A"){
        res+=2;
    }
    if(y=="B"){
        res+=2;
    }
    alert("Your got "+res+" marks");
}
function calculate(){
    var x = quiz.q1.value;
    var y = quiz.q2.value;
    if(x==""||y==""){
        alert("Answer the questions");
    }
    else{
        result(x,y);
    }
    
}
