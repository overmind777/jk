import Input from '../shared/Input.tsx';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../helpers/hooks.ts';
import {editUserData} from '../redux/user/operations.ts';
import {selectUser} from "../redux/user/userSlice.ts";

const ProfileEdit = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const tokens = sessionStorage.getItem('tokens');
    const {email} = useAppSelector(selectUser)

    const [formData, setFormData] = useState({
        username: '',
        certificateNumber: '',
        email: '',
        bio: '',
        location: '',
        website: '',
        links: [{link: '', url: ''}],
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleAddLink = () => {
        setFormData(prevData => ({
            ...prevData,
            links: [...prevData.links, {link: '', url: ''}]
        }));
    };

    const handleLinkChange = (index: number, field: 'link' | 'url', value: string) => {
        const updatedLinks = [...formData.links];
        updatedLinks[index] = {...updatedLinks[index], [field]: value};
        setFormData(prevData => ({
            ...prevData,
            links: updatedLinks
        }));
    };

    const handleClick = (e) => {
        e.preventDefault()
        if (tokens) {
            const token = JSON.parse((tokens))
            const sanitizedData = {
                ...formData,
                links: formData.links.map(link => ({
                    link: link.link,
                    url: link.url,
                })),
            };
            console.log(sanitizedData);
            dispatch(editUserData({emailUser: email, userData: sanitizedData, token: token.accessToken}))
                .unwrap()
                .then(() => {
                    navigate('/profile');
                })
                .catch((error) => {
                    console.error('Error updating user data:', error);
                });
        }
    };

    return (
        <Wrapper>
            <FormStled className="profile-edit-form">
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
                <div>
                    {formData.links.map((link, index) => (
                        <div key={index} className="link-group">
                            <Input
                                text={'Посилання'}
                                value={link.link}
                                onChange={value => handleLinkChange(index, 'link', value)}
                            />
                            <Input
                                text={'URL'}
                                value={link.url}
                                onChange={value => handleLinkChange(index, 'url', value)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={handleAddLink}>Додати посилання</button>
                </div>
                <button type="submit" className="save-profile-btn" onClick={handleClick}>
                    Зберегти зміни
                </button>
            </FormStled>
        </Wrapper>
    );
};

export default ProfileEdit;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const FormStled = styled.form``
