const header = document.querySelector('header');
const lang = document.querySelector('.language');
const catalog = document.querySelector('.catalog');
const purchases = document.querySelector('.purchases');
const searchInput = document.querySelector('.search');
const theme = document.querySelector('.theme');

const re = document.querySelector('.login');
const login_input = document.querySelector('.login_input');
const password_input = document.querySelector('.password_input');
const password_confirm = document.querySelector('.password_confirm');
const login_btn = document.querySelector('.login_btn');
const register = document.querySelector('.register');

const footer = document.querySelector('footer');

const translations = {
    en: {
        name: 'GameVault+ <br> Register',
        catalog: 'Catalog',
        register: 'Register',
        login_input: 'Enter login',
        password_input: 'Enter password',
        password_confirm: 'Confirm password',
        register: 'Already have an account?<br>Login',
        footer: '© 2025 GameVault+. All rights reserved.',
    },
    ua: {
        name: 'GameVault+ <br> Реєстрація',
        catalog: 'Каталог',
        register: 'Реєстрація',
        login_input: 'Введіть логін',
        password_input: 'Введіть пароль',
        password_confirm: 'Підтвердіть пароль',
        register: 'Вже маєте акаунт?<br>Увійти',
        footer: '© 2025 GameVault+. Всі права захищені.',
    }
};

lang.addEventListener('click', toggleLanguage);

function toggleLanguage() {
    const isEnglish = lang.innerHTML.includes('usa.png');
    const newLang = isEnglish ? 'ua' : 'en';
    lang.innerHTML = isEnglish 
        ? '<img src="photos/ua.png" alt="ua">' 
        : '<img src="photos/usa.png" alt="usa">';
    header.querySelector('h1').innerHTML = translations[newLang].name;
    catalog.textContent = translations[newLang].catalog;
    login.querySelector("h1").textContent = translations[newLang].login;
    login_input.placeholder = translations[newLang].login_input;
    password_input.placeholder = translations[newLang].password_input;
    password_confirm.placeholder = translations[newLang].password_confirm;
    login_btn.textContent = translations[newLang].login;
    register.innerHTML = translations[newLang].register;
    footer.textContent = translations[newLang].footer;
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
