import React, {Component} from 'react';
import SearchUser from '../SearchUser';
import UserInfo from '../UserInfo';


export default class Github extends Component {

    state = {
            user: null,
            repos: [],
        };

    updateUser = user => {
        this.setState({user : user});
        console.log(this.state.user);
    }

    updateRepos = repos => {
        this.setState({repos : repos});
        console.log(this.state.repos);
    }

    render() {
        return <div className="container">
            <SearchUser
                updateUser = {this.updateUser.bind(this)}
                updateRepos={this.updateRepos.bind(this)}
            />
            <UserInfo
                user={this.state.user}
                repos={this.state.repos}
            />
        </div>

    }

}

