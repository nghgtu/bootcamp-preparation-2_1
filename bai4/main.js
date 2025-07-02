class Worker {
    constructor(name, dob, address, salary, position) {
        this.name = name;
        this.dob = dob;
        this.address = address;
        this.salary = salary;
        this.position = position;
    }
     
}

let list = [];

function sortByName(list) {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i]['name'] > list[j]['name']) {
                let temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }   
}

let worker1 = new Worker("Trương Tấn B", "11-11-1998", "Đà Nẵng", 2000, "Abc");
let worker2 = new Worker("Trương Tấn C", "11-11-1999", "Huế", 2000, "Abc");
let worker3 = new Worker("Trương Tấn A", "11-11-1997", "Quảng Nam", 2000, "Abc");

list.push(worker1);
list.push(worker2);
list.push(worker3);

function displayWorkerTable (list) {
    let display = document.getElementById("display-info");
    display.innerHTML = "";
    
    sortByName(list);

    for(let i = 0; i < list.length; i++) {
        display.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${list[i]['name']}</td>
                <td>${list[i]['dob']}</td>
                <td>${list[i]['address']}</td>
                <td>${list[i]['salary']}</td>
                <td>${list[i]['position']}</td>
            </tr>
        `;
    }

    display.innerHTML += `
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
      `;
}


window.onload = displayWorkerTable(list);

