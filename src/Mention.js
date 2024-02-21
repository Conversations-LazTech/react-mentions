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
  console.log('ALOO ~ Mention ~ style:', style)
  const styles = useStyles(defaultStyle, { style, className, classNames })
  console.log('ALOO ~ Mention ~ styles:', { ...styles })

  console.log('ALOO ~ Mention ~ mismatchStyles:', mismatchStyles)
  console.log('ALOO ~ Mention ~ display:', display)
  console.log('ALOO ~ Mention ~ data:', data)

  const isDataArray = data instanceof Array
  console.log('ALOO ~ Mention ~ isDataArray:', isDataArray)

  const dis = display.replace('[', '').replace(']', '')
  console.log('ALOO ~ Mention ~ dis:', dis)
  if (data instanceof Array) {
    const isNotMismatched = data.find((d) => {
      console.log('ALOO ~ Mention ~ d:', d)
      if (d.display === dis) return d
    })

    console.log('ALOO ~ Mention ~ isNotMismatched:', isNotMismatched)
    console.log('ALOO ~ Mention ~ !isNotMismatched:', !isNotMismatched)
    if (!isNotMismatched) {
      console.log('ALOO ~ Mention ~ returning mismatched')
      return <strong {...{ ...styles, ...mismatchStyles }}>{display}</strong>
    }
  }
  console.log('ALOO ~ Mention ~ returning matched')
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
