async function movieSearch(){
    let movieContains=document.getElementById("movieTitleSearch").value;
    if(movieContains.length<3){
        document.getElementById("SearchResults").innerHTML='';
    }else{
        let apiReqUrl="http://www.omdbapi.com/?apikey=533074a1&s="+movieContains;
        let apiRes=await fetch(apiReqUrl);
        let movieList=await apiRes.json();
        document.getElementById("SearchResults").innerHTML='';
        if(!movieList.Search){
            let movie=document.createElement("div");
                movie.id="movieSearchResults";
                movie.innerHTML='No Movies Found';
                movie.style="color:white;text-align:center;font-weight:bold;font-size:17px;";
                document.getElementById("SearchResults").appendChild(movie);
            }else{
            for(let i=0;i<movieList.Search.length;i++){
                let movie=document.createElement("div");
                movie.id="movieSearchResults";
                let movieLink=document.createElement("a");
                movieLink.innerHTML=movieList.Search[i].Title;
                movieLink.className="MovieLink";
                movieLink.setAttribute("onclick","redirectToMovieDetails(event)");
                let favoriteButton=document.createElement("button");
                favoriteButton.innerHTML="Add to Favorites";
                favoriteButton.setAttribute("onclick","navigateToFavoriteMovies(event)");
                movie.appendChild(movieLink);
                movie.appendChild(favoriteButton);
                document.getElementById("SearchResults").appendChild(movie);
            
                
            }   
        }
        
    }
}

function redirectToMovieDetails(event){
    let movieName=event.target.innerHTML;
    location.href='./MovieDetails/movieDetails.html'+"?movieName="+movieName;
}

function navigateToFavoriteMovies(event){
    let movieName=event.target.previousElementSibling.innerHTML;
    localStorage.setItem(movieName,movieName);
    location.href='./FavoriteMovies/favoriteMovies.html';
}

