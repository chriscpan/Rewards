var Tag = React.createClass({
  getInitialState: function() {
    return {
      filterOn: false
    }
  },

  handleClick: function(e) {
    var target = $(e.currentTarget);
    var text = target.text();
    if (text === 'filter') {
      var prevTag = $('.active').text()
      this.props.onSearchSwap(prevTag);
      this.getRewards(prevTag);
    } else {
      this.getRewards(text)
    }
    $('.active').removeClass('active');
    target.addClass('active');
  },

  getRewards: function(text) {
    var filteredArr = [];
    rewards.forEach(function(reward){
      if (text === 'all') {
        filteredArr = rewards;
        return;
      }
      if (reward.status === text) {
        filteredArr.push(reward)
      }
    }.bind(this))
    this.props.onTagClick({
      rewards: filteredArr
    })
  },

  render: function() {
    return (
      <li className="tag" onClick={this.handleClick}>
          {this.props.tag}
      </li>
    )
  },

})
