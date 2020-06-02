module.exports = {
  meta: {},
  data: {
    DEVICE_SERVER: {
      url: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'
    },
    BACKEND_ROUTES: [
      {
        "route":"/",
        "url": "http://localhost:3000/"
      },
      {
        "route": "signup",
        "url": "http://localhost:3000/signup"
      },
      {
        "route": "listDragon",
        "url": "http://localhost:3000/listDragon"
      },
      {
        "route": "dragon",
        "url": "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
      }
    ]
  }
}