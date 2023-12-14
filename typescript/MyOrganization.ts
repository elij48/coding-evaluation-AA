import Name from './Name';
import Organization from './Organization';
import Position from './Position';

class MyOrganization extends Organization {
  createOrganization(): Position {
    const ceo = new Position('CEO');
    const pres = new Position('President');
    ceo.addDirectReport(pres);
    const vpm = new Position('VP Marketing');
    pres.addDirectReport(vpm);
    const vps = new Position('VP Sales');
    pres.addDirectReport(vps);
    const vpf = new Position('VP Finance');
    pres.addDirectReport(vpf);
    const coo = new Position('COO');
    pres.addDirectReport(coo);
    const cio = new Position('CIO');
    ceo.addDirectReport(cio);
    const vpt = new Position('VP Technology');
    cio.addDirectReport(vpt);
    const vpi = new Position('VP Infrastructure');
    cio.addDirectReport(vpi);
    const dea = new Position('Director Enterprise Architecture');
    vpt.addDirectReport(dea);
    const dct = new Position('Director Customer Technology');
    vpt.addDirectReport(dct);
    const s = new Position('Salesperson');
    vps.addDirectReport(s);
    return ceo;
  }
}

const myOrg = new MyOrganization();
myOrg.hire(new Name('Bob', 'Smith'), 'CEO');
myOrg.hire(new Name('Large', 'Smith'), 'CEO');

myOrg.hire(new Name('Zaphod', 'Beeblebrox'), 'President');

myOrg.hire(new Name('Gandalf', 'Gray'), 'Director Enterprise Architecture');
myOrg.hire(new Name('Bill', 'Lumbergh'), 'Director Customer Technology');
myOrg.hire(new Name('Ford', 'Prefect'), 'VP Marketing');
myOrg.hire(new Name('Jane', 'Seller'), 'VP Sales');
myOrg.hire(new Name('Bean', 'Counter'), 'VP Finance');
myOrg.hire(new Name('Victoria', 'Sinclair'), 'CIO');
myOrg.hire(new Name('Head', 'Geek'), 'VP Technology');
myOrg.hire(new Name('Steve', 'Dent'), 'VP Infrastructure');
myOrg.hire(new Name('Slick', 'Willie'), 'Salesperson');
console.log(myOrg.toString());
