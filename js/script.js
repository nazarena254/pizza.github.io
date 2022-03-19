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

// function to make cards slide in carousel at an interval of 1.2 seconds
$(document).ready(function(){
  $("button.continue").click(function(event){

    $('.carousel').carousel({
      interval: 1200
    }) 
  });     

// continue button
$(document).ready(function(){
  $("button.continue").click(function(event){ 

   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1200;
       console.log(price);
     break;
     case "regular":
       price = 800;
       console.log("regular cost "+price);
     break;
     case "small":
       price = 600;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 200;
      break;
      case "Stuffed":
        crust_price = 250;
      break;
      case "Thin":
        crust_price = 150;
      break;
      default:
        console.log("No price"); 
    }
    let topping_price = ptopping.length*100;
    console.log("toppins value" + topping_price);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choice").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choice").slideDown(1500);
    }

    total = price + crust_price + topping_price;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    
// Addpizza button
    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "regular":
           price = 800;
           console.log(price);
         break;
         case "small":
           price = 600;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 200;
          break;
          case "Stuffed":
            crust_price = 250;
          break;
          case "Thin":
            crust_price = 150;
          break;
          default:
            console.log("No price"); 
        }
        let topping_price = ptopping.length*50;
        console.log("toppins value" + topping_price);
        total = price + crust_price + topping_price;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);

      // constractor function
      var newOrder = new Getpizza(pname, psize, pcrust, ptopping, total);

      $("#ordersgiven").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
         
    });

    // Checkout button
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Total bills: Ksh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is Ksh. "+checkoutTotal);
    });

    // home delivery button
    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".choice h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliveryamount= checkoutTotal+150;
      console.log("Pay Ksh. "+deliveryamount+" upon delivery");
      $("#totalbill").append("Your bill + Delivery fee is: "+deliveryamount);
    });

    // when one clicks place order button
    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliveryamount= checkoutTotal+150;
      console.log("Final Bill is: "+deliveryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){      
        $("#finallmessage").append(person+", Order received! Pizza will be delivered to you at "+location+ ". Total Bill: Ksh. "+deliceryamount);
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Delivery details are required!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});
});
