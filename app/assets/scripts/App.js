import '../styles/styles.css' // This adds in our CSS //
import MobileMenu from './modules/MobileMenu'

let mobileMenu = new MobileMenu();

// alert("Hello, this is just a test!!!!!!!!") // Test alert for the initial configuration

if (module.hot) {
    module.hot.accept()
}