export default {
  loading: true,
  error: null,
  pushData:{},
  rent: [],
  buy: [],
  messages: [{
    _id: Math.round(Math.random() * 1000000),
    text: "همکاران ما در اسرع وقت به شما پاسخ خواهند داد.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 0,
      name: 'پشتیبانی',
    },
  }]
};
