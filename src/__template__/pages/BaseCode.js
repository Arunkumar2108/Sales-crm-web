import React, { Component, Fragment } from 'react'
import Header from '../../components/shared/Header/Header'
import SideNav from '../../components/shared/SideNav/SideNav'

export class BaseCode extends Component {
    render() {
        const { children, handleModal, pageTitle, showPage, } = this.props;
        console.log('showPage', showPage)
        return (
            <Fragment>
                <div className="page__container">
                    <div className="page__wrapper">
                        <div className="sideNav">
                            <SideNav />
                        </div>
                        <div className="directory">
                            <Header
                                // pageTitle={pageTitle}
                                handleModal={handleModal}
                                userInfo="Riyaz"
                            />
                            <div className="main__view">
                                <div className="main__view-scroller">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BaseCode
