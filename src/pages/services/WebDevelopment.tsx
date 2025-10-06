import { Code, Globe, Smartphone, Zap, Lock, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const features = [
    {
      icon: Globe,
      title: "Responsive Design",
      description: "Websites that look perfect on all devices and screen sizes",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed and exceptional user experience",
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description: "Built with security best practices and reliable hosting",
    },
    {
      icon: BarChart,
      title: "SEO Optimized",
      description: "Structured for search engines to boost your visibility",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Designed with mobile users in mind from the ground up",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable, scalable code following industry standards",
    },
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
    "Vue.js", "Angular", "WordPress", "PHP", "Python"
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
              <Code className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6">Website Development</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create stunning, high-performance websites that captivate your audience
              and drive business growth with cutting-edge web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Our Development Process</h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Discovery & Planning", desc: "We analyze your requirements and create a detailed project roadmap" },
              { step: "02", title: "Design & Prototype", desc: "Craft beautiful, user-centered designs and interactive prototypes" },
              { step: "03", title: "Development", desc: "Build your website using modern technologies and best practices" },
              { step: "04", title: "Testing & Launch", desc: "Rigorous testing followed by smooth deployment to production" },
              { step: "05", title: "Support & Maintenance", desc: "Ongoing support to keep your website running smoothly" },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Technologies We Use</h2>
          <p className="text-muted-foreground mb-12">
            We work with the latest and most powerful web technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-card border border-border rounded-full font-medium hover:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something amazing together
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-hero text-white hover:opacity-90 transition-opacity">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
