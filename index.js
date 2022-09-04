
function submit() {
    var getdata = JSON.parse(localStorage.getItem("data"))
    if (getdata === null) {
        obj = {}

    } else {
        obj = getdata;
    }
    var name = document.getElementById("name").value
    var fname = document.getElementById("fname").value
    var dob = document.getElementById("dob").value
    var gender = document.getElementById("gender").value
    var mail = document.getElementById("mail").value;
    var number = document.getElementById("num").value;
    var cnic = document.getElementById("cnic").value;
    var fcnic = document.getElementById("fcnic").value;
    var add = document.getElementById("add").value;
    var img = document.getElementById("pic")
    var imgSrc = URL.createObjectURL(img.files[0]);

    obj[name.toLowerCase()] = {
        name: name,
        fname: fname,
        dob: dob,
        gender: gender,
        mail: mail,
        number: number,
        cnic: cnic,
        fcnic: fcnic,
        add: add,
        img: imgSrc,
    }
    localStorage.setItem("data", JSON.stringify(obj))
}