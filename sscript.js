const lang = document.querySelector('.language');
const catalog = document.querySelector('.catalog');
const purchases = document.querySelector('.purchases');
const steamcurr = document.querySelector('.steamcurr');
const searchInput = document.querySelector('.search');
const steamIdInput = document.querySelector('.steam_id');
const buyScBtn = document.querySelector('.buyscbtn');
const totalLabel = document.querySelector('.total');
const steamcurrTitle = document.querySelector('.steamcurr h1');
const steamcurrRate = document.querySelector('.steamcurr h2');
const recItems = document.querySelectorAll('.rec-item');
const recItemPrices = document.querySelectorAll('.rec-item h3');
const recItemBuyBtns = document.querySelectorAll('.rec-item .buy_btn');
const theme = document.querySelector('.theme');

const buyScInput = document.querySelector('.buy_sc');
const total = document.querySelector('.total');
const rateLabel = document.querySelector('.rate-label');
const rateValue = document.querySelector('.rate-value');
const currencySymbol = document.querySelector('.currency -symbol');
const buy_sc = document.querySelector('.buy_sc');

const footer = document.querySelector('footer');


let currentRate = 1.2;
let currency = '₴'

const translations = {
    en: {
        buy_sc: 'Amount in Steam currency',
        footer: '© 2025 GameVault+. All rights reserved.',
        catalog: 'Catalog',
        purchases: 'My purchases',
        rateLabel: '0.025 Steam dollar =',
        currencySymbol: 'dollars',
        steamcurr: 'block',
        searchPlaceholder: 'Search...',
        steamIdPlaceholder: 'Steam ID',
        buyScBtn: 'Buy',
        totalLabel: '0$',
        steamcurrTitle: 'Buy Steam Currency',
        steamcurrRate: '0.025 Steam dollar = 0.03 dollars',
        recItems: [
            { title: 'ChatGPT 4', price: '2$', buyBtn: 'Buy' },
            { title: 'Midjourney AI', price: '5$', buyBtn: 'Buy' },
            { title: 'Stable Diffusion', price: '4$', buyBtn: 'Buy' },
            { title: 'AI Voice Generator', price: '7$', buyBtn: 'Buy' },
            { title: 'ElevenLabs AI', price: '3$', buyBtn: 'Buy' },
            { title: 'Voice AI Pro', price: '6$', buyBtn: 'Buy' }
        ]
    },
    ua: {
        buy_sc: 'Сума в Steam валюті',
        footer: '© 2025 GameVault+. Всі права захищені.',
        catalog: 'Каталог',
        purchases: 'Мої Покупки',
        rateLabel: '1 Steam гривня =',
        currencySymbol: 'гривні',
        steamcurr: 'block',
        searchPlaceholder: 'Пошук...',
        steamIdPlaceholder: 'Steam ID',
        buyScBtn: 'Купити',
        totalLabel: '0₴',
        steamcurrTitle: 'Купити валюту Steam',
        steamcurrRate: '1 Steam гривня = 1.2 гривні',
        recItems: [
            { title: 'ChatGPT 4', price: '60₴', buyBtn: 'Купити' },
            { title: 'Midjourney AI', price: '150₴', buyBtn: 'Купити' },
            { title: 'Stable Diffusion', price: '120₴', buyBtn: 'Купити' },
            { title: 'AI Voice Generator', price: '210₴', buyBtn: 'Купити' },
            { title: 'ElevenLabs AI', price: '90₴', buyBtn: 'Купити' },
            { title: 'Voice AI Pro', price: '180₴', buyBtn: 'Купити' }
        ]
    }
};

function changeRootVariables(newVariables) {
    for (const [key, value] of Object.entries(newVariables)) {
        document.documentElement.style.setProperty(key, value);
    }
}

const oldVariables = {
    '--primary-color': '#4A4A4A',
    '--secondary-color': '#2A3D66',
    '--tertiary-color': '#1E2A45',
    '--quaternary-color': '#B0B0B0',
    '--highlight-color': '#D9D9D9',
    '--success-color': '#34C200',
    '--success-hover-color': '#2A9E00',
    '--text-color': '#FFFFFF',
    '--shadow-color': 'rgba(74, 74, 74, 0.5)'
};

const newVariables = {
    '--primary-color': '#71b300',
    '--secondary-color': '#73ca73',
    '--tertiary-color': '#d4d487',
    '--quaternary-color': '#C0C0C0',
    '--highlight-color': '#87ce66',
    '--success-color': '#32CD32',
    '--success-hover-color': '#228B22',
    '--text-color': '#333333',
    '--shadow-color': 'rgba(0, 0, 0, 0.1)'
};

theme.addEventListener('click', () => {
    const isOldTheme = theme.innerHTML.includes('moon');
    theme.innerHTML = isOldTheme ? '<img src="photos/sun.png" alt="sun">' : '<img src="photos/moon.png" alt="moon">';
    changeRootVariables(isOldTheme ? newVariables : oldVariables);
});

lang.addEventListener('click', toggleLanguage);
buyScInput.addEventListener('input', updateTotal);

function toggleLanguage() {
    const isEnglish = lang.innerHTML.includes('usa.png');
    const newLang = isEnglish ? 'ua' : 'en';
    lang.innerHTML = isEnglish 
        ? '<img src="photos/ua.png" alt="ua">' 
        : '<img src="photos/usa.png" alt="usa">';
    
    buy_sc.placeholder = translations[newLang].buy_sc;
    footer.textContent = translations[newLang].footer;
    catalog.textContent = translations[newLang].catalog;
    purchases.textContent = translations[newLang].purchases;
    steamcurr.style.display = translations[newLang].steamcurr;
    searchInput.placeholder = translations[newLang].searchPlaceholder;
    steamIdInput.placeholder = translations[newLang].steamIdPlaceholder;
    buyScBtn.textContent = translations[newLang].buyScBtn;
    totalLabel.textContent = translations[newLang].totalLabel;
    steamcurrTitle.textContent = translations[newLang].steamcurrTitle;
    steamcurrRate.innerHTML = translations[newLang].steamcurrRate;
    currency = isEnglish ? '₴' : '$';
    currentRate = isEnglish ? 1.2 : 1.2;
    updateRecItems(newLang);
    updateCurrencyText();
    updateTotal();
}

function updateCurrencyText() {
    const isDollar = currency === '$';
    const langKey = lang.innerHTML.includes('usa.png') ? 'en' : 'ua';
    rateLabel.textContent = isDollar ? translations.en.rateLabel : translations.ua.rateLabel;
    currencySymbol.textContent = isDollar ? translations.en.currencySymbol : translations.ua.currencySymbol;
    rateValue.innerHTML = currentRate;
}

function updateTotal() {
    const amount = parseFloat(buyScInput.value) || 0;
    total.textContent = (amount * currentRate).toFixed(2) + ' ' + currency;
}

function updateRecItems(langKey) {
    recItems.forEach((item, index) => {
        item.querySelector('h2').textContent = translations[langKey].recItems[index].title;
        item.querySelector('h3').textContent = translations[langKey].recItems[index].price;
        item.querySelector('.buy_btn').textContent = translations[langKey].recItems[index].buyBtn;
    });
}
і