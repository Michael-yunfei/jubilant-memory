
// zodiac click 

const zodiaclist = []

for (var i = 0; i < 12; i++) {
    let foo = 'imcz' + (i+1).toString()
    zodiaclist.push(foo)
}

const zodiacstory = {
    imcz1 : "Here are your personality traits: quick-witted, smart, \
    charming, and persuasive",
    imcz2:  "Here are your personality traits: " + "patient, kind, stubborn, and conservative",
    imcz3: "Here are your personality traits: " + "authoritative, emotional, courageous, and intense",
    imcz4: "Here are your personality traits: " + "popular, compassionate, and sincere",
    imcz5: "Here are your personality traits: " + "energetic, fearless, warm-hearted, and charismatic",
    imcz6: "Here are your personality traits: " + "charming, gregarious, introverted, generous, and smart",
    imcz7: "Here are your personality traits: " + "energetic, independent, impatient, and enjoy traveling",
    imcz8: "Here are your personality traits: " + "mild-mannered, shy, kind, and peace-loving",
    imcz9: "Here are your personality traits: " + "fun, energetic, and active",
    imcz10: "Here are your personality traits: " + "independent, practical, hard-working, and observant",
    imcz11: "Here are your personality traits: " + "patient, diligent, generous, faithful, and kind",
    imcz12: "Here are your personality traits: " + "loving, tolerant, honest, and appreciative of luxury"
}




function zodiacfun (choice) {
    const foo = choice.getAttribute('id');
    const zodiacstory = document.querySelector("#zodiac")
    zodiacstory.innerHTML = "2021 is a year of the Ox, and the overall fortunes\
     of Rat people (those born in a year of the Rat) are very good. Since the\
      zodiac Rat and the zodiac Ox have a good relationship, the fortunes of Rat\
       people will be exceptionally smooth. This year, regardless of whether they\
        have difficulties in their careers or studies, Rats can get help from\
         others in time." + `${foo}`
}