import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

import {Star} from '../Component/Atom/Star';
import CurrencyFormat from 'react-currency-format';

export const SmallCard = (props) => {

    return (
      <div className="small-card">
          <div className="in">
            <Link to={`/${props.name}`}>
            <img src={`https://image.tmdb.org/t/p/w250_and_h141_face/${props.img}` }/>

            </Link>
          </div>
          <div className="text-in">
            <p className="text">{props.nama}</p>
          </div>
      </div>
    );
}

export const MediumCard = (props) => {
  return (
    <div className="medium-card">
          <div className="medium-bg">
            <img src={`https://image.tmdb.org/t/p/w138_and_h175_face/${props.img}` }/>
          </div>
          
          <div className="medium-text">
             <p className="title">{props.nama}</p>
            <div class="char">{props.char}</div>
          </div>
         
    </div>
  );
}


export const ProductCard = (props) => {
  const star = [];
    for (var i=0; i < props.productData.vote_average; i++) {
        star.push( <Star />);
    }

  return (
    
    <div className="product-card">
        <div className="product-img">
           <a href=""> <img src={props.productData===undefined? "https://a0.muscache.com/im/pictures/537913b3-f15b-40a0-a2e4-0f8be5816a5f.jpg?aki_policy=large":"https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+props.productData.poster_path}></img></a>
        </div>
        <Link to={`${props.productData.id+'-'+props.productData.title.replace(/ /g, '-')}`}>
          <div className="product-text">
          <div>
                <span className="rank">
                  <span className="skor-rating">
                    {props.productData.vote_average}
                    <br/>
                    
                  </span>
                </span>
                <span className="star-rating">
                {star}
                </span>
              </div>
              <div className="title">
                <p >{props.productData===undefined?"MENGAMATI SATWA LIAR":props.productData.title} </p>
                <span>{props.productData.release_date}</span>
               
              </div>
              <div className="overview">
                <p>{props.productData.overview.length > 205 ? props.productData.overview.substring(0,202)+"...":props.productData.overview}</p>
              </div>
              <div className="price">
              <p>
                <CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
              </p>
               { props.isBuy === "y"? <div className="has-buy"><span>collection</span></div> :"" }
              </div>
            
            
              
          </div>
        </Link>
    </div>
  );
}


