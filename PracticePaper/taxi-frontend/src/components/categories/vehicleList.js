import React, {Component} from "react";
import axios from 'axios';

class VehicleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trip: '',
            categoryId: '',
            vehicles: []
        }
    }

    componentDidMount() {
        console.log('Cat ID: ', this.props.match.params.id);
        axios.get(`http://localhost:8088/category/${this.props.match.params.id}`).then(response => {
            console.log('Vehicles: ', response.data.data);
            this.setState({vehicles: response.data.data});
            this.setState({trip: response.data.data.category, categoryId: this.props.match.params.id});
            console.log('Count:', this.state.vehicles.length>0);
        })
    }


    navigateVehiclePage(e, vehicleId){
        window.location = `/cost/${vehicleId}/${this.state.categoryId}`
    }

    render() {
        return (
            <div className="container">
                <h1>Vehicle List - {this.state.trip}</h1>
                {this.state.vehicles.length > 0 && this.state.vehicles.map((item, index)=>
                    <div key={index} className="card mb-3">
                        <div className="p-3" onClick={e => this.navigateVehiclePage(e, item._id)}>
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

export default VehicleList;