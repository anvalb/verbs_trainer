$(function(){

    // VERBS DETECT
    var newVerb = function (verb) {
        var st3 = verb.slice(-3),
            st2 = verb.slice(-2),
            verSprig = [],
            doneVerb = [];
        if (
            (st3 == "еть" ||
                st3 == "ать" ||
                st3 == "оть" ||
                st3 == "уть" ||
                st3 == "ять" ||
                st3 == "оть" ||
                st3 == "ыть" ||
                // OR -ить
                verb == "брить" ||
                verb == "стелить" ||
                verb == "почить" ||
                verb == "зиждиться" ||
                verb == "бить" ||
                verb == "вить" ||
                verb == "лить" ||
                verb == "пить" ||
                verb == "шить" ||
                verb == "гнить" ||
                verb == "жить" ||
                verb == "зыбить" ||
                verb == "ушибить" ||
                verb == "ошибиться")
                &&
                (verb != "блестеть" &&
                    verb != "болеть" &&
                    verb != "велеть" &&
                    verb != "вертеть" &&
                    verb != "видеть" &&
                    verb != "висеть" &&
                    verb != "галдеть" &&
                    verb != "глядеть" &&
                    verb != "гореть" &&
                    verb != "греметь" &&
                    verb != "гудеть" &&
                    verb != "гундеть" &&
                    verb != "дудеть" &&
                    verb != "зависеть" &&
                    verb != "звенеть" &&
                    verb != "зреть" &&
                    verb != "зудеть" &&
                    verb != "кипеть" &&
                    verb != "кишеть" &&
                    verb != "коптеть" &&
                    verb != "корпеть" &&
                    verb != "кряхтеть" &&
                    verb != "лететь" &&
                    verb != "ненавидеть" &&
                    verb != "обидеть" &&
                    verb != "пердеть" &&
                    verb != "пыхтеть" &&
                    verb != "свербеть" &&
                    verb != "свиристеть" &&
                    verb != "свистеть" &&
                    verb != "сидеть" &&
                    verb != "сипеть" &&
                    verb != "скорбеть" &&
                    verb != "скрипеть" &&
                    verb != "смердеть" &&
                    verb != "смотреть" &&
                    verb != "сопеть" &&
                    verb != "тарахтеть" &&
                    verb != "терпеть" &&
                    verb != "храпеть" &&
                    verb != "хрустеть" &&
                    verb != "шелестеть" &&
                    verb != "шипеть" &&
                    verb != "шуметь" &&
                    // OR -ать
                    verb != "бренчать" &&
                    verb != "брюзжать" &&
                    verb != "бурчать" &&
                    verb != "верещать" &&
                    verb != "визжать" &&
                    verb != "ворчать" &&
                    verb != "гнать" &&
                    verb != "дребезжать" &&
                    verb != "дышать" &&
                    verb != "держать" &&
                    verb != "дрожать" &&
                    verb != "жужжать" &&
                    verb != "журчать" &&
                    verb != "звучать" &&
                    verb != "кричать" &&
                    verb != "лежать" &&
                    verb != "молчать" &&
                    verb != "мчать" &&
                    verb != "мычать" &&
                    verb != "пищать" &&
                    verb != "рычать" &&
                    verb != "слышать" &&
                    verb != "спать" &&
                    verb != "стучать" &&
                    verb != "торчать" &&
                    verb != "трещать" &&
                    verb != "урчать" &&
                    verb != "фырчать" &&
                    verb != "шуршать" &&
                    verb != "шкварчать" &&
                    // OR -ять
                    verb != "стоять" &&
                    verb != "бояться"
                    )
            ) {
            verSprig = [1, 3];
        }
        else {
            if (
                st3 == "ишь" ||
                    st3 == "ите" ||
                    st3 == "ить" ||
                    st3 == "уть" ||
                    st3 == "ять" ||
                    st3 == "оть" ||
                    st3 == "ыть" ||
                    st3 == "ить" ||
                    // OR -еть
                    verb == "блестеть" ||
                    verb == "болеть" ||
                    verb == "велеть" ||
                    verb == "вертеть" ||
                    verb == "видеть" ||
                    verb == "висеть" ||
                    verb == "галдеть" ||
                    verb == "глядеть" ||
                    verb == "гореть" ||
                    verb == "греметь" ||
                    verb == "гудеть" ||
                    verb == "гундеть" ||
                    verb == "дудеть" ||
                    verb == "зависеть" ||
                    verb == "звенеть" ||
                    verb == "зреть" ||
                    verb == "зудеть" ||
                    verb == "кипеть" ||
                    verb == "кишеть" ||
                    verb == "коптеть" ||
                    verb == "корпеть" ||
                    verb == "кряхтеть" ||
                    verb == "лететь" ||
                    verb == "ненавидеть" ||
                    verb == "обидеть" ||
                    verb == "пердеть" ||
                    verb == "пыхтеть" ||
                    verb == "свербеть" ||
                    verb == "свиристеть" ||
                    verb == "свистеть" ||
                    verb == "сидеть" ||
                    verb == "сипеть" ||
                    verb == "скорбеть" ||
                    verb == "скрипеть" ||
                    verb == "смердеть" ||
                    verb == "смотреть" ||
                    verb == "сопеть" ||
                    verb == "тарахтеть" ||
                    verb == "терпеть" ||
                    verb == "храпеть" ||
                    verb == "хрустеть" ||
                    verb == "шелестеть" ||
                    verb == "шипеть" ||
                    verb == "шуметь" ||
                    // OR -ать
                    verb == "бренчать" ||
                    verb == "брюзжать" ||
                    verb == "бурчать" ||
                    verb == "верещать" ||
                    verb == "визжать" ||
                    verb == "ворчать" ||
                    verb == "гнать" ||
                    verb == "дребезжать" ||
                    verb == "дышать" ||
                    verb == "держать" ||
                    verb == "дрожать" ||
                    verb == "жужжать" ||
                    verb == "журчать" ||
                    verb == "звучать" ||
                    verb == "кричать" ||
                    verb == "лежать" ||
                    verb == "молчать" ||
                    verb == "мчать" ||
                    verb == "мычать" ||
                    verb == "пищать" ||
                    verb == "рычать" ||
                    verb == "слышать" ||
                    verb == "спать" ||
                    verb == "стучать" ||
                    verb == "торчать" ||
                    verb == "трещать" ||
                    verb == "урчать" ||
                    verb == "фырчать" ||
                    verb == "шуршать" ||
                    verb == "шкварчать" ||
                    // OR -ять
                    verb == "стоять" ||
                    verb == "бояться"
                ) {
                verSprig = [2, 3];
            }
            else {
                if (st2 == "ит" ||
                    st3 == "им" ||
                    st3 == "ат" ||
                    st3 == "ят"
                    ) {
                    verSprig = [2, 2];
                }
                else {
                    if (st2 == "ть") {
                        verSprig = [1, 2];
                    }
                    else {
                        verSprig = 'verSprig = error';
                    }
                }
            }
        }
        // preset time
        // I
        doneVerb.push(verb.slice(0, -(verSprig[1])) + "ю");
        // You
        if (verSprig[0] == 1) {
            doneVerb.push(verb.slice(0, -(verSprig[1])) + "ешь");
        }
        else {
            doneVerb.push(verb.slice(0, -(verSprig[1])) + "ишь");
        }
        // He, She
        if (verSprig[0] == 1) {
            doneVerb.push(verb.slice(0, -(verSprig[1])) + "ет");
        }
        else {
            doneVerb.push(verb.slice(0, -(verSprig[1])) + "ит");
        }
        // We
        if (verSprig[0] == 1) {
            doneVerb.push(verb.slice(0, -(verSprig[1])) + "ем");
        }
        else {
            doneVerb.push(verb.slice(0, -(verSprig[1])) + "им");
        }
        // Youu
        if (verSprig[0] == 1) {
            doneVerb.push(verb.slice(0, -(verSprig[1])) + "ете");
        }
        else {
            doneVerb.push(verb.slice(0, -(verSprig[1])) + "ите");
        }
        // They
        if (verSprig[0] == 1) {
            doneVerb.push(verb.slice(0, -(verSprig[1])) + "ут");
        }
        else {
            doneVerb.push(verb.slice(0, -(verSprig[1])) + "ят");
        }
        return doneVerb;
    };




    $('body').on('click', '.check', function () {
        var verbArr = newVerb($('.enterVerb').val());
        $('.verbsOutput').slideDown(300, function (){
            $('.verbsOutput > div').fadeIn(300);
            });
        $('.verbsOutputPresent .out0').val(verbArr[0]);
        $('.verbsOutputPresent .out1').val(verbArr[1]);
        $('.verbsOutputPresent .out2').val(verbArr[2]);
        $('.verbsOutputPresent .out3').val(verbArr[3]);
        $('.verbsOutputPresent .out4').val(verbArr[4]);
        $('.verbsOutputPresent .out5').val(verbArr[5]);

    });
    // OPTIONS BLOCK
    var hblc = $('.optionsBlock').height();
    $('.optionsBlock').css('top', -(hblc + 15));

    var clickedOpt = 0;
    $('body').on("click", ".optionsBut", function () {
        if (clickedOpt == 0) {
            $('.optionsBlock').show().animate({
                top: -14
            }, 200 );
            $('.optionsBlock').addClass('down');
            $('.optionsBut').html('close');
            clickedOpt = 1;
            console.log(clickedOpt);
        }
        else {
            if (clickedOpt == 1) {
                var hblc = $('.optionsBlock').height();
                $('.optionsBlock').animate({
                    top: -(hblc + 15)
                }, 200, function () {
                    $('.optionsBlock').removeClass('down');
                    clickedOpt = 0;
                    console.log(clickedOpt);
                });
                $('.optionsBut').html('options');
            }
        }
    });

    $(document).on('click', function (event) {
        if (clickedOpt == 1) {
            if (!$(event.target).closest('.optionsBlock').length) {
                var hblc = $('.optionsBlock').height();
                $('.optionsBlock').animate({
                    top: -(hblc + 15)
                }, 200, function () {
                    $('.optionsBlock').removeClass('down');
                    clickedOpt = 0;
                    console.log(clickedOpt);
                });
                $('.optionsBut').html('options');
            }
        }
    });
//    $(document).on('click', function (event) {
//        if (!$(event.target).closest('.optionsBlock').length) {
//            $('.optionsBlock').animate({
//                top:-515
//            }, 200, function () {
//                $('.optionsBlock').removeClass('down');
//                clickedOpt = 0;
//                console.log(clickedOpt);
//            });
//            $('.optionsBut').html('options');
//        }
//    });

    $('body').on("mouseenter", ".optionsBut", function () {
        if (clickedOpt == 0) {
            $('.optionsBlock').css('top', "+=3")

        }
    });
    $('body').on("mouseleave", ".optionsBut", function () {
        if (clickedOpt == 0) {
            var hblc = $('.optionsBlock').height();
            $('.optionsBlock').css('top', -(hblc + 15))
        }
    });

    // ARRAYS

    var ruPronouns = new Array("я" ,"ты" ,"мы" ,"они" ,"он" ,"она"),
        enPronouns = new Array("I" ,"you" ,"we" ,"they" ,"he" ,"she"),
        verbs = new Array(
            [true, "видел", "видела", "вижу", "буду видеть", "видишь", "будешь видеть", "видели", "видим",
                "будем видеть", "видят", "будут видеть", "видит", "будет видеть", "see", "saw", "seen"]
            ,[true, "знал", "знала", "знаю", "буду знать", "знаешь", "будешь знать", "знали", "знаем", "будем знать",
                "знают", "будут знать", "знает", "будет знать", "know","knew","known"]
        ),
        verbsL = verbs.length,

            // FUNCTIONS

        simpleGenerator = function () {
            var pronounsNow = Math.floor(Math.random() * 6),
                ruPronounsNow = ruPronouns[pronounsNow],
                enPronounsNow = enPronouns[pronounsNow],
                ruPhrase,
                enPhrase,
                ruVerbsNow,
                i = verbs[Math.floor(Math.random() * (verbsL))],
                tempArray,
                formPhrase = Math.floor(Math.random()*3), // values: 0,1,2
                verbsTime,
                enVerbsTime,
                enVerbsNow;
            switch (pronounsNow) {
                case 0:
                    tempArray = [i[1], i[2], i[3], i[4]];
                    verbsTime = Math.floor(Math.random() * tempArray.length);
                    ruVerbsNow = tempArray[verbsTime];
                    if(verbsTime == 0 || verbsTime == 1){enVerbsTime = "past"}
                    else {
                        if (verbsTime == 2){
                            enVerbsTime = "present"
                        }
                        else {
                            enVerbsTime = "future"
                        }
                    }
                    break;
                case 1:
                    tempArray = [i[1], i[2], i[5], i[6]];
                    verbsTime = Math.floor(Math.random() * tempArray.length);
                    ruVerbsNow = tempArray[verbsTime];
                    if(verbsTime == 0 || verbsTime == 1){enVerbsTime = "past"}
                    else {
                        if (verbsTime == 2){
                            enVerbsTime = "present"
                        }
                        else {
                            enVerbsTime = "future"
                        }
                    }
                    break;
                case 2:
                    tempArray = [i[7], i[8], i[9]];
                    verbsTime = Math.floor(Math.random() * tempArray.length);
                    ruVerbsNow = tempArray[verbsTime];
                    if(verbsTime == 0){enVerbsTime = "past"}
                    else {
                        if (verbsTime == 1){
                            enVerbsTime = "present"
                        }
                        else {
                            enVerbsTime = "future"
                        }
                    }
                    break;
                case 3:
                    tempArray = [i[7], i[10], i[11]];
                    verbsTime = Math.floor(Math.random() * tempArray.length);
                    ruVerbsNow = tempArray[verbsTime];
                    if(verbsTime == 0){enVerbsTime = "past"}
                    else {
                        if (verbsTime == 1){
                            enVerbsTime = "present"
                        }
                        else {
                            enVerbsTime = "future"
                        }
                    }
                    break;
                case 4:
                    tempArray = [i[1], i[12], i[13]];
                    verbsTime = Math.floor(Math.random() * tempArray.length);
                    ruVerbsNow = tempArray[verbsTime];
                    if(verbsTime == 0){enVerbsTime = "past"}
                    else {
                        if (verbsTime == 1){
                            enVerbsTime = "present"
                        }
                        else {
                            enVerbsTime = "future"
                        }
                    }
                    break;
                case 5:
                    tempArray = [i[2], i[12], i[13]];
                    verbsTime = Math.floor(Math.random() * tempArray.length);
                    ruVerbsNow = tempArray[verbsTime];
                    if(verbsTime == 0){enVerbsTime = "past"}
                    else {
                        if (verbsTime == 1){
                            enVerbsTime = "present"
                        }
                        else {
                            enVerbsTime = "future"
                        }
                    }
                    break;
            }

            // ending of english verb

            if(formPhrase == 0 && enVerbsTime == "past"){
                if (i[0] == true){
                    enVerbsNow = i[15];
                }
                else{
                    enVerbsNow = i[14] + "ed";
                }
            }
            else {
                if (formPhrase == 0 && verbsTime == 1 && (pronounsNow == 4 || pronounsNow == 5)) {
                    enVerbsNow = i[14] + "s";
                }
                else {
                    enVerbsNow = i[14];
                }
            }

            //enPhrase

            enPhrase = "empty";
            if(enVerbsTime == "past"){
                switch (formPhrase){
                    case 0:
                        enPhrase = enPronounsNow + " " + enVerbsNow;
                        break;
                    case 1:
                        enPhrase = enPronounsNow + " didn't " + enVerbsNow;
                        break;
                    case 2:
                        enPhrase = "Did " + enPronounsNow + " " + enVerbsNow + "?";
                        break;
                }
            }
            else {
                if(enVerbsTime == "present"){
                    switch (formPhrase){
                        case 0:
                            enPhrase = enPronounsNow + " " + enVerbsNow;
                            break;
                        case 1:
                            if(enPronounsNow == "he" || enPronounsNow == "she"){
                                enPhrase = enPronounsNow + " doesn't " + enVerbsNow;
                            }
                            else {
                                enPhrase = enPronounsNow + " don't " + enVerbsNow;
                            }
                            break;
                        case 2:
                            if(enPronounsNow == "he" || enPronounsNow == "she"){
                                enPhrase = "Does " + enPronounsNow + " " + enVerbsNow + "?";
                            }
                            else {
                                enPhrase = "Do " + enPronounsNow + " " + enVerbsNow + "?";
                            }
                            break;
                    }
                }
                else {
                    switch (formPhrase){
                        case 0:
                            enPhrase = enPronounsNow + " will " + enVerbsNow;
                            break;
                        case 1:
                            enPhrase = enPronounsNow + " will not " + enVerbsNow;
                            break;
                        case 2:
                            enPhrase = "Will " + enPronounsNow + " " + enVerbsNow + "?";
                            break;
                    }
                }
            }
            console.log("+++++++++++++++");
            console.log(enPhrase);

            // ruPhrase

            if(formPhrase == 0){
                ruPhrase = ruPronounsNow + " " + ruVerbsNow;
            }
            else {
                if(formPhrase == 1) {
                    ruPhrase = ruPronounsNow + " " + " не " + ruVerbsNow;
                }
                else{
                    ruPhrase = ruPronounsNow + " " + ruVerbsNow + "?";
                }
            }

            enPhrase = enPhrase.slice(0, 1).toUpperCase() + enPhrase.slice(1);
            ruPhrase = ruPhrase.slice(0, 1).toUpperCase() + ruPhrase.slice(1);
            return {
                ruPhrase: ruPhrase
                ,enPhrase: enPhrase
            };
        },
        parsePhrase = function (){
            return $('.enPhrase').val();
        };
    var simpGen,
        clicked = 0,
        iFalse = 0,
        iTrue = 0,
        clickButtonOk = function () {
            if (clicked == 0) {
                // clean
                $('.enPhrase').removeClass("true").removeClass("false");
                $('.outPhraseReal').hide();
                $('.enPhrase').val("");
                $('.enPhrase').attr("placeholder", "Enter text");
                // start
                simpGen = simpleGenerator();
                $('.ruPhrase').html(simpGen['ruPhrase']);
                $('.outPhraseReal').html(simpGen['enPhrase']);
                $(this).html("ok");
                clicked = 1;
            }
            else {
                if (clicked = 1) {
                    if ((simpGen['enPhrase']).toLocaleLowerCase() != (parsePhrase().toLocaleLowerCase())) {
                        $('.enPhrase').attr("placeholder", "");
                        $('.enPhrase').removeClass("true").addClass("false");
                        iFalse++;
                        $('.iFalse').fadeIn().html(iFalse);
                    }
                    else {
                        $('.enPhrase').removeClass("false").addClass("true");
                        iTrue++;
                        $('.iTrue').fadeIn().html(iTrue);
                    }
                    $('.outPhraseReal').fadeIn();
                    $(this).html("next");
                    clicked = 0;
                }
            }
        };
    $("body").on("click", ".ok", clickButtonOk);
    var enterKey = function () {
        $('.ok').trigger("click");
    };
    $(document).keydown(function (e) {
        if (e.keyCode == 13 && typeof enterKey === 'function') {
            enterKey();
        }
    });
});