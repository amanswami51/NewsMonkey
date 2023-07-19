import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Sppiner from './Sppiner';
import PropTypes from 'prop-types'

export default class News extends Component { 
    capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    constructor(props){
        super(props);
        console.log("This is constructor of News.js file")
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
    }
    async updateNews(){
        this.props.setprogress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=516373cc0d8f4b2795f12d976aee19f3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        this.props.setprogress(30);
        let data = await fetch(url);
        this.props.setprogress(50);
        let parsedData = await data.json();
        this.props.setprogress(70);
        this.setState({page: this.state.page, articles: parsedData.articles, loading:false, totalResults:parsedData.totalResults
        })
        this.props.setprogress(100);
    }

    async componentDidMount(){
        this.updateNews();
    }
    handlePrevious = async ()=>{
        this.setState({page: this.state.page - 1})
        this.updateNews();
    }
    handleNext = async ()=>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))){
            this.setState({page: this.state.page + 1})
            this.updateNews();
        }
    }

  render() {
    return (
      <div className='container my-3'>
            <h1 className="text-center my-10" style={{marginTop:'57px'}}>NewsMonkey - {this.capitalizeFirstLetter(this.props.category)} Top Headlines</h1>
            {this.state.loading && <Sppiner />}
            <div className="row">
            {!this.state.loading && this.state.articles.map((elements)=>{
                    return <div className="col-md-4" key={elements.url}>
                                <NewsItem title={elements.title} discription={elements.description} imageURL={elements.urlToImage} newsURL={elements.url} publishedAt={elements.publishedAt} author={elements.author}/>
                            </div> 
                })}
            </div>
            <div className="d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevious}>&#8592;Back</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.handleNext}>Next&#8594;</button>
            </div>
      </div>
    )
}
}
News.defaultProps = {
    key : "general", 
    pageSize : 6,
    category : "general"
  };
News.propTypes = {
    Key: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };