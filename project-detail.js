// ===== Project Detail Page Functionality =====
if (window.location.pathname.includes('project-detail.html')) {
    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));

    const projectDetailContent = document.getElementById('projectDetailContent');
    const projectTitle = document.getElementById('projectTitle');

    // Function to get category name
    function getCategoryName(category) {
        const categories = {
            'web': 'Web Development',
            'ai': 'AI Projects',
            'hardware': 'Hardware Projects',
            'academic': 'Academic Projects',
            'security': 'Security / Ethical Hacking'
        };
        return categories[category] || category;
    }

    // Function to get category icon
    function getCategoryIcon(category) {
        const icons = {
            'web': 'fas fa-code',
            'ai': 'fas fa-brain',
            'hardware': 'fas fa-microchip',
            'academic': 'fas fa-graduation-cap',
            'security': 'fas fa-shield-alt'
        };
        return icons[category] || 'fas fa-folder';
    }

    // Render project details
    function renderProjectDetail() {
        // Wait for projects data to be available
        if (typeof projects === 'undefined') {
            setTimeout(renderProjectDetail, 100);
            return;
        }

        const project = projects.find(p => p.id === projectId);

        if (!project) {
            if (projectDetailContent) {
                projectDetailContent.innerHTML = `
                    <div style="text-align: center; padding: 3rem;">
                        <h2>Project Not Found</h2>
                        <p style="color: var(--text-secondary); margin: 1rem 0;">The project you're looking for doesn't exist.</p>
                        <a href="projects.html" class="btn btn-primary">Back to Projects</a>
                    </div>
                `;
            }
            return;
        }

        // Update page title
        if (projectTitle) {
            projectTitle.textContent = `${project.title} | Amrrendra Kumar`;
        }

        // Render project details
        if (projectDetailContent) {
            projectDetailContent.innerHTML = `
                <div class="project-detail-header">
                    <span class="project-category" style="margin-bottom: 1rem; display: inline-block;">
                        <i class="${getCategoryIcon(project.category)}"></i> ${getCategoryName(project.category)}
                    </span>
                    <h1>${project.title}</h1>
                    ${project.status ? `
                        <div style="margin-bottom: 1.5rem;">
                            <span style="padding: 8px 16px; background: #f59e0b; color: white; border-radius: 20px; font-size: 0.9rem; font-weight: 600; display: inline-block;">
                                <i class="fas fa-clock"></i> ${project.status}
                            </span>
                        </div>
                    ` : ''}
                    <div class="project-detail-meta">
                        <div class="meta-item">
                            <i class="fas fa-folder"></i>
                            <span>${getCategoryName(project.category)}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-calendar"></i>
                            <span>2024</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-tag"></i>
                            <span>${project.technologies.length} Technologies</span>
                        </div>
                    </div>
                </div>

                <div class="project-detail-image">
                    ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title}" class="project-detail-img">` : project.image}
                </div>

                <div class="project-detail-description">
                    ${project.description}
                </div>

                <div class="project-features">
                    <h2 class="section-title">Key Features</h2>
                    <div class="features-list">
                        ${project.features.map(feature => `
                            <div class="feature-item">
                                <i class="fas fa-check-circle"></i>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="project-tech-stack">
                    <h2 class="section-title">Technologies Used</h2>
                    <div class="tech-stack-list">
                        ${project.technologies.map(tech => `
                            <span class="tech-stack-item">${tech}</span>
                        `).join('')}
                    </div>
                </div>

                <div class="project-actions">
                    ${project.demoLink !== '#' ? `
                        <a href="${project.demoLink}" target="_blank" class="btn btn-primary">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                    ${project.sourceCodeLink !== '#' ? `
                        <a href="${project.sourceCodeLink}" target="_blank" class="btn btn-secondary">
                            <i class="fab fa-github"></i> Source Code
                        </a>
                    ` : `
                        <a href="#" class="btn btn-secondary" onclick="alert('Source code will be available soon!'); return false;">
                            <i class="fab fa-github"></i> Source Code
                        </a>
                    `}
                    <a href="projects.html" class="btn btn-outline">
                        <i class="fas fa-arrow-left"></i> Back to Projects
                    </a>
                </div>
            `;
        }

        // Add fade-in animation
        if (projectDetailContent) {
            projectDetailContent.classList.add('fade-in');
        }
    }

    // Initialize
    renderProjectDetail();
}


