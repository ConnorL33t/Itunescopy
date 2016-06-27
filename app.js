//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  document.getElementById('songs-list').innerHTML= " " 
    for (var i = 0; i < songList.length; i++) {
    song=songList[i]
    elem=document.getElementById('songs-list')
    elem.innerHTML+='<li>'+song.title+' by '+song.artist+' <br>  '+ song.collection+' for $'+song.price+'<img src='+song.albumArt+ '/>' +  '</li>'  }
}
   