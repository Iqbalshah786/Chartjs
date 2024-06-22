export const lineChartData = {
  labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
  datasets: [
    {
      label: "Count",
      data: [20, 10, 15, 25, 18, 35, 30],
      borderColor: "rgba(75, 192, 192, 1)",
    },
    {
      label: "Count by solar panels",
      data: [20, 15, 20, 35, 25, 35, 45],
      borderColor: "red",
    },
  ],
};

export const BarChartData = {
  labels: [
    "Europe",
    "America",
    "Canada",
    "Australia",
    "Africa",
    "Asia",
    "Antartica",
  ],
  datasets: [
    {
      label: "Count by solar panels",
      data: [20, 10, 15, 25, 18, 35, 30],
      backgroundColor: "rgba(75, 192, 192, 1)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

export const StackedBarChartData = {
  labels: [
    "Europe",
    "America",
    "Canada",
    "Australia",
    "Africa",
    "Asia",
    "Antarctica",
  ],
  datasets: [
    {
      label: "Solar Panels Count",
      data: [20, 10, 15, 25, 18, 35, 30],
      backgroundColor: "rgba(75, 192, 192, 1)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Wind Turbines Count",
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: "rgba(153, 102, 255, 1)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
    {
      label: "Hydroelectric Plants Count",
      data: [3, 2, 2, 6, 9, 8, 4],
      backgroundColor: "rgba(255, 159, 64, 1)",
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 1,
    },
  ],
};
