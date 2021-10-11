// chiediamo all'utente due parole in successione, veifichiamo quale delle due parole è più lunga e stampiamo in console un messaggio appropriato 

const userAgeOne = parseInt(prompt("Quanti anni hai?"));


const userAgeTwo = parseInt(prompt("Quanti anni hai però dimmi un altro numero"))

if (userAgeOne > userAgeTwo) {
    console.log ("user1 è più grande di user2");
}

if (userAgeTwo > userAgeOne) {
    console.log ("user2 è più grande di user1")
}

if (userAgeOne == userAgeTwo) {
    console.log ("user1 e user2 hanno la stessa età")
}