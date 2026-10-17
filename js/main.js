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

// Lyssna till formuläret
searchForm.addEventListener("submit", handleSearch);

// Submit funktionen
function handleSearch(event) {
    event.preventDefault();
    const searchTerm = searchInput.value;

    console.log(searchTerm);
}