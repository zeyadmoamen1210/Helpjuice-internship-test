export default function initAccordion() {
        const accordions = document.querySelectorAll("#common_questions button.app-button__accordion-title");

        accordions.forEach((el) => {
            el.addEventListener("click", () => {
                el.classList.toggle("active");

                const panel = el.nextElementSibling;

                let icon =  null;

                if(localStorage.getItem('theme') && JSON.parse(localStorage.getItem('theme')) === 'light') {
                    icon = el.querySelector('img.dark-icon')
                }else {
                    icon = el.querySelector('img.light-icon')
                }
                console.log('icon', icon)

                if (panel.style.display === "block") {
                    panel.style.display = "none";
                    icon.style.transform = 'rotate(0)';
                } else {
                    panel.style.display = "block";
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });
}