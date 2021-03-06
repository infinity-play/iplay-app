import { StyleSheet } from 'react-native';


const background = {
  backgroundColor: '#f9f9f9'
};

const flex = {
  flex: 1
};

const backgroundBlack = {
  backgroundColor: '#000'
};

const fullWidth = {
  width: '100%',
};

const fullHeight = {
  height: '100%'
};
const spaceBetween = {
  justifyContent: 'space-between',
};

const center = {
  justifyContent: 'center',
};

const alignCenter = {
  alignItems: 'center',
};

const textContainer = {
  width: 220,
  height: 80,
  marginHorizontal: 5,   
};

const container = {
  marginHorizontal: 10,
};

const tabContainer = {
  margin: 10,
  marginBottom: 20,
};

const player = {
  minHeight: 200,
};

const styleVideo = StyleSheet.create({
  item:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    marginBottom: 0,
  },
  itemOdd:{
    backgroundColor: '#f6f6f6'
  },
  thumb:{
    flex: 1,
    height: 'auto',
  },
  info:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  detail:{
    fontSize: 9,
    color: '#999',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 11,
    maxHeight: 28,
  },
  description: {
    fontSize: 11,
    maxHeight: 44,
  },
  footer:{
    flex: 0.16,
    paddingHorizontal: 15,
    backgroundColor: '#383838',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});

const styleLogin = StyleSheet.create({
  login:{
    flex: 1,
    marginTop: '10%',
    marginBottom: '30%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }, 
});
  
export  { 
  backgroundBlack,
  background, 
  flex,
  fullWidth,
  fullHeight,
  spaceBetween,
  alignCenter,
  center,
  textContainer,
  styleVideo,
  styleLogin,
  tabContainer,
  container,
  player
};