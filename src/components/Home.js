import React from 'react'
import styled from 'styled-components'
import Section from './Section';
function Home() {
    return (
        <div>
            <Container>
                <Section title="Model S" backgroundImg="model-s.jpg"
                rightBtnText="Existing Inventory"/>
                <Section title="Model Y" backgroundImg="model-y.jpg"
                rightBtnText="Existing Inventory"/>
                <Section title="Model X" backgroundImg="model-x.jpg"
                rightBtnText="Existing Inventory"/>
                <Section title="Model 3" backgroundImg="model-3.jpg"
                rightBtnText="Existing Inventory"/>
                <Section title="Lowest Cost Solar Panels in America" backgroundImg="solar-panel.jpg"
                discription="Money-Back guarantee"
                leftBtnText="Order Now"
                rightBtnText="Learn More"/>
                <Section title="Solar for New Roofs" backgroundImg="solar-roof.jpg"
                discription="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                leftBtnText="Order Now"
                rightBtnText="Learn More"/>
                <Section title="Accessories"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now   "
                />
            </Container>
        </div>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`