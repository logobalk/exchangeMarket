import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
export default function BtcThb(props) {
  const { Meta } = Card;
  const [pairDetails, setPairDetails] = useState(props.state.pairDetails);
  useEffect(() => {
    setPairDetails(props.state.pairDetails);
  }, [props.state.pairDetails]);

  return (
    <React.Fragment>
      <p>{pairDetails.title}</p>
      <Meta title={pairDetails.lastPrice} description={`volume : ${pairDetails.volume}`} />
    </React.Fragment>
  );
}
