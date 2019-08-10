$(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("submit function");
    var newBurger = {
      burger_name: $("#burgerName").val(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("New burger has been created!" + newBurger);
      location.reload();
    });
  });

  $(".change-devour").on("submit", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevour");
    console.log("Burger has been clicked")
    var newDevouredState = {
      devoured: newDevoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
        console.log("Burger has been: " + newDevoured)
        location.reload();
    })
  });
});
