import { IconType } from "react-icons";

interface ButtonProps {
  title?: string;
  icon?: IconType;
  onButtonClick: () => void;
  className: string;
}

export const Button: React.FC<ButtonProps> = ({ title, icon: Icon, onButtonClick, className }) => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onButtonClick();
  };

  return (
    <button onClick={handleButtonClick} className={className}>
      {Icon && <Icon />} {title}
    </button>
  );
};
