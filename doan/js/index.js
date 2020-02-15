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

//pagination

$(document).ready(function(){
  // "use strict"
  // alert(numberOfiTem);
  // $('#product .my-col').hide();
  
  var numberOfiTem= $('#product .my-col').length;
  var limitPerPage=12;
  $('#product .my-col:gt('+ (limitPerPage -1 ) +')').hide();
  var totalPages= Math.ceil(numberOfiTem / limitPerPage);
  
  $('.pagination').append("<li class='page-item current-page active'><a class='page-link' href='#'>" + 1 + "</a></li>");

  for(var i=2;i<=totalPages;i++){
    $('.pagination').append("<li class='page-item current-page'><a class='page-link' href='#'>" + i + "</a></li>");
  }
  $(".pagination").append(" <li id='next-page'><a href='#' class='page-link' aria-label=Next><span>&gt;</span></a></li>");

  $(".pagination .current-page").on('click',function(){
        if($(this).hasClass('active')){
          return false;
        }
        else{
          var currentPage=$(this).index();
          $(".pagination .current-page").removeClass('active');
          $(this).addClass('active');
          $("#product .my-col").hide();
          var grandTotal=limitPerPage * currentPage;
          
          for(var i=grandTotal-limitPerPage;i<grandTotal;i++){
            $("#product .my-col:eq("+ i +")").show();
          }
        }
  });
 $('#next-page').on('click',function(){
      var currentPage=$('.pagination .active').index();
      if(currentPage===totalPages){
        return false;
      }
      else{
        currentPage++;
        $('.pagination li').removeClass('active');
        $('#product .my-col').hide();
        var grandTotal=limitPerPage * currentPage;
        for(var i=grandTotal-limitPerPage;i<grandTotal;i++){
          $("#product .my-col:eq("+ i +")").show();
        }
        $('.pagination li.current-page:eq(' + (currentPage - 1) + ')').addClass('active');
      }
 });
 $('#previous-page').on('click',function(){
  var currentPage=$('.pagination .active').index();
  if(currentPage===1){
    return false;
  }
  else{
    currentPage--;
    $('.pagination li').removeClass('active');
    $('#product .my-col').hide();
    var grandTotal=limitPerPage * currentPage;
    for(var i=grandTotal-limitPerPage;i<grandTotal;i++){
      $("#product .my-col:eq("+ i +")").show();
    }
    $('.pagination li.current-page:eq(' + (currentPage - 1) + ')').addClass('active');
  }
});
})

// search-box

$(document).ready(function(){
  $(".search-item").on("input", function() {
    var value = $(this).val().toLowerCase();
    $("#product").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//