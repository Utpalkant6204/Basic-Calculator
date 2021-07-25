let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let resultDisplay = false;
let dot = false;

buttons.forEach(function(button)
{
    button.addEventListener('click', calculate);
});


function calculate(event)
{
    const clickbuttonvalue=event.target.value;
    //console.log(clickbuttonvalue);


    if( resultDisplay == true && (clickbuttonvalue == '+' || clickbuttonvalue == '-' || clickbuttonvalue == '*' || clickbuttonvalue == '/' || clickbuttonvalue == '%'))
    {
        
        //console.log(clickbuttonvalue);
        let ind = screen.value;
        let y = ind.substring(0,ind.length -1);
        screen.value = y + clickbuttonvalue;
        
    }
    else  if(clickbuttonvalue === '=')
    {
        if(screen.value !== '') {
            screen.value = eval(screen.value);
        }
    }
    else if(clickbuttonvalue=== 'c')
    {
        dot = false;
        screen.value= '';
       
    }
    else if (clickbuttonvalue === 'ac')
    {
        let ind = screen.value;
        screen. value = ind.substring(0,ind.length -1);
        dot = false;
    }
    
    else if (clickbuttonvalue == '.')
    {
        if(clickbuttonvalue == '.' && !dot)
        {
            dot = true;
        }
        else{
            return;
        }

        if(screen.value == '' && clickbuttonvalue == '.')
        {
            screen.value = '0';
            screen.value += clickbuttonvalue;
        }
        else if (clickbuttonvalue == '.' && resultDisplay == true)
        {
            screen.value = screen.value + '0' + clickbuttonvalue;
        }
        else { 
            screen.value += clickbuttonvalue;
        } 
        
    }
    else{
        if(screen.value === '0')
        {
            screen.value=clickbuttonvalue;
        }
        else {
            //screen.value += clickbuttonvalue;
            if (clickbuttonvalue == '+' || clickbuttonvalue == '-' || clickbuttonvalue == '*' || clickbuttonvalue == '/' || clickbuttonvalue == '%'){
                resultDisplay = true;
                dot = false;
                screen.value += clickbuttonvalue;
                console.log(screen.value);
            }
           
            else{
                screen.value += clickbuttonvalue;
                resultDisplay = false;
                
            }
        }
    }
}


