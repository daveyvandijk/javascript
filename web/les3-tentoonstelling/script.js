const myimage = document.getElementById('myimage')
const mytitle = document.getElementById('mytitle')
const mybeschrijving = document.getElementById('mybeschrijving')
 let paintings = [
    "img/bestand1.PNG", 
    "img/bestand2.PNG", 
    "img/bestand3.PNG",
    "img/bestand4.png",
    "img/bestand5.png",
    "img/bestand6.png"]
let titels = [
    "de schilderijen van davey ",
    "cool", "mooi", "woooow", ":O", "wat een mooie foto"
]
let beschrijvingen = [
    "foto van space dust",
    "foto van planeten ",
    "foto van astronaut",
    "foto van medere planeten en astronaut",
    "space",
    "aarden"
]
function changeimage(index){
   mytitle.innerHTML = titels[index]
    myimage.src = paintings[index]
    mybeschrijving.innerHTML = beschrijvingen[index] 


}