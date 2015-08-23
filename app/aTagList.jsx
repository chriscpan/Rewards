var TagList = React.createClass({
  render: function(){
    var tagItem = this.props.tags.map(function(tag){
      return (
        <li>
          {tag}
        </li>
      )
    })
    return (
      <div className="tag-box">
        <ul>
          {tagItem}
        </ul>
      </div>
    )
  }
})
