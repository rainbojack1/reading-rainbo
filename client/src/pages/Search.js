import React, { Component } from 'react';
import Card from '../components/Card';
import API from '../utils/API';

class Home extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        term: "",
        query: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            term: name,
            query: value
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.term, this.state.query)
            .then(books => {
                console.log(books.data);
                this.setState({books: books.data})
            })
            .catch(err => {
                console.log(err);
            });

    };

    render() {
        return (
            <div>
                <h1 className="mb-2">Search for a Book</h1>

                <div className="row">
                    <div className="col-md-6">
                        <h3>Search by title:</h3>
                        <form>
                            <div className="form-group">
                                <input
                                type="text"
                                placeholder="Title"
                                onChange={this.handleInputChange}
                                name="title"
                                value={this.state.title}
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={this.handleFormSubmit}
                                    >
                                    Search
                                </button>
                            </div>
                        </form>                    
                    </div>
                    <div className="col-md-6">
                    <h3>Search by author:</h3>
                        <form>
                            <div className="form-group">
                                <input
                                type="text"
                                placeholder="Author"
                                onChange={this.handleInputChange}
                                name="author"
                                value={this.state.author}
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={this.handleFormSubmit}
                                    >
                                    Search
                                </button>
                            </div>
                        </form> 
                    </div>
                </div>
                <div className="row">
                    <h3>Results:</h3>
                    {/* {this.state.books.map((book, i) => (
                    <Card
                        id={book._id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                    />
                ))} */}
                </div>
            </div>
        );
    }
};

export default Home;