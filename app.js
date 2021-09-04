const header = document.querySelector('.header-section');
const dropdown = document.querySelector('.dropdown');
const topfiller = document.querySelector('.margin-filler');
const menuButton = document.querySelector('.nav-menu-icon');
const priceSwiper = document.querySelector('.priceplan-container');
const priceSwiperWrapper = document.querySelector('.priceplan-swiper');

//nav bar sticky
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
    
})


//navbar dropdown
header.addEventListener('click', event => {
        
    if (dropdown.classList.contains('dropdown-collapsed')) {
        dropdown.classList.remove('dropdown-collapsed')
        dropdown.style.display = "none"
        header.style.boxShadow = ""
    
    } else if (!dropdown.classList.contains('dropdown-collapsed') && event.target === menuButton) {

        dropdown.classList.toggle('dropdown-collapsed', event.target.tagName == 'I' )
        header.style.boxShadow = "0 0 1rem grey"
        dropdown.style.display = "block"
    }

})


//get h1 element
const titleObject = document.getElementById('job-title');

//Declare array of specialist title you want to loops through
const jobsArray= ["Specialist","Barber", "Hairdresser", "Tatoo Artist", "Nail tech", "Beautician"]

let i = 0
let j = 0
let currentJobTitle = []
let isDeleting = false
let isEnd = false


function loop() {
    let isEnd = false
    titleObject.innerHTML = currentJobTitle.join('')
    
    if (i < jobsArray.length ) {
        
        
        if (!isDeleting && j <= jobsArray[i].length) {
            currentJobTitle.push(jobsArray[i][j])
            j++
            titleObject.innerHTML = currentJobTitle.join('')
            
        }

        if (isDeleting && j <= jobsArray[i].length) {
            currentJobTitle.pop(jobsArray[i][j])
            j--
            titleObject.innerHTML = currentJobTitle.join('')
    
        }

        if (j == jobsArray[i].length) {
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i == jobsArray.length) {
                i=0
            }
        }

    }
    const spedUp = Math.random() * (80 -50) + 50
    const normalSpeed = Math.random() * (200 -100)  + 100
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}

loop()




//swiper funtionality - testimonials

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: false,
    allowTouchMove: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



//Sign In Form Validation






//Features Button Collapsible Functionality (feature items) - TODO

const featureButtonsContainer = document.querySelector('.features-buttons')
const featuresButtonsArray = document.querySelectorAll('.btn-feature')
const featureIconContainersArray = document.querySelectorAll('.feature-icon-container')
const featureIconImageArray = document.querySelectorAll('.feature-icon')
const featureDescriptionArray = document.querySelectorAll('.feature-description')
const featureTitlesArray = document.querySelectorAll('.feature-title')
const featuresIphoneImage = document.querySelector('.features-image')


