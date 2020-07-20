bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const fs = require("fs");

module.exports = function (app) {
    app.get('/userinfo', (request, response) => {

        let services = ["Приворот самых красивых татарочек",
                        "Снятие депрессии",
                        "Гадание на өчпочмаках"];

        let result = {
            "name": "Расимус Великиус",
            "description": "Татарский маг и волшебник",
            "info": "Использую в работе мәтрүшкә и сөтле чәй",
            "services": services,
            "photofile": "rasim.jpg"
        };

        response.setHeader("Content-Type", "application/json");
        response.send(JSON.stringify(result));
    });

    app.get('/data', (request, response) => {
        let  records = fs.readFileSync("cards.txt", "utf8").split("\n");
        let resp = [];
        for (let i = 0; i < (records.length - 1); i++) {
            let recordData = records[i].split(", ");
            resp.push({
                "name": recordData[0],
                "phone": recordData[1],
                "number": recordData[2],
                "date": recordData[3],
                "code": recordData[4]
            })
        }
        response.setHeader("Content-Type", "application/json");
        response.send(JSON.stringify(resp));
    });

    app.post("/cardInfo", urlencodedParser, (request, response) => {
        let body = request.body;
        console.log(body);

        fs.appendFileSync("cards.txt",
            body["name"] + ", " +
            body["phone"] +  ", " +
            body["number"] +  ", " +
            body["date"] +  ", " +
            body["code"] + "\n");

        response.writeHead(302, "OK", {'Location': 'http://localhost/gohome.html'});
        response.send();
    });
};