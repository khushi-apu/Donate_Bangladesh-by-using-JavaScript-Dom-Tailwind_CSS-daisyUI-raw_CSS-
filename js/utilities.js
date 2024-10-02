function getValueFromInput(id)
{
      const values=document.getElementById(id).value
      const convertNumber=parseFloat(values);
      return convertNumber;
}

function getValueFromButton(id)
{
    const ButtonValue=document.getElementById(id).innerText;
    const convertValue=parseFloat(ButtonValue);
    return convertValue;
}