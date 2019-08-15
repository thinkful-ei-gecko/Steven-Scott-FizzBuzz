function fizzBuzz(num) { 
    if (num % 15 === 0) return "fizzbuzz"; 
    if (num % 5 === 0) return "buzz"; 
    if (num % 3 === 0) return "fizz";
    return num;
}

function generateHTML(fizzBuzzResult){ 
    let fizzBuzzClass = '';
    if (typeof fizzBuzzResult === 'string') {
        fizzBuzzClass = fizzBuzzResult;
    }

    return `
    <div class="fizz-buzz-item ${fizzBuzzClass}">
        <span>${fizzBuzzResult}</span>
    </div> `
}


function handleFormSubmit() {
    $('#number-chooser').submit(function(event){
        event.preventDefault();
        const countTo = $('#number-choice').val();
        let arr = [];
        for (let i = 1; i < countTo; i++) {
            arr.push(generateHTML(fizzBuzz(i)));
        }
        $('.js-results').html(arr);
    })
}

$(handleFormSubmit)