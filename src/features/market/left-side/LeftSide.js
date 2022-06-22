import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../../../core/components/Button';
import CryptoConst from './CryptoConst';
import { Col, Row } from 'antd';
export default function LeftSide(props) {
  console.log('CryptoConst==>', CryptoConst);
  const navigate = useNavigate();
  const onClick = (value, title) => {
    console.log('onclick===>', title);
    props.setTickerPriceValue(value, title);
    navigate(`market/${value}`);
  };
  return (
    <Row style={{ float: 'right' }}>
      {CryptoConst.map((item) => (
        <Col span={24}>
          <Button
            type='default'
            size={item.size}
            title={item.title}
            style={item.style}
            onClick={() => onClick(item.value, item.title)}
          ></Button>
        </Col>
      ))}
    </Row>
  );
}
