let showvalue='';

function appendvalue(value){
    showvalue+=value;
    document.getElementById('display').value=showvalue;
}
function cleardisplay()
{
    showvalue="";
    document.getElementById('display').value=showvalue;
}
function calculate()
{
    showvalue=eval(showvalue)
    document.getElementById('display').value=showvalue;
}