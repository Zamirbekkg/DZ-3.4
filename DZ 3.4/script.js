
fetch('https://api.quotable.io/random').then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('not');
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка', error));

