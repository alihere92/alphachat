import { Target, Eye, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with cutting-edge digital solutions that drive growth and success.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading marketing and development agency known for innovation and excellence.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Talented professionals dedicated to delivering exceptional results for every client.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, innovation, and client satisfaction at the core of everything we do.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="mb-6">About Alpha</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate team of designers, developers, and marketers committed to
              helping businesses thrive in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h2 className="mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded with a vision to bridge the gap between businesses and digital excellence,
                Alpha has grown into a trusted partner for companies seeking transformative digital solutions.
              </p>
              <p>
                Our journey began with a simple belief: every business deserves access to world-class
                marketing and development services. Today, we've helped hundreds of clients achieve
                their goals through innovative strategies and cutting-edge technology.
              </p>
              <p>
                With a team of experienced professionals and a portfolio of successful projects,
                we continue to push boundaries and deliver results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-12 text-center">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 gradient-hero text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Team Members</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">8+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
