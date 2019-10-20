import React, { Component } from 'react';
import axios from "axios";
import Card from '../components/Card';

class Home extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks = () => {
        axios.get("/api/books")
            .then(books => {
                // console.log(books.data);
                this.setState({books: books.data})
            })
            .catch(err => {
                console.log(err);
            });
    };   

    render() {
        return (
            <div>
                <h1 className="my-2">All Books</h1>
                {this.state.books.map((book) => (
                    <Card
                        id={book._id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                    />
                ))}
                
            </div>
        );
    }
};

export default Home;