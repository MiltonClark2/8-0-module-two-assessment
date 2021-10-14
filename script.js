fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=>res.json())
.then((movies)=>{
    let dropDown = document.querySelector("#dropdown-menu");
 //////////Loop through the movie list and create each one as an option in the dropdown menu
    for(let movie of movies){
        const option = document.createElement("option");
        option.setAttribute("value", movie.title);
        option.textContent = movie.title;
        dropDown.append(option);
    }
//////////Loop through the movie list and create each one as an option in the dropdown menu




})