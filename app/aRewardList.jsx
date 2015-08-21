var RewardList = React.createClass({
  render: function() {
    console.log('hi');
    var rewardItem = this.props.data.map(function(reward){
      return (
        // React.createElement(Reward, {
        //   user: reward.user,
        //   experience: reward.experience,
        //   date: reward.date,
        //   status: reward.status
        // })
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
      React.createElement("div")
    )
  }
})
