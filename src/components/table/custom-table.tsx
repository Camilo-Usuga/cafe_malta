import {TableColumns} from "../../interfaces/components/table-columns.interface.tsx";
import Button from "../button/button.tsx";
import {faTrash, faEdit, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type tableType = {
    columns: TableColumns[];
    data: Record<string, never>[];
    canEdit?: boolean;
    canDelete?: boolean;
}

const CustomTable = ({columns, data, canDelete, canEdit}: tableType) => {

    const noDataMessage = (
        <tr className={'table-info'}>
            <td colSpan={columns.length} className={'text-center'}>
                <FontAwesomeIcon icon={faInfoCircle}/>&nbsp; No data
            </td>
        </tr>
    )

    const columnsRender = columns.map((item, index) => (
        <th key={index} scope="col">{item.name}</th>
    ))

    const dataRender = data?.map((item, index) => (
        <tr key={index}>
            {columns.map((column) => (
                <td key={column.name} scope="col">{item[column.name]}</td>
            ))}
        </tr>
    ))

    const renderButtons = data ?? (
        <tr>
            {canDelete ?? <Button icon={faTrash}/>}
            &nbsp;
            {canEdit ?? <Button icon={faEdit}/>}
        </tr>
    )

    return (
        <div className="table-responsive">
            <table className="table table-hover rounded-2">

                <thead className='table-dark'>
                <tr>
                    {columnsRender}
                </tr>
                </thead>
                <tbody>
                {data.length > 0 ? <>{dataRender} {renderButtons} </> : noDataMessage}
                </tbody>
            </table>
        </div>
    )
}

export default CustomTable;