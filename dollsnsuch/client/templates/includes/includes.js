Template.sidebar.helpers({
  categories: function(){
    return Categories.find({}, {
      sort: {
        name: 1
      }
    });
  }
});


Template.home.helpers({
  products: function(){
    return Products.find({}, {
      sort: {
        name: 1
      }
    });
  }
});

Template.featured.helpers({
  products: function(){
    return Products.find({is_featured: "1"}, {
      sort:{
        createdAt: 1
      }
    });
  }
});
