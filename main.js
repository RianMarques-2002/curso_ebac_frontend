$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const taskName = $('#addTask').val();
        const newTask = $(`<li>${taskName}</li>`);
        $(newTask).appendTo('ul');
        $('#addTask').val('');
        });
    $("ul").on("click", "li", function() {
    $(this).css("text-decoration", "line-through");
    });
});
