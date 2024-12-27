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
let dlr = true;

lang.addEventListener('click', () => {
    if (lang.innerHTML === '<img src="photos/usa.png" alt="usa">') {
        lang.innerHTML = '<img src="photos/ua.png" alt="ua">';
        catalog.innerHTML = 'Каталог';
        purchases.innerHTML = 'Мої Покупки';
        steamcurr.style.display = 'block';
    } else {
        lang.innerHTML = '<img src="photos/usa.png" alt="usa">';
        catalog.innerHTML = 'Catalog';
        purchases.innerHTML = 'My purchases';
        steamcurr.style.display = 'none';
    }
});

currency.addEventListener('click', () => {
    if (currency.innerHTML === '$') {
        currency.innerHTML = '₴';
        rateLabel.textContent = '1 Steam гривня =';
        currencySymbol.textContent = 'гривні';
        currentRate = 1.2;
        rateValue.innerHTML = currentRate;
    } else {
        currency.innerHTML = '$';
        rateLabel.textContent = '0.025 Steam доллар =';
        currencySymbol.textContent = 'доллара';
        rateValue.innerHTML = '0.3';
    }
    updateTotal();
});

buyScInput.addEventListener('input', updateTotal);

function updateTotal() {
    const amount = parseFloat(buyScInput.value) || 0;
    if (currency.innerHTML === '$') {
        total.innerHTML = (amount * currentRate).toFixed(2) + ' ' + currency.innerHTML;
    } else {
        total.innerHTML = (amount * currentRate).toFixed(2) + ' ' + currency.innerHTML;
    }
}
