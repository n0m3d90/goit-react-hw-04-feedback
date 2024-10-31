import React from 'react';
import { Text } from './Notification.styles';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
