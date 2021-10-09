import React, { Component } from "react";



class Input extends Component {
    state = {
      name: '',
      number: '',
    }

    handleInput = e => {
        this.setState({name: e.currentTarget.value})
    }

    handleSubmit = e => {
      e.preventDefault();

      this.props.onSubmit(this.state);      

      this.reset();
    }

    reset = () => {
      this.setState({name: '', number: ''})
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
              <label>Имя
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  onChange={this.handleInput}
                  required
              />
              </label>
            <label>Телефон
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
              />
            </label>
              <button type="submit">Добавить</button>
          </form>
        </div>
    }
}

export default Input;