document.querySelector('input[type="text"]')
 .addEventListener('focus', function(){
    this.style.borderColor = "initial";
});

document.querySelector('input[type="text"]')
 .addEventListener('blir', function(){
     if (!this.value){
        this.style.borderColor = "red";
     }
   
});
document.querySelector('input[type="text"]')
.addEventListener('change', function(){
   alert('Changed');
});

document.querySelector('input[type="checkbox"]')
 .addEventListener('change', function(){
     if (!this.checked){
        alert("you are employed");
     }
     else{
        alert("you are employed");
     }
});