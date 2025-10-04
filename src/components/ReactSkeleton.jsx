import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="mx-auto"
    {...props}
  >
    <circle cx="21" cy="246" r="15" />
    <rect x="48" y="233" rx="2" ry="2" width="140" height="10" />
    <rect x="48" y="249" rx="2" ry="2" width="140" height="10" />
    <rect x="4" y="-185" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
);

export default MyLoader;
