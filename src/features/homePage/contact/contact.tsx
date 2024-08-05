import {useForm} from "react-hook-form";
import {Toaster, toast} from 'sonner'
import Input from "../../../components/input/input.tsx";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import Button from "../../../components/button/button.tsx";
import TextArea from "../../../components/input/text-area.tsx";


function Contact() {

    const [isLoading, setLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const validateForm = handleSubmit((data) => {
        toast('My first toast', data)
        setLoading(true);
        setIsDisabled(true);

    })

    return (
        <div className={"section-container"}>
            <Toaster/>
            <form onSubmit={validateForm}>
                <div className="row">
                    <div className="col">
                        <Input disabled={isDisabled} label={"Name"} name={'name'} register={register} errors={errors}
                               required={true}/>
                        <Input disabled={isDisabled} label={'Email'} type={'email'} name={'email'} register={register}
                               errors={errors}/>
                        <TextArea label={"Contact"} name={'contact'} disabled={isDisabled} register={register} cols={30}
                                  rows={10} errors={errors}></TextArea>
                    </div>
                </div>
                <Button type={'submit'} text={'Send'} icon={faPaperPlane} loading={isLoading}
                        className={'btn btn-success'}/>
            </form>
        </div>
    );
}

export default Contact;