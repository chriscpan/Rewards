var TagList = React.createClass({
  getInitialState: function() {
    return {
      filterOn: false
    }
  },

  handleClick: function(e) {
    var target = $(e.currentTarget);
    $('.active').removeClass('active');
    target.addClass('active');
    var text = target.text();
    var filteredArr = [];
    rewards.forEach(function(reward){
      if (text === 'all') {
        filteredArr = rewards;
        return;
      }
      if (reward.status === text) {
        filteredArr.push(reward)
      }
    })
    this.props.onTagClick({
      rewards: filteredArr
    })
    console.log(filteredArr.length);

  },

  componentDidMount: function(){
    $('.tag').on('click', this.handleClick);
  },

  render: function(){
    console.log(this.state.filterOn);
    if (this.state.filterOn === false) {
      return this.renderTags();
    }

  },

  renderTags: function() {
    var tagItem = this.props.tags.map(function(tag){
      return (
        <li className="tag" onClick={this.handleClick}>
          {tag}
        </li>
      )
    })
    return (
      <div className="tag-box">
        <ul className="tag-list">
          {tagItem}
        </ul>
      </div>
    )
  }
})
