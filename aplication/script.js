$(function(){
    // OPTIONS BLOCK
    $('body').on("click", ".options", function () {
        $('.optionsBlock').slideDown();
    });
    $('body').on("click", ".optionsClose", function () {
        $('.optionsBlock').slideUp();
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