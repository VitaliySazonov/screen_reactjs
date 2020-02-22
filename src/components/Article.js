import React, {Component} from "react";

class Article extends Component {
    state = {
        isOpen: true
    };

    render() {

        const {article} = this.props;
        console.log('=====', this.props);
        const body = this.state.isOpen && <section>{article.text}</section>
        const h3 = <h3>creation data: {(new Date(article.date)).toDateString()}</h3>;
        return (
            <div>
                <h1>
                    {article.title}
                    <button
                        onClick={this.handleClick}
                    >
                        {this.state.isOpen ? 'Close' : 'Open'}
                    </button>
                </h1>
                {body}
                {h3}
            </div>
        )
    }

    handleClick = () => {
        console.log('----', 'Click');
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}

export default Article;