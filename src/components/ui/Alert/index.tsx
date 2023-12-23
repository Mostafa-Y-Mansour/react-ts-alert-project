import { FC, ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { AlertType } from "../../../types";

export interface IProps {
  type: AlertType;
  title: string;
  icon: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

const Alert: FC<IProps> = ({ type, icon, title, description, children }) => {
  console.log("children:", children);

  return (
    <div className={`alert-${type}`}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>
          <h4>{title}</h4>
        </div>

        <X className="close" size={20} />
      </div>

      <p>{description}</p>
      <div className="children">{children}</div>
    </div>
  );
};

export default Alert;
