import React from 'react'
import { Modal } from 'react-bootstrap'
import './modal.scss';

function AdminModal({ title, children, modal, setModal, size }) {

    return (
        <div className="section-modal">
            <Modal
                show={modal}
                onHide={() => setModal(false)}
                size={size}
                centered
                backdropClassName="modal-backdrop"
            >
                <Modal.Header closeButton>
                    {title}
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </div>

    )
}

export default AdminModal;