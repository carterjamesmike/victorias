// components.js
const navbar = `
<nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
        <a href="/" class="text-white text-xl font-bold"><img class="h-[100px]" src="/assets/images/Heading-5.png" alt=""></a>
        
        <ul class="flex space-x-4">
            <li><a href="/" class="text-white hover:text-gray-300">Home</a></li>
            <li><a href="/about.html" class="text-white hover:text-gray-300">About</a></li>
            <li><a href="/services.html" class="text-white hover:text-gray-300">Services</a></li>
            <li><a href="/blog.html" class="text-white hover:text-gray-300">Blog</a></li>
            <li><a href="/contact.html" class="text-white hover:text-gray-300">Contact</a></li>
        </ul>
    </div>
</nav>
`;

const footer = `
<footer class="bg-gray-800 text-white p-4 mt-8">
    <div class="container mx-auto text-center">
        <p>&copy; 2024 Law Firm Name. All rights reserved.</p>
        <div class="mt-2">
            <a href="/privacy-policy.html" class="hover:text-gray-300">Privacy Policy</a> | 
            <a href="/terms-of-service.html" class="hover:text-gray-300">Terms of Service</a>
        </div>
    </div>
</footer>
`;

function loadComponents() {
    const navbarContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');

    if (navbarContainer) {
        navbarContainer.innerHTML = navbar;
    }

    if (footerContainer) {
        footerContainer.innerHTML = footer;
    }
}

document.addEventListener('DOMContentLoaded', loadComponents);