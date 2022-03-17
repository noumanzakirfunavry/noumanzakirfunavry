/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ModalProps } from "apps/frontend/types/Types"
import { FC } from "react"

const InfographiscModal:FC<ModalProps> = ({modalId, children}) => {

    return (
        <>
            <div className="modal fade signinmodal" id={modalId} tabIndex={-1} aria-labelledby="accountModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="accountModalLabel">{title}</h5> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfographiscModal