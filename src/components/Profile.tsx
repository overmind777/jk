import styled from 'styled-components';

const Profile = () => {
    return (
        <Wrapper>
            <div>
                <img src="./vite.svg" alt="" />
                <div>
                    <input type="file" accept={ 'image/*' } />
                </div>
            </div>
            <RightWrapper>
                <h2>www@www.www</h2>
                <p>Статус: Новачок</p>
                <div></div>
                <div></div>
                <h3>Про мене</h3>
                <p>Інформація відсутня</p>
            </RightWrapper>
            <button>Edit</button>
        </Wrapper>
    );
};

export default Profile;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 40px;
    align-items: flex-start;

    max-width: 1000px;
    margin: 100px auto 30px;
    padding: 30px;
    background: gray;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    position: relative;
`

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;

    h2, h3, p {
        color: var(--light-text);
    }
`