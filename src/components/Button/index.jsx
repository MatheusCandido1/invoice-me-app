import PropTypes from 'prop-types';

import "./styles.css";

export default function Button({size, type, label, onClick}) {
  
  const getButtonStyle = (size, type) => {
    return `${getButtonSize(size)} ${getButtonType(type)}`
  }
  

  const getButtonSize = (size) => {
    switch(size) {
      case 'small': 
        return 'h-8'
      case 'medium': 
        return 'h-10'
    default:    
      return 'h-10 rounded'
    }
  }

  const getButtonType = (type) => {
    switch(type) {
      case 'primary': 
        return 'bg-primary-main text-white hover:bg-primary-dark'
      case 'secondary': 
        return 'bg-white text-primary-main shadow-lg'
      case 'light':
        return 'bg-gray-buttonBackground text-gray-light'
    default:    
      return 'bg-primary-main text-white'
    }
  }

  return (
    <button onClick={onClick} className={'button ' + getButtonStyle(size, type)}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  onClick: () => null
}