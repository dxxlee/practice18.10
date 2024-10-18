// Task 1
function greetUser() {
    let name = prompt("What is your name?");
    let standardized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    alert("Hello " + standardized);
}

// Task 2
function calculateLife() {
    let age = prompt("What is your age?");
    let yearsRemaining = 90 - age;
    let daysRemaining = yearsRemaining * 365;
    let weeksRemaining = yearsRemaining * 52;
    let monthsRemaining = yearsRemaining * 12;
    alert(`You have ${daysRemaining} days, ${weeksRemaining} weeks, and ${monthsRemaining} months left.`);
}


// Task 4
function whoBuysLunch() {
    let names = ["Aidana", "Bekbolat", "Ramazan", "Daniel", "Diana"];
    let randomIndex = Math.floor(Math.random() * names.length);
    let selectedName = names[randomIndex];
    alert(`${selectedName} is going to buy lunch today.`);
}

