import styled from 'styled-components';
import {Outlet, useNavigate} from 'react-router-dom';
import {useAppSelector} from "../helpers/hooks.ts";
import {selectUser} from "../redux/user/userSlice.ts";
import {useEffect} from "react";

const Profile = () => {
    const navigate = useNavigate();
    const userData = useAppSelector(selectUser);
    const isEditMode = location.pathname.includes('edit');

    useEffect(() => {
        console.log(userData);})

    const handleClick = () => {
        navigate('edit'); // Перехід до дочірнього маршруту
    };

    return (
        <>
            {!isEditMode ? (
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
                        <h2>{userData.username}</h2>
                        <p>Статус: Новачок</p>
                        <p>Email {userData.email}</p>
                        <p>{userData.location}</p>
                        <h3>Про мене</h3>
                        <p>{userData.bio}</p>
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
