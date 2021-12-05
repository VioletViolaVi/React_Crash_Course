import PropTypes from 'prop-types' // 'impt' shortcut

const Header = ({ title }) => { // destructed from (props) to ({ title })
    return (
        <header>
            <h1 style={{color: "red", backgroundColor: "black"}}>{title}</h1> {/* destructed from props.title to title*/}
        </header>
    )
}

// provides default value if no title="" value is passed in <Header />
Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
