console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
const maxItems = 5

function addItem( item ) {
    console.log( 'in addItem' );
    basket.push( item );
    return true;
}
console.log( 'Adding apple to list', addItem( 'apple' ) );
console.log( 'Basket should now contain:', basket );

function listItems() {
    console.log( 'in listItems' );
    for ( item of basket ) {
        console.log( item );
    }
    return true;
}
basket.push( 'cereal', 'eggs', 'milk', 'butter' );
console.log( 'Should list all items (expected true),', listItems() );

function empty() {
    console.log( 'in empty' );
    basket.length = 0;
    return true;
}
console.log( 'Basket should now be empty (expect true),', empty(), 'Basket is:', basket );
basket.push( 'test_thing' );
console.log( 'Basket should now only contain a test_thing', basket );

function isFull() {
    console.log( 'in isFull' );
    if ( basket.length < maxItems ) {
        return false;
    } else {
        return true;
    }
}
console.log( 'Expect isFull to return false now:', isFull() );
basket.push( 'bananas', 'bread', 'oranges', 'pop' ); // To test if function is working with 5 items.
console.log( basket );
console.log ( 'Expect isFull to return true now:', isFull() );

function addItem2( item ) {
    console.log( 'in addItem2' );
    basket.push( item );
    if ( isFull() === false ) {
        return 'You can still add more to the basket! You have: ' + basket.length + ' items. Item added is: ' + true;
    } else {
        basket.pop();
        return 'The basket is full! You cannot add more items.' + false;
    }
}

console.log( addItem2( 'water' ) );
console.log( basket );
basket.pop();
basket.pop();
basket.pop();
console.log( addItem2( 'chicken' ) );
// Need to add items one at a time for function to work.
// Is there a way to put multiple item into the basket at once and -
// for the function to behave properly when doing so?

function removeItem( item ) {
    console.log( 'in removeItem' );
    let indexOfItem = basket.indexOf( item )
    console.log(indexOfItem);
    let removedItem = basket.splice( indexOfItem, 1);
    console.log(removedItem);
}
console.log( basket );
removeItem( 'chicken' );

// This kinda works. I'm guessing I need to use an if statement to return null if the item isnt found. But cant figure it out right now.