featuresButtonsArray.forEach( button => {


    button.addEventListener('click', event => {

        //button 1
        if (button.classList.contains('0') && !button.classList.contains('btn-feature-selected')) {
            
            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[0].classList.toggle('feature-description-open')
            featureTitlesArray[0].classList.toggle('feature-title-selected')
            featureIconContainersArray[0].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[0].classList.toggle('feature-icon-selected')
            featuresIphoneImage.setAttribute('src','/images/iphone-booking.png')

            //DESELECT

            //deselect others (background)
            featuresButtonsArray.forEach(item => {
                if (item !== featuresButtonsArray[0]) {
                    item.classList.remove('btn-feature-selected')
                }
            })

            featureTitlesArray.forEach(item => {
                if(item!== featureTitlesArray[0]) {
                    item.classList.remove('feature-title-selected')
                }
            })

            //deselect others (text)
            featureDescriptionArray.forEach(item => {
                if (item !== featureDescriptionArray[0]) {
                    item.classList.remove('feature-description-open')
                }
            })

            //deselect others (icon-container)
            featureIconContainersArray.forEach(item => {
                if (item !== featureIconContainersArray[0]) {
                    item.classList.remove('feature-icon-container-selected')
                }
            })

            //deselect others (icon)
            featureIconImageArray.forEach(item => {
                if (item !== featureIconImageArray[0]) {
                    item.classList.remove('feature-icon-selected')
                }
            })


    
        } else if (button.classList.contains('0') && button.classList.contains('btn-feature-selected')) {

            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[0].classList.toggle('feature-description-open')
            featureTitlesArray[0].classList.toggle('feature-title-selected')
            featureIconContainersArray[0].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[0].classList.toggle('feature-icon-selected')
        }
    
        //button 2
        if (button.classList.contains('1') && !button.classList.contains('btn-feature-selected')) {

            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[1].classList.toggle('feature-description-open')
            featureTitlesArray[1].classList.toggle('feature-title-selected')
            featureIconContainersArray[1].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[1].classList.toggle('feature-icon-selected')
            featuresIphoneImage.setAttribute('src','/images/iphone.svg')

                        //DESELECT

            //deselect others (background)
            featuresButtonsArray.forEach(item => {
                if (item !== featuresButtonsArray[1]) {
                    item.classList.remove('btn-feature-selected')
                }
            })

            featureTitlesArray.forEach(item => {
                if(item!== featureTitlesArray[1]) {
                    item.classList.remove('feature-title-selected')
                }
            })

            //deselect others (text)
            featureDescriptionArray.forEach(item => {
                if (item !== featureDescriptionArray[1]) {
                    item.classList.remove('feature-description-open')
                }
            })

            //deselect others (icon-container)
            featureIconContainersArray.forEach(item => {
                if (item !== featureIconContainersArray[1]) {
                    item.classList.remove('feature-icon-container-selected')
                }
            })

            //deselect others (icon)
            featureIconImageArray.forEach(item => {
                if (item !== featureIconImageArray[1]) {
                    item.classList.remove('feature-icon-selected')
                }
            })

        } else if (button.classList.contains('1') && button.classList.contains('btn-feature-selected')) {

            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[1].classList.toggle('feature-description-open')
            featureTitlesArray[1].classList.toggle('feature-title-selected')
            featureIconContainersArray[1].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[1].classList.toggle('feature-icon-selected')
        }

        //button 3
        if (button.classList.contains('2') && !button.classList.contains('btn-feature-selected')) {

            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[2].classList.toggle('feature-description-open')
            featureTitlesArray[2].classList.toggle('feature-title-selected')
            featureIconContainersArray[2].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[2].classList.toggle('feature-icon-selected')
            featuresIphoneImage.setAttribute('src','/images/iphone-connect.png')

                        //DESELECT

            //deselect others (background)
            featuresButtonsArray.forEach(item => {
                if (item !== featuresButtonsArray[2]) {
                    item.classList.remove('btn-feature-selected')
                }
            })

            featureTitlesArray.forEach(item => {
                if(item!== featureTitlesArray[2]) {
                    item.classList.remove('feature-title-selected')
                }
            })

            //deselect others (text)
            featureDescriptionArray.forEach(item => {
                if (item !== featureDescriptionArray[2]) {
                    item.classList.remove('feature-description-open')
                }
            })

            //deselect others (icon-container)
            featureIconContainersArray.forEach(item => {
                if (item !== featureIconContainersArray[2]) {
                    item.classList.remove('feature-icon-container-selected')
                }
            })

            //deselect others (icon)
            featureIconImageArray.forEach(item => {
                if (item !== featureIconImageArray[2]) {
                    item.classList.remove('feature-icon-selected')
                }
            })
            
    
        } else if (button.classList.contains('2') && button.classList.contains('btn-feature-selected')) {

            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[2].classList.toggle('feature-description-open')
            featureTitlesArray[2].classList.toggle('feature-title-selected')
            featureIconContainersArray[2].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[2].classList.toggle('feature-icon-selected')
            
        }
    
        //button 4
        if (button.classList.contains('3') && !button.classList.contains('btn-feature-selected')) {
    
            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[3].classList.toggle('feature-description-open')
            featureTitlesArray[3].classList.toggle('feature-title-selected')
            featureIconContainersArray[3].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[3].classList.toggle('feature-icon-selected')
            featuresIphoneImage.setAttribute('src','/images/iphone.svg')

            
            //DESELECT

            //deselect others (background)
            featuresButtonsArray.forEach(item => {
                if (item !== featuresButtonsArray[3]) {
                    item.classList.remove('btn-feature-selected')
                }
            })

            featureTitlesArray.forEach(item => {
                if(item!== featureTitlesArray[3]) {
                    item.classList.remove('feature-title-selected')
                }
            })

            //deselect others (text)
            featureDescriptionArray.forEach(item => {
                if (item !== featureDescriptionArray[3]) {
                    item.classList.remove('feature-description-open')
                }
            })

            //deselect others (icon-container)
            featureIconContainersArray.forEach(item => {
                if (item !== featureIconContainersArray[3]) {
                    item.classList.remove('feature-icon-container-selected')
                }
            })

            //deselect others (icon)
            featureIconImageArray.forEach(item => {
                if (item !== featureIconImageArray[3]) {
                    item.classList.remove('feature-icon-selected')
                }
            })
    
        } else if (button.classList.contains('3') && button.classList.contains('btn-feature-selected')) {

            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[3].classList.toggle('feature-description-open')
            featureTitlesArray[3].classList.toggle('feature-title-selected')
            featureIconContainersArray[3].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[3].classList.toggle('feature-icon-selected')
        }

        //button 5
        if (button.classList.contains('4') && !button.classList.contains('btn-feature-selected')) {
    
            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[4].classList.toggle('feature-description-open')
            featureTitlesArray[4].classList.toggle('feature-title-selected')
            featureIconContainersArray[4].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[4].classList.toggle('feature-icon-selected')
            featuresIphoneImage.setAttribute('src','/images/iphone-build-following.png')

        
            //DESELECT

            //deselect others (background)
            featuresButtonsArray.forEach(item => {
                if (item !== featuresButtonsArray[4]) {
                    item.classList.remove('btn-feature-selected')
                }
            })

            featureTitlesArray.forEach(item => {
                if(item!== featureTitlesArray[4]) {
                    item.classList.remove('feature-title-selected')
                }
            })

            //deselect others (text)
            featureDescriptionArray.forEach(item => {
                if (item !== featureDescriptionArray[4]) {
                    item.classList.remove('feature-description-open')
                }
            })

            //deselect others (icon-container)
            featureIconContainersArray.forEach(item => {
                if (item !== featureIconContainersArray[4]) {
                    item.classList.remove('feature-icon-container-selected')
                }
            })

            //deselect others (icon)
            featureIconImageArray.forEach(item => {
                if (item !== featureIconImageArray[4]) {
                    item.classList.remove('feature-icon-selected')
                }
            })

        } else if (button.classList.contains('4') && button.classList.contains('btn-feature-selected')) {

            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[4].classList.toggle('feature-description-open')
            featureTitlesArray[4].classList.toggle('feature-title-selected')
            featureIconContainersArray[4].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[4].classList.toggle('feature-icon-selected')
        }


    })

})





