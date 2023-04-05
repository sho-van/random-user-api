const uri = 'https://randomuser.me/api/?results=50'
fetch(uri)
    .then(response => response.json())
    .then(data => show(data.results))

const show = (data) => {
    const parent = document.getElementById('parent-div')
    for (let person of data) {
        const child = document.createElement('div')
        child.classList.add('col')
        child.innerHTML = format(person)
        parent.appendChild(child)
    }
}


const format = (person) => {
    return `
            <div class="row g-0 border p-2 shadow rounded">
                <div class="col-md-4">
                    <img src="${person.picture.large}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${person.name.title} ${person.name.first} ${person.name.last}</h5>
                        <p class="card-text">
                            <table>
                                <tr>
                                    <th>Gender</th>
                                    <th>:</th>
                                    <td>${person.gender}</td>
                                </tr>
                        
                                <tr>
                                    <th>Country</th>
                                    <th>:</th>
                                    <td>${person.location.country}</td>
                                </tr>
                                
                                <tr>
                                    <th>Email</th>
                                    <th>:</th>
                                    <td>${person.email}</td>
                                </tr>
                                
                                <tr>
                                    <th>Phone</th>
                                    <th>:</th>
                                    <td>${person.phone}</td>
                                </tr>
                            </table>
                        </p>
                        <p class="card-text"><small class="text-body-secondary">from randomusergenderator api</small></p>
                    </div>
                </div>
            </div>
        `
}


