import React from 'react';

const RedirectExternal = ({ to }: { to: string }) => {
  React.useEffect(() => {
    window.location.href = to;
  }, [to]);
  return <div />;
};

export default RedirectExternal;
