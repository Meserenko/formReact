import React from "react";
import Title from "../title/title";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }


    render() {
        return(
            <div>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <Title title={this.state.text}/>
            </div>
        )
    }
}


export default Search;