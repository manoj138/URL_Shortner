import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "../../components/common/Button";
import Urltables from "./UrlShort/Urltables";

const MyLinks = () => {
  return (
    <div className="space-y-6">
      <div className="animate-reveal">
        <Link to="/dashboard">
          <Button variant="ghost" icon={ArrowLeft} className="text-sm font-bold text-slate-500 hover:text-brand-600">
            Back to Dashboard
          </Button>
        </Link>
      </div>
      <Urltables />
    </div>
  );
};

export default MyLinks;
