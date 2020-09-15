window.onload = function() {
    let buses = [];
    if(localStorage.getItem("buses") == null) {
        // Converting Object Array into string
        let buses = JSON.stringify(buses);
        localStorage.setItem("buses", buses); 
    }
}

function addBus(event) {
    event.preventDefault();
    let newBus = {};
    let name = document.getElementById('name').value;
    let source = document.getElementById('source').value;
    let destination = document.getElementById('destination').value;
    let number = document.getElementById('number').value;
    let passengerCapacity = document.getElementById('passengerCapacity').value;
    newBus.name = name;
    newBus.source = source;
    newBus.destination = destination;
    newBus.number = number;
    newBus.passengerCapacity = passengerCapacity;
    // function that converts string to object
    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.push(newBus);
    localStorage.setItem("buses", JSON.stringify(buses)); 
    document.getElementById('name').value = "";
    document.getElementById('source').value = "";
    document.getElementById('destination').value = "";
    document.getElementById('number').value = "";
    document.getElementById('passengerCapacity').value = "";
    display();
}

function display(displayArray = undefined) {
    let tableData = "";
    let buses;
    if(displayArray == undefined) {
        buses = JSON.parse(localStorage.getItem("buses"));
    } else {
        buses = displayArray;
    }
    console.log(displayArray);

    buses.forEach(function(bus, index) {
        let currentRow = `
        <tr>
            <td>${index+1}</td>
            <td>${bus.name}</td>
            <td>${bus.source}</td>
            <td>${bus.destination}</td>
            <td>${bus.number}</td>
            <td>${bus.passengerCapacity}</td>
        </tr>
        `
        tableData += currentRow;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tableData;
}

function seachBySourceDestination() {
    let searchData = document.getElementById("search").value;
    let buses = JSON.parse(localStorage.getItem("buses"));
    let newData = buses.filter(function(bus) {
        return (bus.source.toUpperCase().indexOf(searchData.toUpperCase()) != -1 || bus.destination.toUpperCase().indexOf(searchData.toUpperCase()) != -1)
    });
    display(newData);
}
display();