import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBook, clearNewBook } from '../../actions'

class AddGen extends Component {

    state = {
        formdata:{
            rule_0:'',
            rule_1:'',
            rule_2:'',
            genId:'',
            name:'test name',
            author:'test author',
            review:'test review',
            pages: 123,
            rating: 3,
            price: 4

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
    //<Link to={`/gens/${gen.gId}`}>

    showNewBook = (book) => (
        book.post ?
            <div className="conf_link">
                You are add new gen !! 
                    Click the link to see the review <Link to={`/books/${book.bookId}`}>Click the link to see anketa</Link>
            </div>
        :null
    )


    submitForm = (e) => {
        e.preventDefault();
        //console.log(this.state.formdata)
        this.props.dispatch(addBook({
            ...this.state.formdata,
            ownerId:this.props.user.login.id
        }))
    }

    componentWillUnmount(){
        this.props.dispatch(clearNewBook())
    }

    render() {
        //console.log(this.props);
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add a GenoRules</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter genoCode"
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
                            type="text"
                            placeholder="Enter rule_1"
                            value={this.state.formdata.rule_1}
                            onChange={(event)=>this.handleInput(event,'rule_1')}
                        />
                    </div>

                    <h3>Это правило rule_2: </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter rule_2"
                            value={this.state.formdata.rule_2}
                            onChange={(event)=>this.handleInput(event,'rule_2')}
                        />
                    </div>

                    <button type="submit">Add rule</button>
                    {
                        this.props.books.newbook ? 
                            this.showNewBook(this.props.books.newbook)
                        :null
                    }
                    <h2>Памятка:</h2>
                    <h5>0 - это ложь, "ген не плохой"</h5>
                    <h5>1 - это истина, "ген не плохой"</h5>
                
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

export default connect(mapStateToProps)(AddGen)