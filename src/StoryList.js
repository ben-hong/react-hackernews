import React from "react";
import axios from "axios";
import Story from "./Story";
import SearchForm from "./SearchForm";

class StoryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hits:[]}
    }

    async submit(searchInput) {
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchInput}`)
        console.log(response);
    }

    render() {
        return (
            <div>
                <Story/>
                <SearchForm submit={this.submit}/>
            </div>
        )
    }
}

export default StoryList;