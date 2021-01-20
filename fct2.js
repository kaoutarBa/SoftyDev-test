function solutionExercice2(L) {
   var res = "EXERCICE 2";
   var positives=[];
   const newList=L.forEach(number=>(number>0)?positives.push(number):"");
   var sortedList=positives.sort((a,b)=>a-b);
   if(sortedList.length===0){
    res= 1;
   }
  else{
   for(var i=0;i<sortedList.length;i++){
    if(sortedList[0]!=1){
      res=1;
      break;
    }
    else if(sortedList[i+1]-sortedList[i]>1){
      res=sortedList[i]+1;
      break;
    }
     else {
        res=sortedList[sortedList.length-1]+1;
     }
  }
      }
   return res;
}
solutionExercice2(L);
