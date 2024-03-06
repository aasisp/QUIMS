// Slide coursel handling...
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  slides[slideIndex].style.display = "block";
}

function moveSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

// Automatic slideshow
let slideInterval = setInterval(function() {
  slideIndex++;
  showSlide(slideIndex);
}, 3000); // Change 3000 to set the time interval (in milliseconds)

// Pause the slideshow on mouseover
document.querySelector('.slider').addEventListener('mouseover', function() {
  clearInterval(slideInterval);
});

// Resume the slideshow on mouseout
document.querySelector('.slider').addEventListener('mouseout', function() {
  slideInterval = setInterval(function() {
    slideIndex++;
    showSlide(slideIndex);
  }, 3000); // Change 3000 to set the time interval (in milliseconds)
});


// Form validation...
const passcodeEle = document.querySelector("input[type='password']");

const validateLogin = (event) => {
    const userId = document.querySelector("input[type='text']").value;
    const passcode = passcodeEle.value;
    const errorEle = document.querySelector(".error-msg");
    const errorMsg = errorEle.querySelector("span");

    if(userId == '' && passcode == '') {
        errorEle.style.display ="flex";
        errorMsg.textContent = "Please enter your Qid and passcode."
        event.preventDefault();
        return false;
    }

    if(userId == '') {
        errorEle.style.display ="flex";
        errorMsg.textContent = "Please enter your Qid.";
        return false;
    }

    if(passcode == '') {
        errorEle.style.display ="flex";
        errorMsg.textContent = "Please enter your passcode.";
        return false;
    }

    return true;
}

document.querySelector("button[type='submit']").addEventListener('click', validateLogin);

// Passcode toggle...
const toggleIcon = document.querySelector(".toggle-passcode");
const togglePasscode = () => {
    if(passcodeEle.type == "password") {
        passcodeEle.type = "text";
        toggleIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#812972" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                                </svg>`;
    }else {
        passcodeEle.type = "password";
        toggleIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#812972" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                </svg>`;
    }
}
toggleIcon.addEventListener("click", togglePasscode);

// Greeting message...
const greet = () => {
    const greetEle = document.querySelector("#greet-msg");
    const currentTime = new Date().getHours();
    
    if(currentTime > 12 && currentTime <= 17) {
        greetEle.textContent = "Good Afternoon";
    }else if(currentTime > 17) {
        greetEle.textContent = "Good Evening";
    }else {
        greetEle.textContent = "Good Morning";
    }
}
greet();

const getPreloader = document.getElementById("preloader");
const handlePreloader = () => {
    getPreloader.style.display = "none";
}

setTimeout(handlePreloader, 3000);