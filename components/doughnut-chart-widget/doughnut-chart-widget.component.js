import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';

import { Doughnut } from 'react-chartjs-2';
import CountUp from 'react-countup';

import themeStyles from './doughnut-chart-widget.theme.style';
import scss from './doughnut-chart-widget.module.scss';

const legendOptions = {
  display: false
};

function shadeColor(color, percent) {
  /* eslint no-bitwise: ["error", { "allow": [">>", "&"] }] */
  const f = parseInt(color.slice(1), 16);
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * -1 : percent;
  const R = f >> 16;
  const G = (f >> 8) & 0x00FF;
  const B = f & 0x0000FF;
  return '#'+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1); // eslint-disable-line
}

class DoughnutChartWidget extends React.Component {
  state = {
    intervalId: null,
    doughnutChartData: {
      labels: ['Desktop', 'Tablet', 'Mobile'],
      datasets: [{
        data: [124, 88, 172],
        borderWidth: 0,
        backgroundColor: [
          this.props.theme.palette.primary.main,
          shadeColor(this.props.theme.palette.primary.main, -1 * 0.1),
          shadeColor(this.props.theme.palette.primary.main, -2 * 0.1)
        ],
        hoverBackgroundColor: this.props.theme.palette.primary.dark
      }]
    },
    doughnutChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: true,
        backgroundColor: this.props.theme.palette.primary.main,
        titleFontColor: this.props.theme.palette.common.white,
        bodyFontColor: this.props.theme.palette.common.white,
        xPadding: 20,
        yPadding: 20,
        displayColors: false
      }
    }
  };

  componentWillMount() {
    const intervalId = setInterval(() => {
      const oldDataSet = this.state.doughnutChartData.datasets[0];
      const newData = [];

      for (let i = 0; i < this.state.doughnutChartData.labels.length; i += 1) {
        newData.push(Math.floor(Math.random() * 30));
      }

      const newDataSet = { ...oldDataSet };
      newDataSet.data = newData;
      const newChartData = {
        ...this.state.doughnutChartData,
        datasets: [newDataSet]
      };

      this.setState({ doughnutChartData: newChartData });
    }, 4000);

    this.setState({ intervalId });
  }

  componentWillReceiveProps(props) {
    const oldDataSet = this.state.doughnutChartData.datasets[0];
    const newDataSet = { ...oldDataSet };
    newDataSet.hoverBackgroundColor = props.theme.palette.primary.dark;
    newDataSet.backgroundColor = [
      props.theme.palette.primary.main,
      shadeColor(props.theme.palette.primary.main, -1 * 0.1),
      shadeColor(props.theme.palette.primary.main, -2 * 0.1)
    ];
    const newChartData = {
      ...this.state.doughnutChartData,
      datasets: [newDataSet]
    };

    const oldTooltipOptions = this.state.doughnutChartOptions.tooltips;
    const newTooltipOptions = { ...oldTooltipOptions };
    newTooltipOptions.backgroundColor = props.theme.palette.primary.main;
    newTooltipOptions.titleFontColor = props.theme.palette.common.white;
    newTooltipOptions.bodyFontColor = props.theme.palette.common.white;
    const newChartOptions = {
      ...this.state.doughnutChartOptions,
      tooltips: newTooltipOptions
    };
    this.setState({ doughnutChartData: newChartData, doughnutChartOptions: newChartOptions });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className={scss['portal-doughnut-widget']}>
        <div className={scss['portal-doughnut-widget__chart']}>
          <Doughnut
            data={this.state.doughnutChartData}
            options={this.state.doughnutChartOptions}
            legend={legendOptions}
          />
        </div>
        <Grid container justify="center" spacing={16} className={scss['portal-widget__doughnut-labels']}>
          <Grid key={1} item md={4}>
            <span className={scss['portal-widget__doughnut-labels__icon']}>
              <FontAwesome name="laptop" size="lg" />
              <span
                className={scss['portal-widget__doughnut-labels__icon__bullet']}
                style={{
                  backgroundColor: this.state.doughnutChartData.datasets[0].backgroundColor[0]
                }}
              />
            </span>
            <Typography variant="caption">{this.state.doughnutChartData.labels[0]}</Typography>
            <Typography variant="display1">
              <CountUp start={0} end={this.state.doughnutChartData.datasets[0].data[0]} />
            </Typography>
          </Grid>
          <Grid key={2} item md={4}>
            <span className={scss['portal-widget__doughnut-labels__icon']}>
              <FontAwesome name="tablet" size="lg" />
              <span
                className={scss['portal-widget__doughnut-labels__icon__bullet']}
                style={{
                  backgroundColor: this.state.doughnutChartData.datasets[0].backgroundColor[1]
                }}
              />
            </span>
            <Typography variant="caption">{this.state.doughnutChartData.labels[1]}</Typography>
            <Typography variant="display1">
              <CountUp start={0} end={this.state.doughnutChartData.datasets[0].data[1]} />
            </Typography>
          </Grid>
          <Grid key={3} item md={4}>
            <span className={scss['portal-widget__doughnut-labels__icon']}>
              <FontAwesome name="mobile" size="lg" />
              <span
                className={scss['portal-widget__doughnut-labels__icon__bullet']}
                style={{
                  backgroundColor: this.state.doughnutChartData.datasets[0].backgroundColor[2]
                }}
              />
            </span>
            <Typography variant="caption">{this.state.doughnutChartData.labels[2]}</Typography>
            <Typography variant="display1">
              <CountUp start={0} end={this.state.doughnutChartData.datasets[0].data[2]} />
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

DoughnutChartWidget.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      primary: PropTypes.shape({
        dark: PropTypes.string,
        main: PropTypes.string,
        contrastText: PropTypes.string
      }),
      secondary: PropTypes.shape({
        main: PropTypes.string
      }),
      common: PropTypes.shape({
        white: PropTypes.string
      })
    })
  }).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(DoughnutChartWidget);
