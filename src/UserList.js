import React from 'react';

class UserList extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        username: ''
    }

    updateValues = (firstname, obj) => {
        this.setState(()=>({
            [obj]: firstname.trim()
        }))
    }

    checkState = () => {
        for (let key in this.state) {
            if(!this.state[key]) return false;
        }
        return true;
    }

    processUser = () => {
        const { addUser, checkUser } = this.props;
        if(this.checkState()){
            if(!checkUser(this.state.username)) {
                const newuser = {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    username: this.state.username,
                    gamesPlayed: 0
                };
                addUser(newuser);
            } else {
                alert("Userid is already taken, pick a new one");
            }
        } else {
            alert("Fill in all fields Please");
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input 
                        type="text" 
                        placeholder="firstname" 
                        value={this.state.firstname}
                        onChange={(e) => this.updateValues(e.target.value, e.target.placeholder)}
                    />
                </div>
                <div>
                    <input
                        type="text" 
                        placeholder="lastname" 
                        value={this.state.lastname}
                        onChange={(e) => this.updateValues(e.target.value, e.target.placeholder)}
                    />
                </div>
                <div>
                    <input
                        type="text" 
                        placeholder="username" 
                        value={this.state.username}
                        onChange={(e) => this.updateValues(e.target.value, e.target.placeholder)}
                    />
                </div>
                <div>
                    <input
                        type="button"
                        value="Submit"
                        onClick={this.processUser}
                    />
                </div>
            </div>
        );
    }
}

export default UserList;