function findPrime(...numbers){
  let primeControl;
numbers.forEach(number => {
  if (number<1) {
    console.log(number+"'ın"+ " "+ "asal değeri hesaplanamaz.") 
  } else if (number===1) {
    console.log("1 asal sayı değildir");
  } else{
    for (let i = 2; i<number;i++){
      if (number % i ===0) {
        primeControl = false;
        break;

        
      }
    }
    if (primeControl) {
      console.log(number+" "+"asal sayıdır")  
    } else{
      console.log(number+" "+"asal sayı değildir")
      primeControl = true

    }

    
  }
  
});
  
}
findPrime(-1,10,3,7,19,22,29,66)