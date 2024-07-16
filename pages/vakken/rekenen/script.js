// Elements to change
const selectedGrade = document.getElementById('grade');
const display = document.getElementById('courses-display');
const paragraphGrade = display.querySelector('p');
const coursesGrade = document.getElementById('courses-wr');
// The amount of siblings coursesGrade has
let amountCourses = coursesGrade.getElementsByClassName('category').length;

// Info for paragraphs math
const mathGradeInfo = ['Bij AfterSkool<span class="mr-span">metRyvi</span> leggen we de basis voor rekenvaardigheden al bij de allerkleinsten. Onze interactieve en speelse oefeningen zijn speciaal ontworpen voor peuters, zodat zij op een leuke manier cijfers leren herkennen en eenvoudige rekenconcepten begrijpen.<br>Met kleurrijke en boeiende activiteiten maken we het leren van getallen een spannend avontuur. Peuters leren tellen, eenvoudige vormen herkennen en beginnen met basisbegrippen zoals meer en minder. Onze aanpak stimuleert nieuwsgierigheid en maakt het leerproces leuk en motiverend.','Met vrolijke en kleurrijke activiteiten leren kinderen in groep 1 cijfers herkennen, tellen en eenvoudige vormen benoemen. Ze ontdekken de magie van getallen door spelletjes die speciaal zijn afgestemd op hun leeftijd en ontwikkelingsniveau. Onze aanpak zorgt ervoor dat kinderen spelenderwijs leren, nieuwsgierig blijven en plezier hebben in het leerproces. <br>AfterSkool<span class="mr-span">metRyvi</span> helpt kinderen in groep 1 om zelfvertrouwen op te bouwen in hun rekenvaardigheden en een positieve houding ten opzichte van leren te ontwikkelen. Samen zetten we de eerste stappen in de fascinerende wereld van rekenen!',
                        'Bij AfterSkool<span class="mr-span">metRyvi</span> bouwen kinderen voort op hun basisvaardigheden in rekenen. Ze leren tellen tot hogere getallen, vergelijken hoeveelheden en maken eenvoudige sommen. Met kleurrijke en boeiende oefeningen ontdekken ze de wereld van getallen en ontwikkelen ze een dieper begrip van rekenconcepten. Onze speelse aanpak maakt leren leuk en stimuleert kinderen om nieuwsgierig te blijven. AfterSkool<span class="mr-span">metRyvi</span> helpt kinderen in groep 2 om zelfvertrouwen op te bouwen en een stevige basis te leggen voor hun verdere rekenontwikkeling.','In groep 3 helpt AfterSkool<span class="mr-span">metRyvi</span> kinderen om hun rekenvaardigheden verder te ontwikkelen. Ze leren optellen en aftrekken met grotere getallen, herkennen patronen en beginnen met eenvoudige vermenigvuldigingen. Onze interactieve spelletjes en oefeningen maken rekenen boeiend en leuk. Door spelenderwijs te leren, bouwen kinderen vertrouwen op in hun rekenvaardigheden en ontwikkelen ze een positieve houding ten opzichte van rekenen. AfterSkool<span class="mr-span">metRyvi</span> zorgt ervoor dat kinderen in groep 3 een stevige basis hebben voor hun verdere rekenontwikkeling.',
                        'Bij AfterSkool<span class="mr-span">metRyvi</span> leren kinderen in groep 4 de basis van vermenigvuldigen en delen. Ze oefenen met tafels en ontdekken hoe ze deze vaardigheden in het dagelijks leven kunnen toepassen. Onze interactieve oefeningen en spelletjes maken abstracte concepten begrijpelijk en leuk. Kinderen ontwikkelen hun rekenvaardigheden en bouwen zelfvertrouwen op door spelenderwijs te leren. AfterSkool<span class="mr-span">metRyvi</span> helpt kinderen in groep 4 om een solide basis te leggen voor meer geavanceerde rekenvaardigheden in de toekomst.',
                        'In groep 5 verdiepen kinderen hun rekenvaardigheden bij AfterSkool<span class="mr-span">metRyvi</span>. Ze leren breuken en decimalen begrijpen en toepassen, en oefenen met meer complexe vermenigvuldigingen en delingen. Onze interactieve oefeningen maken abstracte concepten begrijpelijk en leuk. Kinderen ontwikkelen hun probleemoplossende vaardigheden en bouwen zelfvertrouwen op door spelenderwijs te leren. AfterSkool<span class="mr-span">metRyvi</span> zorgt ervoor dat kinderen in groep 5 goed voorbereid zijn op de volgende stappen in hun rekenontwikkeling.',
                        'Bij AfterSkool<span class="mr-span">metRyvi</span> gaan kinderen in groep 6 aan de slag met geavanceerdere rekenvaardigheden zoals percentages, verhouding en meetkunde. Ze oefenen met het toepassen van deze vaardigheden in verschillende situaties. Onze interactieve oefeningen en spelletjes maken abstracte concepten begrijpelijk en leuk. Kinderen ontwikkelen hun analytische vaardigheden en bouwen zelfvertrouwen op door spelenderwijs te leren. AfterSkool<span class="mr-span">metRyvi</span> helpt kinderen in groep 6 om een solide basis te leggen voor meer geavanceerde rekenvaardigheden in de toekomst.',
                        'In groep 7 gaan kinderen bij AfterSkool<span class="mr-span">metRyvi</span> dieper in op algebra, breuken, en decimale getallen. Ze leren complexe problemen op te lossen en passen hun rekenvaardigheden toe in uitdagende situaties. Onze interactieve oefeningen en spelletjes maken abstracte concepten begrijpelijk en leuk. Kinderen ontwikkelen hun kritische denkvaardigheden en bouwen zelfvertrouwen op door spelenderwijs te leren. AfterSkool<span class="mr-span">metRyvi</span> zorgt ervoor dat kinderen in groep 7 goed voorbereid zijn op de laatste stappen van hun basisschool rekenontwikkeling.',
                        'Bij AfterSkool<span class="mr-span">metRyvi</span> bereiden we kinderen in groep 8 voor op de middelbare school. Ze oefenen met geavanceerde rekenvaardigheden zoals algebra, meetkunde, en statistiek. Onze interactieve oefeningen en spelletjes maken abstracte concepten begrijpelijk en leuk. Kinderen ontwikkelen hun probleemoplossende vaardigheden en bouwen zelfvertrouwen op door spelenderwijs te leren. AfterSkool<span class="mr-span">metRyvi</span> helpt kinderen in groep 8 om zelfverzekerd en goed voorbereid de overstap naar de middelbare school te maken.'
];

