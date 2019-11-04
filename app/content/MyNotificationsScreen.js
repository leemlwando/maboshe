import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { connect } from 'react-redux';
import { handleRequest } from '../../actions';
const REQUESTS = 'requests';
const REQUESTS_OBJECT = [
  {
    'client_id':'1',
    'status':'pending',
    'time_away':'4',
    'car_type': 'Toyota',
    'request_id': '1'
  }
]
 class MyNotificationsScreen extends React.Component {
  constructor(props){
    super(props);
    this.fetchRequests = this.fetchRequests.bind(this);
    this.onAcceptRequest = this.onAcceptRequest.bind(this);
    this.requests = REQUESTS_OBJECT;
    this.state = {
      requests: REQUESTS_OBJECT
    }
  }
    async componentDidMount(){
      await AsyncStorage.setItem(REQUESTS, JSON.stringify(REQUESTS_OBJECT));
      this.requests = REQUESTS_OBJECT;
    }
    async onAcceptRequest(id){
      this.props.acceptRequest(id);
    }

   fetchRequests(){

    

    if(!this.requests.filter((request,index) => (request.status === 'pending')).length){
      return (
        <ListItem thumbnail>
              <Body>
                <Text>No Requests Available</Text>
              </Body>
        </ListItem>
      )
    }
   

    return this.requests.filter((request,index) => (request.status === 'pending')).map((request,i) => (
      <ListItem key={request.request_id} thumbnail onPress={() => Alert.alert('Pressed')}>
      {/* <Left>
        <Thumbnail square  source={require('../icons/bell.png')} />
      </Left> */}
      <Body>
        <Text>{request.car_type}</Text>
        <Text note numberOfLines={1}>{request.time_away} min</Text>
      </Body>
      <Right>
        <Button rounded block onPress={(this.onAcceptRequest(request.request_id))}>
            <Text>Accept</Text>
        </Button>
      </Right>
    <Right>
        <Button rounded block success>
          <Text>Decline</Text>
        </Button>
    </Right>
    </ListItem>
    ))

  }
  render() {
    return (
        <Container>
        <Content>
          <List>
             {
               this.props.requests.map((request,index) => (
                <ListItem key={request.request_id} thumbnail onPress={() => Alert.alert('Pressed')}>
                {/* <Left>
                  <Thumbnail square  source={require('../icons/bell.png')} />
                </Left> */}
                <Body>
                  <Text>{request.car_type}</Text>
                  <Text note numberOfLines={1}>{request.time_away} min</Text>
                </Body>
                <Right>
                  <Button rounded block onPress={(this.onAcceptRequest(request.request_id))}>
                      <Text>Accept</Text>
                  </Button>
                </Right>
              <Right>
                  <Button rounded block success>
                    <Text>Decline</Text>
                  </Button>
              </Right>
              </ListItem>
               ))
             }
          </List>
        </Content>
      </Container>
    );
  }
}


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    const { requestReducer} =  state
    console.log('ddd',requestReducer)
  return {
      requests: requestReducer.requests
  };
};// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    acceptRequest: (details) => dispatch(handleRequest(details))
  };
};// Exports
export default connect(mapStateToProps, mapDispatchToProps)(MyNotificationsScreen);