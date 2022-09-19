const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');

let activeClass = 1;

nextBtn.addEventListener('click', () => {
    activeClass++;
    if(activeClass > circles.length){
        activeClass = circles.length;
    }

    updateProgress();
})

prevBtn.addEventListener('click', () => {
    activeClass--;
    if(activeClass < 1){
        activeClass = circles.length;
    }

    updateProgress();
})

function updateProgress(){
    circles.forEach((circle, index) => {
        if(index < activeClass){
            console.log('add');
            circle.classList.add('active')
        }else{
            console.log('remove');
            circle.classList.remove('active')
        }
    })
    const activeCircles = document.querySelectorAll('.active');

    progress.style.width = (activeCircles.length -1) / (circles.length -1) * 100 + '%';

    if(activeClass === 1){
        prevBtn.disabled = true;
    }else if(activeClass === circles.length){
        nextBtn.disabled = true
    }else{
        nextBtn.disabled = false;
        prevBtn.disabled = false;
    }
}