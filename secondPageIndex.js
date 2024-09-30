
var random = Math.floor(Math.random() * 10);

function buyButton_classic() {
    var choice = confirm('Your model is ' + "Classic CowboyBike" + "\nIt will be coast - $2.700" + "\nEverything is right?");
    var price = 2700;
    var priceWithDiscount = price - price * (random/100);
    if (choice === true) {
        var confirmation = prompt('Please, write your Email.');
        alert( 'Congratulations!' + '\nYour personal discount on the first order is - ' + random + '%' + '\n(The discount amount was randomly generated)' + '\nThe final cost will be - ' + priceWithDiscount + '$' + '\nWe will contact you very soon in your Email - ' + confirmation + '\nThank you for choosing us!');
    } else {
    var confirmation = prompt('Please, write your Email.');
    if (confirmation === null) {
        alert('\nCome back soon!');
    } else
        alert('We will contact you about your problem in your Email - ' + confirmation + '\nSee you soon!');
    }
}

function buyButton_cruiser() { 
    var choice = confirm('Your model is ' + "Cruiser CowboyBike" + "\nIt will be coast - $2.990" + "\nEverything is right?");
    var price = 2990;
    var priceWithDiscount = price - price * (random/100);
    var priceWithDiscountUp = Math.ceil(priceWithDiscount);
    if (choice === true) {
        var confirmation = prompt('Please, write your Email.');
        alert( 'Congratulations!' + '\nYour personal discount on the first order is - ' + random + '%' + '\n(The discount amount was randomly generated)' + '\nThe final cost will be - ' + priceWithDiscountUp + '$' + '\nWe will contact you very soon in your Email - ' + confirmation + '\nThank you for choosing us!');
    } else {
    var confirmation = prompt('Please, write your Email.');
    if (confirmation === null) {
        alert('\nCome back soon!');
    } else
        alert('We will contact you about your problem in your Email - ' + confirmation + '\nSee you soon!');
    }
        
} 

function buyButton_cruiser_ST() {
    var choice = confirm('Your model is ' + "Cruiser ST CowboyBike" + "\nIt will be coast - $2.990" + "\nEverything is right?");
    var price = 2990;
    var priceWithDiscount = price - price * (random/100);
    var priceWithDiscountUp = Math.ceil(priceWithDiscount);
    if (choice === true) {
        var confirmation = prompt('Please, write your Email.');
        alert( 'Congratulations!' + '\nYour personal discount on the first order is - ' + random + '%' + '\n(The discount amount was randomly generated)' + '\nThe final cost will be - ' + priceWithDiscountUp + '$' + '\nWe will contact you very soon in your Email - ' + confirmation + '\nThank you for choosing us!');
    } else {
    var confirmation = prompt('Please, write your Email.');
    if (confirmation === null) {
        alert('\nCome back soon!');
    } else
        alert('We will contact you about your problem in your Email - ' + confirmation + '\nSee you soon!');
    }
}
   
function buyButton_cross() {
    var choice = confirm('Your model is ' + "Cross CowboyBike" + "\nIt will be coast - $3.390" + "\nEverything is right?");
    var price = 3390;
    var priceWithDiscount = price - price * (random/100);
    var priceWithDiscountUp = Math.ceil(priceWithDiscount);
    if (choice === true) {
        var confirmation = prompt('Please, write your Email.');
        alert( 'Congratulations!' + '\nYour personal discount on the first order is - ' + random + '%' + '\n(The discount amount was randomly generated)' + '\nThe final cost will be - ' + priceWithDiscountUp + '$' + '\nWe will contact you very soon in your Email - ' + confirmation + '\nThank you for choosing us!');
    } else {
    var confirmation = prompt('Please, write your Email.');
    if (confirmation === null) {
        alert('\nCome back soon!');
    } else
        alert('We will contact you about your problem in your Email - ' + confirmation + '\nSee you soon!');
    }
} 

function buyButton_cross_ST() {
    var choice = confirm('Your model is ' + "Cross ST CowboyBike" + "\nIt will be coast - $3.390" + "\nEverything is right?");
    var price = 3390;
    var priceWithDiscount = price - price * (random/100);
    var priceWithDiscountUp = Math.ceil(priceWithDiscount);
    if (choice === true) {
        var confirmation = prompt('Please, write your Email.');
        alert( 'Congratulations!' + '\nYour personal discount on the first order is - ' + random + '%' + '\n(The discount amount was randomly generated)' + '\nThe final cost will be - ' + priceWithDiscountUp + '$' + '\nWe will contact you very soon in your Email - ' + confirmation + '\nThank you for choosing us!');
    } else {
    var confirmation = prompt('Please, write your Email.');
    if (confirmation === null) {
        alert('\nCome back soon!');
    } else
        alert('We will contact you about your problem in your Email - ' + confirmation + '\nSee you soon!');
    }
}

