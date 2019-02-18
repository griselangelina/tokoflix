import React, { Component } from 'react';
import {Row,Col,Grid,ProgressBar} from 'react-bootstrap';
import Panel from '../Component/Panel';
import Header from '../Component/Header';
import {convertharga} from '../helper/helper';
import {MediumCard,SmallCard} from '../Component/Card';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; /*bind dari file action */
import {getDetail,getRecommend,getSimilar} from '../redux/action/detail';
import {getCast} from '../redux/action/cast';
import {movieBuy} from '../redux/action/user';
import CurrencyFormat from 'react-currency-format';
import {Star} from '../Component/Atom/Star';

import './themePage.css';

export class Detail extends Component {
    constructor(){
        super()
        this.state={
            collectionCheck:false,
        }
    }
    componentDidMount(){
       const id=this.props.match.params.idx.split("-")[0];
       this.props.getDetail(id);
       this.props.getCast(id);
        this.props.getRecommend(id);
        this.props.getSimilar(id);
        
      }

   buy = (credit,id) =>{
    if( this.props.collection.indexOf(id)>-1){
        alert("already have")
     }else{
         if(credit>0){
            const col=[...this.props.collection,id]
            this.props.movieBuy(credit,col)
         }else{
             alert("Credit tidak cukup")
         }

     } 
   }
    render() {
        const harga=convertharga(this.props.detail.vote_average);
        const star = [];
        for (var i=0; i < this.props.detail.vote_average; i++) {
            star.push( <Star />);
        }

        return (
            this.props.detail === null ?"No Detail Data" :
            <div>
                <Header credit={this.props.credit}/>
                {
                    this.props.isLoadingDetail ?
                    <ProgressBar animated now={45} />
                :
                <Grid>
                        <Row>
                        
                        <Col md={3}>
                        <div className="poster">
                            <img src= {`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.props.detail.poster_path}`}/>
                        </div>
                        </Col>

                        <Col md={9}>
                            <div className="header_poster_wrapper">
                                <div className="header">
                                    <div className="title">
                                        <p>{this.props.detail.original_title}</p>

                                    </div>
                                     {
                                        this.props.collection !==null ? (
                                        this.props.collection.indexOf(this.props.detail.id)>-1 ? 
                                        <div className="collection"><p>Collection</p></div>:"")
                                        : "no collection data"

                                    } 

                                
                                    <div className="body">
                                        <p className="title-body">Rating</p>
                                        <span>{star}</span>
                                    </div>
                                    <div className="body">
                                        <p className="title-body">Overview</p>
                                        <span>{this.props.detail.overview}</span>
                                    </div>
                                    <div className="body">
                                        <p className="title-body">Price</p>
                                        <span className="price"><CurrencyFormat value={harga} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <div>{value}</div>} /></span>
                                    </div>
                                    <div className="body">
                                        <p className="title-body">Duration</p>
                                        <span>{this.props.detail.runtime} Minutes</span>
                                    </div>
                                    {
                                        this.state.collectionCheck ? "":
                                        <div className="submit">
                                            <button onClick={()=>this.buy(this.props.credit-harga,this.props.detail.id)} >Buy Movie</button>
                                        </div>
                                    }
                                
                                </div>
                            </div>   
                        </Col>
                        
                    </Row>
                    <Panel panelTitle={"Top Billed Cast"}  >
                        {
                            this.props.cast.slice(0,5).map((p)=> 
                            <Col md={2}>
                                <MediumCard  nama={p.name} img={p.profile_path} char={p.character}/>        
                            </Col> )
                        }         
                    </Panel>
                    <Panel panelTitle={"Recommendation"}  >
                        {
                            this.props.recommend.slice(0,4).map((p)=> 
                            <Col md={3}>
                                <SmallCard  nama={p.title} img={p.backdrop_path}/>        
                            </Col> )
                        }         
                    </Panel>  
                    <Panel panelTitle={"Similar Movie"}  >
                        {
                            this.props.similar.slice(0,4).map((p)=> 
                            <Col md={3}>
                                <SmallCard  nama={p.title} img={p.backdrop_path}/>        
                            </Col> )
                        }         
                    </Panel>             
                    
                </Grid>
                }
           </div>
        );
    }
}

const mapStateToProps = (state) =>({
    detail:state.detail.detail,
    recommend:state.detail.recommend,
    similar:state.detail.similar,
    cast:state.cast.cast,
    credit:state.user.credit,
    collection:state.user.collection,
    isLoadingSimilar:state.detail.isLoadingSimilar,
    isLoadingRec:state.detail.isLoadingRec,
    isLoadingDetail:state.detail.isLoadingDetail,
  })
  
  
  const mapDispatchToProps =(dispatch) =>bindActionCreators({
    getDetail,getCast,movieBuy,getRecommend,getSimilar
  },dispatch)
  
  export default connect(mapStateToProps,mapDispatchToProps)(Detail);