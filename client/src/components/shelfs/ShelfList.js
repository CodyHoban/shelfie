import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchShelfs } from '../../actions'
import shelfReducer from '../../reducers/shelfReducer';
import { _ } from 'lodash';
import shelfs from '../../apis/shelfs';
import Button from '@material-ui/core/button'
import history from '../../history'

import { withStyles, createStyles } from '@material-ui/core';


// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   }
// }),



class ShelfList extends React.Component {
    componentDidMount() {
        this.props.fetchShelfs();
    }

    

    renderList() {
        const { classes } = this.props
        return this.props.shelfs.shelfList.map(shelf => {
            
            return (
                <div className="item" key={shelf.id}>
                    <div className="right floated content">
                        <Button 
                            variant="contained" color="primary"
                            onClick={() => history.push(`/shelfs/edit/${shelf.id}`)}
                        > 
                            {/* <Link to={`/shelfs/edit/${shelf.id}`} color="inherit">
                                Edit
                            </Link> */}
                            edit
                        </Button>
                        <Button 
                            variant="contained" color="secondary"
                            onClick={() => history.push(`/shelfes/delete/${shelf.id}`)}
                        >
                            {/* <Link to={`/shelfs/delete/${shelf.id}`} className="">
                                Delete
                            </Link> */}
                            delete
                        </Button>
                        
                    </div>
                    <i className="large middle aligned icon camera" />
                    <div className={classes.shelfStyle} onClick={() => history.push(`/shelfs/${shelf.id}`)}>
                        {/* <Link 
                            to={`/shelfs/${shelf.id}`} 
                            color="primary"
                        >
                           {shelf.shelfData.title}
                        </Link> */}
                        {shelf.shelfData.title}
                        
                        <div className="description">{shelf.description}</div>
                    </div>

                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Button 
                        variant="contained" color="primary"
                        onClick={() => history.push(`/shelfs/new`)}
                    >
                        {/* <Link to="/shelfs/new">
                            Create Shelf
                        </Link> */}
                        Create Shelf
                    </Button>
                </div>
            )
        }
    }

    render() {
        console.log(this.props.classes)
        const { classes } = this.props
        return (
            <div>
                <h2 className={classes.backgroundColor} >Shelfs</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }  
}

const mapStateToProps = (state) => {
    return { 
        shelfs: state.shelfs,
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

const styles = () =>
  createStyles({
    backgroundColor: {
      backgroundColor: 'red'
    },
    shelfStyle: {
       '&:hover': {
           cursor: "pointer",

       },
       fontSize: 14,     
    }
  });

export default connect(mapStateToProps, { fetchShelfs })(withStyles(styles)(ShelfList));