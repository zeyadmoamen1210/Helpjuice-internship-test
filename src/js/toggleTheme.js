export default function toggleTheme() {

    let lightBtn = document.querySelector('[data-id="light"]');
    let darkBtn = document.querySelector('[data-id="dark"]');

    const changeTheme = (theme) => {
        const htmlTag = document.getElementsByTagName('html')[0];
        htmlTag.className = ''
        htmlTag.classList.add(theme)
        localStorage.setItem('current_theme', JSON.stringify(theme))

        if(theme === 'light') {
            lightBtn.classList.remove('block');
            lightBtn.classList.add('hidden');

            darkBtn.classList.remove('hidden');
            darkBtn.classList.add('block');
        }else {
            darkBtn.classList.remove('block');
            darkBtn.classList.add('hidden');

            lightBtn.classList.remove('hidden');
            lightBtn.classList.add('block');
        }
    }

    if(localStorage.getItem('current_theme')) {
        changeTheme(JSON.parse(localStorage.getItem('current_theme')))
    }else {
        changeTheme('light')
    }

    lightBtn.addEventListener('click', () => {
        changeTheme('light');
    })

    darkBtn.addEventListener('click', () => {
        changeTheme('dark');
    })

}