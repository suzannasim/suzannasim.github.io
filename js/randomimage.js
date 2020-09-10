$(document).ready(function(){
  $(document).click(function(e){
    var myPix = new Array("img/Blobs/BBlob1.png", "img/Blobs/BBlob2.png", "img/Blobs/Blob3.png", "img/Blobs/Blob4.png", "img/Blobs/Blob5.png", "img/Blobs/Blob6.png");
    var num = Math.floor((Math.random() * myPix.length));
      console.log(myPix[num]);
    var img = $('<img class="blob" src="' + myPix[num] + '"/>');
    
    $("#background").append(img.offset({ top: e.pageY-img[0].height/2, left: e.pageX-img[0].width/2 }));
      
    $(img).draggable({scroll:false});
  });
})