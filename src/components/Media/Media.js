// Wrapper for MediaQuery
import React from 'react';
import MediaQuery from 'react-responsive';

const ForMobile = props => {
  const { children, ...otherProps } = props;
  return (
    <MediaQuery maxDeviceWidth={767} {...otherProps}>
      {children}
    </MediaQuery>
  );
};

const ForTablet = props => {
  const { children, ...otherProps } = props;
  return (
    <MediaQuery minDeviceWidth={768} maxDeviceWidth={1023} {...otherProps}>
      {children}
    </MediaQuery>
  );
};

const ForDesktop = props => {
  const { children, ...otherProps } = props;
  return (
    <MediaQuery
      minDeviceWidth={1024}
      values={{ deviceWidth: 1600 }}
      {...otherProps}
    >
      {children}
    </MediaQuery>
  );
};

export { ForMobile, ForDesktop, ForTablet };
