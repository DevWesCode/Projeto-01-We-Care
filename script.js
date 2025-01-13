function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        // Adiciona o listener para fechar ao clicar fora
        document.addEventListener('click', closeMenuOnClickOutside);
    } else {
        // Remove o listener quando o menu é fechado manualmente
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

function toggleSubmenu(event) {
    event.preventDefault();  // Impede o comportamento padrão do link
    const dropdown = event.target.closest('.dropdown');
    dropdown.classList.toggle('active');
}

function closeMenuOnClickOutside(event) {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');

    // Verifica se o clique foi fora do menu e do ícone do menu
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('active');
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}
