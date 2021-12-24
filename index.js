

function factory() {

    let value = 42;

    return {
        get price() { return value },
        set price( p ) {
            value = p;
        }
    }
}

let product = factory();

let log = (msg) => console.log( product.price, msg );

log('original price');

product.price = 45;
log('price set');

product.price++;
log('price incremented');

product.price += 5;
log('price increase by x');