// Info courses titles math
const mathGradeTitle = [
    ['Vormen en kleuren', 'Meten en maten', 'Tellen', 'Meer, minder, evenveel', 'Getallen herkennen', 'Tijd'],
    ['Vormen en Kleuren', 'Meer, minder, evenveel', 'Meten en maten', 'Getallen', 'Tijd', 'Filmpjes', 'Tellen', 'Splitsen t/m 5'],
    ['Vormen en Kleuren', 'Meer, minder, evenveel', 'Meten en maten', 'Getallen leren', 'Tijd', 'Tellen', 'Getallenlijn', 'Rekentaal', 'Plussommen', 'Minsommen', 'Splitsen tot 10', 'Vormen en figuren', 'Verbanden', 'Filmpjes'],
    ['Rekenen met geld', 'Meer, minder, evenveel', 'Klokkijken', 'Tellen', 'Getallenlijn', 'Plussommen', 'Minsommen', 'Rekenen met getallen', 'Meten', 'Vormen en figuren', 'Rekenverhalen', 'Filmpjes'],
    ['Tafels', 'Getallenlijn', 'Tijd en ruimte', 'Even, oneven', 'Plussommen', 'Minsommen', 'Verhaaltjessommen', 'Geld', 'Schattend rekenen', 'Keersommen en deelsommen', 'Splitsen', 'Meten en maten', 'Verhouding', 'Rekenverhalen', 'Filmpjes'],
    ['Basisrekenen', 'Tafels', 'Getallen', 'Verhouding', 'Schattend rekenen', 'Klokkijken', 'Meten en maten', 'Verhaaltjessommen', 'Grote getallen en kommagetallen', 'Tijd', 'Geld', 'Rekenverhalen', 'Vormen en figuren', 'Filmpjes'],
    ['Basisrekenen', 'Tafels', 'Grote getallen en kommagetallen', 'Meten en  maten', 'Verhoudingen', 'Redactiesommen', 'Breuken en Procenten', 'Schattend rekenen', 'Vormen en figuren', 'Tijd', 'Geld', 'Rekenverhalen', 'Filmpjes'],
    ['Basisrekenen', 'Tafels', 'Breuken en procenten', 'Redactiesommen', 'Meten en maten', 'Tijd', 'Getallen', 'Grote getallen en kommagetallen', 'Verhoudingen', 'Verbanden', 'Schattend rekenen', 'Vormen en figuren', 'Rekenverhalen', 'Filmpjes'],
    ['Tijd', 'Basisrekenen', 'Tafels', 'Breuken en procenten', 'Meten en maten', 'Getallen', 'Verhoudingen', 'Schattend rekenen', 'Vormen en figuren', 'Rekenverhalen', 'Filmpjes']
]

