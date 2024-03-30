function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimes(numbers) {
    return numbers.filter(num => isPrime(num));
}

function filterAndDisplay() {
    const inputString = document.getElementById('numbersInput').value;
    const numbers = inputString.split(',').map(num => parseInt(num.trim()));
    const primeNumbers = filterPrimes(numbers);
    document.getElementById('output').textContent = primeNumbers.join(', ');
}
