import '../styles/styles.css' // This adds in our CSS //
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

// Create an Object for our imported js //
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

let mobileMenu = new MobileMenu();

// alert("Hello, this is just a test!!!!!!!!") // Test alert for the initial configuration

if (module.hot) {
    module.hot.accept()
}