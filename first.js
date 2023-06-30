
// in this exercise, I'll  write a program that checks if two numbers are 100 or the sum of the two numbers are 100 and return true or false if not.

function  hundred(a,b){
let sum=a+b;
  if(a==100||b==100||sum==100){
    return true;
  }

  else{
   return false;

  }

}

console.log(hundred(23,77));

