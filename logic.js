const mapOfNumbers = Object.freeze({
    1: { style: "card card-lightblue", value: 1 },
    2: { style: "card card-midblue", value: 2 },
    3: { style: "card card-darkblue", value: 3 },
    4: { style: "card card-midblue", value: 4 },
    5: { style: "card card-darkblue", value: 5 },
    6: { style: "card card-grey", value: 6 },
    7: { style: "card card-grey", value: 7 },
    8: { style: "card card-lightblue", value: 8 },
    9: { style: "card card-darkblue", value: 9 }
});


function appendChildElementsToParent(elements) {

    const parentElement = document.getElementsByClassName('card-container')[0];
    parentElement.innerHTML = '';
    elements.forEach(async number => {
        let element = document.createElement("div");
        element.appendChild(document.createTextNode(mapOfNumbers[number].value))
        element.id = mapOfNumbers[number].value;
        element.className = mapOfNumbers[number].style;
        console.log(element);
        console.log(mapOfNumbers[number].value);
        parentElement.appendChild(element)
    })

    return parentElement;
}

function shuffleCards() {
    let list = Object.keys(mapOfNumbers);
    list = list.sort(() => Math.random() - 0.3)
    appendChildElementsToParent(list);
}

function sortCards() {
    appendChildElementsToParent(Object.keys(mapOfNumbers));
    return parentElement;
}

//Test cases - Can be put in a different test file (test.js) and be executed using jest
describe("Shuffle the cards", () => {
    test("Number of maps to contain 9 element with value from 1-9", () => {
        expect(Object.keys(mapOfNumbers).length).toEqual(9);
    })

    test("Numbered cards to have the right styles", () => {

        const styles = ["card card-lightblue", "card card-midblue", "card card-darkblue", "card card-midblue", "card card-darkblue",
            "card card-grey", "card card-grey", "card card-lightblue", "card card-darkblue"];

        for (let i = 1; i < 10; i++) {
            expect(mapOfNumbers[i].style).toEqual(styles[i - 1]);
        }
    });
});



