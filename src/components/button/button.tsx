import {ButtonInterface} from "../../interfaces/components/button.interface.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Button = ({text, className, icon, type, loading, onClick}: ButtonInterface) => {
    const buttonType = type ? type : 'button';

    const defaultText = (
        <div>
            {icon ? <FontAwesomeIcon icon={icon}/> : ''}&nbsp;
            {text}
        </div>
    );

    const loader = (
        <div>
            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            &nbsp;<strong>Loading...</strong>
        </div>
    );

    return (
        <button
            disabled={loading}
            type={buttonType}
            onClick={onClick}
            className={className ? `${className}` : "btn btn-primary"}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Tooltip on top">
            {loading ? loader : defaultText}
        </button>
    )
}

export default Button;