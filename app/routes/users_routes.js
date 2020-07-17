module.exports = function (app) {
    app.get('/userinfo', (request, response) => {

        var services = ["Приворот самых красивых татарочек",
                        "Снятие депрессии",
                        "Гадание на өчпочмаках"];

        var result = {
            "name": "Расимус Великиус",
            "description": "Татарский маг и волшебник",
            "info": "Использую в работе мәтрүшкә и сөтле чәй",
            "services": services,
            "photofile": "rasim.jpg"
        };

        response.send(JSON.stringify(result));
    });
};