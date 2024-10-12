class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer">
            <div class="ec-container footer-wrapper">
                <div class="footer-col-1">
                    <a href="/" class="logo">
                        <img src="/images/logo-white.svg" alt="Emmanuel Care logo" >
                    </a>
                    <span>Emmanuel Care was founded by a Registered Nurse (RN) with personal experience in caring for a loved one, so we understand the challenges families face when seeking quality senior care. As a locally operated center, we are able to provide exceptional, personalized care at an affordable price, without the overhead costs of larger franchised facilities.</span>

                </div>
                <div class="footer-col-2">
                    <div class="widget-title h3 text-white">
                        Contact Us
                    </div>
                    <span>8174 Lark Brown Road, Suite 201<br>Elkridge, MD 21075</span>
                    <span>Mon. - Fri. 9:00 AM - 5:00 PM</span>
                    <div>
                        <a href="tel:+14438287777">P. (443) 828-7777</a><br>
                        <a href="tel:+14438287777">F. (443) 828-7777</a>
                    </div>
                    <a href="mailto:info@emmanuel.care">info@emmanuel.care</a>

                </div>
                <div class="footer-col-3">
                    <div class="widget-title h3 text-white"> 
                        Quick Links
                    </div>
                    <a href="/how-to-join#faqs">FAQs</a>
                    <a href="/how-to-join#how-to-pay">How to Pay</a>
                    <a href="/blog">Life at Emmanuel</a>
                    <a href="/services">Services</a>
                </div>
                <div class="footer-col-4">
                    <div class="widget-title h3 text-white"> 
                        Subscribe to Our Newsletter
                    </div>
                    <form>
                        <input placeholder="email address" name="email" id="email" type="text">
                        <div>

                            <button class="button white text-primary-dark" type="submit">Subscribe</button>
                        </div>
                    </form>
                                    <div class="social-links"> 
                        <a href="" class="social-facebook"><img src="/images/icons/icon-facebook.svg" alt="Facebook icon" ></a>
                        <a href="" class="social-instagram"><img src="/images/icons/icon-instagram.svg" alt="instagram icon" ></a>
                        <a href="" class="social-youtube"><img src="/images/icons/icon-youtube.svg" alt="youtube icon" ></a>
                    </div>
                </div>
            </div>
            <div class="ec-container bottom">
                <div class="bottom-bar">
                    <div class="copyright">© 2024 Emmanuel Care. All rights reserved. </div>
                    <div class="additional-links">
                        <a href="">Privacy Policy</a>
                        <div>Designed by <a href="https://websiteinnovator.com" target="_blank">Website Innovator</a></div>
                    </div>
                </div>
                <div class="bottom-bar">
                    This institution is an equal opportunity provider. In accordance with Federal law and U.S. Department of Agriculture (USDA) civil rights regulations and policies, this institution is prohibited from discriminating on the basis of race, national origin, sex (including gender identity and sexual orientation), age, disability, and reprisal or retaliation for prior civil rights activity.
                </div>
            </div>
        </footer>
    `
    }
}

customElements.define('my-footer', MyFooter);
