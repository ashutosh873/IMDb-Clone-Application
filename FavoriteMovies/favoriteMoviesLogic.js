function favoriteMovies(){
    if(localStorage.length==0){
        let paragraph=document.createElement('p');
        paragraph.innerHTML="NONE OF THE MOVIES ARE ADDED TO FAVORITES";
        document.getElementById('favoriteMovieRecords').appendChild(paragraph);
    }else{
        for(let i=0;i<localStorage.length;i++){
            let movieKey=localStorage.key(i);
            let movieRecord=document.createElement('div');
            movieRecord.id='favoriteMovies';
            let movieName=document.createElement('label');
            movieName.innerHTML=localStorage.getItem(movieKey);
            let removeButton=document.createElement('button');
            removeButton.innerHTML='Remove From Favorites';
            removeButton.setAttribute("onclick","removeFromFavorites(event)");
            movieRecord.appendChild(movieName);
            movieRecord.appendChild(removeButton);
            document.getElementById('favoriteMovieRecords').appendChild(movieRecord);
            
        }
    }
}

function removeFromFavorites(event){
    let movieName=event.target.previousElementSibling.innerHTML;
    let movieToBeRemoved;
    for(let i=0;i<localStorage.length;i++){
        if(movieName===localStorage.getItem(localStorage.key(i))){
            movieToBeRemoved=localStorage.key(i);
            break;
        }
    }
    localStorage.removeItem(movieToBeRemoved);
    location.reload();
}