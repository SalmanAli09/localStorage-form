
function getData() {

    var name = document.getElementById("name").value;
    var nameCap = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
    var fname = document.getElementById("fname").value
    var mail = document.getElementById("mail").value;
    var gender = document.getElementById("gender");
    var dob = document.getElementById("dob");
    var number = document.getElementById("num").value;
    var cnic = document.getElementById("cnic").value;
    var fcnic = document.getElementById("fcnic").value;
    var add = document.getElementById("add").value;
    var img = document.getElementById("pic")

    // REGEX 

    var name_regex = /^[a-z ,.'-]+$/i
    var fname_regex = /^[a-z ,.'-]+$/i
    var mail_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var number_regex = /^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/
    var add_regex = /^[0-9a-zA-Z\s,-]+$/
    var cnic_regex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/


    if (name_regex.test(name)) {
        if (fname_regex.test(fname)) {
            if (gender.value) {
                if (dob.value) {
                    if (mail_regex.test(mail)) {
                        if (number_regex.test(number)) {
                            if (cnic_regex.test(cnic)) {
                                if (cnic_regex.test(fcnic)) {
                                    if (add_regex.test(add)) {
                                        if (img.value) {
                                            swal(nameCap + " You Are Successfully Registered", "", "success");
                                            submit()

                                        } else {
                                            swal("Please Upload Your Image ", "", "warning");
                                        }
                                    } else {
                                        swal("Enter Your Residensial Address", "", "error");
                                    }
                                } else {
                                    swal("Enter Fathers's Cnic Number", "XXXXX-XXXXXXX-X", "error");
                                }
                            } else {
                                swal("Enter Cnic Number", "XXXXX-XXXXXXX-X", "error");
                            }
                        } else {
                            swal("Enter Contact Number", "03XX-XXXXXXX", "warning");
                        }
                    } else {
                        swal("Enter Email address", "abc@xyz.com", "warning");
                    }
                } else {
                    swal("Enter Date of Birth", "", "warning");
                }
            } else {
                swal("Enter Gender", "", "warning");
            }
        } else {
            swal("Enter Fathername", "", "warning");
        }
    } else {
        swal("Enter Username", "", "warning");
    }


}

function submit() {
    var name = document.getElementById("name").value;
    var nameCap = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
    var fname = document.getElementById("fname").value
    var fnameCap = fname.slice(0,1).toUpperCase() + fname.slice(1).toLowerCase();
    var mail = document.getElementById("mail").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var number = document.getElementById("num").value;
    var cnic = document.getElementById("cnic").value;
    var fcnic = document.getElementById("fcnic").value;
    var add = document.getElementById("add").value;
    var img = document.getElementById("pic")
    var imgSrc = URL.createObjectURL(img.files[0]);

    var getdata = JSON.parse(localStorage.getItem("data"))
    if (getdata === null) {
        obj = {}

    } else {
        obj = getdata;
    }


    obj[name.toLowerCase()] = {
        name: nameCap,
        fname: fnameCap,
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
