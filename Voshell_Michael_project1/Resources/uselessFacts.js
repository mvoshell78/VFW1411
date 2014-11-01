//array of data for useless facts

var uselessFactsArray = ["The average life of a taste bud is 10 days.", "In 1980, a Las Vegas hospital suspended workers for betting on when patients would die.", "Dibble means to drink like a duck.","It was once against the law to have a pet dog in a city in Iceland.","A B-25 bomber crashed into the 79th floor of the Empire State Building on July 28, 1945."];

// funtions that change text label for useless2
var newTxt = function(){
	if (i >= uselessFactsArray.length) {
		i = 0;
		}
			useless2.text = uselessFactsArray[i];
			i++;
	};

var preTxt = function(){
	if (i < 0) {
		i = uselessFactsArray.length - 1;
		}
			useless2.text = uselessFactsArray[i];
			i--;
	
	};

// event listeners

nextButton.addEventListener("click", newTxt);

previousButton.addEventListener("click", preTxt);
