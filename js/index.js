document.getElementById('first-donate-box-btn').addEventListener('click',()=>{

    console.log("ok click here")
    const inputField=getValueFromInput('input-donate-btn1');
    const inputDonation=getValueFromButton('frist_amount_donation');
    const balanceOfMine =getValueFromButton('my_balance');
    if (isNaN(inputField) || inputField === "" || typeof inputField !=='number') {
          alert("Please enter a valid number.");
          return null;  
      }
    if (inputField < 0) {
          alert("Please enter a non-negative amount.");
          return null;
    }  
    if(inputField>balanceOfMine)
    {
          alert('Insufficient balance. You cannot donate more than your available balance.')
          return
    }
    const mainBlancesAdd=balanceOfMine-inputField;
    const updateDonation=inputDonation+inputField;

    document.getElementById('frist_amount_donation').innerText=updateDonation;
    document.getElementById('my_balance').innerText=mainBlancesAdd;



    const history=document.createElement('div')
    history.className='p-3  bg-white rounded-md w-3/5 h-40 border-2 bg-white border'

    history.innerHTML=`
    <p>${inputField} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
    <p>${new Date().toLocaleDateString()}</p>
  `
    const mainHistory=document.getElementById('history-div')
    mainHistory.insertBefore(history,mainHistory.firstChild)




    document.getElementById("model-container").classList.remove("hidden");

    document.getElementById("close-btn").addEventListener("click", function() {
        document.getElementById("model-container").classList.add("hidden");
      });

})

// ----------- 2 ----------------------

document.getElementById('second-donate-box-btn').addEventListener('click',()=>{

    console.log("ok nclick here")
    const inputField=getValueFromInput('input_donate_btn2');
    const inputDonation=getValueFromButton('second_amount_donation');
    const balanceOfMine =getValueFromButton('my_balance');
    if (isNaN(inputField) || inputField === "" || typeof inputField !=='number') {
          alert("Please enter a valid number.");
          return null;  
      }
    if (inputField < 0) {
          alert("Please enter a non-negative amount.");
          return null;
    }  
    if(inputField>balanceOfMine)
    {
          alert('Insufficient balance. You cannot donate more than your available balance.')
          return
    }
    const mainBlancesAdd=balanceOfMine-inputField;
    const updateDonation=inputDonation+inputField;

    document.getElementById('second_amount_donation').innerText=updateDonation;
    document.getElementById('my_balance').innerText=mainBlancesAdd;

    const history=document.createElement('div')
    history.className='p-3  bg-white rounded-md w-3/5 h-40 border-2 bg-white border'

    history.innerHTML=`
    <p>${inputField} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
    <p>${new Date().toLocaleDateString()}</p>
  `
    const mainHistory=document.getElementById('history-div')
    mainHistory.insertBefore(history,mainHistory.firstChild)



    document.getElementById("model-container").classList.remove("hidden");

    document.getElementById("close-btn").addEventListener("click", function() {
        document.getElementById("model-container").classList.add("hidden");
      });
})

// --------------------- 3 ---------------------------------
document.getElementById('third_donate-box-btn').addEventListener('click',()=>{

    console.log("ok click here")
    const inputField=getValueFromInput('input_donate_btn3');
    const inputDonation=getValueFromButton('third_amount_donation');
    const balanceOfMine =getValueFromButton('my_balance');
    if (isNaN(inputField) || inputField === "" || typeof inputField !=='number') {
          alert("Please enter a valid number.");
          return null;  
      }
    if (inputField < 0) {
          alert("Please enter a non-negative amount.");
          return null;
    }  
    if(inputField>balanceOfMine)
    {
          alert('Insufficient balance. You cannot donate more than your available balance.')
          return
    }
    const mainBlancesAdd=balanceOfMine-inputField;
    const updateDonation=inputDonation+inputField;

    document.getElementById('third_amount_donation').innerText=updateDonation;
    document.getElementById('my_balance').innerText=mainBlancesAdd;

    const history=document.createElement('div')
    history.className='p-3  bg-white rounded-md w-3/5 h-40 border-2 bg-white border'

    history.innerHTML=`
    <p>${inputField} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
    <p>${new Date().toLocaleDateString()}</p>
  `
    const mainHistory=document.getElementById('history-div')
    mainHistory.insertBefore(history,mainHistory.firstChild)




    document.getElementById("model-container").classList.remove("hidden");

    document.getElementById("close-btn").addEventListener("click", function() {
        document.getElementById("model-container").classList.add("hidden");
      });
})





