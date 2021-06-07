import React from 'react'
import { Card, Circle, DashboardContainer, FlexContainer, VerticalDivider, HorizontalDivider } from './Styles'


const Dashboard = () => {
    return (
        <DashboardContainer >
            <Card h = 'fit-content' p = '0' w = '800px'>
                <FlexContainer direction = 'column'>
                    <FlexContainer h = '60%' direction = 'row'>
                        <FlexContainer w = '25%' m = '0 8px' p = '16px'>
                            <Circle w = '150px' h = '150px' border = '5px solid #68b641' radius = '50%' color = 'white'>1</Circle>
                        </FlexContainer>
                        <VerticalDivider />
                        <FlexContainer w = '25%' m = '0 8px' p = '16px'>
                        <Circle w = '150px' h = '150px' border = '5px solid white' radius = '50%' color = 'white'>2</Circle>
                        </FlexContainer>
                        <VerticalDivider />
                        <FlexContainer w = '50%' m = '0 8px' p = '16px'>
                        
                        </FlexContainer>

                    </FlexContainer>
                    <HorizontalDivider />

                    <FlexContainer h = '40%' direction = 'row' justify = 'space-evenly'>
                        <FlexContainer w = '25%' h = '40px' m = '24px'  border = '1px solid #40494f' radius = '4px' flexWrap = 'wrap' color = 'white' hover hoverColor = '#fbc241' hoverBorder = '1px solid #fbc241'>START ALL RIGS</FlexContainer>
                        <FlexContainer w = '25%' h = '40px' m = '24px'  border = '1px solid #40494f' radius = '4px' flexWrap = 'wrap' color = 'white' hover hoverColor = '#fbc241' hoverBorder = '1px solid #fbc241'>STOP ALL RIGS</FlexContainer>
                        <FlexContainer w = '50%' h = '40px' m = '24px'  border = '1px solid #fbc241' radius = '4px' flexWrap = 'wrap' color = '#fbc241' hover hoverBg = '#fbc241'  hoverColor = "white">GO TO RIG MANAGER</FlexContainer>

                    </FlexContainer>
                </FlexContainer>
            </Card>

            <Card h = '175px' w = '325px'>
                This is card container
            </Card>
        </DashboardContainer>
    )
}

export default Dashboard
