// header
const lang = document.querySelector('.language');
const catalog = document.querySelector('.catalog');
const purchases = document.querySelector('.purchases');
const searchInput = document.querySelector('.search');
const theme = document.querySelector('.theme');

// steamcurr
const steamcurr = document.querySelector('.steamcurr');
const steamIdInput = document.querySelector('.steam_id');
const buyScBtn = document.querySelector('.buyscbtn');
const totalLabel = document.querySelector('.total');
const steamcurrTitle = document.querySelector('.steamcurr h1');
const steamcurrRate = document.querySelector('.steamcurr h2');
const buyScInput = document.querySelector('.buy_sc');
const total = document.querySelector('.total');
const rateLabel = document.querySelector('.rate-label');
const rateValue = document.querySelector('.rate-value');

// recItems
const items = document.querySelector('.items');
const recItems = document.querySelectorAll('.rec-item');
const recItemPrices = document.querySelectorAll('.rec-item h3');
const recItemBuyBtns = document.querySelectorAll('.rec-item .buy_btn');

// 
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// additional
const currencySymbol = document.querySelector('.currency -symbol');
const buy_sc = document.querySelector('.buy_sc');

let translations = {
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
            { title: 'ElevenLabs AI', price: '90₴', buyBtn: 'Купити' },
            { title: 'Voice AI Pro', price: '180₴', buyBtn: 'Купити' }
        ]
    }
};
let redirected = false;
recItems.forEach((item, index) => {
    item.addEventListener('click', () => {

        translations.en.steamcurr = 'none';
        translations.ua.steamcurr = 'none';
        redirected = true;
        items.style.display = 'none';
        steamcurr.style.display = 'none';

        const mainDivCreate = document.createElement('div');
        mainDivCreate.className = 'main-item';
        mainDivCreate.style.display = 'flex';
        mainDivCreate.style.justifyContent = 'center';
        mainDivCreate.style.alignItems = 'center';
        mainDivCreate.style.flexDirection = 'column';
        mainDivCreate.style.marginTop = '20px';

        const nameDivCreate = document.createElement('div');
        nameDivCreate.className = 'name-item';
        nameDivCreate.style.display = 'flex';
        nameDivCreate.style.justifyContent = 'center';
        nameDivCreate.style.alignItems = 'center';
        nameDivCreate.style.flexDirection = 'row';
        nameDivCreate.style.marginTop = '20px';

        const itemNameCreate = document.createElement('h1');
        itemNameCreate.textContent = item.querySelector('h2').textContent;
        itemNameCreate.style.textAlign = 'center';
        itemNameCreate.style.marginRight = '20px';
        itemNameCreate.style.fontSize = '30px';

        const itemImgCreate = document.createElement('img');
        itemImgCreate.src = item.querySelector('img').src;
        itemImgCreate.style.width = '30pc';
        itemImgCreate.style.height = 'auto';
        itemImgCreate.style.marginTop = '20px';
        itemImgCreate.style.borderRadius = '10px';

        const itemPrice = recItemPrices[index].textContent;

        document.querySelector('main').appendChild(mainDivCreate);
        document.querySelector('.main-item').appendChild(nameDivCreate);
        document.querySelector('.name-item').appendChild(itemNameCreate);
        document.querySelector('.name-item').appendChild(itemImgCreate);

        footer.style.position = 'fixed';
        footer.style.bottom = '0';

        main.style.height = '45pc';
    });
});

catalog.addEventListener('click', () => {
    if (redirected) {
        translations.en.steamcurr = 'flex';
        translations.ua.steamcurr = 'flex';
        redirected = false;
        items.style.display = 'flex';
        steamcurr.style.display = 'flex';

        const existingDiv = document.querySelector('.main-item');

        footer.style.position = 'relative';
        footer.style.bottom = '0';

        main.style.height = 'auto';
        if (existingDiv) {
            existingDiv.remove();
        }
    }
});

let currentRate = 1.2;
let currency = '₴';


theme.addEventListener('click', function () {
    let icon = document.getElementById('icon');
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'photos/sun.png';
    } else {
        icon.src = 'photos/moon.png';
    };
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
    steamcurr.style.display = translations.steamcurr;
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
};

function updateCurrencyText() {
    const isDollar = currency === '$';
    const langKey = lang.innerHTML.includes('usa.png') ? 'en' : 'ua';
    rateLabel.textContent = isDollar ? translations.en.rateLabel : translations.ua.rateLabel;
    currencySymbol.textContent = isDollar ? translations.en.currencySymbol : translations.ua.currencySymbol;
    rateValue.innerHTML = currentRate;
};

function updateTotal() {
    const amount = parseFloat(buyScInput.value) || 0;
    total.textContent = (amount * currentRate).toFixed(2) + ' ' + currency;
};

function updateRecItems(langKey) {
    recItems.forEach((item, index) => {
        item.querySelector('h2').textContent = translations[langKey].recItems[index].title;
        item.querySelector('h3').textContent = translations[langKey].recItems[index].price;
        item.querySelector('.buy_btn').textContent = translations[langKey].recItems[index].buyBtn;
    });
};