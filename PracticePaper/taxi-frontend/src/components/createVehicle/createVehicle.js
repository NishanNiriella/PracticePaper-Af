import React, {Component} from "react";
import axios from 'axios';
import Select from 'react-select';

const initialState = {
    code: '',
    model: '',
    type: '',
    name: '',
    value: 0,
    categories: [],
    options: [],
    selected: []
}

class CreateVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onCategorySelect = this.onCategorySelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8088/category').then(response => {
            console.log(response.data.data);
            this.setState({categories: response.data.data}, () => {
                let data = [];
                this.state.categories.map((item, index) => {
                    let category = {
                        value: item._id,
                        label: item.category
                    }
                    data.push(category);
                });
                this.setState({options: data});
            });
        })
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onCategorySelect(e) {
        this.setState({selected: e ? e.map(item => item.value) : []});
    }

    onSubmit(e) {
        let vehicle = {
            code: this.state.code,
            model: this.state.model,
            type: this.state.type,
            name: this.state.name,
            value: this.state.value,
            categories: this.state.selected
        }
        console.log('DATA TO SEND', vehicle);
        axios.post('http://localhost:8088/vehicle/create', vehicle).then(response => {
            alert('Vehicle Added');
        }).catch(error => {
            alert(error.message);
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Create Vehicle</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="code" className="form-label">Vehicle Code</label>
                        <input type="text" className="form-control" name="code" value={this.state.code}
                               onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="model" className="form-label">Vehicle model</label>
                        <input type="text" className="form-control" name="model" value={this.state.model}
                               onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Vehicle type</label>
                        <input type="text" className="form-control" name="type" value={this.state.type}
                               onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Vehicle name</label>
                        <input type="text" className="form-control" name="name" value={this.state.name}
                               onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Vehicle value per hour</label>
                        <input type="Number" className="form-control" name="value" value={this.state.value}
                               onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Vehicle category</label>
                        <Select
                            options={this.state.options}
                            onChange={this.onCategorySelect}
                            className={"basic-multi-select"}
                            isMulti
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Vehicle</button>
                </form>
            </div>
        )
    }
}

export default CreateVehicle;