import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
    setUserId(session?.user?.id || null);
    
    // Pre-fill form with user data if authenticated
    if (session) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("email, full_name")
        .eq("id", session.user.id)
        .single();
      
      if (profile) {
        setFormData(prev => ({
          ...prev,
          name: profile.full_name || "",
          email: profile.email || "",
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (isAuthenticated && userId) {
        // Save to database if authenticated
        const { error } = await supabase
          .from("contact_submissions")
          .insert({
            user_id: userId,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          });

        if (error) throw error;

        toast({
          title: "Message Sent & Saved!",
          description: "Your inquiry has been submitted and saved to your history.",
        });
        
        // Redirect to history page
        setTimeout(() => navigate("/history"), 1500);
      } else {
        // Just show confirmation if not authenticated
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible. Login to track your inquiries.",
        });
      }
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      info: "hello@alpha.agency",
      link: "mailto:hello@alpha.agency",
    },
    {
      icon: MapPin,
      title: "Address",
      info: "123 Business Ave, Tech City, TC 12345",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have a project in mind? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
          {!isAuthenticated && (
            <p className="text-sm text-muted-foreground mt-4">
              <Button variant="link" onClick={() => navigate("/auth")} className="p-0 h-auto">
                Login or sign up
              </Button>{" "}
              to track your inquiries
            </p>
          )}
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <a
                    href={item.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.info}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="shadow-medium animate-slide-up">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full gradient-hero text-white hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {isAuthenticated && (
                    <p className="text-sm text-center text-muted-foreground">
                      Your inquiry will be saved to your{" "}
                      <Button variant="link" onClick={() => navigate("/history")} className="p-0 h-auto text-primary">
                        history
                      </Button>
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-medium animate-slide-up h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492346652!3d40.75889497138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alpha Agency Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Follow Us</h2>
          <p className="text-muted-foreground mb-8">
            Stay connected with us on social media for updates, tips, and inspiration
          </p>
          <div className="flex justify-center space-x-6">
            {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                {platform.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
