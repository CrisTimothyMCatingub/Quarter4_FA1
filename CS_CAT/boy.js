document.getElementById("charityForm").addEventListener("submit", function(event) {
    let requiredFields = document.querySelectorAll("[required]");
    let allFilled = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            allFilled = false;
            field.style.border = "2px solid red";
        } else {
            field.style.border = "1px solid #ccc";
        }
    });

    if (!allFilled) {
        event.preventDefault();
        alert("Please fill out all required fields.");
    }
});

document.getElementById("charityForm").addEventListener("reset", function() {
    let fields = document.querySelectorAll("input");
    fields.forEach(field => field.style.border = "1px solid #ccc");
});