const tbody = document.querySelector('.table__body-wrapper'),
      titleBtn = document.querySelector('#title'),
      bodyBtn = document.querySelector('#body'),
      sortStatus = {
        column: 'title',
        status: 'asc'
      };

[titleBtn, bodyBtn].forEach(btn => {
    btn.addEventListener('click', () => {
        convertStatus(btn.id);
        renderData();
    });
})

function convertStatus(target) {
    if (sortStatus.column === target) {
        sortStatus.status = sortStatus.status === 'asc' ? 'desc' : 'asc';
    } else {
        sortStatus.column = target;
        sortStatus.status = 'asc';
    }

    console.log(sortStatus);
}

function sortObject(data) {
    const {column, status} = sortStatus;


    data.sort((a, b) => {
        const lengthA = a[column].length,
              lengthB = b[column].length;

        return (status === 'asc' ? lengthA - lengthB : lengthB - lengthA);
    });
}

function renderData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            sortObject(data);

            tbody.innerHTML = '';

            data.forEach(obj => {
                const { title, body } = obj,
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
}

renderData();