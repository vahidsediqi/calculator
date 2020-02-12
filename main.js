class Calculator {
	constructor(previousOperandTextElemet, currentOperandTextElemet){
		this.previousOperandTextElemet = previousOperandTextElemet;
		this.currentOperandTextElemet = currentOperandTextElemet;
		this.clear();
	}
	
	clear(){
		this.currenOperant = '';
		this.previousOprent = '';
		this.operation = undefined;
	}
	
	delete(){
		this.currenOperant = this.currenOperant.toString().slice(0, -1);
		
	}
	
	apendNumber(number){
		if(number === '.' && this.currenOperant.includes('.')) return
		this.currenOperant = this.currenOperant.toString() + number.toString();
	}
	
	chooseOperation(operation){
		if (this.currenOperant ==='') return;
		if (this.previousOprent !== '') {
			this.compute();
		}
		this.operation = operation;
		this.previousOprent = this.currenOperant;
		this.currenOperant = '';
	}
	
	compute(){
		let computation;
		const prev = parseFloat(this.previousOprent);
		const current = parseFloat(this.currenOperant);
		if(isNaN(prev) || isNaN(current)) return;
		switch(this.operation) {
			case '+':
				computation = prev + current
				break
			case '-':
				computation = prev - current
				break
			case '*':
				computation = prev * current
				break
			case '÷':
				computation = prev / current
				break
				default:
				return
		}
		
		this.currenOperant = computation;
		this.operation = undefined;
		this.previousOprent = '';
		
	}
	
	updateDisplay(){
		this.currentOperandTextElemet.innerText = this.currenOperant;
	    this.previousOperandTextElemet.innerText = this.previousOprent;

	}
}


const operationButton = document.querySelectorAll('[data-operation]');
const numberButton = document.querySelectorAll('[data-number]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElemet = document.querySelector('[data-previous-operand]');
const currentOperandTextElemet = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElemet, currentOperandTextElemet);


numberButton.forEach(button => {
	button.addEventListener('click', () => {
		calculator.apendNumber(button.innerText);
		calculator.updateDisplay();
	})
})


operationButton.forEach(button => {
	button.addEventListener('click', () => {
		calculator.chooseOperation(button.innerText);
		calculator.updateDisplay();
	})
})

equalsButton.addEventListener('click', () => {
	calculator.compute();
	calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {
 calculator.clear();
 calculator.updateDisplay();

})

deleteButton.addEventListener('click', () => {
 calculator.delete();
 calculator.updateDisplay();
})

























