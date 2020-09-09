import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SIZE} from '../../common/common';

export const ActionIcon = ({onPress, name, color,customStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{
        width: 60,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 12,
        zIndex: 800,
      },customStyle]}>
      <Icon name={name} color={color} size={SIZE.xxxl} />
    </TouchableOpacity>
  );
};
