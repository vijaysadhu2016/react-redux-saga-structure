import React, {Component} from 'react';
import {connect} from "react-redux";

import {callAPI, changePage} from "../../redux/actions";
import Particles from 'react-particles-js'

class Home extends Component {

    componentDidMount() {
        this.props.callAPI(1);
    }

    render() {
        const {data, page} = this.props;
        if (!data || data.length < 1) return <p className="loader">Loading...</p>;
        return (
            <div className="container">
                <Particles/>
                <table>
                    <thead>
                    <tr>
                        <th>Profile Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data && data.map((res, index) => <tr key={index}>
                            <td>
                                <img src={res.picture.large} alt="404"/>
                            </td>
                            <td>
                                {
                                    `${res.name.title}.
                                    ${res.name.first}  
                                    ${res.name.last}`
                                }
                            </td>
                            <td>
                                {res.email}
                            </td>
                            <td>
                                {res.phone}
                            </td>
                        </tr>)
                    }
                    <tr>
                        <td>
                            <button disabled={page < 2} onClick={() => this.props.changePage(page - 1)}>
                                Previous
                            </button>
                        </td>
                        <td/>
                        <td/>
                        <td>
                            <button onClick={() => this.props.changePage(page + 1)}>Next</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Particles/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    callAPI,
    changePage,
};

const mapStateToProps = ({PaginationReducer}) => {
    const {data, page} = PaginationReducer;
    return {data, page};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
