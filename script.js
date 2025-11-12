// --- Data Structure based on the Resume ---

const resumeData = {
    name: "YALADANDI DILIP KUMAR",
    objective: "Aspiring Web developer with solid understanding in web development and real-time applications. Developed and deployed multiple real-world projects, including chat apps, e-commerce pages, and games with proficiency in JAVA, HTML, CSS, JAVASCRIPT. Committed to producing maintainable and efficient code following industry best practices.",
    contact: {
        phone: "9391756518",
        email: "dk6166460@gmail.com",
        linkedin: "https://www.linkedin.com/in/dilip-yaladandi-993a402a2/",
        github: "https://github.com/dkyaladandi"
    },
    skills: [
        "JAVA (Proficient)", "HTML (Advanced)", "CSS (Advanced)", "JAVASCRIPT (Proficient)","REACT(Proficient)",
        "REST API's (basic)", "WEB SOCKETS/(SOCKET.IO)", "MYSQL", "GIT & GITHUB",
        "GITHUB PAGES", "VS CODE", "NETLIFY", "Debugging", "Communication Skills"
    ],
    projects: [
        {
            title: "REAL TIME CHAT APPLICATION",
            description: "Developed a multi-user chat platform with instant messaging using HTML, CSS, JavaScript, and WebSockets (Socket.io/Firebase). Enhanced user experience through responsive UI design, Optimized page load times to under 1.5 seconds.",
            github: "https://github.com/dkyaladandi/REAL-TIME-CHAT-APPLICATIONS.git"
        },
        {
            title: "A BASIC CALCULATOR",
            description: "Built a browser-based calculator supporting basic arithmetic operations with keyboard input support. Modularized JavaScript functions to reduce code by 10% deployed on GitHub Pages.",
            github: "https://github.com/dkyaladandi/CALCULATOR-USING-HTML-CSS-JAVASCRIPT.git"
        },
        {
            title: "AMAZON CLONE PAGE",
            description: "Engineered a mobile-optimized Amazon homepage clone with semantic HTML5 and modern CSS, decreasing page load time by 25% and exceeding industry standards for mobile-first design principles.",
            github: "https://github.com/dkyaladandi/AMAZON-CLONE.git"
        },
        {
            title: "ATM MACHINE USING OOPS CONCEPT",
            description: "Simulated core ATM operations (balance enquiry, withdrawals, PIN validation) in Java using OOP principles. Reduced code duplication and improved transaction handling per operation.",
            github: "https://github.com/dkyaladandi/Atm-machine.git"
        },
        {
            title: "A RECIPE APP USING MANGO DB API",
            description: "Built a dynamic Recipe Explorer App fetching 1,000+ recipes from TheMealDB API, with interactive popups displaying up to 20 ingredients and step-by-step instructions per recipe. Designed a responsive grid layout with polished UI.",
            github: "https://github.com/dkyaladandi/A-RECIPE-APP-USING-API-MEALDB-"
        },
        {
            title: "PERFORMING CRUD OPERATIONS USING REACT ACCESSING API",
            description: "This project is a React.js CRUD (Create, Read, Update, Delete) application that interacts with a RESTful API to manage user data. It demonstrates how to integrate a React frontend with an API to perform all data operations efficiently.",
            github: "https://github.com/dkyaladandi/PERFORMING-CRUD-OPERTIONS-ACCESSING-API-USING-REACT.git"
        },

    ]
};

// --- View/Panel Functions ---

const createPanel = (id, title, contentHTML) => `
    <section id="${id}" class="content-panel">
        <h2>${title}</h2>
        ${contentHTML}
    </section>
`;

const getHomeView = () => {
    // Note: Since I cannot include a real image, I'll use a placeholder.
    // Replace 'path/to/your/photo.jpg' with a real image path.
// In the script.js file within the dkyaladandi.github.io repository
const imagePlaceholder = 'Dp.jpeg'; 
// Or the relative path: const imagePlaceholder = './Dp.jpeg';
// Both will work now!

    const content = `
        <div class="home-panel">
            <div class="profile-info">
                <p>Hello, I'm</p>
                <h1>${resumeData.name}</h1>
                <h3>Aspiring Web Developer</h3>
                <p>${resumeData.objective.substring(0, 350)}</p>
                <a href="/projects" data-path="projects" class="submit-btn" style="margin-top: 1.5rem; display: inline-block;">View Projects</a>
            </div>
            <div class="profile-img-container">
                <img src="${imagePlaceholder}" alt="Profile Photo">
            </div>
        </div>
    `;
    return createPanel('home-panel', 'Welcome to My Portfolio', content);
};

