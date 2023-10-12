let final
let number /*= prompt("Enter a number: ");*/

function add7()
{
    number = prompt("Enter a number: ");
    final = +number + +7;
    return final;

}

function multiply()
{
    first = prompt("enter the first number: ");
    second = prompt("enter the second number: ");
    mult = first * second;

    console.log(first);
    console.log(second);
    console.log(mult);   
}

function capitalize()
{
    phrase = prompt("enter a phrase: ");
    upper = phrase.charAt(0).toUpperCase(phrase) + phrase.slice(1);
    lower = phrase.substring(1).toLowerCase(phrase);
    cap = upper.charAt(0) + lower
    console.log(upper);
    console.log(lower);
    console.log(cap);

}

function last()
{
    l = prompt("enter a phrase: ");
    end = l.slice(-1);
    console.log(end);

}

function determine()
{
    choice = prompt("choose program: multiply; add; switch; last");
    return choice;

}


determine();


switch(choice)
{
    case "multiply":
        multiply();
        break;

    case "add":
        add7();
        console.log(number);
        console.log(final);
        break;
    case "switch":
        capitalize();
        break;
    case "last":
        last();
        break;
        
}

/*add7();
multiply();*/





