import React from "react";

interface Props {
  children?: React.ReactNode;
}

function MainTemplate({ children }: Props) {
  return (
    <>
      <div>MainTemplate</div>
      {children}
    </>
  );
}

export default MainTemplate;
