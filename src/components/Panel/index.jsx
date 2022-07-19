import PropTypes from 'prop-types';

import './styles.css';

export default function Panel({width, height, children}) {
  return (
    <section className={`panel ${width} ${height}`}>
      {children}
    </section>
  )
}

 Panel.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  children: PropTypes.node
 }