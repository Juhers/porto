// Data Projects
const projects = [
    {
        title: "Smart Scheduled Chicken Feeder",
        description: "This project is an automated chicken feeder system designed to dispense feed at scheduled times. The device delivers feed daily at 7 AM and 4 PM, ensuring consistent nutrition for the chickens while reducing manual labor.",
        tools: "Autodesk Inventor, Fusion 360, Arduino IDE",
        modelPath: "assets/models/Smart Chicken Feeder.glb",
        details: "I designed the mechanical model, 2D technical drawings for the project, creating the electrical schematics and system, and programming the control system for the automated chicken feeder.",
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
        tools: "Solidworks, Fusion 360, Arduino IDE",
        modelPath: "assets/models/Self Clean Water Filtration.glb",
        details: "I designed the mechanical model, creating the electrical schematics and system, and programming the control system for the Self Cleaning Water Filtration System.",
        images: [
            "assets/images/filterair (1).png",
            "assets/images/filterair (2).jpeg",
            "assets/images/filterair (1).jpeg",
            "assets/images/filterair (6).jpeg",
            "assets/images/filterair (3).jpeg",
            "assets/images/filterair (4).jpeg",
            "assets/images/filterair (5).jpeg"
        ]
    },
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
        title: "Grain Transporter",
        description: "This project involves designing a grain transporter machine that efficiently transports grains from one location to another. The design focuses on optimizing mechanical performance, safety, and ease of operation for agricultural applications.",
        tools: "Solidworks",
        modelPath: "assets/models/pengangkut_gabah.glb",
        details: "My responsibilities in this project included reassembling the mechanical components, creating detailed engineering drawings for each part, performing static structural analysis to identify the maximum load conditions, integrating a shock absorber system into the design, and conducting dynamic motion analysis to evaluate the equipment's movement and overall performance after the shock absorber system was installed.",
        images: [
            "assets/images/PengangkutGabah (1).png",
            "assets/images/PengangkutGabah (2).png",
            "assets/images/PengangkutGabah (3).png",
            "assets/images/PengangkutGabah (4).png",
            "assets/images/PengangkutGabah (5).png",
            "assets/images/PengangkutGabah (6).jpeg",
        ],
    },
    {
        title: "Module Trainer Heavy Equipment Sensors",
        description: "This project involves designing a module trainer for heavy equipment sensors, aimed at providing hands-on training for students and professionals in the field of heavy machinery. The trainer simulates real-world sensor applications, allowing users to learn about sensor integration, data acquisition, and system diagnostics.",
        tools: "Autodesk Inventor",
        modelPath: "assets/models/Modul Belajar Sensor.glb",
        details: "I designed the 3D mechanical model of the Module Trainer Heavy Equipment Sensors using Autodesk Inventor.",
        images: [
            "assets/images/Modul_belajar_Sensor.png"
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
        title: "Peanut Chopper",
        description: "This project involves designing a peanut chopper machine aimed at efficiently chopping peanuts into smaller pieces. The design focuses on optimizing mechanical performance, safety, and ease of operation for small-scale food processing.",
        tools: "Autodesk Inventor",
        modelPath: "assets/models/Pencacah Kacang.glb",
        details: "I designed the 3D mechanical model of the Peanut Chopper using Autodesk Inventor.",
        images: [
            "assets/images/pencacah.png"
        ] 
    },
    {
        title: "Mini Dozer X Excavator Toy",
        description: "This project involves designing a realistic Dozer X Excavator toy, focusing on both mechanical functionality and aesthetic appeal. The design emphasizes movable parts, durability, and an engaging user experience, making it suitable for interactive play and educational purposes.",
        tools: "Autodesk Inventor",
        modelPath: "assets/models/Dozer X Excavator Toy.glb",
        details: "I designed the 3D mechanical model of the Mini Dozer X Excavator Toy using Autodesk Inventor.",
        images: [
            "assets/images/mainan.png"
        ]
    },
    {
        title: "ESP8266 Trainer Module",
        description: "An ESP8266 trainer module for microcontroller and IoT learning.",
        tools: "Autodesk Fusion360",
        modelPath: "assets/models/pbl2.glb",
        details: "I designed the schematic and PCB layout, performed PCB etching, and assembled the ESP8266 trainer module.",
        images: [
            "assets/images/pbl PCB (1).png",
            "assets/images/pbl PCB (2).png",
            "assets/images/pbl PCB (3).png",
            "assets/images/pbl PCB (1).jpeg",
            "assets/images/pbl PCB (2).jpeg"
        ]
    },
    {
        title: "Digital Status Board",
        description: "An IoT-based digital status board showing the current availability of the Head of Department, managed via a Telegram Bot.",
        tools: "Arduino IDE, Microsoft Visio",
        modelPath: "",
        details: "Designed the system architecture, created the schematic, and developed the control program.",
        images: [
            "assets/images/statusboard (1).jpeg",
            "assets/images/statusboard (2).jpeg",
            "assets/images/statusboard (3).jpeg",
            "assets/images/statusboard (4).jpeg",
            "assets/images/statusboard (5).jpeg"
        ]
    }
];

