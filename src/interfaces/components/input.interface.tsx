import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";


export interface InputInterface {
    name: string,
    label: string,
    type?: string,
    required?: boolean,
    disabled?: boolean,
    register: UseFormRegister<FieldValues>,
    maxlength?: number,
    minlength?: number,
    errors: FieldErrors<FieldValues>,
    pattern?: string,
    rows?: number,
    cols?: number
}