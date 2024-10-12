const tbody = document.querySelector('.table__body-wrapper');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(obj => {
            const {title, body} = obj,
                  element = document.createElement('tr');

            element.classList.add('table__body-row');

            element.innerHTML = `
                <th class="table__body-title">${title}</th>
                <th class="table__body-content">${body}</th>
            `;

            tbody.appendChild(element);
        });
    })
    .catch(error => console.error(error));