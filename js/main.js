// Data Projects
const projects = [
    {
        title: "3D Robotic Arm Model",
        description: "A detailed 3D model of a robotic arm for automation simulations, optimized for web rendering.",
        tools: "Blender, Three.js",
        modelPath: "assets/models/Robot Penanam Padi.glb",
        details: "This project involved creating a fully articulated robotic arm with realistic physics simulation. Used for training AI in manufacturing environments.",
        images: [
            "assets/images/robot (1).png",
            "assets/images/robot (2).png",
            "assets/images/robot (3).png",
            "assets/images/robot (4).png",
            "assets/images/robot (5).png",
            "assets/images/robot (6).png",
            "assets/images/robot (7).png",
            "assets/images/robot (8).png",
            "assets/images/robot (9).png",
            "assets/images/robot (10).png",
            "assets/images/robot (11).png",
            "assets/images/robot (12).png",
            "assets/images/robot (13).png",
            "assets/images/robot (14).png",
            "assets/images/robot (15).png",
            "assets/images/robot (16).png",
            "assets/images/robot (17).png",
            "assets/images/robot (18).png"
        ]
    },
    {
        title: "Electrical Circuit Board Design",
        description: "Custom PCB design for IoT device, including embedded sensors and automation logic.",
        tools: "KiCad, Arduino",
        modelPath: "assets/models/Pencacah Kacang.glb",
        details: "Designed a low-power IoT board with Wi-Fi connectivity and sensor integration for smart home applications.",
        images: [
            "assets/images/robot (1).png",
            "assets/images/robot (2).png",
            "assets/images/robot (3).png",
            "assets/images/robot (4).png",
            "assets/images/robot (5).png",
            "assets/images/robot (6).png",
            "assets/images/robot (7).png",
            "assets/images/robot (8).png",
            "assets/images/robot (9).png",
            "assets/images/robot (10).png",
            "assets/images/robot (11).png",
            "assets/images/robot (12).png",
            "assets/images/robot (13).png",
            "assets/images/robot (14).png",
            "assets/images/robot (15).png",
            "assets/images/robot (16).png",
            "assets/images/robot (17).png",
            "assets/images/robot (18).png"
        ]
    },
    {
        title: "Futuristic Drone Prototype",
        description: "3D design and electrical integration for a high-tech drone with autonomous flight capabilities.",
        tools: "Fusion 360, ESP32",
        modelPath: "assets/models/Fermentor Okara.glb",
        details: "Prototyped a quadcopter with GPS navigation and obstacle avoidance, powered by ESP32 microcontroller.",
        images: [
            "assets/images/robot (1).png",
            "assets/images/robot (2).png",
            "assets/images/robot (3).png",
            "assets/images/robot (4).png",
            "assets/images/robot (5).png",
            "assets/images/robot (6).png",
            "assets/images/robot (7).png",
            "assets/images/robot (8).png",
            "assets/images/robot (9).png",
            "assets/images/robot (10).png",
            "assets/images/robot (11).png",
            "assets/images/robot (12).png",
            "assets/images/robot (13).png",
            "assets/images/robot (14).png",
            "assets/images/robot (15).png",
            "assets/images/robot (16).png",
            "assets/images/robot (17).png",
            "assets/images/robot (18).png"
        ]
    },
    {
        title: "ASDASDASD",
        description: "3D desigan and electrical integration for a high-tech drone with autonomous flight capabilities.",
        tools: "Fusion 360, ESP32",
        modelPath: "assets/models/Dozer X Excavator Toy.glb",
        details: "Prototyped a quadcoptaer with GPS navigation and obstacle avoidance, powered by ESP32 microcontroller.",
        images: [
            "assets/images/robot (1).png",
            "assets/images/robot (2).png",
            "assets/images/robot (3).png",
            "assets/images/robot (4).png",
            "assets/images/robot (5).png",
            "assets/images/robot (6).png",
            "assets/images/robot (7).png",
            "assets/images/robot (8).png",
            "assets/images/robot (9).png",
            "assets/images/robot (10).png",
            "assets/images/robot (11).png",
            "assets/images/robot (12).png",
            "assets/images/robot (13).png",
            "assets/images/robot (14).png",
            "assets/images/robot (15).png",
            "assets/images/robot (16).png",
            "assets/images/robot (17).png",
            "assets/images/robot (18).png"
        ]
    },
    {
        title: "Lorem Ipsum Project",
        description: "Lorem Ipsuam sit Dolor.",
        tools: "Fusion 360, ESP32",
        modelPath: "assets/models/Smart Chicken Feeder.glb",
        details: "Protot yped a quadcopter with GPS navigation and obstacle avoidance, powered by ESP32 microcontroller.",
        images: [
            "assets/images/robot (1).png",
            "assets/images/robot (2).png",
            "assets/images/robot (3).png",
            "assets/images/robot (4).png",
            "assets/images/robot (5).png",
            "assets/images/robot (6).png",
            "assets/images/robot (7).png",
            "assets/images/robot (8).png",
            "assets/images/robot (9).png",
            "assets/images/robot (10).png",
            "assets/images/robot (11).png",
            "assets/images/robot (12).png",
            "assets/images/robot (13).png",
            "assets/images/robot (14).png",
            "assets/images/robot (15).png",
            "assets/images/robot (16).png",
            "assets/images/robot (17).png",
            "assets/images/robot (18).png"
        ]
    }
];

