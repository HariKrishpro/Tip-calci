// BILL & NO OF PEOPLE
const input1 = document.getElementById("dollar-text-id");
const input2 = document.getElementById("people-text-id");

//CUSTOM
const input3 = document.getElementsByClassName("white-button");

//RESET
// const input4 = document.getElementById('reset-btn-id');

//Can't Be Zero
const setValue = document.getElementsByClassName('cant-zero');


const output1 = document.getElementById("tip-amount-id");
const output2 = document.getElementById("total-amount-id");

var total_bill = 0;
var tip_button = 0;
var No_people = 1;

function setColor(btn) {
    //Backing
    backing();

    // Changing Current Button
    var curr_btn = document.getElementById(btn);
    curr_btn.style.backgroundColor = "hsl(172, 67%, 45%)";
    curr_btn.style.color = "hsl(183, 100%, 15%)";
}

function backing(){
    
    // Backing Dark Button
    var all_btn = document.getElementsByClassName("dark-button");
    for (var i = 0; i < all_btn.length; i++) {
        all_btn[i].style.backgroundColor = "hsl(183, 100%, 15%)";
        all_btn[i].style.color = "white";
    }

    //Backing White Button
    var white_btn = document.getElementsByClassName("white-button");
    console.log(white_btn)
    white_btn[0].style.backgroundColor = "white";
    white_btn[0].value = "";
}


input1.addEventListener("change", () => {
    total_bill = input1.value;
    print();
});

input2.addEventListener("change", () => {
    No_people = input2.value;
    if(No_people==0){
        setValue[0].innerHTML = "Can't be zero"
        input2.style.border = "2px solid rgb(255, 77, 77)";
    }
    else{
        setValue[0].innerHTML = ""
        input2.style.border="none";
    }
    print();
});

function button_click_dark(param) {
    tip_button = param;
    print();
}

input3[0].addEventListener("change", () => {
    tip_button = input3[0].value;
    print();
});


function reseting(){
    input1.value = ""
    input2.value = ""
    output1.innerText = "$0.00"
    output2.innerText = "$00.00"
    setValue[0].innerHTML = ""
    input2.style.border="none";
    backing();
};


function print() {
    var total_tip = ((total_bill * (tip_button / 100)) / No_people).toFixed(2);

    output1.innerText = "$" + total_tip;

    var total_amount = (total_bill / No_people).toFixed(2);

    var total = parseFloat(total_amount) + parseFloat(total_tip);
    output2.innerText = "$" + total;

    console.log(
        "total BILL " +
            total_bill +
            "\n tip_BUTTON " +
            tip_button +
            "\nNo of people " +
            No_people
    );
}
