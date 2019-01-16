import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import messages_en from "./translations/en.json";
import messages_th from "./translations/th.json";
import { connect } from 'react-redux'
import {IntlProvider, addLocaleData, FormattedMessage, FormattedHTMLMessage} from "react-intl";
import { updateLocales  } from "./redux/actions";
//
import locale_en from "react-intl/locale-data/en";
import locale_th from "react-intl/locale-data/th";
addLocaleData([...locale_en, ...locale_th])
// import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

class App extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      'en': messages_en,
      'th': messages_th
    }
    console.log(this.state)
  }

  handleClick = () => {
    this.props.updateLocales('en')
  }

  render() {
    return (
      <IntlProvider locale={this.props.locale} messages={this.state[this.props.locale]}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              <FormattedMessage id="app.title" 
                defaultMessage="Welcome to react-intl" 
                description="Welcome header on app main page"
                values={{name: "tester"}}/>
          </h1>
          <FormattedHTMLMessage id="app.intro" defaultMessage="to get start" description="Text on main page" />
          <button onClick={this.handleClick}> Change Language </button>
          </header>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    locale: state.locales.locale
  })
}

export default connect(mapStateToProps, {updateLocales})(App);
