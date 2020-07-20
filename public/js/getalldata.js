function getAllData() {
    $.getJSON("/data", function (response) {
        let html = "<table>";
        for (let i = 0; i < response.length; i++) {
            html += "<tr>";
            html += "<td>" + response[i]["name"] + "</td>";
            html += "<td>" + response[i]["phone"] + "</td>";
            html += "<td>" + response[i]["number"] + "</td>";
            html += "<td>" + response[i]["date"] + "</td>";
            html += "<td>" + response[i]["code"] + "</td>";
            html += "</tr>";
        }
        html += "</table>";
        $("#data_table").append(html);
    });
}