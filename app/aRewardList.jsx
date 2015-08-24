var RewardList = React.createClass({
  render: function() {
    var that = this;
    var rewardItem = this.props.rewards.map(function(reward){
      return (
        <Reward
          id = {reward.id}
          user = {reward.user}
          experience = {reward.experience}
          date = {reward.date}
          status = {reward.status}
          onRewardEdit={that.props.onRewardEdit}
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
