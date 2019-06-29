/**
 * Create By Sanjay 
 * Created Date 29-06-2019
 * Component for Delete Confirm Modal 
 */

import React, { Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function DeleteConfirm({ removeRecord, isDeleteOpen, onClose }) {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={onClose}>&times;</button>;
    return (
        <Fragment>
            <Modal isOpen={isDeleteOpen} className="deleteconfirm-modal" toggle={onClose} external={externalCloseBtn}>
                <ModalHeader>
                    <div className="icon-box">
                        <i className="fa fa-times"></i>
                    </div>
                    <h4>Are you sure?</h4>
                </ModalHeader>
                <ModalBody>
                    <p>Do you really want to delete these records? This process cannot be undone.</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={onClose}>Cancel</Button>
                    <Button color="danger" onClick={removeRecord}>Delete</Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
}
