//Add a link to your data object, and use v-bind to sync it up with an anchor tag in your HTML. Hint: you’ll be binding to the href attribute.

var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green'
            },
            {
                variantId: 2235,
                variantColor: 'blue'
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    }
});

