import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from './redux/CounterSlice'

export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <Container>
            <Wrapper>
                <Content>
                    <Count>{count}</Count>
                    <ButtonHolder>
                        <Button btn onClick={() => dispatch(increase())}>Add</Button>
                        <Button onClick={() => dispatch(decrease())}>Subtract</Button>
                    </ButtonHolder>
                </Content>
            </Wrapper>
        </Container>
    )
}

const Button = styled.button`
padding: 10px 22px;
border-radius: 3px;
border: 0px;
outline: none;
color: #fff;
margin-right: 10px;
background: ${({btn}) => btn ? "teal":"coral"}
`;

const ButtonHolder = styled.div`
display: flex;
`;

const Count = styled.h1`
`;

const Content = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 300px;
height: 200px;
border: 1px solid lightgray;
border-radius: 10px;
padding-top: 70px;
`;

const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Container = styled.div`
width: 100%;
height: 100%;
`;
