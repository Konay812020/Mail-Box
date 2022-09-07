const getemail = document.getElementById("emails");
// console.log(getemail);

const gettextarea = document.querySelector("textarea");
// console.log(gettextarea);
const getbtn = document.querySelector(".btn");
const getemcontainer = document.querySelector(".email-container");

getemail.focus();

getemail.addEventListener("keyup", function (e) {

    // createmailList(e.target);
    // createmailList(e.target.value);

    // createmailList(this);
    createmailList(this.value)
});

function createmailList(inputtext) {
    // console.log(inputtext);

    //split by comma
    // const eitems = inputtext.split(",");
    // console.log(eitems);

    // Remove empty
    // const eitems = inputtext.split(",").filter(rmempty => rmempty.trim() !== "");

    //remove  space and empty
    const eitems = inputtext.split(",")
        .filter(reempty => reempty.trim() !== "")
        .map(reempty => reempty.trim());


    getemcontainer.innerHTML = "";

    eitems.forEach(function (emitem) {
        // console.log(emitem);
        const setnewspan = document.createElement("span");
        setnewspan.textContent = emitem;
        setnewspan.classList.add("email-item");

        getemcontainer.appendChild(setnewspan);


    })
    // console.log(eitems);

}

getbtn.addEventListener("click", function (e) {
    sendemail()
    e.preventDefault();
})

function sendemail() {
    const gettextvalue = gettextarea.value;
    // console.log(gettextvalue);

    const getaddresses = document.querySelectorAll(".email-item");
    // console.log(getaddress);

    var persons = [];

    if (getaddresses.length > 0 && gettextvalue) {
        getaddresses.forEach(function (getaddress) {
            persons.push({
                email: getaddress.textContent,
                message: gettextvalue
            });
        });
        console.log(persons);
    } else {
        window.alert("Enter Message");
        gettextarea.focus();
    }
}

// 7EB