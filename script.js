let example01 = document.querySelector('#input-1');
let example01span = document.querySelector('#h1-1');
example01.addEventListener('input', function(){
  example01span.textContent = example01.value;
});

document.querySelector('#colorChange').addEventListener('input', function() {
    example01span.style.color = this.value
})

document.querySelector('#backColorChange').addEventListener('input', function() {
    example01span.style.backgroundColor = this.value
})

document.querySelector('#font').addEventListener('input', function() {
    example01span.style.fontFamily = this.value
})
document.querySelector('#font-size').addEventListener('input', function() {
    example01span.style.fontSize = this.value + 'px'
})