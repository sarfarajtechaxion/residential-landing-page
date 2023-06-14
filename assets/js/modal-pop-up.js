//Form Validation
$(document).ready(function () {
    $("#properties-info").validate({
        rules: {
            fullname: {required:true},
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
            firstname: {required: 'please enter full name'},
            email: {required: 'please enter valid email id'},
            phone: {required: 'phone number must 10 digit'}
        },
    });
});
// Close Button Click
$('.close').click(function() {
    $('#properties-modal').hide();
    $('body').removeClass('open');
});
// Open Modal Popup
$(".prop_interest").click(function(){
    $('body').addClass('open');
    var propType = $(this).attr('data-type');
    console.log(propType);
    $(".Property_type_title").text(propType+" Properties");
    $(".Property_type").val(propType);    
    $('#properties-modal').show();
});