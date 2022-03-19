//declaring variables
var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping,total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}