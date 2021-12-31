export const priceUporDawn = (value) => {
    var n = value.includes("-");
    if (n) {
        return true
    } else {
        return false
    }
}

