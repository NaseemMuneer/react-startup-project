import React from 'react'
import Kpi from '../../Assets/Kpi.png';

function DashboardFeature() {
    return (
        <div className='Fature-container '>
            <div className='feature-div justify-content-center text-center'>
                <h1>Breakdown Of Dashboard Features</h1>
                <div className='d-flex justify-content-center text-center gap-4'>
                    <h4 className='Kpi'>KPI Dashboard</h4>
                    <h4>BI Dashboard</h4>
                    <h4>Fleet Dashboard</h4>
                </div>
                <img src={Kpi} alt="Kpi" />
            </div>
        </div>
    )
}

export default DashboardFeature
