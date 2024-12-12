import Input from '../shared/Input.tsx';
import styled from 'styled-components';

const ProfileEditForm = () => {
    return (
        <Wrapper>
            <form className="profile-edit-form">
                <div className="form-group">
                    <label htmlFor="username">Ім'я користувача</label>
                    <Input text={'username'} />
                </div>
                <div className="form-group">
                    <label htmlFor="certificateNumber">Номер сертифікату:</label>
                    <Input text={'certificateNumber'} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input text={'email'} />
                </div>

                <div className="form-group">
                    <label htmlFor="bio">Про мене</label>
                    <textarea id="bio" name="bio"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="location">Місцезнаходження</label>
                    <Input text={'location'} />
                </div>

                <div className="form-group">
                    <label htmlFor="website">Веб-сторінка</label>
                    <Input text={'website'} />
                </div>

                <div className="form-group">
                    <label>Посилання та соціальні мережі</label>
                    <div className="links-container" id="linksContainer">
                        <div className="link-item">
                            <Input text={'link'} />
                            <Input text={'url'} />
                            <button type="button" className="remove-link-btn">×</button>
                        </div>
                    </div>
                    <button type="button" className="add-link-btn">+ Додати посилання</button>
                </div>

                <button type="submit" className="save-profile-btn">Зберегти зміни</button>
            </form>
        </Wrapper>
    );
};

export default ProfileEditForm;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`