// HEADER
class MyServiceSidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sidebar">
                <a href="/services" class="sidebar-item">
                    <div class="title">
                        All Services
                    </div> 
                    <div class="icon">
                        <img src="/images/icons/icon-chevron-right.svg" alt="Chevron right icon" aria-hidden="true">
                    </div>
                </a>
                <a href="/services/nursing-care.html" class="sidebar-item ">
                    <div class="title">
                        Nursing Care Services
                    </div> 
                    <div class="icon">
                        <img src="/images/icons/icon-chevron-right.svg" alt="Chevron right icon" aria-hidden="true">
                    </div>
                </a>
                <a href="/services/dining.html" class="sidebar-item">
                    <div class="title">
                        Dining Services
                    </div> 
                    <div class="icon">
                        <img src="/images/icons/icon-chevron-right.svg" alt="Chevron right icon" aria-hidden="true">
                    </div>
                </a>
                <a href="/services/social-work.html" class="sidebar-item">
                    <div class="title">
                        Social Work Services
                    </div> 
                    <div class="icon">
                        <img src="/images/icons/icon-chevron-right.svg" alt="Chevron right icon" aria-hidden="true">
                    </div>
                </a>
                <a href="/services/activity-programs.html" class="sidebar-item">
                    <div class="title">
                        Activity Programs
                    </div> 
                    <div class="icon">
                        <img src="/images/icons/icon-chevron-right.svg" alt="Chevron right icon" aria-hidden="true">
                    </div>
                </a>
                <a href="/services/transportation.html" class="sidebar-item">
                    <div class="title">
                        Transportation Services
                    </div> 
                    <div class="icon">
                        <img src="/images/icons/icon-chevron-right.svg" alt="Chevron right icon" aria-hidden="true">
                    </div>
                </a>
                <a href="/services/physical-therapy.html" class="sidebar-item">
                    <div class="title">
                        Physical Therapy
                    </div> 
                    <div class="icon">
                        <img src="/images/icons/icon-chevron-right.svg" alt="Chevron right icon" aria-hidden="true">
                    </div>
                </a>
            </div>
        `
    }
}

customElements.define('my-service-sidebar', MyServiceSidebar);
