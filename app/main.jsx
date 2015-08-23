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

  componentDidMount: function(){
    console.log('hello');
    this.loadRewards();
  },

  render: function() {
    console.log(user1)
    return (
      <div className="main">
        <div className="banner">
          <p>See rewards happening now.</p>
        </div>
        <TagList tags={this.state.tags} />
        <RewardList rewards={this.state.rewards} />
        <div className="content">
        </div>
      </div>
    )
  },

})

React.render(<Main />, document.getElementById('main'))
