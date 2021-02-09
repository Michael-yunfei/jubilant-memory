
// zodiac click 

const zodiaclist = []

for (var i = 0; i < 12; i++) {
    let foo = 'imcz' + (i+1).toString()
    zodiaclist.push(foo)
}

const zodiaccontent = {
    imcz1 : "Here are your personality traits: quick-witted, smart, charming, and persuasive",
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
    let nextbutton = document.querySelector(".titlebutton")

    if (foo == 'imcz12') {
        let pig = document.querySelector("#imcz12")
        pig.style.animation = "rotation 3s infinite linear"
        zodiacstory.innerHTML = zodiaccontent[foo] + ". You are born in the year of \
    pig. Let's find what the year of OX would mean to you :)"
        nextbutton.innerHTML = `<button type='button' id='buttondisplay'>
        <a href="./src/chapter1.html">Next</a>
        </button>`
    } else {
        zodiacstory.innerHTML = zodiaccontent[foo]
    }
}


// let ispalying = true

// function oxplayfun() {
//     var oxaudio = document.querySelector("#oxaudio")
//     var buttondisplay = document.querySelector("#buttondisplay")
//     if (ispalying) {
//         oxaudio.play()
//         ispalying = false
//         buttondisplay.innerHTML = "Stop"
//     } else {
//         oxaudio.pause()
//         ispalying = true
//         buttondisplay.innerHTML = "Play"
//     }
// }