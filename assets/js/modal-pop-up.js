$(document).ready(function() {
    // Affordable Form Validation
    $('.close').click(function() {
        // Show the popup modal
        $('#affordable-modal').hide();
        $('body').removeClass('open');
    });
    $('.affordable-button').click(function() {
        // Show the popup modal
        $('#affordable-modal').show();
        $('body').addClass('open');
    });
    
    $("#affordable-info").validate({
        rules: {
            fullname: 'required',
            email: {
                required: true,
                email: true,
                maxlength: 255,
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            firstname: 'please enter full name',
            email: 'please enter valid email id',
            phone: 'phone number must 10 digit'
        },
    });

    // Luxurious Form Validation

    $('.close').click(function() {
        // Show the popup modal
        $('#luxurious-modal').hide();
        $('body').removeClass('open');
    });
    
    $('.luxurious-button').click(function() {
        // Show the popup modal
        $('#luxurious-modal').show();
        $('body').addClass('open');
    });

    $("#luxurious-modal form").validate({
        rules: {
            fullname: 'required',
            email: {
                required: true,
                email: true,
                maxlength: 255,
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            firstname: 'please enter full name',
            email: 'please enter valid email id',
            phone: 'phone number must 10 digit'
        },
    });

    // Premium Form validation

    $('.close').click(function() {
        // Show the popup modal
        $('#premium-modal').hide();
        $('body').removeClass('open');
    });
    
    $('.premium-button').click(function() {
        // Show the popup modal
        $('#premium-modal').show();
        $('body').addClass('open');
    });

    $("#premium-modal form").validate({
        rules: {
            fullname: 'required',
            email: {
                required: true,
                email: true,
                maxlength: 255,
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            firstname: 'please enter full name',
            email: 'please enter valid email id',
            phone: 'phone number must 10 digit'
        },
    });

});