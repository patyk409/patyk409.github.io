const students = document.querySelectorAll('div[id*=uczen]'); // list of students
const button = document.querySelector('#oblicz'); // calculate button

// calculates average
const countAverage = () => {
    for (let student of students) {
        const studentGrades = student.querySelectorAll('input[type=number]'); // students grades
        const additionalClasses = student.querySelector('input.zajecia-dodatkowe'); // students additional classes
        const average = student.querySelector('.srednia'); // field of average
        let sumOfGrades = 0;

        for (let grade of studentGrades) {
            // adds points for additional classes 
            if (additionalClasses.value.includes(grade.getAttribute('class'))) {
                if (grade.value !== '6') {
                    let additionToGrade = +grade.value + 0.5;
                    grade.value = additionToGrade;
                };
            };
            
            // marks students with low average
            if (grade.value === '1') {
                student.classList.add('bad-student');
            };

            // counts average
            sumOfGrades += +grade.value;
            average.innerText = (sumOfGrades / 7).toFixed(2);
        };

        // marks students with high average
        if (average.innerText > 4.75) {
            student.classList.add('top-student');
        };
    };
};

// calculate button listener
button.addEventListener('click', countAverage);