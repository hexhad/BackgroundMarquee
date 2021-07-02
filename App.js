import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Marquee from 'react-native-awesome-marquee';

const Card = styled.View`
    height :auto;
    background : #30353b;
    border-radius: 8px
    margin-bottom:5px;
    margin-top:5px;
    
`;

const Shape = styled.View`
    background: #393e44;
    border-radius: 5px
    margin-right:6px;
    margin-top:4px;
    margin-bottom:4px;
`;

const ShapeText = styled.Text`
  font-size: 12px;
  color: #74737c;
  margin: 4px;
  text-align: center;
`;

const ButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
  margin: 4px;
  text-align: center;
`;

const NormalText = styled.Text`
  font-size: 15px;
  color: #fff;
`;
const TopText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

const ButtonCustom = styled.TouchableOpacity`
  background: #d52c22;
  color: #e1e1e1;
  width: 80px;
  border-radius: 3px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-top: 10px;
`;

const HashCard = props => (
  <View style={styles.Row}>
    {props.techs.map(item => (
      <Shape>
        <ShapeText>{item.toString()}</ShapeText>
      </Shape>
    ))}
  </View>
);

export default function App() {
  return (
    <>
      <View
        style={{
          backgroundColor: '#f2f2f2',
          flex: 1,
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 30,
        }}>
        <View>
          <Card>
            <View style={{marginLeft: 120}}>
              <Marquee duration={20000} height={200}>
                <HashCard
                  techs={[
                    'react',
                    'redux',
                    'reactNative',
                    'java',
                    'android',
                    'flutter',
                    'maven',
                    'spring',
                    'Angular',
                    'IntelliJ',
                    'VSCode',
                  ]}
                />
              </Marquee>
            </View>
          </Card>
          <View style={styles.MiddleContent}>
            <TopText>Hello!!</TopText>
            <NormalText>I am hashan , Developer From SriLanka 🇱🇰</NormalText>
            <ButtonCustom>
              <ButtonText>Button</ButtonText>
            </ButtonCustom>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Row: {
    // paddingLeft: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'center',
    alignSelf: 'flex-end',
  },

  scrolling2: {
    backgroundColor: 'red',
    // transform: [{rotate: '90deg'}],
  },

  container: {
    width: 500,
    height: 600,
    justifyContent: 'flex-start',
  },

  MiddleContent: {
    marginTop: -150,
    marginLeft: 30,
    marginRight: 60,
  },
});
