function checkService() {

    let km = parseInt(document.getElementById("km").value);
    let days = parseInt(document.getElementById("days").value);
    let tyre = parseFloat(document.getElementById("tyre").value);
    let speed = document.getElementById("speed").value;
    let smoke = document.getElementById("smoke").value;

    let result = "";

    // FULL SERVICE FIRST
    if (km > 2000 && days > 180 && tyre < 1.6 && speed === "low" && smoke === "black") {
        result = "Complete Servicing Required";
    } 
    else {
        result = "Services Required:\n\n";

        if (km > 2000 || days > 180)
            result += "- Engine Oil Change\n\n";

        if (tyre < 1.6)
            result += "- Replace tyre immediately\n\n";

        if (speed === "low")
            result += "- Chain Lubrication\n\n";

        if (smoke === "black")
            result += "- Engine Air Filtration\n\n";

        result += "- General Cleaning";
    }

    document.getElementById("result").innerText = result;

    return false;
}