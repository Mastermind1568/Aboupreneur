import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center space-y-6"
      >
        <h1 className="text-8xl font-serif font-bold text-muted">404</h1>
        <h2 className="text-2xl font-bold text-foreground">Page not found</h2>
        <p className="text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