// Render Projects Dynamically
const projectsContainer = document.getElementById('projects-container');
projects.forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.setAttribute('data-index', index);
    projectDiv.innerHTML = `
        <div class="viewer" data-model="${project.modelPath}"></div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="tools">Tools: ${project.tools}</p>
        </div>
    `;
    projectsContainer.appendChild(projectDiv);
});

// Scroll Animations with Intersection Observer
const sections = document.querySelectorAll('section, header');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Navbar Sticky and Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'blur(0px)';
    }
});

// NAVBAR HP
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    links.classList.toggle('show');
});

// Contact Form Handling with Validation
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Validate Name
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    // Validate Message
    if (!message) {
        document.getElementById('message-error').textContent = 'Message is required.';
        isValid = false;
    }

    if (isValid) {
        alert(`Thank you, ${name}! Your message has been sent. (Demo only - integrate backend for real sending)`);
        e.target.reset();
    }
});

// Modal for Project Details
const modal = document.getElementById('project-modal');
const modalViewer = document.getElementById('modal-3d-viewer');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

projectsContainer.addEventListener('click', (e) => {
    const projectDiv = e.target.closest('.project');
    if (projectDiv) {
        const index = projectDiv.getAttribute('data-index');
        const project = projects[index];
        
        // Isi deskripsi di sisi kanan
        modalBody.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Details:</strong> ${project.details}</p>
            <p class="tools">Tools: ${project.tools}</p>

            ${project.images ? `
            <div class="modal-gallery">
                ${project.images.map(img => `
                    <img src="${img}" loading="lazy" alt="${project.title}">
                `).join('')}
            </div>` : ''}
        `;
        
        // Inisialisasi 3D viewer di sisi kiri (hapus viewer lama jika ada)
        modalViewer.innerHTML = ''; // Clear previous viewer
        initViewer(modalViewer, project.modelPath, false);
        
        // Tampilkan modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scroll
        // Reset scroll modal-right ke atas
        const modalRight = document.querySelector('.modal-right');
        modalRight.scrollTop = 0;

    }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scroll
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ================= IMAGE LIGHTBOX =================
const lightbox = document.getElementById('image-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.lightbox-close');

let currentImages = [];
let currentIndex = 0;
let startX = 0;

document.addEventListener('click', e => {
    const img = e.target.closest('.modal-gallery img');
    if (!img) return;

    currentImages = [...document.querySelectorAll('.modal-gallery img')].map(i => i.src);
    currentIndex = currentImages.indexOf(img.src);

    lightboxImg.src = img.src;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
});

closeLightbox.onclick = closeLightboxFn;
lightbox.onclick = e => e.target === lightbox && closeLightboxFn();

function closeLightboxFn() {
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// ================= SWIPE (MOBILE) =================
lightbox.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

lightbox.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) diff < 0 ? nextImg() : prevImg();
});

function nextImg() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex];
}

function prevImg() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex];
}
