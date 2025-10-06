import { Code, Smartphone, Palette, Video, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies",
      link: "/services/web-development",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications",
      link: "/services/app-development",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative designs that elevate your brand identity",
      link: "/services/graphic-design",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video production and post-production",
      link: "/services/video-editing",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven strategies to grow your online presence",
      link: "/services/digital-marketing",
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your search rankings and organic traffic",
      link: "/services/seo",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Alpha transformed our digital presence completely. Their team is professional, creative, and delivers on time.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthLabs",
      content: "Outstanding service! The SEO and marketing strategies they implemented doubled our organic traffic in 3 months.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandCo",
      content: "Working with Alpha was a game-changer. They understood our vision and brought it to life beautifully.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="mb-6">
              Transform Your Digital
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Presence with Alpha
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're a full-service marketing and development agency delivering exceptional
              digital solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gradient-hero text-white hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-accent opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's work together to bring your vision to life
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-hero text-white hover:opacity-90 transition-opacity">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
