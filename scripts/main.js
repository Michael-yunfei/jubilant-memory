
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

// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
// not supported in all browsers though and sometimes needs a prefix, so we need a shim
window.requestAnimFrame = ( function() {
	return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function( callback ) {
					window.setTimeout( callback, 1000 / 60 );
				};
})();

// now we will setup our basic variables for the demo

// setup canvas
var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext('2d')
canvas.width = innerWidth  // crucial part
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2, 
    y: innerHeight / 2
}


// add gravity
const gravity = 0.05
const friction = 0.995

// we creat our fireworks as a class
class Particle {

    // construct the class
    constructor(x, y, radius, color, velocity) {
        this.x = x 
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.alpha = 1
    }

    draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
        ctx.restore()
      }

    // call up draw function
    update() {
        this.draw()
        this.velocity.y += gravity
        this.velocity.x *= friction
        this.velocity.y *= friction
        this.x += this.velocity.x 
        this.y += this.velocity.y
        this.alpha -= 0.005
    }
}

// now we need initialize this class
let particles = []

// animation loop
function animate() {
    requestAnimationFrame(animate)
    particles.forEach((particle, i) => {
        if (particle.alpha > 0) {
            particle.update()
        } else {
            particles.splice(i, 1)
        }
    });

}

var  clickcount = 0

const canimation = document.querySelector("#canvas")
canimation.addEventListener('click', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY

    clickcount += 1

    // creat a circle
    const particlecount = 196
    const angleincrment = Math.PI * 2 / particlecount 
    // now we creat our particles
    for (let i = 0; i < particlecount; i++) {
        particles.push(
            new Particle(mouse.x, mouse.y, 3.9, `hsl(${Math.random() * 360},
            50%, 50%)`, {
                x: Math.cos(angleincrment * i) * Math.random() * 12,
                y: Math.sin(angleincrment * i) * Math.random() * 12
            })
        )
    }

    if (clickcount == 2) {
        const chapter1content = document.querySelector(".chapter1content")
        chapter1content.innerHTML = `
        <p>
        Click any place of the area inside box to fire your fireworks.
        </p>
        <button onclick="location.href='chapter2.html'" type="button">Next Chapter</button>`
    }
})

animate()



