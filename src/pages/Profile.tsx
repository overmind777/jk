import styled from 'styled-components';
import {Outlet, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {selectUser} from "../redux/user/userSlice.ts";
import {useAppSelector} from "../helpers/hooks.ts";

const Profile = () => {
    const navigate = useNavigate();
    const select = useAppSelector(selectUser);
    const [pageState, setPageState] = useState(true);
    console.log(select)

    const handleClick = () => {
        setPageState(false);
        navigate('/profile/profile-edit'); // Перехід до дочірнього маршруту
    };

    return (
        <>
            {pageState ? (
                <Wrapper>
                    <ButtonWrapper>
                        <button onClick={handleClick}>Edit</button>
                    </ButtonWrapper>
                    <ImageWrapper>
                        <img src="./vite.svg" alt=""/>
                        <div>
                            <input type="file" accept={'image/*'}/>
                        </div>
                    </ImageWrapper>
                    <InfoWrapper>
                        <h2>{select.username}</h2>
                        <p>Статус: Новачок</p>
                        <p>{select.email}</p>
                        <p>{select.location}</p>
                        <h3>Про мене</h3>
                        <p>{select.bio}</p>
                    </InfoWrapper>
                </Wrapper>
            ) : (
                <Outlet/>
            )}
        </>
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
`;

const ButtonWrapper = styled.div`
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row-end: 1;
`;

const ImageWrapper = styled.div`
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 2;
`;

const InfoWrapper = styled.div`
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 2;

    display: flex;
    flex-direction: column;
    gap: 3px;

    h2,
    h3,
    p {
        color: var(--light-text);
    }
`;
