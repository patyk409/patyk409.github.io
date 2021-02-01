$(document).ready(function () {
    const buy = $('.buy');
    const sell = $('.sell');
    const btn = $('.bc-rate');

    const buyRate = $('<p></p>');
    $(buy).append(buyRate);
    const sellRate = $('<p></p>');
    $(sell).append(sellRate);

    let lastBuy = 0;
    let lastSell = 0;

    $(btn).click(function () {
        $.getJSON('https://blockchain.info/pl/ticker')
            .done(data => {
                if (lastBuy === 0) {
                    $(buyRate).html(`${data.PLN.buy} <i class="fas fa-grip-lines"></i>`);
                    $(sellRate).html(`${data.PLN.sell} <i class="fas fa-grip-lines"></i>`);
                    lastBuy = +data.PLN.buy;
                    lastSell = +data.PLN.sell;
                } else {
                    //buy
                    if (+data.PLN.buy > lastBuy) {
                        $(buyRate).html(`${data.PLN.buy} <i class="fas fa-arrow-up"></i>`);
                    } else if (+data.PLN.buy < lastBuy) {
                        $(buyRate).html(`${data.PLN.buy} <i class="fas fa-arrow-down"></i>`);
                    } else {
                        $(buyRate).html(`${data.PLN.buy} <i class="fas fa-grip-lines"></i>`);
                    }
                    lastBuy = +data.PLN.buy;
                    //sell
                    if (+data.PLN.sell > lastSell) {
                        $(sellRate).html(`${data.PLN.sell} <i class="fas fa-arrow-up"></i>`);
                    } else if (+data.PLN.sell < lastSell) {
                        $(sellRate).html(`${data.PLN.sell} <i class="fas fa-arrow-down"></i>`);
                    } else {
                        $(sellRate).html(`${data.PLN.sell} <i class="fas fa-grip-lines"></i>`);
                    }
                    lastSell = +data.PLN.sell;
                }
            })
            .fail(error => {
                console.error(error);
            });
    });
});