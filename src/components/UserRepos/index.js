import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class UserRepos extends Component {

    state = {
        reposCount: 0,
    }

    componentWillReceiveProps(props) {
        this.setState({reposCount: props.repos.length})
    }

    render() {
        var repos = this.props.repos.map(function (repo, key) {
            return (<div key={key}>

                <p>
                    <button className="btn btn-primary btn-lg btn-block" type="button" data-toggle="collapse"
                            data-target={`#${repo.name}`} aria-expanded="false" aria-controls="collapseExample">
                        {repo.name}
                    </button>

                </p>
                <div className="collapse" id={`${repo.name}`}>
                    <div className="card card-body">
                        <div className="thumbnail">
                            <div className="caption">
                                <h3>{repo.name}</h3>
                                <span className="badge badge-pill badge-warning">{repo.stargazers_count} STARTS</span>
                                <span className="sr-only">unread messages</span>
                                <p>{repo.description}</p>
                                <p>
                                    <a href={repo.html_url} className="btn btn-primary " role="button">Repository</a>
                                    <a href={repo.html_url + '/issues'} className="btn btn-default"
                                       role="button">Issues</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>)
        });

        return <div>
            <div className="jumbotron">
                <h2 className="display-5 text-center">{this.state.reposCount} Repositories</h2>
                {repos}
            </div>
        </div>;

    }


}
/*

UserRepos.propTypes = {
    user: PropTypes.object,
    repos: PropTypes.array,
};*/
