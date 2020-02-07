// slick
$(document).ready(function(){
  $('.brands').slick({
    mobileFirst:true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
$(document).ready(function(){
  $('.feedback-item').slick({
   slidesToShow: 3,
   slidesToScroll:3,
  });
});
$('#form-pay').on('submit',function(){
    var isValid=true;
     if($('#name').val().trim()==''){
       $('#name').next('span').text('Vui lòng nhập họ tên.');
       isValid=false;
     }
     else{
      $('#name').next('span').text('');
     }

     if($('#phone').val().trim()==''){
      $('#phone').next('span').text('Vui lòng nhập số điện thoại.');
      isValid=false;
    }
    else{
     $('#phone').next('span').text('');
    }

    if($('#address').val().trim()==''){
      $('#address').next('span').text('Vui lòng nhập địa chỉ.');
      isValid=false;
    }
    else{
     $('#phone').next('span').text('');
    }
    if(isValid==true){
      alert("Bạn đã đặt hàng thành công!");
    }
    return isValid;
});