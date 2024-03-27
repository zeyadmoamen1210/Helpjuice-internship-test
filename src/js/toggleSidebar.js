export default function toggleSidebar() {
    const sidebarBtn = document.querySelector('#toggleSidebar');
    const closeSidebarBtn = document.querySelectorAll('.closeSidebar');

    sidebarBtn.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.style.display = 'block';
    })

    closeSidebarBtn.forEach(ele => {
        ele.addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            sidebar.style.display = 'none';
        })
    });
}