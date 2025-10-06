import { Search, TrendingUp, FileText, Link2, BarChart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SEO = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "Identify high-value keywords for your business",
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      description: "Optimize your content and meta tags",
    },
    {
      icon: Link2,
      title: "Link Building",
      description: "Build quality backlinks to boost authority",
    },
    {
      icon: BarChart,
      title: "Technical SEO",
      description: "Fix technical issues affecting rankings",
    },
    {
      icon: Globe,
      title: "Local SEO",
      description: "Dominate local search results",
    },
    {
      icon: TrendingUp,
      title: "SEO Analytics",
      description: "Track and measure your SEO success",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6">SEO Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Boost your search rankings and drive organic traffic with comprehensive SEO
              strategies tailored to your business goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Comprehensive SEO Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Dominate Search Results?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's improve your visibility and drive more organic traffic
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-hero text-white hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SEO;
