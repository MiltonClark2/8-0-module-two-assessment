fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=>res.json())
.then((movies)=>{
    let dropDown = document.querySelector("#dropdown-menu");
//////////Loop through the movie list and create each one as an option in the dropdown menu///////////////////
    for(let movie of movies){
        const option = document.createElement("option");
        option.setAttribute("value", movie.title);
        option.textContent = movie.title;
        dropDown.append(option);
    }
//////////Loop through the movie list and create each one as an option in the dropdown menu///////////////////

//////////Display selected movie information/////////////////////////////////////////////////////////////////
    let currentMovie = document.querySelector("#movie-title");
    const releaseYear = document.querySelector("#release-year");
    const description = document.querySelector("#description");

    let selectedMovie;
//////////Display selected movie information/////////////////////////////////////////////////////////////////

//////////Adds event listener to drop down menu is changed displaying the movie info of selected movie///////
    dropDown.addEventListener("change", () => {
        for(let movie of movies){
            if(dropDown.value === movie.title){
                selectedMovie = movie;
                currentMovie.textContent = movie.title;
                releaseYear.textContent = movie.release_date;
                description.textContent = movie.description;
            }
        };
    });
//////////Adds event listener to drop down menu is changed displaying the movie info of selected movie///////
   
/////////Creating an event listener that creates a list item to the review history//////////////////////////
    // let textInput = document.querySelector("#review-input");
    // let button = document.querySelector("#submit-button");

    // button.addEventListener("click", () => {
    //     let list = document.querySelector("#review-history");
    //     let li = document.createElement("li");
    //     li.textContent = textInput.value;
    //     list.append(li);
    // });






});


let textInput = document.querySelector("#review-input");
let button = document.querySelector("#submit-button");
let list = document.querySelector("#review-list");

button.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = textInput.value;
    list.append(li);
});
