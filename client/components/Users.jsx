import React from 'react'

import { connect } from 'react-redux'

class Users extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    getUsers(props) {
        console.log(props)
        return <div>
            {props.users.map(user => <div>
                <h1>{user.name}</h1>
            </div>)}
        </div>
    }

    render() {
        return (
           <div>
               Im a user
           </div> 
        )
    }
}

const mapStateToProps = ({ users }) => ({
    users
})

export default connect(mapStateToProps)(Users)