// MOST IMPORTANT
// This script adds an event listener to a search form and, 
// upon submission, retrieves the search term and type, 
// and if the type is "help" and there is a search term, 
// it displays an alert with the search term.

document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".search-form");
  
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const searchTerm = document.querySelector(".search-box").value;
      const searchType = document.querySelector(".search-type").value;
  
      performSearch(searchTerm, searchType);
    });
  });
  
  async function performSearch(searchTerm, searchType) {
    const result = document.getElementById("result");
  
    if (searchType === "help") {
      if (searchTerm) {
        alert(searchTerm)
      }
    }
  }
  