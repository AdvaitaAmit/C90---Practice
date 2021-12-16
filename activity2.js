function back(){
    window.location="activity_2.html"
}
function getScore(){
    score=localStorage.getItem("scorekey")
    document.getElementById("output").innerHTML="score-"+score
}