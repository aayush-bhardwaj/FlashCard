import React from "react"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addNote , fetchNote} from "../actions/noteActions"

class FlashCard extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            value :"",
            flashcards: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchNote();   
    }
    

    handleChange(event) {
        console.log(event.target.value);
        this.setState({value: event.target.value});

    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addNote(this.state.value)
    }

    showFlashCards(){
      var namesList = this.props.notes.notes.map(function(name){
              return <li className="list-group-item">{name}</li>;
              })

      return  <ul className="list-group">{ namesList }</ul>

          }


    render(){
        return (
            <div className='container'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Add FlashCard</div>
                    <div className='panel-body'>
                        <form onSubmit={this.handleSubmit}>
                        <div className={'form-group '}>
                            <label className='control-label'>FlashCard</label>
                            <input type='text' className='form-control' ref='nameTextField' value={this.state.value} onChange={this.handleChange}/>                        

                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
                <hr />
                {this.showFlashCards()}
            </div>
    );
    }
}

function mapStateToProps(state) {
    return {
        notes: state.notes
    };
}

function matchDispatchToProp(dispatch){
    return bindActionCreators({addNote: addNote , fetchNote : fetchNote} , dispatch)
}

export default connect(mapStateToProps , matchDispatchToProp)(FlashCard);