let toDo = [];

let done = [];



function Addcards() {

    let searchup = document.getElementById("inputSearch").value;

    if (searchup.length > 0) {
        document.getElementById("inputSearch").value = "";
        toDo.push(searchup);
        createMe();
    } else {
        alert("hey...  nmala qvosizeee..!")
    }

}


function createMe() {

    let result = "";

    for (let i = 0; i < toDo.length; i++) {
        result1 += ""
        "<div class='alert alert-dark d-flex justify-content-between align-items-center'>" + toDo[i] + "<button class='btn btn-success' type='button' onclick='checkMe(" + i + ")'>&check;</button>" + "</div>"
    }

    document.getElementById("result1").innerHTML = result1;


    let result2 = "";

    for (let i = 0; i < done.length; i++) {
        result2 += ""
        "<div class='alert alert-dark d-flex justify-content-between align-items-center'>" + done[i] + "<button class='btn btn-success' type='button' onclick='checkMe(" + i + ")'>&check;</button>" + "</div>"
    }

    document.getElementById("result2").innerHTML = result2;


}

function checkyou(index) {
    done.push(toDo[index]);
    toDo.splice(index, 1);

    checkMe();
}

function deldone(index1) {
    done.splice(index1, 1);
    checkMe();
}