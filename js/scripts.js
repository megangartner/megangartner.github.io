$(document).ready(function () {
    /*
     This is fabulous!!  :)
    */

    $('#tabs li').hover(
    function () {
        //show submenu
        $('ul', this).show();
    }, function () {
        //hide submenu
        $('ul', this).hide();
    });

<<<<<<< HEAD
/*
    This click event is crossing everything out any time the user
    clicks anywhere inside the form (which has that ID of #instructions). 
    Is that right?

    If you just want people to cross out individual items, you can apply
    the click event to the checkbox input fields instead.
*/

$('#instructions').on('click', crossout);
=======
$("input").on('click', crossout);
>>>>>>> megangartner/master


function crossout() {
        console.log($(this));

        // Get the parent <li>
        var listItem = $(this);

        // Toggle the class of the parent <li>
        listItem.toggleClass('done');
    }

$("input:checkbox").click(function () {
            var listInstruction = $(this);
            /*
                I don't think this line is doing what you intend it to do.
                It is literally adding classes to the input field that was clicked,
                called 'done:checked + span'.  So, in HTML, the checkbox looks like this:

                <input type="checkbox" name="step" value="preheat" class="done:checked + span">

                The .toggleClass() function should only be passed the name of the class you want
                to add/remove.  If you also want to display the input checkbox as being checked,
                you could do something like this:

                if (listInstruction.attr('checked')) {
                    listInstruction.removeAttr('checked');
                } else {
                    listInstruction.attr('checked', 'checked');
                }
                
                Sadly, there is no "toggleAttribute" function in jQuery, so you do need
                to use an if statement for this.
            */
            listInstruction.toggleClass('done:checked + span');
 
        });
});