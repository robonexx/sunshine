
// moving eyes after mouse movement

document.querySelector('body').addEventListener('mousemove', eyeball);
var faceBorder = document.querySelector('.face-bg');
var face = document.querySelector('.face');

function eyeball() {
    var eye = document.querySelectorAll('.eye');
    
    eye.forEach(function(eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2( event.pageX - x, event.pageY - y)
        let rotation = (radian * (180 / Math.PI) * -1) + 0; 
        eye.style.transform = "rotate("+ rotation + "deg)";
   })

  /*  console.log(event) */
};

face.addEventListener('click', () => {
    faceBorder.style.border = "20px solid rgb(206, 115, 30)";
    console.log('clicked face')
})