const experiences = [
    {
        title: "National CAD-CAM Competition 2026",
        description: "Achieved 3rd place (Competent level) in the 3D Modelling category at the National CAD-CAM Competition 2026 held in Bandung, representing Politeknik Negeri Ujung Pandang. Demonstrated solid 3D modeling skills, design accuracy, and effective time management in a competitive national environment.",
        image: "assets/images/Lomba26.jpeg"
    },
    {
        title: "Sulsel Student CAD Competition Committee 2026",
        description: "Served as a committee member in the Equipment Division for the Sulsel Student CAD Competition. Responsible for preparing and managing competition equipment and facilities. Also acted as a training assistant during pre-competition sessions, guiding participants through basic drawing functions and fundamental 3D modeling techniques using SolidWorks to ensure readiness for the competition.",
        image: "assets/images/Lomba CAD.jpeg"
    },
    {
        title: "National CAD-CAM Competition 2025",
        description: "Participated in the National CAD-CAM Competition 2025 under the 3D Modelling category, competing against 63 participants nationwide. Achieved 28th place out of 63 participants in the preliminary round, demonstrating solid 3D modeling skills, design accuracy, and effective time management in a competitive environment.",
        image: "assets/images/lomba.png"
    },
    {
        title: "PLC-SCADA Competition Committee - Mechatronics Day 2024",
        description: "Served as a committee member for the PLC-SCADA Competition at the 8th Mechatronics Day event. Responsible for preparing competition requirements and supervising participants throughout the contest to ensure compliance with regulations, safety, and smooth execution of the event.",
        image: "assets/images/lomba PLC.jpeg"
    },
    {
        title: "Robotics Implementation for High School Education - PKM PNUP 2024",
        description: "Contributed to a community service (PKM) program by developing and improving an educational robotics system for high school students. Worked as a robotics technician handling both software and hardware, including enhancing a voice-command robot to recognize multiple users and troubleshooting power circuitry to ensure safe and reliable classroom operation. The project supported hands-on STEM learning and increased student engagement in robotics technology.",
        image: "assets/images/pkm.jpeg"
    }
];

let TOTAL_RESOURCES = 0;
let LOADED_RESOURCES = 0;

function resourceLoaded() {
    LOADED_RESOURCES++;

    const percent = Math.round((LOADED_RESOURCES / TOTAL_RESOURCES) * 100);
    const percentEl = document.getElementById("loader-percent");
    if (percentEl) percentEl.textContent = percent + "%";

    if (LOADED_RESOURCES >= TOTAL_RESOURCES) {
        finishLoading();
    }
}

function finishLoading() {
    const loader = document.getElementById("page-loader");
    if (!loader) return;

    loader.style.opacity = "0";
    setTimeout(() => {
        loader.remove();
        document.body.classList.remove("preload");
        document.body.classList.add("loaded");
    }, 500);
}

