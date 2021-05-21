// Code your solutions in this file
const countDown=(n)=>{
  while (n>=0){
    console.log(n);
    n--;
  }
}

countDown(10);

<<<<<<< HEAD
const writeCards=(names,event)=>{
=======
const writeCards=(names.event)=>{
>>>>>>> 16cf9fd3ff9a1db0320cad5a2891c33406a73481
  
  for(let i=0;i<names.length;i++){
    names[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }
  
  return names;
}