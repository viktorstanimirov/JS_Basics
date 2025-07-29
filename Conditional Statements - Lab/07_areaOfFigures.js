function areaOfFigures(typeOfFigure, a, b) {
    let area;

    if (typeOfFigure === "square") {
        area = a * a;
    } else if (typeOfFigure === "rectangle") {
        area = a * b;
    } else if (typeOfFigure === "circle") {
        area = Math.PI * a * a;
    } else if (typeOfFigure === "triangle") {
        area = (a * b) / 2;
    }

    console.log(area.toFixed(3));
}