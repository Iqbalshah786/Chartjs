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
