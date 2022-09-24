const inputField = document.querySelector('.input-field');
const feedback = document.querySelector('.feedback');


const vowelChecker = (arr)=>{
  let newArr = [];
   for(let i =0; i< arr.length;i++){
    
    
       if(arr[i]=='a' || arr[i]=='e' || arr[i]=='i' || arr[i]=='o' || arr[i]=='u' ){
         
        newArr.push(arr[i]);
       //let totalArr = newArr.length;

       

       }
       
   }
   feedback.innerHTML = `the vowels are ${newArr}`
};





inputField.addEventListener('submit',e=>{
   e.preventDefault();
   const input = inputField.vowel.value.trim();
   splitString = input.split('');
   //console.log(splitString);

     vowelChecker(splitString);
     inputField.reset();
})