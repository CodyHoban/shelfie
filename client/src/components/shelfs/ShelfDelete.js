import React from 'react'
import Modal from '../Modal'
import history from '../../history'

const ShelfDelete = () => {
    const actions = (
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">cancel</button>
        </React.Fragment>
    );

    return (
        <div>
            ShelfDelete
            <Modal 
                title="Delete Shelf"
                content="Are you sure you want to delete this Shelf?"
                actions={actions}
                onDismiss={() => history.push('/')}
            />
        </div>
    );
};

export default ShelfDelete;