// ===== Projects Data =====
const projects = [
    // ===== Web Development Projects =====
    {
        id: 1,
        title: "APVRCD Loan Management System",
        category: "web",
        description: "A complete web-based student loan management system that handles loan applications, approvals, repayments, fines, and loan clearance through an admin panel. Currently under development.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
        features: [
            "Student loan application processing",
            "Admin panel for loan approvals",
            "Automated repayment tracking",
            "Fine calculation system",
            "Loan clearance management",
            "User dashboard and reports"
        ],
        image: "💰",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 2,
        title: "Student Loan Website Without Credit Score",
        category: "web",
        description: "An online platform designed for students to get small loans without credit score verification, focusing on accessibility and ease of use. Currently under development.",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express"],
        features: [
            "No credit score requirement",
            "Student-friendly loan application",
            "Quick approval process",
            "Online document submission",
            "Payment gateway integration",
            "Loan status tracking"
        ],
        image: "🎓",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 3,
        title: "Advanced Admin Panel for Loan Management",
        category: "web",
        description: "A secure admin dashboard that allows authorized users to manage loan approvals, repayments, reports, and user data efficiently. Currently under development.",
        technologies: ["React.js", "Node.js", "MongoDB", "JWT", "Material-UI", "Chart.js"],
        features: [
            "Role-based access control",
            "Loan approval workflow",
            "Repayment management",
            "Analytics and reporting",
            "User data management",
            "Real-time notifications"
        ],
        image: "⚙️",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 4,
        title: "Inventory Management System (IMS)",
        category: "web",
        description: "A feature-rich system to manage products, stock, barcode scanning, multi-store inventory, alerts, and reporting. Currently under development.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Barcode API"],
        features: [
            "Product catalog management",
            "Barcode scanning integration",
            "Multi-store inventory tracking",
            "Low stock alerts",
            "Sales reporting and analytics",
            "Supplier management"
        ],
        image: "📦",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 5,
        title: "ANK Engineer – Engineering Notes Website",
        category: "web",
        description: "An educational website providing engineering notes and study materials for diploma and degree students. Currently under development.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        features: [
            "Subject-wise notes organization",
            "PDF download functionality",
            "Search and filter options",
            "User-friendly interface",
            "Regular content updates",
            "Mobile-responsive design"
        ],
        image: "📝",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 6,
        title: "AVP Notes – Bihar Board Notes Platform",
        category: "web",
        description: "A learning platform offering Bihar Board study materials for students from Class 1 to Class 12. Currently under development.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        features: [
            "Class-wise content organization",
            "Subject-wise notes and solutions",
            "Previous year question papers",
            "Study materials in PDF format",
            "Easy navigation system",
            "Regular content updates"
        ],
        image: "📚",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 8,
        title: "Personal Portfolio Website",
        category: "web",
        description: "A professional portfolio website showcasing personal details, skills, projects, and contact information with modern UI/UX design. Currently under development.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        features: [
            "Fully responsive design",
            "Dark/Light mode toggle",
            "Project filtering and search",
            "Smooth animations",
            "SEO optimized",
            "Contact form integration"
        ],
        image: "💼",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 13,
        title: "AmNi Clothing E-Commerce Website",
        category: "web",
        description: "An online shopping platform for selling customized clothing with secure payment integration. Currently under development.",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Payment Gateway"],
        features: [
            "Product catalog with images",
            "Shopping cart functionality",
            "Customization options",
            "Secure payment processing",
            "Order tracking system",
            "User account management"
        ],
        image: "👕",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 14,
        title: "Online Gaming Platform (Tiranga Style)",
        category: "web",
        description: "A web-based gaming platform where users can play games and track game-related data. Currently under development.",
        technologies: ["HTML", "CSS", "JavaScript", "Canvas API", "Node.js"],
        features: [
            "Multiple game options",
            "User score tracking",
            "Leaderboard system",
            "Game statistics",
            "Responsive game interface",
            "Real-time updates"
        ],
        image: "🎮",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 15,
        title: "Banking Service Management System",
        category: "web",
        description: "A software system that manages deposits, withdrawals, and calculates user credit scores. Currently under development.",
        technologies: ["Java", "MySQL", "Spring Boot", "REST API", "JavaScript"],
        features: [
            "Account management",
            "Deposit and withdrawal operations",
            "Credit score calculation",
            "Transaction history",
            "Financial reports",
            "Secure authentication"
        ],
        image: "🏦",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 16,
        title: "Travel Cost Comparison System",
        category: "web",
        description: "A system that compares bus, train, and flight prices to find the lowest-cost round trip. Currently under development.",
        technologies: ["HTML", "CSS", "JavaScript", "API Integration", "Node.js"],
        features: [
            "Multi-transport comparison",
            "Real-time price fetching",
            "Round trip calculation",
            "Best route suggestions",
            "Price alerts",
            "Booking integration"
        ],
        image: "🚌",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 24,
        title: "Bihar Board Study Material Website",
        category: "web",
        description: "A dedicated platform for providing syllabus-based Bihar Board educational content. Currently under development.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        features: [
            "Syllabus-based content",
            "Chapter-wise study materials",
            "Sample papers and solutions",
            "Video lectures integration",
            "Progress tracking",
            "Mobile-friendly interface"
        ],
        image: "📖",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },

    // ===== AI Projects =====
    {
        id: 7,
        title: "AMNI Tech GPT – AI Chatbot",
        category: "ai",
        description: "An AI-based chatbot system designed to answer questions and assist users with technical and educational queries. Currently under development.",
        technologies: ["Python", "OpenAI API", "Flask", "NLP", "TensorFlow"],
        features: [
            "Natural language processing",
            "Context-aware responses",
            "Technical query handling",
            "Educational assistance",
            "Multi-language support",
            "Conversation history"
        ],
        image: "🤖",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 10,
        title: "AmNi Virtual Class Monitor",
        category: "ai",
        description: "An AI-supported system to monitor online classes, including attendance timing, mic/camera status, and noise detection. Currently under development.",
        technologies: ["Python", "OpenCV", "TensorFlow", "Audio Processing", "Computer Vision"],
        features: [
            "Automatic attendance tracking",
            "Mic and camera status monitoring",
            "Noise level detection",
            "Class duration tracking",
            "Activity reports",
            "Real-time alerts"
        ],
        image: "👁️",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 11,
        title: "AI Personal Assistant – AmNi TeCh",
        category: "ai",
        description: "A virtual assistant capable of responding to voice and text commands with memory and task automation features. Currently under development.",
        technologies: ["Python", "Speech Recognition", "NLP", "Task Automation", "Machine Learning"],
        features: [
            "Voice and text input",
            "Task automation",
            "Memory and context retention",
            "Multi-task management",
            "Schedule management",
            "Smart reminders"
        ],
        image: "🎤",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 12,
        title: "Mobile-Based AI Voice Assistant (APK)",
        category: "ai",
        description: "An Android application that performs tasks based on voice commands and user interaction. Currently under development.",
        technologies: ["Java", "Kotlin", "Android SDK", "Speech Recognition", "AI Integration"],
        features: [
            "Voice command processing",
            "Task execution",
            "App integration",
            "Offline functionality",
            "Customizable commands",
            "User-friendly interface"
        ],
        image: "📱",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },

    // ===== Hardware Projects =====
    {
        id: 17,
        title: "Digital Locker Using Old Hard Disk",
        category: "hardware",
        description: "A secure digital storage system created using old hardware for file and document safety. Currently under development.",
        technologies: ["Hardware", "Linux", "Encryption", "File System", "Python"],
        features: [
            "Hardware-based storage",
            "Data encryption",
            "Secure file access",
            "Backup functionality",
            "Hardware-level security",
            "Cost-effective solution"
        ],
        image: "💾",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 22,
        title: "Old Smartphone Reuse Project",
        category: "hardware",
        description: "A system that converts unused smartphones into useful tools such as CCTV, trackers, or learning devices. Currently under development.",
        technologies: ["Android", "IoT", "Hardware Integration", "Sensors", "Mobile Apps"],
        features: [
            "CCTV camera functionality",
            "GPS tracking system",
            "Learning device conversion",
            "Resource optimization",
            "E-waste reduction",
            "Multiple use cases"
        ],
        image: "📲",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 23,
        title: "Hardware-Based Smart Projects",
        category: "hardware",
        description: "Smart hardware project concepts focused on government, startup, and real-world problem solutions. Currently under development.",
        technologies: ["Arduino", "Raspberry Pi", "IoT", "Sensors", "Embedded Systems"],
        features: [
            "Government solution concepts",
            "Startup-focused hardware",
            "Real-world problem solving",
            "IoT integration",
            "Sensor-based automation",
            "Scalable solutions"
        ],
        image: "⚡",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },

    // ===== Academic Projects =====
    {
        id: 9,
        title: "QR Code Based Attendance System",
        category: "academic",
        description: "A smart attendance management system that uses QR codes to record attendance quickly and accurately. Currently under development.",
        technologies: ["Python", "QR Code Generation", "Database", "Web Interface", "Mobile App"],
        features: [
            "QR code generation",
            "Quick attendance scanning",
            "Real-time attendance tracking",
            "Automated reports",
            "Student data management",
            "Mobile-friendly interface"
        ],
        image: "📊",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 25,
        title: "Multilevel Inheritance Program (C/C++)",
        category: "academic",
        description: "A programming project demonstrating multilevel inheritance concepts in object-oriented programming. Currently under development.",
        technologies: ["C++", "OOP", "Inheritance", "Polymorphism"],
        features: [
            "Multilevel inheritance implementation",
            "Object-oriented concepts",
            "Code reusability demonstration",
            "Polymorphism examples",
            "Educational purpose",
            "Well-documented code"
        ],
        image: "🔧",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },

    // ===== Security / Ethical Hacking Projects =====
    {
        id: 18,
        title: "Ethical Hacking Tools Automation Script",
        category: "security",
        description: "A Termux-based script that automates the installation and management of ethical hacking tools for learning purposes. Currently under development.",
        technologies: ["Bash Scripting", "Termux", "Linux", "Automation", "Security Tools"],
        features: [
            "Automated tool installation",
            "Tool management system",
            "Termux compatibility",
            "Educational purpose",
            "Regular updates",
            "Security best practices"
        ],
        image: "🔐",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 19,
        title: "Custom Ethical Hacking Operating System",
        category: "security",
        description: "A customized Kali Linux–style OS with pre-installed security and penetration testing tools. Currently under development.",
        technologies: ["Linux", "Kali Linux", "Security Tools", "Penetration Testing", "Customization"],
        features: [
            "Pre-installed security tools",
            "Penetration testing suite",
            "Customized interface",
            "Educational environment",
            "Tool organization",
            "Documentation included"
        ],
        image: "🛡️",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 20,
        title: "Educational Android Remote Administration Tool",
        category: "security",
        description: "An educational project to understand Android device management and remote monitoring concepts. Currently under development.",
        technologies: ["Android", "Java", "Network Programming", "Security", "Remote Access"],
        features: [
            "Educational purpose only",
            "Remote device management",
            "Monitoring capabilities",
            "Security awareness",
            "Ethical use guidelines",
            "Learning documentation"
        ],
        image: "📱",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    },
    {
        id: 21,
        title: "Athlete / Runner Identity Verification System",
        category: "security",
        description: "A digital identity system designed to verify athletes for sports events and competitions. Currently under development.",
        technologies: ["Biometrics", "Database", "Web Application", "Security", "Identity Verification"],
        features: [
            "Athlete identity verification",
            "Biometric integration",
            "Event management",
            "Secure data storage",
            "Real-time verification",
            "Anti-fraud measures"
        ],
        image: "🏃",
        demoLink: "#",
        sourceCodeLink: "#",
        status: "Under Development"
    }
];

