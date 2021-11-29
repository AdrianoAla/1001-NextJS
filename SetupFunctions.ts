export function generateSequence (len: number): string[] {
    let pmove: string = "NaN";
    let seq: string[] = [];
  
    for (let i = 0; i < len; i++) {
      const choice = Math.floor(Math.random() * 3);
      let output: string = "";
  
      switch (choice) {
        case 0:
          output = "Rot"
          break
        case 1:
          if (pmove === "Sub") {
            output = (Math.floor(Math.random() * 10) > 4) ? "Rot" : "Sub"
          }
          else output = "Add"
          break
        case 2:
          if (pmove === "Add") {
            output = (Math.floor(Math.random() * 10) > 4) ? "Rot" : "Add"
          }
          else output = "Sub"
          break
      }      
      pmove = output;
      seq = [...seq, output];
    }
    console.log(`SEQUENCE: ${seq}`);
    return seq;
  }
  
  export function leadingZeroes(value: string): string {
    return "0".repeat(6 - value.length) + value;
  }
  
  export function validateNumber (value:string): string { 
    const num:number = parseInt(value);
    if (num >= 0 && num <= 999999) {return leadingZeroes(value)}
    return "-1";
  }

export function setWinStateFromSequence(sequence: string[], ms: Function, cg: Function, scg: Function): void {
  sequence.forEach((move) => {
    switch (move) {
      case "Rot":
        ms(cg(), scg, "Rot")
        break
      case "Add":
        ms(cg(), scg, "Add")
        break
      case "Sub":
        ms(cg(), scg, "Sub")
        break
    }
  })
}