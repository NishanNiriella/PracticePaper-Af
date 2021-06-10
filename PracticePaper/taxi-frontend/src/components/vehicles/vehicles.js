import React, {Component} from "react";
import axios from 'axios';

class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: []
            }
        }

    componentDidMount() {
        axios.get('http://localhost:8088/vehicle').then(response => {
            console.log(response.data.data);
            this.setState({vehicles: response.data.data});
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Vehicles</h1>
                {this.state.vehicles.length > 0 && this.state.vehicles.map((item, index)=>
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            <h4>Code : {item.code}</h4>
                            <h4>Model : {item.model}</h4>
                            <h4>Type : {item.type}</h4>
                            <h4>Name: {item.name}</h4>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Vehicles;