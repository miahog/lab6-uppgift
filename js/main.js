"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: Mia Höglund
 */


// Hämta element från DOM
const searchForm = document.querySelector("#searchform");
const errorElement = document.querySelector("#error");
const searchInput = document.querySelector("#search");
const messageElement = document.querySelector("#message");
const recipeContainer = document.querySelector("#recipe");



// Lyssna efter när användaren skickar formuläret
searchForm.addEventListener("submit", handleSearch);


// Submit funktionen
async function handleSearch(event) {
    event.preventDefault();

    const searchTerm = searchInput.value;



    //Avbryt om sökfältet inte klarar validering
    if (!validateSearch(searchTerm)) {
        return;
    }


    // Rensa tidigare meddelanden
    messageElement.textContent = "";


    // Hämta receptdata från API
    const data = await fetchRecipe(searchTerm)

    console.log(data);

    //Koll om API returnerar recept
    if (data.recipes.length === 0) {
        // ta bort tidigare recept
        recipeContainer.innerHTML = "";

        //visa meddelande för användaren
        messageElement.textContent =
            "Inget recept hittades. Prova en annan sökfras.";
        return;
    }

    //hämta första recept från sökresultatet
    const recipe = data.recipes[0];

    console.log(recipe);

    console.log(searchTerm);
}



/**
 * Kontrollera att användaren har angett en sökfras.
 * Om sökfältet är tomt så ska ett felmeddelande visas.
 * Och om ett värde finns rensas ev felmeddelanden.
 */
function validateSearch(searchTerm) {
    // Kontrollerar om sökfältet är tomt
    if (searchTerm.trim() === "") {

        // Visar fellmeddelande
        errorElement.textContent = "Du måste ange en sökfras.";
        return false;
    }



    //Rensa felmeddelanden
    errorElement.textContent = "";
    return true;
}


//Hämta recept från DummyJSON API
async function fetchRecipe(searchTerm) {

    //API-anrop med sökfrasen
    const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchTerm}`
    );

    //Ändra JSON svaret till JavaScript objekt
    const data = await response.json();

    return data;

}