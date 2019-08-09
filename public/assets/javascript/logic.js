$(function() {
    $('#submit').on('click',  function(event) {
        event.preventDefault();
        console.log("submit function")
        var newBurger = {
            burger_name: $('#burgerName').val(), 
            devoured: 0
        };

        $.ajax('/api/burgers', {
            type: "POST", 
            data: newBurger
        }).then(function() {
            console.log("New burger has been created!" + newBurger);
            // location.reload();
        })

    });
})