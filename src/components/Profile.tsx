import styled from 'styled-components';

const Profile = () => {
    return (
        <Wrapper>
            <ButtonWrapper>
                <button>Edit</button>
            </ButtonWrapper>
            <ImageWrapper>
                <img src="./vite.svg" alt="" />
                <div>
                    <input type="file" accept={ 'image/*' } />
                </div>
            </ImageWrapper>
            <InfoWrapper>
                <h2>www@www.www</h2>
                <p>Статус: Новачок</p>
                <div></div>
                <div></div>
                <h3>Про мене</h3>
                <p>Інформація відсутня</p>
            </InfoWrapper>
        </Wrapper>
    );
};

export default Profile;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 2fr;
    gap: 5px;
    align-items: flex-start;

    max-width: 1000px;
    padding: 30px;
    background: gray;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    position: relative;
`

const ButtonWrapper = styled.div`
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row-end: 1;
`

const ImageWrapper = styled.div`
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 2;
`

const InfoWrapper = styled.div`
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    
    display: flex;
    flex-direction: column;
    gap: 3px;

    h2, h3, p {
        color: var(--light-text);
    }
`