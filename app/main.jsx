var Main = React.createClass({
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

  handleTagClick: function(data) {
    var rewards = data.rewards;
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
          reward.user['name'] = val;
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

})

React.render(<Main />, document.getElementById('main'))
