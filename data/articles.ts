export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
    categoryColor: string;
    author: string;
}

export const articles: Article[] = [
    {
        slug: "what-is-oop",
        title: "Object Oriented Programming (OOP) Simplified",
        excerpt: "Learn the core pillars of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction with real-world examples.",
        content: `
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code. Data is in the form of fields (often known as attributes or properties), and code is in the form of procedures (often known as methods).

### The Four Pillars of OOP

1. **Encapsulation**: This is the practice of keeping fields within a class private, then providing access to them via public methods. It's a protective shield that prevents the data from being accessed by the code outside this shield.

2. **Inheritance**: This allows a class to inherit features (fields and methods) from another class. The class that inherits is called a subclass, and the class it inherits from is the superclass.

3. **Polymorphism**: This means "many forms". It allows objects of different classes to be treated as objects of a common superclass. This is particularly useful for building flexible and modular code.

4. **Abstraction**: This is the process of hiding the internal details of an application from the outer world. Abstraction is used to describe things in simple terms. It's used to create a boundary between the application and the client programs.

### Real World Example in Code

Here is how you might represent a simple banking system using OOP in JavaScript:

\`\`\`javascript
class BankAccount {
  #balance = 0; // Encapsulation: Private field

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(\`Deposited \${amount}. New balance: \${this.#balance}\`);
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      return amount;
    }
    console.log("Insufficient funds!");
  }
}
\`\`\`

### Benefits of the OOP Approach
Using OOP leads to code that is easier to understand, maintain, and extend. It allows for the creation of reusable components and reduces redundancy through inheritance.
        `,
        date: "Dec 15, 2024",
        readTime: "5 min read",
        category: "Concepts",
        categoryColor: "text-pink-400 bg-pink-400/10 border-pink-400/20",
        author: "Aadan Said"
    },
    {
        slug: "django-auth-system",
        title: "Building a Secure Auth System with Django",
        excerpt: "A comprehensive guide to implementing JWT authentication and permission-based access control in Django REST Framework.",
        content: `
Authentication is a critical part of almost any web application. In the modern era of decoupled frontends (like React/Next.js), we need a stateless way to manage user sessions. This is where JSON Web Tokens (JWT) shine.

### Setting Up Django REST Framework (DRF)

First, we need to configure our Django project to handle JWT tokens. We'll use the \`djangorestframework-simplejwt\` library.

\`\`\`python
# settings.py
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}
\`\`\`

### Creating the Login View

To allow users to log in, we need to provide them with a way to exchange their username and password for an access token.

1. **Obtain Token**: The user sends their credentials to a login endpoint.
2. **Verification**: Django verifies the credentials against the database.
3. **Issuance**: If valid, the server returns an \`access\` token (short-lived) and a \`refresh\` token (long-lived).

### Token Security and Cookies

For maximum security, it's often recommended to store tokens in \`HttpOnly\` cookies rather than local storage. This helps prevent Cross-Site Scripting (XSS) attacks.

- **HttpOnly**: Prevents JavaScript from accessing the cookie.
- **Secure**: Ensures the cookie is only sent over HTTPS.
- **SameSite**: Helps prevent CSRF attacks.

### Implementing Role-Based Access Control (RBAC)

Once authenticated, you can restrict access to specific views using permission classes. For example, some endpoints should only be accessible by the owner of the data or by an administrator.

\`\`\`python
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

class PrivateView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        return Response({"message": "Hello authenticated user!"})
\`\`\`
        `,
        date: "Nov 28, 2024",
        readTime: "8 min read",
        category: "Backend",
        categoryColor: "text-green-400 bg-green-400/10 border-green-400/20",
        author: "Aadan Said"
    },
    {
        slug: "nextjs-app-router",
        title: "Mastering the Next.js App Router",
        excerpt: "Navigate the new era of Next.js with Server Components, Streaming, and advanced data fetching techniques.",
        content: `
The App Router is the biggest change in Next.js history. It leverages React Server Components to simplify data fetching and improve performance by default.

### Why Server Components?

In the old "Pages" router, every component was a Client Component by default. This meant you had to send a lot of JavaScript to the browser. With Server Components:

- **Zero Bundle Size**: The logic for fetching data and rendering never leaves the server.
- **Direct Database Access**: You can query your database directly inside a component without creating an API endpoint first.
- **Security**: Sensitive keys and logic stay on the server.

### Rendering Strategy: The Waterfall

Next.js 13+ allows you to "stream" parts of your UI as they become ready. Instead of waiting for the whole page to load, you can wrap slower components in \`Suspense\`.

\`\`\`javascript
import { Suspense } from 'react';

export default function Page() {
  return (
    <section>
      <h1>My Portfolio</h1>
      <Suspense fallback={<p>Loading projects...</p>}>
        <ProjectList />
      </Suspense>
    </section>
  );
}
\`\`\`

### Data Fetching and Caching

The built-in \`fetch\` API in Next.js is extended to provide automatic caching and revalidation. You can control how long data stays fresh with the \`revalidate\` option.

- **Static Data**: Cached indefinitely by default.
- **Dynamic Data**: Fetched on every request using \`{ cache: 'no-store' }\`.
- **Incremental Static Regeneration (ISR)**: Revalidated every X seconds using \`{ next: { revalidate: 60 } }\`.

The App Router isn't just a new way to route; it's a foundation for building the next generation of high-performance web applications.
        `,
        date: "Oct 10, 2024",
        readTime: "6 min read",
        category: "Frontend",
        categoryColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
        author: "Aadan Said"
    }
];
