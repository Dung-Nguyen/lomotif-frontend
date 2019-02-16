import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * InfiniteScroll Component
 * Using React.Component
 *
 * Renders a layout access scroll to load data
 *
 * **NOTE**: Work with window.onscroll
 */

class InfiniteScroll extends Component {
  constructor(props) {
    super(props)

    window.onscroll = () => {
      const { error, hasMore, isLoading } = this.props
      if (error || isLoading || !hasMore) return

      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.props.loadMore()
      }
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

InfiniteScroll.propTypes = {
  /** Prop to determine if there is an error loading more data */
  error: PropTypes.object,
  /** Prop to identify more data */
  hasMore: PropTypes.bool.isRequired,
  /**  Prop to loading data */
  isLoading: PropTypes.bool.isRequired,
  /**  Function to load more data */
  loadMore: PropTypes.func
}

InfiniteScroll.defaultProps = { hasMore: false, isLoading: false }

export default InfiniteScroll
