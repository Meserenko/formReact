import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: ""
        }
    }

    handleChange = e => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
    };

    validate = () => {
        let emailError = "";
        let passwordError = "";

        if (this.state.password.length === 0) {
            passwordError = "The field cannot be empty"
        } else if (this.state.password.length < 5) {
            passwordError = "Too short password."
        }


        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError});
            return false;
        }

        return true;
    };

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(this.state);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <h2>SIGN IN TO YOUR ACCOUNT</h2>
                <div>
                    <input
                        className='input'
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.emailError}
                    </div>
                </div>
                <div>
                    <input
                        className='input'
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.passwordError}
                    </div>
                </div>
                <div className='checkbox'>
                    <input
                        type="checkbox"
                        name="checkbox"
                        onChange={this.handleChange}

                   /> Keep me signed in

                </div>
                <button className='signIn' type="submit">SIGN IN</button> <br/>
                <a href="#">Forgot your password?</a>
            </form>
        );
    }
}


export default Form;