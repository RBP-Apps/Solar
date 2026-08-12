import React from 'react';
import { Home as HomeIcon } from 'lucide-react';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';

export default function NotFound() {
  return (
    <div className="py-24 bg-bg flex items-center justify-center min-h-[60vh]">
      <Container className="text-center">
        <span className="text-6xl font-black text-secondary/30">404</span>
        <h1 className="text-3xl font-extrabold text-primary mt-2 mb-4">Page Not Found</h1>
        <p className="text-base text-muted max-w-md mx-auto mb-8">
          The requested page could not be located. You can return to the homepage or explore our work.
        </p>
        <Button to="/" variant="primary" size="md" icon={HomeIcon}>
          Return to Home
        </Button>
      </Container>
    </div>
  );
}
