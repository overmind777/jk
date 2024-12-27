import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../helpers/hooks.ts';
import { editUserData } from '../../../redux/user/operations.ts';
import { selectAuthUser } from '../../../redux/auth/selectors.ts';
import Input from '../../../shared/Input.tsx';

import { FormStyled, ItemStiled, ListStyled, Wrapper } from './ProfileEdit.styled.ts';

const ProfileEdit = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const tokens = sessionStorage.getItem( 'tokens' );
    const { user } = useAppSelector( selectAuthUser );

    const [formData, setFormData] = useState( {
        username: '',
        certificateNumber: '',
        email: '',
        bio: '',
        location: '',
        website: '',
        links: [{ link: '', url: '' }],
    } );

    const handleInputChange = ( field: string, value: string ) => {
        setFormData( ( prevData ) => ( {
            ...prevData,
            [field]: value,
        } ) );
    };

    const handleAddLink = () => {
        setFormData( prevData => ( {
            ...prevData,
            links: [...prevData.links, { link: '', url: '' }],
        } ) );
    };

    const handleLinkChange = ( index: number, field: 'link' | 'url', value: string ) => {
        const updatedLinks = [...formData.links];
        updatedLinks[index] = { ...updatedLinks[index], [field]: value };
        setFormData( prevData => ( {
            ...prevData,
            links: updatedLinks,
        } ) );
    };

    const handleClick = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        if (tokens) {
            const token = JSON.parse( ( tokens ) );
            const sanitizedData = {
                ...formData,
                links: formData.links.map( link => ( {
                    link: link.link,
                    url: link.url,
                } ) ),
            };

            try {
                await dispatch( editUserData( {
                    emailUser: user.email,
                    userData: sanitizedData,
                    token: token.accessToken,
                } ) ).unwrap();

                navigate( '/profile' );
            } catch (error) {
                console.error( 'Error updating user data:', error );
            }

        }
    };

    return (
        <Wrapper>
            <FormStyled onSubmit={ handleClick }>
                <ListStyled>
                    <ItemStiled >
                        <label htmlFor="username">Ім'я користувача</label>
                        <Input
                            text={ 'Ім\'я користувача' }
                            value={ formData.username }
                            onChange={ ( value ) => handleInputChange( 'username', value ) }
                        />
                    </ItemStiled>
                    <ItemStiled >
                        <label htmlFor="certificateNumber">Номер сертифікату:</label>
                        <Input
                            text={ 'Номер сертифікату' }
                            value={ formData.certificateNumber }
                            onChange={ ( value ) => handleInputChange( 'certificateNumber', value ) }
                        />
                    </ItemStiled>
                    <ItemStiled >
                        <label htmlFor="email">Email</label>
                        <Input
                            text={ 'Email' }
                            value={ formData.email }
                            onChange={ ( value ) => handleInputChange( 'email', value ) }
                        />
                    </ItemStiled>
                    <ItemStiled >
                        <label htmlFor="bio">Про мене</label>
                        <textarea
                            id="bio"
                            value={ formData.bio }
                            onChange={ ( e ) => handleInputChange( 'bio', e.target.value ) }
                        />
                    </ItemStiled>
                    <ItemStiled >
                        <label htmlFor="location">Місцезнаходження</label>
                        <Input
                            text={ 'Місцезнаходження' }
                            value={ formData.location }
                            onChange={ ( value ) => handleInputChange( 'location', value ) }
                        />
                    </ItemStiled>
                    <ItemStiled >
                        <label htmlFor="website">Веб-сторінка</label>
                        <Input
                            text={ 'Веб-сторінка' }
                            value={ formData.website }
                            onChange={ ( value ) => handleInputChange( 'website', value ) }
                        />
                    </ItemStiled>
                    <ItemStiled>
                        { formData.links.map( ( link, index ) => (
                            <div key={ index } >
                                <Input
                                    text={ 'Посилання' }
                                    value={ link.link }
                                    onChange={ value => handleLinkChange( index, 'link', value ) }
                                />
                                <Input
                                    text={ 'URL' }
                                    value={ link.url }
                                    onChange={ value => handleLinkChange( index, 'url', value ) }
                                />
                            </div>
                        ) ) }
                        <button type="button" onClick={ handleAddLink }>Додати посилання</button>
                    </ItemStiled>
                </ListStyled>
                <button type="submit" >
                    Зберегти зміни
                </button>
            </FormStyled>
        </Wrapper>
    );
};

export default ProfileEdit;

