const employees = document.querySelectorAll('div[id*=pracownik]'); // list of employees
const button = document.querySelector('#oblicz'); // calculate button

// calculates payout
const countPayout = () => {
    for (let employee of employees) {
        // counts the wages for each employee
        let payment = employee.children[1].value * employee.children[2].value;
        employee.children[3].innerText = payment;

        let minimumNumberOfHoursToBonus = 160;
        let averageNumberOfHours = 100;

        // adds bonuses
        if (employee.children[1].value > minimumNumberOfHoursToBonus) {
            let bonus = (employee.children[1].value - minimumNumberOfHoursToBonus) * (employee.children[2].value * 2);
            employee.children[3].innerText = payment + bonus;
            employee.classList.add('bonus-payment-color');
        };

        // marks less than 100 hours
        if (employee.children[1].value < averageNumberOfHours) {
            employee.classList.add('below-average-peyment-color');
        };
    };

    // makes an array sorted by salary - additional
    let arr2 = Array.from(employees).sort((elOne, elTwo) => {
        let salaryOne = elOne.querySelector('.wyplata').innerText;
        let salaryTwo = elTwo.querySelector('.wyplata').innerText;

        if (salaryOne < salaryTwo) {
            return -1;
        }
        return 1;
    });

    console.log(arr2.reverse());
};

// makes an array sorted by employees work time
let arr = Array.from(employees).sort((elFirst, elNext) => {
    let timeFirst = +elFirst.querySelector('.czas').value;
    let timeNext = +elNext.querySelector('.czas').value;

    if (timeFirst < timeNext) {
        return -1;
    };

    return 1;
});

arr.reverse();

// creates a podium of employees with the highest number of hours worked
const mainBox = document.querySelector('#pracownicy'); // main container
const podium = document.createElement('ul'); // list container
mainBox.appendChild(podium);

const addPodium = () => {
    podium.innerHTML = '';

    let firstPlace = document.createElement('li')
    firstPlace.innerHTML = `<span>1.</span> ${arr[0].children[0].innerText}` + `<span> ${arr[0].children[1].value} godzin</span>`;
    podium.appendChild(firstPlace);

    let secondPlace = document.createElement('li')
    secondPlace.innerHTML = `<span>2.</span> ${arr[1].children[0].innerText}` + `<span> ${arr[1].children[1].value} godzin</span>`;
    podium.appendChild(secondPlace);

    let thirdPlace = document.createElement('li')
    thirdPlace.innerHTML = `<span>3.</span> ${arr[2].children[0].innerText}` + `<span> ${arr[2].children[1].value} godzin</span>`;
    podium.appendChild(thirdPlace);
};

// calculate button listeners
button.addEventListener('click', countPayout);
button.addEventListener('click', addPodium);