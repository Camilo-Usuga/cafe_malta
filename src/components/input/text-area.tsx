import {InputInterface} from "../../interfaces/components/input.interface.tsx";

const textArea = ({
                      name,
                      label,
                      register,
                      required,
                      errors,
                      maxlength,
                      minlength,
                      disabled,
                      rows,
                      cols
                  }: InputInterface) => {
    return (
        <div className="mb-3">
            {label && <label htmlFor={label} className="form-label">{label}</label>}
            <textarea
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                rows={rows ? rows : 3}
                cols={cols ? cols : 3}
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


export default textArea;