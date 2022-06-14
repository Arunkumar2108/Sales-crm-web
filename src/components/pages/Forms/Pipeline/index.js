import React, { Fragment, useState } from 'react'
import List from './list'
import BaseCode from '../../../../__template__/pages/BaseCode'


function Index() {


    return (
        <Fragment>
            <BaseCode
                pageTitle="Pipeline"
                btnLable="Create Btn"
            >
                <List
                    noItemMessage="No Data Fount..."
                    limit={ 10 }
                    isLoading={ false }
                />
            </BaseCode>
        </Fragment >

    )
}

export default Index;
