import React, { Component } from 'react'

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

export default InfiniteScroll
