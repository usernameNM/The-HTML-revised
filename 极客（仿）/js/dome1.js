 

/*第一个轮播图*/
  window.onload = function(){
   var mainclose = document.getElementById('mainclose');
   var maindiv = document.getElementById('maindiv');
   var guanggao = document.getElementById('guanggao');
   var close = document.getElementById('close');
   var onelunbo = document.getElementById('onelunbo');
   var picture = document.getElementById('picture');
   var buttons = document.getElementById('buttons').getElementsByTagName('span');
   var left = document.getElementById('left');
   var right = document.getElementById('right');
   var index = 1;
   var elimented = true;
   var timer;
   var timer2;
   var partfive = document.getElementsByClassName('partfive');
   var container = document.getElementById('container');
   var dian = document.getElementById('dian');
   var dian = document.getElementById('dian').getElementsByTagName('span');
   var moved = true;
     
     
     
     function showButton(){
      if (index > 5) {index = 1}
        else if(index < 1){index = 5}
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].className = "";
        }
      buttons[index - 1].className = "on";
     }
     function eliment(setoff){
      var newLeft = parseInt(picture.style.left) + setoff;
      var time = 500;
      var interval = 10;
      var speed = setoff / (time / interval);
        
        function go(){   
        elimented = false;    
        if ( (speed > 0 && parseInt(picture.style.left) < newLeft) || (speed < 0 && parseInt(picture.style.left) > newLeft) ) {
          picture.style.left = parseInt(picture.style.left) + speed +'px';
          setTimeout(go,interval);
        }
        else{
            picture.style.left = newLeft + 'px';
            if (newLeft > -750) {
            picture.style.left = -3750 +'px';
            } 
            if (newLeft < -3750) {
              picture.style.left = -750 +'px';
            }
            elimented = true;
            }
        }
        go();
     }
         
     function play(){
        timer = setInterval(function(){
          right.onclick();
        },3000)
     }
     function stop(){
        clearInterval(timer);
     }
     function move(long){
      var newLeft = parseInt(container.style.left) + long;
      var time = 300;
      var interval = 10;
      var speed = long / (time / interval);
        
        function go(){ 
          moved = false;   
          if ( (speed > 0 && parseInt(container.style.left) < newLeft) || (speed < 0 && parseInt(container.style.left) > newLeft) ) {
            container.style.left = parseInt(container.style.left) + speed +'px';
            setTimeout(go,interval);
          }else{
            container.style.left = newLeft + 'px';
            if (newLeft > -1000) {
              container.style.left = -2000 + 'px';
            }
            if (newLeft < -2000) {
              container.style.left = -1000 + 'px';
            }
            moved = true;  
          }
        }
        go();
      }
      function begin(){
        timer2 = setInterval(function(){
          dian[1].onclick();
          dian[0].onclick();
        },3000)
      }
      function over(){
        clearInterval(timer2);
      }
     left.onclick = function(){
            if (elimented == true) {
              index -= 1;
              showButton();
              eliment(750);
            }
            
     }
     right.onclick = function(){
            if (elimented == true) {
              index += 1;
        showButton();
        eliment(-750);
      }
     }
     for (var i = 0;i < buttons.length; i++) {
        buttons[i].onclick = function(){
        if (this.getAttribute('class') == "on") {
          return;
        }
        var newIndex = parseInt(this.getAttribute('index'));
        if (elimented == true) {
          eliment((-750)*(newIndex - index));  
          index = newIndex;
          showButton();
        }
        }
     }
     play();
     picture.onmouseover = stop;
     picture.onmouseout = play;
     dian[1].onclick = function(){
          if (moved == true) {
            if (dian[0].id == "onone") {return;}
            move(-1000);
            dian[0].id = "onone" ;
            dian[1].id = "ontwo" ;
          }       
      }
      dian[0].onclick = function(){
          if (moved == true) {
            if (dian[0].id == "dianone") {return;}
            move(1000);
            dian[0].id = "dianone" ;
            dian[1].id = "diantwo" ;
          }          
      } 
      container.onmouseover = over;
      container.onmouseout = begin;
      begin();

     close.onclick = function(){
      guanggao.style.display = "none";
    }
       
    mainclose.onclick = function(){
        maindiv.style.display = "none";
    }
    var sWidth = document.documentElement.scrollWidth;
    GD.style.left = sWidth/2 + 505 +'px';
    window.onscroll = function()
    { var sWidth = document.documentElement.scrollWidth;
      var sTop = document.documentElement.scrollTop || document.body.scrollTop;      
      var GD = document.getElementById('GD');
          GD.style.left = sWidth/2 + 505 +'px';
          GD.style.top =sTop + 'px';
    }
    var GD0 = document.getElementById('GD0');
    var cHeight = document.documentElement.clientHeight;
        GD0.style.height = 555 +'px';
  }




