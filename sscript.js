
const lang = document.querySelector('.language');
const catalog = document.querySelector('.catalog');
const purchases = document.querySelector('.purchases');
const searchInput = document.querySelector('.search');
const theme = document.querySelector('.theme');

const login = document.querySelector('.login');
const login_input = document.querySelector('.login_input');

const footer = document.querySelector('footer');



let currentRate = 1.2;
let currency = '₴';

const translations = {
    en: {
        footer: '© 2025 GameVault+. All rights reserved.',
        catalog: 'Catalog',
    },
    ua: {
        footer: '© 2025 GameVault+. Всі права захищені.',
        catalog: 'Каталог',
    }
};

lang.addEventListener('click', toggleLanguage);

function toggleLanguage() {
    const isEnglish = lang.innerHTML.includes('usa.png');
    const newLang = isEnglish ? 'ua' : 'en';
    lang.innerHTML = isEnglish 
        ? '<img src="photos/ua.png" alt="ua">' 
        : '<img src="photos/usa.png" alt="usa">';
    footer.textContent = translations[newLang].footer;
    catalog.textContent = translations[newLang].catalog;
};

theme.addEventListener('click', function() {
    let icon = document.getElementById('icon');
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'photos/sun.png';
    } else {
        icon.src = 'photos/moon.png';
    };
});
