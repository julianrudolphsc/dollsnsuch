Template.add_products.events({
  "submit .add_products": function(event){

    var name = event.target.name.value;
    var year = event.target.year.value;
    var category = event.target.category.value;
    var price = event.target.price.value;
    var series = event.target.series.value;
    var description = event.target.description.value;
    var is_featured = event.target.is_featured.value;

    var file = $('#productImage').get(0).files[0];

    if(file){
      fsFile = new FS.File(file);
      ProductsImages.insert(fsFile, function(err, result){
        if(!err){
          var productImage = '/cfs/files/ProductsImages/'+result._id;
          Products.insert({
            name: name,
            category: category,
            year: year,
            price: price,
            series: series,
            description: description,
            is_featured: is_featured,
            image: productImage,
            createdAt: new Date()
          });
        }
      });
    }else{
      var productImage = '/img/noimg.png';
      Products.insert({
        name: name,
        category: category,
        price: price,
        year: year,
        series: series,
        description: description,
        is_featured: is_featured,
        image: productImage,
        createdAt: new Date()
      });
    }
    //clear dat from, yo!
    event.target.name.value = "";
    event.target.year.value = "";
    event.target.category.value = "";
    event.target.price.value = "";
    event.target.series.value = "";
    event.target.description.value = "";
    event.target.is_featured.value = "";

    FlashMessages.sendSuccess("Product Added");
    Router.go('/')

    return false;
  }
});
