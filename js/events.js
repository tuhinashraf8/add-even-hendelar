function makeYellow() {
    document.getElementById('color-box').style.backgroundColor = 'yellow';
}
function makered() {
    document.getElementById('color-box').style.backgroundColor = 'red';
}
document.getElementById('makeBlue').addEventListener('click', function makeBluee() {
    document.getElementById('color-box').style.backgroundColor = 'blue';
})
document.getElementById('makeGold').addEventListener('click', function () {
    document.getElementById('color-box').style.backgroundColor = 'gold'
})
document.getElementById('unic-color')
.addEventListener('click',function(){
    const unicColor = document.getElementById('unic-color-name')
    const selectedColor = unicColor.value;
    console.log(selectedColor);
    document.getElementById('color-box').style.backgroundColor = selectedColor
})


document.getElementById('changeBtn')
  .addEventListener('click',function(){
const changableText = document.getElementById('changeTitel')
changableText.innerText = "পাল্টায়া গেছে"
  })

document.getElementById('name-change-btn')
.addEventListener('click',function(){
    const yourName = document.getElementById('your-name')
    const submitedName = document.getElementById('submited-your-name')
    yourName.innerText = submitedName.value;
    // console.log(submitedName.value);
})

document.getElementById('coment-btn')
            .addEventListener('click', function () {
                const comentTextBox = document.getElementById('coment-text')
                const newComent = comentTextBox.value;
                const comentContenar = document.getElementById('comnet-contenar')
                const comentEliment = document.createElement('p');
                comentEliment.innerText=newComent
                comentEliment.classList.add(
                    'text-center',
                    'text-4xl',
                    'p-5',
                    'bg-yellow-200',
                    'border-2', 'w-[400px]',
                    'h-[200px]');
                    comentEliment.id ='target-comment';
                comentContenar.appendChild(comentEliment)
                comentTextBox.value = '';
               
            })

         