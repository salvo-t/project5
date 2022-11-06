let timeblocks = document.querySelectorAll('.input')

let hr = moment().format('HH')
console.log(hr)


function currentTime(){
    var timeT = document.getElementById("container")
    timeT.textContent = moment().format('MMMM DD YYYY')
}
console.log(currentTime)

for(i=0;i<timeblocks.length;i++){
    if(+(timeblocks[i].id)<hr){
        timeblocks[i].classList.add("past")
    }
    else if(+(timeblocks[i].id)==hr){
        timeblocks[i].classList.add("present")
    }
    else{
        timeblocks[i].classList.add("future")
    }
    timeblocks[i].nextElementSibling.addEventListener("click",function(event){
        localStorage.setItem(event.target.previousElementSibling.id, event.target.previousElementSibling.value)
        event.preventDefault();
    })
}

currentTime();

$('.saveBtn').click(function(event){
    console.log(event.target.parentElement.previousElementSibling.value)
});

