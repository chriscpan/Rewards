(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var user1 = { id: 1, name: 'Joe Smith' };
var user2 = { id: 1, name: 'Sue Mae' };

var rewards = [
  {
    id: 1,
    user: user1, 
    experience: 'Trip to Hawaii',
    date: '10/23/2014',
    status: 'new'
  },
  {
    id: 2,
    user: user1, 
    experience: 'The Bond Experience',
    date: '2/23/2015',
    status: 'redeemed'
  },
  {
    id: 3,
    user: user2, 
    experience: 'Cruise around Alaska',
    date: '4/17/2014',
    status: 'completed'
  },
  {
    id: 4,
    user: user2, 
    experience: 'Bladesmithing',
    date: '8/20/2015',
    status: 'scheduled'
  },
  {
    id: 5,
    user: user2, 
    experience: 'Yerba Mate Tasting in Napa',
    date: '7/23/2015',
    status: 'completed'
  },
  {
    id: 6,
    user: user2, 
    experience: 'Super Bowl Tickets',
    date: '1/2/2014',
    status: 'redeemed'
  },
  {
    id: 7,
    user: user2, 
    experience: 'Warriors Tickets',
    date: '1/2/2014',
    status: 'redeemed'
  },
  {
    id: 8,
    user: user2, 
    experience: 'Drive Bugatti Veyron',
    date: '1/2/2014',
    status: 'redeemed'
  },
  {
    id: 9,
    user: user1, 
    experience: 'Kite Surfing Lessons',
    date: '1/2/2014',
    status: 'redeemed'
  },
  {
    id: 10,
    user: user1, 
    experience: 'Something cool',
    date: '11/11/2011',
    status: 'redeemed'
  },
  {
    id: 11,
    user: user2, 
    experience: 'Drive Lamborghini',
    date: '6/20/2013',
    status: 'redeemed'
  },
  {
    id: 12,
    user: user2, 
    experience: 'World Food Tour',
    date: '1/1/2010',
    status: 'redeemed'
  },
  {
    id: 13,
    user: user2, 
    experience: 'Sharks Tickets',
    date: '1/2/2014',
    status: 'scheduled'
  },
  {
    id: 14,
    user: user2, 
    experience: 'Electric Daisy Carnival',
    date: '1/2/2014',
    status: 'redeemed'
  },
  {
    id: 15,
    user: user1, 
    experience: 'Olympics',
    date: '2/2/2013',
    status: 'new'
  },
  {
    id: 16,
    user: user2, 
    experience: 'Great Barrier Reef Snorkeling',
    date: '1/2/2014',
    status: 'new'
  },
  {
    id: 17,
    user: user2, 
    experience: 'Wine Tasting',
    date: '10/17/2014',
    status: 'completed'
  },
  {
    id: 18,
    user: user1, 
    experience: 'Biergarten',
    date: '1/2/2014',
    status: 'completed'
  },
  {
    id: 19,
    user: user2, 
    experience: 'Trip to Europe',
    date: '11/2/2014',
    status: 'new'
  },
  {
    id: 20,
    user: user1, 
    experience: 'Fishing Trip',
    date: '1/23/2015',
    status: 'redeemed'
  }
];


},{}]},{},[1])
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Main = React.createClass({displayName: "Main",

  render: function() {
    return (
      React.createElement("div", {className: "rewards"}, 
        React.createElement(Tags, null), 
        React.createElement("p", null, " Here are all the rewards "), 
        React.createElement("div", {className: "content"}
        )
      )
    )
  },

})

React.render(React.createElement(Main, null), document.getElementById('main'))


},{}]},{},[1])
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Tag = React.createClass({displayName: "Tag",
  
})


},{}]},{},[1])