// Info img math courses
const mathGradeImg = [
    ['/pages/assets/vakken/rekenen/shapes-children-svgrepo-com.svg', 
        '/pages/assets/vakken/rekenen/measure-volume-svgrepo-com.svg',
        '/pages/assets/vakken/rekenen/input-numbers-svgrepo-com.svg',
        '/pages/assets/vakken/rekenen/scales-scale-svgrepo-com.svg',
        '/pages/assets/vakken/rekenen/number-5-circle-svgrepo-com.svg',
        '/pages/assets/vakken/rekenen/calendar-svgrepo-com.svg'
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]


// Track the grade that needs to be displayed
selectedGrade.addEventListener('change', () => {
    // change info in paragraph
    paragraphGrade.innerHTML = mathGradeInfo[selectedGrade.value];
    // Remove the courses displayed
    while (coursesGrade.firstChild) {
        coursesGrade.removeChild(coursesGrade.firstChild)
    };
    // Add all new courses
    for (let i = 0; i < mathGradeTitle[selectedGrade.value].length; i++) {
        let linkRoute = document.createElement('a');
        linkRoute.href = '#';
        linkRoute.classList.add('category');
        let img = new Image();
        img.src = mathGradeImg[selectedGrade.value][i];
        let title = document.createElement('h4');
        title.innerHTML = mathGradeTitle[selectedGrade.value][i];
        linkRoute.appendChild(img);
        linkRoute.appendChild(title);
        coursesGrade.appendChild(linkRoute);
    };

});
// Track the grade that needs to be displayed mobile focus
selectedGrade.addEventListener('blur', () => {
    // change info in paragraph
    paragraphGrade.innerHTML = mathGradeInfo[selectedGrade.value];
    // Remove the courses displayed
    while (coursesGrade.firstChild) {
        coursesGrade.removeChild(coursesGrade.firstChild)
    };
    // Add all new courses
    for (let i = 0; i < mathGradeTitle[selectedGrade.value].length; i++) {
        let linkRoute = document.createElement('a');
        linkRoute.href = '#';
        linkRoute.classList.add('category');
        let img = new Image();
        img.src = mathGradeImg[selectedGrade.value][i];
        let title = document.createElement('h4');
        title.innerHTML = mathGradeTitle[selectedGrade.value][i];
        linkRoute.appendChild(img);
        linkRoute.appendChild(title);
        coursesGrade.appendChild(linkRoute);
    };});



// create all courses for de coursesGrade
function createCourses(value, ...args) {
    
};
