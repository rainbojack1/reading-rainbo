import React, { Component } from 'react';

class NewBook extends Component {
    state = {
        title: "",
        authors: [],
        description: "",
        image: "",
        link: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        axios.post("api/newBook", this.state)
            .then(response => {
                console.log(response);
            })
            .catch(err =>{
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <h1>Submit a New Book</h1>
                <div className="row">
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
                        <input 
                        type="text" 
                        placeholder="Author(s)" 
                        onChange={this.handleInputChange}
                        name="authors"
                        value={this.state.authors}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="textArea" 
                        placeholder="Description" 
                        onChange={this.handleInputChange}
                        name="description"
                        value={this.state.description}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        placeholder="Image URL" 
                        onChange={this.handleInputChange}
                        name="image"
                        value={this.state.image}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        placeholder="Link" 
                        onChange={this.handleInputChange}
                        name="link"
                        value={this.state.link}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                </form>
                </div>
            </div>
        );
    }
}

export default NewBook;