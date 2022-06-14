import React, { Fragment, useState } from 'react'
import PageModal from '../../../shared/Modal/modal'
import SideNav from '../../../shared/SideNav/SideNav'
import Header from '../../../shared/Header/Header'

import MediumModal from "../../../shared/Modals/MediumModal";
import List from './list'
import BaseCode from '../../../../__template__/pages/BaseCode'

import dataList from './data.json'

function Index() {


    return (
        <Fragment>
            <BaseCode
                pageTitle="Company"
                btnLable="Create Btn"
            >

                <List
                    noItemMessage="No Data Fount..."
                    items={dataList}
                    limit={10}
                    // isLoading={isLoading}
                    isLoading={false}
                    />
            </BaseCode>
        </Fragment >

    )
}

export default Index;
