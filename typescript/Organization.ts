import Position from './Position';
import Name from './Name';
import Employee from './Employee';

abstract class Organization {
  private root: Position;

  constructor() {
    this.root = this.createOrganization();
  }

  protected abstract createOrganization(): Position;

  printOrganization = (position: Position, prefix: string): string => {
    let str = `${prefix}+-${position}\n`;
    for (const p of position.getDirectReports()) {
      str = str.concat(this.printOrganization(p, `${prefix}  `));
    }
    return str;
  };

  // Hire the given person as an employee in the position that has that title
  // Return the newly filled position or undefined if no position has that title
  hire(person: Name, title: string): Position | undefined {
    // your code here
    this.addNewEmployee(this.root, person, title); // add ceo
    this.provideDetails(this.root, person, title); // go down the line
    return this.root;
  }
  
  addNewEmployee(targetPosition: Position, person: Name, title: String){
    // check if the position is available. If not, ignore
    if (!targetPosition.isFilled()) {
      // if the title matches
      if (targetPosition.getTitle() == title) {
        // hire the person, and add an id
        targetPosition.setEmployee(new Employee(this.getRandomID(0, 1000), person))
      }
    }
    // tried to specify when a position is filled already when it's trying to be filled again. DOESN'T WORK 
    else{console.log("The position, " + `${title}` + ", has already been filled.")}
  }

  provideDetails(targetPosition: Position, person: Name, title: String){
    targetPosition.getDirectReports().forEach(pos => {
      this.addNewEmployee(pos, person, title);
      this.provideDetails(pos, person, title);
    });
  }
  
  getRandomID = (min: number, max: number) => {
    return Math.round(Math.random() * (max-min) + min);
  }

  toString = () => this.printOrganization(this.root, '');
}

export default Organization;
