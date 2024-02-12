// Function Triangle

function triangleCalculation() {

    const triangleBaseFeild = document.getElementById('triangleBase');
    const triangleBaseValue = triangleBaseFeild.value;
    const triangleBase = parseFloat(triangleBaseValue)


    const triangleHeightFeild = document.getElementById('triangleHeight');
    const triangleHeightValue = triangleHeightFeild.value;
    const triangleHeight = parseFloat(triangleHeightValue)

    const area = 0.5 * triangleBase * triangleHeight;

    const triangleArea = document.getElementById('triangleArea');
    triangleArea.innerText = area;

    // Area Show
    const container = document.getElementById('container');

    const showTriangle = document.getElementById('triangle-show');
    const showTriangleValue = showTriangle.innerText;

    const li = document.createElement('li');
    container.appendChild(li)

    container.innerText = showTriangleValue + "   " + area;


    triangleBaseFeild.value = '';
    triangleHeightFeild.value = '';


}
triangleCalculation



// Rectangle Calculation
function rectangle() {
    const rectangleBaseFeild = document.getElementById('Wedth')
    const rectangleBaseValue = rectangleBaseFeild.value;
    const rectangleBase = parseFloat(rectangleBaseValue)


    const rectangleLengthFeild = document.getElementById('length');
    const rectangleLngthValue = rectangleLengthFeild.value;
    const rectangleLength = parseFloat(rectangleLngthValue)


    const rectangle = 0.5 * rectangleBase * rectangleLength;

    const rectangleShow = document.getElementById('rectangle-show');
    rectangleShow.innerText = rectangle;

    // Area Show
    const containers = document.getElementById('container');

    const rectangleAreaShow = document.getElementById('rectangle-shows');
    const rectangleAreaShows = rectangleAreaShow.innerText;

    const li = document.createElement('li');
    containers.appendChild(li);

    containers.innerText = rectangleAreaShows + "   " + rectangle;

    rectangleLengthFeild.value = '';
    rectangleBaseFeild.value = '';

}
rectangle


// parallelogram Section

function parallelogram() {

    const gramBaseFeild = document.getElementById('gram-base');
    const gramBaseValue = gramBaseFeild.value;
    const gramBase = parseFloat(gramBaseValue);

    const gramHeightFeild = document.getElementById('gram-height');
    const gramHeightValue = gramHeightFeild.value;
    const gramHeight = parseFloat(gramHeightValue)

    const gram = 0.5 * gramBase * gramHeight;

    const gramArea = document.getElementById('area-create')
    gramArea.innerText = gram;


    // Area Calculation
    const containerr = document.getElementById('container');

    const areaGram = document.getElementById('area-gram');
    const areaTex = areaGram.innerText;

    const li = document.createElement('li');
    containerr.appendChild(li);

    containerr.innerText = areaTex + "   " + gram;


    gramBaseFeild.value = '';
    gramHeightFeild.value = '';

}
parallelogram


// Rhombus Section
function rhombus() {

    const rhombusBaseFeild = document.getElementById('rhombus-base1');
    const rhombusBaseInputValue = rhombusBaseFeild.value;
    const rhombusIn1 = parseFloat(rhombusBaseInputValue)


    const rhombusInputFeild = document.getElementById('rhombus-base2');
    const rhombusInputValue = rhombusInputFeild.value;
    const rhombusIn2 = parseFloat(rhombusInputValue);


    const totalArea = 0.5 * rhombusIn1 * rhombusIn2;

    const areaCollection = document.getElementById('rhombus-create');
    areaCollection.innerText = totalArea;


    // Area Setup

    const container4 = document.getElementById('container');

    const aresSetUp = document.getElementById('area-rhombus');
    const arestext = aresSetUp.innerText;

    const li = document.createElement('li');

    container4.appendChild(li)

    container4.innerText = arestext + "  " + totalArea;






    rhombusBaseFeild.value = '';
    rhombusInputFeild.value = '';
}
rhombus







