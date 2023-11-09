import styled from "styled-components";

export const Component = styled.header`

.navBar{
    background-color: var(--neutral-gray);
    
    .toolbar{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .MuiTypography-h3 {
        a{  font-size: 1.5rem;
            font-weight: 900;
            color: #fff;
            font-family: 'Ubuntu', sans-serif;
            text-transform: uppercase;
        }
    }
}



.navLinks{
    
}

.makeStyles-navlinks-1{
    display: flex;
    justify-content: space-between;
    width: 350px;
    align-items: center;
    z-index: 1;

    a {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    color: #fff;
    margin: 0;
    
    :last-child{
        background-color: var(--primary-blue);
        padding: 0.5rem 2rem;
        border-radius: 5px;
        transition: 0.3s;

        :hover{
            background-color: var(--purple);
        }
    }
}
}


`;