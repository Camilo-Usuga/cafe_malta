import {usersRowsConstant} from "../../../constants/table/users-constant.tsx";
import {CustomTable} from "../../../components";
import Button from "../../../components/button/button.tsx";
import {faAdd} from "@fortawesome/free-solid-svg-icons";

function AdminUsers() {
    return (
        <div className={'row py-3'}>
            <h3 className="fw-bold fs-4 mb-3">Users</h3>
            <div className="row">
                <div className="col d-flex justify-content-end mb-3">
                    <Button icon={faAdd}/>
                </div>
                <div className="col-12">
                    <CustomTable columns={usersRowsConstant} data={[]}/>
                </div>
            </div>

        </div>
    );
}

export default AdminUsers;