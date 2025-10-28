// Certificate Modal Functionality
const certificates = {
    'ccna': {
        title: 'CISCO CCNA Certification',
        issuer: 'Cisco Networking Academy',
        date: '2023',
        skills: ['Network Fundamentals', 'IP Connectivity', 'Network Access', 'IP Services', 'Security Fundamentals'],
        description: 'Comprehensive networking certification covering network fundamentals, IP connectivity, network access, IP services, and security fundamentals. Demonstrates proficiency in configuring, troubleshooting, and managing network infrastructure.'
    },
    'cybersecurity': {
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco Networking Academy',
        date: '2025',
        skills: ['Cybersecurity Basics', 'Threat Awareness', 'Network Security', 'Data Protection', 'Security Best Practices'],
        description: 'Fundamental cybersecurity course covering essential concepts including threat awareness, network security principles, data protection methods, and security best practices for modern digital environments.'
    },
    'cloud': {
        title: 'Introduction to Cloud Computing',
        issuer: 'Codecademy',
        date: '2025',
        skills: ['Cloud Concepts', 'AWS Basics', 'Azure Fundamentals', 'Cloud Deployment', 'Virtualization'],
        description: 'Comprehensive introduction to cloud computing concepts, including cloud service models (IaaS, PaaS, SaaS), deployment models, and hands-on experience with major cloud platforms like AWS and Azure.'
    },
    'sql-python': {
        title: 'SQL & Python 3',
        issuer: 'Codecademy',
        date: '2025',
        skills: ['SQL Queries', 'Database Design', 'Python Programming', 'Data Manipulation', 'CRUD Operations'],
        description: 'Dual certification covering both SQL for database management and Python 3 for programming. Includes database design, complex queries, Python syntax, data structures, and integration between databases and applications.'
    },
    'devops': {
        title: 'Core DevOps Skills: Agile & DevOps',
        issuer: 'Codecademy',
        date: '2025',
        skills: ['Agile Methodology', 'DevOps Practices', 'CI/CD Pipelines', 'Team Collaboration', 'Project Management'],
        description: 'Comprehensive course covering Agile development methodologies and DevOps practices. Includes continuous integration/continuous deployment (CI/CD), team collaboration strategies, and modern software development workflows.'
    },
    'data-analysis': {
        title: 'Exploratory Data Analysis in Python',
        issuer: 'Codecademy',
        date: '2025',
        skills: ['Data Visualization', 'Statistical Analysis', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Cleaning'],
        description: 'Advanced data analysis course focusing on exploratory data analysis techniques using Python. Covers data visualization, statistical analysis, data cleaning, and using libraries like Pandas, Matplotlib, and Seaborn for insightful data exploration.'
    },
    'chatbots': {
        title: 'Build Chatbots with Python',
        issuer: 'Codecademy',
        date: '2025',
        skills: ['Natural Language Processing', 'Dialogflow', 'Python Scripting', 'API Integration', 'Chatbot Design'],
        description: 'Specialized course in building intelligent chatbots using Python. Covers natural language processing fundamentals, Dialogflow integration, API connections, and designing conversational interfaces for various applications.'
    },
    'ai-fluency': {
        title: 'Microsoft AI Fluency Course',
        issuer: 'Microsoft',
        date: '2025',
        skills: ['AI Fundamentals', 'Machine Learning', 'Azure AI Services', 'Ethical AI', 'AI Applications'],
        description: 'Microsoft-certified course providing comprehensive understanding of artificial intelligence fundamentals. Covers machine learning concepts, Azure AI services, ethical AI considerations, and practical applications of AI in business environments.'
    }
};

function openCertificate(certId) {
    const cert = certificates[certId];
    if (cert) {
        document.getElementById('modalTitle').textContent = cert.title;
        document.getElementById('modalIssuer').textContent = cert.issuer;
        document.getElementById('modalDate').textContent = cert.date;
        document.getElementById('modalDescription').textContent = cert.description;
        
        // Clear and populate skills
        const skillsContainer = document.getElementById('modalSkills');
        skillsContainer.innerHTML = '';
        cert.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });
        
        document.getElementById('certificateModal').style.display = 'block';
    }
}

function closeCertificate() {
    document.getElementById('certificateModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeCertificate();
    }
}

