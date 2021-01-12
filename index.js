function propogate() {
    $.getJSON('https://fcc-stockchecker.glitch.me//api/stock-prices?ticker1=NVDA', function(data) {
    var stockPrice = data.stockData.price;
    var cardPrice = 499;
    document.getElementById("price").innerHTML += stockPrice;
    var diff = stockPrice - cardPrice;
    diff = diff.toFixed(2);
    if (diff > 0) {
        document.getElementById('price').style.color = "#008000";
        document.getElementById('price-card').style.color = "#FF0000";
        document.getElementById('dollar-amt-span').innerHTML += diff;
        document.getElementById('dollar-amt-span').style.color = "#008000";
        document.getElementById('more-or-less-span').innerHTML = " more";
    } else if (diff != 0) {
        document.getElementById('price').style.color = "#FF0000";
        document.getElementById('price-card').style.color = "#008000";
        document.getElementById('dollar-amt-span').innerHTML += Math.abs(diff);
        document.getElementById('dollar-amt-span').style.color = "#FF0000";
        document.getElementById('more-or-less-span').innerHTML = " less";
    } else {
        document.getElementById('price').style.color = "#000000";
        document.getElementById('price-card').style.color = "#000000";
    }
    document.getElementById('price').style.display = "block";
    document.getElementById('price-card').style.display = "block";
    });
}

document.addEventListener("DOMContentLoaded", function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("made-by-link").style.borderColor = color;
    document.getElementById("made-by-link").style.color = color;
});