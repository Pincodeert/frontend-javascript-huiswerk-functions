// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult
// over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe
// je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten
// namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

//-------------------------------------------------------

// Te nemen stappen:

// 1- maak een for-loop aan die 1 voor 1 door de waardes van de Array loopt, tot dat de laatste index van de array
// (met variabele lengte) is doorlopen.
// 2 - maak een functie die checkt of een waarde groter of gelijk is aan 8. en als dit het geval is tel dan 1 op bij een
// variabele (y) die aanvankelijke nul is) en die uiteindelijk de waarde van y returnt.
// 3- roep binnen de for-loop de zojuist gecreeerde functie aan.
// 4 - sla de return waarde op in een variabele en zorg dat deze zihtbaar wordt voor de gebruiker (

//888888888888888888888888888888888888888888888888888888888888888888888888888

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude
// studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld:
// [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3
//-----------------------------------------------------------

function cumLaude (grades){
    let counter = 0;
    for (let i = 0; i < grades.length; i++) {
        if(grades[i] >= 8){
            counter = counter++;
        }
    } return counter;
}
console.log(cumLaude(grades));
console.log(cumLaude([6,4,5]));
console.log(cumLaude([8, 9, 4, 6, 10]))

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met
// de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

//----------------------------------------------------------
//Te nemen stappen:
// 1- declareer een functie met functienaam die een array als parameter meekrijgt. en vervolgens binnen deze functie:
// 2- bereken de lengte van de array
// 3- zorg middels een for loop die iedere index van de array afgaat dat de waarde bij een varaibele (som) die
// afhankelijk 0 is, wordt opgeteld.
// 3 - Nadat de for loop helemaal doorlopen is: deel de som van alle cijfers uit de array door de lengte van de array
// en sla dit op in een variabele gemiddelde.
// 4- return het gemiddelde
// 5 - console.log dit gemiddelde.

//----------------------------------------------------------

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer
// teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld:
// [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx
//-----------------------------------------------------
function averageGrade(grades){
    let sumOfGrades = 0;
    for ( let i = 0; i < grades.length; i++) {
        sumOfGrades += grades[i];// ipv: sumOfGrades = sumOfGrades + grades[i];
    }
    const average = sumOfGrades/(grades.length);
    return average;
}
console.log(averageGrade(grades));
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]));

//88888888888888888888888888888888888888888888888888888888888888888888888888888888

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function averageGradeRounded(grades){
    let sumOfGrades = 0;
    for ( let i = 0; i < grades.length; i++) {
        sumOfGrades = sumOfGrades + grades[i];
    }
    const average = sumOfGrades/(grades.length);
    const averageRounded = Math.round((average + Number.EPSILON) * 100)/ 100;
    return averageRounded;
}
console.log(averageGradeRounded(grades));
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]));



/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier
// geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


//--------------------------------------------------------

// Te nemen stappen:
// 1- maak een for loop om  alle getallen van de array 1 voor 1 door te lopen
// 2- leg de waarde van het eerste getal (tijdelijk) vast in een let (variabele grootste getal);
// 3- check of het volgende getal groter is dan "grootste getal"
// 3- zo ja, sla dit volgende getal op als "grootste getal".
// 4- zo nee check dan of het daarna volgende getal groter is dan "grootste getal,
// 5- nadat de hele loop doorlopen is: return  "grootste getal".

function highestGrade(grades){
    let highestGrade = grades[0];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i + 1] > highestGrade){
            highestGrade = grades[i + 1];
        }
    } return highestGrade;
}
console.log(highestGrade(grades));
console.log(highestGrade([6, 4, 5]));
console.log(highestGrade([8, 9, 4, 6, 10]));

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer
// teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of
// [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
