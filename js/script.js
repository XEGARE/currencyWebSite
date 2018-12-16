$(document).ready(function () {

    $.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function (data) {
        $("#dollar").html(data.Valute.USD.Value);
        $("#euro").html(data.Valute.EUR.Value);
    });
});