async function trackVisitor() {
    const ua = navigator.userAgent;
    const now = new Date();

    const deviceInfo = {
        deviceName: (() => {
            if (/iPhone/.test(ua)) return "Apple iPhone";
            if (/iPad/.test(ua)) return "Apple iPad";
            if (/Samsung|SM-[A-Z0-9]+/i.test(ua)) {
                const m = ua.match(/SM-([A-Z0-9]+)/i);
                return m ? `Samsung SM-${m[1]}` : "Samsung Device";
            }
            if (/Xiaomi|Redmi|POCO|Mi\s/i.test(ua)) {
                const m = ua.match(/(Redmi[\w\s]+|POCO[\w\s]+|Mi\s[\w]+)/i);
                return m ? m[1].trim() : "Xiaomi Device";
            }
            if (/OPPO|Realme|OnePlus/i.test(ua)) {
                const m = ua.match(/(OPPO|Realme|OnePlus)/i);
                return m ? `${m[1]} Device` : "OPPO Group Device";
            }
            if (/vivo/i.test(ua)) return "Vivo Device";
            if (/Huawei/i.test(ua)) {
                const m = ua.match(/Huawei[\s-]?([\w-]+)/i);
                return m ? `Huawei ${m[1]}` : "Huawei Device";
            }
            if (/Motorola|moto/i.test(ua)) return "Motorola Device";
            if (/Sony/i.test(ua)) return "Sony Device";
            if (/LG-/i.test(ua)) {
                const m = ua.match(/LG-([\w]+)/);
                return m ? `LG ${m[1]}` : "LG Device";
            }
            const android = ua.match(/Android.*;\s([^)]+)\)/);
            if (android) return android[1].trim();
            if (/Mac OS X/.test(ua)) return "Apple Mac";
            if (/Windows/.test(ua)) return "Windows PC";
            if (/Linux/.test(ua)) return "Linux PC";
            return "Unknown Device";
        })(),

        deviceType: /Tablet|iPad/.test(ua) || (/Android/.test(ua) && !/Mobile/.test(ua)) ? "Tablet" :
                    /Mobile|iPhone|iPod|Android.*Mobile/.test(ua) ? "Mobile" : "Desktop",

        os: /Windows NT 10/.test(ua) ? "Windows 10/11" :
            /iPhone OS/.test(ua) ? "iOS " + (ua.match(/iPhone OS ([\d_]+)/)?.[1]?.replace(/_/g, ".") || "") :
            /Android/.test(ua) ? "Android " + (ua.match(/Android ([\d.]+)/)?.[1] || "") :
            /Mac OS X/.test(ua) ? "macOS " + (ua.match(/Mac OS X ([\d_]+)/)?.[1]?.replace(/_/g, ".") || "") :
            /Linux/.test(ua) ? "Linux" : "Unknown OS",

        browser: /Edg\//.test(ua) ? "Microsoft Edge" :
                 /OPR\/|Opera/.test(ua) ? "Opera" :
                 /Firefox/.test(ua) ? "Firefox" :
                 /Chrome/.test(ua) ? "Chrome" :
                 /Safari/.test(ua) ? "Safari" : "Unknown Browser",

        screen: `${window.screen.width} × ${window.screen.height} (${window.devicePixelRatio || 1}x)`
    };

    let ipData = { ip: "Tidak terdeteksi", city: "", country: "" };
    
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        ipData = {
            ip: data.ip || "Unknown",
            city: data.city || "",
            country: data.country_name || ""
        };
    } catch (e) {
        console.log("IP detection failed (normal)");
    }

    const message = 
        `📱 **Device**     : ${deviceInfo.deviceName}\n` +
        `🖥️ **Type**       : ${deviceInfo.deviceType}\n` +
        `⚙️ **OS**         : ${deviceInfo.os}\n` +
        `🌐 **Browser**    : ${deviceInfo.browser}\n` +
        `📐 **Screen**     : ${deviceInfo.screen}\n` +
        `🌍 **IP**         : ${ipData.ip}\n` +
        `📍 **Location**   : ${ipData.city ? ipData.city + ", " : ""}${ipData.country}\n` +
        `🔗 **Referrer**   : ${document.referrer || "Direct"}\n`

    const webhookUrl = "https://discord.com/api/webhooks/1229742606356058182/jAzjIsHPerJyLjG6qB4_e2cdJE0VgAMXC-UiH1knnguqkFUYIBZgIl0P9NTkEiTnnDLQ";

    fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: "Visitor Tracker",
            embeds: [{
                title: "😂 New Visitor",
                color: 0x4248f5,
                description: message,
                timestamp: now.toISOString(),
                footer: { text: "Portfolio • Visitor Log" }
            }]
        })
    })
    .then(() => console.log("✅ Visitor data + IP terkirim"))
    .catch(err => console.error("❌ Gagal kirim:", err));
}

