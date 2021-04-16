import React from "react";
import axios from "axios";
import Story from "./Story";
import SearchForm from "./SearchForm";

class StoryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hits:[]}
        this.submit = this.submit.bind(this);
    }

    async submit(searchInput) {
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchInput}`)
        let allStories = response.data.hits.map(({title, url, objectID}) => ({title, url, objectID}));
        this.setState({hits: allStories});
    }

    render() {
        return (
            <div>
                <SearchForm submit={this.submit}/>
                <ul>
                    {this.state.hits.map(story => <li><Story key={story.objectID} story={story}/></li>)}
                </ul>
            </div>
        )
    }
}

export default StoryList;