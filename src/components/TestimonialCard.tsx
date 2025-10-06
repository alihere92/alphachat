import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="h-full shadow-soft hover:shadow-medium transition-all">
      <CardContent className="p-6">
        <div className="flex space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted"
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-6 italic">{content}</p>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
