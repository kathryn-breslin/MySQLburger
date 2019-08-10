$(function() {
  $("#add").on("click", function(event) {
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

  $(".devourButton").on("submit", function(event) {
      event.preventDefault();
    var id = $(this).children('.change-devour').val();
    console.log("This is the id of the burger: " + id)
    console.log("Burger has been clicked")
    var newDevouredState = {
      devoured: id
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
        console.log("Burger has been: " + newDevouredState)
        location.reload();
    })
  });

  $('.deleteButton').on('submit', function(event) {
    event.preventDefault();
    var id = $(this).children('.delete').val();

    $.ajax('/api/burgers/' + id, {
      type: "DELETE"
    }).then(function(){
      console.log("Deleting burger with id of: " + id);
      location.reload();
    })

  })
});
