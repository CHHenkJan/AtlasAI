import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6">
              Get in <span className="gold-gradient-text italic">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you have questions about our methodology, need help with configuration,
              or want to understand how the signals work, we're here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">Email Support</h3>
                  <a href="mailto:support@atlas-signals.io" className="text-muted-foreground hover:text-primary transition-colors">
                    support@atlas-signals.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">Community</h3>
                  <p className="text-muted-foreground">
                    Join our Telegram channel for announcements and methodology updates.
                  </p>
                  <a href="#" className="text-primary hover:underline text-sm mt-2 inline-block">
                    @AtlasSignals
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="premium-card p-8 rounded-2xl">
            <h3 className="text-2xl font-serif text-foreground mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <Input id="name" placeholder="Your name" className="bg-background/50 border-border/50 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-background/50 border-border/50 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  id="message"
                  placeholder="How can we help?"
                  rows={5}
                  className="bg-background/50 border-border/50 focus-visible:ring-primary resize-none"
                />
              </div>
              <Button type="submit" variant="gold" className="w-full mt-4">
                Send Message
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4 opacity-70">
                We typically respond within 24-48 business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
