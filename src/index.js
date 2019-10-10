
module.exports= function zeros(expression) {
  let firstNum=0;
  let counter, base, paired=0, fives=0,zerosCounter=0;;

  for (let i=0;i<expression.length;i++) {
    if (expression[i+1]=="*"||i==expression.length-1) {  
      counter    
      if (expression[i-1]=="!"){
        counter=2;
        base=Number(expression.substring(firstNum,i-1));
      }else {
        counter=1;
        base=Number(expression.substring(firstNum,i));
      }
      outer: while(base>0){
        let tempBase=base;
        while(1){
          if (tempBase%10==0){            
            zerosCounter++;
            tempBase/=10;
            continue;          
          } 
          if (tempBase%5==0){
            fives++; 
            tempBase/=5;
            continue;
          } 
          if (tempBase%2==0){
            paired++;
            tempBase/=2; 
            continue;
          }    
          base-=counter;
          continue outer;
        } 
      }
      
      firstNum=i+2;
      i+=2;
    }
  }
  zerosCounter+=paired<fives?paired:fives;
  return zerosCounter;
} 