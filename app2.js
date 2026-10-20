let people = [ 
    { name: "Sara", age: 20, city: "Cairo" },
    { name: "Omar", age: 25, city: "Alexandria" },
    { name: "Ali", age: 22, city: "Giza" },
    { name: "Zebra", age: 18, city: "Aswan" }
];

const tableBody = document.querySelector("#tableBody");
const searchInput = document.querySelector("#searchInput");
const sortNameBtn = document.querySelector("#sortNameBtn");
const sortAgeBtn = document.querySelector("#sortAgeBtn");

function renderTable(data){
    tableBody.innerHTML="";

    data.forEach(person=> {
            const tr = document.createElement("tr"); 

            const tdName = document.createElement("td");
                tdName.textContent = person.name;

            const tdAge = document.createElement("td");
                tdAge.textContent = person.age;

            const tdCity = document.createElement("td");
                tdCity.textContent = person.city;

                tr.appendChild(tdName);
                tr.appendChild(tdAge);
                tr.appendChild(tdCity);
                tableBody.appendChild(tr);
    }
    );
}

renderTable(people);

searchInput.addEventListener ("input" , e => 
{
    const query = e.target.value.toLowerCase().trim();

    const filterdData = people.filter(p=>
    p.name.toLowerCase().includes(query) || p.city.toLowerCase().includes(query)
    )
    renderTable(filterdData);
}
)
sortNameBtn.addEventListener("click", () => {
            const sortedData = [...people].sort((a,b) => a.name.localeCompare (b.name))
            renderTable(sortedData);
        });
sortAgeBtn.addEventListener ("click" , ()=> {
    const sortedData=[...people].sort((a,b) => a.age-b.age)
    renderTable(sortedData);
})