// const express = require("express");
// const blogs = require("./blogs");

// const app = express();
// const PORT = 5000;

// app.use(express.json()); 

// // API endpoint for Postman
// app.post("/api/blog", (req, res) => {
//     const topic = req.body.topic;
    
//     if (!topic) {
//         return res.json({ error: "Please provide topic name" });
//     }
    
//     const blog = blogs[topic.toLowerCase()];
    
//     if (!blog) {
//         return res.json({ error: "No blog found for this topic" });
//     }
    
//     res.json({
//         topic: topic,
//         title: blog.title,
//         content: blog.content
//     });
// });

// // Blog detail page with beautiful UI
// app.get("/blog/:topic", (req, res) => {
//     const topic = req.params.topic;
//     const blog = blogs[topic.toLowerCase()];
    
//     if (!blog) {
//         return res.send(`
//             <!DOCTYPE html>
//             <html>
//             <head>
//                 <title>Blog Not Found</title>
//                 <style>
//                     body {
//                         font-family: 'Poppins', sans-serif;
//                         background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//                         min-height: 100vh;
//                         display: flex;
//                         justify-content: center;
//                         align-items: center;
//                         margin: 0;
//                     }
//                     .error-card {
//                         background: white;
//                         padding: 50px;
//                         border-radius: 20px;
//                         text-align: center;
//                         box-shadow: 0 20px 60px rgba(0,0,0,0.3);
//                     }
//                     h1 { color: #764ba2; }
//                     a {
//                         display: inline-block;
//                         margin-top: 20px;
//                         padding: 10px 25px;
//                         background: linear-gradient(135deg, #667eea, #764ba2);
//                         color: white;
//                         text-decoration: none;
//                         border-radius: 25px;
//                     }
//                 </style>
//             </head>
//             <body>
//                 <div class="error-card">
//                     <h1>📖 Blog Not Found</h1>
//                     <p>No blog found for "<strong>${topic}</strong>"</p>
//                     <a href="/">← Back to Home</a>
//                 </div>
//             </body>
//             </html>
//         `);
//     }
    
//     res.send(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>${blog.title} | Web Dev Blog</title>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
//             <style>
//                 * {
//                     margin: 0;
//                     padding: 0;
//                     box-sizing: border-box;
//                 }
                
//                 body {
//                     font-family: 'Poppins', sans-serif;
//                     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//                     min-height: 100vh;
//                     padding: 40px 20px;
//                 }
                
//                 /* Animated Background */
//                 .bg-animation {
//                     position: fixed;
//                     top: 0;
//                     left: 0;
//                     width: 100%;
//                     height: 100%;
//                     z-index: -1;
//                     overflow: hidden;
//                 }
                
//                 .bg-animation .circle {
//                     position: absolute;
//                     background: rgba(255,255,255,0.1);
//                     border-radius: 50%;
//                     animation: float 20s infinite;
//                 }
                
//                 @keyframes float {
//                     0%, 100% { transform: translateY(0) rotate(0deg); }
//                     50% { transform: translateY(-100px) rotate(180deg); }
//                 }
                
//                 .container {
//                     max-width: 1000px;
//                     margin: 0 auto;
//                 }
                
//                 /* Glassmorphism Card */
//                 .blog-card {
//                     background: rgba(255, 255, 255, 0.95);
//                     backdrop-filter: blur(10px);
//                     border-radius: 30px;
//                     padding: 50px;
//                     box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
//                     animation: slideUp 0.6s ease;
//                 }
                
//                 @keyframes slideUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
                
//                 /* Header Section */
//                 .blog-header {
//                     text-align: center;
//                     margin-bottom: 40px;
//                     padding-bottom: 20px;
//                     border-bottom: 2px solid #e0e0e0;
//                 }
                
//                 .category-badge {
//                     display: inline-block;
//                     background: linear-gradient(135deg, #667eea, #764ba2);
//                     color: white;
//                     padding: 5px 15px;
//                     border-radius: 20px;
//                     font-size: 12px;
//                     font-weight: 500;
//                     margin-bottom: 20px;
//                 }
                
//                 h1 {
//                     font-size: 42px;
//                     background: linear-gradient(135deg, #667eea, #764ba2);
//                     -webkit-background-clip: text;
//                     -webkit-text-fill-color: transparent;
//                     background-clip: text;
//                     margin-bottom: 15px;
//                 }
                
//                 .blog-meta {
//                     color: #888;
//                     font-size: 14px;
//                 }
                
//                 .blog-meta i {
//                     margin: 0 5px;
//                 }
                
//                 /* Content Styling */
//                 .blog-content {
//                     line-height: 1.9;
//                     color: #2d3748;
//                 }
                
//                 .blog-content h2 {
//                     color: #667eea;
//                     margin: 30px 0 15px 0;
//                     font-size: 28px;
//                     border-left: 4px solid #667eea;
//                     padding-left: 15px;
//                 }
                
