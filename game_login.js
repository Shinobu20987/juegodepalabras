function Adduser(){
    Jugador1_name=document.getElementById("player1_name_input").value;
    Jugador2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",Jugador1_name);
    localStorage.setItem("player2_name",Jugador2_name);
    window.location="game_page.html";
}