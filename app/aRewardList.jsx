var RewardList = React.createClass({
  render: function() {
    var rewardItem = this.props.rewards.map(function(reward){
      return (
        <Reward
          user = {reward.user}
          experience = {reward.experience}
          date = {reward.date}
          status = {reward.status}
          >
        </Reward>
      )
    })
    return (
      <div className="rewardList">
        {rewardItem}
      </div>
    )
  }
})
