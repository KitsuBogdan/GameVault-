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
        } else {
            currency.innerHTML = '$';
            rateLabel.textContent = '1 Steam доллар =';
            currencySymbol.textContent = 'доллара';
        }
        updateTotal();
    });

    buyScInput.addEventListener('input', updateTotal);

    function updateTotal() {
        const amount = parseFloat(buyScInput.value) || 0;
        total.innerHTML = (amount * currentRate).toFixed(1)+currency.innerHTML;
    }