const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// line chart
// The line chart
var chart = new Chart(document.getElementById('myChart2'), {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", 'May', 'June', 'August', 'September'],
      datasets: [{
        label: "My First dataset",
        data: [4, 20, 5, 20, 5, 25, 9, 18],
        backgroundColor: 'transparent',
        borderColor: '#0d6efd',
        lineTension: .4,
        borderWidth: 1.5,
      }, {
        label: "Month",
        data: [11, 25, 10, 25, 10, 30, 14, 23],
        backgroundColor: 'transparent',
        borderColor: '#dc3545',
        lineTension: .4,
        borderWidth: 1.5,
      }, {
        label: "Month",
        data: [16, 30, 16, 30, 16, 36, 21, 35],
        backgroundColor: 'transparent',
        borderColor: '#f0ad4e',
        lineTension: .4,
        borderWidth: 1.5,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          gridLines: {
            drawBorder: false
          },
          ticks: {
            stepSize: 12,
          }
        }],
        xAxes: [{
          gridLines: {
            display: false,
          },
        }]
      }
    }
  })


// chart 3
var chart3 = document.getElementById('chart3');
var myChart3 = new Chart(chart3, {
  type: 'line',
  data: {
    labels: ["One", "Two", "Three", "Four", "Five", 'Six', "Seven", "Eight"],
    datasets: [{
      label: "Lost",
      lineTension: 0.2,
      borderColor: '#d9534f',
      borderWidth: 1.5,
      showLine: true,
      data: [3, 30, 16, 30, 16, 36, 21, 40, 20, 30],
      backgroundColor: 'transparent'
    }, {
      label: "Lost",
      lineTension: 0.2,
      borderColor: '#5cb85c',
      borderWidth: 1.5,
      data: [6, 20, 5, 20, 5, 25, 9, 18, 20, 15],
      backgroundColor: 'transparent'
    },
               {
                 label: "Lost",
                 lineTension: 0.2,
                 borderColor: '#f0ad4e',
                 borderWidth: 1.5,
                 data: [12, 20, 15, 20, 5, 35, 10, 15, 35, 25],
                 backgroundColor: 'transparent'
               },
               {
                 label: "Lost",
                 lineTension: 0.2,
                 borderColor: '#337ab7',
                 borderWidth: 1.5,
                 data: [16, 25, 10, 25, 10, 30, 14, 23, 14, 29],
                 backgroundColor: 'transparent'
               }]
  },
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false
        },
        ticks: {
          stepSize: 12
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
    }
  }
})