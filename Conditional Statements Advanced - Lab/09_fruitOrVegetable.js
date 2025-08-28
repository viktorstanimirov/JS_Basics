function frutOrVegetable(productName) {
    const frutList = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"]
    const vegetableList = ["tomato", "cucumber", "pepper", "carrot"]

    if (frutList.includes(productName)) {
        console.log("fruit");
    } else if (vegetableList.includes(productName)) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}