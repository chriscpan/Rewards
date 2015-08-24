var TagList = React.createClass({
  getInitialState: function() {
    return {
      filterOn: false
    }
  },

  handleClick: function(e) {
    var target = $(e.currentTarget);
    var text = target.text();
    if (text === 'filter') {
      this.setState({
        filterOn: true
      })
      var prevTag = $('.active').text()
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
      if (text === 'filter') {
        this.setState({
          filterOn: true
        });
      }
      if (reward.status === text) {
        filteredArr.push(reward)
      }
    }.bind(this))
    this.props.onTagClick({
      rewards: filteredArr
    })
  },

  handleClose: function(){
    this.props.onTagClick({
      rewards: rewards
    });
    // $('.tag').on('click', this.handleClick);
    this.setState({
      filterOn: false
    });
  },

  render: function(){
    if (this.state.filterOn === false) {
      return this.renderTags();
    } else {
      return this.renderSearch();
    }

  },

  renderTags: function() {
    var that = this;
    var tagItem = this.props.tags.map(function(tag){
      return (
        <li className="tag" onClick={that.handleClick}>
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
  },

  renderSearch: function() {
    return(
        <form className="tagSearch">
          <input type="text" placeholder="What rewards do you want to search for?">
            <div className="filterExit" onClick={this.handleClose}>
              X
            </div>
          </input>
        </form>
    )
  }
})
