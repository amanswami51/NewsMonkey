import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
      let {title, discription, imageURL, newsURL, author, publishedAt} = this.props;
    return (
      <div className='container my-3'>
        <div className="card">
            <div>
              <span className="badge badge-pill badge-danger" style={{color:"red", backgroundColor:"green", display:"flex", justifyContent:'flex-end', position:'absolute', right:'0'}}>IndiaTimes</span>
            </div>
            <img src={!imageURL?"https://images.barrons.com/im-808950/social":imageURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {publishedAt} </small></p>
                <p className="card-text">{discription}...</p>
                <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
