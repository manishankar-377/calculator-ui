function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operator = encodeURIComponent(document.getElementById("operator").value);

    if (!num1 || !num2) {
        document.getElementById("result").innerText = "Please enter both numbers.";
        return;
    }

    const url = `http://localhost:8080/calculate/get?num1=${num1}&num2=${num2}&operator=${operator}`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerText = `Result: ${data}`;
        })
        .catch(error => {
            document.getElementById("result").innerText = "Error connecting to backend.";
        });
}

function systemhealth() {


    const url = `http://localhost:8080/system/health`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerText = `Result: ${data}`;
        })
        .catch(error => {
            document.getElementById("result").innerText = "Error connecting to backend.";
        });
}

function systemversion() {


    const url = `http://localhost:8080/system/version`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerText = `Result: ${data}`;
        })
        .catch(error => {
            document.getElementById("result").innerText = "Error connecting to backend.";
        });
}

function postCalculate() {
    const num1 = document.getElementById("postNum1").value;
    const num2 = document.getElementById("postNum2").value;
    const operator = document.getElementById("postOperator").value;

    if (!num1 || !num2) {
        document.getElementById("postResult").innerText = "Please enter both numbers.";
        return;
    }

    const payload = {
        num1: parseFloat(num1),
        num2: parseFloat(num2),
        operator: operator
    };

    fetch("http://localhost:8080/calculate/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById("postResult").innerText = `Result: ${data}`;
        })
        .catch(error => {
            document.getElementById("postResult").innerText = "Error connecting to backend.";
        });
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

