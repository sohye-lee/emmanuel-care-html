// HEADER
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <div class="header-top" id="header-top">
                <div class="ec-container d-flex justify-content-between">
                    <a href="tel:+14438287777" class="text-white d-flex align-items-center gap-3"><img src="/images/icons/icon-phone.svg" alt="phone icon" class="mr-2"> <span>Need help or have questions? Call us at (443) 828-7777</span></a>
                    <div class="top-right">
                        <div class="social-links">
                            <a href="" class="social-facebook"><img src="/images/icons/icon-facebook.svg" alt="Facebook icon" ></a>
                            <a href="" class="social-instagram"><img src="/images/icons/icon-instagram.svg" alt="instagram icon" ></a>
                            <a href="" class="social-youtube"><img src="/images/icons/icon-youtube.svg" alt="youtube icon" ></a>
                        </div>
                        <a href="" class="text-white">한국어</a>
                    </div>
                </div>
            </div>
            <div class="header-main" id="header-main">
                <div class="ec-container header-wrapper">
                    <a href="/" class="logo">
                        <img src="/images/logo-color.svg" alt="Emmanuel Care logo" >
                    </a>
                    <nav class="navigation">
                        <ul>
                            <li class="nav-item"><a href="/about">Why Us</a></li>
                            <li class="nav-item"><a href="/services">Services</a></li>
                            <li class="nav-item"><a href="/blog">Blog</a></li>
                            <li class="nav-item button secondary-dark"><a href="/contact">Contact Us</a></li>
                            <li class="nav-item button secondary-dark"><a href="tel:+14438287777">+1 (443) 828-7777</a></li>
                        </ul>
                    </nav>
                    <div id="mobile-nav" class="mobile-nav">
                        <img src="/images/icons/icon-menu.svg" alt="menu" aria-label="open mobile navigation" class="open-icon" id="mobile-open-button">
                        <div id="mobile-navigation-menu" class="mobile-navigation-wrapper">
                            <div class="mobile-nav-close" id="mobile-close-button">
                                <img src="/images/icons/icon-close.svg" alt="close" aria-label="close mobile navigation" class="close-icon" >
                            </div>
                            <nav class="mobile-navigation">
                                <ul>
                                    <li class="nav-item"><a href="/about">Why Us</a></li>
                                    <li class="nav-item"><a href="/services">Services</a></li>
                                    <li class="nav-item"><a href="/blog">Life at Emmanuel</a></li>
                                    <li class="nav-item button secondary-dark"><a href="/contact">Contact Us</a></li>
                                </ul>
                                <div class="social-links">
                                    <a href="" class="social-facebook"><img src="/images/icons/icon-facebook-dark.svg" alt="Facebook icon" ></a>
                                    <a href="" class="social-instagram"><img src="/images/icons/icon-instagram-dark.svg" alt="instagram icon" ></a>
                                    <a href="" class="social-youtube"><img src="/images/icons/icon-youtube-dark.svg" alt="youtube icon" ></a>
                                    <a href="/home/kr" class="language">한국어</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        `;
  }
}

customElements.define("my-header", MyHeader);