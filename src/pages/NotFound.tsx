import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Сторінку не знайдено</h1>
            <p>Вибачте, такої сторінки не існує.</p>
            <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                Повернутися на головну
            </Link>
        </div>
    );
};

export default NotFound;
