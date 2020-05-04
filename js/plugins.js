
    var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

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
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
 var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      loop:true,
      // grabCursor: true,
      // slidesPerView: 3,
      spaceBetween: 267,
      freeMode: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 700,
        modifier: 1,
        freeMode: true,
        slideShadows : true,
      },
            pagination: {
        el: '.swiper-pagination',
        clickable: true,
           type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

 $(document).ready(function(){

  

  $(".txtb").on("keyup",function(e){
        //13  means enter button
        if(e.keyCode == 13 && $(".txtb").val() != "")
        {
          var task = $("<div class='task'></div>").text($(".txtb").val());
          var del = $("<i class='fas fa-trash-alt'></i>").on("click",function(){
            $(".task").hide();
          });

          var check = $("<i class='fas fa-thumbs-up'></i>").on("click",function(){
            var p = $(this).parent();
            p.fadeOut(function(){
              $(".comp").append(p);
              p.fadeIn();
            });
            $(this).remove();
          });
                    var img = $("<img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhASEg8QEBASEA8QEhAQDxAQEhAQFREYFhURFxYYHSggGB0lGxYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGisdHR0rLCstKy0tKy0rLSsrLS0rKy0rKysrNystKystKys3Ky0tNy03LS0tKysrLSsrLSsrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABQIEBgEDB//EADYQAQACAAQCBwQJBQEAAAAAAAABAgMEBREhURIxQWFxcrEiNIGREzNCUoKhwdHhFBUyYvDC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAdEQEBAQEBAAMBAQAAAAAAAAAAAQIRMQMhQVES/9oADAMBAAIRAxEAPwD9EAelkAAAAAAAAAAAAD2tZtPCJnwjdsUyGLf7E/GYj1c67xrDd/teL0eqsfiaRLKcAHXAAAAAAAAAAAAAAAAAAAABnhYNsa21azM9yhkdLnEiLX3iOyvbPjyV8PDjDrtEREcoZ3fPFTKRgaPM/wCdtu6vGfm3sLTsLD+zv5uP8NsRdWq5GNaRSOERHhGzIEupGtY9q2ikcKzG8zznjw3SnU4uHGLTa0bxylFz+nTl/arvav51/hrjU8RZWgA0SAAAAAAAAAAAAAAAAAAK2k5Lh9JaPLH/AKTsrhfT5itec8fDtdNEbQz3r8VmPQGSwAAAAAEXVMh9F7dI9ntjl3+Ca6uY3hzeewP6bMzXs648Ja4136RqPgA0SAAAAAAAAAAAAAAAA3NI9+jwt6OgQNH9+jy2X2O/V58AEKAAAAAAETXPeq+T9ZW0XXfr6eWfVWPXNeJoDdmAAAAAAAAAAAAAAAA3tGjfO/ht+i8haJ75Pkn1hdY79aZ8AEOgAAAAACLrv19PLPqtIuu/X08s+qsep14mgN0AAAAAAAAAAAAAAAAN/RPfJ8s+sLrXyG05Km0fZhsMNXtaQAS6AAAAAAIuu/X08s+q01tQw62yt5mImYrO07cY5fmrN5XK5wBuzAAAAAAAAAAAAAAAAdDpVulkK928fnLbTNDxelg2r2xO/wAJU3n160ngA46AAAAAANXVLdHIX8Ij5zDaTtbxOjlor22t+Uf9DufXKiAPQzAAAAAAAAAAAAAAAAfXKY04GYrbfbjG/h2unck6jKX+ky1J51j57Mvki8vqAzUAAAAAAOaz2POYzNp34RMxXwiV/N4v0OWtblE7ePY5hp8c/U6egNUAAAAAAAAAAAAAAAACvomY9maTPHrr4dsJD2l5w7xMTtMcYlOp2Oy8dWPllMWcbLVtMbTMPqwaAAAAAPLztWZ5RIJWt4/CKR5p/SEl7e84lpmZ3meMy8b5nIzt6AKcAAAAAAAAAAAAAAAAAOsHTZOOjlKeSvo+zykdGsRyiIevM1AAAAGGNPRwbeWfRm+eZ93v5begOWjqeg9LIAAAAAAAAAAAAAAAAAAdDpmBGFlK8I3tHSmfHjCDgYU4+NWsds7eEdsuopWKViI6ojaPBn8l/FZegMlgAAAAAJOuYMRWt9uO/Rnv4bx6JLo9QwP6jKzHbHGPGHONsX6RoAWkAAAAAAAAAAAAGWHh2xbbViZnuUcvpE243nburxn5uWyO8TIjeW7l9MxMbrjoR/t1/JZwMrTLx7NYjv65+b7M78n8VMtTKafXK234zbbbef0htgi3qgBwAAAAAAE7M6TXEmZrM1meO3XH8KI7Lwc5j5HEwOuu8c68YarrWtmMjh4/XXaeccJ/lc+T+puXOChmNJvT/GYtHLqt+zQvWaW2mJieUxs0llTx4A64AAAADLDw5xb7ViZnlCtlNJiOOJO8/djq+M9qbqR2RLwcC2PbatZn0j4qmW0iK8bzv/rHCPmpUpFK7RERHKODJnd2qkY4eHGFXasREcojZkCFAAAAAAAAAAAAAAAADDFwa41drViY72YCTmdI7aT+G37puNgWwLbWrMek+EuoY3pF67TETHKeK5uxz/LlRYzWkxbjSejP3Z6vhySsbBtg32tExPq0mpUWcYAK+3HTZXLVy2HtWPGe2X2B5moAAAAAAAAAAAAAAAAAAAAAAAA+OZy1czh7T8J7Ynm+wCL/AGe/36/KXi2K/wB1zkAEugAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z' class='img_1'>");

          task.append(del,check);
           task.prepend(img);
          $(".notcomp").append(task);
            //to clear the input
          $(".txtb").val("");
        }
      });
 });