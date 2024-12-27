import { useContext } from 'react';
import { ThemeContext } from './Themes/ThemesProvider';
import { SpanStyled } from './MenuUserModal.tsx';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext( ThemeContext );

    return (
        <>
            <SpanStyled onClick={ toggleTheme } >
            Switch to { theme === 'light' ? 'Dark' : 'Light' } Theme
        </SpanStyled>
        </>
    );
};

export default ThemeSwitcher;
