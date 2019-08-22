import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserRepos from '../UserRepos';



export default class UserInfo extends Component {


    render() {

        if (this.props.user !== null){
            return <>
                <div className="row">
                    <div className="col-lg-4">
                        <img className="img-circle" src={this.props.user.avatar_url} alt="avatar" width="140"
                             height="140"/>
                        <h2>{this.props.user.login}</h2>
                        <p>{this.props.user.name}</p>
                        <p>Followers : {this.props.user.followers} / Following : {this.props.user.following}</p>
                        <p><a href={this.props.user.html_url} className="btn btn-outline-secondary"  role="button">View details</a></p>
                    </div>
                    <div className="col-lg-8">
                        <UserRepos repos={this.props.repos} />
                    </div>
                </div>
            </>}
            return null

    }


}

UserInfo.propTypes = {
    user: PropTypes.object,
    repos: PropTypes.array,
};