import '../styles/styles.css' // This adds in our CSS //
import 'lazysizes' // Lazy loading packaging import after 'npm install lazysizes'//
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

// Create an Object for our imported js //
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

let mobileMenu = new MobileMenu();
let modal

// This will load in the Modal js only when clicked so it doesnt auto load //
document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault()
      if (typeof modal == "undefined") {
        import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
          modal = new x.default()
          setTimeout(() => modal.openTheModal(), 20)
        }).catch(() => console.log("There was a problem."))
      } else {
        modal.openTheModal()
      }
    })
  })

// alert("Hello, this is just a test!!!!!!!!") // Test alert for the initial configuration

if (module.hot) {
    module.hot.accept()
}