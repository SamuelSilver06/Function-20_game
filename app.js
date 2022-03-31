function game(){
    fname()
    finalscore(user(),computer())
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
            alert("you went over 20.")
            break
        }
        var question = prompt("do you want to roll again? (y) for yes (n) for no")
    }while(question == "y")

    return score
}


function computer(){

    var cscore = 0;
    do{
        var ran = randomnumber()
        cscore = cscore + ran
        alert(`I rolled ${ran} my new score is ${cscore}`)
        if(cscore > 20){
            alert("I went over 20.")
            break
        }

    }while(cscore < 16)

    return cscore
}


function finalscore(score, cscore){
    if((cscore > score) && (cscore <= 20)){
        alert(`the computers score was ${cscore} and yours was ${score}. you lose`)
    }else if(score > 20 && cscore > 20){
        alert(`the computers score was ${cscore} and yours was ${score}. you both lost`)
    }else if(score == cscore){
        alert(`the computers score was ${cscore} and yours was ${score}. you tied`)
    }else if(score > 20){
        alert(`the computers score was ${cscore} and yours was ${score}. you went over 20 so you lost`)
    }else if ((score > cscore) && (score <= 20)){
        alert(`the computers score was ${cscore} and yours was ${score}. you win`)
    }else if ((score <= 20) && (cscore > 20)){
        alert(`the computers score was ${cscore} and yours was ${score}. you win`)
}



game()