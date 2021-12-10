import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ myTitle, onAdd, showAdd }) => {
    const location = useLocation();
    return (
        <header className="header">
            <h1>{myTitle}</h1>
            {location.pathname === "/" && (
            <Button 
                myColour={showAdd ? "red" : "green"}
                myText={showAdd ? "Close" : "Add"} 
                myOnClick={onAdd} 
            />)}
        </header>
    )
}

Header.defaultProps = {
    myTitle: "Chore Keeper Upper"
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
