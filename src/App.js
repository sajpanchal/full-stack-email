import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BASE_API_URL } from "./utils/constants";
import React from "react";
import { FormControl, Input, InputLabel, Box } from "@material-ui/core";
class App extends React.Component {
  state = {
    data: { email: "", subject: "", message: "" },
    errors: {},
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state.data;
    axios.post(`${BASE_API_URL}/api/email`, data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
  handleChange = (event) => {
    const data = { ...this.state.data };
    data[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ data: data });
    console.log(data);
  };

  render() {
    return (
      <Box component="form" onSubmit={this.handleSubmit}>
        <InputLabel>Email:</InputLabel>
        <Input
          color="primary"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br></br>
        <InputLabel>Subject:</InputLabel>
        <Input
          color="primary"
          type="text"
          name="subject"
          value={this.state.subject}
          onChange={this.handleChange}
        />
        <br></br>
        <InputLabel>Message:</InputLabel>
        <textarea
          color="primary"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <br></br>
        <Input color="secondary" type="submit" value="submit" />
      </Box>
    );
  }
}
export default App;
