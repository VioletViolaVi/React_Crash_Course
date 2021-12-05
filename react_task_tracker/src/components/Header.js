import PropTypes from 'prop-types' // 'impt' shortcut
import Button from './Button'

const Header = ({ myTitle }) => {
    const myClickFunc = () => {
        console.log("Clicked");
    }

    return (
        <header className="header">
            <h1>{myTitle}</h1>
            <Button myColour="green" myText="Add" myOnClick={myClickFunc} />
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
