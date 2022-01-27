

// type FIXME = any ;

// // Hint: infer
// export const getDefaultProps = <T>(
//   component: React.ComponentType<T>
// ): FIXME => {
//   return component.defaultProps;
// };


































// interface IUser{
//   name: string;
//   age:number;
// }

// interface IProduct{
//   name:string;
//   price:number;

// }
// interface ICartProduct extends IProduct{
//   count: number;

// }


// type TState ={
//   user: IUser,
//   products:IProduct,
//   cart:ICartProduct
// }


// const state:TState = {
//   user:{name:'mihail', age:34},
//   products:{name:'phon', price:400},
//   cart:{name:'phon', price:400, count:4}
// }

// type Select<State> = <Field extends keyof State>(state:State, field: Field)=>State[Field];
// const select: Select<TState>= (storeState, field) => storeState[field];


// const user1:IUser = select(state, 'user'); 


// type excludeFactID<T> = T extends 'factId' ? never : T;

// interface IFact{
//   factId: number;
//   user:any;
//   value:string;
// }

// const value:excludeFactID<keyof IFact> = 'value'