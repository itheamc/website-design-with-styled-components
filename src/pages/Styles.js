import styled from 'styled-components';

export const HomepageContainer = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
`

export const SliderContainer = styled.div`
    height: 450px;
    max-height: 450px;
    width: 70%;
    display: flex;
    position: relative;
    margin-top: 16px;
    margin-bottom: 16px;
    background-color: #031a2a;
    border: 1px solid #40494f;
    border-radius: 4px;
    box-shadow: 2px 2px 10px -10px whitesmoke;

    @media (max-width: 1280px) {
        width: 90%;
    }
`

export const DashboardContainer = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 1280px) {
        height: 100%;
        flex-wrap: wrap;
        /* flex-direction: column; */
        align-content: center;
    }
`

export const Card = styled.div`
    height: ${({h}) => h || '100%'};
    max-height: ${({mh}) => mh || '600px'};
    width: ${({w}) => w || '70%'};
    max-width: ${({mw}) => mw || '1920px'};
    display: flex;
    position: ${({position}) => position || 'relative'};
    margin: ${({m}) => m || '16px'};
    padding: ${({p}) => p || '18px 24px'};
    background-color: ${({bgColor}) => bgColor || '#031a2a'};
    border: ${({border}) => border || '1px solid #40494f'};
    border-radius: 4px;
    box-shadow: 2px 2px 10px -10px whitesmoke;

    @media (max-width: 1280px) {
        width: 90%;
        
    }
`

export const FlexContainer = styled.div`
    width: ${({w}) => w || '100%'};
    height: ${({h}) => h || '100%'};
    margin: ${({m}) => m || 'auto'};
    padding: ${({p}) => p || 'auto'};
    color: ${({color}) => color || 'black'};
    display: flex;
    position: ${({position}) => position || 'relative'};
    flex-direction: ${({direction}) => direction || 'row'};
    flex-wrap: ${({flexWrap}) => flexWrap || 'initial'};
    align-content: ${({align}) => align || 'center'};
    justify-content: ${({justify}) => justify || 'center'};
    justify-items: ${({alignItems}) => alignItems || 'center'};
    text-align: ${({txtAlign}) => txtAlign || 'center'};
    background-color: ${({bgColor}) => bgColor || 'transparent'};
    border: ${({border}) => border || 'none'};
    border-radius: ${({radius}) => radius || '0px'};
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s linear;

    &:hover{
        background-color: ${({hover, hoverBg}) => hover ? hoverBg : 'none'};
        cursor: ${({hover}) => hover ? 'pointer' : 'auto'};
        color: ${({hover, hoverColor}) => hover ? hoverColor : 'initial'};
        border: ${({hover, hoverBorder}) => hover ? hoverBorder : 'none'};
    }

`

export const Circle = styled.div`
    width: ${({w}) => w || '150px'};
    height: ${({h}) => h || '150px'};
    margin: ${({m}) => m || 'auto'};
    padding: ${({p}) => p || 'auto'};
    color: ${({color}) => color || 'black'};
    background-color: ${({bgColor}) => bgColor || 'transparent'};
    border-radius: ${({radius}) => radius || '50%'};
    border: ${({border}) => border || '6px solid blue'};
    display: flex;
    /* flex-wrap: wrap;
    align-content: center; */
    align-items: center;
    justify-content: center;
    font-family: Ubuntu,sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 36px;
    font-weight: 600;
`

export const HorizontalDivider = styled.hr`
    border-top: ${({color}) => color ? `1px solid ${color}` : '1px solid #40494f'};
    border-bottom: 0px;
    border-left: 0px;
    border-right: 0px;
`

export const VerticalDivider = styled.hr`
    border-top: 0px;
    border-bottom: 0px;
    border-left: ${({color}) => color ? `1px solid ${color}` : '1px solid #40494f'};
    border-right: 0px;
`