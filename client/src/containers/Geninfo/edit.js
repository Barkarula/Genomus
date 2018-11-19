import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIgen, updateIgen } from '../../actions'

class EditGenInfo extends PureComponent {

    state = {
        formdata:{
            _id:this.props.match.params.id,
            name:'',
            author:''
        }
    }


    handleInput = (event,name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })
    }


    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(updateIgen(this.state.formdata))
    }

    deletePost = () => {
        //this.props.dispatch(deleteBook(this.props.match.params.id))
    }
    redirectUser = () => {
        setTimeout(()=>{
            this.props.history.push('/user/user-reviews')
        },1000)
    }


    componentWillMount(){
        this.props.dispatch(getIgen(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps){
        let book = nextProps.books.book;
        this.setState({
            formdata:{
                _id:book._id,
                name:book.name,
                author:book.author
            }
        })
    }

    componentWillUnmount(){
        //this.props.dispatch(clearBook())
    }

    render() {
        let books = this.props.books;
        console.log(this.props);
        return (
            <div className="rl_container article">

                <form onSubmit={this.submitForm}>
                    <h2>Edit review</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={this.state.formdata.name}
                            onChange={(event)=>this.handleInput(event,'name')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter university"
                            value={this.state.formdata.author}
                            onChange={(event)=>this.handleInput(event,'author')}
                        />
                    </div>

                    <button type="submit">Edit review</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        books:state.books
    }
}

export default connect(mapStateToProps)(EditGenInfo)