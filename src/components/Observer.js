import { InView, useInView} from 'react-intersection-observer';
import Menu from './Menu';
import Footer from './Footer';
import Landing from './Landing';
import { useState } from 'react';

export default function Observer({children, onChange}) {
    
    return(
        children.map((component, _i)=> (
            <InView threshold={0.55} onChange={(inView, entry)=> onChange(inView, entry)} key={_i} id={component.key}>             
                {component}
            </InView>
        ))
        
    )   
}