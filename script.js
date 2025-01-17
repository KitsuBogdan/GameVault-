const lang = document.querySelector('.language');
const catalog = document.querySelector('.catalog');
const purchases = document.querySelector('.purchases');
const currency = document.querySelector('.currency');
const steamcurr = document.querySelector('.steamcurr');

const buyScInput = document.querySelector('.buy_sc');
const total = document.querySelector('.total');
const rateLabel = document.querySelector('.rate-label');
const rateValue = document.querySelector('.rate-value');
const currencySymbol = document.querySelector('.currency-symbol');

let currentRate = 1.2;

lang.addEventListener('click', toggleLanguage);
currency.addEventListener('click', toggleCurrency);
buyScInput.addEventListener('input', updateTotal);

function toggleLanguage() {
    const isEnglish = lang.innerHTML.includes('usa.png');
    lang.innerHTML = isEnglish 
        ? '<img src="photos/ua.png" alt="ua">' 
        : '<img src="photos/usa.png" alt="usa">';
    
    catalog.textContent = isEnglish ? 'Каталог' : 'Catalog';
    purchases.textContent = isEnglish ? 'Мої Покупки' : 'My purchases';
    steamcurr.style.display = isEnglish ? 'block' : 'none';
}

function toggleCurrency() {
    const isDollar = currency.innerHTML === '$';
    currency.innerHTML = isDollar ? '₴' : '$';
    rateLabel.textContent = isDollar ? '1 Steam гривня =' : '0.025 Steam доллар =';
    currencySymbol.textContent = isDollar ? 'гривні' : 'доллара';
    currentRate = isDollar ? 1.2 : 0.3;
    rateValue.innerHTML = currentRate;
    updateTotal();
}

function updateTotal() {
    const amount = parseFloat(buyScInput.value) || 0;
    total.textContent = (amount * currentRate).toFixed(2) + ' ' + currency.innerHTML;
}
