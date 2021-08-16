function next_page() {
    name_1 = document.getElementById("player_1").value;
    name_2 = document.getElementById("player_2").value;
    localStorage.setItem("name_1", name_1);
    localStorage.setItem("name_2", name_2);
    if (name_1 || name_2 != null) {
        window.location = "question.html";
        document.getElementById("title").style.color = "black";
    }
    else {
        document.getElementById("title").style.color = "red";
    }
}