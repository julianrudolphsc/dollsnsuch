Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  //home
  this.route('home',{
    path: '/',
    template: 'home',
    data: function(){
      templateData = {
        products: Products.find({is_featured: "1"})
      };
      return templateData
    }
  });

  //products route
  this.route('products', {
    path: '/products',
    template: 'products',
    data: function(){
      templateData = {
        products: Products.find()
      };
      return templateData
    }
  });

  //products route
  this.route('add_products', {
    path: '/add_products',
    template: 'add_products',
    data: function(){
      templateData = {
        categories: Categories.find()
      };
      return templateData
    }
  });

});
