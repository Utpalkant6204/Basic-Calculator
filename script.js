let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

buttons.forEach(function(button)
{
    button.addEventListener('click', calculate);
});


function calculate(event)
{
    const clickbuttonvalue=event.target.value;
    //console.log(clickbuttonvalue);

    if(clickbuttonvalue === '=')
    {
        if(screen.value !== '') {
            screen.value = eval(screen.value);
        }
    }
    else if(clickbuttonvalue=== 'c')
    {
        screen.value= 0;
    }
    else{
        if(screen.value == 0)
        {
            screen.value=clickbuttonvalue;
        }
        else {
        screen.value += clickbuttonvalue;
        }
    }
}

