var TagList = React.createClass({
  render: function(){
    var tagItem = this.props.tags.map(function(tag){
      return (
        <li className="tag">
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
