import { Input } from "@/components/ui/input";
import "./style.css";

const CustomInput = ({ ...otherProps }) => {
	return <Input {...otherProps} className="input"/>;
};

export default CustomInput;
