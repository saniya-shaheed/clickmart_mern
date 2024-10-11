var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products  = [
    {
      name: 'Apple iPhone 16 Pro',
      category: 'Mobile Phones',
      image: 'https://m.media-amazon.com/images/I/71vZ5g0-+uL._AC_SX679_.jpg',
      description: 'Clear Case with MagSafe'
    },
    {
      name: 'Apple iPhone 15 Plus',
      category: 'Mobile Phones',
      image: 'https://m.media-amazon.com/images/I/71UOlAVjYeL._AC_SX679_.jpg',
      description: '(512 GB) - Black'
    },
    {
      name: 'Apple iPhone SE',
      category: 'Mobile Phones',
      image: 'https://m.media-amazon.com/images/I/71KaPwoS7lS._AC_SX679_.jpg',
      description: '(64GB) - White (Renewed)'
    },
    {
      name: 'Apple iPhone 12 ',
      category: 'Mobile Phones',
      image: 'https://m.media-amazon.com/images/I/71VpQCVgwnS._AC_SX679_.jpg',
      description: '(128GB) - Purple (Renewed)'
    },
  ]
  console.log(products)
  res.render('index', { products, admin:false});
  
});

module.exports = router;
