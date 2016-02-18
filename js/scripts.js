$(document).ready(function () {
    $('#tabs li').hover(
    function () {
        //show submenu
        $('ul', this).show();
    }, function () {
        //hide submenu
        $('ul', this).hide();
    });

$('#instructions').on('click', crossout);


function crossout() {
        console.log($(this));

        // Get the parent <li>
        var listItem = $(this);

        // Toggle the class of the parent <li>
        listItem.toggleClass('done');
    }

$("input:checkbox").click(function () {
            var listInstruction = $(this);
            listInstruction.toggleClass('done:checked + span');
 
        });
});