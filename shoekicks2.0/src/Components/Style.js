import styled from "styled-components";
import { motion} from 'framer-motion'

export const Title = styled(motion.h1)`
    position: absolute;
    bottom: 7%;
    left: 5%;
    color: white;
    z-index: 1;
    font-size: 20em;
    white-space: nowrap;                    
    transition: all 2s cubic-bezier(0.165 , 0.84 ,0.44, 1);
    font-family: 'Genos', sans-serif;
    font-weight: 400;
`