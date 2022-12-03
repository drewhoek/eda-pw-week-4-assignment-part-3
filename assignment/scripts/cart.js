console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []

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
console.log( listItems() );

function empty() {
    console.log( 'in empty' );
    basket.length = 0;
    return true;
}
console.log( empty() );
console.log( 'Basket should now be empty,', basket );
basket.push( 'test_thing' );
console.log( 'Basket should now only contain a test_thing', basket );
