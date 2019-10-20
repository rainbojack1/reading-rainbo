import React, { Component }  from 'react';
import Card from './Card';

class Results extends Component {
    state = {
        books: this.props.books
    }

    render() {
    return (
        <>
            <h3>Results:</h3>
                    {this.state.books.map((book, i) => (
                    <Card
                        id={book._id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                    />
                ))}
        </>
    );
                    }
}

export default Results;