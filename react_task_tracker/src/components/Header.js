import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ myTitle, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{myTitle}</h1>
            <Button 
                myColour={showAdd ? "red" : "green"}
                myText={showAdd ? "Close" : "Add"} 
                myOnClick={onAdd} 
            />
        </header>
    )
}

Header.defaultProps = {
    myTitle: "Task Tracker"
}

Header.propTypes = {
    myTitle: PropTypes.string.isRequired
}

/*
    // CSS in JS
    const headingStyle = {
        color: "red",
        backgroundColor: "black"
    }
*/

export default Header
