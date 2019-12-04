import React, {useEffect, useState, createRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
  Platform,
  Modal,
} from 'react-native';
import NavigationService from '../../services/NavigationService';
import {
  COLOR_SCHEME,
  SIZE,
  br,
  ph,
  pv,
  opacity,
  FONT,
  WEIGHT,
} from '../../common/common';
import Icon from 'react-native-vector-icons/Feather';
import {getElevation, h, w, timeSince} from '../../utils/utils';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {useForceUpdate} from '../../views/ListsEditor';

export const Dialog = ({
  title,
  paragraph = null,
  positiveText = 'Ok',
  negativeText = 'Cancel',
  icon = null,
  visible,
  close = () => {},
  positivePress = () => {},
}) => {
  const [colors, setColors] = useState(COLOR_SCHEME);
  const forceUpdate = useForceUpdate();

  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={() => (refs = [])}>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255,255,255,0.3)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            maxHeight: 350,
            elevation: 5,
            borderRadius: 5,
            backgroundColor: colors.bg,
            paddingHorizontal: ph,
            paddingVertical: pv,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {icon ? (
              <Icon name={icon} color={colors.accent} size={SIZE.lg} />
            ) : null}

            <Text
              style={{
                color: colors.accent,
                fontFamily: WEIGHT.semibold,
                marginLeft: 10,
                fontSize: SIZE.lg,
                marginTop: -5,
              }}>
              {title}
            </Text>
          </View>

          {paragraph ? (
            <Text
              style={{
                color: colors.icon,
                fontFamily: WEIGHT.regular,
                fontSize: SIZE.sm - 1,
                textAlign: 'center',
                marginTop: 10,
              }}>
              {paragraph}
            </Text>
          ) : null}

          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <TouchableOpacity
              activeOpacity={opacity}
              onPress={() => positivePress()}
              style={{
                paddingVertical: pv,
                paddingHorizontal: ph,
                borderRadius: 5,
                width: '48%',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: colors.accent,
                backgroundColor: colors.accent,
                borderWidth: 1,
              }}>
              <Text
                style={{
                  fontFamily: WEIGHT.medium,
                  color: 'white',
                  fontSize: SIZE.sm,
                }}>
                {positiveText}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={opacity}
              onPress={() => close()}
              style={{
                paddingVertical: pv,
                paddingHorizontal: ph,
                borderRadius: 5,
                width: '48%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
              }}>
              <Text
                style={{
                  fontFamily: WEIGHT.medium,
                  color: colors.icon,
                  fontSize: SIZE.sm,
                }}>
                {negativeText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
