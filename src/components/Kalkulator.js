import React from 'react'
import InputRange from 'react-input-range'
import Display from "./Display";

import '../styles/styles.css'
import 'react-input-range/lib/css/index.css'


class Kalkulator extends React.Component{
    state = {
        laanebelop: 100000,
        nedbetaling: 10
    };

    handleBelop = value => {
        this.setState({laanebelop: value})
    };

    handleNedbetaling = value => {
        this.setState({nedbetaling: value})
    };

    render() {
        const {laanebelop, nedbetaling} = this.state
        return (
            <div className='App'>
                <h4>Lånebeløp {laanebelop}</h4>
                <InputRange
                step={10000}
                maxValue={10000000}
                minValue={1000}
                value={laanebelop}
                onChange={this.handleBelop}
                />
                <h4>Nedbetales over {nedbetaling} år</h4>
                <InputRange
                step={1}
                maxValue={50}
                minValue={5}
                value={nedbetaling}
                onChange={this.handleNedbetaling}
                />
                <Display aar={nedbetaling} belop={laanebelop} />
            </div>
        )
    }

}

export default Kalkulator
