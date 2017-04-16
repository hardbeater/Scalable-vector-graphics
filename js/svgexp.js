$(window).ready(function(){

var circlea=$('#circlea');
var circleb=$('#circleb');
var circlec=$('#circlec');
var t=10;
var t1=100;

setInterval(function() {
   circlea.css({
    'stroke-dashoffset':'+=.5px'
  });
  circleb.css({
    'stroke-dashoffset':'-=1px'
  });

},t);
setInterval(function () {
  if(circlec.attr('r')==6.25)
  {
  circlec.attr('r','8');
  circlec.css('stroke','black');

}
else {
  circlec.attr('r','6.25');
  circlec.css('stroke','green');
}
},t1);
//path1
var clicks=0;
var path1=$('.path1');
var patha=$('#patha');
var pathb=$('#pathb');
var pathc=$('#pathc');
var circle=$('.circle');
var display=$('.display');
var header=$('.header');
var underline=$('.underline');
var offset1=287.5;
var offset2=290.1571044921875;
path1.click(function(){


  if(clicks==0){

patha.css({
  'stroke-dashoffset':'64'
});
pathb.attr('d','M 48.9 50.5 L 48.9 50.5');
  pathc.css({
  'stroke-dashoffset':'-'+offset1
});

          clicks++;

    circle.css({
           'background-color':'white',
      'transform':'scale(72)',
      'z-index':'5'
          });

  display.css({'opacity':'1'});
  header.css({'margin-top':'50px'});
  underline.css({'margin-top':'20px'});

  }

  else if(clicks==1){

patha.css({
  'stroke-dashoffset':offset2
});
pathb.attr('d','M 30 50.5 L 70 50.5');
pathc.css({
  'stroke-dashoffset':'0'
});

       clicks=0;

      circle.css({
         'background-color':'rgba(255,255,255,.3)',
      'transform':'scale(1)',
      'z-index':'203'
            });

      display.css({'opacity':'0'});
      header.css({'margin-top':'100%'});
      underline.css({'margin-top':'100%'});

  };

});

});