window.addEventListener('load', trackVisitor);

function sendDiscordWebhook(nama, komentar) {
  fetch("https://discord.com/api/webhooks/1229742606356058182/jAzjIsHPerJyLjG6qB4_e2cdJE0VgAMXC-UiH1knnguqkFUYIBZgIl0P9NTkEiTnnDLQ", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "Portfolio Comments Bot",
      embeds: [
        {
          title: "📬 New Portfolio Comment",
          color: 0x00FF88,
          fields: [
            {
              name: "👤 Name",
              value: nama,
              inline: true
            },
            {
              name: "💬 Message",
              value: komentar
            },
            {
              name: "🕒 Time",
              value: new Date().toLocaleString()
            }
          ],
          footer: {
            text: "Portfolio Comment Form"
          }
        }
      ]
    })
  }).catch(console.error);
}

function sendMQTT(nama, komentar) {
  const client = mqtt.connect("wss://broker.emqx.io:8084/mqtt", {
    clientId: "porto-" + Math.random().toString(16).slice(2, 10),
    clean: true,
    reconnectPeriod: 0,
    connectTimeout: 4000
  });

  client.on("connect", () => {
    const payload = JSON.stringify({
      name: nama,
      comment: komentar,
      time: new Date().toLocaleString()
    });

    client.publish(
      "IOT/PORTO/JUHERS/COMMENTS",
      payload,
      { qos: 0 },
      () => client.end()
    );
  });

  client.on("error", (err) => {
    console.error("MQTT error:", err);
    client.end();
  });
}

function is3DModel(path) {
  return /\.(glb|gltf)$/i.test(path);
}

function isImage(path) {
  return /\.(png|jpe?g|webp)$/i.test(path);
}

document.addEventListener("DOMContentLoaded", () => {
    const experienceContainer = document.getElementById('experience-container');

    if (!experienceContainer) return;

    experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'experience-card';

        card.innerHTML = `
            <img src="${exp.image}" alt="${exp.title}" class="experience-image">
            <div class="experience-content">
                <h3>${exp.title}</h3>
                <p>${exp.description}</p>
            </div>
        `;

        experienceContainer.appendChild(card);
    });

    // ================= LIGHTBOX =================
    const lightbox = document.getElementById('experience-lightbox');
    const lightboxImg = document.getElementById('experience-lightbox-img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // klik gambar
    experienceContainer.addEventListener('click', e => {
        const img = e.target.closest('.experience-image');
        if (!img) return;

        lightboxImg.src = img.src;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden'; // disable scroll
    });

    // klik close
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // klik background
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});


// ================= VIEWER 3D OPTIMIZATION =================
const viewers = document.querySelectorAll('.viewer');

const viewerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const el = entry.target;
        const modelPath = el.dataset.model;

        if (!modelPath) return;

        if (entry.isIntersecting) {
            // Jika visible → init viewer jika belum ada
            if (!el.viewerInstance) {
                // autoRotate pelan, non-interaktif di main page
                el.viewerInstance = initViewer(el, modelPath, true, false);
                if (el.viewerInstance) el.viewerInstance.autoRotateSpeed = 0.1; // pelan banget
                console.log("✔ Viewer loaded:", modelPath);
            }
        } else {
            // Jika tidak visible → dispose viewer jika ada
            if (el.viewerInstance && el.viewerInstance.dispose) {
                el.viewerInstance.dispose();
                el.viewerInstance = null;
                console.log("❌ Viewer disposed:", modelPath);
            }
        }
    });
}, {
    threshold: 0.1 // 10% visible dianggap tampil
});

// Observe semua viewer
viewers.forEach(v => viewerObserver.observe(v));



