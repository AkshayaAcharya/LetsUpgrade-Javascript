let persons = [
    {
        name: 'Aditya',
        age: 25,
        city: 'Pune',
        salary: 45000
    },
    {
        name: 'Anala',
        age: 27,
        city: 'Mumbai',
        salary: 75000
    },
    {
        name: 'Keerthi',
        age: 23,
        city: 'Noida',
        salary: 40000
    },
    {
        name: 'Deepak',
        age: 28,
        city: 'Chennai',
        salary: 90000
    },
    {
        name: 'Medini',
        age: 26,
        city: 'Hyderabad',
        salary: 50000
    },

]

function display(personArray = persons) {
    let tableData = " ";
    
    personArray.forEach(function(person,index) {
        let currentRow = `
            <tr>
                <td>${index+1}</td>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.city}</td>
                <td>${person.salary}</td>
                <td>
                    <button onclick="deletePerson(${index})">Delete</button>
                </td>
            </tr>
        ` ;
        tableData+=currentRow
    })
    document.getElementsByClassName('tdata')[0].innerHTML = tableData;
}
display();

function searchByNameCity() {
    let searchVal = document.getElementById('search').value;
    let newData = persons.filter(function(person) {
        return (person.name.toUpperCase().indexOf(searchVal.toUpperCase()) != -1 || person.city.toUpperCase().indexOf(searchVal.toUpperCase()) != -1)
    })
    display(newData);
}

function deletePerson(index) {
    persons.splice(index,1);
    display();
}