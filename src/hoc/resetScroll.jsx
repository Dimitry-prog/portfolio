import React, {useEffect, useState} from "react";

export const resetScroll = (Component) => {

  return props => {
    const [scrollY, setScrollY] = useState(null);

    useEffect(() => {
      if(window.scrollY > 0) {
        setScrollY(0);
      }
    }, []);

    return (
      <>
        <Component
          {...props}
        />
      </>
    )
  }
};

