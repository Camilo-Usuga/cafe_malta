import {InputInterface} from "../../interfaces/components/input.interface.tsx";

const Input = ({
                   name,
                   label,
                   type,
                   register,
                   required,
                   errors,
                   maxlength,
                   minlength,
                   disabled,
               }: InputInterface) => {
    return (
        <div className="mb-3">
            {label && <label htmlFor={label} className="form-label">{label}</label>}
            <input
                type={type ? type : 'text'}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                {...register(name, {
                    disabled: disabled,
                    maxLength: maxlength,
                    minLength: minlength,
                    required: required,
                })}/>
            {errors.name?.type === 'required' && <div className="invalid-feedback">{label} is required.</div>}
            {errors.name?.type === 'minLength' &&
                <div className="invalid-feedback">Must be {minlength} characters long.</div>}
            {errors.name?.type === 'maxLength' &&
                <div className="invalid-feedback">Max length exceeded</div>}
        </div>
    );
};


export default Input;