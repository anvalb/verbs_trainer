$(function(){

    // ARRAYS

    var ruPronouns = new Array("я" ,"ты" ,"мы" ,"они" ,"он" ,"она"),
        enPronouns = new Array("I" ,"you" ,"we" ,"they" ,"he" ,"she"),
        verbs = new Array(
            [true, "видел", "видела", "вижу", "буду видеть", "видишь", "будешь видеть", "видели", "видим", "будем видеть", "видят", "будут видеть", "видит", "будет видеть", "see", "saw", "seen"]
            ,[false, "знал", "знала", "знаю", "буду знать", "знаешь", "будешь знать", "знали", "знаем", "будем знать", "знают", "будут знать", "знает", "будет знать", "know"]
        ),
        verbsL = verbs.length,
    // FUNCTIONS
        simpleGenerator = function () {
            var ruPronounsNow = ruPronouns[Math.floor(Math.random() * 5)],
                ruPhrase,
                verbsNow,
                i = verbs[Math.floor(Math.random() * (verbsL))],
                tempArray,
                formPhrase;

            switch (ruPronounsNow) {
                case ruPronouns[0]:
                    tempArray = [i[1], i[2], i[3], i[4]]; // i.slice(1, 4);
                    verbsNow = tempArray[Math.floor(Math.random() * tempArray.length)];
                    break;
                case ruPronouns[1]:
                    tempArray = new Array(i[1], i[2], i[5], i[6]);
                    verbsNow = tempArray[Math.floor(Math.random() * tempArray.length)];
                    break;
                case ruPronouns[2]:
                    tempArray = new Array(i[7], i[8], i[9]);
                    verbsNow = tempArray[Math.floor(Math.random() * tempArray.length)];
                    break;
                case ruPronouns[3]:
                    tempArray = new Array(i[7], i[10], i[11]);
                    verbsNow = tempArray[Math.floor(Math.random() * tempArray.length)];
                    break;
                case ruPronouns[4]:
                    tempArray = new Array(i[1], i[12], i[13]);
                    verbsNow = tempArray[Math.floor(Math.random() * tempArray.length)];
                    break;
                case ruPronouns[5]:
                    tempArray = new Array(i[2], i[12], i[13]);
                    verbsNow = tempArray[Math.floor(Math.random() * tempArray.length)];
                    break;
            }
            formPhrase = Math.floor(Math.random()*3);
            console.log(formPhrase);
            if(formPhrase == 0){
                ruPhrase = ruPronounsNow + " " + verbsNow + ".";
            }
            else {
                if(formPhrase == 1) {
                    ruPhrase = ruPronounsNow + " " + " не " + verbsNow + ".";
                }
                else{
                    ruPhrase = ruPronounsNow + " " + verbsNow + "?";
                }
            }
            ruPhrase = ruPhrase.slice(0, 1).toUpperCase() + ruPhrase.slice(1);
            return ruPhrase;
        },
        parsePhrase = function (){
            return $('.enPhrase').val();
        };

    $("body").on("click", ".startSimple", function(){
        $('.ruPhrase').html(simpleGenerator());
        $('.outPhrase').hide();
        $('.outPhraseReal').hide();
        $('.enPhrase').val("");
    });
    $("body").on("click", ".ok", function(){
        $('.outPhrase').show().html(parsePhrase());
        $('.outPhraseReal').show().html("blabla");
        $('.enPhrase').val("");
    });
    $('.ruPhrase').html(simpleGenerator());
});