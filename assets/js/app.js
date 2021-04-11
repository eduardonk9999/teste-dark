$(document).ready(function () {
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "file:///home/eduardo/Documentos/teste-darkside-bomdiaveronica/assets/js/api.json",
        "method": "GET",
        "headers": {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "https://www.darksidebooks.com.br",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
    }
    $.ajax(settings).done(function (response) {
        console.log(response);

    });

    
});

