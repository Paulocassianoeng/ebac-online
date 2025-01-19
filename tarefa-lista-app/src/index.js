// This file contains the JavaScript code for the task list application.

$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const tarefa = $('#tarefa').val(); // Get the value of the input field
        if (tarefa) {
            // Create a new list item with a delete button and append it to the unordered list
            $('ul').append(`<li>${tarefa} <button class="delete-btn">Excluir</button></li>`);
            $('#tarefa').val(''); // Clear the input field
        }
    });

    // Add click event to list items to toggle line-through effect
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed'); // Toggle the 'completed' class
    });

    // Add click event to delete buttons to remove the task
    $('ul').on('click', '.delete-btn', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the li
        $(this).parent().remove(); // Remove the parent li element
    });
});