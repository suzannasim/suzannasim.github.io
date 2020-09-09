$(document).ready(function(){
  $(document).click(function(e){
    var myPix = new Array("img/Blob1.png", "img/Blob2.png", "img/New_Blob3.png", "img/New_Blob4.png", "img/New_Blob5.png", "img/New_Blob6.png");
    var num = Math.floor((Math.random() * myPix.length));
      console.log(myPix[num]);
    var img = $('<img class="blob" src="' + myPix[num] + '"/>');
    
    $("#background").append(img.offset({ top: e.pageY-img[0].height/2, left: e.pageX-img[0].width/2 }));
      
    $(img).draggable({scroll:false});
  });
})