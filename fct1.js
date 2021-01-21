function solutionExercice1(N) {
  var res = "EXERCICE 1";
  N=N+"";
  let L=N.split("");
  let streaks={};
  let range=[];
  const Numbers=L.map((number,index)=>streaks.hasOwnProperty(number)?streaks[number]=[...streaks[number],index]:streaks[number]=[index]);
  console.log(streaks);
  for(let i=0;i<L.length;i++){
      if(L[i]<=L[i+1] || i==L.length-1){
        range.push(L[i]);
      }
      else{
        let probIndex=streaks[L[i]][0];
        range[probIndex]=L[i]-1;
        for(let j=probIndex+1;j<L.length;j++){
          range[j]="9";
        }
        break;
      }
    }
  res=range.join("")-0;

return res;
}
solutionExercice1(N);
