export const Datas = {
  CSPM: {
    widgets: [
      {
        id: 1,
        title: "Cloud Accounts",
        chartType: "pie",
        data: [
          { name: "Connected", value: 2, color: "#5479ff" },
          { name: "Not Connected", value: 2, color: "#e6ebff" },
        ],
        hidden: false,
      },
      {
        id: 2,
        title: "Risk Assessment",
        chartType: "pie",
        data: [
          { name: "Failed", value: 1689, color: "#ba1411" },
          { name: "Warning", value: 681, color: "#fad932" },
          { name: "Not Available", value: 36, color: "#cad0de" },
          { name: "Passed", value: 7253, color: "#1ca65c" },
        ],
        hidden: false,
      },
    ],
  },

  CWPP: {
    widgets: [
      {
        id: 1,
        title: "Line Chart 1",
        color: "red",
        chartType: "line",
        data: [
          { name: "Jan", value: 2 },
          { name: "Feb", value: 3 },
          { name: "Mar", value: 5 },
          { name: "Apr", value: 4 },
          { name: "May", value: 6 },
        ],
        hidden: false,
      },
      {
        id: 2,
        title: "Line Chart 2",
        color: "blue",
        chartType: "line",
        data: [
          { name: "Jan", value: 10 },
          { name: "Feb", value: 4 },
          { name: "Mar", value: 6 },
          { name: "Apr", value: 7 },
          { name: "May", value: 1 },
        ],
        hidden: false,
      },
    ],
  },

  Image: {
    widgets: [
      {
        id: 1,
        title: "Image Chart 1",
        chartType: "bar",
        data: { critical: 9, high: 150, medium: 262, low: 1049 },
        color: {
          critical: "darkred",
          high: "red",
          medium: "orange",
          low: "yellow",
        },
        hidden: false,
      },
      {
        id: 2,
        title: "Image Chart 2",
        chartType: "bar",
        data: { critical: 2, high: 2, medium: 1, low: 1 },
        color: {
          critical: "darkred",
          high: "red",
          medium: "orange",
          low: "yellow",
        },
        hidden: false,
      },
    ],
  },

  Ticket: {
    widgets: [
      {
        id: 1,
        title: "Ticket Chart 1",
        color: "maroon",
        data: [
          { name: "Failed", value: 1689 },
          { name: "Warning", value: 681 },
          { name: "Not Available", value: 36 },
          { name: "Passed", value: 7253 },
        ],
        hidden: false,
      },
      {
        id: 2,
        title: "Ticket Chart 2",
        color: "pink",
        data: [
          { name: "Connected", value: 50 },
          { name: "Not Connected", value: 40 },
          { name: "Terminated", value: 10 },
        ],
        hidden: false,
      },
      {
        id: 3,
        title: "Ticket Chart 3",
        color: "teal",
        data: [
          { name: "ABC", value: 50 },
          { name: "DEF", value: 40 },
          { name: "GHI", value: 90 },
          { name: "JKL", value: 20 },
          { name: "MNO", value: 10 },
          { name: "PQR", value: 80 },
        ],
        hidden: false,
      },
      {
        id: 4,
        title: "Ticket Chart 4",
        color: "black",
        data: [
          { name: "STU", value: 10 },
          { name: "WXY", value: 20 },
          { name: "ZAB", value: 30 },
          { name: "CDE", value: 40 },
          { name: "FGH", value: 50 },
          { name: "IJK", value: 60 },
          { name: "LMN", value: 80 },
          { name: "OPQ", value: 100 },
        ],
        hidden: false,
      },
    ],
  },
};
