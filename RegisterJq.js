$("#fname_err").hide();
$("#lname_err").hide();
$("#password_err").hide();
$("#pass_confirm_err").hide();
$("#gender_err").hide();
$("#email_err").hide();
$("#phone_err").hide();
$("#address_err").hide();
$("#post_err").hide();
$("#rule_err").hide();

var fname_err = false;
var lname_err = false;
var password_err = false;
var pass_confirm_err = false;
var gender_err = false;
var email_err =false;
var phone_err = false;
var address_err = false;
var post_err = false;
var rule_err =false;

function check_fname() {
    var pattern = /^[a-zA-Z]*$/;
    var fname = $("#firstname").val();
    if (pattern.test(fname) && fname != '') {
        $("#fname_err").hide();
    } else {
        $("#fname_err").html("نام باید شامل حروف باشد.");
        $("#fname_err").show();
        fname_err = true;
    }
}

function check_lname() {
    var pattern = /^[a-zA-Z]*$/;
    var lname = $("#lastname").val();
    if (pattern.test(lname) && lname != '') {
        $("#lname_err").hide();
    } else {
        $("#lname_err").html("نام خانوادگی باید شامل حروف باشد.");
        $("#lname_err").show();
        lname_err = true;
    }
}

function check_password() {
    var password_length = $("#password").val().length;
    if (password_length < 6) {
        $("#password_err").html("رمزعبور بیش از 6 کاراکتر باشد.");
        $("#password_err").show();
        password_err = true;
    } else {
        $("#password_err").hide();
    }
}

function check_confirm_password() {
    var password = $("#password").val();
    var password_confirm = $("#pass_confirm").val();
    if ( password !== password_confirm || password_confirm == '') {
        $("#pass_confirm_err").html("خطا در تایید رمزعبور");
        $("#pass_confirm_err").show();
        pass_confirm_err = true;
    } else {
        $("#pass_confirm_err").hide();
    }
}

function check_gender() {
    var gender = $("#gender").val();
    if (gender == 0) {
        $("#gender_err").html("خطا در انتخاب جنسیت");
        $("#gender_err").show();
        gender_err = true;
    } else {
        $("#gender_err").hide();
    }
}

function check_email() {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = $('#email').val();
    if (pattern.test(email) && email != '') {
        $("#email_err").hide();
    } else {
        $("#email_err").html("خطا در فرمت ایمیل");
        $("#email_err").show();
        email_err = true;
    }
}

function check_phone() {
    var phone = $("#phone").val();
    if (phone == '') {
        $("#phone_err").html("خطا در شماره تماس");
        $("#phone_err").show();
        phone_err = true;
    } else {
        $("#phone_err").hide();
    }
}

function check_address() {
    var address = $("#address").val();
    if (address == '') {
        $("#address_err").html("خطا در آدرس");
        $("#address_err").show();
        address_err = true;
    } else {
        $("#address_err").hide();
    }
}

function check_post() {
    var post = $("#post").val();
    if (post == '') {
        $("#post_err").html("خطا در شماره کدپستی");
        $("#post_err").show();
        post_err = true;
    } else {
        $("#post_err").hide();
    }
}

function check_rule() {
    var rule = $("#rule:checked").val();
    if (rule == "on") {
        $("#rule_err").hide();
    } else {
        $("#rule_err").html("خطا در موافقت با قوانین.");
        $("#rule_err").show();
        rule_err = true;
    }
}

$("#vForm").submit(function() {
    fname_err = false;
    lname_err = false;
    password_err = false;
    pass_confirm_err = false;
    gender_err = false;
    email_err = false;
    phone_err = false;
    address_err = false;
    post_err = false;
    rule_err =false;

    check_fname();
    check_lname();
    check_password();
    check_confirm_password();
    check_gender();
    check_email();
    check_phone();
    check_address();
    check_post();
    check_rule();

    if (fname_err === false && lname_err === false && password_err === false && pass_confirm_err === false &&
        gender_err === false && email_err === false && phone_err === false && address_err === false &&
        post_err === false && rule_err === false) {
            return true;
        } else {
            return false;
        }
})
