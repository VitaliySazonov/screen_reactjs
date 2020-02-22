import React, {Component} from "react";

class Article extends Component {
    state = {
        isOpen: true
    };

    render() {

        const {article} = this.props;
        const style = {width: '50%'};
        // console.log('=====', this.props);
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={style}>
                <div className="card-header">
                    <h1>
                        {article.title}
                        <button
                            onClick={this.handleClick}
                            className="btn btn-primary btn-lg float-right"
                        >
                            {this.state.isOpen ? 'Close' : 'Open'}
                        </button>
                    </h1>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation data: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log('State isOpen => ', this.state.isOpen);

    };
}

export default Article;