// ===== Projects Page Functionality =====
if (window.location.pathname.includes('projects.html')) {
    const projectsGrid = document.getElementById('projectsGrid');
    const projectSearch = document.getElementById('projectSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCount = document.getElementById('projectCount');
    const noProjects = document.getElementById('noProjects');

    let currentCategory = 'all';
    let searchTerm = '';

    // Get category from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        currentCategory = categoryParam;
        // Activate the corresponding filter button
        filterButtons.forEach(btn => {
            if (btn.dataset.category === categoryParam) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Render projects
    function renderProjects() {
        let filteredProjects = projects;

        // Filter by category
        if (currentCategory !== 'all') {
            filteredProjects = filteredProjects.filter(project => project.category === currentCategory);
        }

        // Filter by search term
        if (searchTerm) {
            filteredProjects = filteredProjects.filter(project => 
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Update project count
        if (projectCount) {
            projectCount.textContent = filteredProjects.length;
        }

        // Show/hide no projects message
        if (noProjects) {
            if (filteredProjects.length === 0) {
                noProjects.style.display = 'block';
                if (projectsGrid) projectsGrid.style.display = 'none';
            } else {
                noProjects.style.display = 'none';
                if (projectsGrid) projectsGrid.style.display = 'grid';
            }
        }

        // Render project cards
        if (projectsGrid) {
            projectsGrid.innerHTML = filteredProjects.map(project => {
                const maxDescLength = 150;
                const truncatedDesc = project.description.length > maxDescLength 
                    ? project.description.substring(0, maxDescLength) + '...'
                    : project.description;

                return `
                <a href="project-detail.html?id=${project.id}" class="project-card">
                    <div class="project-image">${renderProjectImage(project)}</div>
                    <div class="project-content">
                        <div class="project-card-header">
                            <span class="project-category">${getCategoryName(project.category)}</span>
                            <span class="project-status">${project.status || 'Under Development'}</span>
                        </div>
                        <h3>${project.title}</h3>
                        <p>${truncatedDesc}</p>
                        <div class="project-tech">
                            ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            ${project.technologies.length > 3 ? `<span class="tech-tag">+${project.technologies.length - 3}</span>` : ''}
                        </div>
                        <div class="project-links">
                            <span class="project-link">View Details <i class="fas fa-arrow-right" style="margin-left: 0.5rem; font-size: 0.75rem;"></i></span>
                        </div>
                    </div>
                </a>
            `;
            }).join('');
        }
    }

    function renderProjectImage(project) {
        if (project.imageUrl) {
            return `<img src="${project.imageUrl}" alt="${project.title}">`;
        }
        return project.image || '📁';
    }

    function getCategoryName(category) {
        const categories = {
            'web': 'Web Development',
            'ai': 'AI Projects',
            'hardware': 'Hardware',
            'academic': 'Academic',
            'security': 'Security'
        };
        return categories[category] || category;
    }

    // Filter button click handlers
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            renderProjects();
        });
    });

    // Search input handler
    if (projectSearch) {
        projectSearch.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            renderProjects();
        });
    }

    // Initial render
    renderProjects();
}
