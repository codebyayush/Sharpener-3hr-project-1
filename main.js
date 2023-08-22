
const amount = document.getElementById("expense")
const categorySelect = document.getElementById("category-select")
const addbtn = document.getElementById("addbtn")
const expenseList = document.getElementById("items")
const desc = document.getElementById("expense-description")


addbtn.addEventListener('click', function(e){
    e.preventDefault()

    

    const amountval = Number(amount.value);
    const catsel = categorySelect.value;
    const descText = desc.value;

    if (catsel === '') {
        alert('Please select a category');
        return;
    }
    if (amountval<=0) {
        alert('Please enter a valid amount')
        return;
    }

    const dataDets = {
        amount: amountval,
        categorySelect: catsel,
        desc: descText
    };

    let tableArr = [];

    if (localStorage.getItem('tableArr')){
        tableArr = JSON.parse(localStorage.getItem('tableArr'))
    }

    tableArr.push(dataDets);
    localStorage.setItem(dataDets.amount, dataDets.categorySelect)


    const expenseList = document.getElementById('items')
    const mainList = document.createElement('li')
    mainList.textContent = "Amount: "+ dataDets.amount + "  " + "Category: " + dataDets.categorySelect + "  " + "Description: " + dataDets.desc;

    //delete btn added
    const delBtn = document.createElement('input')
    delBtn.type = 'button'
    delBtn.className = 'btn btn-danger'
    delBtn.value = 'Delete'
    delBtn.onclick = () => {

    localStorage.removeItem(dataDets.amount)
    expenseList.removeChild(mainList)

  }
   
   
   
 //edit btn added  
    const editBtn = document.createElement('input')
    editBtn.type = 'button'
    editBtn.value = 'Edit'
    editBtn.className = 'btn btn-primary'
    
    editBtn.onclick = () =>{
    document.getElementById('expense').value = dataDets.amount,
    document.getElementById('categorySelect').value = dataDets.categorySelect,
    document.getElementById('expense-description').value = dataDets.desc

    localStorage.removeItem(dataDets.amount)
    expenseList.removeChild(mainList)
  }

mainList.appendChild(delBtn)
mainList.appendChild(editBtn)
expenseList.appendChild(mainList)
})