/* HOW TO BUTTON FUNCTIONALITY */ 

const howToButtonsArray = document.querySelectorAll('.btn-howto')
const howToIconsArray = document.querySelectorAll('.howto-icon')
const howToTextArray = document.querySelectorAll('.howto-text')
const howToImage = document.querySelector('.howto-image')


howToButtonsArray.forEach( button => {

    button.addEventListener('click', event => {

        if (button.classList.contains('0') && !button.classList.contains('btn-howto-selected')) {
            
            //change background
            button.classList.toggle('btn-howto-selected')
            //change text
            howToTextArray[0].classList.toggle('howto-text-selected')
            //change icons
            howToIconsArray[0].classList.toggle('howto-icon-selected')
            //change how to image
            howToImage.setAttribute('src','/images/howto-image-1.png')

            //deselect others (background)
            howToButtonsArray.forEach(item => {
                if (item !== button) {
                    item.classList.remove('btn-howto-selected')
                }
            })

            //deselect others (text)
            howToTextArray.forEach(item => {
                if (item !== howToTextArray[0]) {
                    item.classList.remove('howto-text-selected')
                }
            })

            //deselect others (icon)
            howToIconsArray.forEach(item => {
                if (item !== howToIconsArray[0]) {
                    item.classList.remove('howto-icon-selected')
                }
            })


    
        } 
    
        if (button.classList.contains('1') && !button.classList.contains('btn-howto-selected')) {

            //change background
            button.classList.toggle('btn-howto-selected')
            //change text
            howToTextArray[1].classList.toggle('howto-text-selected')
            //change icons
            howToIconsArray[1].classList.toggle('howto-icon-selected')
    
            //change how to image
            howToImage.setAttribute('src','/images/howto-image-2.png')

            //deselect others (background)
            howToButtonsArray.forEach(item => {
                if (item !== button) {
                    item.classList.remove('btn-howto-selected')
                }
            })

            //deselect others (text)
            howToTextArray.forEach(item => {
                if (item !== howToTextArray[1]) {
                    item.classList.remove('howto-text-selected')
                }
            })

            //deselect others (icon)
            howToIconsArray.forEach(item => {
                if (item !== howToIconsArray[1]) {
                    item.classList.remove('howto-icon-selected')
                }
            })

        }

    
        if (button.classList.contains('2') && !button.classList.contains('btn-howto-selected')) {

            //change background
            button.classList.toggle('btn-howto-selected')
            //change text
            howToTextArray[2].classList.toggle('howto-text-selected')
            //change icons
            howToIconsArray[2].classList.toggle('howto-icon-selected')        
            
            //change how to image
            howToImage.setAttribute('src','/images/howto-image-3.png')


            //deselect others (background)
            howToButtonsArray.forEach(item => {
                if (item !== button) {
                    item.classList.remove('btn-howto-selected')
                }
            })

            //deselect others (text)
            howToTextArray.forEach(item => {
                if (item !== howToTextArray[2]) {
                    item.classList.remove('howto-text-selected')
                }
            })

            //deselect others (icon)
            howToIconsArray.forEach(item => {
                if (item !== howToIconsArray[2]) {
                    item.classList.remove('howto-icon-selected')
                }
            })
    
        }
    
        if (button.classList.contains('3') && !button.classList.contains('btn-howto-selected')) {
            
            //change background
            button.classList.toggle('btn-howto-selected')
            //change text
            howToTextArray[3].classList.toggle('howto-text-selected')
            //change icons
            howToIconsArray[3].classList.toggle('howto-icon-selected')

            //change how to image
            howToImage.setAttribute('src','/images/howto-image-4.png')

            //deselect others (background)
            howToButtonsArray.forEach(item => {
                if (item !== button) {
                    item.classList.remove('btn-howto-selected')
                }
            })

            //deselect others (text)
            howToTextArray.forEach(item => {
                if (item !== howToTextArray[3]) {
                    item.classList.remove('howto-text-selected')
                }
            })

            //deselect others (icon)
            howToIconsArray.forEach(item => {
                if (item !== howToIconsArray[3]) {
                    item.classList.remove('howto-icon-selected')
                }
            })
    
        }


        if (button.classList.contains('4') && !button.classList.contains('btn-howto-selected')) {
            
            //change background
            button.classList.toggle('btn-howto-selected')
            //change text
            howToTextArray[4].classList.toggle('howto-text-selected')
            //change icons
            howToIconsArray[4].classList.toggle('howto-icon-selected')

            //change how to image
            howToImage.setAttribute('src','/images/howto-image-5.png')

            //deselect others (background)
            howToButtonsArray.forEach(item => {
                if (item !== button) {
                    item.classList.remove('btn-howto-selected')
                }
            })

            //deselect others (text)
            howToTextArray.forEach(item => {
                if (item !== howToTextArray[4]) {
                    item.classList.remove('howto-text-selected')
                }
            })

            //deselect others (icon)
            howToIconsArray.forEach(item => {
                if (item !== howToIconsArray[4]) {
                    item.classList.remove('howto-icon-selected')
                }
            })
    

        }

    })

})



