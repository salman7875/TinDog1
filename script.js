const navAbout = document.querySelector('.about');
const navPrice = document.querySelector('.pricing');
const navContact = document.querySelector('.contact');

const sectionAbout = document.querySelector('#title');
const sectionPrice = document.querySelector('#pricing')
const sectionContact = document.querySelector('#social-media');

// Scroll into View Function

// navAbout.addEventListener('click', () => {
//     sectionAbout.scrollIntoView({ behavior: "smooth" })
// });

// setTimeout(() => {
//     sectionAbout.focus()
// }, 1000);

// navPrice.addEventListener('click', () => {
//     console.log(sectionPrice.scrollIntoView({ behavior: "smooth" }));

// });


navContact.addEventListener('click', () => {
    sectionContact.scrollIntoView({ behavior: "smooth" })
});
