export const reducerData = (currentVal, action) => {
  switch (action.type) {
    case "ADD_CSPM":
      return {
        ...currentVal,
        CSPM: {
          ...currentVal.CSPM,
          widgets: [...currentVal.CSPM.widgets, action.payload],
        },
      };
    case "DEL_CSPM":
      return {
        ...currentVal,
        CSPM: {
          ...currentVal.CSPM,
          widgets: currentVal.CSPM.widgets.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    case "TOGGLE_CSPM_WIDGET_VISIBILITY":
      return {
        ...currentVal,
        CSPM: {
          ...currentVal.CSPM,
          widgets: currentVal.CSPM.widgets.map((item) =>
            item.id === action.payload
              ? { ...item, hidden: !item.hidden }
              : item
          ),
        },
      };
    case "ADD_CWPP":
      return {
        ...currentVal,
        CWPP: {
          ...currentVal.CWPP,
          widgets: [...currentVal.CWPP.widgets, action.payload],
        },
      };
    case "DEL_CWPP":
      return {
        ...currentVal,
        CWPP: {
          ...currentVal.CWPP,
          widgets: currentVal.CWPP.widgets.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    case "TOGGLE_CWPP_WIDGET_VISIBILITY":
      return {
        ...currentVal,
        CWPP: {
          ...currentVal.CWPP,
          widgets: currentVal.CWPP.widgets.map((item) =>
            item.id === action.payload
              ? { ...item, hidden: !item.hidden }
              : item
          ),
        },
      };
    case "ADD_IMAGE":
      return {
        ...currentVal,
        Image: {
          ...currentVal.Image,
          widgets: [...currentVal.Image.widgets, action.payload],
        },
      };
    case "DEL_IMAGE":
      return {
        ...currentVal,
        Image: {
          ...currentVal.Image,
          widgets: currentVal.Image.widgets.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    case "TOGGLE_IMAGE_WIDGET_VISIBILITY":
      return {
        ...currentVal,
        Image: {
          ...currentVal.Image,
          widgets: currentVal.Image.widgets.map((item) =>
            item.id === action.payload
              ? { ...item, hidden: !item.hidden }
              : item
          ),
        },
      };
    case "ADD_TICKET":
      return {
        ...currentVal,
        Ticket: {
          ...currentVal.Ticket,
          widgets: [...currentVal.Ticket.widgets, action.payload],
        },
      };
    case "DEL_TICKET":
      return {
        ...currentVal,
        Ticket: {
          ...currentVal.Ticket,
          widgets: currentVal.Ticket.widgets.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    case "TOGGLE_TICKET_WIDGET_VISIBILITY":
      return {
        ...currentVal,
        Ticket: {
          ...currentVal.Ticket,
          widgets: currentVal.Ticket.widgets.map((item) =>
            item.id === action.payload
              ? { ...item, hidden: !item.hidden }
              : item
          ),
        },
      };
    default:
      return currentVal;
  }
};
