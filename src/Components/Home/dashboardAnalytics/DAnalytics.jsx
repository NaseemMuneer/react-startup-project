import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../..';
import { Tabs } from "antd";
import Dashboard from '../../../Assets/Dashboard-Design.png'
const { TabPane } = Tabs;


function DAnalytics() {


    const tabData = [
      {
        key: 1,
        tabTitle: "KPI Dashboard",
        body: Dashboard,
      },
      {
          key: 2,
          tabTitle: "BI Dashboard",
          body: Dashboard,
        },
        {
          key: 3,
          tabTitle: "Fleet Dashboard",
          body: Dashboard,
          
        },
    ];
  
    
    return (
        <div className='row d-analytics-container gx-0'>
            <div className='d-analytics-dev pt-5'>
                <h1>Complete, Versatile & Powerful Dashboards & Analytics</h1>
                <p>These Dashboard are Designed for both, simplicity and power.</p>

          <Tabs defaultActiveKey="1" type="card">
            {tabData.map((tab)=>
                <TabPane  tab={tab.tabTitle} key={tab.key}>
              <div className="tab-body m-0">
                <img src={tab.body} className="tab-img" alt="" />
              </div>
            </TabPane>
            )}
          </Tabs>

            </div>

        </div>
    )
}

export default DAnalytics
