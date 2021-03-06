import React from 'react'

class ThemedDecorations extends React.Component {

  render() {
    const childTheme = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      )
    })

    return (
      <div>
        {childTheme}
      </div>
    )
  }
}

export default ThemedDecorations
