import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { FormattedMessage, injectIntl, defineMessages, IntlShape } from 'react-intl';


//console.log('navigator',navigator)

interface LocaleButtonProps {
    locale: string
    IntlAction: any
}

interface LocaleButtonState {
    lang: string    
}

class LocaleButton extends React.Component<LocaleButtonProps, LocaleButtonState> {

    constructor(props: LocaleButtonProps) {
        super(props); 
        this.state = { lang: this.props.locale }
        this.handleChange = this.handleChange.bind(this);
    }
    
      handleChange(e) {
        const value = e.target.value
        this.setState({lang: value})
        this.props.IntlAction.updateLocales(value)
      }
    
      render() {
        console.log('xxx', this.state)
        return (
            <div>
                <p>{this.state.lang}</p>
                <select 
                    value={this.state.lang}
                    id="selectLang" 
                    onChange={this.handleChange}
                >
                    <option value="en">English</option>
                    <option value="es">Español</option>                    
                </select>              
            </div>    
        ) 
           
      }
}

export default LocaleButton
