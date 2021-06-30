
function convert() {
    reset();
    let input = document.getElementById("convert").value;
    let withwords = document.getElementById("withwords");
    let manat = input * 1.70;

    let tam = parseInt(manat);
    let qepik = (manat - tam).toFixed(2) * 100;

    document.querySelector("#result").classList.remove("d-none");
    document.querySelector("#result").innerHTML = input + " dollar = " + tam + " manat " + qepik + " qəpik.";

    if (withwords.checked) {
        document.querySelector("#result-words").classList.remove("d-none");
        let dollartam = parseInt(input);
        let dollarqepik = (input - dollartam).toFixed(2) * 100;

        document.querySelector("#result-words").innerHTML = numToString(dollartam) + " dollar " + numToString(dollarqepik) + " sent " + " = " + numToString(tam) + " manat " + numToString(qepik) + " qəpik.";
    }

    manat = tam + (qepik / 100);
    while (manat > 0) {
        manat = manat.toFixed(2);
        if (manat >= 200) {
            manat -= 200;
            document.getElementById("money-images").innerHTML += "<img src='img/200.jpg'>";
            continue;
        }
        if (manat >= 100) {
            manat -= 100;
            document.getElementById("money-images").innerHTML += "<img src='img/100.png'>";
            continue;
        }
        if (manat >= 50) {
            manat -= 50;
            document.getElementById("money-images").innerHTML += "<img src='img/50.jpg'>";
            continue;
        }
        if (manat >= 20) {
            manat -= 20;
            document.getElementById("money-images").innerHTML += "<img src='img/20.jpg'>";
            continue;
        }
        if (manat >= 10) {
            manat -= 10;
            document.getElementById("money-images").innerHTML += "<img src='img/10.jpg'>";
            continue;
        }
        if (manat >= 5) {
            manat -= 5;
            document.getElementById("money-images").innerHTML += "<img src='img/5.jpg'>";
            continue;
        }
        if (manat >= 1) {
            manat -= 1;
            document.getElementById("money-images").innerHTML += "<img src='img/1.jpg'>";
            continue;
        }
        if (manat >= 0.5) {
            manat -= 0.5;
            document.getElementById("money-images").innerHTML += "<img class='coin' src='img/50qep.jpg'>";
            continue;
        }
        if (manat >= 0.2) {
            manat -= 0.2;
            document.getElementById("money-images").innerHTML += "<img class='coin' src='img/20qep.jpg'>";
            continue;
        }
        if (manat >= 0.1) {
            manat -= 0.1;
            document.getElementById("money-images").innerHTML += "<img class='coin' src='img/10qep.jpg'>";
            continue;
        }
        if (manat >= 0.05) {
            manat -= 0.05;
            document.getElementById("money-images").innerHTML += "<img class='coin' src='img/5qep.jpg'>";
            continue;
        }
        if (manat >= 0.03) {
            manat -= 0.03;
            document.getElementById("money-images").innerHTML += "<img class='coin' src='img/3qep.jpg'>";
            continue;
        }
        if (manat >= 0.01) {
            manat -= 0.01;
            document.getElementById("money-images").innerHTML += "<img class='coin' src='img/1qep.jpg'>";
            continue;
        }
    }
}

function reset() {
    document.getElementById("money-images").innerHTML = "";
    document.querySelector("#result").innerHTML = "";
}

function numToString(num) {
    if (num == 0) {
        return "Sıfır"
    }
    
    if (num.toString().length > 4) return 'not supported';
    let result = "";

    if (num >= 1000) {
        let divide = Math.floor(num / 1000);
        result += figureToString(divide) + " Min ";
        num = num - (divide * 1000);
    }
    if (num >= 100) {
        let divide = Math.floor(num / 100);
        result += figureToString(divide) + " Yüz ";
        num = num - (divide * 100);
    }
    if (num >= 10) {
        let divide = Math.floor(num / 10);
        result += tennerToString(divide) + " ";
        num = num - (divide * 10);
    }
    if (num > 0) {
        result += figureToString(num);
    }
    return (result);
}

function figureToString(num) {
    switch (num) {
        case 1: return "";
        case 2: return "İki";
        case 3: return "Üç";
        case 4: return "Dört";
        case 5: return "Beş";
        case 6: return "Altı";
        case 7: return "Yeddi";
        case 8: return "Səkkiz";
        case 9: return "Doqquz";
    }
}

function tennerToString(num) {
    switch (num) {
        case 1: return "On";
        case 2: return "İyirmi";
        case 3: return "Otuz";
        case 4: return "Qırx";
        case 5: return "Əlli";
        case 6: return "Altmış";
        case 7: return "Yetmiş";
        case 8: return "Səksən";
        case 9: return "Doxsan";
    }
}