/**
 * Created by disco on 9/25/15.
 */
// client

$(document).ready(function() {

    var i = 0;

    $.ajax({
        url: "data.json",
    }).done(function(data) {
        while(i < data.length) {
            $("#ContentPlaceholder").append("<div style='height:35px; font-size:18px; font-weight:bold; color:#FFF; background-color:" + data[i].value + "'><p>" + data[i].color + "</p></div>");
            i++;
        }
    });

});