Template.sidebar.helpers({
  categories: function(){
    return Categories.find({}, {
      sort: {
        name: 1
      }
    });
  }
});

Template.qfsidebar.helpers({
  products: function(){
    return Products.find({},{
      name: name
    });
  }
});
