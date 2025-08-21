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