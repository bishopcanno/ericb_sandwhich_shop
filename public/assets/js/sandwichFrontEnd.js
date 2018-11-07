// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("newEaten");
  
      console.log(id);
      console.log(newEaten);

      var newEatenState = {
        devoured: newEaten
      };
  
      // Send the PUT request.
      $.ajax("/api/sandwhiches/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed eaten to", newEaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".custom-sandwich-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      
      var newsandwhich = {
        sandwhich: $("#ca").val().trim(),
        devoured: $("[name=devour]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/sandwhiches", {
        type: "POST",
        data: newsandwhich
      }).then(
        function() {
          console.log("created new sandwhich");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-sandwhich").on("click", function(event) {
      var id = $(this).data("id");
      // Send the DELETE request.
      $.ajax("/api/sandwhiches/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted sandwhich", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
