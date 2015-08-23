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

var Reward = React.createClass({displayName: "Reward",
  render: function() {
    return (
      React.createElement("div", {className: "reward"}, 
        React.createElement("ul", {className: "rewardDescript"}, 
          React.createElement("li", null, "Username: ", this.props.user['name']), 
          React.createElement("li", null, "Reward: ", this.props.experience), 
          React.createElement("li", null, "Status: ", this.props.status), 
          React.createElement("li", null, "Date: ", this.props.date)
        )
      )
    )
  }
})

var RewardList = React.createClass({displayName: "RewardList",
  render: function() {
    console.log('hi');
    var rewardItem = this.props.rewards.map(function(reward){
      return (
        React.createElement(Reward, {
          user: reward.user, 
          experience: reward.experience, 
          date: reward.date, 
          status: reward.status
          }
        )
      )
    })
    console.log('hellos');
    return (
      React.createElement("div", {className: "rewardList"}, 
        rewardItem
      )
    )
  }
})

// var Tag = React.creatClass({
//   render: function() {
//     return(
//       <div
//     )
//   }
// })

var TagList = React.createClass({displayName: "TagList",
  render: function(){
    var tagItem = this.props.tags.map(function(tag){
      return (
        React.createElement("li", {className: "tag"}, 
          tag
        )
      )
    })
    return (
      React.createElement("div", {className: "tag-box"}, 
        React.createElement("ul", {className: "tag-list"}, 
          tagItem
        )
      )
    )
  }
})

var Main = React.createClass({displayName: "Main",
  getInitialState: function() {
    return {
      rewards: [],
      tags: ['filter', 'all', 'new', 'redeemed', 'completed', 'scheduled']
    }
  },

  loadRewards: function(){
    this.setState({
      rewards: rewards
    })
  },

  componentDidMount: function(){
    console.log('hello');
    this.loadRewards();
  },

  render: function() {
    console.log(user1)
    return (
      React.createElement("div", {className: "main"}, 
        React.createElement("div", {className: "banner"}, 
          React.createElement("p", null, "See rewards happening now.")
        ), 
        React.createElement(TagList, {tags: this.state.tags}), 
        React.createElement(RewardList, {rewards: this.state.rewards}), 
        React.createElement("div", {className: "content"}
        )
      )
    )
  },

})

React.render(React.createElement(Main, null), document.getElementById('main'))
