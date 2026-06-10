let transactions =
JSON.parse(localStorage.getItem("transactions")) || [];

updateUI();

function addTransaction(){

    const text =
    document.getElementById("text").value;

    const amount =
    +document.getElementById("amount").value;

    const category =
    document.getElementById("category").value;

    const date =
    document.getElementById("date").value;

    if(text.trim()==="" || amount===0 || date===""){
        alert("Please fill all fields");
        return;
    }

    const transaction={
        id:Date.now(),
        text,
        amount,
        category,
        date
    };

    transactions.push(transaction);

    saveData();
    updateUI();

    document.getElementById("text").value="";
    document.getElementById("amount").value="";
    document.getElementById("date").value="";
}

function updateUI(){

    const list =
    document.getElementById("list");

    list.innerHTML="";

    const search =
    document.getElementById("search")
    .value.toLowerCase();

    const filtered =
    transactions.filter(t =>
    t.text.toLowerCase().includes(search));

    filtered.forEach(t=>{

        const li =
        document.createElement("li");

        li.classList.add(
        "transaction",
        t.amount > 0 ? "plus":"minus"
        );

        li.innerHTML=`
        <div>
            <strong>${t.text}</strong>
            <div class="small-text">
                ${t.category} | ${t.date}
            </div>
        </div>

        <div>
            ₹${t.amount}

            <button
            class="delete-btn"
            onclick="deleteTransaction(${t.id})">
            X
            </button>
        </div>
        `;

        list.appendChild(li);
    });

    const amounts =
    transactions.map(t=>t.amount);

    const balance =
    amounts.reduce((a,b)=>a+b,0);

    const income =
    amounts.filter(a=>a>0)
    .reduce((a,b)=>a+b,0);

    const expense =
    amounts.filter(a=>a<0)
    .reduce((a,b)=>a+b,0)*-1;

    document.getElementById("balance")
    .innerText = balance.toFixed(2);

    document.getElementById("income")
    .innerText = income.toFixed(2);

    document.getElementById("expense")
    .innerText = expense.toFixed(2);
}

function deleteTransaction(id){
    transactions =
    transactions.filter(
    t=>t.id!==id
    );

    saveData();
    updateUI();
}

function saveData(){
    localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
    );
}