const faqButtonsArray = document.querySelectorAll('.btn-faq')
const faqSeperatorsArray = document.querySelectorAll('.faq-seperator')
const faqBodyArray = document.querySelectorAll('.btn-faq-body')
const faqIconsArray = document.querySelectorAll('.faq-icon')

faqButtonsArray.forEach(button => {

    button.addEventListener('click', event => {

        if (button.classList.contains(0)) {
            faqButtonsArray[0].classList.toggle('btn-faq-open')
            faqSeperatorsArray[0].classList.toggle('faq-sepeator-open')
            faqBodyArray[0].classList.toggle('btn-faq-body-open')
            faqIconsArray[0].classList.toggle('faq-icon-open')
        }

        if (button.classList.contains(1)) {
            faqButtonsArray[1].classList.toggle('btn-faq-open')
            faqSeperatorsArray[1].classList.toggle('faq-sepeator-open')
            faqBodyArray[1].classList.toggle('btn-faq-body-open')
            faqIconsArray[1].classList.toggle('faq-icon-open')
        }

        if (button.classList.contains(2)) {
            faqButtonsArray[2].classList.toggle('btn-faq-open')
            faqSeperatorsArray[2].classList.toggle('faq-sepeator-open')
            faqBodyArray[2].classList.toggle('btn-faq-body-open')
            faqIconsArray[2].classList.toggle('faq-icon-open')
        }

        if (button.classList.contains(3)) {
            faqButtonsArray[3].classList.toggle('btn-faq-open')
            faqSeperatorsArray[3].classList.toggle('faq-sepeator-open')
            faqBodyArray[3].classList.toggle('btn-faq-body-open')
            faqIconsArray[3].classList.toggle('faq-icon-open')
        }




    })

})


