export const handlepress = (e:any, value:string, callback:Function, func: Function) => {
    switch (e.key)
    {
      case "a":
        func(value, callback, "Add");
        break;
      case "s":
        func(value, callback, "Sub");
        break;
      case "Enter":
        func(value, callback, "Rot");
        break;
      
    }
  }