'use strict';

var user1 = { id: 1, name: 'Joe Smith' };
var user2 = { id: 1, name: 'Sue Mae' };

var rewards = [{
  id: 1,
  user: user1,
  experience: 'Trip to Hawaii',
  date: '10/23/2014',
  status: 'new'
}, {
  id: 2,
  user: user1,
  experience: 'The Bond Experience',
  date: '2/23/2015',
  status: 'redeemed'
}, {
  id: 3,
  user: user2,
  experience: 'Cruise around Alaska',
  date: '4/17/2014',
  status: 'completed'
}, {
  id: 4,
  user: user2,
  experience: 'Bladesmithing',
  date: '8/20/2015',
  status: 'scheduled'
}, {
  id: 5,
  user: user2,
  experience: 'Yerba Mate Tasting in Napa',
  date: '7/23/2015',
  status: 'completed'
}, {
  id: 6,
  user: user2,
  experience: 'Super Bowl Tickets',
  date: '1/2/2014',
  status: 'redeemed'
}, {
  id: 7,
  user: user2,
  experience: 'Warriors Tickets',
  date: '1/2/2014',
  status: 'redeemed'
}, {
  id: 8,
  user: user2,
  experience: 'Drive Bugatti Veyron',
  date: '1/2/2014',
  status: 'redeemed'
}, {
  id: 9,
  user: user1,
  experience: 'Kite Surfing Lessons',
  date: '1/2/2014',
  status: 'redeemed'
}, {
  id: 10,
  user: user1,
  experience: 'Something cool',
  date: '11/11/2011',
  status: 'redeemed'
}, {
  id: 11,
  user: user2,
  experience: 'Drive Lamborghini',
  date: '6/20/2013',
  status: 'redeemed'
}, {
  id: 12,
  user: user2,
  experience: 'World Food Tour',
  date: '1/1/2010',
  status: 'redeemed'
}, {
  id: 13,
  user: user2,
  experience: 'Sharks Tickets',
  date: '1/2/2014',
  status: 'scheduled'
}, {
  id: 14,
  user: user2,
  experience: 'Electric Daisy Carnival',
  date: '1/2/2014',
  status: 'redeemed'
}, {
  id: 15,
  user: user1,
  experience: 'Olympics',
  date: '2/2/2013',
  status: 'new'
}, {
  id: 16,
  user: user2,
  experience: 'Great Barrier Reef Snorkeling',
  date: '1/2/2014',
  status: 'new'
}, {
  id: 17,
  user: user2,
  experience: 'Wine Tasting',
  date: '10/17/2014',
  status: 'completed'
}, {
  id: 18,
  user: user1,
  experience: 'Biergarten',
  date: '1/2/2014',
  status: 'completed'
}, {
  id: 19,
  user: user2,
  experience: 'Trip to Europe',
  date: '11/2/2014',
  status: 'new'
}, {
  id: 20,
  user: user1,
  experience: 'Fishing Trip',
  date: '1/23/2015',
  status: 'redeemed'
}];
'use strict';

