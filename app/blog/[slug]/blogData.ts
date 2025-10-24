"use client"

// Sample blog data - in a real app, this would come from a database
export const blogData = [
  {
    id: "1",
    title: "Building Performant React Applications",
    excerpt: "Learn how to optimize your React applications for better performance and user experience.",
    content: `
      <p>React has become one of the most popular JavaScript libraries for building user interfaces. However, as applications grow in complexity, performance can become an issue. In this article, we'll explore various techniques to optimize your React applications for better performance.</p>
      
      <h2>1. Use React.memo for Component Memoization</h2>
      <p>React.memo is a higher-order component that memoizes your component, preventing unnecessary re-renders when the props haven't changed.</p>
      
      <pre><code>
      const MyComponent = React.memo(function MyComponent(props) {
        // Your component logic
      });
      </code></pre>
      
      <h2>2. Virtualize Long Lists</h2>
      <p>When rendering long lists, consider using virtualization libraries like react-window or react-virtualized to only render items that are currently visible in the viewport.</p>
      
      <h2>3. Code Splitting with React.lazy</h2>
      <p>Split your code into smaller chunks and load them on demand using React.lazy and Suspense.</p>
      
      <pre><code>
      const LazyComponent = React.lazy(() => import('./LazyComponent'));
      
      function MyComponent() {
        return (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </React.Suspense>
        );
      }
      </code></pre>
      
      <h2>4. Use the useCallback Hook</h2>
      <p>The useCallback hook can be used to memoize functions, preventing them from being recreated on every render.</p>
      
      <pre><code>
      const memoizedCallback = useCallback(
        () => {
          doSomething(a, b);
        },
        [a, b],
      );
      </code></pre>
      
      <h2>5. Optimize Context API Usage</h2>
      <p>When using the Context API, structure your context providers to minimize re-renders of components that consume the context.</p>
      
      <h2>Conclusion</h2>
      
      <p>By implementing these optimization techniques, you can significantly improve the performance of your React applications. Remember that premature optimization is the root of all evil, so make sure to measure performance before and after applying these techniques to ensure they're actually beneficial for your specific use case.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    date: "Mar 15, 2023",
    readTime: "8 min read",
    tags: ["React", "Performance", "Web Development"],
    slug: "building-performant-react-applications",
  },
  {
    id: "2",
    title: "Getting Started with Next.js and TypeScript",
    excerpt: "A comprehensive guide to setting up a new project with Next.js and TypeScript.",
    content: `
      <p>Next.js and TypeScript are a powerful combination for building modern web applications. In this guide, we'll walk through setting up a new project with Next.js and TypeScript from scratch.</p>
      
      <h2>Prerequisites</h2>
      <p>Before we begin, make sure you have Node.js and npm installed on your machine.</p>
      
      <h2>Creating a New Project</h2>
      <p>The easiest way to create a new Next.js project with TypeScript is to use the create-next-app command:</p>
      
      <pre><code>
      npx create-next-app@latest my-app --typescript
      cd my-app
      </code></pre>
      
      <h2>Project Structure</h2>
      <p>Let's take a look at the project structure that was created:</p>
      
      <ul>
        <li><strong>pages/</strong>: Contains your application's pages</li>
        <li><strong>public/</strong>: Static assets like images</li>
        <li><strong>styles/</strong>: CSS files</li>
        <li><strong>next.config.js</strong>: Next.js configuration</li>
        <li><strong>tsconfig.json</strong>: TypeScript configuration</li>
      </ul>
      
      <h2>Creating Your First Component</h2>
      <p>Let's create a simple TypeScript component:</p>
      
      <pre><code>
      // components/Button.tsx
      import React from 'react';
      
      interface ButtonProps {
        text: string;
        onClick?: () => void;
      }
      
      const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
        return (
          <button onClick={onClick} className="btn">
            {text}
          </button>
        );
      };
      
      export default Button;
      </code></pre>
      
      <h2>Using the Component</h2>
      <p>Now you can use this component in your pages:</p>
      
      <pre><code>
      // pages/index.tsx
      import Button from '../components/Button';
      
      export default function Home() {
        return (
          <div>
            <h1>Welcome to Next.js with TypeScript</h1>
            <Button text="Click me" onClick={() => alert('Button clicked!')} />
          </div>
        );
      }
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>You've now set up a Next.js project with TypeScript and created your first typed component. This is just the beginning of what you can do with this powerful combination. As you continue to build your application, you'll appreciate the type safety and developer experience that TypeScript provides.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 22, 2023",
    readTime: "10 min read",
    tags: ["Next.js", "TypeScript", "Tutorial"],
    slug: "getting-started-with-nextjs-and-typescript",
  },
]
