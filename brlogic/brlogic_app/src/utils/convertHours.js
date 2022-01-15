const convertHours = (minutes) => {
    const hours = Math.floor(minutes/ 60);          
    const min = minutes % 60;
    const hoursFormated = (`00${hours}`).slice(-2);
    const minutesFormated = (`00${min}`).slice(-2);
    
    return `${hoursFormated }:${minutesFormated}`;
  };
  
  export default convertHours