var container = document.querySelector(".text");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var sprite = document.querySelector(".sprite");
var heart = document.querySelector("#heart");


var audio = new Audio('UndertaleIntro.mp3')
var CukiniaTale = document.querySelector("#cukiniatale");
var BlackCover = document.querySelector("#title");

setTimeout(() => {
    audio.play();
    CukiniaTale.style.display = 'block';
    
    setTimeout(() => {
        CukiniaTale.style.display = 'none';
        setTimeout(() => {
            BlackCover.style.display = 'none';
        }, 1500);
    }, 3000);

}, 3000);

var speeds = {
   pause: 500,
   slow: 100,
   normal: 60,
   fast: 40,
   superFast: 10
};

var textLines = [
[
   { speed: speeds.fast, string: "Heya!" },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "To ja..." },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "Cukinia.", classes: ["red"] },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "Zielona Cukinia." },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "Jestem tu bo…"},
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "był call na IT respa i…"},
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "muszę powiedzieć," },
   { speed: speeds.fast, string: "że od dawna na niego czekałam", classes: ["red"]  },
   { speed: speeds.normal, string: ":v" },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "Pewnie zapytacie..."},
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.slow, string: "Dlaczego?", classes: ["red"] },
], 
[
   { speed: speeds.slow, string: "Dlaczego IT resp?", classes: ["red"] },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "Od zawsze miałam styczność z informatyką."},
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "Zaczęło się na grach i Scratchu, a skończyło"},
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.fast, string: "(nie! jeszcze nie skończyło!)" },
   { speed: speeds.pause, string: "", pause: true },
   {speed: speeds.normal, string: "na napisaniu strony internetowej dla Uniwersytetu Śląskiego" },
   { speed: speeds.pause, string: "", pause: true },
   {speed: speeds.normal, string: "oraz nauce Vue.js" }
],
[
    { speed: speeds.fast, string: "Kocham robić stronki! <3", classes: ["red"] },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Bawię się w to już od ponad czterech lat."},
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Lubię nad nimi siedzieć"},
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "i opiekować się jak własnymi dziećmi" },
    { speed: speeds.pause, string: "", pause: true },
    {speed: speeds.fast, string: "(jak dziwnie by to nie brzmiało)." },
    { speed: speeds.pause, string: "", pause: true },
    {speed: speeds.slow, string: "Ale to nie oznacza, że nie chcę umieć więcej...", classes: ["red"] }
 ],
[
    { speed: speeds.normal, string: "Mam już spore doświadczenie dlatego że...", classes: ["red"] },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.fast, string: "mnie to jara!" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Serio,"},
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "mam kilka stronek na koncie," },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "znajomość HTMLa," },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "CSSa," },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "JavaScripta," },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "GITa," },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "C++," },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "praca z Wordpressem i Elementorem," },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.fast, string: "ale" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.slow, string: "to nie wszystko..." }
 ],
 [
    { speed: speeds.normal, string: "Miałam okazję ukończyć profesionalne szkolenie na testera manualnego." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Wiem, jak dobrze projektować UI i UX," },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "nauczyłam się też, co robić, żeby strona była dostępna dla niepełnosprawnych." }
 ],
 [
    { speed: speeds.fast, string: "Mam kilka pomysłów na fuszkę!", classes: ["red"] },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Przede wszystkim," },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "będę dbać o strony BESTu" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "i postaram się trochę poprawić wygląd bestowej wiki." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Chciałabym też stworzyć"},
    { speed: speeds.normal, string: "prężnie działającą grupę IT,", classes: ["red"] },
    { speed: speeds.normal, string: "w której moglibyśmy..."}
 ],
 [
    { speed: speeds.normal, string: "testować", classes: ["red"] },
    { speed: speeds.normal, string: "bestowe strony - sprawdzać czy poprawnie działają," },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "wzajemnie" },
    { speed: speeds.normal, string: "szkolić się", classes: ["red"] },
    { speed: speeds.normal, string: "w różnych dziedzinach i z różnych programów," },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "uczyć się", classes: ["red"] },
    { speed: speeds.normal, string: "dobrego porządkowania informacji,..." },
 ],
 [
    { speed: speeds.normal, string: "pomagać", classes: ["red"] },
    { speed: speeds.normal, string: "Beściakom z problemami informatycznymi," },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "tworzyć", classes: ["red"] },
    { speed: speeds.normal, string: "proste gry (lub stronki takie, jak ta apka)" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "na przykład jako jedna z atrakcji na Rekru" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.fast, string: "(robiłam już coś takiego!)..." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.fast, string: "i jeszcze to wszystko, co mi się tu nie zmieściło :v"}
 ],
 [
    { speed: speeds.slow, string: "Czego ta fuszka może mnie nauczyć?", classes: ["red"] },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.fast, string: "Myślę że tego:" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Jak sprostać wymaganiom innych..." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Jak prowadzić grupę i współpracować w teamie..." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Jak być odpowiedzialną za działanie stron..." }
 ],
 [
    { speed: speeds.normal, string: "Jak prowadzić szkolenia i przekazywać wiedzę..." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Jak kontaktować się z uczelnią..." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Jak pracować pod presją ludzi i czasu..." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Jak tworzyć coraz lepsze strony c:", classes: ["red"] }
 ],
 [
    { speed: speeds.slow, string: "Z jakiegoś powodu..."},
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.slow, string: "chcecie znać moją ulubioną grę z dzieciństwa." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.slow, string: "Cóż..." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.slow, string: "Prawda jest taka, że..." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.fast, string: "Nie potrafię wybrać jednej.", classes: ["red"] },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.fast, string: "Więc zapodam trzy xD..." }
 ],
 [
    { speed: speeds.slow, string: "The Neverhood", classes: ["red"] },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.slow, string: "oraz" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.slow, string: "Syberia cz. I", classes: ["red"] },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.slow, string: "i" },
    { speed: speeds.slow, string: "Syberia cz. II.", classes: ["red"] },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.fast, string: "A Wasza ulubiona? c:" }
 ],
 [
    { speed: speeds.normal, string: "Postanawiacie przerobić Cukinię na swoje ulubione danie jednogarnkowe..." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.slow, string: "leczo.", classes: ["red"]}
 ],
 [
    { speed: speeds.normal, string: "Prosicie Cukinię o więcej informacji o jej warzywnym życiu." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.slow, string: "Zaraz dowiecie się, kim jest naprawdę...", classes: ["red"]}
 ],
 [
    { speed: speeds.normal, string: "Stosujecie zmyślną dywersję..." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.slow, string: "Dajecie Cukinii jakąś planszówkę..." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.fast, string: "którą ta od razu zabiera i idzie grać :>", classes: ["red"]}
 ],
 [
    { speed: speeds.normal, string: "Mówicie Cukinii, że nadaje na tę fuszkę." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.fast, string: "Ta skacze z radości i zaczyna wariacko obmyślać plany na najbliższe 20 lat ^^", classes: ["red"]}
 ]
];

