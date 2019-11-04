// / Initial State
const initialState = {
    r:  [
        {
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
          }],
  requests: [
{   request_id:'1',
    status: 'pending',
    title: '3\nmin',
    time_away: '3',
    car_type: 'Toyota',
    latitude: -15.428927,
    longitude: 28.295063,
    coordinates: {
      latitude: -15.428927,
      longitude: 28.295063
    }
  },
  {
    title: '4\nmin',
    latitude: -15.433891,
    longitude: 28.271727,
    coordinates: {
      latitude: -15.433891,
      longitude: 28.271727
    }
  }]
};
const requestReducer = (state = initialState, action) => {
  switch (action.type) {    // Logged In
    case 'REQUEST': {
      return {
        // State
        ...state,
        requests: state.requests.push(action.payload)
      }
    } 
    default: {
      return state;
    }
  }
};// Exports
export default requestReducer;






//   const sedan = [{
//     title: '5\nmin',
//     coordinates: {
//       latitude: -15.418005,
//       longitude: 28.309133
//     }
//   },
//   {
//     title: '6\nmin',
//     coordinates: {
//       latitude: -15.450437,
//       longitude: 28.290944
//     }
//   }]
  
//   const suv = [{
//     title: '2\nmin',
//     coordinates: {
//       latitude: 12.899844,
//       longitude: 77.631634
//     }
//   },
//   {
//     title: '7\nmin',
//     coordinates: {
//       latitude: 12.905925,
//       longitude: 77.632347
//     }
//   }]