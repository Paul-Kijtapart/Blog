define(['jquery'], function($) {
    return function() {
        $('form[id="contactForm"]').on('submit', function(event) {
            event.preventDefault();
            /* Validate the input first */
            var form = $('form[id="contactForm"]');

            /* Pass onto php */
            $.ajax({
                    url: 'php/contact_form.php',
                    type: 'POST',
                    data: $('form').serialize()
                })
                .done(function(data) {
                    console.log("success contact");
                    window.alert("thank you for taking time to contact me.");
                })
                .fail(function(data) {
                    console.log(data);
                    console.log("error contact");
                })
                .always(function(data) {
                    console.log("complete contact");
                });
        });
    }
});
