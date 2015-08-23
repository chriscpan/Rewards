var RewardList = React.createClass({
  render: function() {
    console.log('hi');
    var rewardItem = this.props.data.map(function(reward){
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
    console.log('hellos');
    return (
      <div className="rewardList">
        {rewardItem}
      </div>
    )
  }
})
