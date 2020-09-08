$(document).ready(function(){
  $(document).click(function(e){
    var myPix = new Array("img/Blobb1.png", "img/Blobb2.png", "img/Blob3.png", "img/Blob4.png");
    var num = Math.floor((Math.random() * myPix.length));
      console.log(myPix[num]);
    var img = $('<img class="blob" src="' + myPix[num] + '"/>');
    
    $("#background").append(img.offset({ top: e.pageY-img[0].height/2, left: e.pageX-img[0].width/2 }));
      
    $(img).draggable({scroll:false});
  });
})