const processSeedButton = document.getElementById("processSeedButton");

processSeedButton.addEventListener("click", function (e) {
    const shortFlag = document.getElementById("shortFlag");
    const seedInput = document.getElementById("seedInput");
    const seed = seedInput.value;
    var result = btoa(seed);
    
    if (result.length > 20
    &&  shortFlag.checked) 
        result = result.substring(0, 20);
    
    console.log(result);
    navigator.clipboard.writeText(result);
});