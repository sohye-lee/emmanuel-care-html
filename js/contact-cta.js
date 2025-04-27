// HEADER
class MyContactCta extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="contact-cta">
                <div class="ec-container">
                    <div class="left-content">
                        <div class="ec-title">
                            <img src="/images/icons/icon-heart.svg" alt="heart icon" aria-hidden="true">
                            <h2 class="text-black">
                                Let’s Connect - Your Loved One’s Care Starts Here
                            </h2>
                        </div>
                        <p class="description">
                            At Emmanuel Care, we’re more than just a senior day care—we’re a community dedicated to making a positive impact on the lives of your loved ones. Reach out today, and let’s discuss how we can support your family and provide the compassionate care your
                            loved one deserves. We’re here for you every step of the way!
                        </p>
                        <p class="h4">
                            Quick Connect: (443) 828-7777
                        </p>
                    </div>
                    <div class="right-form">
                        <form>
                            <input placeholder="Your Name" name="name" id="name">
                            <input placeholder="Email" name="email" id="email">
                            <input placeholder="Phone (optional)" name="phone" id="phone">
                            <textarea placeholder="Message or Inquiries to Us" rows="5" name="message" id="message"></textarea>
                            <div>
                                <button class="button secondary-dark" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define("my-contact-cta", MyContactCta);