//subscription email validation
const emailForm = document.querySelector('.email-form');
const emailFormTextFieldContainer = document.querySelector('#mc-embedded-subscribe-form > div.textfield-container');
const emailFormTextField = document.querySelector('#mce-EMAIL');


emailFormTextField.addEventListener('keyup', event => {
    
    const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const userInput = emailFormTextField.value;

    if (!pattern.test(userInput)) {
        emailFormTextFieldContainer.style.boxShadow = "0 0 0.5rem rgba(255, 0, 11)";
    } else {
        emailFormTextFieldContainer.style.boxShadow = "0 0 0.75rem rgba(79, 229, 143)";
    }

    if (emailFormTextField.value === "") {
        emailFormTextFieldContainer.style.boxShadow = "0 0 1rem var(--primary)";
    }

})



function restoreTextFieldAura() {
    if (emailFormTextField.value === "") {
        emailFormTextFieldContainer.style.boxShadow = "0 0 1rem var(--primary)";
    }
}

emailForm.addEventListener('submit', () => {

    setTimeout( restoreTextFieldAura, 5000)

}) 





// Send us a message functionality
const contactForm = document.querySelector('#contact-form')
const contactFormRepsonse = document.querySelector('.contact-form-response')

contactForm.addEventListener('submit', event => {

    event.preventDefault()

// https://github.com/github/fetch
fetch("https://formsubmit.co/ajax/tjnyamatore@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: contactForm.name.value ,
        email: contactForm.email.value ,
        message: contactForm.message.value
    })
})
    .then(response => {
        response.json()
        if (response.ok) {
            contactFormRepsonse.style.display = "inline"
            contactFormRepsonse.style.color = "green"
            contactFormRepsonse.textContent = "Thank you, youre message has been sent"
        } else {
            contactFormRepsonse.style.display = "inline"
            contactFormRepsonse.style.color = "red"
            contactFormRepsonse.textContent = "Sorry, there was a problem. please use out email to the left."
        }
    })
    
    .then(data => console.log(data))
    
    .catch(error => console.log(error));

    contactFormRepsonse.style.color = "green"
    contactFormRepsonse.textContent = "Thank you"


})




