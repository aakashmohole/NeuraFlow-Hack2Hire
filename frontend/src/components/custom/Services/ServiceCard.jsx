import { cn } from "../../../lib/utils";

const ServiceCard = ({ title, description, className }) => {
  return (
    <div className={cn("bg-gray-800 p-6 rounded-lg shadow-lg", className)}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;
