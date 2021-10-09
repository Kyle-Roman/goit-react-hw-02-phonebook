import React,{ Component } from "react";


class Filter extends Component {
    state = {
    filter: '',
    }

    handleInput = e => {
        this.setState({filter: e.currentTarget.value})
    }

    render() {
    return (
      <label>Найти контакт
        <input
          type="text"
          name="name"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={this.handleInput}
        />
      </label>)    
  };
}

export default Filter;