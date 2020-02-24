import React, {Component, PureComponent} from "react";

class Article extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentWillMount() {
        console.log('---', 'mounting');
    }

    render() {

        const {article, isOpen, onButtonClick} = this.props;
        const style = {width: '50%'};
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={style}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        clicked = {this.state.count}
                        <button onClick={onButtonClick}
                                className="btn btn-primary btn-lg float-right"
                        >
                            {isOpen ? 'Close' : 'Open'}
                        </button>
                    </h2>
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
    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default Article;