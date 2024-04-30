import PropTypes from 'prop-types'
export default function Children({children}) {
  return (
    <div>
      {children}
    </div>
  )
}

Children.propTypes = {
    children: PropTypes.children
}