import React from 'react'
import PropTypes from 'prop-types'
import DisplayChild from "./DisplayChild";


class Display extends React.Component{
    state = {
        //Nominell rente
        NR: 0.03
    };

    componentDidMount() {
        this.calculateNR()
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props){
            this.calculateNR()
        }
    }

    calculateNR = () => {
        const {belop} = this.props;

        if (1000 < belop && belop < 1000000){
            this.setState({NR: 0.03})
        }
        if (1000000 < belop && belop < 2000000){
            this.setState({NR: 0.05})
        }
        if (2000000 < belop && belop < 40000000){
            this.setState({NR: 0.08})
        }
        if (4000000 < belop){
            this.setState({NR: 0.1})
        }
    }

    calculateMaanedlig = () => {
        const { belop, aar } = this.props;

        const decimalFormat = this.state.NR + 1
        const laanebelop = decimalFormat * belop
        const maanedligBelop = laanebelop/(aar*12)

        return <p>{Math.round(maanedligBelop)}</p>
    }

    prosentNR = () => {
        return <p>{this.state.NR * 100}%</p>
    }

    render() {
        return (
            <div>
                <DisplayChild func={this.prosentNR()} text='nominell rente' />
                <DisplayChild func={this.calculateMaanedlig()} text='Månedlig beløp' />
            </div>
        )
    }
}
Display.propTypes = {
    aar: PropTypes.number.isRequired,
    belop: PropTypes.number.isRequired
}

export default Display


