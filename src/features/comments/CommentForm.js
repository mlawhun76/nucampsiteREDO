import {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

const CommentForm = ({campsiteId}) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
            <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>

            <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
                <ModalHeader >
                    Add Comments Here
                </ModalHeader>
                <ModalBody>campsite: {campsiteId}</ModalBody>
            </Modal>
        </>
    );
};

export default CommentForm;