var Reward = React.createClass({ displayName: "Reward",
  getInitialState: function getInitialState() {

    return {
      editOn: false
    };
  },

  // name: name
  handleEdit: function handleEdit(e) {
    this.setState({
      editOn: true
    });
  },

  finishEdit: function finishEdit() {
    this.setState({
      editOn: false
    });
  },

  handleChangeName: function handleChangeName(event) {
    // this.props.user['name'] = event.target.value;
    this.props.onRewardEdit({
      type: 'name',
      value: event.target.value,
      id: this.props.id
    });
  },

  handleChangeExp: function handleChangeExp(event) {
    // this.props.experience = event.target.value;
    this.props.onRewardEdit({
      type: 'exp',
      value: event.target.value,
      id: this.props.id
    });
  },

  handleChangeStat: function handleChangeStat(event) {
    // this.props.status = event.target.value;
    this.props.onRewardEdit({
      type: 'stat',
      value: event.target.value,
      id: this.props.id
    });
  },

  handleChangeDate: function handleChangeDate(event) {
    // this.props.date = event.target.value;
    this.props.onRewardEdit({
      type: 'date',
      value: event.target.value,
      id: this.props.id
    });
  },

  render: function render() {
    if (this.state.editOn === false) {
      return this.renderReward();
    } else {
      return this.renderEdit();
    }
  },

  renderReward: function renderReward() {
    var name;
    if (typeof this.props.user['name'] === 'undefined') {
      name = this.props.user;
    } else {
      name = this.props.user['name'];
    }
    return React.createElement("div", { className: "reward" }, React.createElement("ul", { className: "rewardDescript" }, React.createElement("div", { className: "edit", onClick: this.handleEdit }, "Edit"), React.createElement("div", { className: "stat-left" }, React.createElement("li", null, "Username: ", name), React.createElement("li", null, "Reward: ", this.props.experience)), React.createElement("div", { className: "stat-right" }, React.createElement("li", null, "Status: ", this.props.status), React.createElement("li", null, "Date: ", this.props.date))));
  },

  renderEdit: function renderEdit() {
    var name;
    if (typeof this.props.user['name'] === 'undefined') {
      name = this.props.user;
    } else {
      name = this.props.user['name'];
    }
    return React.createElement("form", { className: "reward" }, React.createElement("ul", { className: "rewardDescript" }, React.createElement("div", { className: "edit", onClick: this.finishEdit }, "Done Editing"), React.createElement("div", { className: "stat-left" }, React.createElement("li", null, "Username: ", React.createElement("input", { type: "text", defaultValue: name, onChange: this.handleChangeName })), React.createElement("li", null, "Reward: ", React.createElement("input", { type: "text", defaultValue: this.props.experience, onChange: this.handleChangeExp }))), React.createElement("div", { className: "stat-right" }, React.createElement("li", null, "Status: ", React.createElement("input", { type: "text", defaultValue: this.props.status, onChange: this.handleChangeStat })), React.createElement("li", null, "Reward: ", React.createElement("input", { type: "text", defaultValue: this.props.date, onChange: this.handleChangeDate })))));
  }
});
"use strict";

var RewardList = React.createClass({ displayName: "RewardList",
  render: function render() {
    var that = this;
    var rewardItem = this.props.rewards.map(function (reward) {
      return React.createElement(Reward, {
        key: reward.id,
        id: reward.id,
        user: reward.user,
        experience: reward.experience,
        date: reward.date,
        status: reward.status,
        onRewardEdit: that.props.onRewardEdit
      });
    });
    return React.createElement("div", { className: "rewardList" }, rewardItem);
  }
});
'use strict';

var Tag = React.createClass({ displayName: "Tag",
  // contextTypes: {
  //   router: React.PropTypes.func.isRequired
  // },
  getInitialState: function getInitialState() {
    return {
      filterOn: false
    };
  },

  handleClick: function handleClick(e) {
    var target = $(e.currentTarget);
    var text = target.text();
    if (text === 'filter') {
      var prevTag = $('.active').text();
      this.props.onSearchSwap(prevTag);
      this.getRewards(prevTag);
    } else {
      this.getRewards(text);
    }
    $('.active').removeClass('active');
    target.addClass('active');
  },

  getRewards: function getRewards(text) {
    var filteredArr = [];
    rewards.forEach((function (reward) {
      if (text === 'all') {
        filteredArr = rewards;
        return;
      }
      if (reward.status === text) {
        filteredArr.push(reward);
      }
    }).bind(this));
    this.props.onTagClick({
      rewards: filteredArr
    });
  },

  render: function render() {
    //  var { this.props } = this.context.router.getCurrentParams();
    // var tagId = curr.tagObj
    // console.log(this.context.router.getCurrentParams());
    // var tagId = this.context.router.getCurrentParams().tag;
    // tagObj = (this.context.router.getCurrentParams()).tagObj;
    // console.log(tagObj);
    return React.createElement(Link, { to: "tag", params: this.props }, React.createElement("li", { className: "tag", onClick: this.handleClick }, this.props.tag));
  }

});
'use strict';

