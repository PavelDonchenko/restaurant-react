import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={329}
    height={420}
    viewBox="0 0 329 420"
    backgroundColor="#6f5d5d"
    foregroundColor="#ffff"
    {...props}
  >
    <circle cx="185" cy="196" r="8" /> 
    <rect x="5" y="316" rx="6" ry="6" width="320" height="42" /> 
    <rect x="0" y="0" rx="6" ry="6" width="329" height="266" /> 
    <rect x="241" y="278" rx="5" ry="5" width="79" height="18" /> 
    <rect x="5" y="376" rx="5" ry="5" width="120" height="35" /> 
    <rect x="179" y="375" rx="5" ry="5" width="144" height="29" /> 
    <rect x="5" y="283" rx="5" ry="5" width="160" height="18" />
  </ContentLoader>
)

export default Skeleton;

