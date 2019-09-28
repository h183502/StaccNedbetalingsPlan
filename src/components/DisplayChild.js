import React from 'react'
import PropTypes from 'prop-types'

const DisplayChild = ({func, text}) => {
    return(
        <span>
            {func} <small>{text}</small>
        </span>
    )
}

DisplayChild.defaulProps = {
    func: () => <p>Mangler numeric verdi</p>,
    text: 'Mangler input'
}

DisplayChild.propTypes = {
    func: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
}

export default DisplayChild
