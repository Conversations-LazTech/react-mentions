import React from 'react'
import PropTypes from 'prop-types'
import useStyles from 'substyle'

const defaultStyle = {
  fontWeight: 'inherit',
}

const Mention = ({
  display,
  style,
  className,
  classNames,
  data,
  mismatchStyles,
}) => {
  const styles = useStyles(defaultStyle, { style, className, classNames })

  const isDataArray = data instanceof Array

  const dis = display.replace('[', '').replace(']', '')
  if (isDataArray) {
    const isNotMismatched = data.find((d) => {
      if (d.display === dis) return d
    })

    if (!isNotMismatched) {
      return (
        <strong style={{ ...styles.style, ...mismatchStyles }}>
          {display}
        </strong>
      )
    }
  }
  return <strong {...styles}>{display}</strong>
}

Mention.propTypes = {
  /**
   * Called when a new mention is added in the input
   *
   * Example:
   *
   * ```js
   * function(id, display) {
   *   console.log("user " + display + " was mentioned!");
   * }
   * ```
   */
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,

  renderSuggestion: PropTypes.func,

  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(RegExp),
  ]),
  markup: PropTypes.string,
  displayTransform: PropTypes.func,
  /**
   * If set to `true` spaces will not interrupt matching suggestions
   */
  allowSpaceInQuery: PropTypes.bool,

  isLoading: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
}

Mention.defaultProps = {
  trigger: '@',
  markup: '@[__display__](__id__)',
  displayTransform: function(id, display) {
    return display || id
  },
  onAdd: () => null,
  onRemove: () => null,
  renderSuggestion: null,
  isLoading: false,
  appendSpaceOnAdd: false,
}

export default Mention
