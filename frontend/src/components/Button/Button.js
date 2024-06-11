import PropTypes from "prop-types"


function Button({ btnText, onClick, className, type }) {
    return (
        <button type={type} className={className} onClick={onClick}>
            {btnText}
        </button>
    );
};


Button.propTypes = {
    btnText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
    onClick: () => { },
    className: '',
    type: 'button',
};

export default Button;