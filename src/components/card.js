import React, { Component } from 'react';
import './card.css';


class Card extends Component {
    
    constructor (props) {
        super(props)

        this.state = {
            users: [],
            isFetch: true,
        }
    }
    
    componentDidMount() {
        fetch('https://randomuser.me/api')
            .then(res => res.json())
            .then(data => this.setState({ users: data.results, isFetch: false
        }))
    }

    render() {
        if (this.state.isFetch) {
            return 'Loading...'
        }
        
        const foto = this.state.users[0].picture.large
        const name = this.state.users[0].name.first
        const email = this.state.users[0].email
        
        return (
            
            <div className="container" id="identif">
                <div className="card">
                    <div className="profile">
                        <div className="circle"></div>
                        <img src={foto} alt=""></img>
                    </div>
                    <div className="info">
                        <h1 className="title" >{name}</h1>
                        <h3>{email}</h3>
                        <div className="chosse">
                            <button onClick={()=>{this.componentDidMount()}}>Chosse</button>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Card;