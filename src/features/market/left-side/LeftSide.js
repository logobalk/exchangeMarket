import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../core/components/Button';
import CryptoConst from './CryptoConst';
import { Col, Row } from 'antd';
export default function LeftSide(props) {
  const navigate = useNavigate();
  const onClick = (value, title) => {
    props.setTickerPriceValue(value, title);
    navigate(`market/${value}`);
  };
  return (
    <Row style={{ float: 'right' }}>
      {CryptoConst.map((item) => (
        <Col span={24} key={item.title}>
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