// Render Projects Dynamically
const projectsContainer = document.getElementById('projects-container');
projects.forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.setAttribute('data-index', index);

    // DEFAULT: 3D jika ADA modelPath
    if (project.modelPath && is3DModel(project.modelPath)) {
        viewerHTML = `
            <div class="viewer" data-model="${project.modelPath}"></div>
        `;
    }
    // FALLBACK: image jika TIDAK ADA modelPath
    else if (Array.isArray(project.images) && project.images.length > 0) {
        viewerHTML = `
            <img 
              src="${project.images[0]}" 
              class="project-image"
              alt="${project.title}"
              loading="lazy"
            >
        `;
    }

    projectDiv.innerHTML = `
        <div class="project-viewer">
            ${viewerHTML}
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
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
let modalControls; // simpan controls modal secara global


const modalLeft = document.querySelector('.modal-left');
projectsContainer.addEventListener('click', (e) => {
    const projectDiv = e.target.closest('.project');
    if (projectDiv) {
        const index = projectDiv.getAttribute('data-index');
        const project = projects[index];
        
        // Isi deskripsi modal
        modalBody.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <h2><strong>What I Did</strong></h2>
            <p>${project.details}</p>
            <p class="tools">Tools: ${project.tools}</p>
            ${project.images ? `
            <div class="modal-gallery">
                ${project.images.map(img => `<img src="${img}" loading="lazy" alt="${project.title}">`).join('')}
            </div>` : ''}
        `;

        // Hapus viewer lama & init viewer baru
        modalViewer.innerHTML = '';

        if (project.modelPath && is3DModel(project.modelPath)) {
            modalLeft.style.display = 'flex';
            const viewer3D = document.createElement('div');
            viewer3D.className = 'viewer-3d';
            modalViewer.appendChild(viewer3D);

            modalControls = initViewer(viewer3D, project.modelPath, false, true);
            if (modalControls) modalControls.enableZoom = true;

        } else if (Array.isArray(project.images)) {
            modalLeft.style.display = 'none';
            project.images.forEach(img => {
                if (!isImage(img)) return;

                modalViewer.innerHTML += `
                <img src="${img}" class="modal-image">
                `;
            });
        }

        // Tampilkan modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.querySelector('.modal-right').scrollTop = 0;
    }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scroll

    // zoom nonaktif saat modal ditutup
    if (modalControls) modalControls.enableZoom = false;
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



// ================= COMMENTS SECTION =================
const MY_NAME = "juhers123@#"; // Ganti dengan nama Anda
const API_URL = "https://script.google.com/macros/s/AKfycbzS8WtB-3LqSITtVFvgKCnAh7s-tAgemLG2fyEUtBp1twJxWO0Tyt_mfxjYZfLtLg7FwA/exec";

const form = document.getElementById('comment-form');
const list = document.getElementById('comment-list');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById('c-name').value.trim();
  const message = document.getElementById('c-message').value.trim();

  if (!name || !message) return;

  const isMe = name.trim().toLowerCase() === MY_NAME.toLowerCase();
    let realname;

    if (isMe) {
        realname = '[REAL] Juhers';
    } else if (name.trim().toLowerCase() === 'juhers') {
        realname = '[FAKE] Juhers';
    } else {
        realname = name;
    }

  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ name, message })
  });

  sendDiscordWebhook(realname, message);
  sendMQTT(realname, message);

  form.reset();
  loadComments();
});

async function loadComments() {
    const res = await fetch(API_URL);
    const data = await res.json();

    list.innerHTML = data
    .slice()
    .reverse()
    .map(c => {
        const isMe = c.name.trim().toLowerCase() === MY_NAME.toLowerCase();
        const side = isMe ? 'right' : 'left';
        let realname;

        if (isMe) {
            realname = 'Juhers';
        } else if (c.name.trim().toLowerCase() === 'juhers') {
            realname = '[FAKE] Juhers';
        } else {
            realname = c.name;
        }

        const initials = c.name
        .split(' ')
        .slice(0, 2)
        .map(w => w[0])
        .join('');

        return `
        <div class="comment ${side}">
            <div class="avatar">${initials}</div>
            <div class="comment-content">
            <strong>${realname}</strong>
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
resourceLoaded();