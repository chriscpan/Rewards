var Tag = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
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
    // var tagId = this.context.router.getCurrentParams().tag;
    return (
      <Link to="tag" params={ this.props } >
        <li className="tag" onClick={this.handleClick}>
          {this.props.tag}
        </li>
      </Link>
    )
  },

})
