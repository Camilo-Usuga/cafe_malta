import {ModalInterface} from "../../interfaces/components/modal.interface.tsx";

const modal = ({body, size, show, title, onClose}: ModalInterface) => {

    const showModal = show ? 'show' : '';

    const sizeModal = size === 'sm' ? 'sm' : 'lg';

    return (
        <div
            className={`modal fade ${showModal} ${sizeModal}`}
            style={{display: show ? 'block' : 'none'}}
            tabIndex={-1}
            role={'dialog'}
            aria-labelledby={title}
            aria-hidden={!show}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-black text-white">
                        <h5 className="modal-title">{title}</h5>
                        <button
                            onClick={onClose}
                            type="button"
                            className="btn-close bg-white"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{body}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success">Save</button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default modal;