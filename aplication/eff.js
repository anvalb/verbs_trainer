$(function () {
    var $body = $('body'),
        changeEnterVerbs = 0;
    $body.on('click', '.changeEnterVerbs', function () {
        if (changeEnterVerbs == 0) {
            $('.enterSimpleVerb').fadeOut(200, function () {
                $('.enterNotSimpleVerb').fadeIn(200);
            });
            changeEnterVerbs = 1;
        }
        else {
            $('.enterNotSimpleVerb').fadeOut(200, function () {
                $('.enterSimpleVerb').fadeIn(200);
            });
            changeEnterVerbs = 0;
        }
    });
});