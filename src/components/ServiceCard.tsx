import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to={link}>
          <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
            <span className="text-primary group-hover/btn:text-accent transition-colors">Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover/btn:text-accent group-hover/btn:translate-x-1 transition-all" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
