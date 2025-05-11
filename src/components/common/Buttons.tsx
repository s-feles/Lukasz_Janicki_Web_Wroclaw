import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface ButtonProps {
    text: string;
    link: string;
}

export function ButtonLeft({ text, link }: ButtonProps) {
  return (
    <div className="flex items-center mb-6">
      <Link to={"/Lukasz_Janicki_Web_Wroclaw" + link}>
      <button
        className="flex items-center text-blue-400 hover:text-blue-600 transition-colors"
        onClick={() => console.log("Back to products")}
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        {text}
      </button>
      </Link>
    </div>
  );
}

export function ButtonRight({ text, link }: ButtonProps) {
  return (
    <div className="flex justify-end mt-8">
      <Link to={"/Lukasz_Janicki_Web_Wroclaw" + link}>
        <button
          className="flex items-center text-blue-400 hover:text-blue-600 transition-colors"
          onClick={() => console.log("Back to products")}
        >
          {text}
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </Link>
    </div>
  );
}
