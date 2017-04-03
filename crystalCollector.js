 

var winCounter = 0
var lossCounter = 0 


var Sum = 0
var yourScore = []
$("#your-score").html("0")
$("#win-counter").html("0")
$("#loss-counter").html("0")


function startGame() {
	 Sum = 0
	 $("#your-score").html(Sum)
	 randomNumber = Math.floor(Math.random()*(100-50))+50
	console.log(randomNumber)
	$("#score-need").html(randomNumber)

	 diamondNumber = Math.floor(Math.random()*(10-1))+1
	 console.log(diamondNumber)

	 emeraldNumber = Math.floor(Math.random()*(20-1))+1
	 console.log(emeraldNumber)

	 rubyNumber = Math.floor(Math.random()*(15-1))+1
	 console.log(rubyNumber)

	 yellowNumber = Math.floor(Math.random()*(20-1))+1
	 console.log(yellowNumber)


}



function roundComplete() {

	if (Sum === randomNumber) {
		alert ("You win!")
		winCounter++
		$("#win-counter").html(winCounter)
		startGame()
	}

	else if (Sum > randomNumber) {
		alert ("You lose!")
		lossCounter++
		$("#loss-counter").html(lossCounter)
		startGame()
	}

}







$("#diamond").on("click",function() {
	diamondNumber = parseInt(diamondNumber)
	Sum = (Sum + diamondNumber)
	yourScore.push(Sum)
	$("#your-score").html(Sum)
	roundComplete()

})

$("#emerald").on("click",function() {
	emeraldNumber = parseInt(emeraldNumber)
	Sum = (Sum + emeraldNumber)
	yourScore.push(Sum)
	$("#your-score").html(Sum)
	roundComplete()

})

$("#ruby").on("click",function() {
	rubyNumber = parseInt(rubyNumber)
	Sum = (Sum + rubyNumber)
	yourScore.push(Sum)
	$("#your-score").html(Sum)
	roundComplete()

})

$("#yellow").on("click",function() {
	yellowNumber = parseInt(yellowNumber)
	Sum = (Sum + yellowNumber)
	yourScore.push(Sum)
	$("#your-score").html(Sum)
	roundComplete()

})



startGame()


