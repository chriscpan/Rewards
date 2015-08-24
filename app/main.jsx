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
        <RewardList rewards={this.state.rewards} />
        <div className="content">
        </div>
      </div>
    )
  },

})

React.render(<Main />, document.getElementById('main'))
