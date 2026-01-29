// Data Projects
const projects = [
    {
        title: "Rice Planting Robot",
        description: "This rice planting robot is designed to assist in the process of transplanting rice seedlings. Currently, the robot is manually controlled via a remote control and operates using electrical power. In the future, it is planned to be fully automated using computer vision and machine learning technologies.",
        tools: "Autodesk Inventor",
        modelPath: "assets/models/Robot Penanam Padi.glb",
        details: "I designed the 3D mechanical model of the rice planting robot using Autodesk Inventor, and 2D technical drawings for the project.",
        images: [
            "assets/images/pnanampadi (1).png",
            "assets/images/pnanampadi (2).png",
            "assets/images/pnanampadi (3).png"
        ]
    },
    {
        title: "Peanut Chopper",
        description: "This project involves designing a peanut chopper machine aimed at efficiently chopping peanuts into smaller pieces. The design focuses on optimizing mechanical performance, safety, and ease of operation for small-scale food processing.",
        tools: "Autodesk Inventor",
        modelPath: "assets/models/Pencacah Kacang.glb",
        details: "I designed the 3D mechanical model of the Peanut Chopper using Autodesk Inventor.",
        images: [

        ]
    },
    {
        title: "Smart Vertical Komposter",
        description: "The Smart Vertical Komposter is a three-stage system designed to convert tofu waste into maggot feed. First, the tofu residue is filtered, then transferred into a fermentor for mixing and fermentation, and finally, the fermented material is processed into nutritious feed for maggots.",
        tools: "Autodesk Inventor, Microsoft Excel",
        modelPath: "assets/models/Fermentor Okara.glb",
        details: "I designed the 3D mechanical model of the Smart Vertical Komposter using Autodesk Inventor, also developed the cost analysis and design plan for the fabrication of the device.",
        images: [
            "assets/images/okara.png"
        ]
    },
    {
        title: "Mini Dozer X Excavator Toy",
        description: "This project involves designing a realistic Dozer X Excavator toy, focusing on both mechanical functionality and aesthetic appeal. The design emphasizes movable parts, durability, and an engaging user experience, making it suitable for interactive play and educational purposes.",
        tools: "Autodesk Inventor",
        modelPath: "assets/models/Dozer X Excavator Toy.glb",
        details: "I designed the 3D mechanical model of the Mini Dozer X Excavator Toy using Autodesk Inventor.",
        images: [
        ]
    },
    {
        title: "Smart Scheduled Chicken Feeder",
        description: "This project is an automated chicken feeder system designed to dispense feed at scheduled times. The device delivers feed daily at 7 AM and 4 PM, ensuring consistent nutrition for the chickens while reducing manual labor.",
        tools: "Autodesk Inventor, Fusion 360, Arduino IDE",
        modelPath: "assets/models/Smart Chicken Feeder.glb",
        details: "I designed designed the mechanical model, 2D technical drawings for the project, creating the electrical schematics and system, and programming the control system for the automated chicken feeder.",
        images: [
            "assets/images/pakanayam (1).png",
            "assets/images/pakanayam (2).jpeg",
            "assets/images/pakanayam (1).jpeg",
            "assets/images/pakanayam (6).jpeg",
            "assets/images/pakanayam (3).jpeg",
            "assets/images/pakanayam (4).jpeg",
            "assets/images/pakanayam (5).jpeg"
        ]
    },    
    {
        title: "Self Cleaning Water Filtration System",
        description: "The Self-Cleaning Water Filtration System automatically flushes water through left and right valves for 20 minutes daily, then resumes delivering clean filtered water through the top valve.",
        tools: "Autodesk Inventor, Fusion 360, Arduino IDE",
        modelPath: "assets/models/Self Clean Water Filtration.glb",
        details: "I designed designed the mechanical model, creating the electrical schematics and system, and programming the control system for the Self Cleaning Water Filtration System.",
        images: [
            "assets/images/filterair (1).png",
            "assets/images/filterair (2).jpeg",
            "assets/images/filterair (1).jpeg",
            "assets/images/filterair (6).jpeg",
            "assets/images/filterair (3).jpeg",
            "assets/images/filterair (4).jpeg",
            "assets/images/filterair (5).jpeg"
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
            <h2><strong>Tasks</strong></h2>
            <p>${project.details}</p>
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

const API_URL = "https://script.google.com/macros/s/AKfycbxebkQlQ4wM7MS4up03PALvJFgfS-a9Qwr_4ZTJBsgPQ919DVwfLe-WauMZcqPj_txYGA/exec";

const form = document.getElementById('comment-form');
const list = document.getElementById('comment-list');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById('c-name').value.trim();
  const message = document.getElementById('c-message').value.trim();

  if (!name || !message) return;

  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ name, message })
  });

  form.reset();
  loadComments();
});

const MY_NAME = "Juhers"; // Ganti dengan nama Anda

async function loadComments() {
    const res = await fetch(API_URL);
    const data = await res.json();

    list.innerHTML = data
    .slice()
    .reverse()
    .map(c => {
        const isMe = c.name.trim().toLowerCase() === MY_NAME.toLowerCase();
        const side = isMe ? 'right' : 'left';

        const initials = c.name
        .split(' ')
        .slice(0, 2)
        .map(w => w[0])
        .join('');

        return `
        <div class="comment ${side}">
            <div class="avatar">${initials}</div>
            <div class="comment-content">
            <strong>${c.name}</strong>
            <p>${c.message}</p>
            <small>${new Date(c.time).toLocaleString()}</small>
            </div>
        </div>
        `;
    })
    .join('');


}

// load komentar pertama kali
loadComments();

