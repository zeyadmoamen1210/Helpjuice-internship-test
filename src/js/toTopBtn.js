export default function toTopBtn() {
    const toTop = document.querySelector('.to-top-btn');
    document.addEventListener('scroll', () => {
        if(window.scrollY && window.scrollY > 100) {
            toTop.style.display = 'block';
        }else {
            toTop.style.display = 'none';
        }
    })

    toTop.addEventListener('click', () => {
        window.scrollTo({top: 0 ,behavior: 'smooth'});
    })
}