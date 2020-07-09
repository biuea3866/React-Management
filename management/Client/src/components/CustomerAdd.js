import React from 'react';
import { post } from 'axios'

class CustomerAdd extends React.Component{
    constructor(props){
        super(props);

        this.state={
            file: null,         // profile image
            userName: '',       // profile Name
            birthday: '',       // profile birthday
            gender: '',         // profile gender
            job: '',            // profile job
            fileName: ''        // profile fileName
        }
    }

    handleFileChange = (e) => {
        e.preventDefault()
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        e.preventDefault()
        let nextState = {};

        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data)
                this.props.stateRefresh();
            }
        )

        this.setState(this.state={
            file: null,         // profile image
            userName: '',       // profile Name
            birthday: '',       // profile birthday
            gender: '',         // profile gender
            job: '',            // profile job
            fileName: ''        // profile fileName
        })
    }

    addCustomer = () =>{
        const url = '/api/customers';
        const formData = new FormData();

        formData.append('image', this.state.file)
        formData.append('name', this.state.name)
        formData.append('birday', this.state.birthday)
        formData.append('gender', this.state.gender)
        formData.append('job', this.state.job)

        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        }

        return post(url, formData, config);
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>ADD customer</h1>
                Profile Image : <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                Name : <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                Birth Day : <input type="text" name="birthDay" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                Gender : <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                Job : <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
                <button type="submit">Sign Up</button>
            </form>
        )
    }
}

export default CustomerAdd