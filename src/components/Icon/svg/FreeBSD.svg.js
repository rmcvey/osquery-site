import React, { Component } from 'react'

class FreeBSD extends Component {
  static defaultProps = {
    fillColor: '#4d4e7f',
    height: 17,
    width: 18,
  }

  render() {
    const { className, fillColor, height, width } = this.props

    return (
      <svg
        className={className}
        height={`${height}px`}
        version="1.1"
        viewBox={`0 0 ${width} ${height}`}
        width={`${width}px`}
      >
        <title>free-bsd</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="osqueryio-schema-flatter"
            transform="translate(-582.000000, -405.000000)"
            fill={fillColor}
          >
            <g id="Page-1" transform="translate(582.000000, 404.000000)">
              <path
                d="M17.7939,1.3026 C18.7479,2.2566 16.1039,6.4486 15.6559,6.8956 C15.2089,7.3426 14.0729,6.9316 13.1189,5.9776 C12.1649,5.0236 11.7539,3.8876 12.2009,3.4406 C12.6479,2.9926 16.8399,0.3486 17.7939,1.3026 Z M4.414,2.3114 C3.146,3.0914 2.088,4.1794 1.345,5.4714 C0.51,4.0124 -0.443,1.8934 0.225,1.2254 C0.885,0.5654 2.957,1.4854 4.414,2.3114 Z M1.3857,10.0614 C1.3857,5.7364 4.9047,2.2184 9.2287,2.2184 C9.8507,2.2184 10.4577,2.2884 11.0477,2.4284 C11.0477,2.4284 11.0467,2.4294 11.0467,2.4294 C10.4487,3.0274 10.4767,4.0364 11.1097,5.1694 C11.3797,5.7034 11.7837,6.2464 12.2787,6.7404 C12.3727,6.8354 12.4697,6.9264 12.5497,6.9974 C13.6187,8.0164 14.7937,8.6244 15.6907,8.6244 C16.2597,8.6244 16.6137,8.3894 16.8097,8.1934 C16.8197,8.1844 16.8287,8.1734 16.8387,8.1634 C16.9927,8.7814 17.0727,9.4194 17.0727,10.0614 C17.0727,14.3864 13.5537,17.9034 9.2287,17.9034 C4.9047,17.9034 1.3857,14.3864 1.3857,10.0614 Z"
                id="free-bsd"
              />
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export default FreeBSD
