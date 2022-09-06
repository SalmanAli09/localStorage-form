
var serial = 1;

var getForAdmin = JSON.parse(localStorage.getItem("data"))
console.log(getForAdmin)

function del() {
    var deletethis = event.target.parentNode.parentNode.parentNode.remove();
    // var getThisName = event.target.parentNode.parentNode.parentNode.children[2].firstChild
    // var getForAdmin = JSON.parse(localStorage.getItem("data"))
    // for (key in getForAdmin) {
    //     console.log(key)
    // }
    // var getThisNamestring = getThisName.toString()
    // console.log("Name of banda"+ typeof(getThisNamestring) , "name of key" + typeof(key) )
    // for(i = 0 ; i < key.length ; i++){
    //     if(key === "salman"){
    //         alert("hahah")
    //     }
    //     console.log(key)
    // }

}

// Edit Button
function edit() {
    var getEditVal = event.target.parentNode.parentNode.children
    for (var i = 2; i < getEditVal.length - 1; i++) {
        getEditVal[i].innerHTML +=
            `
           <input type="text">
          `
    }
    var newtxt = document.createTextNode("Update");
    var newElem = document.getElementById("editbtn");
    console.log(newElem.appendChild(newtxt))
}


for (var key in getForAdmin) {
    document.getElementById("tableData").children[0].innerHTML +=
        `
        <tr>
        <td>${serial}</td>
        <td><img src="${getForAdmin[key].img}" id="pic"></img></td>
        <td>${getForAdmin[key].name}</td>
        <td>${getForAdmin[key].fname}</td>
        <td>${getForAdmin[key].dob}</td>
        <td>${getForAdmin[key].gender}</td>
        <td>${getForAdmin[key].mail}</td>
        <td>${getForAdmin[key].number}</td>
        <td>${getForAdmin[key].cnic}</td>
        <td>${getForAdmin[key].fcnic}</td>
        <td>${getForAdmin[key].add}</td>
        <td><center><button onclick="del()" id="deletebtn">Delete</button></center></td>
        </tr>
`
    serial++;

}
var picGet = document.getElementById("pic").src;
if (picGet.src === "undefined") {
    picGet.src = "user.png"
}
function moveToAdmin() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if (user === "admin" && pass === "admin") {
        swal("Login Success!", "", "success");
        document.getElementById("adminLogin").style.display = "none"
        document.getElementById("tableData").style.display = "flex"
    }
    else {
        swal("Login failed!", "Incorrect Username or Password", "error");
        document.getElementById("tableData").style.display = "none"
        user.value = ""
        pass.value = ""
    }
}