function delay (URL) {
    setTimeout( function() { window.open(URL, "_blank"); }, 8000 );
}

function TextBoxWriter(i)
{    
var characters = [];
textLines[i].forEach((line, index) => 
    {
        if (index < textLines[i].length - 1) 
        {
            line.string += " "; 
        };
        line.string.split("").forEach((character) => 
        {
            var span = document.createElement("span");
            span.textContent = character;
            if (character == "ę" || character == "ą")
            {
                span.classList.add("diacriticLetter");
            }
            container.appendChild(span);
            characters.push
            ({
                span: span,
                isSpace: character === " " && !line.pause,
                delayAfter: line.speed,
                classes: line.classes || [] 
            });
        });
    });

//Kick it off
setTimeout(() => {
   revealOneCharacter(characters);
}, 600);

};

function deleteChild() {
    var child = container.lastElementChild; 
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

function revealOneCharacter(list) {
    var next = list.splice(0, 1)[0];
    next.span.classList.add("revealed");
    next.classes.forEach((c) => {
       next.span.classList.add(c);
    });
    var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;
 
    if (list.length > 0) {
       setTimeout(function () {
          revealOneCharacter(list);
       }, delay);
    }
 };
var page = 0;
var maxPages = 11;
TextBoxWriter(0);
 window.addEventListener("keydown", (e) => {
    switch(e.key)
    {
        case 'ArrowLeft':
            if (page >= 1)
            {
                page--;
                deleteChild();
                TextBoxWriter(page);
            }
            break;
        case 'ArrowRight':
            if (page <= (maxPages-1))
            {
                page++;
                deleteChild();
                TextBoxWriter(page);
            }
            break;
    }
    
});
opt1.addEventListener("click", () => {
    deleteChild();
    TextBoxWriter(maxPages+1);
});
opt2.addEventListener("click", () => {
    deleteChild();
    TextBoxWriter(maxPages+2);
});
opt3.addEventListener("click", () => {
    deleteChild();
    TextBoxWriter(maxPages+3);
});
opt4.addEventListener("click", () => {
    deleteChild();
    TextBoxWriter(maxPages+4);
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
sprite.addEventListener("click", (event) => {
    let mouse_x = event.clientX;
    let intViewportWidth = window.innerWidth;

    var x_move = 0;
    var y_move = getRandomInt(-15, -25);

    if (mouse_x <= intViewportWidth/2)
    {
        x_move = getRandomInt(40, 60);
    }
    else
    {
        x_move = getRandomInt(-60, -40);
    }

    sprite.style.left = x_move + 'px';
    sprite.style.top = y_move + 'px';

    setTimeout(() => {
        sprite.style.left = 0;
        sprite.style.top = 0;
    }, 300);
});