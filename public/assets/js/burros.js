// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burros/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurro = {
      burro_name: $("#bu").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burros", {
      type: "POST",
      data: newBurro
    }).then(
      function () {
        console.log("created new burro");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burro").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burros/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burro", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});