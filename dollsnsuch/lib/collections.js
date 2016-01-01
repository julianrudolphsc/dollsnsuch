//Categories colleciton
Categories = new Mongo.Collection("categories");

//products Collection
Products = new Mongo.Collection("products");

//product images Collection
ProductsImages = new FS.Collection("ProductsImages", {
  stores: [new FS.Store.GridFS("ProductsImages")]
});
