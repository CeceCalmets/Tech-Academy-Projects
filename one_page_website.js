<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>One Page Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        nav {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
        }
        nav a {
            text-decoration: none;
            color: white;
            padding: 14px 20px;
        }
        nav a:hover {
            background-color: #ddd;
            color: black;
        }
        h1 {
            text-align: center;
            margin-top: 50px;
        }
        p {
            text-align: center;
            margin: 20px;
        }
    
        form {
            text-align: center;
            margin: 20px;
        }
        footer {
            text-align: center;
            margin: 20px;
        }
        iframe {
            display: block;
            margin: auto;
            margin-top: 20px;
            text-align: center;
        }


        .row > .column {
  padding: 0 8px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Create four equal columns that floats next to eachother */
.column {
  float: left;
  width: 25%;
  padding: 5px;
}

/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

/* The Close Button */
.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

/* Hide the slides by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Caption text */
.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

img.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
    </style>
  </head>
  <body>
    <nav>
      <a href="/Home/">Home</a>
      <a href="/Resume/">Resume</a>
      <a href="/Aboout/">About</a>
      <a href="/Contact/">Contact</a>
      <a href="/Profile/">Profile</a>
      <a href="/Other/">Other</a>
    </nav>
  </br>
    <H1>One Page Website</H1>
    <p>I possesses a deep understanding of the intricacies of the internet, 
      including programming languages, web frameworks, and databases. I have a 
      grasp of how to design, build, and maintain websites, applications, 
      and mobile apps, using various technologies such as HTML, 
      CSS, JavaScript, and server-side languages like PHP, Ruby, and Python. 
      I also understand how to ensure the security, scalability, and performance 
      of digital products, as well as how to troubleshoot and debug issues that may 
      arise. A good web developer is not only skilled in writing clean and efficient 
      code, but also has a keen eye for user experience, visual design, 
      and interaction design.</p>
  </br>

    <!-- Images used to open the lightbox -->
<div class="row">
  <div class="column">
    <img class="naturePicture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg" onclick="openModal();currentSlide(1)" class="hover-shadow" style="width: 85%">
  </div>
  <div class="column">
    <img class="snowPicture" src="https://hips.hearstapps.com/clv.h-cdn.co/assets/16/49/2048x1365/gettyimages-492392636-1.jpg?resize=980:*" onclick="openModal();currentSlide(2)" class="hover-shadow" style="width: 85%">
  </div>
  <div class="column">
    <img class="mountainPiture" src="https://media.istockphoto.com/id/1672317574/photo/ama-dablam-mountain-peak.webp?b=1&s=170667a&w=0&k=20&c=Ea8yDEHpUemrRuMZUKGPDBE11YTWVksIupMN8FkEBf8=" onclick="openModal();currentSlide(3)" class="hover-shadow" style="width: 85%">
  </div>
 
</div>

<!-- The Modal/Lightbox -->
<div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">

    <div class="mySlides">
      <div class="numbertext">1 / 3</div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">2 / 3</div>
      <img src="https://hips.hearstapps.com/clv.h-cdn.co/assets/16/49/2048x1365/gettyimages-492392636-1.jpg?resize=980:*" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">3 / 3</div>
      <img src="https://media.istockphoto.com/id/1672317574/photo/ama-dablam-mountain-peak.webp?b=1&s=170667a&w=0&k=20&c=Ea8yDEHpUemrRuMZUKGPDBE11YTWVksIupMN8FkEBf8=" style="width:100%">
    </div>

    

    <!-- Next/previous controls -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <!-- Caption text -->
    <div class="caption-container">
      <p id="caption"></p>
    </div>

    <!-- Thumbnail image controls -->
    <div class="column">
      <img class="demo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg" onclick="currentSlide(1)" alt="Nature" style="width: 50%";>
    </div>

    <div class="column">
      <img class="demo" src="https://hips.hearstapps.com/clv.h-cdn.co/assets/16/49/2048x1365/gettyimages-492392636-1.jpg?resize=980:*" onclick="currentSlide(2)" alt="Snow" style="width: 50%">
    </div>

    <div class="column">
      <img class="demo" src="https://media.istockphoto.com/id/1672317574/photo/ama-dablam-mountain-peak.webp?b=1&s=170667a&w=0&k=20&c=Ea8yDEHpUemrRuMZUKGPDBE11YTWVksIupMN8FkEBf8=" onclick="currentSlide(3)" alt="Mountains"style="width: 50%">
    </div>

  
  </div>
</div>

  </br>

    <p>Contact me</p> 
    <form action="/action_page.php">
      <label for="fname">First Name:
      </label>
      <br>
      <input type="text" id="fname" name="fname" value="Bob">
        <br>
      <label for="iname">Last Name:
      </label>
        <br>
      <input type="text" id="lname" name="lname" value="Smith">
        <br>
      <label for="phone">Enter your phone number:</label>
      <br>
      <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" 
        required>
        <br><br>
        <input type="submit" value="Submit">
      </form>
    </br>
    <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="200"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
    </iframe>
    <footer>
        <p>Author: Hege Refsnes
    <br>
        <a href="clementine.calmets@my-aolcc.com">
    clementine.calmets@my-aolcc.com
        </a>
        </p>
    </footer>

    <script>
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
</script>

  </body>
</html>
