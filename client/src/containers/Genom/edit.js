import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBook, updateBook, clearBook, deleteBook } from '../../actions'

class EditBook extends PureComponent {

    state = {
        formdata:{
            _id:this.props.match.params.id,
            rule_0:'',
            rule_1:'',
            rule_2:'',
            genId:''
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
        this.props.dispatch(updateBook(this.state.formdata))
    }

    deletePost = () => {
        this.props.dispatch(deleteBook(this.props.match.params.id))
    }
    redirectUser = () => {
        setTimeout(()=>{
            this.props.history.push('/user/user-reviews')
        },1000)
    }


    componentWillMount(){
        this.props.dispatch(getBook(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps){
        let book = nextProps.books.book;
        this.setState({
            formdata:{
                _id:book._id,
                name:book.name,
                author:book.author,
                review:book.review,
                pages:book.pages,
                rating:book.rating,
                price:book.price,
                rule_0:book.rule_0,
                rule_1:book.rule_1,
                rule_2:book.rule_2,
                genId:book.genId
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearBook())
    }

    render() {
        let books = this.props.books;
        return (
            <div className="rl_container article">
                {
                    books.updateBook ? 
                        <div className="edit_confirm">
                            post updated , <Link to={`/books/${books.book._id}`}>
                                Click here to see your post
                            </Link>
                        </div>
                    :null
                }
                {
                    books.postDeleted ? 
                        <div className="red_tag">
                            Post Deleted
                            {this.redirectUser()}
                        </div>
                    :null
                }

                <form onSubmit={this.submitForm}>
                    <h2>Edit genom</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter genId"
                            value={this.state.formdata.genId}
                            onChange={(event)=>this.handleInput(event,'genId')}
                        />
                    </div>

                    <h3>Это правило rule_0: </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter rule_0"
                            value={this.state.formdata.rule_0}
                            onChange={(event)=>this.handleInput(event,'rule_0')}
                        />
                    </div>

                    <h3>Это правило rule_1: </h3>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_1"
                            value={this.state.formdata.rule_1}
                            onChange={(event)=>this.handleInput(event,'rule_1')}
                        />
                    </div>

                    <h3>Это правило rule_2: </h3>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_2"
                            value={this.state.formdata.rule_2}
                            onChange={(event)=>this.handleInput(event,'rule_2')}
                        />
                    </div>

                    <button type="submit">Edit genom</button>
                    <div className="delete_post">
                        <div className="button"
                            onClick={this.deletePost}
                        >
                            Delete genom
                        </div>
                    </div>
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

export default connect(mapStateToProps)(EditBook)