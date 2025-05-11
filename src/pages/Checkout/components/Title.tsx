import { ScrollText } from "lucide-react";

export default function Title() {
  return (
    <div className="flex items-center mb-8">
      <ScrollText className="h-6 w-6 mr-2" />
      <h1 className="text-2xl font-bold">Twoje podsumowanie zamówienia</h1>
    </div>
  );
}
