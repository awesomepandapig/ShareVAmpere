var stockPrice = 0;

fetch('https://fcc-stockchecker.glitch.me//api/stock-prices?ticker1=NVDA').then(function(response) {
    return response.json();
}).then(function(data) {
    stockPrice =  data.stockData.price;
    document.getElementById("price").innerHTML = "$" + stockPrice;
    propogate();
}).catch(function() {
    console.log("Data failed to load.");
});

document.addEventListener("DOMContentLoaded", function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("made-by-link").style.borderColor = color;
    document.getElementById("made-by-link").style.color = color;
});

function propogate() {
    var cardPrice = 0;
    var card = "";
    document.getElementById('dollar-amt-span').innerHTML = "$";
    document.getElementById('dollar-amt-span').innerHTML = "$";
    document.getElementById("3060Ti-img").style.display = "none";
    document.getElementById("3070-img").style.display = "none";
    document.getElementById("3080-img").style.display = "none";
    document.getElementById("3090-img").style.display = "none";
    if (document.getElementById("card-select").value == "3060Ti") {
        cardPrice = 399.99;
        card = "RTX 3060 Ti";
        document.getElementById("card-name").innerHTML = card;
        document.getElementById("3060Ti-img").style.display = "block";
    } else if (document.getElementById("card-select").value == "3070") {
        cardPrice = 499.99;
        card = "RTX 3070";
        document.getElementById("card-name").innerHTML = card;
        document.getElementById("3070-img").style.display = "block";
    } else if (document.getElementById("card-select").value == "3080") {
        cardPrice = 699.99;
        card = "RTX 3080";
        document.getElementById("card-name").innerHTML = card;
        document.getElementById("3080-img").style.display = "block";
    } else {
        cardPrice = 1499.99
        card = "RTX 3090";
        document.getElementById("card-name").innerHTML = card;
        document.getElementById("3090-img").style.display = "block";
    }
    document.getElementById("price-card").innerHTML = "$" + cardPrice;
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
    document.getElementById("selected-card").innerHTML = card;
    document.getElementById('price').style.display = "block";
    document.getElementById('price-card').style.display = "block";
}