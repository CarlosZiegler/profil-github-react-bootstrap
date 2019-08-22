import React, {Component} from 'react';
import apiGithub from '../../services/apiGithub';
import PropTypes from 'prop-types';



export default class SearchUser extends Component {

    constructor(props){
        super(props)
        this.handleClick= this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.refs.username.value);
        apiGithub.getByUsername(this.refs.username.value).then(function (response) {
            this.props.updateUser(response.data);
        }.bind(this));

        apiGithub.getReposUsername(this.refs.username.value).then(function (response) {
            this.props.updateRepos(response.data);
        }.bind(this));

    }

    render() {
        return <div className="jumbotron">
            <h1>GitHub Info</h1>
            <div className="row">
                <form >
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            ref="username"
                            className="form-control"
                            placeholder="Ex: carlosziegler"
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                    onClick={this.handleClick}> Buscar
                    </button>
                </form>
            </div>
        </div>

    }



}

SearchUser.propTypes = {
    updateUser: PropTypes.func.isRequired,
    updateRepos: PropTypes.func.isRequired,
};