const getAboutView = () => {
    const content = `
        <p>${resumeData.objective}</p>
        <h3>Education</h3>
        <ul>
            <li>**B. TECH (Electronics and Communication Engineering)** (2021-25) - GURU NANAK INSTITUTIONS AND TECHNICAL CAMPUS (7.5 GPA)</li>
            <li>**INTERMEDIATE** (2019-21) - SRI CHAITANYA KALASHALA (968/1000)</li>
            <li>**10th CLASS** (2018-19) - WORD AND DEED HIGH SCHOOL (10/10)</li>
        </ul>
    `;
    return createPanel('about-panel', 'About Me', content);
};

const getSkillsView = () => {
    const skillsList = resumeData.skills.map(skill => `<li class="skill-tag">${skill}</li>`).join('');
    const content = `
        <p>A comprehensive list of my technical and soft skills:</p>
        <ul class="skills-list">
            ${skillsList}
        </ul>
        <h3 style="margin-top: 2rem;">Deployment & Tools</h3>
        <p>Deployment: GITHUB PAGES, VS CODE, NETLIFY | Database/Tools: MYSQL, GIT & GITHUB</p>
    `;
    return createPanel('skills-panel', 'Technical Skills', content);
};

const getProjectsView = () => {
    const projectCards = resumeData.projects.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p style="margin-top: 10px;"><a href="${project.github}" target="_blank">View on GitHub &rarr;</a></p>
        </div>
    `).join('');
    
    const content = `<div class="projects-grid">${projectCards}</div>`;
    return createPanel('projects-panel', 'My Projects', content);
};

const getContactView = () => {
    const content = `
        <p>I'm always open to new opportunities. Feel free to reach out via email or connect on social platforms.</p>
        
        <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; font-size: 1.1rem;">
            <strong>Email:</strong> <a href="mailto:${resumeData.contact.email}" style="color: var(--link-color);">${resumeData.contact.email}</a>
            <strong>Phone:</strong> ${resumeData.contact.phone}
            <strong>LinkedIn:</strong> <a href="${resumeData.contact.linkedin}" target="_blank" style="color: var(--link-color);">Connect Here</a>
            <strong>GitHub:</strong> <a href="${resumeData.contact.github}" target="_blank" style="color: var(--link-color);">View Profile</a>
        </div>

        <h3 style="margin-top: 2rem;">Send a Message</h3>
        <form class="contact-form" onsubmit="alert('Form submission is simulated. Please contact me directly via email or LinkedIn!'); return false;">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" class="submit-btn">Send Message</button>
        </form>
    `;
    return createPanel('contact-panel', 'Get In Touch', content);
};

// --- SPA Routing Logic ---

const routes = {
    '/': getHomeView,
    '/about': getAboutView,
    '/skills': getSkillsView,
    '/projects': getProjectsView,
    '/contact': getContactView,
    
};

const appContent = document.getElementById('app-content');
const navLinks = document.querySelectorAll('.nav-links a');

const setActiveLink = (pathname) => {
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href') === '/' ? '/' : link.getAttribute('href');
        link.classList.remove('active');
        if (linkPath === pathname) {
            link.classList.add('active');
        }
    });
};

const navigateTo = (pathname) => {
    // Get the content function, default to 404
    const viewFunction = routes[pathname] || routes['404'];
    
    // Inject the new content
    appContent.innerHTML = viewFunction();
    
    // Update the history without reloading
    if (window.location.pathname !== pathname) {
        window.history.pushState({}, pathname, window.location.origin + pathname);
    }

    // Set active link in the navbar
    setActiveLink(pathname);
    
    // Scroll to the top of the main content
    appContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Intercept all link clicks within the document
document.addEventListener('click', e => {
    // Check if the clicked element is a link that points to an internal path
    if (e.target.matches('a[data-path]')) {
        e.preventDefault();
        const path = e.target.getAttribute('href');
        navigateTo(path);
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    navigateTo(window.location.pathname);
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    // The initial path is the current URL path
    navigateTo(window.location.pathname);

});



