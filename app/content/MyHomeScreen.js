import React, { Component } from 'react';
import { View, Modal} from 'react-native';
import MyHeader from './MyHeader';
import MapsScreen from './MapsScreen';
import TabsScreen from './TabsScreen';
import styles from '../styles/home-styles';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { connect } from 'react-redux';

 class MyHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -15.444575000000002,
        longitude: 28.357435000000002,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markers: mini
    }
    console.log('constructor', props.requests)
    this.handler = this.handler.bind(this)
  }

  handler(marker) {
    this.setState({
      markers: marker
    });
  }

  componentWillReceiveProps(props){
    console.log('recieved',props)
  }

  render() {
    return (
      <Container>
        {/* <MyHeader navigation={this.props.navigation} /> */}
        <View style={styles.bodyContainer}>
          <View style={styles.mapContainer}>
            <MapsScreen state={{...this.state, markers: this.props.requests}}/>
          </View>

          {/* <View style={styles.tabsContainer}>
            <TabsScreen handler = {this.handler}/>
          </View> */}
          <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="apps" />
              <Text>Home</Text>
            </Button>
            <Button badge vertical onPress={() => this.props.navigation.navigate('Notifications')}>
              <Badge ><Text>3</Text></Badge>
              <Icon active name="navigate" />
              <Text>Requests</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('MyTrips')}>
              <Icon name="car" />
              <Text>Motorist</Text>
            </Button>
            <Button  vertical onPress={() => this.props.navigation.navigate('UserDetails')}>
              <Icon  name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
          </View>
        </Container>
    );
  }
}

const mini = [{
  title: '3\nmin',
  coordinates: {
    latitude: -15.44437,
    longitude: 28.357441
  }
},
{
  title: '3\nmin',
  latitude:-15.443931,
  longitude: 28.353312,
  coordinates: {
    latitude:-15.443931,
    longitude: 28.353312
  }
},
{
  title: '4\nmin',
  coordinates: {
    latitude: -15.433891,
    longitude: 28.271727
  }
}]

const sedan = [{
  title: '5\nmin',
  coordinates: {
    latitude: 12.905925,
    longitude: 77.632347
  }
},
{
  title: '6\nmin',
  coordinates: {
    latitude: 12.894442,
    longitude: 77.635421
  }
}]

const suv = [{
  title: '2\nmin',
  coordinates: {
    latitude: 12.899844,
    longitude: 77.631634
  }
},
{
  title: '7\nmin',
  coordinates: {
    latitude: 12.905925,
    longitude: 77.632347
  }
}]



// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
 const { requestReducer } = state;
 console.log('cordnated', requestReducer.requests)
  return {
    requests: requestReducer.requests,
  };
};// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
  
  };
};// Exports
export default connect(mapStateToProps, mapDispatchToProps)(MyHomeScreen);