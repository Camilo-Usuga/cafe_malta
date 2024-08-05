import {IconName} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface ButtonInterface {
    className?: string,
    type?: "button" | "submit" | "reset" | undefined,
    text?: string,
    icon?: IconName | IconProp,
    loading?: boolean;
    onClick?: () => void;
    tooltipMessage?: string;
}