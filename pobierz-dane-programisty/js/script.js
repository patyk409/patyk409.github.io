$(document).ready(function () {
    const btn = $('.get-data');

    $(btn).click(() => {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(data => {
                let dataBox = document.createElement('div');
                $(dataBox).attr('id', 'dane-programisty');
                document.body.appendChild(dataBox);

                let name = document.createElement('p');
                let surname = document.createElement('p');
                let occupation = document.createElement('p');
                let company = document.createElement('p');
                let line = document.createElement('hr')

                $(name).text(`Name: ${data.imie}`);
                $(surname).text(`Surname: ${data.nazwisko}`);
                $(occupation).text(`Occupation: ${data.zawod}`);
                $(company).text(`Company: ${data.firma}`);

                $(dataBox).append(name);
                $(dataBox).append(surname);
                $(dataBox).append(occupation);
                $(dataBox).append(company);
                $(dataBox).append(line);
            })

            .fail(error => {
                console.error(error);
            });
    });
});