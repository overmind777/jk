import Input from '../shared/Input.tsx';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '../helpers/hooks.ts';
import { editUserData } from '../redux/user/operations.ts';

const ProfileEdit = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    let email: string = '';
    const userData = sessionStorage.getItem( 'userData' );
    if (userData) {
        try {
            const parsedData = JSON.parse( userData );
            email = parsedData?.user.email;
        } catch (error) {
            console.error( 'Error parsing userData:', error );
        }
    }

    const [formData, setFormData] = useState({
        username: '',
        certificateNumber: '',
        email: '',
        bio: '',
        location: '',
        website: '',
        links: [{ link: '', url: '' }],
        error: '',
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(editUserData( { email: email, userData: formData }))
            .unwrap()
            .then(() => {
                navigate('/user');
            })
            .catch((error) => {
                console.error('Error updating user data:', error);
            });
    };

    return (
        <Wrapper>
            <form className="profile-edit-form">
                <div className="form-group">
                    <label htmlFor="username">Ім'я користувача</label>
                    <Input
                        text={'Ім\'я користувача'}
                        value={formData.username}
                        onChange={(value) => handleInputChange('username', value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="certificateNumber">Номер сертифікату:</label>
                    <Input
                        text={'Номер сертифікату'}
                        value={formData.certificateNumber}
                        onChange={(value) => handleInputChange('certificateNumber', value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                        text={'Email'}
                        value={formData.email}
                        onChange={(value) => handleInputChange('email', value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Про мене</label>
                    <textarea
                        id="bio"
                        value={formData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Місцезнаходження</label>
                    <Input
                        text={'Місцезнаходження'}
                        value={formData.location}
                        onChange={(value) => handleInputChange('location', value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="website">Веб-сторінка</label>
                    <Input
                        text={'Веб-сторінка'}
                        value={formData.website}
                        onChange={(value) => handleInputChange('website', value)}
                    />
                </div>
                <button type="submit" className="save-profile-btn" onClick={handleClick}>
                    Зберегти зміни
                </button>
            </form>
        </Wrapper>
    );
};

export default ProfileEdit;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
