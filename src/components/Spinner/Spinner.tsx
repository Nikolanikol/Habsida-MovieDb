import React from 'react';
import { Flex, Spin } from 'antd';

const Spinner: React.FC = () => (
  <Flex
    style={{ height: '100vh' }}
    justify="center"
    align="center"
    gap="middle"
  >
    <Spin size="large" />
  </Flex>
);

export default Spinner;
