import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { siteContent } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const { contact, about } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message sent',
      description: "Thank you for reaching out. I'll be in touch soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </p>
            <h2 className="font-serif text-heading-lg mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Every great project begins with a conversation. Whether you're dreaming of a new home, 
              reimagining an existing space, or planning a commercial venture, I'd love to hear about your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-border">
                  <Mail size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-border">
                  <Phone size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a 
                    href={`tel:${contact.phone}`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-border">
                  <MapPin size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Studio</p>
                  <p className="text-foreground whitespace-pre-line">{contact.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-background p-8 md:p-10">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2 border-border focus:border-foreground rounded-none"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2 border-border focus:border-foreground rounded-none"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm text-muted-foreground">
                    Tell me about your project
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="mt-2 border-border focus:border-foreground rounded-none resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-none h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
