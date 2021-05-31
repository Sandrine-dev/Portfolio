// les helpers
function $(expr, con) {
    return typeof expr === 'string' ? (con || document).querySelector(expr) : expr;
  }
  
  function $$(expr, con) {
    return Array.prototype.slice.call((con || document).querySelectorAll(expr));
  }
  
  window.addEventListener('DOMContentLoaded', (event) => {
  var banner = $("#Banner");
  var divs = $$("#Banner>div");
  var total = divs.length;
  var ease  = Power1.easeInOut;
  var boxes = [];
  
  for (var i = 0; i < total; i++) {
      
    var div = divs[i];
    
    TweenLite.set(div, { x: 0 });
     
    boxes[i] = {
      transform: div._gsTransform,
      x: div.offsetLeft,
      y: div.offsetTop,
      div    
    };
  } 
  
  banner.addEventListener("mouseenter", layout);
  banner.addEventListener("mouseleave", layout);
  
  function layout() {
  
    banner.classList.toggle("inverse");  
    
    for (var i = 0; i < total; i++) {
      
      var box = boxes[i];
          
      var lastX = box.x;
      var lastY = box.y;   
      
      box.x = box.div.offsetLeft;
      box.y = box.div.offsetTop;
      
      if (lastX === box.x && lastY === box.y) continue;
      
      var x = box.transform.x + lastX - box.x;
      var y = box.transform.y + lastY - box.y;  
      
      TweenLite.fromTo(box.div, 0.5, { x, y }, { x: 0, y: 0, ease });    
    } 
  }
  
  });