//                 .blog-content h3 {
//                     color: #764ba2;
//                     margin: 25px 0 10px 0;
//                     font-size: 22px;
//                 }
                
//                 .blog-content p {
//                     margin: 15px 0;
//                     font-size: 16px;
//                 }
                
//                 .blog-content ul, .blog-content ol {
//                     margin: 15px 0;
//                     padding-left: 30px;
//                 }
                
//                 .blog-content li {
//                     margin: 8px 0;
//                 }
                
//                 .blog-content code {
//                     background: #f0f0f0;
//                     padding: 3px 8px;
//                     border-radius: 6px;
//                     font-family: 'Courier New', monospace;
//                     font-size: 14px;
//                     color: #764ba2;
//                 }
                
//                 /* Highlight Box */
//                 .highlight-box {
//                     background: linear-gradient(135deg, #f5f0ff, #ede7f6);
//                     padding: 20px;
//                     border-radius: 15px;
//                     margin: 25px 0;
//                     border-left: 4px solid #764ba2;
//                 }
                
//                 /* Back Button */
//                 .back-btn {
//                     display: inline-flex;
//                     align-items: center;
//                     gap: 10px;
//                     background: linear-gradient(135deg, #667eea, #764ba2);
//                     color: white;
//                     padding: 12px 30px;
//                     border-radius: 40px;
//                     text-decoration: none;
//                     font-weight: 500;
//                     margin-top: 40px;
//                     transition: all 0.3s ease;
//                     box-shadow: 0 4px 15px rgba(102,126,234,0.4);
//                 }
                
//                 .back-btn:hover {
//                     transform: translateX(-5px);
//                     box-shadow: 0 6px 20px rgba(102,126,234,0.5);
//                 }
                
//                 /* Share Section */
//                 .share-section {
//                     margin-top: 40px;
//                     padding-top: 30px;
//                     border-top: 1px solid #e0e0e0;
//                     text-align: center;
//                 }
                
//                 .share-btn {
//                     display: inline-flex;
//                     align-items: center;
//                     gap: 8px;
//                     background: #1DA1F2;
//                     color: white;
//                     padding: 8px 20px;
//                     border-radius: 25px;
//                     text-decoration: none;
//                     margin: 0 5px;
//                     font-size: 14px;
//                 }
                
//                 .share-btn.linkedin {
//                     background: #0077b5;
//                 }
                
//                 /* Responsive */
//                 @media (max-width: 768px) {
//                     .blog-card { padding: 25px; }
//                     h1 { font-size: 28px; }
//                     .blog-content h2 { font-size: 22px; }
//                 }
//             </style>
//         </head>
//         <body>
//             <div class="bg-animation"></div>
            
//             <div class="container">
//                 <div class="blog-card">
//                     <div class="blog-header">
//                         <span class="category-badge">
//                             <i class="fas fa-newspaper"></i> BLOG POST
//                         </span>
//                         <h1>${blog.title}</h1>
//                         <div class="blog-meta">
//                             <i class="far fa-calendar-alt"></i> ${new Date().toLocaleDateString()}
//                             <i class="fas fa-clock"></i> 5 min read
//                             <i class="fas fa-tag"></i> Web Development
//                         </div>
//                     </div>
                    
//                     <div class="blog-content">
//                         ${blog.content}
//                     </div>
                    
//                     <div class="share-section">
//                         <p style="margin-bottom: 15px; color: #666;">📢 Share this article</p>
//                         <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}" class="share-btn">
//                             <i class="fab fa-twitter"></i> Twitter
//                         </a>
//                         <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('http://localhost:3000/blog/' + topic)}" class="share-btn linkedin">
//                             <i class="fab fa-linkedin"></i> LinkedIn
//                         </a>
//                     </div>
                    
//                     <div style="text-align: center;">
//                         <a href="/" class="back-btn">
//                             <i class="fas fa-arrow-left"></i> Back to Home
//                         </a>
//                     </div>
//                 </div>
//             </div>
            
//             <script>
//                 // Animated background circles
//                 const bgDiv = document.querySelector('.bg-animation');
//                 for(let i = 0; i < 15; i++) {
//                     const circle = document.createElement('div');
//                     circle.classList.add('circle');
//                     const size = Math.random() * 100 + 50;
//                     circle.style.width = size + 'px';
//                     circle.style.height = size + 'px';
//                     circle.style.left = Math.random() * 100 + '%';
//                     circle.style.top = Math.random() * 100 + '%';
//                     circle.style.animationDelay = Math.random() * 10 + 's';
//                     circle.style.animationDuration = Math.random() * 20 + 10 + 's';
//                     bgDiv.appendChild(circle);
//                 }
//             </script>
//         </body>
//         </html>
//     `);
// });

