$(function(){
    var ruPronouns = new Array("я" ,"ты" ,"мы" ,"они" ,"он" ,"она");
    var enPronouns = new Array("I" ,"you" ,"we" ,"they" ,"he" ,"she");
    var verbs = new Array(
        ["видел", "видела", "вижу", "буду видеть", "видишь", "будешь видеть", "видели", "видим", "будем видеть", "видят", "будут видеть", "видит", "будет видеть", "see", "saw", "seen"]
        ,["знал", "знала", "знаю", "буду знать", "знаешь", "будешь знать", "знали", "знаем", "будем знать", "знают", "будут знать", "знает", "будет знать", "know"]
    );
    var verbsL = verbs.length;
    var ruPronounsNow,
        ruPhrase,
        verbsNow,
        i,
        tempArray;
    var simpleGenerator = function(){
        ruPronounsNow = ruPronouns[Math.floor(Math.random()*5)];
        i = verbs[Math.floor(Math.random()*(verbsL))];
        switch (ruPronounsNow){
            case "я":
                tempArray = new Array(i[0], i[1], i[2], i[3]);
                verbsNow = tempArray[Math.floor(Math.random()*tempArray.length)];
                break;
            case "ты":
                tempArray = new Array(i[0], i[1], i[4], i[5]);
                verbsNow = tempArray[Math.floor(Math.random()*tempArray.length)];
                break;
            case "мы":
                tempArray = new Array(i[6], i[7], i[8]);
                verbsNow = tempArray[Math.floor(Math.random()*tempArray.length)];
                break;
            case "они":
                tempArray = new Array(i[6], i[9], i[10]);
                verbsNow = tempArray[Math.floor(Math.random()*tempArray.length)];
                break;
            case "он":
                tempArray = new Array(i[0], i[11], i[12]);
                verbsNow = tempArray[Math.floor(Math.random()*tempArray.length)];
                break;
            case "она":
                tempArray = new Array(i[1], i[11], i[12]);
                verbsNow = tempArray[Math.floor(Math.random()*tempArray.length)];
                break;
        }
        ruPhrase = ruPronounsNow + " " + verbsNow;
        return ruPhrase;
    };

    $("body").on("click", ".startSimple", function(){
        $('.ruPhrase').html(simpleGenerator())
    });
    $('.ruPhrase').html(simpleGenerator());
});