import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <header>
                    <ul className="d-flex flex-row-reverse bg-secondary">
                        <li className="p-2 bg-info list-unstyled">
                            <Link to="/login" className="font-weight-bold text-white">Login</Link>
                        </li>
                        <li className="p-2 bg-success list-unstyled">
                            <Link to="/register" className="font-weight-bold text-white">Register</Link>
                        </li>
                    </ul>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </main>
            </BrowserRouter>
        )
    }
}

class Home extends React.Component {
    render() {
        return(
            <h1>Home</h1>
        );
    }
}

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "D.manh",
            password: "123456",
            gender: 'male',
            remember: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        })
    }
    handleChangeGender = (event) => {
        const gender = event.target.value
        this.setState({
            gender: gender,
        })

    }
    handleSubmit = () => {
        // alert("Register success")
        event.preventDefault();
        window.location.href = '/login';
        this.context.router.push('/login');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder="Enter name"
                    className="form-control" />
                <br />
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Enter password"
                    className="form-control" />
                <br />
                <div onChange={this.handleChangeGender}>
                    <input type="radio"
                        name="gender"
                        value="male" defaultChecked />Male
                    <input type="radio"
                        name="gender"
                        value="female" />Female
                </div>
                <br />
                <input type="checkbox" name="remember" id="" onChange={this.handleChange} />Remember
                <br />
                <button className="btn btn-info form-control" type="submit">Submit</button>
            </form>
        );
    }
}

class Login extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li className="p-2 list-unstyled">
                        <Link to={`${ this.props.match.url }/user1`}>User 1</Link>
                    </li>
                    <li className="p-2 list-unstyled">
                        <Link to={`${ this.props.match.url }/user2`}>User 2</Link>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route
                            exact
                            path={this.props.match.url}
                            render={() =>
                            <h3>
                                Choose user!
                            </h3>
                            }/>
                        <Route path={`${ this.props.match.url }/:userId`} component={User}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}
class User extends React.Component {
    render() {
        return(
            <h1>{ this.props.match.params.userId }</h1>
        )
    }
}

export default App;