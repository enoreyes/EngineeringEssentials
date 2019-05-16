/**
* Copyright 2018 Goldman Sachs.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
**/

import React from 'react';
import Highcharts from 'highcharts';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.highchartsOptions = {
      title: {
        text: 'Price Change from February to May 2019'
      },
      xAxis: {
        // REPLACE WITH HARD CODE STUFF
        categories: ["2/1/2019", "2/2/2019", "2/3/2019", "2/6/2019", "2/7/2019", "2/8/2019", "2/9/2019", "2/10/2019", "2/13/2019", "2/14/2019", 
        "2/15/2019", "2/16/2019", "2/17/2019", "2/20/2019", "2/21/2019", "2/22/2019", "2/23/2019", "2/24/2019", "2/27/2019", "2/28/2019", 
        "3/1/2019", "3/2/2019", "3/3/2019", "3/6/2019", "3/7/2019", "3/8/2019", "3/9/2019", "3/10/2019", "3/13/2019", "3/14/2019", 
        "3/15/2019", "3/16/2019", "3/17/2019", "3/20/2019", "3/22/2019", "3/23/2019", "3/24/2019", "3/27/2019", "3/28/2019", "3/29/2019", 
        "3/30/2019", "3/31/2019", "4/3/2019", "4/4/2019", "4/5/2019", "4/6/2019", "4/7/2019", "4/10/2019", "4/11/2019", "4/12/2019", 
        "4/13/2019", "4/14/2019", "4/17/2019", "4/18/2019", "4/19/2019", "4/20/2019", "4/21/2019", "4/24/2019", "4/25/2019", "4/26/2019", 
        "4/27/2019", "4/28/2019", "5/1/2019", "5/2/2019", "5/3/2019", "5/4/2019", "5/5/2019"]
      },
      yAxis: {
        title: {
          text: 'Price'
        }
      },
      series: [{
        // REPLACE WITH COMPANY NAME HERE
        name: 'Google',
        marker: {
          symbol: 'square'
        },
        data: props.dataOne
      }]
    }
  }

  componentDidMount() {
    Highcharts.chart('chart', this.highchartsOptions);
  }

  render() {
    return <div id='chart'></div>
  }
}

export default LineChart;
