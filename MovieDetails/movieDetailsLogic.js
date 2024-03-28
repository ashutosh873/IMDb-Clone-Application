async function movieDetails(){
let urlParams = new URLSearchParams(window.location.search);
let movieName=urlParams.get('movieName');
let apiReqUrl="https://www.omdbapi.com/?apikey=533074a1&t="+movieName;
let apiRes=await fetch(apiReqUrl);
let movie=await apiRes.json();  
document.getElementById("movieTitle").innerHTML=movie.Title;
document.getElementById("moviePoster").setAttribute("src",movie.Poster);
document.getElementById("moviePlot").innerHTML=movie.Plot;  
}
      
    

    
