import React, { Component } from 'react';
import {Row,Col,Grid} from 'react-bootstrap';
import {ProductCard} from '../Component/Card';
import {Paging} from '../Component/Atom/Paging';
import Header from '../Component/Header';
import{convertharga} from '../helper/helper';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; /*bind dari file action */
import {getNowPlayData} from '../redux/action/nowplaying';


export class Homepage extends Component {
    constructor(props){
        super(props)
        this.state={
            awal:0,
            akhir:4,
            perpage:4,
            page:0,
            active:1
        }
    }
    componentDidMount(){
        this.props.getNowPlayData();
  }

      changePage=(num)=>{
        this.setState({awal:4*(num-1),akhir:4*num,active:num})
      }
    render() {

        const pushPage=[]
        for (let i = 1; i <= this.props.nowplayingpage; i++) 
        {
             pushPage.push(<Link to={`/?page=${i}`}><div className={this.state.active === i ? 'number active':'number'} onClick={()=>this.changePage(i)} > {i}</div></Link>)
        }
        return (
            <div>
                <Header credit={this.props.credit}/>
                <Grid >
                    <Row >
                    
                        {
                            this.props.nowplaying!==undefined &&  this.props.nowplaying !==null?
                            this.props.nowplaying.slice(this.state.awal,this.state.akhir).map((p) => 
                            <Col xs={12} md={6}>
                                <ProductCard productData={p} harga={convertharga(p.vote_average)} isBuy={this.props.collection.indexOf(p.id)>-1?"y":"n"} />
                            </Col>) :
                            "No Data"
                        }
                    </Row>
                    <Row>
                        <Paging pushPage={pushPage} />
                    </Row>
                </Grid>
            </div>
        );
    }
}



const mapStateToProps = (state) =>({
    nowplaying:state.data.nowplaying,
    collection:state.user.collection,
    nowplayingpage:state.data.nowplayingpage,
    credit:state.user.credit,

  })
  
  
  const mapDispatchToProps =(dispatch) =>bindActionCreators({
    getNowPlayData
  },dispatch)
  
  export default connect(mapStateToProps,mapDispatchToProps)(Homepage);