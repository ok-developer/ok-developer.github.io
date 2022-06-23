const processSeedButton = document.getElementById("processSeedButton");
const seedInput = document.getElementById("seedInput");

seedInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        processSeedButton.click();
    }
});

processSeedButton.addEventListener("click", function (e) {
    const shortFlag = document.getElementById("shortFlag");
    const specialFlag = document.getElementById("specialFlag");
    const seed = seedInput.value;
    var result = btoa(seed);
    
    if (result.length > 20
    &&  shortFlag.checked) 
        result = result.substring(0, 20);
    
    if (specialFlag.checked)
        result += '='
    
    navigator.clipboard.writeText(result);
});