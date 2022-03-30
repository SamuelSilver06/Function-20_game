function game(){
    fname()
    user()
    computer()
}

function fname(){
    var name = prompt("What is thy name?")
    alert(`Hello sir ${name}`)
    return name
}

function randomnumber(){
    var ran = Math.floor(Math.random() * 10) + 1
    return ran
}

function user(){

    var score = 0;
    do{
        var ran = randomnumber()
        score = score + ran
        alert(`you rolled ${ran} your new score is ${score}`)
        if(score > 20){
            alert("you went over 20. you lose")
            break
        }
        var question = prompt("do you want to roll again? (y) for yes (n) for no")
    }while(question == "y")

    return score
}

function computer(){
    var ran = randomnumber()
    var cscore = 0;
    cscore = cscore + ran
    alert(`the computer rolled a ${ran}, the computers new score is ${cscore}`)
    if (cscore > 16){
        randomnumber()
    }

    else if(cscore > 20){
        alert("the computer went over 20. you win!!")
    }
}




game()