import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle  cx="134" cy="136" r="125" /> 
    <rect x="0" y="291" rx="10" ry="10" width="280" height="22" /> 
    <rect x="0" y="336" rx="10" ry="10" width="280" height="88" /> 
    <rect x="133" y="359" rx="0" ry="0" width="16" height="2" /> 
    <rect x="0" y="443" rx="10" ry="10" width="95" height="30" /> 
    <rect x="125" y="431" rx="10" ry="10" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton