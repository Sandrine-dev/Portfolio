//Navigation
    function myFunction() {
        var nav = document.getElementById("MyTopnav");
        if (nav.className === "topnav") {
        nav.className += " responsive";
        } else {
        nav.className = "topnav";
        }
    };

    window.onscroll = function() {fixed()};
    var navbar = document.getElementById("MyTopnav");
    var sticky = navbar.offsetTop;

    function fixed(){
        if( window.pageYOffset >= sticky) {
            navbar.classList.add("fixNavigation");
        } else {
            navbar.classList.remove("fixNavigation");
        }
    };

//Animation
const ratio = .3;

const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
};

const handleIntersect = function(entries, observer){
  entries.forEach(function (entry){
    if(entry.intersectionRatio > ratio){
      console.log('visible');
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    } else{
      //console.log('invisible');
    }
    
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r){
  observer.observe(r);
})

//Skills typing

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #00BCD4}";
    document.body.appendChild(css);
};