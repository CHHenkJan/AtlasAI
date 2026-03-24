import { Link } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[60vh] w-full flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h1 className="text-3xl font-serif font-medium text-foreground">404 — Page Not Found</h1>
          </div>
          <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
          <Link href="/">
            <Button variant="gold" className="rounded-full px-8">Back to Home</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
