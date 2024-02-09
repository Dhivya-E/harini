function increaseValue(elementId) {
    var value = parseInt(document.getElementById(elementId).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(elementId).value = value;
}

function decreaseValue(elementId) {
    var value = parseInt(document.getElementById(elementId).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
        value--;
    }
    document.getElementById(elementId).value = value;
}
