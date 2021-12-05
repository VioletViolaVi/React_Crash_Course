import PropTypes from 'prop-types' // 'impt' shortcut

const Header = ({ title }) => { // destructed from (props) to ({ title })
    return (
        <header>
            <h1>{title}</h1> {/* destructed from props.title to title*/}
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

// CSS in JS
// const headingStyle = {
//     color: "red",
//     backgroundColor: "black"
// }

export default Header
