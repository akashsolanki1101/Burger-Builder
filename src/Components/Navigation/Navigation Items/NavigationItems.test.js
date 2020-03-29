import React from 'react'

import Adapter from 'enzyme-adapter-react-16'
import {configure,shallow} from 'enzyme'
import NavigationItems from './NavigationItems'
import NavigationItem from './Navigation Item/NavigationItem'

configure({adapter : new Adapter()})

describe('<NavigationItems />',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems />)
    })

    it('should render two navigaion items element if not authenticated',()=>{
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    })

    it('should render three navigaion items element if authenticated',()=>{
        wrapper.setProps({isSignUp : true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })

    it('should render logout navigation item',()=>{
        wrapper.setProps({isSignUp : true})
        expect(wrapper.contains(<NavigationItem link="/logout" >Log Out</NavigationItem>));
    })
})