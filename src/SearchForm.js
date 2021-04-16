import React from "react";

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { searchInput:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        const { value } = evt.target;
        console.log('this is value', value);
        this.setState({searchInput: value})
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.submit(this.state.searchInput);
        this.setState({ searchInput: "" })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="searchInput">Search: </label>
                    <input id="searchInput"
                        onChange={this.handleChange}
                        name="searchInput"
                        value={this.state.searchInput}
                    />
                    <button>SUBMIT</button>
                </form>
            </div >
        )
    }
}

export default SearchForm;