$(document).ready(function() {
    $.ajax({
        crossDomain: true,
        url: "https://www.hellenic-milsim.community/t/1657.json",
        success: function(data) {
            $('#content').html(data.post_stream.posts["0"].cooked);
        }
    });

});