// // Home page with attractive grid UI
// app.get("/", (req, res) => {
//     const topics = [
//         { id: "jwt", icon: "fa-lock", color: "#e74c3c", name: "JWT" },
//         { id: "mongoose", icon: "fa-database", color: "#27ae60", name: "Mongoose" },
//         { id: "bcrypt", icon: "fa-shield-alt", color: "#3498db", name: "bcrypt" },
//         { id: "serversiderendering", icon: "fa-server", color: "#9b59b6", name: "SSR" },
//         { id: "clientsiderendering", icon: "fa-laptop-code", color: "#f39c12", name: "CSR" },
//         { id: "mvc", icon: "fa-layer-group", color: "#1abc9c", name: "MVC" },
//         { id: "schema", icon: "fa-table", color: "#e67e22", name: "Schema" },
//         { id: "middlewares", icon: "fa-plug", color: "#2c3e50", name: "Middleware" }
//     ];
    
//     let blogCards = "";
//     for (let topic of topics) {
//         const blog = blogs[topic.id];
//         if (blog) {
//             // Get first 120 characters of content (strip HTML tags)
//             const plainText = blog.content.replace(/<[^>]*>/g, '').substring(0, 120);
//             blogCards += `
//                 <div class="blog-card" data-aos="fade-up">
//                     <div class="card-icon" style="background: ${topic.color}20; color: ${topic.color}">
//                         <i class="fas ${topic.icon}"></i>
//                     </div>
//                     <h3>${blog.title}</h3>
//                     <p>${plainText}...</p>
//                     <div class="card-footer">
//                         <a href="/blog/${topic.id}" class="read-more">
//                             Read Article <i class="fas fa-arrow-right"></i>
//                         </a>
//                         <span class="reading-time"><i class="far fa-clock"></i> 5 min</span>
//                     </div>
//                 </div>
//             `;
//         }
//     }
    
//     res.send(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>Web Dev Blog | Modern Web Technologies</title>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
//             <style>
//                 * {
//                     margin: 0;
//                     padding: 0;
//                     box-sizing: border-box;
//                 }
                
//                 body {
//                     font-family: 'Poppins', sans-serif;
//                     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//                     min-height: 100vh;
//                     overflow-x: hidden;
//                 }
                
//                 /* Animated particles */
//                 .particles {
//                     position: fixed;
//                     top: 0;
//                     left: 0;
//                     width: 100%;
//                     height: 100%;
//                     z-index: 0;
//                 }
                
//                 .particle {
//                     position: absolute;
//                     background: rgba(255,255,255,0.15);
//                     border-radius: 50%;
//                     pointer-events: none;
//                     animation: floatParticle 15s infinite;
//                 }
                
//                 @keyframes floatParticle {
//                     0%, 100% { transform: translateY(0) translateX(0); }
//                     50% { transform: translateY(-50px) translateX(30px); }
//                 }
                
//                 /* Navbar */
//                 .navbar {
//                     position: relative;
//                     z-index: 2;
//                     background: rgba(255,255,255,0.1);
//                     backdrop-filter: blur(10px);
//                     padding: 20px 40px;
//                     display: flex;
//                     justify-content: space-between;
//                     align-items: center;
//                     flex-wrap: wrap;
//                     gap: 20px;
//                 }
                
//                 .logo h2 {
//                     color: white;
//                     font-size: 28px;
//                 }
                
//                 .logo span {
//                     background: linear-gradient(135deg, #FFD700, #FFA500);
//                     -webkit-background-clip: text;
//                     -webkit-text-fill-color: transparent;
//                 }
                
//                 .nav-links {
//                     display: flex;
//                     gap: 25px;
//                 }
                
//                 .nav-links a {
//                     color: white;
//                     text-decoration: none;
//                     font-weight: 500;
//                     transition: 0.3s;
//                 }
                
//                 .nav-links a:hover {
//                     color: #FFD700;
//                 }
                
//                 /* Hero Section */
//                 .hero {
//                     position: relative;
//                     z-index: 2;
//                     text-align: center;
//                     padding: 80px 20px 60px;
//                     color: white;
//                 }
                
//                 .hero h1 {
//                     font-size: 56px;
//                     font-weight: 800;
//                     margin-bottom: 20px;
//                     animation: fadeInDown 0.8s ease;
//                 }
                
//                 .hero .highlight {
//                     background: linear-gradient(135deg, #FFD700, #FFA500);
//                     -webkit-background-clip: text;
//                     -webkit-text-fill-color: transparent;
//                 }
                
//                 .hero p {
//                     font-size: 20px;
//                     opacity: 0.9;
//                     margin-bottom: 30px;
//                     animation: fadeInUp 0.8s ease;
//                 }
                
