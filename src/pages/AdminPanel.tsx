import {Admin, Resource, ListGuesser} from "react-admin";
import jsonServerProvider from 'ra-data-json-server'


const AdminPanel = () => {
    const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="posts" list={ListGuesser} />
            <Resource name="comments" list={ListGuesser} />
        </Admin>
    );
};

export default AdminPanel;