function getUserInfo() {
    $.getJSON("/userinfo", function (response) {
        let html = "<header>\n" +
            "                <div class=\"tatarstan-flag-backgound\">\n" +
            "                    <div class=\"row justify-content-md-center\">\n" +
            "                        <h1>" + response["name"] + "</h1>\n" +
            "                    </div>\n" +
            "                    <div class=\"row justify-content-md-center\">\n" +
            "                        <h4>" + response["description"] + "</h4>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </header>\n" +
            "            <section>\n" +
            "                <div class=\"row\">\n" +
            "                    <div class=\"col-8 central-m\">\n" +
            "                        <div class=\"row justify-content-md-center\">\n" +
            "                            <h3>" + response["info"] + "</h3>\n" +
            "                        </div>\n" +
            "                        <div class=\"row justify-content-md-center\">\n" +
            "                            <p>Мои услуги:</p>\n" +
            "                        </div>\n" +
            "                        <div class=\"row justify-content-md-center\">\n" +
            "                            <ul>";

        for (let i = 0; i < response["services"].length; i++) {
            html += "<li>" + response["services"][i] + "</li>\n";
        }

        html += "</ul>\n" +
            "                        </div>\n" +
            "                        <div class=\"row justify-content-md-center\">\n" +
            "                            <p class=\"blink\"><a class=\"btn btn-lg btn-dark\" href=\"enroll.html\">Записывайся скорее!!!!!1!!1</a></p>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-4\">\n" +
            "                        <img src=\"images/" + response["photofile"] + "\" class=\"img-fluid mx-auto d-block box-shadow border\" alt=\".\" height=\"500\">\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </section>";

        $("#header-and-body").append(html);
    });
}