//                 .hero-stats {
//                     display: flex;
//                     justify-content: center;
//                     gap: 50px;
//                     margin-top: 40px;
//                 }
                
//                 .stat {
//                     text-align: center;
//                 }
                
//                 .stat h3 {
//                     font-size: 36px;
//                     font-weight: 800;
//                 }
                
//                 .stat p {
//                     font-size: 14px;
//                     margin: 0;
//                 }
                
//                 @keyframes fadeInDown {
//                     from { opacity: 0; transform: translateY(-30px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }
                
//                 @keyframes fadeInUp {
//                     from { opacity: 0; transform: translateY(30px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }
                
//                 /* Container */
//                 .container {
//                     position: relative;
//                     z-index: 2;
//                     max-width: 1300px;
//                     margin: 0 auto;
//                     padding: 40px 20px;
//                 }
                
//                 /* Section Title */
//                 .section-title {
//                     text-align: center;
//                     color: white;
//                     margin-bottom: 50px;
//                 }
                
//                 .section-title h2 {
//                     font-size: 36px;
//                     margin-bottom: 15px;
//                 }
                
//                 .section-title p {
//                     opacity: 0.9;
//                 }
                
//                 /* Blog Grid */
//                 .blog-grid {
//                     display: grid;
//                     grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
//                     gap: 30px;
//                 }
                
//                 .blog-card {
//                     background: rgba(255,255,255,0.95);
//                     border-radius: 24px;
//                     padding: 30px;
//                     transition: all 0.4s ease;
//                     cursor: pointer;
//                     animation: fadeInUp 0.6s ease;
//                     animation-fill-mode: both;
//                 }
                
//                 .blog-card:hover {
//                     transform: translateY(-10px);
//                     box-shadow: 0 30px 50px rgba(0,0,0,0.3);
//                 }
                
//                 .card-icon {
//                     width: 60px;
//                     height: 60px;
//                     border-radius: 18px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     font-size: 28px;
//                     margin-bottom: 20px;
//                 }
                
//                 .blog-card h3 {
//                     font-size: 22px;
//                     color: #333;
//                     margin-bottom: 15px;
//                     line-height: 1.4;
//                 }
                
//                 .blog-card p {
//                     color: #666;
//                     line-height: 1.6;
//                     margin-bottom: 20px;
//                 }
                
//                 .card-footer {
//                     display: flex;
//                     justify-content: space-between;
//                     align-items: center;
//                 }
                
//                 .read-more {
//                     color: #667eea;
//                     text-decoration: none;
//                     font-weight: 600;
//                     transition: 0.3s;
//                 }
                
//                 .read-more:hover {
//                     gap: 10px;
//                     color: #764ba2;
//                 }
                
//                 .read-more i {
//                     transition: 0.3s;
//                 }
                
//                 .read-more:hover i {
//                     transform: translateX(5px);
//                 }
                
//                 .reading-time {
//                     color: #999;
//                     font-size: 13px;
//                 }
                
//                 /* Postman Section */
//                 .postman-card {
//                     background: rgba(255,255,255,0.95);
//                     border-radius: 24px;
//                     padding: 40px;
//                     margin-top: 60px;
//                 }
                
//                 .postman-header {
//                     display: flex;
//                     align-items: center;
//                     gap: 15px;
//                     margin-bottom: 25px;
//                 }
                
//                 .postman-icon {
//                     width: 50px;
//                     height: 50px;
//                     background: linear-gradient(135deg, #FF6C37, #FF9A5A);
//                     border-radius: 15px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     font-size: 24px;
//                     color: white;
//                 }
                
//                 .code-block {
//                     background: #1e1e1e;
//                     border-radius: 12px;
//                     padding: 20px;
//                     margin: 20px 0;
//                 }
                
//                 .code-block code {
//                     color: #d4d4d4;
//                     font-family: 'Courier New', monospace;
//                 }
                
//                 .topic-badges {
//                     display: flex;
//                     flex-wrap: wrap;
//                     gap: 10px;
//                     margin-top: 20px;
//                 }
                
//                 .topic-badge {
//                     background: linear-gradient(135deg, #667eea20, #764ba220);
//                     padding: 5px 15px;
//                     border-radius: 20px;
//                     font-size: 13px;
//                     color: #764ba2;
//                 }
                
//                 /* Footer */
//                 .footer {
//                     position: relative;
//                     z-index: 2;
//                     text-align: center;
//                     padding: 30px;
//                     color: white;
//                     opacity: 0.8;
//                 }
                
//                 @media (max-width: 768px) {
//                     .navbar { flex-direction: column; text-align: center; }
//                     .hero h1 { font-size: 36px; }
//                     .hero-stats { flex-direction: column; gap: 20px; }
//                     .blog-grid { grid-template-columns: 1fr; }
//                 }
//             </style>
//         </head>
//         <body>
//             <div class="particles" id="particles"></div>
            
