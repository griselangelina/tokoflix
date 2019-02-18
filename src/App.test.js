import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Homepage} from './Page/Homepage';
import {Detail} from './Page/Detail';

import { ProductCard } from './Component/Card';

configure({adapter: new Adapter()});

describe('<Homepage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Homepage getNowPlayData={() => {}} nowplayingpage={20} />);
    });

    
    it('should have <ProductCard /> when receiving nowplaying & collection', () => {
        wrapper.setProps({nowplaying: [{title: "batlle angle"}], collection:["321312"]});
        expect(wrapper.find(ProductCard)).toHaveLength(1);
    });

    


     
});

describe('<Detail />', () => {
    let wrapperdetail;
    const match = { params: { idx: '399579' } }
    beforeEach(() => {
        wrapperdetail = shallow(<Detail cast={[]} detail={{"vote_average":6,id:"399579"}} match={match} getDetail={() => {}} getSimilar={() => {}} getRecommend={() => {}} 
        getCast={() => {}}   />);
    });

    
    it('should have <Detail /> when receiving nowplaying & collection', () => {
        wrapperdetail.setContext({detail:{}});
        expect(wrapperdetail.text()).toEqual("No Detail Data");
    });

    


     
});