var TagList = React.createClass({ displayName: "TagList",
  getInitialState: function getInitialState() {
    return {
      start: true,
      filterOn: false,
      loading: false
    };
  },
  handleSearchSwap: function handleSearchSwap() {
    console.log('hello!!!');
    this.setState({
      filterOn: true
    });
  },

  handleClose: function handleClose() {
    this.setState({
      filterOn: false
    });
    this.props.onTagClick({
      rewards: rewards
    });
  },

  handleSubmit: function handleSubmit(event) {
    event.preventDefault();
    var text = React.findDOMNode(this.refs.search).value.trim();
    var filteredArr = [];
    rewards.forEach(function (reward) {
      var name;
      if (typeof reward.user['name'] === 'undefined') {
        name = reward.user;
      } else {
        name = reward.user['name'];
      }
      if (reward.experience.toLowerCase().indexOf(text) >= 0 || name.toLowerCase().indexOf(text) >= 0 || reward.date.toLowerCase().indexOf(text) >= 0) {
        filteredArr.push(reward);
      }
    });
    this.props.onTagSearch({
      rewards: filteredArr
    });
  },

  componentDidMount: function componentDidMount() {
    var timer;
    if (this.state.start) {
      $(".tag:contains('all')").addClass('active');
      this.state.start = false;
    }
  },

  render: function render() {
    if (this.state.filterOn === false) {
      return this.renderTags();
    } else {
      return this.renderSearch();
    }
  },

  renderTags: function renderTags() {
    var that = this;
    var tagItem = this.props.tags.map(function (tag) {
      return React.createElement(Tag, {
        key: tag.id,
        id: tag.id,
        tag: tag.tag,
        onTagSearch: that.props.onTagSearch,
        onTagClick: that.props.onTagClick,
        onSearchSwap: that.handleSearchSwap
      });
    });
    return React.createElement("div", { className: "tag-box" }, React.createElement("ul", { className: "tag-list" }, tagItem));
  },

  renderSearch: function renderSearch() {
    return React.createElement("form", { className: "tagSearch", onSubmit: this.handleSubmit }, React.createElement("input", { type: "text", placeholder: "What rewards do you want to search for?", ref: "search" }, React.createElement("div", { className: "filterExit", onClick: this.handleClose }, "X")));
  }
});
'use strict';

var DefaultRoute = ReactRouter.DefaultRoute;
var HistoryLocation = ReactRouter.HistoryLocation;

var Router = ReactRouter;
// var Route = Router.Route;
// var {Route, RouteHandler, Link} = Router;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute;

var Main = React.createClass({ displayName: "Main",
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function getInitialState() {
    return {
      rewards: [],
      loading: false,
      tags: [{
        id: 1,
        tag: 'filter'
      }, {
        id: 2,
        tag: 'all'
      }, {
        id: 3,
        tag: 'new'
      }, {
        id: 4,
        tag: 'redeemed'
      }, {
        id: 5,
        tag: 'completed'
      }, {
        id: 6,
        tag: 'scheduled'
      }]
    };
  },

  loadRewards: function loadRewards() {
    this.setState({
      rewards: rewards
    });
  },

  handleTagClick: function handleTagClick(data) {
    var rewards = data.rewards;
    this.setState({
      rewards: rewards
    });
  },

  handleTagSearch: function handleTagSearch(data) {
    var rewards = data.rewards;
    this.setState({
      rewards: rewards
    });
  },

  handleRewardEdit: function handleRewardEdit(data) {
    var type = data.type;
    var id = data.id;
    var val = data.value;

    rewards.forEach(function (reward) {
      if (reward.id === id) {
        if (type === 'name') {
          reward.user = val;
        } else if (type === 'exp') {
          reward.experience = val;
        } else if (type === 'stat') {
          reward.status = val;
        } else {
          reward.date = val;
        }
        return;
      }
    });
    this.setState({
      rewards: rewards
    });
  },

  componentDidMount: function componentDidMount() {
    this.loadRewards();
  },

  render: function render() {
    return React.createElement("div", { className: "main" }, React.createElement("div", { className: "banner" }, React.createElement("p", null, "See rewards happening now.")), React.createElement(TagList, {
      tags: this.state.tags,
      onTagClick: this.handleTagClick,
      onTagSearch: this.handleTagSearch }), React.createElement(RewardList, { rewards: this.state.rewards, onRewardEdit: this.handleRewardEdit }), React.createElement("div", { className: "content" }));
  }

});
// Create a Route component that passes
// through to our App component
"use strict";

var routes = React.createElement(Route, { path: "/", handler: Main }, React.createElement(Route, { name: "tag", path: ":tag", handler: Tag }));

// function fetchData(routes, params) {
//   var data = {};
//   return Promise.all(routes
//     .filter(route => route.handler.fetchData)
//     .map(route => {
//       return route.handler.fetchData(params).then(d => {data[route.name] = d;});
//     })
//   ).then(() => data);
// }
//
// Router.run(routes, function (Handler, state) {
//   loadingEvents.emit('loadStart');
//
//   fetchData(state.routes, state.params).then((data) => {
//     loadingEvents.emit('loadEnd');
//     React.render(<Handler/>, document.getElementById('main'));
//   });
// });
Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('main'));
});