//             <nav class="navbar">
//                 <div class="logo">
//                     <h2>WebDev<span>Blog</span></h2>
//                 </div>
                
//             </nav>
            
//             <section class="hero">
//                 <h1>Explore <span class="highlight">Modern Web</span> Technologies</h1>
//                 <p>Deep dives into JWT, MongoDB, Middlewares, and more.</p>
//                 <div class="hero-stats">
//                     <div class="stat">
//                         <h3>8+</h3>
//                         <p>Articles</p>
//                     </div>
//                     <div class="stat">
//                         <h3>250+</h3>
//                         <p>Words Each</p>
//                     </div>
//                     <div class="stat">
//                         <h3>24/7</h3>
//                         <p>Available</p>
//                     </div>
//                 </div>
//             </section>
            
//             <div class="container">
//                 <div class="section-title">
//                     <h2>📖 Featured Articles</h2>
//                     <p>Hand-picked topics to master backend development</p>
//                 </div>
                
//                 <div class="blog-grid">
//                     ${blogCards}
//                 </div>
                
//                 <div class="postman-card">
//                     <div class="postman-header">
//                         <div class="postman-icon">
//                             <i class="fas fa-flask"></i>
//                         </div>
//                         <div>
//                             <h3>📮 API Access for Teacher</h3>
//                             <p>Test blog content using Postman</p>
//                         </div>
//                     </div>
                    
//                     <div class="code-block">
//                         <code>
//                             POST http://localhost:3000/api/blog<br>
//                             Content-Type: application/json<br><br>
//                             {<br>
//                             &nbsp;&nbsp;"topic": "jwt"<br>
//                             }
//                         </code>
//                     </div>
                    
//                     <p><strong>Available topics:</strong></p>
//                     <div class="topic-badges">
//                         <span class="topic-badge">jwt</span>
//                         <span class="topic-badge">mongoose</span>
//                         <span class="topic-badge">bcrypt</span>
//                         <span class="topic-badge">serversiderendering</span>
//                         <span class="topic-badge">clientsiderendering</span>
//                         <span class="topic-badge">mvc</span>
//                         <span class="topic-badge">schema</span>
//                         <span class="topic-badge">middlewares</span>
//                     </div>
//                 </div>
//             </div>
            
//             <footer class="footer">
//                 <p>© 2024 WebDev Blog | Built with Express.js & ❤️</p>
//             </footer>
            
//             <script>
//                 // Create animated particles
//                 const particlesDiv = document.getElementById('particles');
//                 for(let i = 0; i < 30; i++) {
//                     const particle = document.createElement('div');
//                     particle.classList.add('particle');
//                     const size = Math.random() * 80 + 20;
//                     particle.style.width = size + 'px';
//                     particle.style.height = size + 'px';
//                     particle.style.left = Math.random() * 100 + '%';
//                     particle.style.top = Math.random() * 100 + '%';
//                     particle.style.animationDelay = Math.random() * 10 + 's';
//                     particle.style.animationDuration = Math.random() * 20 + 10 + 's';
//                     particlesDiv.appendChild(particle);
//                 }
                
//                 // Add animation delays to cards
//                 const cards = document.querySelectorAll('.blog-card');
//                 cards.forEach((card, index) => {
//                     card.style.animationDelay = (index * 0.1) + 's';
//                 });
//             </script>
//         </body>
//         </html>
//     `);
// });



// app.listen(PORT, () => {
//     console.log(`✅ Server running on port ${PORT}`);
//     console.log(`🌐 Website: http://localhost:${PORT}`);
//     console.log(`📮 Postman: POST to http://localhost:${PORT}/api/blog`);
// });



const express = require("express");
const cors = require("cors");  // ✅ CORS added
const blogs = require("./blogs");

const app = express();
const PORT = process.env.PORT || 5000;  // ✅ Railway ke liye dynamic port

app.use(cors());  // ✅ CORS enable
app.use(express.json());

// API endpoint for Postman
app.post("/api/blog", (req, res) => {
    const topic = req.body.topic;
    
    if (!topic) {
        return res.json({ error: "Please provide topic name" });
    }
    
    const blog = blogs[topic.toLowerCase()];
    
    if (!blog) {
        return res.json({ error: "No blog found for this topic" });
    }
    
    res.json({
        topic: topic,
        title: blog.title,
        content: blog.content
    });
});

