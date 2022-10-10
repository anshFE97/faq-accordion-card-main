const dropDown = document.querySelectorAll('.question')
const info = document.querySelectorAll('.info')



dropDown.forEach((drop) => 
    drop.addEventListener('click', () => {
        if(drop.parentNode.classList.contains('active')) {
            drop.parentNode.classList.toggle('active')
        } else {
            dropDown.forEach((drop) => {
                drop.parentNode.classList.remove('active') 
            })
            drop.parentNode.classList.add('active')
        }
    })
)