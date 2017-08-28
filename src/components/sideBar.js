    import React from 'react';
    import {connect} from 'react-redux';
    import { Dashboard, Header, Sidebar } from 'react-adminlte-dash';

    class SideBar extends React.Component {
        componentDidMount() {

        }

    render() {
        const nav = () => ([
            <Header.Item href="/some/link" key="1" />
        ]);

        const sb = () => ([
            <Sidebar.Menu header="NAVIGATION" key="1">
                <Sidebar.Menu.Item title="Home" href="/" />
            </Sidebar.Menu>
        ]);

        const App = ({ children }) => (
            <Dashboard
                navbarChildren={nav()}
                sidebarChildren={sb()}
                theme="skin-blue"
            >
                {children}
            </Dashboard>
        );
        return(
            <App/>
        )
     };
    }
    
    function mapStateToProps(state) {
        return{
            albums: state.albums.albums
        }
    }
    export default connect(mapStateToProps,null)(SideBar);