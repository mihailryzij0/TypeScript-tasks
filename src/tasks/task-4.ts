type FIXME = Extract<Order, {state:'initial' | 'inWork'}> |null;

type Order =
  | {
      state: "initial";
      sum: number;
    }
  | {
      state: "inWork";
      sum: number;
      workerId: number;
    }
  | {
      state: "buyingSupplies";
      sum: number;
      workerId: number;
      suppliesSum: number;
    }
  | {
      state: "producing";
      sum: number;
      workerId: number;
      suppliesSum: number;
      produceEstimate: Date;
    }
    

  | {
      state: "fullfilled";
      sum: number;
      workerId: number;
      suppliesSum: number;
      produceEstimate: Date;
      fullfillmentDate: Date;
    };

export const filterOnlyInitialAndInWorkOrder = (order: Order): FIXME => {
  if (order.state === "initial" || order.state === "inWork") {
    return order;
  }

  return null;
};

// interface mayData{
//   data: string,
//   name:string,
//   age:number
// }
// let myData:mayData = {
//   data: "jdjd",
//   name:'jkfjfj',
//   age: 27
// }

// let data :typeof myData ={
//   data: "jdjd",
//   name:'jkfjfj',
//   age: 27
// }

// interface user extends mayData{
//   old: number;
// }

// let user = {
//   data: "jdjd",
//   name:'jkfjfj',
//   age: 27,
//   old: 60
// }

// interface IFact{
//   factId:number;
//   user:string;
//   value:any
// }
