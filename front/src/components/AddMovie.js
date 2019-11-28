import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap'
import { addMovie, editMovie } from '../actions/actions';
import { connect } from 'react-redux';
import uuid from 'uuid'

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.infos ? this.props.infos.title : '',
            year: this.props.infos ? this.props.infos.year : '',
            rating:this.props.infos ? this.props.infos.rating : 1,
            image: this.props.infos ? this.props.infos.image : '',
            show: false
        }
    }

    handleShow = () => {
        this.setState({show: !this.state.show})
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    {this.props.addOrEdit ? 'Edit Movie' : 'Add New Movie'}
                </Button>

                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                    <Modal.Title>{this.props.addOrEdit ? 'Edit Movie' : 'New Movie'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <label>Title:</label>
                            <input value={this.state.title} onChange={this.handleChange} name="title" type='text' />
                        </div>
                        <div>
                            <label>Year:</label>
                            <input value={this.state.year} onChange={this.handleChange} name="year" type='text' />
                        </div>
                        <div>
                            <label>Rating:</label>
                            <input value={this.state.rating} onChange={this.handleChange} name="rating" type='text' />
                        </div>
                        <div>
                            <label>Image:</label>
                            <input value={this.state.image} onChange={this.handleChange} name="image" type='text' />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleShow}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        this.props.addOrEdit ? this.props.editMovie(this.props.infos._id, this.state) : this.props.addMovie(this.state)
                        this.setState({show: false})
                        }}>
                        {this.props.addOrEdit ? 'EDIT!' : 'ADD!'}
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
        )
    }
    
}
// const mapDispatchToProps = dispatch => {
//     return{
//         add: x => dispatch(addMovie(x)),
//         edit: updated => dispatch(editMovie(updated))
//     }
// }
export default connect(null, { addMovie, editMovie })(AddMovie)