// Blog detail page with beautiful UI
app.get("/blog/:topic", (req, res) => {
    const topic = req.params.topic;
    const blog = blogs[topic.toLowerCase()];
    
    if (!blog) {
        return res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Blog Not Found</title>
                <style>
                    body {
                        font-family: 'Poppins', sans-serif;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        min-height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0;
                    }
                    .error-card {
                        background: white;
                        padding: 50px;
                        border-radius: 20px;
                        text-align: center;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    }
                    h1 { color: #764ba2; }
                    a {
                        display: inline-block;
                        margin-top: 20px;
                        padding: 10px 25px;
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        color: white;
                        text-decoration: none;
                        border-radius: 25px;
                    }
                </style>
            </head>
            <body>
                <div class="error-card">
                    <h1>📖 Blog Not Found</h1>
                    <p>No blog found for "<strong>${topic}</strong>"</p>
                    <a href="/">← Back to Home</a>
                </div>
            </body>
            </html>
        `);
    }
    
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${blog.title} | Web Dev Blog</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Poppins', sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    padding: 40px 20px;
                }
                
                .bg-animation {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    overflow: hidden;
                }
                
                .bg-animation .circle {
                    position: absolute;
                    background: rgba(255,255,255,0.1);
                    border-radius: 50%;
                    animation: float 20s infinite;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-100px) rotate(180deg); }
                }
                
                .container {
                    max-width: 1000px;
                    margin: 0 auto;
                }
                
                .blog-card {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-radius: 30px;
                    padding: 50px;
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
                    animation: slideUp 0.6s ease;
                }
                
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .blog-header {
                    text-align: center;
                    margin-bottom: 40px;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #e0e0e0;
                }
                
                .category-badge {
                    display: inline-block;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 500;
                    margin-bottom: 20px;
                }
                
                h1 {
                    font-size: 42px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 15px;
                }
                
                .blog-meta {
                    color: #888;
                    font-size: 14px;
                }
                
                .blog-meta i {
                    margin: 0 5px;
                }
                
                .blog-content {
                    line-height: 1.9;
                    color: #2d3748;
                }
                
                .blog-content h2 {
                    color: #667eea;
                    margin: 30px 0 15px 0;
                    font-size: 28px;
                    border-left: 4px solid #667eea;
                    padding-left: 15px;
                }
                
                .blog-content h3 {
                    color: #764ba2;
                    margin: 25px 0 10px 0;
                    font-size: 22px;
                }
                
                .blog-content p {
                    margin: 15px 0;
                    font-size: 16px;
                }
                
                .blog-content ul, .blog-content ol {
                    margin: 15px 0;
                    padding-left: 30px;
                }
                
                .blog-content li {
                    margin: 8px 0;
                }
                
                .blog-content code {
                    background: #f0f0f0;
                    padding: 3px 8px;
                    border-radius: 6px;
                    font-family: 'Courier New', monospace;
                    font-size: 14px;
                    color: #764ba2;
                }
                
                .highlight-box {
                    background: linear-gradient(135deg, #f5f0ff, #ede7f6);
                    padding: 20px;
                    border-radius: 15px;
                    margin: 25px 0;
                    border-left: 4px solid #764ba2;
                }
                
                .back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 12px 30px;
                    border-radius: 40px;
                    text-decoration: none;
                    font-weight: 500;
                    margin-top: 40px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(102,126,234,0.4);
                }
                
                .back-btn:hover {
                    transform: translateX(-5px);
                    box-shadow: 0 6px 20px rgba(102,126,234,0.5);
                }
                
                .share-section {
                    margin-top: 40px;
                    padding-top: 30px;
                    border-top: 1px solid #e0e0e0;
                    text-align: center;
                }
                
                .share-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #1DA1F2;
                    color: white;
                    padding: 8px 20px;
                    border-radius: 25px;
                    text-decoration: none;
                    margin: 0 5px;
                    font-size: 14px;
                }
                
                .share-btn.linkedin {
                    background: #0077b5;
                }
                
                @media (max-width: 768px) {
                    .blog-card { padding: 25px; }
                    h1 { font-size: 28px; }
                    .blog-content h2 { font-size: 22px; }
                }
            </style>
        </head>
        <body>
            <div class="bg-animation"></div>
            <div class="container">
                <div class="blog-card">
                    <div class="blog-header">
                        <span class="category-badge">
                            <i class="fas fa-newspaper"></i> BLOG POST
                        </span>
                        <h1>${blog.title}</h1>
                        <div class="blog-meta">
                            <i class="far fa-calendar-alt"></i> ${new Date().toLocaleDateString()}
                            <i class="fas fa-clock"></i> 5 min read
                            <i class="fas fa-tag"></i> Web Development
                        </div>
                    </div>
                    <div class="blog-content">
                        ${blog.content}
                    </div>
                    <div class="share-section">
                        <p style="margin-bottom: 15px; color: #666;">📢 Share this article</p>
                        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}" class="share-btn">
                            <i class="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('http://localhost:5000/blog/' + topic)}" class="share-btn linkedin">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                    <div style="text-align: center;">
                        <a href="/" class="back-btn">
                            <i class="fas fa-arrow-left"></i> Back to Home
                        </a>
                    </div>
                </div>
            </div>
            <script>
                const bgDiv = document.querySelector('.bg-animation');
                for(let i = 0; i < 15; i++) {
                    const circle = document.createElement('div');
                    circle.classList.add('circle');
                    const size = Math.random() * 100 + 50;
                    circle.style.width = size + 'px';
                    circle.style.height = size + 'px';
                    circle.style.left = Math.random() * 100 + '%';
                    circle.style.top = Math.random() * 100 + '%';
                    circle.style.animationDelay = Math.random() * 10 + 's';
                    circle.style.animationDuration = Math.random() * 20 + 10 + 's';
                    bgDiv.appendChild(circle);
                }
            </script>
        </body>
        </html>
    `);
});

// Home page with attractive grid UI
app.get("/", (req, res) => {
    const topics = [
        { id: "jwt", icon: "fa-lock", color: "#e74c3c", name: "JWT" },
        { id: "mongoose", icon: "fa-database", color: "#27ae60", name: "Mongoose" },
        { id: "bcrypt", icon: "fa-shield-alt", color: "#3498db", name: "bcrypt" },
        { id: "serversiderendering", icon: "fa-server", color: "#9b59b6", name: "SSR" },
        { id: "clientsiderendering", icon: "fa-laptop-code", color: "#f39c12", name: "CSR" },
        { id: "mvc", icon: "fa-layer-group", color: "#1abc9c", name: "MVC" },
        { id: "schema", icon: "fa-table", color: "#e67e22", name: "Schema" },
        { id: "middlewares", icon: "fa-plug", color: "#2c3e50", name: "Middleware" }
    ];
    
    let blogCards = "";
    for (let topic of topics) {
        const blog = blogs[topic.id];
        if (blog) {
            const plainText = blog.content.replace(/<[^>]*>/g, '').substring(0, 120);
            blogCards += `
                <div class="blog-card">
                    <div class="card-icon" style="background: ${topic.color}20; color: ${topic.color}">
                        <i class="fas ${topic.icon}"></i>
                    </div>
                    <h3>${blog.title}</h3>
                    <p>${plainText}...</p>
                    <div class="card-footer">
                        <a href="/blog/${topic.id}" class="read-more">
                            Read Article <i class="fas fa-arrow-right"></i>
                        </a>
                        <span class="reading-time"><i class="far fa-clock"></i> 5 min</span>
                    </div>
                </div>
            `;
        }
    }
    
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Web Dev Blog | Modern Web Technologies</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Poppins', sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    overflow-x: hidden;
                }
                
                .particles {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                }
                
                .particle {
                    position: absolute;
                    background: rgba(255,255,255,0.15);
                    border-radius: 50%;
                    pointer-events: none;
                    animation: floatParticle 15s infinite;
                }
                
                @keyframes floatParticle {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-50px) translateX(30px); }
                }
                
                .navbar {
                    position: relative;
                    z-index: 2;
                    background: rgba(255,255,255,0.1);
                    backdrop-filter: blur(10px);
                    padding: 20px 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                
                .logo h2 {
                    color: white;
                    font-size: 28px;
                }
                
                .logo span {
                    background: linear-gradient(135deg, #FFD700, #FFA500);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .hero {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    padding: 80px 20px 60px;
                    color: white;
                }
                
                .hero h1 {
                    font-size: 56px;
                    font-weight: 800;
                    margin-bottom: 20px;
                    animation: fadeInDown 0.8s ease;
                }
                
                .hero .highlight {
                    background: linear-gradient(135deg, #FFD700, #FFA500);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .hero p {
                    font-size: 20px;
                    opacity: 0.9;
                    margin-bottom: 30px;
                    animation: fadeInUp 0.8s ease;
                }
                
                .hero-stats {
                    display: flex;
                    justify-content: center;
                    gap: 50px;
                    margin-top: 40px;
                }
                
                .stat {
                    text-align: center;
                }
                
                .stat h3 {
                    font-size: 36px;
                    font-weight: 800;
                }
                
                .stat p {
                    font-size: 14px;
                    margin: 0;
                }
                
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .container {
                    position: relative;
                    z-index: 2;
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 40px 20px;
                }
                
                .section-title {
                    text-align: center;
                    color: white;
                    margin-bottom: 50px;
                }
                
                .section-title h2 {
                    font-size: 36px;
                    margin-bottom: 15px;
                }
                
                .section-title p {
                    opacity: 0.9;
                }
                
                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
                    gap: 30px;
                }
                
                .blog-card {
                    background: rgba(255,255,255,0.95);
                    border-radius: 24px;
                    padding: 30px;
                    transition: all 0.4s ease;
                    cursor: pointer;
                    animation: fadeInUp 0.6s ease;
                    animation-fill-mode: both;
                }
                
                .blog-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 50px rgba(0,0,0,0.3);
                }
                
                .card-icon {
                    width: 60px;
                    height: 60px;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                    margin-bottom: 20px;
                }
                
                .blog-card h3 {
                    font-size: 22px;
                    color: #333;
                    margin-bottom: 15px;
                    line-height: 1.4;
                }
                
                .blog-card p {
                    color: #666;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }
                
                .card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .read-more {
                    color: #667eea;
                    text-decoration: none;
                    font-weight: 600;
                    transition: 0.3s;
                }
                
                .read-more:hover {
                    color: #764ba2;
                }
                
                .read-more i {
                    transition: 0.3s;
                }
                
                .read-more:hover i {
                    transform: translateX(5px);
                }
                
                .reading-time {
                    color: #999;
                    font-size: 13px;
                }
                
                .postman-card {
                    background: rgba(255,255,255,0.95);
                    border-radius: 24px;
                    padding: 40px;
                    margin-top: 60px;
                }
                
                .postman-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 25px;
                }
                
                .postman-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #FF6C37, #FF9A5A);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    color: white;
                }
                
                .code-block {
                    background: #1e1e1e;
                    border-radius: 12px;
                    padding: 20px;
                    margin: 20px 0;
                }
                
                .code-block code {
                    color: #d4d4d4;
                    font-family: 'Courier New', monospace;
                }
                
                .topic-badges {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 20px;
                }
                
                .topic-badge {
                    background: linear-gradient(135deg, #667eea20, #764ba220);
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-size: 13px;
                    color: #764ba2;
                }
                
                .footer {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    padding: 30px;
                    color: white;
                    opacity: 0.8;
                }
                
                @media (max-width: 768px) {
                    .navbar { flex-direction: column; text-align: center; }
                    .hero h1 { font-size: 36px; }
                    .hero-stats { flex-direction: column; gap: 20px; }
                    .blog-grid { grid-template-columns: 1fr; }
                }
            </style>
        </head>
        <body>
            <div class="particles" id="particles"></div>
            <nav class="navbar">
                <div class="logo">
                    <h2>WebDev<span>Blog</span></h2>
                </div>
            </nav>
            <section class="hero">
                <h1>Explore <span class="highlight">Modern Web</span> Technologies</h1>
                <p>Deep dives into JWT, MongoDB, Middlewares, and more.</p>
                <div class="hero-stats">
                    <div class="stat">
                        <h3>8+</h3>
                        <p>Articles</p>
                    </div>
                    <div class="stat">
                        <h3>250+</h3>
                        <p>Words Each</p>
                    </div>
                    <div class="stat">
                        <h3>24/7</h3>
                        <p>Available</p>
                    </div>
                </div>
            </section>
            <div class="container">
                <div class="section-title">
                    <h2>📖 Featured Articles</h2>
                    <p>Hand-picked topics to master backend development</p>
                </div>
                <div class="blog-grid">
                    ${blogCards}
                </div>
                <div class="postman-card">
                    <div class="postman-header">
                        <div class="postman-icon">
                            <i class="fas fa-flask"></i>
                        </div>
                        <div>
                            <h3>📮 API Access for Teacher</h3>
                            <p>Test blog content using Postman</p>
                        </div>
                    </div>
                    <div class="code-block">
                        <code>
                            POST https://your-railway-app.up.railway.app/api/blog<br>
                            Content-Type: application/json<br><br>
                            {<br>
                            &nbsp;&nbsp;"topic": "jwt"<br>
                            }
                        </code>
                    </div>
                    <p><strong>Available topics:</strong></p>
                    <div class="topic-badges">
                        <span class="topic-badge">jwt</span>
                        <span class="topic-badge">mongoose</span>
                        <span class="topic-badge">bcrypt</span>
                        <span class="topic-badge">serversiderendering</span>
                        <span class="topic-badge">clientsiderendering</span>
                        <span class="topic-badge">mvc</span>
                        <span class="topic-badge">schema</span>
                        <span class="topic-badge">middlewares</span>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <p>© 2024 WebDev Blog | Built with Express.js & ❤️</p>
            </footer>
            <script>
                const particlesDiv = document.getElementById('particles');
                for(let i = 0; i < 30; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    const size = Math.random() * 80 + 20;
                    particle.style.width = size + 'px';
                    particle.style.height = size + 'px';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = Math.random() * 100 + '%';
                    particle.style.animationDelay = Math.random() * 10 + 's';
                    particle.style.animationDuration = Math.random() * 20 + 10 + 's';
                    particlesDiv.appendChild(particle);
                }
                const cards = document.querySelectorAll('.blog-card');
                cards.forEach((card, index) => {
                    card.style.animationDelay = (index * 0.1) + 's';
                });
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`🌐 Website: http://localhost:${PORT}`);
    console.log(`📮 Postman: POST to http://localhost:${PORT}/api/blog`);
});