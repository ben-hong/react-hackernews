import React from "react";

class Story extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, url } = this.props.story;
        return (
            <a href={url}>{title}</a>
        )
    }
}

export default Story;