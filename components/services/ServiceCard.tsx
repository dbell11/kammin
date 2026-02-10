import { Scissors, Palette, Sparkles, Heart, LucideIcon } from 'lucide-react';
import Card from '@/components/ui/Card';
import AnimatedSection from '@/components/ui/AnimatedSection';

const iconMap: Record<string, LucideIcon> = {
  scissors: Scissors,
  palette: Palette,
  sparkles: Sparkles,
  heart: Heart,
};

interface ServiceCardProps {
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  longDescription,
  icon,
  index,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Scissors;

  return (
    <AnimatedSection animation="slide-up" delay={index * 0.1}>
      <Card hover className="h-full">
        <div className="flex items-start space-x-4 mb-4">
          <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
            <Icon className="w-7 h-7 text-primary-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-2xl text-secondary-900 mb-2">
              {title}
            </h3>
            <p className="text-secondary-600 font-medium">{description}</p>
          </div>
        </div>

        <p className="text-secondary-700 leading-relaxed">{longDescription}</p>
      </Card>
    </AnimatedSection>
  );
}
