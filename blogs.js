const blogs = {
    "jwt": {
        title: "JWT (JSON Web Tokens) - Complete Guide",
        content: `
            <h2>What is JWT?</h2>
            <p>JWT (JSON Web Token) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
            
            <h2>Why Use JWT?</h2>
            <p>JWTs are stateless, meaning the server doesn't need to store session information. This makes them ideal for modern web applications, microservices, and mobile apps. They are compact, URL-safe, and can be used across different programming languages.</p>
            
            <h2>Structure of JWT</h2>
            <p>A JWT consists of three parts separated by dots: Header, Payload, and Signature.</p>
            <ul>
                <li><strong>Header:</strong> Contains token type and signing algorithm (e.g., HS256 or RS256).</li>
                <li><strong>Payload:</strong> Contains claims (user data, permissions, expiration time).</li>
                <li><strong>Signature:</strong> Verifies that the token hasn't been tampered with.</li>
            </ul>
            
            <h2>How JWT Works</h2>
            <p>When a user logs in, the server creates a JWT and sends it to the client. The client stores it (usually in localStorage or cookies) and sends it with every subsequent request in the Authorization header. The server verifies the signature and extracts user information without querying a database.</p>
            
            <h2>Common Use Cases</h2>
            <ul>
                <li>Authentication and Authorization</li>
                <li>Single Sign-On (SSO)</li>
                <li>API Security</li>
                <li>Mobile App Authentication</li>
            </ul>
            
            <h2>Security Best Practices</h2>
            <p>Always use HTTPS, set short expiration times, never store sensitive data in payload, and use strong signing algorithms. JWT is widely used in modern authentication systems like OAuth 2.0 and OpenID Connect.</p>
        `
    },
    "mongoose": {
        title: "Mongoose - MongoDB ODM for Node.js",
        content: `
            <h2>What is Mongoose?</h2>
            <p>Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data including built-in type casting, validation, query building, and business logic hooks.</p>
            
            <h2>Why Use Mongoose?</h2>
            <p>MongoDB is schema-less by nature, which can be both powerful and problematic. Mongoose adds a layer of structure on top of MongoDB, making it easier to validate data, create relationships, and organize your code. It bridges the gap between MongoDB documents and JavaScript objects.</p>
            
            <h2>Core Features</h2>
            <ul>
                <li><strong>Schema Definition:</strong> Define the structure of documents with data types, validators, and defaults.</li>
                <li><strong>Models:</strong> Create constructor functions that interact with MongoDB collections.</li>
                <li><strong>Middleware (Hooks):</strong> Run functions before or after certain operations (e.g., encrypt password before saving).</li>
                <li><strong>Query Building:</strong> Chain methods to build complex MongoDB queries easily.</li>
                <li><strong>Population:</strong> Automatically replace document IDs with actual documents from other collections.</li>
            </ul>
            
            <h2>Basic Example</h2>
            <p>First, define a schema: const userSchema = new mongoose.Schema({ name: String, email: String }); Then create a model: const User = mongoose.model('User', userSchema); Finally, save data: const user = new User({ name: 'John', email: 'john@example.com' }); await user.save();</p>
            
            <h2>Popular Use Cases</h2>
            <p>Mongoose is widely used in MERN stack applications, REST APIs, GraphQL servers, and any Node.js application that needs structured data persistence with MongoDB.</p>
        `
    },
    "bcrypt": {
        title: "bcrypt - Password Hashing for Node.js",
        content: `
            <h2>What is bcrypt?</h2>
            <p>bcrypt is a password hashing function designed to be slow and computationally expensive, making it resistant to brute-force attacks. It's one of the most widely used libraries for securely storing passwords in Node.js applications.</p>
            
            <h2>Why Not Store Plain Passwords?</h2>
            <p>Storing passwords in plain text is extremely dangerous. If a database is compromised, all user passwords are exposed. Hashing transforms passwords into fixed-length strings that cannot be reversed. bcrypt adds a "salt" (random data) to each password, ensuring that identical passwords produce different hashes.</p>
            
            <h2>How bcrypt Works</h2>
            <ul>
                <li><strong>Salt Generation:</strong> bcrypt automatically generates a unique salt for each password.</li>
                <li><strong>Hashing:</strong> The password + salt is passed through the bcrypt algorithm multiple times (configurable rounds).</li>
                <li><strong>Comparison:</strong> When a user logs in, bcrypt hashes the provided password with the stored salt and compares it to the stored hash.</li>
            </ul>
            
            <h2>Why bcrypt is Secure</h2>
            <p>bcrypt is designed to be slow. With a cost factor of 10-12, hashing takes about 0.1-0.3 seconds. This slowdown makes brute-force attacks impractical. Attackers would need immense computational resources to crack even weak passwords.</p>
            
            <h2>Best Practices</h2>
            <ul>
                <li>Use cost factor 10-12 for production apps</li>
                <li>Never store raw passwords anywhere</li>
                <li>Always hash passwords before saving to database</li>
                <li>Use bcrypt.compare() for login verification</li>
            </ul>
            
            <h2>Example Usage</h2>
            <p>const bcrypt = require('bcrypt'); const saltRounds = 10; const hash = await bcrypt.hash(password, saltRounds); const isMatch = await bcrypt.compare(inputPassword, storedHash);</p>
        `
    },
    "serversiderendering": {
        title: "Server-Side Rendering (SSR) - Complete Guide",
        content: `
            <h2>What is Server-Side Rendering?</h2>
            <p>Server-Side Rendering (SSR) is a technique where the server generates the full HTML for a page and sends it to the client, rather than sending an empty HTML shell and letting JavaScript populate content. The browser receives a fully-rendered page, making it immediately visible to users.</p>
            
            <h2>How SSR Works</h2>
            <p>When a user requests a page, the server fetches necessary data from databases or APIs, builds the HTML with that data, and sends it as a complete document. The browser displays the content immediately, then "hydrates" it with interactivity using client-side JavaScript.</p>
            
            <h2>Advantages of SSR</h2>
            <ul>
                <li><strong>SEO Friendly:</strong> Search engines can crawl fully-rendered content easily.</li>
                <li><strong>Faster Initial Load:</strong> Users see content immediately without waiting for JavaScript to download and execute.</li>
                <li><strong>Better Performance on Slow Devices:</strong> Less client-side processing required.</li>
                <li><strong>Social Media Sharing:</strong> Open Graph tags work perfectly because HTML is fully rendered.</li>
            </ul>
            
            <h2>Disadvantages of SSR</h2>
            <ul>
                <li>Higher Server Load (generating HTML on every request)</li>
                <li>Slower Time-to-Interactive (JavaScript has to load after initial render)</li>
                <li>More Complex Caching Strategies</li>
            </ul>
            
            <h2>SSR Frameworks</h2>
            <p>Popular SSR frameworks include Next.js (React), Nuxt.js (Vue), SvelteKit, and traditional templating engines like EJS, Pug, and Handlebars. Even PHP and Ruby on Rails are inherently SSR by design.</p>
            
            <h2>When to Use SSR</h2>
            <p>SSR is ideal for SEO-critical applications like blogs, e-commerce sites, news portals, and marketing pages. For dashboards and web apps where SEO is less important, Client-Side Rendering (CSR) might be better.</p>
        `
    },
    "clientsiderendering": {
        title: "Client-Side Rendering (CSR) - Modern Web Approach",
        content: `
            <h2>What is Client-Side Rendering?</h2>
            <p>Client-Side Rendering (CSR) is a web development technique where the server sends a minimal HTML page (usually just a div root) and JavaScript bundles. The browser downloads the JavaScript, executes it, fetches data from APIs, and dynamically builds the user interface on the client side.</p>
            
            <h2>How CSR Works</h2>
            <p>When a user visits a CSR app, the server responds with an almost-empty HTML file containing script tags. The browser downloads the JavaScript bundle, initializes the framework (React, Vue, Angular), makes API calls to fetch data, and renders the UI. Navigation between pages doesn't require full page reloads — just data fetching and re-rendering.</p>
            
            <h2>Advantages of CSR</h2>
            <ul>
                <li><strong>Rich Interactions:</strong> Smooth, app-like experiences with fast subsequent navigations.</li>
                <li><strong>Reduced Server Load:</strong> Servers only serve static files and APIs — no HTML generation overhead.</li>
                <li><strong>Easier Development:</strong> Frontend and backend can be completely separate (decoupled).</li>
                <li><strong>Code Splitting:</strong> Load only the JavaScript needed for current page.</li>
            </ul>
            
            <h2>Disadvantages of CSR</h2>
            <ul>
                <li><strong>Poor Initial Load Performance:</strong> Users wait for JavaScript to download and execute before seeing content.</li>
                <li><strong>SEO Challenges:</strong> Search engines might not execute JavaScript, seeing only an empty page.</li>
                <li><strong>Larger Bundle Sizes:</strong> Full framework code and application code must be downloaded initially.</li>
            </ul>
            
            <h2>CSR Frameworks</h2>
            <p>Popular CSR frameworks include React (with create-react-app), Vue CLI, Angular, and Svelte (without SSR). These are often called Single Page Application (SPA) frameworks.</p>
            
            <h2>When to Use CSR</h2>
            <p>CSR is ideal for dashboards, admin panels, web apps behind login, internal tools, and any application where SEO isn't important. For public-facing content sites, consider SSR or SSG (Static Site Generation).</p>
        `
    },
    "mvc": {
        title: "MVC Architecture - Model-View-Controller Pattern",
        content: `
            <h2>What is MVC?</h2>
            <p>Model-View-Controller (MVC) is a software architectural pattern that separates an application into three interconnected components: Model (data and business logic), View (user interface), and Controller (handles input and coordinates). This separation helps manage complexity in large applications.</p>
            
            <h2>The Three Components</h2>
            
            <h3>Model (Data Layer)</h3>
            <p>The Model represents the application's data and business rules. It directly manages data, logic, and constraints. In web applications, models often represent database tables (e.g., User, Product). The model notifies observers (views) when data changes, but doesn't know about views or controllers.</p>
            
            <h3>View (Presentation Layer)</h3>
            <p>The View displays data to the user and sends user commands to the controller. Views are the visual elements (HTML, CSS, templates) that users interact with. A well-designed view contains no business logic — only presentation logic (loops, conditionals for displaying data).</p>
            
            <h3>Controller (Coordinator)</h3>
            <p>The Controller receives user input, decides which model(s) to use, and which view to render. It acts as an intermediary between Model and View. Controllers process requests, validate input, call model methods, and select the appropriate view for the response.</p>
            
            <h2>How MVC Works (Flow)</h2>
            <ol>
                <li>User interacts with View (clicks button, submits form)</li>
                <li>Controller handles the request, processes input</li>
                <li>Controller updates Model (save to database, fetch data)</li>
                <li>Model notifies Controller that data changed</li>
                <li>Controller selects appropriate View</li>
                <li>View displays updated data to user</li>
            </ol>
            
            <h2>MVC Frameworks</h2>
            <p>Popular MVC frameworks include Express.js (Node.js), Django (Python), Ruby on Rails, Laravel (PHP), ASP.NET Core (C#), and Spring MVC (Java). Most modern web frameworks implement MVC or similar patterns like MVVM.</p>
            
            <h2>Benefits of MVC</h2>
            <ul>
                <li><strong>Separation of Concerns:</strong> Each component has a specific responsibility</li>
                <li><strong>Parallel Development:</strong> Multiple developers can work on Model, View, and Controller simultaneously</li>
                <li><strong>Reusability:</strong> Models and Views can be reused across controllers</li>
                <li><strong>Testability:</strong> Components can be tested in isolation</li>
            </ul>
        `
    },
    "schema": {
        title: "Schema - Structuring Data in Databases",
        content: `
            <h2>What is a Schema?</h2>
            <p>A schema is a blueprint or structure that defines how data is organized, stored, and related within a database. It describes the shape of data — what fields exist, what data types they use, validation rules, default values, and relationships between different data entities.</p>
            
            <h2>Types of Schemas</h2>
            
            <h3>1. SQL Schema (Structured)</h3>
            <p>Relational databases (MySQL, PostgreSQL) require fixed schemas. You define tables, columns, data types, and constraints before inserting data. This ensures data integrity but makes changes difficult (requires migrations). Example: CREATE TABLE users (id INT, name VARCHAR(100), email VARCHAR(255) UNIQUE);</p>
            
            <h3>2. NoSQL Schema (Flexible)</h3>
            <p>MongoDB and other NoSQL databases are schema-less by default. Documents in the same collection can have different fields. However, in practice, developers often use ODM libraries like Mongoose to enforce an application-level schema for consistency.</p>
            
            <h2>Schema Components</h2>
            <ul>
                <li><strong>Fields/Properties:</strong> Individual pieces of data (e.g., username, age, email)</li>
                <li><strong>Data Types:</strong> String, Number, Boolean, Date, Array, Object, etc.</li>
                <li><strong>Validation Rules:</strong> Required fields, minimum/maximum values, regex patterns</li>
                <li><strong>Default Values:</strong> Automatic values when field isn't provided</li>
                <li><strong>Relationships:</strong> References to other collections (foreign keys, population)</li>
                <li><strong>Indexes:</strong> For faster query performance</li>
            </ul>
            
            <h2>Mongoose Schema Example</h2>
            <p>const userSchema = new mongoose.Schema({ name: { type: String, required: true }, email: { type: String, unique: true, lowercase: true }, age: { type: Number, min: 18 }, createdAt: { type: Date, default: Date.now } });</p>
            
            <h2>Why Schemas Matter</h2>
            <ul>
                <li><strong>Data Consistency:</strong> Prevents invalid data from entering the database</li>
                <li><strong>Documentation:</strong> Schema serves as living documentation</li>
                <li><strong>IDE Support:</strong> Autocomplete and type checking in code editors</li>
                <li><strong>Security:</strong> Prevents injection of unexpected fields</li>
            </ul>
            
            <h2>Schema Evolution</h2>
            <p>As applications grow, schemas change. SQL requires ALTER TABLE migrations. NoSQL can handle mixed schemas in the same collection, but you must handle versioning in application code. Tools like Mongoose's strict mode help manage schema changes gracefully.</p>
        `
    },
    "middlewares": {
        title: "Middleware - The Backbone of Express.js",
        content: `
            <h2>What are Middlewares?</h2>
            <p>Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function in the application's request-response cycle. They can execute code, modify request/response, end the request-response cycle, or call the next middleware.</p>
            
            <h2>How Middleware Works</h2>
            <p>In Express.js, middleware functions run sequentially. Each middleware can process the request, pass control to the next middleware using next(), or send a response and stop the chain. This creates a pipeline where every request flows through configured middleware.</p>
            
            <h2>Types of Middleware</h2>
            
            <h3>1. Application-Level Middleware</h3>
            <p>Bound to the app object using app.use() or app.METHOD(). Example: app.use(logger); app.get('/user', authMiddleware, getUserHandler);</p>
            
            <h3>2. Router-Level Middleware</h3>
            <p>Works the same as app-level but bound to an instance of express.Router(). Useful for grouping routes.</p>
            
            <h3>3. Built-in Middleware</h3>
            <p>Express provides built-in middleware like express.json() (parse JSON bodies), express.urlencoded() (parse form data), and express.static() (serve static files).</p>
            
            <h3>4. Third-Party Middleware</h3>
            <p>Popular npm packages: morgan (logging), cors (enable CORS), helmet (security headers), compression (gzip responses), rate-limit (prevent brute force).</p>
            
            <h3>5. Error-Handling Middleware</h3>
            <p>Special middleware with four parameters (err, req, res, next). Always placed at the end of middleware chain. Example: app.use((err, req, res, next) => { res.status(500).send('Something broke!'); });</p>
            
            <h2>Common Middleware Use Cases</h2>
            <ul>
                <li><strong>Authentication:</strong> Verify JWT tokens before granting access to routes</li>
                <li><strong>Logging:</strong> Record request details, response times</li>
                <li><strong>Validation:</strong> Check request body/params before processing</li>
                <li><strong>Compression:</strong> Gzip responses for faster network transfer</li>
                <li><strong>Rate Limiting:</strong> Prevent abuse by limiting requests per IP</li>
                <li><strong>CORS:</strong> Add Cross-Origin Resource Sharing headers</li>
            </ul>
            
            <h2>Custom Middleware Example</h2>
            <p>function requestLogger(req, res, next) { console.log(\`\${req.method} \${req.url} at \${new Date().toISOString()}\`); next(); } app.use(requestLogger);</p>
            
            <h2>Best Practices</h2>
            <ul>
                <li>Always call next() or send response — never both</li>
                <li>Order matters — place generic middleware before route-specific</li>
                <li>Put error-handling middleware at the end</li>
                <li>Keep middleware focused (single responsibility)</li>
            </ul>
        `
    }
};

module.exports = blogs;