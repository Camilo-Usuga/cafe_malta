import {useState} from "react";
import Input from "../../../components/input/input.tsx";
import Button from "../../../components/button/button.tsx";
import {useForm} from "react-hook-form";
import {toast, Toaster} from "sonner";

function Bookings() {

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
                    <div className="col-md-6">
                        <Input
                            label="Location"
                            name="location"
                            type="text"
                            disabled={isDisabled}
                            register={register}
                            errors={errors}
                            required={true}/>

                        <Input
                            name={'date'}
                            label={"Date"}
                            type={"date"}
                            disabled={isDisabled}
                            register={register}
                            errors={errors}
                            required={true}/>

                        <Input
                            name="time"
                            label="Time"
                            type="time"
                            disabled={isDisabled}
                            register={register}
                            required={true}
                            errors={errors}/>

                        <Input
                            name={'guestNumber'}
                            label="Number of Guest"
                            type="number"
                            disabled={isDisabled}
                            register={register}
                            required={true}
                            errors={errors}
                        />
                    </div>

                    <div className="col-md-6">
                        <Input
                            name={'name'}
                            label={'Your name'}
                            type="text"
                            disabled={isDisabled}
                            register={register}
                            required={true}
                            errors={errors}
                        />
                        <Input
                            name={'emailAddress'}
                            label={'Email address'}
                            type="email"
                            disabled={isDisabled}
                            register={register}
                            required={true}
                            errors={errors}
                        />

                        <Input
                            name={'phoneNumber'}
                            label={"Phone number"}
                            type="number"
                            disabled={isDisabled}
                            register={register}
                            required={true}
                            errors={errors}
                        />
                    </div>
                </div>
                <Button
                    loading={isLoading}
                    className="btn btn-success"
                    text={'Make Reservation'}
                    type={'submit'}/>
            </form>

        </div>
    );
}

export default Bookings;