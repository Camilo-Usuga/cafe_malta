import {usersRowsConstant} from "../../../constants/table/users-constant.tsx";
import Button from "../../../components/button/button.tsx";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import {CustomTable} from "../../../components";
import {useState} from "react";
import Modal from "../../../components/modal/modal.tsx";

function AdminReservations() {

    const [showModal, setShowModal] = useState(false);

    const reservationsForm = (
        <div>
            Hey
        </div>
    )

    return (
        <div>
            <div>
                <h3 className="fw-bold fs-4 mb-3 p-3">Reservations</h3>
                <div className="row">
                    <div className="col d-flex justify-content-end mb-3">
                        <Button icon={faAdd} onClick={() => setShowModal(true)}/>
                    </div>
                    <div className="col-12">
                        <CustomTable columns={usersRowsConstant} data={[]}/>
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    size={'lg'}
                    title="Reservations"
                    onClose={() => setShowModal(false)}
                    body={reservationsForm}
                    show={showModal}/>
            </div>
        </div>
    );
}

export default AdminReservations;