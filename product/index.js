// Data
let products = [
    { name: "product1", price: 1000, quantity: 2 },
    { name: "product2", price: 2000, quantity: 3 },
    { name: "product3", price: 2000, quantity: 4 }
  ]
  let pay=0;
$.each(products,function(index,obj){
    $('#products').append('<tr class="product'+index+'"></tr>');
    $.each(products[index],function(key,value){
     let x;
     if(key==="quantity"){
         x= '<button class="buttonsub'+index+'">-</button><input id="'+index+'" type="text" value="'+value+'"><button class="buttonplus'+index+'">+</button>'
     }
     else x=value;
     $('.product'+index).append('<td id="'+key+index+'" class="'+key+'">'+x+'</td>');
     let quantity=$('#'+index).val();
    })
    $('.product'+index).append('<td id="total'+index+'" class="total"></td>');
    let quantity=$('#'+index).val();
    let price=$('#price'+index).text();
    let total=price*quantity;
    pay+=total;  
    $('#total'+index).text(total);
    $('.buttonsub'+index).click(function(){
      if(quantity>0)quantity--;
      total=price*quantity;
      console.log(total);
      pay-=price;
      $('#'+index).val(quantity);
      $('#total'+index).text(total);
      $('.pay').text(pay);
    });
    $('.buttonplus'+index).click(function(){
      quantity++;
      total=price*quantity;
      pay+=parseInt(price);
      $('#'+index).val(quantity);
      $('#total'+index).text(total);
      $('.pay').text(pay);
    }); 
 });
 $('#products').append('<tr class="total-pay"></tr>');
 $('.total-pay').append('<td colspan="3"></td>');
 $('.total-pay').append('<td class="pay"></td>');
 $('.pay').text(pay);

