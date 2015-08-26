var DefaultRoute = ReactRouter.DefaultRoute;
var HistoryLocation = ReactRouter.HistoryLocation;

var Router = ReactRouter;
// var Route = Router.Route;
// var {Route, RouteHandler, Link} = Router;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler
var Link = Router.Link;
var loadingEvents = new EventEmitter();


var Main = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      rewards: [],
      loading: false,
      tags: [
        {
          id: 1,
          tag: 'filter'
        },
        {
          id: 2,
          tag: 'all'
        },
        {
          id: 3,
          tag: 'new'
        },
        {
          id: 4,
          tag: 'redeemed'
        },
        {
          id: 5,
          tag: 'completed'
        },
        {
          id: 6,
          tag: 'scheduled'
        }
      ]
    }
  },

  loadRewards: function(){
    this.setState({
      rewards: rewards
    })
  },

  handleTagClick: function(data) {
    var rewards = data.rewards;
    var timer;
    loadingEvents.on('loadStart', () => {
      clearTimeout(timer);
    // for slow responses, indicate the app is thinking
    // otherwise its fast enough to just wait for the
    // data to load
      timer = setTimeout(() => {
        this.setState({
          loading: true,
          rewards: rewards
         });
      }, 300);
    });
    loadingEvents.on('loadEnd', () => {
      clearTimeout(timer);
      this.setState({ loading: false });
    });
    this.setState({
      rewards: rewards
    });
  },

  handleTagSearch: function(data) {
    var rewards = data.rewards;
    this.setState({
      rewards: rewards
    })
  },

  handleRewardEdit: function(data) {
    console.log('main edit!!!!');
    var type = data.type;
    var id = data.id;
    var val = data.value;

    rewards.forEach(function(reward){
      if(reward.id === id) {
        console.log(reward);
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
    })
    this.setState({
      rewards: rewards
    })
    console.log('hello???')
  },

  componentDidMount: function(){
    this.loadRewards();



  },

  render: function() {
    // user1.name = "Juno"
    return (
      <div className="main">
        <div className="banner">
          <p>See rewards happening now.</p>
        </div>
        <TagList
          tags={this.state.tags}
          onTagClick={this.handleTagClick}
          onTagSearch={this.handleTagSearch} />
        <RewardList rewards={this.state.rewards} onRewardEdit={this.handleRewardEdit}/>
        <div className="content">
        </div>
      </div>
    )
  },

  // render: function() {
  //   return (
  //     <div className="main">
  //       <div className="banner">
  //         <p>See rewards happening now.</p>
  //       </div>
  //       <Link to="all"
  //         tags={this.state.tags}
  //         onTagClick={this.handleTagClick}
  //         onTagSearch={this.handleTagSearch}> </Link>
  //       <RewardList rewards={this.state.rewards} onRewardEdit={this.handleRewardEdit}/>
  //       <div className="content">
  //       </div>
  //     </div>
  //   )
  // },

})

// React.render(<Main />, document.getElementById('main'))
