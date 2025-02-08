const header = document.querySelector('header');
const lang = document.querySelector('.language');
const catalog = document.querySelector('.catalog');
const purchases = document.querySelector('.purchases');
const searchInput = document.querySelector('.search');
const theme = document.querySelector('.theme');

const login = document.querySelector('.login');
const login_input = document.querySelector('.login_input');
const password_input = document.querySelector('.password_input');
const login_btn = document.querySelector('.login_btn');
const register = document.querySelector('.register');

const footer = document.querySelector('footer');

const translations = {
    en: {
        name: 'GameVault+ <br> Login',
        catalog: 'Catalog',
        login: 'Login',
        login_input: 'Enter your login',
        password_input: 'Enter your password',
        register: 'Don\'t have an account?<br>Register',
        footer: '© 2025 GameVault+. All rights reserved.',
    },
    ua: {
        name: 'GameVault+ <br> Вхід',
        catalog: 'Каталог',
        login: 'Увійти',
        login_input: 'Введіть ваш логін',
        password_input: 'Введіть ваш пароль',
        register: 'Немає аккаунту?<br>Зареєструватися',
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
