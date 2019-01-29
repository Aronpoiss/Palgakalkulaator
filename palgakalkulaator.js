let tyyp = "brutopalk";

function val() {
    tyyp = document.getElementById("tyyp").value;
}
function arvuta() {

    let tootuskindlustus1 = 0;
    let tootuskindlustus2 = 0;
    let sotsiaalmaks = 0;
    let pensionifond = 0;
    let tulumaksuvaba = 0;
    let tulumaks = 0;
    let kokku1 = 0;
    let kokku2 = 0;
    if (tyyp == "brutopalk") {
        let summa = document.getElementById("summa").value;

        if (summa) {  
            // Arvutame tööandja maksud:
            tootuskindlustus1 = summa * 0.008;
            sotsiaalmaks = summa * 0.33;
            kokku1 = parseFloat(summa) + parseFloat(tootuskindlustus1) + parseFloat(sotsiaalmaks);

            // Arvutame töötaja maksud:
            tootuskindlustus2 = summa * 0.016;
            pensionifond = summa * 0.02;
            
            if (summa <= 1200) {
                tulumaksuvaba = 500;  
            } else if (summa >= 2100) {
                tulumaksuvaba = 0;
            } else {
                tulumaksuvaba = 5/9 * (2100 - summa);
            }

            if (summa <= 518.67) {
                tulumaks = 0;
                kokku2 = summa - tootuskindlustus2 - pensionifond - tulumaks;
                tulumaksuvaba = kokku2;
            } else {
                tulumaks = ( summa - tulumaksuvaba - tootuskindlustus2 - pensionifond ) * 0.2;
                kokku2 = summa - tootuskindlustus2 - pensionifond - tulumaks;
            }
        }
    } else if (tyyp == "netopalk") {

    } else {
        alert ("Ilmnes viga. Tüüp pole määratud!");
    }

    // Tööandja maksud
    document.getElementById('tootuskindlustus1').innerHTML = "Töötuskindlustusmakse: " + tootuskindlustus1.toFixed(2) + " EUR";
    document.getElementById('sotsiaalmaks').innerHTML = "Sotsiaalmaks: " + sotsiaalmaks.toFixed(2) + " EUR";
    document.getElementById('kokku1').innerHTML = "Tööandja kulu: " + kokku1.toFixed(2) + " EUR";

    // Töötaja maksud
    document.getElementById('tootuskindlustus2').innerHTML = "Töötuskindlustusmakse: " + tootuskindlustus2.toFixed(2) + " EUR";
    document.getElementById('pensionifond').innerHTML = "Pensionifond: " + pensionifond.toFixed(2) + " EUR";
    document.getElementById('tulumaks').innerHTML = "Tulumaks: " + tulumaks.toFixed(2) + " EUR";
    document.getElementById('tulumaksuvaba').innerHTML = "Maksuvaba tulu: " + tulumaksuvaba.toFixed(2) + " EUR";
    document.getElementById('kokku2').innerHTML = "Netopalk: " + kokku2.toFixed(2) + " EUR";
}