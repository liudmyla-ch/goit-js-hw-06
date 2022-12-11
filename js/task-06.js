const inputRef = document.querySelector("#validation-input");
const wordLength = inputRef.getAttribute("data-length");

inputRef.addEventListener('blur', (event)=>{
 const wordInputLength = event.currentTarget.value.length;

    if( wordInputLength == wordLength){
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    }
   else{   
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");
    }

})