// FAQ Toggle Functionality
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        const faqItem = faqItems[index - 1];
        const answer = faqItem.querySelector('.faq-answer');
        
        faqItem.classList.toggle('active');
        answer.classList.toggle('active');
    }
}

// Quick Info Modal
function showInfo(type) {
    const info = {
        skills: "My technical skills include: Java, Python, JavaScript, PHP, SQL, Laravel, HTML/CSS, Git, and more. Check the Skills page for detailed information!",
        availability: "I'm currently available for new projects! I can start immediately and typically deliver projects within 2-6 weeks depending on complexity.",
        projects: "Recent projects include: CRUD Application (Laravel), Task Tracker App (Python/Flask), and various web applications. Visit my Projects page or GitHub for details!",
        contact: "Best ways to reach me: Email (mabasanhlonhlorhi@gmail.com), Phone (063 170 5937), or LinkedIn. I typically respond within 24 hours."
    };
    
    if (info[type]) {
        alert(info[type]);
    }
}

// WhatsApp Style Chatbot
class WhatsAppChatbot {
    constructor() {
        this.conversationHistory = [];
        this.userName = '';
        this.isFirstInteraction = true;
    }

    generateResponse(userMessage) {
        const message = userMessage.toLowerCase().trim();
        
        // Store conversation
        this.conversationHistory.push({ 
            type: 'user', 
            content: userMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        
        // Extract user name if provided
        this.extractUserName(message);

        // Generate appropriate response
        let response = '';
        
        if (this.isFirstInteraction && this.isGreeting(message)) {
            response = this.getWelcomeResponse();
            this.isFirstInteraction = false;
        } else if (this.isGreeting(message)) {
            response = this.getGreetingResponse();
        } else if (this.isExperienceQuestion(message)) {
            response = this.getExperienceResponse();
        } else if (this.isSkillsQuestion(message)) {
            response = this.getSkillsResponse();
        } else if (this.isProjectQuestion(message)) {
            response = this.getProjectResponse();
        } else if (this.isEducationQuestion(message)) {
            response = this.getEducationResponse();
        } else if (this.isAvailabilityQuestion(message)) {
            response = this.getAvailabilityResponse();
        } else if (this.isContactQuestion(message)) {
            response = this.getContactResponse();
        } else if (this.isCompanyQuestion(message)) {
            response = this.getCompanyResponse();
        } else if (this.isThankYou(message)) {
            response = this.getThankYouResponse();
        } else if (this.isFarewell(message)) {
            response = this.getFarewellResponse();
        } else {
            response = this.getProfessionalFallback();
        }

        // Store bot response
        this.conversationHistory.push({ 
            type: 'bot', 
            content: response,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        
        return response;
    }

    extractUserName(message) {
        const namePatterns = [
            /my name is (\w+)/i,
            /i am (\w+)/i,
            /i'm (\w+)/i,
            /call me (\w+)/i,
            /this is (\w+)/i
        ];

        for (let pattern of namePatterns) {
            const match = message.match(pattern);
            if (match && match[1]) {
                this.userName = match[1];
                break;
            }
        }
    }

    isGreeting(message) {
        const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
        return greetings.some(greet => message.includes(greet));
    }

    isThankYou(message) {
        return message.includes('thank') || message.includes('thanks');
    }

    isFarewell(message) {
        const farewells = ['bye', 'goodbye', 'see you', 'farewell'];
        return farewells.some(farewell => message.includes(farewell));
    }

    getWelcomeResponse() {
        return `👋 Hello! I'm Nhlonhlorhi's portfolio assistant. I can help you learn about his professional background, skills, and experience. What would you like to know?`;
    }

    getGreetingResponse() {
        const name = this.userName ? `, ${this.userName}` : '';
        return `Hi${name}! 👋 How can I assist you with information about Nhlonhlorhi today?`;
    }

    getThankYouResponse() {
        return `You're welcome! 😊 Is there anything else you'd like to know about Nhlonhlorhi?`;
    }

    getFarewellResponse() {
        const name = this.userName ? `, ${this.userName}` : '';
        return `Goodbye${name}! 👋 Feel free to reach out if you need more information.`;
    }

    isExperienceQuestion(message) {
        const keywords = ['experience', 'years', 'worked', 'career', 'background'];
        return keywords.some(keyword => message.includes(keyword));
    }

    getExperienceResponse() {
        return `💼 Nhlonhlorhi has ${new Date().getFullYear() - 2024}+ years of experience in software development. He's worked on web applications using Laravel, Python, and modern frameworks. His professional journey includes training at MICTSETA and full-stack development at Muluma Management Consulting.`;
    }

    isSkillsQuestion(message) {
        const keywords = ['skill', 'technology', 'programming', 'language', 'framework'];
        return keywords.some(keyword => message.includes(keyword));
    }

    getSkillsResponse() {
        return `💻 Technical Skills:
• Java, Python, JavaScript, PHP, SQL
• Laravel, Flask, HTML5, CSS3, MySQL
• Git, VS Code, XAMPP, WSL Ubuntu
• Certifications: CCNA, Cybersecurity, Cloud Computing`;
    }

    isProjectQuestion(message) {
        const keywords = ['project', 'build', 'created', 'github', 'portfolio'];
        return keywords.some(keyword => message.includes(keyword));
    }

    getProjectResponse() {
        return `🚀 Projects:
• CRUD Application (Laravel/MySQL)
• Task Tracker App (Python/Flask)
• Various web applications

Check the Projects page for details and GitHub for code examples!`;
    }

    isEducationQuestion(message) {
        const keywords = ['education', 'degree', 'school', 'university', 'study'];
        return keywords.some(keyword => message.includes(keyword));
    }

    getEducationResponse() {
        return `🎓 Education:
• Diploma in IT - Vaal University (2022-2024)
• Matric - Ximunwana High School (2021)
• Multiple professional certifications`;
    }

    isAvailabilityQuestion(message) {
        const keywords = ['available', 'hire', 'freelance', 'work', 'project'];
        return keywords.some(keyword => message.includes(keyword));
    }

    getAvailabilityResponse() {
        return `✅ Available for:
• Full-time positions
• Freelance projects
• Contract work

He can start immediately!`;
    }

    isContactQuestion(message) {
        const keywords = ['contact', 'email', 'phone', 'reach', 'linkedin'];
        return keywords.some(keyword => message.includes(keyword));
    }

    getContactResponse() {
        return `📞 Contact:
• Email: mabasanhlonhlorhi@gmail.com
• Phone: 063 170 5937
• LinkedIn: Nhlonhlorhi Mabasa
• GitHub: Nhlonhlorhi

Typically responds within 24 hours.`;
    }

    isCompanyQuestion(message) {
        const keywords = ['company', 'work', 'employer', 'mictseta', 'muluma'];
        return keywords.some(keyword => message.includes(keyword));
    }

    getCompanyResponse() {
        return `🏢 Work Experience:
• MICTSETA (2024-2025): Web Developer training
• Muluma Management Consulting (2025-2026): Full-stack development

Gained real-world project experience.`;
    }

    getProfessionalFallback() {
        return `I'm here to help with information about Nhlonhlorhi's professional background. You can ask about skills, experience, projects, or education. 😊`;
    }
}

// Initialize WhatsApp chatbot
const whatsappChatbot = new WhatsAppChatbot();

// Chatbot UI Management
function toggleChatbot() {
    const chatbot = document.querySelector('.chatbot-widget');
    const overlay = document.querySelector('.chatbot-overlay');
    const welcomeBubble = document.querySelector('.welcome-bubble');
    
    if (chatbot.style.display === 'block') {
        chatbot.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        chatbot.style.display = 'block';
        overlay.style.display = 'block';
        // Hide welcome bubble when opening chat
        if (welcomeBubble) {
            welcomeBubble.classList.add('shrink');
        }
        // Auto-focus input
        setTimeout(() => {
            const input = document.getElementById('chatbotInput');
            if (input) input.focus();
        }, 300);
    }
}

function showTypingIndicator() {
    const messagesContainer = document.querySelector('.chatbot-messages');
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'bot-message';
    typingIndicator.id = 'typingIndicator';
    typingIndicator.innerHTML = `
        <div class="typing-indicator">
            Assistant is typing
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        </div>
        <div class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
    `;
    messagesContainer.appendChild(typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Disable input while processing
    input.disabled = true;
    document.getElementById('sendButton').disabled = true;
    
    // Add user message with timestamp
    addMessageToChat(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate thinking time
    const thinkingTime = Math.random() * 1000 + 1500;
    
    setTimeout(() => {
        hideTypingIndicator();
        
        // Generate response
        const response = whatsappChatbot.generateResponse(message);
        addMessageToChat(response, 'bot');
        
        // Re-enable input
        input.disabled = false;
        document.getElementById('sendButton').disabled = false;
        input.focus();
    }, thinkingTime);
}

function addMessageToChat(message, type) {
    const messagesContainer = document.querySelector('.chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.className = type === 'user' ? 'user-message' : 'bot-message';
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageElement.innerHTML = `
        ${message}
        <div class="message-time">${time}</div>
    `;
    
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendQuickQuestion(question) {
    const input = document.getElementById('chatbotInput');
    input.value = question;
    sendMessage();
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add chatbot overlay
    if (!document.querySelector('.chatbot-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'chatbot-overlay';
        overlay.onclick = toggleChatbot;
        document.body.appendChild(overlay);
    }
    
    // Add chatbot toggle button (WhatsApp style)
    if (!document.querySelector('.chatbot-toggle')) {
        const chatbotToggle = document.createElement('button');
        chatbotToggle.className = 'chatbot-toggle';
        chatbotToggle.innerHTML = '<i class="fas fa-comments"></i>';
        chatbotToggle.title = 'Chat with Assistant';
        chatbotToggle.onclick = toggleChatbot;
        document.body.appendChild(chatbotToggle);
    }
    
    // Add welcome bubble
    if (!document.querySelector('.welcome-bubble')) {
        const welcomeBubble = document.createElement('div');
        welcomeBubble.className = 'welcome-bubble';
        welcomeBubble.textContent = 'Chatbot Assistant - Click to chat!';
        document.body.appendChild(welcomeBubble);
        
        // Auto-hide welcome bubble after 8 seconds
        setTimeout(() => {
            welcomeBubble.classList.add('shrink');
        }, 8000);
    }
    
    // Add chatbot widget (WhatsApp style)
    if (!document.querySelector('.chatbot-widget')) {
        const chatbotWidget = document.createElement('div');
        chatbotWidget.className = 'chatbot-widget';
        chatbotWidget.innerHTML = `
            <div class="chatbot-header">
                <div class="chatbot-profile">
                    <div class="chatbot-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="chatbot-info">
                        <h4>Portfolio Assistant</h4>
                        <p>Online</p>
                    </div>
                </div>
                <div class="chatbot-actions">
                    <button onclick="toggleChatbot()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="chatbot-messages">
                <div class="bot-message">
                    👋 Hello! I'm Nhlonhlorhi's portfolio assistant. I can help you learn about his professional background and experience.
                    <div class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    
                    <div class="quick-questions">
                        <div class="quick-question" onclick="sendQuickQuestion('What is your experience?')">Experience</div>
                        <div class="quick-question" onclick="sendQuickQuestion('What are your skills?')">Skills</div>
                        <div class="quick-question" onclick="sendQuickQuestion('Tell me about your projects')">Projects</div>
                        <div class="quick-question" onclick="sendQuickQuestion('How to contact you?')">Contact</div>
                    </div>
                </div>
            </div>
            <div class="chatbot-input">
                <input type="text" placeholder="Type a message..." id="chatbotInput">
                <button onclick="sendMessage()" id="sendButton">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        `;
        document.body.appendChild(chatbotWidget);
        
        // Add enter key support
        const chatInput = document.getElementById('chatbotInput');
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });

    }

// Chatbot toggle logic
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotBox = document.getElementById("chatbotBox");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

chatbotToggle.addEventListener("click", () => {
    chatbotBox.style.display = "flex";
    chatbotToggle.style.display = "none";
});

closeChat.addEventListener("click", () => {
    chatbotBox.style.display = "none";
    chatbotToggle.style.display = "flex";
});

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const userText = chatInput.value.trim();
    if (!userText) return;

    const userMsg = document.createElement("div");
    userMsg.classList.add("message", "user-message");
    userMsg.textContent = userText;
    chatMessages.appendChild(userMsg);

    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate bot reply
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.classList.add("message", "bot-message");
        botMsg.textContent = "I'm thinking... 🤖";
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            botMsg.textContent = "Thanks for your message! I'll get back to you soon.";
        }, 800);
    }, 600);
}


// Service Modal Functionality
const serviceDetails = {
    'web-dev': {
        title: 'Custom Web Development',
        content: `
            <div class="service-detail">
                <h4>Professional Website Solutions</h4>
                <p>I create responsive, modern websites that work perfectly on all devices. Whether you need a simple business website or a complex e-commerce platform, I deliver solutions that drive results.</p>
                
                <div class="detail-features">
                    <h5>What's Included:</h5>
                    <ul>
                        <li>Custom design tailored to your brand</li>
                        <li>Mobile-responsive development</li>
                        <li>SEO optimization</li>
                        <li>Fast loading speeds</li>
                        <li>Security best practices</li>
                        <li>1 month free support</li>
                    </ul>
                </div>
                
                <div class="timeline">
                    <h5>Typical Timeline: 2-4 weeks</h5>
                </div>
            </div>
        `
    },
    'full-stack': {
        title: 'Full-Stack Applications',
        content: `
            <div class="service-detail">
                <h4>Complete Web Application Development</h4>
                <p>End-to-end web application development with robust backend systems and intuitive frontend interfaces. Perfect for businesses needing custom software solutions.</p>
                
                <div class="detail-features">
                    <h5>Featured Projects:</h5>
                    <div class="project-showcase">
                        <div class="project-item">
                            <strong>Task Management System</strong>
                            <p>Built with Laravel and Vue.js - features real-time updates and team collaboration</p>
                        </div>
                        <div class="project-item">
                            <strong>E-commerce Platform</strong>
                            <p>Custom online store with payment integration and inventory management</p>
                        </div>
                    </div>
                </div>
                
                <div class="technologies">
                    <h5>Technologies Used:</h5>
                    <div class="tech-stack">
                        <span class="tech-badge">Laravel</span>
                        <span class="tech-badge">Vue.js</span>
                        <span class="tech-badge">MySQL</span>
                        <span class="tech-badge">REST API</span>
                    </div>
                </div>
            </div>
        `
    },
    'microsoft': {
        title: 'Microsoft 365 Solutions',
        content: `
            <div class="service-detail">
                <h4>Microsoft 365 Setup & Migration</h4>
                <p>Professional Microsoft 365 deployment services to enhance your business productivity and collaboration.</p>
                
                <div class="detail-features">
                    <h5>Services Include:</h5>
                    <ul>
                        <li>Microsoft 365 subscription setup</li>
                        <li>Email migration from any platform</li>
                        <li>SharePoint site configuration</li>
                        <li>Microsoft Teams deployment</li>
                        <li>User training and documentation</li>
                        <li>Ongoing support plans available</li>
                    </ul>
                </div>
                
                <div class="benefits">
                    <h5>Business Benefits:</h5>
                    <ul>
                        <li>Improved team collaboration</li>
                        <li>Centralized document management</li>
                        <li>Enhanced security features</li>
                        <li>Scalable for business growth</li>
                    </ul>
                </div>
            </div>
        `
    },
    'automation': {
        title: 'Business Automation',
        content: `
            <div class="service-detail">
                <h4>Process Automation Solutions</h4>
                <p>Streamline your business operations with custom automation solutions that save time and reduce errors.</p>
                
                <div class="detail-features">
                    <h5>Automation Examples:</h5>
                    <ul>
                        <li>Data processing and reporting</li>
                        <li>Workflow automation</li>
                        <li>Custom chatbot development</li>
                        <li>API integration</li>
                        <li>Database synchronization</li>
                        <li>Custom script development</li>
                    </ul>
                </div>
                
                <div class="process">
                    <h5>My Approach:</h5>
                    <ol>
                        <li>Consultation to understand your needs</li>
                        <li>Process analysis and planning</li>
                        <li>Development and testing</li>
                        <li>Deployment and training</li>
                        <li>Ongoing support and maintenance</li>
                    </ol>
                </div>
            </div>
        `
    }
};

function showServiceModal(serviceId) {
    const service = serviceDetails[serviceId];
    if (service) {
        document.getElementById('modalServiceTitle').textContent = service.title;
        document.getElementById('modalServiceContent').innerHTML = service.content;
        document.getElementById('serviceModal').style.display = 'block';
    }
}

function closeServiceModal() {
    document.getElementById('serviceModal').style.display = 'none';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) {
        closeServiceModal();
    }
});
});

