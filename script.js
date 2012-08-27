$(function(){
    var ruPronouns = new Array("я" ,"ты" ,"мы" ,"они" ,"он" ,"она"),
        enPronouns = new Array("I" ,"you" ,"we" ,"they" ,"he" ,"she"),
        verbs = new Array(
            ["видел", "видела", "вижу", "буду видеть", "видишь", "будешь видеть", "видели", "видим", "будем видеть", "видят", "будут видеть", "видит", "будет видеть", "see", "saw", "seen"]
            ,["знал", "знала", "знаю", "буду знать", "знаешь", "будешь знать", "знали", "знаем", "будем знать", "знают", "будут знать", "знает", "будет знать", "know"]
        ),
        verbsL = verbs.length,
        simpleGenerator = function(){
            var ruPronounsNow = ruPronouns[Math.floor(Math.random()*5)],
                i = verbs[Math.floor(Math.random()*(verbsL))],
                verbsNow,
                tempArray;

            switch (ruPronounsNow){
                case "я":
                    // [i[0], i[1], i[2], i[3]]
                    // также можно заменить на i.slice(0, 3);
                    // http://javascript.ru/Array/slice
                    tempArray = [i[0], i[1], i[2], i[3]];
                    verbsNow = tempArray[Math.floor(Math.random()*tempArray.length)];
                    break;
                case "ты":
                    tempArray = [i[0], i[1], i[4], i[5]];
                    verbsNow = tempArray[Math.floor(Math.random()*tempArray.length)];
                    break;
                case "мы":
                    tempArray = [i[6], i[7], i[8]];
                    verbsNow = tempArray[Math.floor(Math.random()*tempArray.length)];
                    break;
                case "они":
                    tempArray = [i[6], i[9], i[10]];
                    verbsNow = tempArray[Math.floor(Math.random()*tempArray.length)];
                    break;
                case "он":
                    tempArray = [i[0], i[11], i[12]];
                    verbsNow = tempArray[Math.floor(Math.random()*tempArray.length)];
                    break;
                case "она":
                    tempArray = [i[1], i[11], i[12]];
                    verbsNow = tempArray[Math.floor(Math.random()*tempArray.length)];
                    break;
            }
            return ruPronounsNow + " " + verbsNow;
        };

    $("body").on("click", ".startSimple", function(){
        $('.ruPhrase').html(simpleGenerator())
    });
    $('.ruPhrase').html(simpleGenerator());
});