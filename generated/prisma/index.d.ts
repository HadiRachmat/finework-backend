
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Contacts
 * 
 */
export type Contacts = $Result.DefaultSelection<Prisma.$ContactsPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model LicensesKey
 * 
 */
export type LicensesKey = $Result.DefaultSelection<Prisma.$LicensesKeyPayload>
/**
 * Model supplier
 * 
 */
export type supplier = $Result.DefaultSelection<Prisma.$supplierPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model OrderItems
 * 
 */
export type OrderItems = $Result.DefaultSelection<Prisma.$OrderItemsPayload>
/**
 * Model Testimonials
 * 
 */
export type Testimonials = $Result.DefaultSelection<Prisma.$TestimonialsPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model PaymentConfirmations
 * 
 */
export type PaymentConfirmations = $Result.DefaultSelection<Prisma.$PaymentConfirmationsPayload>
/**
 * Model AuditLogs
 * 
 */
export type AuditLogs = $Result.DefaultSelection<Prisma.$AuditLogsPayload>
/**
 * Model attachment
 * 
 */
export type attachment = $Result.DefaultSelection<Prisma.$attachmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contacts`: Exposes CRUD operations for the **Contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contacts.findMany()
    * ```
    */
  get contacts(): Prisma.ContactsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.licensesKey`: Exposes CRUD operations for the **LicensesKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicensesKeys
    * const licensesKeys = await prisma.licensesKey.findMany()
    * ```
    */
  get licensesKey(): Prisma.LicensesKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.supplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItems`: Exposes CRUD operations for the **OrderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItems.findMany()
    * ```
    */
  get orderItems(): Prisma.OrderItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testimonials`: Exposes CRUD operations for the **Testimonials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonials.findMany()
    * ```
    */
  get testimonials(): Prisma.TestimonialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentConfirmations`: Exposes CRUD operations for the **PaymentConfirmations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentConfirmations
    * const paymentConfirmations = await prisma.paymentConfirmations.findMany()
    * ```
    */
  get paymentConfirmations(): Prisma.PaymentConfirmationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLogs`: Exposes CRUD operations for the **AuditLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLogs.findMany()
    * ```
    */
  get auditLogs(): Prisma.AuditLogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.attachmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Contacts: 'Contacts',
    Categories: 'Categories',
    Products: 'Products',
    LicensesKey: 'LicensesKey',
    supplier: 'supplier',
    Orders: 'Orders',
    OrderItems: 'OrderItems',
    Testimonials: 'Testimonials',
    Payments: 'Payments',
    PaymentConfirmations: 'PaymentConfirmations',
    AuditLogs: 'AuditLogs',
    attachment: 'attachment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "contacts" | "categories" | "products" | "licensesKey" | "supplier" | "orders" | "orderItems" | "testimonials" | "payments" | "paymentConfirmations" | "auditLogs" | "attachment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Contacts: {
        payload: Prisma.$ContactsPayload<ExtArgs>
        fields: Prisma.ContactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findFirst: {
            args: Prisma.ContactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findMany: {
            args: Prisma.ContactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          create: {
            args: Prisma.ContactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          createMany: {
            args: Prisma.ContactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          delete: {
            args: Prisma.ContactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          update: {
            args: Prisma.ContactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          deleteMany: {
            args: Prisma.ContactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          upsert: {
            args: Prisma.ContactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          aggregate: {
            args: Prisma.ContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacts>
          }
          groupBy: {
            args: Prisma.ContactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactsCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      LicensesKey: {
        payload: Prisma.$LicensesKeyPayload<ExtArgs>
        fields: Prisma.LicensesKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicensesKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicensesKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesKeyPayload>
          }
          findFirst: {
            args: Prisma.LicensesKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicensesKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesKeyPayload>
          }
          findMany: {
            args: Prisma.LicensesKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesKeyPayload>[]
          }
          create: {
            args: Prisma.LicensesKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesKeyPayload>
          }
          createMany: {
            args: Prisma.LicensesKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicensesKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesKeyPayload>[]
          }
          delete: {
            args: Prisma.LicensesKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesKeyPayload>
          }
          update: {
            args: Prisma.LicensesKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesKeyPayload>
          }
          deleteMany: {
            args: Prisma.LicensesKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicensesKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicensesKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesKeyPayload>[]
          }
          upsert: {
            args: Prisma.LicensesKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesKeyPayload>
          }
          aggregate: {
            args: Prisma.LicensesKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicensesKey>
          }
          groupBy: {
            args: Prisma.LicensesKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicensesKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicensesKeyCountArgs<ExtArgs>
            result: $Utils.Optional<LicensesKeyCountAggregateOutputType> | number
          }
        }
      }
      supplier: {
        payload: Prisma.$supplierPayload<ExtArgs>
        fields: Prisma.supplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findFirst: {
            args: Prisma.supplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findMany: {
            args: Prisma.supplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          create: {
            args: Prisma.supplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          createMany: {
            args: Prisma.supplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.supplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          delete: {
            args: Prisma.supplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          update: {
            args: Prisma.supplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          deleteMany: {
            args: Prisma.supplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.supplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.supplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          upsert: {
            args: Prisma.supplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.supplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.supplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderItems: {
        payload: Prisma.$OrderItemsPayload<ExtArgs>
        fields: Prisma.OrderItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          findFirst: {
            args: Prisma.OrderItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          findMany: {
            args: Prisma.OrderItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          create: {
            args: Prisma.OrderItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          createMany: {
            args: Prisma.OrderItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          delete: {
            args: Prisma.OrderItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          update: {
            args: Prisma.OrderItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          aggregate: {
            args: Prisma.OrderItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItems>
          }
          groupBy: {
            args: Prisma.OrderItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsCountAggregateOutputType> | number
          }
        }
      }
      Testimonials: {
        payload: Prisma.$TestimonialsPayload<ExtArgs>
        fields: Prisma.TestimonialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestimonialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          findFirst: {
            args: Prisma.TestimonialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          findMany: {
            args: Prisma.TestimonialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>[]
          }
          create: {
            args: Prisma.TestimonialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          createMany: {
            args: Prisma.TestimonialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestimonialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>[]
          }
          delete: {
            args: Prisma.TestimonialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          update: {
            args: Prisma.TestimonialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestimonialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>[]
          }
          upsert: {
            args: Prisma.TestimonialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          aggregate: {
            args: Prisma.TestimonialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonials>
          }
          groupBy: {
            args: Prisma.TestimonialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialsCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialsCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      PaymentConfirmations: {
        payload: Prisma.$PaymentConfirmationsPayload<ExtArgs>
        fields: Prisma.PaymentConfirmationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentConfirmationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConfirmationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentConfirmationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConfirmationsPayload>
          }
          findFirst: {
            args: Prisma.PaymentConfirmationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConfirmationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentConfirmationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConfirmationsPayload>
          }
          findMany: {
            args: Prisma.PaymentConfirmationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConfirmationsPayload>[]
          }
          create: {
            args: Prisma.PaymentConfirmationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConfirmationsPayload>
          }
          createMany: {
            args: Prisma.PaymentConfirmationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentConfirmationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConfirmationsPayload>[]
          }
          delete: {
            args: Prisma.PaymentConfirmationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConfirmationsPayload>
          }
          update: {
            args: Prisma.PaymentConfirmationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConfirmationsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentConfirmationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentConfirmationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentConfirmationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConfirmationsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentConfirmationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConfirmationsPayload>
          }
          aggregate: {
            args: Prisma.PaymentConfirmationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentConfirmations>
          }
          groupBy: {
            args: Prisma.PaymentConfirmationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentConfirmationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentConfirmationsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentConfirmationsCountAggregateOutputType> | number
          }
        }
      }
      AuditLogs: {
        payload: Prisma.$AuditLogsPayload<ExtArgs>
        fields: Prisma.AuditLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>
          }
          findFirst: {
            args: Prisma.AuditLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>
          }
          findMany: {
            args: Prisma.AuditLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>[]
          }
          create: {
            args: Prisma.AuditLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>
          }
          createMany: {
            args: Prisma.AuditLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>[]
          }
          delete: {
            args: Prisma.AuditLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>
          }
          update: {
            args: Prisma.AuditLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>
          }
          aggregate: {
            args: Prisma.AuditLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLogs>
          }
          groupBy: {
            args: Prisma.AuditLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogsCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogsCountAggregateOutputType> | number
          }
        }
      }
      attachment: {
        payload: Prisma.$attachmentPayload<ExtArgs>
        fields: Prisma.attachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentPayload>
          }
          findFirst: {
            args: Prisma.attachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentPayload>
          }
          findMany: {
            args: Prisma.attachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentPayload>[]
          }
          create: {
            args: Prisma.attachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentPayload>
          }
          createMany: {
            args: Prisma.attachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.attachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentPayload>[]
          }
          delete: {
            args: Prisma.attachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentPayload>
          }
          update: {
            args: Prisma.attachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentPayload>
          }
          deleteMany: {
            args: Prisma.attachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.attachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentPayload>[]
          }
          upsert: {
            args: Prisma.attachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.attachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.attachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    contacts?: ContactsOmit
    categories?: CategoriesOmit
    products?: ProductsOmit
    licensesKey?: LicensesKeyOmit
    supplier?: supplierOmit
    orders?: OrdersOmit
    orderItems?: OrderItemsOmit
    testimonials?: TestimonialsOmit
    payments?: PaymentsOmit
    paymentConfirmations?: PaymentConfirmationsOmit
    auditLogs?: AuditLogsOmit
    attachment?: attachmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    testimonials: number
    orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testimonials?: boolean | UsersCountOutputTypeCountTestimonialsArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTestimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    Products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    licenses: number
    orderItems: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | ProductsCountOutputTypeCountLicensesArgs
    orderItems?: boolean | ProductsCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicensesKeyWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    licenses: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | SupplierCountOutputTypeCountLicensesArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicensesKeyWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    orderItems: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrdersCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    role: number | null
    status: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    role: number | null
    status: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    password: string | null
    role: number | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    password: string | null
    role: number | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    role?: true
    status?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    role?: true
    status?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    fullname: string
    email: string
    password: string
    role: number
    status: number
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contacts?: boolean | Users$contactsArgs<ExtArgs>
    testimonials?: boolean | Users$testimonialsArgs<ExtArgs>
    orders?: boolean | Users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "password" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | Users$contactsArgs<ExtArgs>
    testimonials?: boolean | Users$testimonialsArgs<ExtArgs>
    orders?: boolean | Users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      contacts: Prisma.$ContactsPayload<ExtArgs> | null
      testimonials: Prisma.$TestimonialsPayload<ExtArgs>[]
      orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      password: string
      role: number
      status: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contacts<T extends Users$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Users$contactsArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    testimonials<T extends Users$testimonialsArgs<ExtArgs> = {}>(args?: Subset<T, Users$testimonialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly fullname: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Int'>
    readonly status: FieldRef<"Users", 'Int'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.contacts
   */
  export type Users$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    where?: ContactsWhereInput
  }

  /**
   * Users.testimonials
   */
  export type Users$testimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsInclude<ExtArgs> | null
    where?: TestimonialsWhereInput
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    cursor?: TestimonialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Users.orders
   */
  export type Users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Contacts
   */

  export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  export type ContactsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ContactsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ContactsMinAggregateOutputType = {
    id: number | null
    contact: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ContactsMaxAggregateOutputType = {
    id: number | null
    contact: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ContactsCountAggregateOutputType = {
    id: number
    contact: number
    description: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ContactsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ContactsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ContactsMinAggregateInputType = {
    id?: true
    contact?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ContactsMaxAggregateInputType = {
    id?: true
    contact?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ContactsCountAggregateInputType = {
    id?: true
    contact?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to aggregate.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMaxAggregateInputType
  }

  export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacts[P]>
      : GetScalarType<T[P], AggregateContacts[P]>
  }




  export type ContactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsWhereInput
    orderBy?: ContactsOrderByWithAggregationInput | ContactsOrderByWithAggregationInput[]
    by: ContactsScalarFieldEnum[] | ContactsScalarFieldEnum
    having?: ContactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsCountAggregateInputType | true
    _avg?: ContactsAvgAggregateInputType
    _sum?: ContactsSumAggregateInputType
    _min?: ContactsMinAggregateInputType
    _max?: ContactsMaxAggregateInputType
  }

  export type ContactsGroupByOutputType = {
    id: number
    contact: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  type GetContactsGroupByPayload<T extends ContactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsGroupByOutputType[P]>
        }
      >
    >


  export type ContactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contact?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contact?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contact?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectScalar = {
    id?: boolean
    contact?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ContactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contact" | "description" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["contacts"]>
  export type ContactsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ContactsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ContactsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ContactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contacts"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contact: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["contacts"]>
    composites: {}
  }

  type ContactsGetPayload<S extends boolean | null | undefined | ContactsDefaultArgs> = $Result.GetResult<Prisma.$ContactsPayload, S>

  type ContactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactsCountAggregateInputType | true
    }

  export interface ContactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contacts'], meta: { name: 'Contacts' } }
    /**
     * Find zero or one Contacts that matches the filter.
     * @param {ContactsFindUniqueArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactsFindUniqueArgs>(args: SelectSubset<T, ContactsFindUniqueArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactsFindUniqueOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactsFindFirstArgs>(args?: SelectSubset<T, ContactsFindFirstArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contacts.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactsWithIdOnly = await prisma.contacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactsFindManyArgs>(args?: SelectSubset<T, ContactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacts.
     * @param {ContactsCreateArgs} args - Arguments to create a Contacts.
     * @example
     * // Create one Contacts
     * const Contacts = await prisma.contacts.create({
     *   data: {
     *     // ... data to create a Contacts
     *   }
     * })
     * 
     */
    create<T extends ContactsCreateArgs>(args: SelectSubset<T, ContactsCreateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactsCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactsCreateManyArgs>(args?: SelectSubset<T, ContactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactsCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactsWithIdOnly = await prisma.contacts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactsCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contacts.
     * @param {ContactsDeleteArgs} args - Arguments to delete one Contacts.
     * @example
     * // Delete one Contacts
     * const Contacts = await prisma.contacts.delete({
     *   where: {
     *     // ... filter to delete one Contacts
     *   }
     * })
     * 
     */
    delete<T extends ContactsDeleteArgs>(args: SelectSubset<T, ContactsDeleteArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacts.
     * @param {ContactsUpdateArgs} args - Arguments to update one Contacts.
     * @example
     * // Update one Contacts
     * const contacts = await prisma.contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactsUpdateArgs>(args: SelectSubset<T, ContactsUpdateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactsDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactsDeleteManyArgs>(args?: SelectSubset<T, ContactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactsUpdateManyArgs>(args: SelectSubset<T, ContactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactsUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactsWithIdOnly = await prisma.contacts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactsUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contacts.
     * @param {ContactsUpsertArgs} args - Arguments to update or create a Contacts.
     * @example
     * // Update or create a Contacts
     * const contacts = await prisma.contacts.upsert({
     *   create: {
     *     // ... data to create a Contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacts we want to update
     *   }
     * })
     */
    upsert<T extends ContactsUpsertArgs>(args: SelectSubset<T, ContactsUpsertArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contacts.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactsCountArgs>(
      args?: Subset<T, ContactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactsAggregateArgs>(args: Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>

    /**
     * Group by Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactsGroupByArgs['orderBy'] }
        : { orderBy?: ContactsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contacts model
   */
  readonly fields: ContactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contacts model
   */
  interface ContactsFieldRefs {
    readonly id: FieldRef<"Contacts", 'Int'>
    readonly contact: FieldRef<"Contacts", 'String'>
    readonly description: FieldRef<"Contacts", 'String'>
    readonly createdAt: FieldRef<"Contacts", 'DateTime'>
    readonly updatedAt: FieldRef<"Contacts", 'DateTime'>
    readonly userId: FieldRef<"Contacts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Contacts findUnique
   */
  export type ContactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findUniqueOrThrow
   */
  export type ContactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findFirst
   */
  export type ContactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findFirstOrThrow
   */
  export type ContactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findMany
   */
  export type ContactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts create
   */
  export type ContactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The data needed to create a Contacts.
     */
    data: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
  }

  /**
   * Contacts createMany
   */
  export type ContactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacts createManyAndReturn
   */
  export type ContactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contacts update
   */
  export type ContactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The data needed to update a Contacts.
     */
    data: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
    /**
     * Choose, which Contacts to update.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts updateMany
   */
  export type ContactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contacts updateManyAndReturn
   */
  export type ContactsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contacts upsert
   */
  export type ContactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The filter to search for the Contacts to update in case it exists.
     */
    where: ContactsWhereUniqueInput
    /**
     * In case the Contacts found by the `where` argument doesn't exist, create a new Contacts with this data.
     */
    create: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
    /**
     * In case the Contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
  }

  /**
   * Contacts delete
   */
  export type ContactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter which Contacts to delete.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts deleteMany
   */
  export type ContactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contacts without action
   */
  export type ContactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends Categories$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly description: FieldRef<"Categories", 'String'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
    readonly updatedAt: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.Products
   */
  export type Categories$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    stock: number | null
    status: number | null
    categoryId: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    stock: number | null
    status: number | null
    categoryId: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: string | null
    stock: number | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: string | null
    stock: number | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    stock: number
    status: number
    createdAt: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    stock?: true
    status?: true
    categoryId?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    stock?: true
    status?: true
    categoryId?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    price: string
    stock: number
    status: number
    createdAt: Date
    updatedAt: Date
    categoryId: number
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
    licenses?: boolean | Products$licensesArgs<ExtArgs>
    orderItems?: boolean | Products$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "stock" | "status" | "createdAt" | "updatedAt" | "categoryId", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
    licenses?: boolean | Products$licensesArgs<ExtArgs>
    orderItems?: boolean | Products$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      categories: Prisma.$CategoriesPayload<ExtArgs>
      licenses: Prisma.$LicensesKeyPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      price: string
      stock: number
      status: number
      createdAt: Date
      updatedAt: Date
      categoryId: number
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    licenses<T extends Products$licensesArgs<ExtArgs> = {}>(args?: Subset<T, Products$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends Products$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Products$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'Int'>
    readonly name: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'String'>
    readonly stock: FieldRef<"Products", 'Int'>
    readonly status: FieldRef<"Products", 'Int'>
    readonly createdAt: FieldRef<"Products", 'DateTime'>
    readonly updatedAt: FieldRef<"Products", 'DateTime'>
    readonly categoryId: FieldRef<"Products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.licenses
   */
  export type Products$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyInclude<ExtArgs> | null
    where?: LicensesKeyWhereInput
    orderBy?: LicensesKeyOrderByWithRelationInput | LicensesKeyOrderByWithRelationInput[]
    cursor?: LicensesKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicensesKeyScalarFieldEnum | LicensesKeyScalarFieldEnum[]
  }

  /**
   * Products.orderItems
   */
  export type Products$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model LicensesKey
   */

  export type AggregateLicensesKey = {
    _count: LicensesKeyCountAggregateOutputType | null
    _avg: LicensesKeyAvgAggregateOutputType | null
    _sum: LicensesKeySumAggregateOutputType | null
    _min: LicensesKeyMinAggregateOutputType | null
    _max: LicensesKeyMaxAggregateOutputType | null
  }

  export type LicensesKeyAvgAggregateOutputType = {
    id: number | null
    activationLimit: number | null
    status: number | null
    productId: number | null
    supplierId: number | null
  }

  export type LicensesKeySumAggregateOutputType = {
    id: number | null
    activationLimit: number | null
    status: number | null
    productId: number | null
    supplierId: number | null
  }

  export type LicensesKeyMinAggregateOutputType = {
    id: number | null
    encryptedKey: string | null
    keyHash: string | null
    activationLimit: number | null
    status: number | null
    soldAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: number | null
    supplierId: number | null
  }

  export type LicensesKeyMaxAggregateOutputType = {
    id: number | null
    encryptedKey: string | null
    keyHash: string | null
    activationLimit: number | null
    status: number | null
    soldAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: number | null
    supplierId: number | null
  }

  export type LicensesKeyCountAggregateOutputType = {
    id: number
    encryptedKey: number
    keyHash: number
    activationLimit: number
    status: number
    soldAt: number
    createdAt: number
    updatedAt: number
    productId: number
    supplierId: number
    _all: number
  }


  export type LicensesKeyAvgAggregateInputType = {
    id?: true
    activationLimit?: true
    status?: true
    productId?: true
    supplierId?: true
  }

  export type LicensesKeySumAggregateInputType = {
    id?: true
    activationLimit?: true
    status?: true
    productId?: true
    supplierId?: true
  }

  export type LicensesKeyMinAggregateInputType = {
    id?: true
    encryptedKey?: true
    keyHash?: true
    activationLimit?: true
    status?: true
    soldAt?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    supplierId?: true
  }

  export type LicensesKeyMaxAggregateInputType = {
    id?: true
    encryptedKey?: true
    keyHash?: true
    activationLimit?: true
    status?: true
    soldAt?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    supplierId?: true
  }

  export type LicensesKeyCountAggregateInputType = {
    id?: true
    encryptedKey?: true
    keyHash?: true
    activationLimit?: true
    status?: true
    soldAt?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    supplierId?: true
    _all?: true
  }

  export type LicensesKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicensesKey to aggregate.
     */
    where?: LicensesKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicensesKeys to fetch.
     */
    orderBy?: LicensesKeyOrderByWithRelationInput | LicensesKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicensesKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicensesKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicensesKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicensesKeys
    **/
    _count?: true | LicensesKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LicensesKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LicensesKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicensesKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicensesKeyMaxAggregateInputType
  }

  export type GetLicensesKeyAggregateType<T extends LicensesKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateLicensesKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicensesKey[P]>
      : GetScalarType<T[P], AggregateLicensesKey[P]>
  }




  export type LicensesKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicensesKeyWhereInput
    orderBy?: LicensesKeyOrderByWithAggregationInput | LicensesKeyOrderByWithAggregationInput[]
    by: LicensesKeyScalarFieldEnum[] | LicensesKeyScalarFieldEnum
    having?: LicensesKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicensesKeyCountAggregateInputType | true
    _avg?: LicensesKeyAvgAggregateInputType
    _sum?: LicensesKeySumAggregateInputType
    _min?: LicensesKeyMinAggregateInputType
    _max?: LicensesKeyMaxAggregateInputType
  }

  export type LicensesKeyGroupByOutputType = {
    id: number
    encryptedKey: string
    keyHash: string
    activationLimit: number
    status: number
    soldAt: Date | null
    createdAt: Date
    updatedAt: Date
    productId: number
    supplierId: number | null
    _count: LicensesKeyCountAggregateOutputType | null
    _avg: LicensesKeyAvgAggregateOutputType | null
    _sum: LicensesKeySumAggregateOutputType | null
    _min: LicensesKeyMinAggregateOutputType | null
    _max: LicensesKeyMaxAggregateOutputType | null
  }

  type GetLicensesKeyGroupByPayload<T extends LicensesKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicensesKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicensesKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicensesKeyGroupByOutputType[P]>
            : GetScalarType<T[P], LicensesKeyGroupByOutputType[P]>
        }
      >
    >


  export type LicensesKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    encryptedKey?: boolean
    keyHash?: boolean
    activationLimit?: boolean
    status?: boolean
    soldAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    supplierId?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    supplier?: boolean | LicensesKey$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["licensesKey"]>

  export type LicensesKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    encryptedKey?: boolean
    keyHash?: boolean
    activationLimit?: boolean
    status?: boolean
    soldAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    supplierId?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    supplier?: boolean | LicensesKey$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["licensesKey"]>

  export type LicensesKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    encryptedKey?: boolean
    keyHash?: boolean
    activationLimit?: boolean
    status?: boolean
    soldAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    supplierId?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    supplier?: boolean | LicensesKey$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["licensesKey"]>

  export type LicensesKeySelectScalar = {
    id?: boolean
    encryptedKey?: boolean
    keyHash?: boolean
    activationLimit?: boolean
    status?: boolean
    soldAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    supplierId?: boolean
  }

  export type LicensesKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "encryptedKey" | "keyHash" | "activationLimit" | "status" | "soldAt" | "createdAt" | "updatedAt" | "productId" | "supplierId", ExtArgs["result"]["licensesKey"]>
  export type LicensesKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    supplier?: boolean | LicensesKey$supplierArgs<ExtArgs>
  }
  export type LicensesKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    supplier?: boolean | LicensesKey$supplierArgs<ExtArgs>
  }
  export type LicensesKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    supplier?: boolean | LicensesKey$supplierArgs<ExtArgs>
  }

  export type $LicensesKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicensesKey"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
      supplier: Prisma.$supplierPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      encryptedKey: string
      keyHash: string
      activationLimit: number
      status: number
      soldAt: Date | null
      createdAt: Date
      updatedAt: Date
      productId: number
      supplierId: number | null
    }, ExtArgs["result"]["licensesKey"]>
    composites: {}
  }

  type LicensesKeyGetPayload<S extends boolean | null | undefined | LicensesKeyDefaultArgs> = $Result.GetResult<Prisma.$LicensesKeyPayload, S>

  type LicensesKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicensesKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicensesKeyCountAggregateInputType | true
    }

  export interface LicensesKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicensesKey'], meta: { name: 'LicensesKey' } }
    /**
     * Find zero or one LicensesKey that matches the filter.
     * @param {LicensesKeyFindUniqueArgs} args - Arguments to find a LicensesKey
     * @example
     * // Get one LicensesKey
     * const licensesKey = await prisma.licensesKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicensesKeyFindUniqueArgs>(args: SelectSubset<T, LicensesKeyFindUniqueArgs<ExtArgs>>): Prisma__LicensesKeyClient<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LicensesKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicensesKeyFindUniqueOrThrowArgs} args - Arguments to find a LicensesKey
     * @example
     * // Get one LicensesKey
     * const licensesKey = await prisma.licensesKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicensesKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, LicensesKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicensesKeyClient<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LicensesKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesKeyFindFirstArgs} args - Arguments to find a LicensesKey
     * @example
     * // Get one LicensesKey
     * const licensesKey = await prisma.licensesKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicensesKeyFindFirstArgs>(args?: SelectSubset<T, LicensesKeyFindFirstArgs<ExtArgs>>): Prisma__LicensesKeyClient<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LicensesKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesKeyFindFirstOrThrowArgs} args - Arguments to find a LicensesKey
     * @example
     * // Get one LicensesKey
     * const licensesKey = await prisma.licensesKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicensesKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, LicensesKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicensesKeyClient<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LicensesKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicensesKeys
     * const licensesKeys = await prisma.licensesKey.findMany()
     * 
     * // Get first 10 LicensesKeys
     * const licensesKeys = await prisma.licensesKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licensesKeyWithIdOnly = await prisma.licensesKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicensesKeyFindManyArgs>(args?: SelectSubset<T, LicensesKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LicensesKey.
     * @param {LicensesKeyCreateArgs} args - Arguments to create a LicensesKey.
     * @example
     * // Create one LicensesKey
     * const LicensesKey = await prisma.licensesKey.create({
     *   data: {
     *     // ... data to create a LicensesKey
     *   }
     * })
     * 
     */
    create<T extends LicensesKeyCreateArgs>(args: SelectSubset<T, LicensesKeyCreateArgs<ExtArgs>>): Prisma__LicensesKeyClient<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LicensesKeys.
     * @param {LicensesKeyCreateManyArgs} args - Arguments to create many LicensesKeys.
     * @example
     * // Create many LicensesKeys
     * const licensesKey = await prisma.licensesKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicensesKeyCreateManyArgs>(args?: SelectSubset<T, LicensesKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LicensesKeys and returns the data saved in the database.
     * @param {LicensesKeyCreateManyAndReturnArgs} args - Arguments to create many LicensesKeys.
     * @example
     * // Create many LicensesKeys
     * const licensesKey = await prisma.licensesKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LicensesKeys and only return the `id`
     * const licensesKeyWithIdOnly = await prisma.licensesKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicensesKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, LicensesKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LicensesKey.
     * @param {LicensesKeyDeleteArgs} args - Arguments to delete one LicensesKey.
     * @example
     * // Delete one LicensesKey
     * const LicensesKey = await prisma.licensesKey.delete({
     *   where: {
     *     // ... filter to delete one LicensesKey
     *   }
     * })
     * 
     */
    delete<T extends LicensesKeyDeleteArgs>(args: SelectSubset<T, LicensesKeyDeleteArgs<ExtArgs>>): Prisma__LicensesKeyClient<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LicensesKey.
     * @param {LicensesKeyUpdateArgs} args - Arguments to update one LicensesKey.
     * @example
     * // Update one LicensesKey
     * const licensesKey = await prisma.licensesKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicensesKeyUpdateArgs>(args: SelectSubset<T, LicensesKeyUpdateArgs<ExtArgs>>): Prisma__LicensesKeyClient<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LicensesKeys.
     * @param {LicensesKeyDeleteManyArgs} args - Arguments to filter LicensesKeys to delete.
     * @example
     * // Delete a few LicensesKeys
     * const { count } = await prisma.licensesKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicensesKeyDeleteManyArgs>(args?: SelectSubset<T, LicensesKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicensesKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicensesKeys
     * const licensesKey = await prisma.licensesKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicensesKeyUpdateManyArgs>(args: SelectSubset<T, LicensesKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicensesKeys and returns the data updated in the database.
     * @param {LicensesKeyUpdateManyAndReturnArgs} args - Arguments to update many LicensesKeys.
     * @example
     * // Update many LicensesKeys
     * const licensesKey = await prisma.licensesKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LicensesKeys and only return the `id`
     * const licensesKeyWithIdOnly = await prisma.licensesKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LicensesKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, LicensesKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LicensesKey.
     * @param {LicensesKeyUpsertArgs} args - Arguments to update or create a LicensesKey.
     * @example
     * // Update or create a LicensesKey
     * const licensesKey = await prisma.licensesKey.upsert({
     *   create: {
     *     // ... data to create a LicensesKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicensesKey we want to update
     *   }
     * })
     */
    upsert<T extends LicensesKeyUpsertArgs>(args: SelectSubset<T, LicensesKeyUpsertArgs<ExtArgs>>): Prisma__LicensesKeyClient<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LicensesKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesKeyCountArgs} args - Arguments to filter LicensesKeys to count.
     * @example
     * // Count the number of LicensesKeys
     * const count = await prisma.licensesKey.count({
     *   where: {
     *     // ... the filter for the LicensesKeys we want to count
     *   }
     * })
    **/
    count<T extends LicensesKeyCountArgs>(
      args?: Subset<T, LicensesKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicensesKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicensesKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicensesKeyAggregateArgs>(args: Subset<T, LicensesKeyAggregateArgs>): Prisma.PrismaPromise<GetLicensesKeyAggregateType<T>>

    /**
     * Group by LicensesKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicensesKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicensesKeyGroupByArgs['orderBy'] }
        : { orderBy?: LicensesKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicensesKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicensesKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicensesKey model
   */
  readonly fields: LicensesKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicensesKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicensesKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplier<T extends LicensesKey$supplierArgs<ExtArgs> = {}>(args?: Subset<T, LicensesKey$supplierArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LicensesKey model
   */
  interface LicensesKeyFieldRefs {
    readonly id: FieldRef<"LicensesKey", 'Int'>
    readonly encryptedKey: FieldRef<"LicensesKey", 'String'>
    readonly keyHash: FieldRef<"LicensesKey", 'String'>
    readonly activationLimit: FieldRef<"LicensesKey", 'Int'>
    readonly status: FieldRef<"LicensesKey", 'Int'>
    readonly soldAt: FieldRef<"LicensesKey", 'DateTime'>
    readonly createdAt: FieldRef<"LicensesKey", 'DateTime'>
    readonly updatedAt: FieldRef<"LicensesKey", 'DateTime'>
    readonly productId: FieldRef<"LicensesKey", 'Int'>
    readonly supplierId: FieldRef<"LicensesKey", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LicensesKey findUnique
   */
  export type LicensesKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyInclude<ExtArgs> | null
    /**
     * Filter, which LicensesKey to fetch.
     */
    where: LicensesKeyWhereUniqueInput
  }

  /**
   * LicensesKey findUniqueOrThrow
   */
  export type LicensesKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyInclude<ExtArgs> | null
    /**
     * Filter, which LicensesKey to fetch.
     */
    where: LicensesKeyWhereUniqueInput
  }

  /**
   * LicensesKey findFirst
   */
  export type LicensesKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyInclude<ExtArgs> | null
    /**
     * Filter, which LicensesKey to fetch.
     */
    where?: LicensesKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicensesKeys to fetch.
     */
    orderBy?: LicensesKeyOrderByWithRelationInput | LicensesKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicensesKeys.
     */
    cursor?: LicensesKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicensesKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicensesKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicensesKeys.
     */
    distinct?: LicensesKeyScalarFieldEnum | LicensesKeyScalarFieldEnum[]
  }

  /**
   * LicensesKey findFirstOrThrow
   */
  export type LicensesKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyInclude<ExtArgs> | null
    /**
     * Filter, which LicensesKey to fetch.
     */
    where?: LicensesKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicensesKeys to fetch.
     */
    orderBy?: LicensesKeyOrderByWithRelationInput | LicensesKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicensesKeys.
     */
    cursor?: LicensesKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicensesKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicensesKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicensesKeys.
     */
    distinct?: LicensesKeyScalarFieldEnum | LicensesKeyScalarFieldEnum[]
  }

  /**
   * LicensesKey findMany
   */
  export type LicensesKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyInclude<ExtArgs> | null
    /**
     * Filter, which LicensesKeys to fetch.
     */
    where?: LicensesKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicensesKeys to fetch.
     */
    orderBy?: LicensesKeyOrderByWithRelationInput | LicensesKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicensesKeys.
     */
    cursor?: LicensesKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicensesKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicensesKeys.
     */
    skip?: number
    distinct?: LicensesKeyScalarFieldEnum | LicensesKeyScalarFieldEnum[]
  }

  /**
   * LicensesKey create
   */
  export type LicensesKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a LicensesKey.
     */
    data: XOR<LicensesKeyCreateInput, LicensesKeyUncheckedCreateInput>
  }

  /**
   * LicensesKey createMany
   */
  export type LicensesKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicensesKeys.
     */
    data: LicensesKeyCreateManyInput | LicensesKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicensesKey createManyAndReturn
   */
  export type LicensesKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * The data used to create many LicensesKeys.
     */
    data: LicensesKeyCreateManyInput | LicensesKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicensesKey update
   */
  export type LicensesKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a LicensesKey.
     */
    data: XOR<LicensesKeyUpdateInput, LicensesKeyUncheckedUpdateInput>
    /**
     * Choose, which LicensesKey to update.
     */
    where: LicensesKeyWhereUniqueInput
  }

  /**
   * LicensesKey updateMany
   */
  export type LicensesKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicensesKeys.
     */
    data: XOR<LicensesKeyUpdateManyMutationInput, LicensesKeyUncheckedUpdateManyInput>
    /**
     * Filter which LicensesKeys to update
     */
    where?: LicensesKeyWhereInput
    /**
     * Limit how many LicensesKeys to update.
     */
    limit?: number
  }

  /**
   * LicensesKey updateManyAndReturn
   */
  export type LicensesKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * The data used to update LicensesKeys.
     */
    data: XOR<LicensesKeyUpdateManyMutationInput, LicensesKeyUncheckedUpdateManyInput>
    /**
     * Filter which LicensesKeys to update
     */
    where?: LicensesKeyWhereInput
    /**
     * Limit how many LicensesKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicensesKey upsert
   */
  export type LicensesKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the LicensesKey to update in case it exists.
     */
    where: LicensesKeyWhereUniqueInput
    /**
     * In case the LicensesKey found by the `where` argument doesn't exist, create a new LicensesKey with this data.
     */
    create: XOR<LicensesKeyCreateInput, LicensesKeyUncheckedCreateInput>
    /**
     * In case the LicensesKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicensesKeyUpdateInput, LicensesKeyUncheckedUpdateInput>
  }

  /**
   * LicensesKey delete
   */
  export type LicensesKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyInclude<ExtArgs> | null
    /**
     * Filter which LicensesKey to delete.
     */
    where: LicensesKeyWhereUniqueInput
  }

  /**
   * LicensesKey deleteMany
   */
  export type LicensesKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicensesKeys to delete
     */
    where?: LicensesKeyWhereInput
    /**
     * Limit how many LicensesKeys to delete.
     */
    limit?: number
  }

  /**
   * LicensesKey.supplier
   */
  export type LicensesKey$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    where?: supplierWhereInput
  }

  /**
   * LicensesKey without action
   */
  export type LicensesKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyInclude<ExtArgs> | null
  }


  /**
   * Model supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    name: string | null
    contact: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    contact: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    contact: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supplier to aggregate.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type supplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplierWhereInput
    orderBy?: supplierOrderByWithAggregationInput | supplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: supplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    name: string
    contact: string
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends supplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type supplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    licenses?: boolean | supplier$licensesArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type supplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type supplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type supplierSelectScalar = {
    id?: boolean
    name?: boolean
    contact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type supplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "contact" | "createdAt" | "updatedAt", ExtArgs["result"]["supplier"]>
  export type supplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | supplier$licensesArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type supplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type supplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $supplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "supplier"
    objects: {
      licenses: Prisma.$LicensesKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      contact: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type supplierGetPayload<S extends boolean | null | undefined | supplierDefaultArgs> = $Result.GetResult<Prisma.$supplierPayload, S>

  type supplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<supplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface supplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supplier'], meta: { name: 'supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {supplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supplierFindUniqueArgs>(args: SelectSubset<T, supplierFindUniqueArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {supplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supplierFindUniqueOrThrowArgs>(args: SelectSubset<T, supplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supplierFindFirstArgs>(args?: SelectSubset<T, supplierFindFirstArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supplierFindFirstOrThrowArgs>(args?: SelectSubset<T, supplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends supplierFindManyArgs>(args?: SelectSubset<T, supplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {supplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends supplierCreateArgs>(args: SelectSubset<T, supplierCreateArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {supplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends supplierCreateManyArgs>(args?: SelectSubset<T, supplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {supplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends supplierCreateManyAndReturnArgs>(args?: SelectSubset<T, supplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {supplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends supplierDeleteArgs>(args: SelectSubset<T, supplierDeleteArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {supplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends supplierUpdateArgs>(args: SelectSubset<T, supplierUpdateArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {supplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends supplierDeleteManyArgs>(args?: SelectSubset<T, supplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends supplierUpdateManyArgs>(args: SelectSubset<T, supplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {supplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends supplierUpdateManyAndReturnArgs>(args: SelectSubset<T, supplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {supplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends supplierUpsertArgs>(args: SelectSubset<T, supplierUpsertArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends supplierCountArgs>(
      args?: Subset<T, supplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends supplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supplierGroupByArgs['orderBy'] }
        : { orderBy?: supplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, supplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the supplier model
   */
  readonly fields: supplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    licenses<T extends supplier$licensesArgs<ExtArgs> = {}>(args?: Subset<T, supplier$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensesKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the supplier model
   */
  interface supplierFieldRefs {
    readonly id: FieldRef<"supplier", 'Int'>
    readonly name: FieldRef<"supplier", 'String'>
    readonly contact: FieldRef<"supplier", 'String'>
    readonly createdAt: FieldRef<"supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * supplier findUnique
   */
  export type supplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findUniqueOrThrow
   */
  export type supplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findFirst
   */
  export type supplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findFirstOrThrow
   */
  export type supplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findMany
   */
  export type supplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier create
   */
  export type supplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * The data needed to create a supplier.
     */
    data: XOR<supplierCreateInput, supplierUncheckedCreateInput>
  }

  /**
   * supplier createMany
   */
  export type supplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: supplierCreateManyInput | supplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supplier createManyAndReturn
   */
  export type supplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data used to create many suppliers.
     */
    data: supplierCreateManyInput | supplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supplier update
   */
  export type supplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * The data needed to update a supplier.
     */
    data: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
    /**
     * Choose, which supplier to update.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier updateMany
   */
  export type supplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * supplier updateManyAndReturn
   */
  export type supplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data used to update suppliers.
     */
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * supplier upsert
   */
  export type supplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * The filter to search for the supplier to update in case it exists.
     */
    where: supplierWhereUniqueInput
    /**
     * In case the supplier found by the `where` argument doesn't exist, create a new supplier with this data.
     */
    create: XOR<supplierCreateInput, supplierUncheckedCreateInput>
    /**
     * In case the supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
  }

  /**
   * supplier delete
   */
  export type supplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter which supplier to delete.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier deleteMany
   */
  export type supplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to delete.
     */
    limit?: number
  }

  /**
   * supplier.licenses
   */
  export type supplier$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensesKey
     */
    select?: LicensesKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicensesKey
     */
    omit?: LicensesKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesKeyInclude<ExtArgs> | null
    where?: LicensesKeyWhereInput
    orderBy?: LicensesKeyOrderByWithRelationInput | LicensesKeyOrderByWithRelationInput[]
    cursor?: LicensesKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicensesKeyScalarFieldEnum | LicensesKeyScalarFieldEnum[]
  }

  /**
   * supplier without action
   */
  export type supplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    status: number | null
    userId: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    status: number | null
    userId: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    amount: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    amount: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    amount: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    status?: true
    userId?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    status?: true
    userId?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    amount: string
    status: number
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    orderItems?: boolean | Orders$orderItemsArgs<ExtArgs>
    payment?: boolean | Orders$paymentArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "status" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    orderItems?: boolean | Orders$orderItemsArgs<ExtArgs>
    payment?: boolean | Orders$paymentArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      orderItems: Prisma.$OrderItemsPayload<ExtArgs>[]
      payment: Prisma.$PaymentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: string
      status: number
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Orders$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Orders$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Orders$paymentArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly amount: FieldRef<"Orders", 'String'>
    readonly status: FieldRef<"Orders", 'Int'>
    readonly createdAt: FieldRef<"Orders", 'DateTime'>
    readonly updatedAt: FieldRef<"Orders", 'DateTime'>
    readonly userId: FieldRef<"Orders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.orderItems
   */
  export type Orders$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * Orders.payment
   */
  export type Orders$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model OrderItems
   */

  export type AggregateOrderItems = {
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  export type OrderItemsAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderItemsSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderItemsMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: number | null
    productId: number | null
  }

  export type OrderItemsMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: number | null
    productId: number | null
  }

  export type OrderItemsCountAggregateOutputType = {
    id: number
    quantity: number
    price: number
    createdAt: number
    updatedAt: number
    orderId: number
    productId: number
    _all: number
  }


  export type OrderItemsAvgAggregateInputType = {
    id?: true
    quantity?: true
    orderId?: true
    productId?: true
  }

  export type OrderItemsSumAggregateInputType = {
    id?: true
    quantity?: true
    orderId?: true
    productId?: true
  }

  export type OrderItemsMinAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    productId?: true
  }

  export type OrderItemsMaxAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    productId?: true
  }

  export type OrderItemsCountAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    productId?: true
    _all?: true
  }

  export type OrderItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to aggregate.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemsMaxAggregateInputType
  }

  export type GetOrderItemsAggregateType<T extends OrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItems[P]>
      : GetScalarType<T[P], AggregateOrderItems[P]>
  }




  export type OrderItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithAggregationInput | OrderItemsOrderByWithAggregationInput[]
    by: OrderItemsScalarFieldEnum[] | OrderItemsScalarFieldEnum
    having?: OrderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemsCountAggregateInputType | true
    _avg?: OrderItemsAvgAggregateInputType
    _sum?: OrderItemsSumAggregateInputType
    _min?: OrderItemsMinAggregateInputType
    _max?: OrderItemsMaxAggregateInputType
  }

  export type OrderItemsGroupByOutputType = {
    id: number
    quantity: number
    price: string
    createdAt: Date
    updatedAt: Date
    orderId: number
    productId: number
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  type GetOrderItemsGroupByPayload<T extends OrderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    productId?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    productId?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    productId?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectScalar = {
    id?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    productId?: boolean
  }

  export type OrderItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "price" | "createdAt" | "updatedAt" | "orderId" | "productId", ExtArgs["result"]["orderItems"]>
  export type OrderItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type OrderItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type OrderItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $OrderItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItems"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      price: string
      createdAt: Date
      updatedAt: Date
      orderId: number
      productId: number
    }, ExtArgs["result"]["orderItems"]>
    composites: {}
  }

  type OrderItemsGetPayload<S extends boolean | null | undefined | OrderItemsDefaultArgs> = $Result.GetResult<Prisma.$OrderItemsPayload, S>

  type OrderItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemsCountAggregateInputType | true
    }

  export interface OrderItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItems'], meta: { name: 'OrderItems' } }
    /**
     * Find zero or one OrderItems that matches the filter.
     * @param {OrderItemsFindUniqueArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemsFindUniqueArgs>(args: SelectSubset<T, OrderItemsFindUniqueArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemsFindUniqueOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemsFindFirstArgs>(args?: SelectSubset<T, OrderItemsFindFirstArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItems.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemsFindManyArgs>(args?: SelectSubset<T, OrderItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItems.
     * @param {OrderItemsCreateArgs} args - Arguments to create a OrderItems.
     * @example
     * // Create one OrderItems
     * const OrderItems = await prisma.orderItems.create({
     *   data: {
     *     // ... data to create a OrderItems
     *   }
     * })
     * 
     */
    create<T extends OrderItemsCreateArgs>(args: SelectSubset<T, OrderItemsCreateArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemsCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemsCreateManyArgs>(args?: SelectSubset<T, OrderItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemsCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItems.
     * @param {OrderItemsDeleteArgs} args - Arguments to delete one OrderItems.
     * @example
     * // Delete one OrderItems
     * const OrderItems = await prisma.orderItems.delete({
     *   where: {
     *     // ... filter to delete one OrderItems
     *   }
     * })
     * 
     */
    delete<T extends OrderItemsDeleteArgs>(args: SelectSubset<T, OrderItemsDeleteArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItems.
     * @param {OrderItemsUpdateArgs} args - Arguments to update one OrderItems.
     * @example
     * // Update one OrderItems
     * const orderItems = await prisma.orderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemsUpdateArgs>(args: SelectSubset<T, OrderItemsUpdateArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemsDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemsDeleteManyArgs>(args?: SelectSubset<T, OrderItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemsUpdateManyArgs>(args: SelectSubset<T, OrderItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemsUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItems.
     * @param {OrderItemsUpsertArgs} args - Arguments to update or create a OrderItems.
     * @example
     * // Update or create a OrderItems
     * const orderItems = await prisma.orderItems.upsert({
     *   create: {
     *     // ... data to create a OrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItems we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemsUpsertArgs>(args: SelectSubset<T, OrderItemsUpsertArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItems.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemsCountArgs>(
      args?: Subset<T, OrderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemsAggregateArgs>(args: Subset<T, OrderItemsAggregateArgs>): Prisma.PrismaPromise<GetOrderItemsAggregateType<T>>

    /**
     * Group by OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemsGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItems model
   */
  readonly fields: OrderItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItems model
   */
  interface OrderItemsFieldRefs {
    readonly id: FieldRef<"OrderItems", 'Int'>
    readonly quantity: FieldRef<"OrderItems", 'Int'>
    readonly price: FieldRef<"OrderItems", 'String'>
    readonly createdAt: FieldRef<"OrderItems", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItems", 'DateTime'>
    readonly orderId: FieldRef<"OrderItems", 'Int'>
    readonly productId: FieldRef<"OrderItems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderItems findUnique
   */
  export type OrderItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findUniqueOrThrow
   */
  export type OrderItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findFirst
   */
  export type OrderItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems findFirstOrThrow
   */
  export type OrderItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems findMany
   */
  export type OrderItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems create
   */
  export type OrderItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItems.
     */
    data: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
  }

  /**
   * OrderItems createMany
   */
  export type OrderItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemsCreateManyInput | OrderItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItems createManyAndReturn
   */
  export type OrderItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemsCreateManyInput | OrderItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItems update
   */
  export type OrderItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItems.
     */
    data: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
    /**
     * Choose, which OrderItems to update.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems updateMany
   */
  export type OrderItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItems updateManyAndReturn
   */
  export type OrderItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItems upsert
   */
  export type OrderItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItems to update in case it exists.
     */
    where: OrderItemsWhereUniqueInput
    /**
     * In case the OrderItems found by the `where` argument doesn't exist, create a new OrderItems with this data.
     */
    create: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
    /**
     * In case the OrderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
  }

  /**
   * OrderItems delete
   */
  export type OrderItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter which OrderItems to delete.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems deleteMany
   */
  export type OrderItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItems without action
   */
  export type OrderItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
  }


  /**
   * Model Testimonials
   */

  export type AggregateTestimonials = {
    _count: TestimonialsCountAggregateOutputType | null
    _avg: TestimonialsAvgAggregateOutputType | null
    _sum: TestimonialsSumAggregateOutputType | null
    _min: TestimonialsMinAggregateOutputType | null
    _max: TestimonialsMaxAggregateOutputType | null
  }

  export type TestimonialsAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
  }

  export type TestimonialsSumAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
  }

  export type TestimonialsMinAggregateOutputType = {
    id: number | null
    content: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type TestimonialsMaxAggregateOutputType = {
    id: number | null
    content: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type TestimonialsCountAggregateOutputType = {
    id: number
    content: number
    rating: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type TestimonialsAvgAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
  }

  export type TestimonialsSumAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
  }

  export type TestimonialsMinAggregateInputType = {
    id?: true
    content?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TestimonialsMaxAggregateInputType = {
    id?: true
    content?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TestimonialsCountAggregateInputType = {
    id?: true
    content?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type TestimonialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to aggregate.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testimonials
    **/
    _count?: true | TestimonialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialsMaxAggregateInputType
  }

  export type GetTestimonialsAggregateType<T extends TestimonialsAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonials[P]>
      : GetScalarType<T[P], AggregateTestimonials[P]>
  }




  export type TestimonialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialsWhereInput
    orderBy?: TestimonialsOrderByWithAggregationInput | TestimonialsOrderByWithAggregationInput[]
    by: TestimonialsScalarFieldEnum[] | TestimonialsScalarFieldEnum
    having?: TestimonialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialsCountAggregateInputType | true
    _avg?: TestimonialsAvgAggregateInputType
    _sum?: TestimonialsSumAggregateInputType
    _min?: TestimonialsMinAggregateInputType
    _max?: TestimonialsMaxAggregateInputType
  }

  export type TestimonialsGroupByOutputType = {
    id: number
    content: string
    rating: number
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: TestimonialsCountAggregateOutputType | null
    _avg: TestimonialsAvgAggregateOutputType | null
    _sum: TestimonialsSumAggregateOutputType | null
    _min: TestimonialsMinAggregateOutputType | null
    _max: TestimonialsMaxAggregateOutputType | null
  }

  type GetTestimonialsGroupByPayload<T extends TestimonialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialsGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialsGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testimonials"]>

  export type TestimonialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testimonials"]>

  export type TestimonialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testimonials"]>

  export type TestimonialsSelectScalar = {
    id?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type TestimonialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "rating" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["testimonials"]>
  export type TestimonialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TestimonialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TestimonialsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $TestimonialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testimonials"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      rating: number
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["testimonials"]>
    composites: {}
  }

  type TestimonialsGetPayload<S extends boolean | null | undefined | TestimonialsDefaultArgs> = $Result.GetResult<Prisma.$TestimonialsPayload, S>

  type TestimonialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestimonialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestimonialsCountAggregateInputType | true
    }

  export interface TestimonialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonials'], meta: { name: 'Testimonials' } }
    /**
     * Find zero or one Testimonials that matches the filter.
     * @param {TestimonialsFindUniqueArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimonialsFindUniqueArgs>(args: SelectSubset<T, TestimonialsFindUniqueArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testimonials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestimonialsFindUniqueOrThrowArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimonialsFindUniqueOrThrowArgs>(args: SelectSubset<T, TestimonialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsFindFirstArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimonialsFindFirstArgs>(args?: SelectSubset<T, TestimonialsFindFirstArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsFindFirstOrThrowArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimonialsFindFirstOrThrowArgs>(args?: SelectSubset<T, TestimonialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonials.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialsWithIdOnly = await prisma.testimonials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestimonialsFindManyArgs>(args?: SelectSubset<T, TestimonialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testimonials.
     * @param {TestimonialsCreateArgs} args - Arguments to create a Testimonials.
     * @example
     * // Create one Testimonials
     * const Testimonials = await prisma.testimonials.create({
     *   data: {
     *     // ... data to create a Testimonials
     *   }
     * })
     * 
     */
    create<T extends TestimonialsCreateArgs>(args: SelectSubset<T, TestimonialsCreateArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testimonials.
     * @param {TestimonialsCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonials = await prisma.testimonials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestimonialsCreateManyArgs>(args?: SelectSubset<T, TestimonialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testimonials and returns the data saved in the database.
     * @param {TestimonialsCreateManyAndReturnArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonials = await prisma.testimonials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testimonials and only return the `id`
     * const testimonialsWithIdOnly = await prisma.testimonials.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestimonialsCreateManyAndReturnArgs>(args?: SelectSubset<T, TestimonialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testimonials.
     * @param {TestimonialsDeleteArgs} args - Arguments to delete one Testimonials.
     * @example
     * // Delete one Testimonials
     * const Testimonials = await prisma.testimonials.delete({
     *   where: {
     *     // ... filter to delete one Testimonials
     *   }
     * })
     * 
     */
    delete<T extends TestimonialsDeleteArgs>(args: SelectSubset<T, TestimonialsDeleteArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testimonials.
     * @param {TestimonialsUpdateArgs} args - Arguments to update one Testimonials.
     * @example
     * // Update one Testimonials
     * const testimonials = await prisma.testimonials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestimonialsUpdateArgs>(args: SelectSubset<T, TestimonialsUpdateArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialsDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestimonialsDeleteManyArgs>(args?: SelectSubset<T, TestimonialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonials = await prisma.testimonials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestimonialsUpdateManyArgs>(args: SelectSubset<T, TestimonialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials and returns the data updated in the database.
     * @param {TestimonialsUpdateManyAndReturnArgs} args - Arguments to update many Testimonials.
     * @example
     * // Update many Testimonials
     * const testimonials = await prisma.testimonials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testimonials and only return the `id`
     * const testimonialsWithIdOnly = await prisma.testimonials.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestimonialsUpdateManyAndReturnArgs>(args: SelectSubset<T, TestimonialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testimonials.
     * @param {TestimonialsUpsertArgs} args - Arguments to update or create a Testimonials.
     * @example
     * // Update or create a Testimonials
     * const testimonials = await prisma.testimonials.upsert({
     *   create: {
     *     // ... data to create a Testimonials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonials we want to update
     *   }
     * })
     */
    upsert<T extends TestimonialsUpsertArgs>(args: SelectSubset<T, TestimonialsUpsertArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonials.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialsCountArgs>(
      args?: Subset<T, TestimonialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestimonialsAggregateArgs>(args: Subset<T, TestimonialsAggregateArgs>): Prisma.PrismaPromise<GetTestimonialsAggregateType<T>>

    /**
     * Group by Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestimonialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialsGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestimonialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testimonials model
   */
  readonly fields: TestimonialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestimonialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Testimonials model
   */
  interface TestimonialsFieldRefs {
    readonly id: FieldRef<"Testimonials", 'Int'>
    readonly content: FieldRef<"Testimonials", 'String'>
    readonly rating: FieldRef<"Testimonials", 'Int'>
    readonly createdAt: FieldRef<"Testimonials", 'DateTime'>
    readonly updatedAt: FieldRef<"Testimonials", 'DateTime'>
    readonly userId: FieldRef<"Testimonials", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Testimonials findUnique
   */
  export type TestimonialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsInclude<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials findUniqueOrThrow
   */
  export type TestimonialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsInclude<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials findFirst
   */
  export type TestimonialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsInclude<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Testimonials findFirstOrThrow
   */
  export type TestimonialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsInclude<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Testimonials findMany
   */
  export type TestimonialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsInclude<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Testimonials create
   */
  export type TestimonialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsInclude<ExtArgs> | null
    /**
     * The data needed to create a Testimonials.
     */
    data: XOR<TestimonialsCreateInput, TestimonialsUncheckedCreateInput>
  }

  /**
   * Testimonials createMany
   */
  export type TestimonialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialsCreateManyInput | TestimonialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonials createManyAndReturn
   */
  export type TestimonialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialsCreateManyInput | TestimonialsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Testimonials update
   */
  export type TestimonialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsInclude<ExtArgs> | null
    /**
     * The data needed to update a Testimonials.
     */
    data: XOR<TestimonialsUpdateInput, TestimonialsUncheckedUpdateInput>
    /**
     * Choose, which Testimonials to update.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials updateMany
   */
  export type TestimonialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialsUpdateManyMutationInput, TestimonialsUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialsWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonials updateManyAndReturn
   */
  export type TestimonialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialsUpdateManyMutationInput, TestimonialsUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialsWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Testimonials upsert
   */
  export type TestimonialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsInclude<ExtArgs> | null
    /**
     * The filter to search for the Testimonials to update in case it exists.
     */
    where: TestimonialsWhereUniqueInput
    /**
     * In case the Testimonials found by the `where` argument doesn't exist, create a new Testimonials with this data.
     */
    create: XOR<TestimonialsCreateInput, TestimonialsUncheckedCreateInput>
    /**
     * In case the Testimonials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialsUpdateInput, TestimonialsUncheckedUpdateInput>
  }

  /**
   * Testimonials delete
   */
  export type TestimonialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsInclude<ExtArgs> | null
    /**
     * Filter which Testimonials to delete.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials deleteMany
   */
  export type TestimonialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialsWhereInput
    /**
     * Limit how many Testimonials to delete.
     */
    limit?: number
  }

  /**
   * Testimonials without action
   */
  export type TestimonialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialsInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    status: number | null
    orderId: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    status: number | null
    orderId: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    amount: string | null
    method: string | null
    code: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: number | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    amount: string | null
    method: string | null
    code: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: number | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    amount: number
    method: number
    code: number
    status: number
    createdAt: number
    updatedAt: number
    orderId: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    status?: true
    orderId?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    status?: true
    orderId?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    code?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    code?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    code?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    amount: string
    method: string
    code: string
    status: number
    createdAt: Date
    updatedAt: Date
    orderId: number
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    method?: boolean
    code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    paymentConfirmations?: boolean | Payments$paymentConfirmationsArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    method?: boolean
    code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    method?: boolean
    code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectScalar = {
    id?: boolean
    amount?: boolean
    method?: boolean
    code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "method" | "code" | "status" | "createdAt" | "updatedAt" | "orderId", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentConfirmations?: boolean | Payments$paymentConfirmationsArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      paymentConfirmations: Prisma.$PaymentConfirmationsPayload<ExtArgs> | null
      order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: string
      method: string
      code: string
      status: number
      createdAt: Date
      updatedAt: Date
      orderId: number
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentConfirmations<T extends Payments$paymentConfirmationsArgs<ExtArgs> = {}>(args?: Subset<T, Payments$paymentConfirmationsArgs<ExtArgs>>): Prisma__PaymentConfirmationsClient<$Result.GetResult<Prisma.$PaymentConfirmationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'Int'>
    readonly amount: FieldRef<"Payments", 'String'>
    readonly method: FieldRef<"Payments", 'String'>
    readonly code: FieldRef<"Payments", 'String'>
    readonly status: FieldRef<"Payments", 'Int'>
    readonly createdAt: FieldRef<"Payments", 'DateTime'>
    readonly updatedAt: FieldRef<"Payments", 'DateTime'>
    readonly orderId: FieldRef<"Payments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments createManyAndReturn
   */
  export type PaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments updateManyAndReturn
   */
  export type PaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments.paymentConfirmations
   */
  export type Payments$paymentConfirmationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsInclude<ExtArgs> | null
    where?: PaymentConfirmationsWhereInput
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model PaymentConfirmations
   */

  export type AggregatePaymentConfirmations = {
    _count: PaymentConfirmationsCountAggregateOutputType | null
    _avg: PaymentConfirmationsAvgAggregateOutputType | null
    _sum: PaymentConfirmationsSumAggregateOutputType | null
    _min: PaymentConfirmationsMinAggregateOutputType | null
    _max: PaymentConfirmationsMaxAggregateOutputType | null
  }

  export type PaymentConfirmationsAvgAggregateOutputType = {
    id: number | null
    status: number | null
    paymentId: number | null
  }

  export type PaymentConfirmationsSumAggregateOutputType = {
    id: number | null
    status: number | null
    paymentId: number | null
  }

  export type PaymentConfirmationsMinAggregateOutputType = {
    id: number | null
    bankName: string | null
    bankAccountName: string | null
    bankAccountNumber: string | null
    code: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentId: number | null
  }

  export type PaymentConfirmationsMaxAggregateOutputType = {
    id: number | null
    bankName: string | null
    bankAccountName: string | null
    bankAccountNumber: string | null
    code: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentId: number | null
  }

  export type PaymentConfirmationsCountAggregateOutputType = {
    id: number
    bankName: number
    bankAccountName: number
    bankAccountNumber: number
    code: number
    status: number
    createdAt: number
    updatedAt: number
    paymentId: number
    _all: number
  }


  export type PaymentConfirmationsAvgAggregateInputType = {
    id?: true
    status?: true
    paymentId?: true
  }

  export type PaymentConfirmationsSumAggregateInputType = {
    id?: true
    status?: true
    paymentId?: true
  }

  export type PaymentConfirmationsMinAggregateInputType = {
    id?: true
    bankName?: true
    bankAccountName?: true
    bankAccountNumber?: true
    code?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
  }

  export type PaymentConfirmationsMaxAggregateInputType = {
    id?: true
    bankName?: true
    bankAccountName?: true
    bankAccountNumber?: true
    code?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
  }

  export type PaymentConfirmationsCountAggregateInputType = {
    id?: true
    bankName?: true
    bankAccountName?: true
    bankAccountNumber?: true
    code?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
    _all?: true
  }

  export type PaymentConfirmationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentConfirmations to aggregate.
     */
    where?: PaymentConfirmationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentConfirmations to fetch.
     */
    orderBy?: PaymentConfirmationsOrderByWithRelationInput | PaymentConfirmationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentConfirmationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentConfirmations
    **/
    _count?: true | PaymentConfirmationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentConfirmationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentConfirmationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentConfirmationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentConfirmationsMaxAggregateInputType
  }

  export type GetPaymentConfirmationsAggregateType<T extends PaymentConfirmationsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentConfirmations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentConfirmations[P]>
      : GetScalarType<T[P], AggregatePaymentConfirmations[P]>
  }




  export type PaymentConfirmationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentConfirmationsWhereInput
    orderBy?: PaymentConfirmationsOrderByWithAggregationInput | PaymentConfirmationsOrderByWithAggregationInput[]
    by: PaymentConfirmationsScalarFieldEnum[] | PaymentConfirmationsScalarFieldEnum
    having?: PaymentConfirmationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentConfirmationsCountAggregateInputType | true
    _avg?: PaymentConfirmationsAvgAggregateInputType
    _sum?: PaymentConfirmationsSumAggregateInputType
    _min?: PaymentConfirmationsMinAggregateInputType
    _max?: PaymentConfirmationsMaxAggregateInputType
  }

  export type PaymentConfirmationsGroupByOutputType = {
    id: number
    bankName: string
    bankAccountName: string
    bankAccountNumber: string
    code: string
    status: number
    createdAt: Date
    updatedAt: Date
    paymentId: number
    _count: PaymentConfirmationsCountAggregateOutputType | null
    _avg: PaymentConfirmationsAvgAggregateOutputType | null
    _sum: PaymentConfirmationsSumAggregateOutputType | null
    _min: PaymentConfirmationsMinAggregateOutputType | null
    _max: PaymentConfirmationsMaxAggregateOutputType | null
  }

  type GetPaymentConfirmationsGroupByPayload<T extends PaymentConfirmationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentConfirmationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentConfirmationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentConfirmationsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentConfirmationsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentConfirmationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankName?: boolean
    bankAccountName?: boolean
    bankAccountNumber?: boolean
    code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
    payment?: boolean | PaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentConfirmations"]>

  export type PaymentConfirmationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankName?: boolean
    bankAccountName?: boolean
    bankAccountNumber?: boolean
    code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
    payment?: boolean | PaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentConfirmations"]>

  export type PaymentConfirmationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankName?: boolean
    bankAccountName?: boolean
    bankAccountNumber?: boolean
    code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
    payment?: boolean | PaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentConfirmations"]>

  export type PaymentConfirmationsSelectScalar = {
    id?: boolean
    bankName?: boolean
    bankAccountName?: boolean
    bankAccountNumber?: boolean
    code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
  }

  export type PaymentConfirmationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bankName" | "bankAccountName" | "bankAccountNumber" | "code" | "status" | "createdAt" | "updatedAt" | "paymentId", ExtArgs["result"]["paymentConfirmations"]>
  export type PaymentConfirmationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentsDefaultArgs<ExtArgs>
  }
  export type PaymentConfirmationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentsDefaultArgs<ExtArgs>
  }
  export type PaymentConfirmationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentsDefaultArgs<ExtArgs>
  }

  export type $PaymentConfirmationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentConfirmations"
    objects: {
      payment: Prisma.$PaymentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bankName: string
      bankAccountName: string
      bankAccountNumber: string
      code: string
      status: number
      createdAt: Date
      updatedAt: Date
      paymentId: number
    }, ExtArgs["result"]["paymentConfirmations"]>
    composites: {}
  }

  type PaymentConfirmationsGetPayload<S extends boolean | null | undefined | PaymentConfirmationsDefaultArgs> = $Result.GetResult<Prisma.$PaymentConfirmationsPayload, S>

  type PaymentConfirmationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentConfirmationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentConfirmationsCountAggregateInputType | true
    }

  export interface PaymentConfirmationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentConfirmations'], meta: { name: 'PaymentConfirmations' } }
    /**
     * Find zero or one PaymentConfirmations that matches the filter.
     * @param {PaymentConfirmationsFindUniqueArgs} args - Arguments to find a PaymentConfirmations
     * @example
     * // Get one PaymentConfirmations
     * const paymentConfirmations = await prisma.paymentConfirmations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentConfirmationsFindUniqueArgs>(args: SelectSubset<T, PaymentConfirmationsFindUniqueArgs<ExtArgs>>): Prisma__PaymentConfirmationsClient<$Result.GetResult<Prisma.$PaymentConfirmationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentConfirmations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentConfirmationsFindUniqueOrThrowArgs} args - Arguments to find a PaymentConfirmations
     * @example
     * // Get one PaymentConfirmations
     * const paymentConfirmations = await prisma.paymentConfirmations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentConfirmationsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentConfirmationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentConfirmationsClient<$Result.GetResult<Prisma.$PaymentConfirmationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentConfirmations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConfirmationsFindFirstArgs} args - Arguments to find a PaymentConfirmations
     * @example
     * // Get one PaymentConfirmations
     * const paymentConfirmations = await prisma.paymentConfirmations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentConfirmationsFindFirstArgs>(args?: SelectSubset<T, PaymentConfirmationsFindFirstArgs<ExtArgs>>): Prisma__PaymentConfirmationsClient<$Result.GetResult<Prisma.$PaymentConfirmationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentConfirmations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConfirmationsFindFirstOrThrowArgs} args - Arguments to find a PaymentConfirmations
     * @example
     * // Get one PaymentConfirmations
     * const paymentConfirmations = await prisma.paymentConfirmations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentConfirmationsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentConfirmationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentConfirmationsClient<$Result.GetResult<Prisma.$PaymentConfirmationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentConfirmations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConfirmationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentConfirmations
     * const paymentConfirmations = await prisma.paymentConfirmations.findMany()
     * 
     * // Get first 10 PaymentConfirmations
     * const paymentConfirmations = await prisma.paymentConfirmations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentConfirmationsWithIdOnly = await prisma.paymentConfirmations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentConfirmationsFindManyArgs>(args?: SelectSubset<T, PaymentConfirmationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentConfirmationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentConfirmations.
     * @param {PaymentConfirmationsCreateArgs} args - Arguments to create a PaymentConfirmations.
     * @example
     * // Create one PaymentConfirmations
     * const PaymentConfirmations = await prisma.paymentConfirmations.create({
     *   data: {
     *     // ... data to create a PaymentConfirmations
     *   }
     * })
     * 
     */
    create<T extends PaymentConfirmationsCreateArgs>(args: SelectSubset<T, PaymentConfirmationsCreateArgs<ExtArgs>>): Prisma__PaymentConfirmationsClient<$Result.GetResult<Prisma.$PaymentConfirmationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentConfirmations.
     * @param {PaymentConfirmationsCreateManyArgs} args - Arguments to create many PaymentConfirmations.
     * @example
     * // Create many PaymentConfirmations
     * const paymentConfirmations = await prisma.paymentConfirmations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentConfirmationsCreateManyArgs>(args?: SelectSubset<T, PaymentConfirmationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentConfirmations and returns the data saved in the database.
     * @param {PaymentConfirmationsCreateManyAndReturnArgs} args - Arguments to create many PaymentConfirmations.
     * @example
     * // Create many PaymentConfirmations
     * const paymentConfirmations = await prisma.paymentConfirmations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentConfirmations and only return the `id`
     * const paymentConfirmationsWithIdOnly = await prisma.paymentConfirmations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentConfirmationsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentConfirmationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentConfirmationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentConfirmations.
     * @param {PaymentConfirmationsDeleteArgs} args - Arguments to delete one PaymentConfirmations.
     * @example
     * // Delete one PaymentConfirmations
     * const PaymentConfirmations = await prisma.paymentConfirmations.delete({
     *   where: {
     *     // ... filter to delete one PaymentConfirmations
     *   }
     * })
     * 
     */
    delete<T extends PaymentConfirmationsDeleteArgs>(args: SelectSubset<T, PaymentConfirmationsDeleteArgs<ExtArgs>>): Prisma__PaymentConfirmationsClient<$Result.GetResult<Prisma.$PaymentConfirmationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentConfirmations.
     * @param {PaymentConfirmationsUpdateArgs} args - Arguments to update one PaymentConfirmations.
     * @example
     * // Update one PaymentConfirmations
     * const paymentConfirmations = await prisma.paymentConfirmations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentConfirmationsUpdateArgs>(args: SelectSubset<T, PaymentConfirmationsUpdateArgs<ExtArgs>>): Prisma__PaymentConfirmationsClient<$Result.GetResult<Prisma.$PaymentConfirmationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentConfirmations.
     * @param {PaymentConfirmationsDeleteManyArgs} args - Arguments to filter PaymentConfirmations to delete.
     * @example
     * // Delete a few PaymentConfirmations
     * const { count } = await prisma.paymentConfirmations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentConfirmationsDeleteManyArgs>(args?: SelectSubset<T, PaymentConfirmationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConfirmationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentConfirmations
     * const paymentConfirmations = await prisma.paymentConfirmations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentConfirmationsUpdateManyArgs>(args: SelectSubset<T, PaymentConfirmationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentConfirmations and returns the data updated in the database.
     * @param {PaymentConfirmationsUpdateManyAndReturnArgs} args - Arguments to update many PaymentConfirmations.
     * @example
     * // Update many PaymentConfirmations
     * const paymentConfirmations = await prisma.paymentConfirmations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentConfirmations and only return the `id`
     * const paymentConfirmationsWithIdOnly = await prisma.paymentConfirmations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentConfirmationsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentConfirmationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentConfirmationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentConfirmations.
     * @param {PaymentConfirmationsUpsertArgs} args - Arguments to update or create a PaymentConfirmations.
     * @example
     * // Update or create a PaymentConfirmations
     * const paymentConfirmations = await prisma.paymentConfirmations.upsert({
     *   create: {
     *     // ... data to create a PaymentConfirmations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentConfirmations we want to update
     *   }
     * })
     */
    upsert<T extends PaymentConfirmationsUpsertArgs>(args: SelectSubset<T, PaymentConfirmationsUpsertArgs<ExtArgs>>): Prisma__PaymentConfirmationsClient<$Result.GetResult<Prisma.$PaymentConfirmationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConfirmationsCountArgs} args - Arguments to filter PaymentConfirmations to count.
     * @example
     * // Count the number of PaymentConfirmations
     * const count = await prisma.paymentConfirmations.count({
     *   where: {
     *     // ... the filter for the PaymentConfirmations we want to count
     *   }
     * })
    **/
    count<T extends PaymentConfirmationsCountArgs>(
      args?: Subset<T, PaymentConfirmationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentConfirmationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConfirmationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentConfirmationsAggregateArgs>(args: Subset<T, PaymentConfirmationsAggregateArgs>): Prisma.PrismaPromise<GetPaymentConfirmationsAggregateType<T>>

    /**
     * Group by PaymentConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConfirmationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentConfirmationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentConfirmationsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentConfirmationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentConfirmationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentConfirmationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentConfirmations model
   */
  readonly fields: PaymentConfirmationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentConfirmations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentConfirmationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentsDefaultArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentConfirmations model
   */
  interface PaymentConfirmationsFieldRefs {
    readonly id: FieldRef<"PaymentConfirmations", 'Int'>
    readonly bankName: FieldRef<"PaymentConfirmations", 'String'>
    readonly bankAccountName: FieldRef<"PaymentConfirmations", 'String'>
    readonly bankAccountNumber: FieldRef<"PaymentConfirmations", 'String'>
    readonly code: FieldRef<"PaymentConfirmations", 'String'>
    readonly status: FieldRef<"PaymentConfirmations", 'Int'>
    readonly createdAt: FieldRef<"PaymentConfirmations", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentConfirmations", 'DateTime'>
    readonly paymentId: FieldRef<"PaymentConfirmations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PaymentConfirmations findUnique
   */
  export type PaymentConfirmationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentConfirmations to fetch.
     */
    where: PaymentConfirmationsWhereUniqueInput
  }

  /**
   * PaymentConfirmations findUniqueOrThrow
   */
  export type PaymentConfirmationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentConfirmations to fetch.
     */
    where: PaymentConfirmationsWhereUniqueInput
  }

  /**
   * PaymentConfirmations findFirst
   */
  export type PaymentConfirmationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentConfirmations to fetch.
     */
    where?: PaymentConfirmationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentConfirmations to fetch.
     */
    orderBy?: PaymentConfirmationsOrderByWithRelationInput | PaymentConfirmationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentConfirmations.
     */
    cursor?: PaymentConfirmationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentConfirmations.
     */
    distinct?: PaymentConfirmationsScalarFieldEnum | PaymentConfirmationsScalarFieldEnum[]
  }

  /**
   * PaymentConfirmations findFirstOrThrow
   */
  export type PaymentConfirmationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentConfirmations to fetch.
     */
    where?: PaymentConfirmationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentConfirmations to fetch.
     */
    orderBy?: PaymentConfirmationsOrderByWithRelationInput | PaymentConfirmationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentConfirmations.
     */
    cursor?: PaymentConfirmationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentConfirmations.
     */
    distinct?: PaymentConfirmationsScalarFieldEnum | PaymentConfirmationsScalarFieldEnum[]
  }

  /**
   * PaymentConfirmations findMany
   */
  export type PaymentConfirmationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentConfirmations to fetch.
     */
    where?: PaymentConfirmationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentConfirmations to fetch.
     */
    orderBy?: PaymentConfirmationsOrderByWithRelationInput | PaymentConfirmationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentConfirmations.
     */
    cursor?: PaymentConfirmationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentConfirmations.
     */
    skip?: number
    distinct?: PaymentConfirmationsScalarFieldEnum | PaymentConfirmationsScalarFieldEnum[]
  }

  /**
   * PaymentConfirmations create
   */
  export type PaymentConfirmationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentConfirmations.
     */
    data: XOR<PaymentConfirmationsCreateInput, PaymentConfirmationsUncheckedCreateInput>
  }

  /**
   * PaymentConfirmations createMany
   */
  export type PaymentConfirmationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentConfirmations.
     */
    data: PaymentConfirmationsCreateManyInput | PaymentConfirmationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentConfirmations createManyAndReturn
   */
  export type PaymentConfirmationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentConfirmations.
     */
    data: PaymentConfirmationsCreateManyInput | PaymentConfirmationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentConfirmations update
   */
  export type PaymentConfirmationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentConfirmations.
     */
    data: XOR<PaymentConfirmationsUpdateInput, PaymentConfirmationsUncheckedUpdateInput>
    /**
     * Choose, which PaymentConfirmations to update.
     */
    where: PaymentConfirmationsWhereUniqueInput
  }

  /**
   * PaymentConfirmations updateMany
   */
  export type PaymentConfirmationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentConfirmations.
     */
    data: XOR<PaymentConfirmationsUpdateManyMutationInput, PaymentConfirmationsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentConfirmations to update
     */
    where?: PaymentConfirmationsWhereInput
    /**
     * Limit how many PaymentConfirmations to update.
     */
    limit?: number
  }

  /**
   * PaymentConfirmations updateManyAndReturn
   */
  export type PaymentConfirmationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * The data used to update PaymentConfirmations.
     */
    data: XOR<PaymentConfirmationsUpdateManyMutationInput, PaymentConfirmationsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentConfirmations to update
     */
    where?: PaymentConfirmationsWhereInput
    /**
     * Limit how many PaymentConfirmations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentConfirmations upsert
   */
  export type PaymentConfirmationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentConfirmations to update in case it exists.
     */
    where: PaymentConfirmationsWhereUniqueInput
    /**
     * In case the PaymentConfirmations found by the `where` argument doesn't exist, create a new PaymentConfirmations with this data.
     */
    create: XOR<PaymentConfirmationsCreateInput, PaymentConfirmationsUncheckedCreateInput>
    /**
     * In case the PaymentConfirmations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentConfirmationsUpdateInput, PaymentConfirmationsUncheckedUpdateInput>
  }

  /**
   * PaymentConfirmations delete
   */
  export type PaymentConfirmationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsInclude<ExtArgs> | null
    /**
     * Filter which PaymentConfirmations to delete.
     */
    where: PaymentConfirmationsWhereUniqueInput
  }

  /**
   * PaymentConfirmations deleteMany
   */
  export type PaymentConfirmationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentConfirmations to delete
     */
    where?: PaymentConfirmationsWhereInput
    /**
     * Limit how many PaymentConfirmations to delete.
     */
    limit?: number
  }

  /**
   * PaymentConfirmations without action
   */
  export type PaymentConfirmationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConfirmations
     */
    select?: PaymentConfirmationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConfirmations
     */
    omit?: PaymentConfirmationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConfirmationsInclude<ExtArgs> | null
  }


  /**
   * Model AuditLogs
   */

  export type AggregateAuditLogs = {
    _count: AuditLogsCountAggregateOutputType | null
    _avg: AuditLogsAvgAggregateOutputType | null
    _sum: AuditLogsSumAggregateOutputType | null
    _min: AuditLogsMinAggregateOutputType | null
    _max: AuditLogsMaxAggregateOutputType | null
  }

  export type AuditLogsAvgAggregateOutputType = {
    id: number | null
  }

  export type AuditLogsSumAggregateOutputType = {
    id: number | null
  }

  export type AuditLogsMinAggregateOutputType = {
    id: number | null
    action: string | null
    details: string | null
    actor: string | null
    target: string | null
    ipAddress: string | null
    uaserAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogsMaxAggregateOutputType = {
    id: number | null
    action: string | null
    details: string | null
    actor: string | null
    target: string | null
    ipAddress: string | null
    uaserAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogsCountAggregateOutputType = {
    id: number
    action: number
    details: number
    actor: number
    target: number
    ipAddress: number
    uaserAgent: number
    createdAt: number
    _all: number
  }


  export type AuditLogsAvgAggregateInputType = {
    id?: true
  }

  export type AuditLogsSumAggregateInputType = {
    id?: true
  }

  export type AuditLogsMinAggregateInputType = {
    id?: true
    action?: true
    details?: true
    actor?: true
    target?: true
    ipAddress?: true
    uaserAgent?: true
    createdAt?: true
  }

  export type AuditLogsMaxAggregateInputType = {
    id?: true
    action?: true
    details?: true
    actor?: true
    target?: true
    ipAddress?: true
    uaserAgent?: true
    createdAt?: true
  }

  export type AuditLogsCountAggregateInputType = {
    id?: true
    action?: true
    details?: true
    actor?: true
    target?: true
    ipAddress?: true
    uaserAgent?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to aggregate.
     */
    where?: AuditLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogsOrderByWithRelationInput | AuditLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogsMaxAggregateInputType
  }

  export type GetAuditLogsAggregateType<T extends AuditLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLogs[P]>
      : GetScalarType<T[P], AggregateAuditLogs[P]>
  }




  export type AuditLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogsWhereInput
    orderBy?: AuditLogsOrderByWithAggregationInput | AuditLogsOrderByWithAggregationInput[]
    by: AuditLogsScalarFieldEnum[] | AuditLogsScalarFieldEnum
    having?: AuditLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogsCountAggregateInputType | true
    _avg?: AuditLogsAvgAggregateInputType
    _sum?: AuditLogsSumAggregateInputType
    _min?: AuditLogsMinAggregateInputType
    _max?: AuditLogsMaxAggregateInputType
  }

  export type AuditLogsGroupByOutputType = {
    id: number
    action: string
    details: string | null
    actor: string | null
    target: string | null
    ipAddress: string | null
    uaserAgent: string | null
    createdAt: Date
    _count: AuditLogsCountAggregateOutputType | null
    _avg: AuditLogsAvgAggregateOutputType | null
    _sum: AuditLogsSumAggregateOutputType | null
    _min: AuditLogsMinAggregateOutputType | null
    _max: AuditLogsMaxAggregateOutputType | null
  }

  type GetAuditLogsGroupByPayload<T extends AuditLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogsGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogsGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    actor?: boolean
    target?: boolean
    ipAddress?: boolean
    uaserAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLogs"]>

  export type AuditLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    actor?: boolean
    target?: boolean
    ipAddress?: boolean
    uaserAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLogs"]>

  export type AuditLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    actor?: boolean
    target?: boolean
    ipAddress?: boolean
    uaserAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLogs"]>

  export type AuditLogsSelectScalar = {
    id?: boolean
    action?: boolean
    details?: boolean
    actor?: boolean
    target?: boolean
    ipAddress?: boolean
    uaserAgent?: boolean
    createdAt?: boolean
  }

  export type AuditLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "details" | "actor" | "target" | "ipAddress" | "uaserAgent" | "createdAt", ExtArgs["result"]["auditLogs"]>

  export type $AuditLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLogs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      details: string | null
      actor: string | null
      target: string | null
      ipAddress: string | null
      uaserAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLogs"]>
    composites: {}
  }

  type AuditLogsGetPayload<S extends boolean | null | undefined | AuditLogsDefaultArgs> = $Result.GetResult<Prisma.$AuditLogsPayload, S>

  type AuditLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogsCountAggregateInputType | true
    }

  export interface AuditLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLogs'], meta: { name: 'AuditLogs' } }
    /**
     * Find zero or one AuditLogs that matches the filter.
     * @param {AuditLogsFindUniqueArgs} args - Arguments to find a AuditLogs
     * @example
     * // Get one AuditLogs
     * const auditLogs = await prisma.auditLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogsFindUniqueArgs>(args: SelectSubset<T, AuditLogsFindUniqueArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogsFindUniqueOrThrowArgs} args - Arguments to find a AuditLogs
     * @example
     * // Get one AuditLogs
     * const auditLogs = await prisma.auditLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsFindFirstArgs} args - Arguments to find a AuditLogs
     * @example
     * // Get one AuditLogs
     * const auditLogs = await prisma.auditLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogsFindFirstArgs>(args?: SelectSubset<T, AuditLogsFindFirstArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsFindFirstOrThrowArgs} args - Arguments to find a AuditLogs
     * @example
     * // Get one AuditLogs
     * const auditLogs = await prisma.auditLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLogs.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogsWithIdOnly = await prisma.auditLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogsFindManyArgs>(args?: SelectSubset<T, AuditLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLogs.
     * @param {AuditLogsCreateArgs} args - Arguments to create a AuditLogs.
     * @example
     * // Create one AuditLogs
     * const AuditLogs = await prisma.auditLogs.create({
     *   data: {
     *     // ... data to create a AuditLogs
     *   }
     * })
     * 
     */
    create<T extends AuditLogsCreateArgs>(args: SelectSubset<T, AuditLogsCreateArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogsCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLogs = await prisma.auditLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogsCreateManyArgs>(args?: SelectSubset<T, AuditLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogsCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLogs = await prisma.auditLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogsWithIdOnly = await prisma.auditLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLogs.
     * @param {AuditLogsDeleteArgs} args - Arguments to delete one AuditLogs.
     * @example
     * // Delete one AuditLogs
     * const AuditLogs = await prisma.auditLogs.delete({
     *   where: {
     *     // ... filter to delete one AuditLogs
     *   }
     * })
     * 
     */
    delete<T extends AuditLogsDeleteArgs>(args: SelectSubset<T, AuditLogsDeleteArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLogs.
     * @param {AuditLogsUpdateArgs} args - Arguments to update one AuditLogs.
     * @example
     * // Update one AuditLogs
     * const auditLogs = await prisma.auditLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogsUpdateArgs>(args: SelectSubset<T, AuditLogsUpdateArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogsDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogsDeleteManyArgs>(args?: SelectSubset<T, AuditLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLogs = await prisma.auditLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogsUpdateManyArgs>(args: SelectSubset<T, AuditLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogsUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLogs = await prisma.auditLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogsWithIdOnly = await prisma.auditLogs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLogs.
     * @param {AuditLogsUpsertArgs} args - Arguments to update or create a AuditLogs.
     * @example
     * // Update or create a AuditLogs
     * const auditLogs = await prisma.auditLogs.upsert({
     *   create: {
     *     // ... data to create a AuditLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLogs we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogsUpsertArgs>(args: SelectSubset<T, AuditLogsUpsertArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLogs.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogsCountArgs>(
      args?: Subset<T, AuditLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogsAggregateArgs>(args: Subset<T, AuditLogsAggregateArgs>): Prisma.PrismaPromise<GetAuditLogsAggregateType<T>>

    /**
     * Group by AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogsGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLogs model
   */
  readonly fields: AuditLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLogs model
   */
  interface AuditLogsFieldRefs {
    readonly id: FieldRef<"AuditLogs", 'Int'>
    readonly action: FieldRef<"AuditLogs", 'String'>
    readonly details: FieldRef<"AuditLogs", 'String'>
    readonly actor: FieldRef<"AuditLogs", 'String'>
    readonly target: FieldRef<"AuditLogs", 'String'>
    readonly ipAddress: FieldRef<"AuditLogs", 'String'>
    readonly uaserAgent: FieldRef<"AuditLogs", 'String'>
    readonly createdAt: FieldRef<"AuditLogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLogs findUnique
   */
  export type AuditLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where: AuditLogsWhereUniqueInput
  }

  /**
   * AuditLogs findUniqueOrThrow
   */
  export type AuditLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where: AuditLogsWhereUniqueInput
  }

  /**
   * AuditLogs findFirst
   */
  export type AuditLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogsOrderByWithRelationInput | AuditLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogsScalarFieldEnum | AuditLogsScalarFieldEnum[]
  }

  /**
   * AuditLogs findFirstOrThrow
   */
  export type AuditLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogsOrderByWithRelationInput | AuditLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogsScalarFieldEnum | AuditLogsScalarFieldEnum[]
  }

  /**
   * AuditLogs findMany
   */
  export type AuditLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogsOrderByWithRelationInput | AuditLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogsScalarFieldEnum | AuditLogsScalarFieldEnum[]
  }

  /**
   * AuditLogs create
   */
  export type AuditLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLogs.
     */
    data: XOR<AuditLogsCreateInput, AuditLogsUncheckedCreateInput>
  }

  /**
   * AuditLogs createMany
   */
  export type AuditLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogsCreateManyInput | AuditLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLogs createManyAndReturn
   */
  export type AuditLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogsCreateManyInput | AuditLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLogs update
   */
  export type AuditLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLogs.
     */
    data: XOR<AuditLogsUpdateInput, AuditLogsUncheckedUpdateInput>
    /**
     * Choose, which AuditLogs to update.
     */
    where: AuditLogsWhereUniqueInput
  }

  /**
   * AuditLogs updateMany
   */
  export type AuditLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogsUpdateManyMutationInput, AuditLogsUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogsWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLogs updateManyAndReturn
   */
  export type AuditLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogsUpdateManyMutationInput, AuditLogsUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogsWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLogs upsert
   */
  export type AuditLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLogs to update in case it exists.
     */
    where: AuditLogsWhereUniqueInput
    /**
     * In case the AuditLogs found by the `where` argument doesn't exist, create a new AuditLogs with this data.
     */
    create: XOR<AuditLogsCreateInput, AuditLogsUncheckedCreateInput>
    /**
     * In case the AuditLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogsUpdateInput, AuditLogsUncheckedUpdateInput>
  }

  /**
   * AuditLogs delete
   */
  export type AuditLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Filter which AuditLogs to delete.
     */
    where: AuditLogsWhereUniqueInput
  }

  /**
   * AuditLogs deleteMany
   */
  export type AuditLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogsWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLogs without action
   */
  export type AuditLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
  }


  /**
   * Model attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentAvgAggregateOutputType = {
    id: number | null
    fileSize: number | null
    attachmentAbleId: number | null
  }

  export type AttachmentSumAggregateOutputType = {
    id: number | null
    fileSize: number | null
    attachmentAbleId: number | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    fileType: string | null
    filePath: string | null
    fileSize: number | null
    attachmentAbleId: number | null
    attachmentAbleType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    fileType: string | null
    filePath: string | null
    fileSize: number | null
    attachmentAbleId: number | null
    attachmentAbleType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    fileName: number
    fileType: number
    filePath: number
    fileSize: number
    attachmentAbleId: number
    attachmentAbleType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttachmentAvgAggregateInputType = {
    id?: true
    fileSize?: true
    attachmentAbleId?: true
  }

  export type AttachmentSumAggregateInputType = {
    id?: true
    fileSize?: true
    attachmentAbleId?: true
  }

  export type AttachmentMinAggregateInputType = {
    id?: true
    fileName?: true
    fileType?: true
    filePath?: true
    fileSize?: true
    attachmentAbleId?: true
    attachmentAbleType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileType?: true
    filePath?: true
    fileSize?: true
    attachmentAbleId?: true
    attachmentAbleType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    fileName?: true
    fileType?: true
    filePath?: true
    fileSize?: true
    attachmentAbleId?: true
    attachmentAbleType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attachment to aggregate.
     */
    where?: attachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentOrderByWithRelationInput | attachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type attachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attachmentWhereInput
    orderBy?: attachmentOrderByWithAggregationInput | attachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: attachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _avg?: AttachmentAvgAggregateInputType
    _sum?: AttachmentSumAggregateInputType
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: number
    fileName: string
    fileType: string
    filePath: string
    fileSize: number
    attachmentAbleId: number
    attachmentAbleType: string
    createdAt: Date
    updatedAt: Date
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends attachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type attachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    filePath?: boolean
    fileSize?: boolean
    attachmentAbleId?: boolean
    attachmentAbleType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attachment"]>

  export type attachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    filePath?: boolean
    fileSize?: boolean
    attachmentAbleId?: boolean
    attachmentAbleType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attachment"]>

  export type attachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    filePath?: boolean
    fileSize?: boolean
    attachmentAbleId?: boolean
    attachmentAbleType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attachment"]>

  export type attachmentSelectScalar = {
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    filePath?: boolean
    fileSize?: boolean
    attachmentAbleId?: boolean
    attachmentAbleType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type attachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "fileType" | "filePath" | "fileSize" | "attachmentAbleId" | "attachmentAbleType" | "createdAt" | "updatedAt", ExtArgs["result"]["attachment"]>

  export type $attachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attachment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileName: string
      fileType: string
      filePath: string
      fileSize: number
      attachmentAbleId: number
      attachmentAbleType: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type attachmentGetPayload<S extends boolean | null | undefined | attachmentDefaultArgs> = $Result.GetResult<Prisma.$attachmentPayload, S>

  type attachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface attachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attachment'], meta: { name: 'attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {attachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attachmentFindUniqueArgs>(args: SelectSubset<T, attachmentFindUniqueArgs<ExtArgs>>): Prisma__attachmentClient<$Result.GetResult<Prisma.$attachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, attachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attachmentClient<$Result.GetResult<Prisma.$attachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attachmentFindFirstArgs>(args?: SelectSubset<T, attachmentFindFirstArgs<ExtArgs>>): Prisma__attachmentClient<$Result.GetResult<Prisma.$attachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, attachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__attachmentClient<$Result.GetResult<Prisma.$attachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attachmentFindManyArgs>(args?: SelectSubset<T, attachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {attachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends attachmentCreateArgs>(args: SelectSubset<T, attachmentCreateArgs<ExtArgs>>): Prisma__attachmentClient<$Result.GetResult<Prisma.$attachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {attachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attachmentCreateManyArgs>(args?: SelectSubset<T, attachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {attachmentCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends attachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, attachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachment.
     * @param {attachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends attachmentDeleteArgs>(args: SelectSubset<T, attachmentDeleteArgs<ExtArgs>>): Prisma__attachmentClient<$Result.GetResult<Prisma.$attachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {attachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attachmentUpdateArgs>(args: SelectSubset<T, attachmentUpdateArgs<ExtArgs>>): Prisma__attachmentClient<$Result.GetResult<Prisma.$attachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {attachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attachmentDeleteManyArgs>(args?: SelectSubset<T, attachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attachmentUpdateManyArgs>(args: SelectSubset<T, attachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {attachmentUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends attachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, attachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachment.
     * @param {attachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends attachmentUpsertArgs>(args: SelectSubset<T, attachmentUpsertArgs<ExtArgs>>): Prisma__attachmentClient<$Result.GetResult<Prisma.$attachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends attachmentCountArgs>(
      args?: Subset<T, attachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends attachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attachmentGroupByArgs['orderBy'] }
        : { orderBy?: attachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, attachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attachment model
   */
  readonly fields: attachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the attachment model
   */
  interface attachmentFieldRefs {
    readonly id: FieldRef<"attachment", 'Int'>
    readonly fileName: FieldRef<"attachment", 'String'>
    readonly fileType: FieldRef<"attachment", 'String'>
    readonly filePath: FieldRef<"attachment", 'String'>
    readonly fileSize: FieldRef<"attachment", 'Int'>
    readonly attachmentAbleId: FieldRef<"attachment", 'Int'>
    readonly attachmentAbleType: FieldRef<"attachment", 'String'>
    readonly createdAt: FieldRef<"attachment", 'DateTime'>
    readonly updatedAt: FieldRef<"attachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * attachment findUnique
   */
  export type attachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachment
     */
    select?: attachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachment
     */
    omit?: attachmentOmit<ExtArgs> | null
    /**
     * Filter, which attachment to fetch.
     */
    where: attachmentWhereUniqueInput
  }

  /**
   * attachment findUniqueOrThrow
   */
  export type attachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachment
     */
    select?: attachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachment
     */
    omit?: attachmentOmit<ExtArgs> | null
    /**
     * Filter, which attachment to fetch.
     */
    where: attachmentWhereUniqueInput
  }

  /**
   * attachment findFirst
   */
  export type attachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachment
     */
    select?: attachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachment
     */
    omit?: attachmentOmit<ExtArgs> | null
    /**
     * Filter, which attachment to fetch.
     */
    where?: attachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentOrderByWithRelationInput | attachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attachments.
     */
    cursor?: attachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * attachment findFirstOrThrow
   */
  export type attachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachment
     */
    select?: attachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachment
     */
    omit?: attachmentOmit<ExtArgs> | null
    /**
     * Filter, which attachment to fetch.
     */
    where?: attachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentOrderByWithRelationInput | attachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attachments.
     */
    cursor?: attachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * attachment findMany
   */
  export type attachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachment
     */
    select?: attachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachment
     */
    omit?: attachmentOmit<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentOrderByWithRelationInput | attachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attachments.
     */
    cursor?: attachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * attachment create
   */
  export type attachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachment
     */
    select?: attachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachment
     */
    omit?: attachmentOmit<ExtArgs> | null
    /**
     * The data needed to create a attachment.
     */
    data: XOR<attachmentCreateInput, attachmentUncheckedCreateInput>
  }

  /**
   * attachment createMany
   */
  export type attachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attachments.
     */
    data: attachmentCreateManyInput | attachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attachment createManyAndReturn
   */
  export type attachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachment
     */
    select?: attachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attachment
     */
    omit?: attachmentOmit<ExtArgs> | null
    /**
     * The data used to create many attachments.
     */
    data: attachmentCreateManyInput | attachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attachment update
   */
  export type attachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachment
     */
    select?: attachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachment
     */
    omit?: attachmentOmit<ExtArgs> | null
    /**
     * The data needed to update a attachment.
     */
    data: XOR<attachmentUpdateInput, attachmentUncheckedUpdateInput>
    /**
     * Choose, which attachment to update.
     */
    where: attachmentWhereUniqueInput
  }

  /**
   * attachment updateMany
   */
  export type attachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attachments.
     */
    data: XOR<attachmentUpdateManyMutationInput, attachmentUncheckedUpdateManyInput>
    /**
     * Filter which attachments to update
     */
    where?: attachmentWhereInput
    /**
     * Limit how many attachments to update.
     */
    limit?: number
  }

  /**
   * attachment updateManyAndReturn
   */
  export type attachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachment
     */
    select?: attachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attachment
     */
    omit?: attachmentOmit<ExtArgs> | null
    /**
     * The data used to update attachments.
     */
    data: XOR<attachmentUpdateManyMutationInput, attachmentUncheckedUpdateManyInput>
    /**
     * Filter which attachments to update
     */
    where?: attachmentWhereInput
    /**
     * Limit how many attachments to update.
     */
    limit?: number
  }

  /**
   * attachment upsert
   */
  export type attachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachment
     */
    select?: attachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachment
     */
    omit?: attachmentOmit<ExtArgs> | null
    /**
     * The filter to search for the attachment to update in case it exists.
     */
    where: attachmentWhereUniqueInput
    /**
     * In case the attachment found by the `where` argument doesn't exist, create a new attachment with this data.
     */
    create: XOR<attachmentCreateInput, attachmentUncheckedCreateInput>
    /**
     * In case the attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attachmentUpdateInput, attachmentUncheckedUpdateInput>
  }

  /**
   * attachment delete
   */
  export type attachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachment
     */
    select?: attachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachment
     */
    omit?: attachmentOmit<ExtArgs> | null
    /**
     * Filter which attachment to delete.
     */
    where: attachmentWhereUniqueInput
  }

  /**
   * attachment deleteMany
   */
  export type attachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attachments to delete
     */
    where?: attachmentWhereInput
    /**
     * Limit how many attachments to delete.
     */
    limit?: number
  }

  /**
   * attachment without action
   */
  export type attachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachment
     */
    select?: attachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachment
     */
    omit?: attachmentOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ContactsScalarFieldEnum: {
    id: 'id',
    contact: 'contact',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ContactsScalarFieldEnum = (typeof ContactsScalarFieldEnum)[keyof typeof ContactsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    stock: 'stock',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const LicensesKeyScalarFieldEnum: {
    id: 'id',
    encryptedKey: 'encryptedKey',
    keyHash: 'keyHash',
    activationLimit: 'activationLimit',
    status: 'status',
    soldAt: 'soldAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    productId: 'productId',
    supplierId: 'supplierId'
  };

  export type LicensesKeyScalarFieldEnum = (typeof LicensesKeyScalarFieldEnum)[keyof typeof LicensesKeyScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contact: 'contact',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderItemsScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orderId: 'orderId',
    productId: 'productId'
  };

  export type OrderItemsScalarFieldEnum = (typeof OrderItemsScalarFieldEnum)[keyof typeof OrderItemsScalarFieldEnum]


  export const TestimonialsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type TestimonialsScalarFieldEnum = (typeof TestimonialsScalarFieldEnum)[keyof typeof TestimonialsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    method: 'method',
    code: 'code',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orderId: 'orderId'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const PaymentConfirmationsScalarFieldEnum: {
    id: 'id',
    bankName: 'bankName',
    bankAccountName: 'bankAccountName',
    bankAccountNumber: 'bankAccountNumber',
    code: 'code',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    paymentId: 'paymentId'
  };

  export type PaymentConfirmationsScalarFieldEnum = (typeof PaymentConfirmationsScalarFieldEnum)[keyof typeof PaymentConfirmationsScalarFieldEnum]


  export const AuditLogsScalarFieldEnum: {
    id: 'id',
    action: 'action',
    details: 'details',
    actor: 'actor',
    target: 'target',
    ipAddress: 'ipAddress',
    uaserAgent: 'uaserAgent',
    createdAt: 'createdAt'
  };

  export type AuditLogsScalarFieldEnum = (typeof AuditLogsScalarFieldEnum)[keyof typeof AuditLogsScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileType: 'fileType',
    filePath: 'filePath',
    fileSize: 'fileSize',
    attachmentAbleId: 'attachmentAbleId',
    attachmentAbleType: 'attachmentAbleType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    fullname?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: IntFilter<"Users"> | number
    status?: IntFilter<"Users"> | number
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    contacts?: XOR<ContactsNullableScalarRelationFilter, ContactsWhereInput> | null
    testimonials?: TestimonialsListRelationFilter
    orders?: OrdersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contacts?: ContactsOrderByWithRelationInput
    testimonials?: TestimonialsOrderByRelationAggregateInput
    orders?: OrdersOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullname?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: IntFilter<"Users"> | number
    status?: IntFilter<"Users"> | number
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    contacts?: XOR<ContactsNullableScalarRelationFilter, ContactsWhereInput> | null
    testimonials?: TestimonialsListRelationFilter
    orders?: OrdersListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    fullname?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: IntWithAggregatesFilter<"Users"> | number
    status?: IntWithAggregatesFilter<"Users"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type ContactsWhereInput = {
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    id?: IntFilter<"Contacts"> | number
    contact?: StringFilter<"Contacts"> | string
    description?: StringNullableFilter<"Contacts"> | string | null
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
    userId?: IntFilter<"Contacts"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ContactsOrderByWithRelationInput = {
    id?: SortOrder
    contact?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type ContactsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    contact?: StringFilter<"Contacts"> | string
    description?: StringNullableFilter<"Contacts"> | string | null
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId">

  export type ContactsOrderByWithAggregationInput = {
    id?: SortOrder
    contact?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ContactsCountOrderByAggregateInput
    _avg?: ContactsAvgOrderByAggregateInput
    _max?: ContactsMaxOrderByAggregateInput
    _min?: ContactsMinOrderByAggregateInput
    _sum?: ContactsSumOrderByAggregateInput
  }

  export type ContactsScalarWhereWithAggregatesInput = {
    AND?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    OR?: ContactsScalarWhereWithAggregatesInput[]
    NOT?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contacts"> | number
    contact?: StringWithAggregatesFilter<"Contacts"> | string
    description?: StringNullableWithAggregatesFilter<"Contacts"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
    userId?: IntWithAggregatesFilter<"Contacts"> | number
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    description?: StringNullableFilter<"Categories"> | string | null
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    Products?: ProductsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Products?: ProductsOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    description?: StringNullableFilter<"Categories"> | string | null
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    Products?: ProductsListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    description?: StringNullableWithAggregatesFilter<"Categories"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    price?: StringFilter<"Products"> | string
    stock?: IntFilter<"Products"> | number
    status?: IntFilter<"Products"> | number
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    categoryId?: IntFilter<"Products"> | number
    categories?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    licenses?: LicensesKeyListRelationFilter
    orderItems?: OrderItemsListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    categories?: CategoriesOrderByWithRelationInput
    licenses?: LicensesKeyOrderByRelationAggregateInput
    orderItems?: OrderItemsOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    price?: StringFilter<"Products"> | string
    stock?: IntFilter<"Products"> | number
    status?: IntFilter<"Products"> | number
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    categoryId?: IntFilter<"Products"> | number
    categories?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    licenses?: LicensesKeyListRelationFilter
    orderItems?: OrderItemsListRelationFilter
  }, "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Products"> | number
    name?: StringWithAggregatesFilter<"Products"> | string
    description?: StringNullableWithAggregatesFilter<"Products"> | string | null
    price?: StringWithAggregatesFilter<"Products"> | string
    stock?: IntWithAggregatesFilter<"Products"> | number
    status?: IntWithAggregatesFilter<"Products"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    categoryId?: IntWithAggregatesFilter<"Products"> | number
  }

  export type LicensesKeyWhereInput = {
    AND?: LicensesKeyWhereInput | LicensesKeyWhereInput[]
    OR?: LicensesKeyWhereInput[]
    NOT?: LicensesKeyWhereInput | LicensesKeyWhereInput[]
    id?: IntFilter<"LicensesKey"> | number
    encryptedKey?: StringFilter<"LicensesKey"> | string
    keyHash?: StringFilter<"LicensesKey"> | string
    activationLimit?: IntFilter<"LicensesKey"> | number
    status?: IntFilter<"LicensesKey"> | number
    soldAt?: DateTimeNullableFilter<"LicensesKey"> | Date | string | null
    createdAt?: DateTimeFilter<"LicensesKey"> | Date | string
    updatedAt?: DateTimeFilter<"LicensesKey"> | Date | string
    productId?: IntFilter<"LicensesKey"> | number
    supplierId?: IntNullableFilter<"LicensesKey"> | number | null
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    supplier?: XOR<SupplierNullableScalarRelationFilter, supplierWhereInput> | null
  }

  export type LicensesKeyOrderByWithRelationInput = {
    id?: SortOrder
    encryptedKey?: SortOrder
    keyHash?: SortOrder
    activationLimit?: SortOrder
    status?: SortOrder
    soldAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    product?: ProductsOrderByWithRelationInput
    supplier?: supplierOrderByWithRelationInput
  }

  export type LicensesKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LicensesKeyWhereInput | LicensesKeyWhereInput[]
    OR?: LicensesKeyWhereInput[]
    NOT?: LicensesKeyWhereInput | LicensesKeyWhereInput[]
    encryptedKey?: StringFilter<"LicensesKey"> | string
    keyHash?: StringFilter<"LicensesKey"> | string
    activationLimit?: IntFilter<"LicensesKey"> | number
    status?: IntFilter<"LicensesKey"> | number
    soldAt?: DateTimeNullableFilter<"LicensesKey"> | Date | string | null
    createdAt?: DateTimeFilter<"LicensesKey"> | Date | string
    updatedAt?: DateTimeFilter<"LicensesKey"> | Date | string
    productId?: IntFilter<"LicensesKey"> | number
    supplierId?: IntNullableFilter<"LicensesKey"> | number | null
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    supplier?: XOR<SupplierNullableScalarRelationFilter, supplierWhereInput> | null
  }, "id">

  export type LicensesKeyOrderByWithAggregationInput = {
    id?: SortOrder
    encryptedKey?: SortOrder
    keyHash?: SortOrder
    activationLimit?: SortOrder
    status?: SortOrder
    soldAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    _count?: LicensesKeyCountOrderByAggregateInput
    _avg?: LicensesKeyAvgOrderByAggregateInput
    _max?: LicensesKeyMaxOrderByAggregateInput
    _min?: LicensesKeyMinOrderByAggregateInput
    _sum?: LicensesKeySumOrderByAggregateInput
  }

  export type LicensesKeyScalarWhereWithAggregatesInput = {
    AND?: LicensesKeyScalarWhereWithAggregatesInput | LicensesKeyScalarWhereWithAggregatesInput[]
    OR?: LicensesKeyScalarWhereWithAggregatesInput[]
    NOT?: LicensesKeyScalarWhereWithAggregatesInput | LicensesKeyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LicensesKey"> | number
    encryptedKey?: StringWithAggregatesFilter<"LicensesKey"> | string
    keyHash?: StringWithAggregatesFilter<"LicensesKey"> | string
    activationLimit?: IntWithAggregatesFilter<"LicensesKey"> | number
    status?: IntWithAggregatesFilter<"LicensesKey"> | number
    soldAt?: DateTimeNullableWithAggregatesFilter<"LicensesKey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LicensesKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LicensesKey"> | Date | string
    productId?: IntWithAggregatesFilter<"LicensesKey"> | number
    supplierId?: IntNullableWithAggregatesFilter<"LicensesKey"> | number | null
  }

  export type supplierWhereInput = {
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    id?: IntFilter<"supplier"> | number
    name?: StringFilter<"supplier"> | string
    contact?: StringFilter<"supplier"> | string
    createdAt?: DateTimeFilter<"supplier"> | Date | string
    updatedAt?: DateTimeFilter<"supplier"> | Date | string
    licenses?: LicensesKeyListRelationFilter
  }

  export type supplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    licenses?: LicensesKeyOrderByRelationAggregateInput
  }

  export type supplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    name?: StringFilter<"supplier"> | string
    contact?: StringFilter<"supplier"> | string
    createdAt?: DateTimeFilter<"supplier"> | Date | string
    updatedAt?: DateTimeFilter<"supplier"> | Date | string
    licenses?: LicensesKeyListRelationFilter
  }, "id">

  export type supplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: supplierCountOrderByAggregateInput
    _avg?: supplierAvgOrderByAggregateInput
    _max?: supplierMaxOrderByAggregateInput
    _min?: supplierMinOrderByAggregateInput
    _sum?: supplierSumOrderByAggregateInput
  }

  export type supplierScalarWhereWithAggregatesInput = {
    AND?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    OR?: supplierScalarWhereWithAggregatesInput[]
    NOT?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"supplier"> | number
    name?: StringWithAggregatesFilter<"supplier"> | string
    contact?: StringWithAggregatesFilter<"supplier"> | string
    createdAt?: DateTimeWithAggregatesFilter<"supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"supplier"> | Date | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    amount?: StringFilter<"Orders"> | string
    status?: IntFilter<"Orders"> | number
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    userId?: IntFilter<"Orders"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    orderItems?: OrderItemsListRelationFilter
    payment?: XOR<PaymentsNullableScalarRelationFilter, PaymentsWhereInput> | null
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
    orderItems?: OrderItemsOrderByRelationAggregateInput
    payment?: PaymentsOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_userId?: OrdersIdUserIdCompoundUniqueInput
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    amount?: StringFilter<"Orders"> | string
    status?: IntFilter<"Orders"> | number
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    userId?: IntFilter<"Orders"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    orderItems?: OrderItemsListRelationFilter
    payment?: XOR<PaymentsNullableScalarRelationFilter, PaymentsWhereInput> | null
  }, "id" | "id_userId">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    amount?: StringWithAggregatesFilter<"Orders"> | string
    status?: IntWithAggregatesFilter<"Orders"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    userId?: IntWithAggregatesFilter<"Orders"> | number
  }

  export type OrderItemsWhereInput = {
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[]
    OR?: OrderItemsWhereInput[]
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[]
    id?: IntFilter<"OrderItems"> | number
    quantity?: IntFilter<"OrderItems"> | number
    price?: StringFilter<"OrderItems"> | string
    createdAt?: DateTimeFilter<"OrderItems"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItems"> | Date | string
    orderId?: IntFilter<"OrderItems"> | number
    productId?: IntFilter<"OrderItems"> | number
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type OrderItemsOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    order?: OrdersOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type OrderItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[]
    OR?: OrderItemsWhereInput[]
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[]
    quantity?: IntFilter<"OrderItems"> | number
    price?: StringFilter<"OrderItems"> | string
    createdAt?: DateTimeFilter<"OrderItems"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItems"> | Date | string
    orderId?: IntFilter<"OrderItems"> | number
    productId?: IntFilter<"OrderItems"> | number
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "id">

  export type OrderItemsOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    _count?: OrderItemsCountOrderByAggregateInput
    _avg?: OrderItemsAvgOrderByAggregateInput
    _max?: OrderItemsMaxOrderByAggregateInput
    _min?: OrderItemsMinOrderByAggregateInput
    _sum?: OrderItemsSumOrderByAggregateInput
  }

  export type OrderItemsScalarWhereWithAggregatesInput = {
    AND?: OrderItemsScalarWhereWithAggregatesInput | OrderItemsScalarWhereWithAggregatesInput[]
    OR?: OrderItemsScalarWhereWithAggregatesInput[]
    NOT?: OrderItemsScalarWhereWithAggregatesInput | OrderItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItems"> | number
    quantity?: IntWithAggregatesFilter<"OrderItems"> | number
    price?: StringWithAggregatesFilter<"OrderItems"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderItems"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItems"> | Date | string
    orderId?: IntWithAggregatesFilter<"OrderItems"> | number
    productId?: IntWithAggregatesFilter<"OrderItems"> | number
  }

  export type TestimonialsWhereInput = {
    AND?: TestimonialsWhereInput | TestimonialsWhereInput[]
    OR?: TestimonialsWhereInput[]
    NOT?: TestimonialsWhereInput | TestimonialsWhereInput[]
    id?: IntFilter<"Testimonials"> | number
    content?: StringFilter<"Testimonials"> | string
    rating?: IntFilter<"Testimonials"> | number
    createdAt?: DateTimeFilter<"Testimonials"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonials"> | Date | string
    userId?: IntFilter<"Testimonials"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type TestimonialsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type TestimonialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestimonialsWhereInput | TestimonialsWhereInput[]
    OR?: TestimonialsWhereInput[]
    NOT?: TestimonialsWhereInput | TestimonialsWhereInput[]
    content?: StringFilter<"Testimonials"> | string
    rating?: IntFilter<"Testimonials"> | number
    createdAt?: DateTimeFilter<"Testimonials"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonials"> | Date | string
    userId?: IntFilter<"Testimonials"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type TestimonialsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: TestimonialsCountOrderByAggregateInput
    _avg?: TestimonialsAvgOrderByAggregateInput
    _max?: TestimonialsMaxOrderByAggregateInput
    _min?: TestimonialsMinOrderByAggregateInput
    _sum?: TestimonialsSumOrderByAggregateInput
  }

  export type TestimonialsScalarWhereWithAggregatesInput = {
    AND?: TestimonialsScalarWhereWithAggregatesInput | TestimonialsScalarWhereWithAggregatesInput[]
    OR?: TestimonialsScalarWhereWithAggregatesInput[]
    NOT?: TestimonialsScalarWhereWithAggregatesInput | TestimonialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Testimonials"> | number
    content?: StringWithAggregatesFilter<"Testimonials"> | string
    rating?: IntWithAggregatesFilter<"Testimonials"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Testimonials"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Testimonials"> | Date | string
    userId?: IntWithAggregatesFilter<"Testimonials"> | number
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: IntFilter<"Payments"> | number
    amount?: StringFilter<"Payments"> | string
    method?: StringFilter<"Payments"> | string
    code?: StringFilter<"Payments"> | string
    status?: IntFilter<"Payments"> | number
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    updatedAt?: DateTimeFilter<"Payments"> | Date | string
    orderId?: IntFilter<"Payments"> | number
    paymentConfirmations?: XOR<PaymentConfirmationsNullableScalarRelationFilter, PaymentConfirmationsWhereInput> | null
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    paymentConfirmations?: PaymentConfirmationsOrderByWithRelationInput
    order?: OrdersOrderByWithRelationInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderId?: number
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    amount?: StringFilter<"Payments"> | string
    method?: StringFilter<"Payments"> | string
    code?: StringFilter<"Payments"> | string
    status?: IntFilter<"Payments"> | number
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    updatedAt?: DateTimeFilter<"Payments"> | Date | string
    paymentConfirmations?: XOR<PaymentConfirmationsNullableScalarRelationFilter, PaymentConfirmationsWhereInput> | null
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }, "id" | "orderId">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payments"> | number
    amount?: StringWithAggregatesFilter<"Payments"> | string
    method?: StringWithAggregatesFilter<"Payments"> | string
    code?: StringWithAggregatesFilter<"Payments"> | string
    status?: IntWithAggregatesFilter<"Payments"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    orderId?: IntWithAggregatesFilter<"Payments"> | number
  }

  export type PaymentConfirmationsWhereInput = {
    AND?: PaymentConfirmationsWhereInput | PaymentConfirmationsWhereInput[]
    OR?: PaymentConfirmationsWhereInput[]
    NOT?: PaymentConfirmationsWhereInput | PaymentConfirmationsWhereInput[]
    id?: IntFilter<"PaymentConfirmations"> | number
    bankName?: StringFilter<"PaymentConfirmations"> | string
    bankAccountName?: StringFilter<"PaymentConfirmations"> | string
    bankAccountNumber?: StringFilter<"PaymentConfirmations"> | string
    code?: StringFilter<"PaymentConfirmations"> | string
    status?: IntFilter<"PaymentConfirmations"> | number
    createdAt?: DateTimeFilter<"PaymentConfirmations"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentConfirmations"> | Date | string
    paymentId?: IntFilter<"PaymentConfirmations"> | number
    payment?: XOR<PaymentsScalarRelationFilter, PaymentsWhereInput>
  }

  export type PaymentConfirmationsOrderByWithRelationInput = {
    id?: SortOrder
    bankName?: SortOrder
    bankAccountName?: SortOrder
    bankAccountNumber?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
    payment?: PaymentsOrderByWithRelationInput
  }

  export type PaymentConfirmationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    paymentId?: number
    AND?: PaymentConfirmationsWhereInput | PaymentConfirmationsWhereInput[]
    OR?: PaymentConfirmationsWhereInput[]
    NOT?: PaymentConfirmationsWhereInput | PaymentConfirmationsWhereInput[]
    bankName?: StringFilter<"PaymentConfirmations"> | string
    bankAccountName?: StringFilter<"PaymentConfirmations"> | string
    bankAccountNumber?: StringFilter<"PaymentConfirmations"> | string
    code?: StringFilter<"PaymentConfirmations"> | string
    status?: IntFilter<"PaymentConfirmations"> | number
    createdAt?: DateTimeFilter<"PaymentConfirmations"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentConfirmations"> | Date | string
    payment?: XOR<PaymentsScalarRelationFilter, PaymentsWhereInput>
  }, "id" | "paymentId">

  export type PaymentConfirmationsOrderByWithAggregationInput = {
    id?: SortOrder
    bankName?: SortOrder
    bankAccountName?: SortOrder
    bankAccountNumber?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
    _count?: PaymentConfirmationsCountOrderByAggregateInput
    _avg?: PaymentConfirmationsAvgOrderByAggregateInput
    _max?: PaymentConfirmationsMaxOrderByAggregateInput
    _min?: PaymentConfirmationsMinOrderByAggregateInput
    _sum?: PaymentConfirmationsSumOrderByAggregateInput
  }

  export type PaymentConfirmationsScalarWhereWithAggregatesInput = {
    AND?: PaymentConfirmationsScalarWhereWithAggregatesInput | PaymentConfirmationsScalarWhereWithAggregatesInput[]
    OR?: PaymentConfirmationsScalarWhereWithAggregatesInput[]
    NOT?: PaymentConfirmationsScalarWhereWithAggregatesInput | PaymentConfirmationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentConfirmations"> | number
    bankName?: StringWithAggregatesFilter<"PaymentConfirmations"> | string
    bankAccountName?: StringWithAggregatesFilter<"PaymentConfirmations"> | string
    bankAccountNumber?: StringWithAggregatesFilter<"PaymentConfirmations"> | string
    code?: StringWithAggregatesFilter<"PaymentConfirmations"> | string
    status?: IntWithAggregatesFilter<"PaymentConfirmations"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PaymentConfirmations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentConfirmations"> | Date | string
    paymentId?: IntWithAggregatesFilter<"PaymentConfirmations"> | number
  }

  export type AuditLogsWhereInput = {
    AND?: AuditLogsWhereInput | AuditLogsWhereInput[]
    OR?: AuditLogsWhereInput[]
    NOT?: AuditLogsWhereInput | AuditLogsWhereInput[]
    id?: IntFilter<"AuditLogs"> | number
    action?: StringFilter<"AuditLogs"> | string
    details?: StringNullableFilter<"AuditLogs"> | string | null
    actor?: StringNullableFilter<"AuditLogs"> | string | null
    target?: StringNullableFilter<"AuditLogs"> | string | null
    ipAddress?: StringNullableFilter<"AuditLogs"> | string | null
    uaserAgent?: StringNullableFilter<"AuditLogs"> | string | null
    createdAt?: DateTimeFilter<"AuditLogs"> | Date | string
  }

  export type AuditLogsOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    actor?: SortOrderInput | SortOrder
    target?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    uaserAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogsWhereInput | AuditLogsWhereInput[]
    OR?: AuditLogsWhereInput[]
    NOT?: AuditLogsWhereInput | AuditLogsWhereInput[]
    action?: StringFilter<"AuditLogs"> | string
    details?: StringNullableFilter<"AuditLogs"> | string | null
    actor?: StringNullableFilter<"AuditLogs"> | string | null
    target?: StringNullableFilter<"AuditLogs"> | string | null
    ipAddress?: StringNullableFilter<"AuditLogs"> | string | null
    uaserAgent?: StringNullableFilter<"AuditLogs"> | string | null
    createdAt?: DateTimeFilter<"AuditLogs"> | Date | string
  }, "id">

  export type AuditLogsOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    actor?: SortOrderInput | SortOrder
    target?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    uaserAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogsCountOrderByAggregateInput
    _avg?: AuditLogsAvgOrderByAggregateInput
    _max?: AuditLogsMaxOrderByAggregateInput
    _min?: AuditLogsMinOrderByAggregateInput
    _sum?: AuditLogsSumOrderByAggregateInput
  }

  export type AuditLogsScalarWhereWithAggregatesInput = {
    AND?: AuditLogsScalarWhereWithAggregatesInput | AuditLogsScalarWhereWithAggregatesInput[]
    OR?: AuditLogsScalarWhereWithAggregatesInput[]
    NOT?: AuditLogsScalarWhereWithAggregatesInput | AuditLogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLogs"> | number
    action?: StringWithAggregatesFilter<"AuditLogs"> | string
    details?: StringNullableWithAggregatesFilter<"AuditLogs"> | string | null
    actor?: StringNullableWithAggregatesFilter<"AuditLogs"> | string | null
    target?: StringNullableWithAggregatesFilter<"AuditLogs"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLogs"> | string | null
    uaserAgent?: StringNullableWithAggregatesFilter<"AuditLogs"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLogs"> | Date | string
  }

  export type attachmentWhereInput = {
    AND?: attachmentWhereInput | attachmentWhereInput[]
    OR?: attachmentWhereInput[]
    NOT?: attachmentWhereInput | attachmentWhereInput[]
    id?: IntFilter<"attachment"> | number
    fileName?: StringFilter<"attachment"> | string
    fileType?: StringFilter<"attachment"> | string
    filePath?: StringFilter<"attachment"> | string
    fileSize?: IntFilter<"attachment"> | number
    attachmentAbleId?: IntFilter<"attachment"> | number
    attachmentAbleType?: StringFilter<"attachment"> | string
    createdAt?: DateTimeFilter<"attachment"> | Date | string
    updatedAt?: DateTimeFilter<"attachment"> | Date | string
  }

  export type attachmentOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    attachmentAbleId?: SortOrder
    attachmentAbleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type attachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: attachmentWhereInput | attachmentWhereInput[]
    OR?: attachmentWhereInput[]
    NOT?: attachmentWhereInput | attachmentWhereInput[]
    fileName?: StringFilter<"attachment"> | string
    fileType?: StringFilter<"attachment"> | string
    filePath?: StringFilter<"attachment"> | string
    fileSize?: IntFilter<"attachment"> | number
    attachmentAbleId?: IntFilter<"attachment"> | number
    attachmentAbleType?: StringFilter<"attachment"> | string
    createdAt?: DateTimeFilter<"attachment"> | Date | string
    updatedAt?: DateTimeFilter<"attachment"> | Date | string
  }, "id">

  export type attachmentOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    attachmentAbleId?: SortOrder
    attachmentAbleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: attachmentCountOrderByAggregateInput
    _avg?: attachmentAvgOrderByAggregateInput
    _max?: attachmentMaxOrderByAggregateInput
    _min?: attachmentMinOrderByAggregateInput
    _sum?: attachmentSumOrderByAggregateInput
  }

  export type attachmentScalarWhereWithAggregatesInput = {
    AND?: attachmentScalarWhereWithAggregatesInput | attachmentScalarWhereWithAggregatesInput[]
    OR?: attachmentScalarWhereWithAggregatesInput[]
    NOT?: attachmentScalarWhereWithAggregatesInput | attachmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"attachment"> | number
    fileName?: StringWithAggregatesFilter<"attachment"> | string
    fileType?: StringWithAggregatesFilter<"attachment"> | string
    filePath?: StringWithAggregatesFilter<"attachment"> | string
    fileSize?: IntWithAggregatesFilter<"attachment"> | number
    attachmentAbleId?: IntWithAggregatesFilter<"attachment"> | number
    attachmentAbleType?: StringWithAggregatesFilter<"attachment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"attachment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"attachment"> | Date | string
  }

  export type UsersCreateInput = {
    fullname: string
    email: string
    password: string
    role?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactsCreateNestedOneWithoutUserInput
    testimonials?: TestimonialsCreateNestedManyWithoutUserInput
    orders?: OrdersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    fullname: string
    email: string
    password: string
    role?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactsUncheckedCreateNestedOneWithoutUserInput
    testimonials?: TestimonialsUncheckedCreateNestedManyWithoutUserInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactsUpdateOneWithoutUserNestedInput
    testimonials?: TestimonialsUpdateManyWithoutUserNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactsUncheckedUpdateOneWithoutUserNestedInput
    testimonials?: TestimonialsUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    fullname: string
    email: string
    password: string
    role?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateInput = {
    contact: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutContactsInput
  }

  export type ContactsUncheckedCreateInput = {
    id?: number
    contact: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ContactsUpdateInput = {
    contact?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ContactsCreateManyInput = {
    id?: number
    contact: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ContactsUpdateManyMutationInput = {
    contact?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Products?: ProductsCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Products?: ProductsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Products?: ProductsUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Products?: ProductsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateInput = {
    name: string
    description?: string | null
    price: string
    stock: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories: CategoriesCreateNestedOneWithoutProductsInput
    licenses?: LicensesKeyCreateNestedManyWithoutProductInput
    orderItems?: OrderItemsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    price: string
    stock: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    licenses?: LicensesKeyUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    licenses?: LicensesKeyUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    licenses?: LicensesKeyUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    price: string
    stock: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type ProductsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type LicensesKeyCreateInput = {
    encryptedKey: string
    keyHash: string
    activationLimit: number
    status: number
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductsCreateNestedOneWithoutLicensesInput
    supplier?: supplierCreateNestedOneWithoutLicensesInput
  }

  export type LicensesKeyUncheckedCreateInput = {
    id?: number
    encryptedKey: string
    keyHash: string
    activationLimit: number
    status: number
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
    supplierId?: number | null
  }

  export type LicensesKeyUpdateInput = {
    encryptedKey?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    activationLimit?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutLicensesNestedInput
    supplier?: supplierUpdateOneWithoutLicensesNestedInput
  }

  export type LicensesKeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    encryptedKey?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    activationLimit?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LicensesKeyCreateManyInput = {
    id?: number
    encryptedKey: string
    keyHash: string
    activationLimit: number
    status: number
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
    supplierId?: number | null
  }

  export type LicensesKeyUpdateManyMutationInput = {
    encryptedKey?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    activationLimit?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicensesKeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    encryptedKey?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    activationLimit?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type supplierCreateInput = {
    name: string
    contact: string
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicensesKeyCreateNestedManyWithoutSupplierInput
  }

  export type supplierUncheckedCreateInput = {
    id?: number
    name: string
    contact: string
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicensesKeyUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type supplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicensesKeyUpdateManyWithoutSupplierNestedInput
  }

  export type supplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicensesKeyUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type supplierCreateManyInput = {
    id?: number
    name: string
    contact: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type supplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type supplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateInput = {
    amount: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemsCreateNestedManyWithoutOrderInput
    payment?: PaymentsCreateNestedOneWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    amount: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentsUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    amount?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: OrderItemsUpdateManyWithoutOrderNestedInput
    payment?: PaymentsUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    orderItems?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: number
    amount: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type OrdersUpdateManyMutationInput = {
    amount?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemsCreateInput = {
    quantity: number
    price: string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrderItemsInput
    product: ProductsCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemsUncheckedCreateInput = {
    id?: number
    quantity: number
    price: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: number
    productId: number
  }

  export type OrderItemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductsUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemsCreateManyInput = {
    id?: number
    quantity: number
    price: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: number
    productId: number
  }

  export type OrderItemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type TestimonialsCreateInput = {
    content: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutTestimonialsInput
  }

  export type TestimonialsUncheckedCreateInput = {
    id?: number
    content: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type TestimonialsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTestimonialsNestedInput
  }

  export type TestimonialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TestimonialsCreateManyInput = {
    id?: number
    content: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type TestimonialsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentsCreateInput = {
    amount: string
    method: string
    code: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentConfirmations?: PaymentConfirmationsCreateNestedOneWithoutPaymentInput
    order: OrdersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: number
    amount: string
    method: string
    code: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: number
    paymentConfirmations?: PaymentConfirmationsUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsUpdateInput = {
    amount?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentConfirmations?: PaymentConfirmationsUpdateOneWithoutPaymentNestedInput
    order?: OrdersUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
    paymentConfirmations?: PaymentConfirmationsUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentsCreateManyInput = {
    id?: number
    amount: string
    method: string
    code: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: number
  }

  export type PaymentsUpdateManyMutationInput = {
    amount?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentConfirmationsCreateInput = {
    bankName: string
    bankAccountName: string
    bankAccountNumber: string
    code: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: PaymentsCreateNestedOneWithoutPaymentConfirmationsInput
  }

  export type PaymentConfirmationsUncheckedCreateInput = {
    id?: number
    bankName: string
    bankAccountName: string
    bankAccountNumber: string
    code: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentId: number
  }

  export type PaymentConfirmationsUpdateInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    bankAccountName?: StringFieldUpdateOperationsInput | string
    bankAccountNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentsUpdateOneRequiredWithoutPaymentConfirmationsNestedInput
  }

  export type PaymentConfirmationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankAccountName?: StringFieldUpdateOperationsInput | string
    bankAccountNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentConfirmationsCreateManyInput = {
    id?: number
    bankName: string
    bankAccountName: string
    bankAccountNumber: string
    code: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentId: number
  }

  export type PaymentConfirmationsUpdateManyMutationInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    bankAccountName?: StringFieldUpdateOperationsInput | string
    bankAccountNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentConfirmationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankAccountName?: StringFieldUpdateOperationsInput | string
    bankAccountNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: IntFieldUpdateOperationsInput | number
  }

  export type AuditLogsCreateInput = {
    action: string
    details?: string | null
    actor?: string | null
    target?: string | null
    ipAddress?: string | null
    uaserAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogsUncheckedCreateInput = {
    id?: number
    action: string
    details?: string | null
    actor?: string | null
    target?: string | null
    ipAddress?: string | null
    uaserAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogsUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    uaserAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    uaserAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogsCreateManyInput = {
    id?: number
    action: string
    details?: string | null
    actor?: string | null
    target?: string | null
    ipAddress?: string | null
    uaserAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogsUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    uaserAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    uaserAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attachmentCreateInput = {
    fileName: string
    fileType: string
    filePath: string
    fileSize: number
    attachmentAbleId: number
    attachmentAbleType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type attachmentUncheckedCreateInput = {
    id?: number
    fileName: string
    fileType: string
    filePath: string
    fileSize: number
    attachmentAbleId: number
    attachmentAbleType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type attachmentUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    attachmentAbleId?: IntFieldUpdateOperationsInput | number
    attachmentAbleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attachmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    attachmentAbleId?: IntFieldUpdateOperationsInput | number
    attachmentAbleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attachmentCreateManyInput = {
    id?: number
    fileName: string
    fileType: string
    filePath: string
    fileSize: number
    attachmentAbleId: number
    attachmentAbleType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type attachmentUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    attachmentAbleId?: IntFieldUpdateOperationsInput | number
    attachmentAbleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attachmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    attachmentAbleId?: IntFieldUpdateOperationsInput | number
    attachmentAbleType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ContactsNullableScalarRelationFilter = {
    is?: ContactsWhereInput | null
    isNot?: ContactsWhereInput | null
  }

  export type TestimonialsListRelationFilter = {
    every?: TestimonialsWhereInput
    some?: TestimonialsWhereInput
    none?: TestimonialsWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type TestimonialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContactsCountOrderByAggregateInput = {
    id?: SortOrder
    contact?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContactsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ContactsMaxOrderByAggregateInput = {
    id?: SortOrder
    contact?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContactsMinOrderByAggregateInput = {
    id?: SortOrder
    contact?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContactsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type LicensesKeyListRelationFilter = {
    every?: LicensesKeyWhereInput
    some?: LicensesKeyWhereInput
    none?: LicensesKeyWhereInput
  }

  export type OrderItemsListRelationFilter = {
    every?: OrderItemsWhereInput
    some?: OrderItemsWhereInput
    none?: OrderItemsWhereInput
  }

  export type LicensesKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type SupplierNullableScalarRelationFilter = {
    is?: supplierWhereInput | null
    isNot?: supplierWhereInput | null
  }

  export type LicensesKeyCountOrderByAggregateInput = {
    id?: SortOrder
    encryptedKey?: SortOrder
    keyHash?: SortOrder
    activationLimit?: SortOrder
    status?: SortOrder
    soldAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
  }

  export type LicensesKeyAvgOrderByAggregateInput = {
    id?: SortOrder
    activationLimit?: SortOrder
    status?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
  }

  export type LicensesKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    encryptedKey?: SortOrder
    keyHash?: SortOrder
    activationLimit?: SortOrder
    status?: SortOrder
    soldAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
  }

  export type LicensesKeyMinOrderByAggregateInput = {
    id?: SortOrder
    encryptedKey?: SortOrder
    keyHash?: SortOrder
    activationLimit?: SortOrder
    status?: SortOrder
    soldAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
  }

  export type LicensesKeySumOrderByAggregateInput = {
    id?: SortOrder
    activationLimit?: SortOrder
    status?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type supplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type supplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type supplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type supplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type supplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PaymentsNullableScalarRelationFilter = {
    is?: PaymentsWhereInput | null
    isNot?: PaymentsWhereInput | null
  }

  export type OrdersIdUserIdCompoundUniqueInput = {
    id: number
    userId: number
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type OrderItemsCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderItemsMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderItemsSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type TestimonialsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TestimonialsAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
  }

  export type TestimonialsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TestimonialsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TestimonialsSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
  }

  export type PaymentConfirmationsNullableScalarRelationFilter = {
    is?: PaymentConfirmationsWhereInput | null
    isNot?: PaymentConfirmationsWhereInput | null
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentsScalarRelationFilter = {
    is?: PaymentsWhereInput
    isNot?: PaymentsWhereInput
  }

  export type PaymentConfirmationsCountOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    bankAccountName?: SortOrder
    bankAccountNumber?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
  }

  export type PaymentConfirmationsAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
  }

  export type PaymentConfirmationsMaxOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    bankAccountName?: SortOrder
    bankAccountNumber?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
  }

  export type PaymentConfirmationsMinOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    bankAccountName?: SortOrder
    bankAccountNumber?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
  }

  export type PaymentConfirmationsSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
  }

  export type AuditLogsCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    actor?: SortOrder
    target?: SortOrder
    ipAddress?: SortOrder
    uaserAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuditLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    actor?: SortOrder
    target?: SortOrder
    ipAddress?: SortOrder
    uaserAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogsMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    actor?: SortOrder
    target?: SortOrder
    ipAddress?: SortOrder
    uaserAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type attachmentCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    attachmentAbleId?: SortOrder
    attachmentAbleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type attachmentAvgOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
    attachmentAbleId?: SortOrder
  }

  export type attachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    attachmentAbleId?: SortOrder
    attachmentAbleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type attachmentMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    attachmentAbleId?: SortOrder
    attachmentAbleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type attachmentSumOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
    attachmentAbleId?: SortOrder
  }

  export type ContactsCreateNestedOneWithoutUserInput = {
    create?: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput>
    connectOrCreate?: ContactsCreateOrConnectWithoutUserInput
    connect?: ContactsWhereUniqueInput
  }

  export type TestimonialsCreateNestedManyWithoutUserInput = {
    create?: XOR<TestimonialsCreateWithoutUserInput, TestimonialsUncheckedCreateWithoutUserInput> | TestimonialsCreateWithoutUserInput[] | TestimonialsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestimonialsCreateOrConnectWithoutUserInput | TestimonialsCreateOrConnectWithoutUserInput[]
    createMany?: TestimonialsCreateManyUserInputEnvelope
    connect?: TestimonialsWhereUniqueInput | TestimonialsWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ContactsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput>
    connectOrCreate?: ContactsCreateOrConnectWithoutUserInput
    connect?: ContactsWhereUniqueInput
  }

  export type TestimonialsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TestimonialsCreateWithoutUserInput, TestimonialsUncheckedCreateWithoutUserInput> | TestimonialsCreateWithoutUserInput[] | TestimonialsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestimonialsCreateOrConnectWithoutUserInput | TestimonialsCreateOrConnectWithoutUserInput[]
    createMany?: TestimonialsCreateManyUserInputEnvelope
    connect?: TestimonialsWhereUniqueInput | TestimonialsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ContactsUpdateOneWithoutUserNestedInput = {
    create?: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput>
    connectOrCreate?: ContactsCreateOrConnectWithoutUserInput
    upsert?: ContactsUpsertWithoutUserInput
    disconnect?: ContactsWhereInput | boolean
    delete?: ContactsWhereInput | boolean
    connect?: ContactsWhereUniqueInput
    update?: XOR<XOR<ContactsUpdateToOneWithWhereWithoutUserInput, ContactsUpdateWithoutUserInput>, ContactsUncheckedUpdateWithoutUserInput>
  }

  export type TestimonialsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestimonialsCreateWithoutUserInput, TestimonialsUncheckedCreateWithoutUserInput> | TestimonialsCreateWithoutUserInput[] | TestimonialsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestimonialsCreateOrConnectWithoutUserInput | TestimonialsCreateOrConnectWithoutUserInput[]
    upsert?: TestimonialsUpsertWithWhereUniqueWithoutUserInput | TestimonialsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestimonialsCreateManyUserInputEnvelope
    set?: TestimonialsWhereUniqueInput | TestimonialsWhereUniqueInput[]
    disconnect?: TestimonialsWhereUniqueInput | TestimonialsWhereUniqueInput[]
    delete?: TestimonialsWhereUniqueInput | TestimonialsWhereUniqueInput[]
    connect?: TestimonialsWhereUniqueInput | TestimonialsWhereUniqueInput[]
    update?: TestimonialsUpdateWithWhereUniqueWithoutUserInput | TestimonialsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestimonialsUpdateManyWithWhereWithoutUserInput | TestimonialsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestimonialsScalarWhereInput | TestimonialsScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ContactsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput>
    connectOrCreate?: ContactsCreateOrConnectWithoutUserInput
    upsert?: ContactsUpsertWithoutUserInput
    disconnect?: ContactsWhereInput | boolean
    delete?: ContactsWhereInput | boolean
    connect?: ContactsWhereUniqueInput
    update?: XOR<XOR<ContactsUpdateToOneWithWhereWithoutUserInput, ContactsUpdateWithoutUserInput>, ContactsUncheckedUpdateWithoutUserInput>
  }

  export type TestimonialsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestimonialsCreateWithoutUserInput, TestimonialsUncheckedCreateWithoutUserInput> | TestimonialsCreateWithoutUserInput[] | TestimonialsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestimonialsCreateOrConnectWithoutUserInput | TestimonialsCreateOrConnectWithoutUserInput[]
    upsert?: TestimonialsUpsertWithWhereUniqueWithoutUserInput | TestimonialsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestimonialsCreateManyUserInputEnvelope
    set?: TestimonialsWhereUniqueInput | TestimonialsWhereUniqueInput[]
    disconnect?: TestimonialsWhereUniqueInput | TestimonialsWhereUniqueInput[]
    delete?: TestimonialsWhereUniqueInput | TestimonialsWhereUniqueInput[]
    connect?: TestimonialsWhereUniqueInput | TestimonialsWhereUniqueInput[]
    update?: TestimonialsUpdateWithWhereUniqueWithoutUserInput | TestimonialsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestimonialsUpdateManyWithWhereWithoutUserInput | TestimonialsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestimonialsScalarWhereInput | TestimonialsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutContactsInput = {
    create?: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutContactsInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsersUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutContactsInput
    upsert?: UsersUpsertWithoutContactsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutContactsInput, UsersUpdateWithoutContactsInput>, UsersUncheckedUpdateWithoutContactsInput>
  }

  export type ProductsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoriesInput | ProductsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoriesInput | ProductsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoriesInput | ProductsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoriesInput | ProductsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoriesInput | ProductsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoriesInput | ProductsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type LicensesKeyCreateNestedManyWithoutProductInput = {
    create?: XOR<LicensesKeyCreateWithoutProductInput, LicensesKeyUncheckedCreateWithoutProductInput> | LicensesKeyCreateWithoutProductInput[] | LicensesKeyUncheckedCreateWithoutProductInput[]
    connectOrCreate?: LicensesKeyCreateOrConnectWithoutProductInput | LicensesKeyCreateOrConnectWithoutProductInput[]
    createMany?: LicensesKeyCreateManyProductInputEnvelope
    connect?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
  }

  export type OrderItemsCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type LicensesKeyUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<LicensesKeyCreateWithoutProductInput, LicensesKeyUncheckedCreateWithoutProductInput> | LicensesKeyCreateWithoutProductInput[] | LicensesKeyUncheckedCreateWithoutProductInput[]
    connectOrCreate?: LicensesKeyCreateOrConnectWithoutProductInput | LicensesKeyCreateOrConnectWithoutProductInput[]
    createMany?: LicensesKeyCreateManyProductInputEnvelope
    connect?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type CategoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    upsert?: CategoriesUpsertWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutProductsInput, CategoriesUpdateWithoutProductsInput>, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type LicensesKeyUpdateManyWithoutProductNestedInput = {
    create?: XOR<LicensesKeyCreateWithoutProductInput, LicensesKeyUncheckedCreateWithoutProductInput> | LicensesKeyCreateWithoutProductInput[] | LicensesKeyUncheckedCreateWithoutProductInput[]
    connectOrCreate?: LicensesKeyCreateOrConnectWithoutProductInput | LicensesKeyCreateOrConnectWithoutProductInput[]
    upsert?: LicensesKeyUpsertWithWhereUniqueWithoutProductInput | LicensesKeyUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: LicensesKeyCreateManyProductInputEnvelope
    set?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    disconnect?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    delete?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    connect?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    update?: LicensesKeyUpdateWithWhereUniqueWithoutProductInput | LicensesKeyUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: LicensesKeyUpdateManyWithWhereWithoutProductInput | LicensesKeyUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: LicensesKeyScalarWhereInput | LicensesKeyScalarWhereInput[]
  }

  export type OrderItemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutProductInput | OrderItemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutProductInput | OrderItemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutProductInput | OrderItemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type LicensesKeyUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<LicensesKeyCreateWithoutProductInput, LicensesKeyUncheckedCreateWithoutProductInput> | LicensesKeyCreateWithoutProductInput[] | LicensesKeyUncheckedCreateWithoutProductInput[]
    connectOrCreate?: LicensesKeyCreateOrConnectWithoutProductInput | LicensesKeyCreateOrConnectWithoutProductInput[]
    upsert?: LicensesKeyUpsertWithWhereUniqueWithoutProductInput | LicensesKeyUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: LicensesKeyCreateManyProductInputEnvelope
    set?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    disconnect?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    delete?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    connect?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    update?: LicensesKeyUpdateWithWhereUniqueWithoutProductInput | LicensesKeyUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: LicensesKeyUpdateManyWithWhereWithoutProductInput | LicensesKeyUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: LicensesKeyScalarWhereInput | LicensesKeyScalarWhereInput[]
  }

  export type OrderItemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutProductInput | OrderItemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutProductInput | OrderItemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutProductInput | OrderItemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutLicensesInput = {
    create?: XOR<ProductsCreateWithoutLicensesInput, ProductsUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutLicensesInput
    connect?: ProductsWhereUniqueInput
  }

  export type supplierCreateNestedOneWithoutLicensesInput = {
    create?: XOR<supplierCreateWithoutLicensesInput, supplierUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: supplierCreateOrConnectWithoutLicensesInput
    connect?: supplierWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProductsUpdateOneRequiredWithoutLicensesNestedInput = {
    create?: XOR<ProductsCreateWithoutLicensesInput, ProductsUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutLicensesInput
    upsert?: ProductsUpsertWithoutLicensesInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutLicensesInput, ProductsUpdateWithoutLicensesInput>, ProductsUncheckedUpdateWithoutLicensesInput>
  }

  export type supplierUpdateOneWithoutLicensesNestedInput = {
    create?: XOR<supplierCreateWithoutLicensesInput, supplierUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: supplierCreateOrConnectWithoutLicensesInput
    upsert?: supplierUpsertWithoutLicensesInput
    disconnect?: supplierWhereInput | boolean
    delete?: supplierWhereInput | boolean
    connect?: supplierWhereUniqueInput
    update?: XOR<XOR<supplierUpdateToOneWithWhereWithoutLicensesInput, supplierUpdateWithoutLicensesInput>, supplierUncheckedUpdateWithoutLicensesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LicensesKeyCreateNestedManyWithoutSupplierInput = {
    create?: XOR<LicensesKeyCreateWithoutSupplierInput, LicensesKeyUncheckedCreateWithoutSupplierInput> | LicensesKeyCreateWithoutSupplierInput[] | LicensesKeyUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: LicensesKeyCreateOrConnectWithoutSupplierInput | LicensesKeyCreateOrConnectWithoutSupplierInput[]
    createMany?: LicensesKeyCreateManySupplierInputEnvelope
    connect?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
  }

  export type LicensesKeyUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<LicensesKeyCreateWithoutSupplierInput, LicensesKeyUncheckedCreateWithoutSupplierInput> | LicensesKeyCreateWithoutSupplierInput[] | LicensesKeyUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: LicensesKeyCreateOrConnectWithoutSupplierInput | LicensesKeyCreateOrConnectWithoutSupplierInput[]
    createMany?: LicensesKeyCreateManySupplierInputEnvelope
    connect?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
  }

  export type LicensesKeyUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<LicensesKeyCreateWithoutSupplierInput, LicensesKeyUncheckedCreateWithoutSupplierInput> | LicensesKeyCreateWithoutSupplierInput[] | LicensesKeyUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: LicensesKeyCreateOrConnectWithoutSupplierInput | LicensesKeyCreateOrConnectWithoutSupplierInput[]
    upsert?: LicensesKeyUpsertWithWhereUniqueWithoutSupplierInput | LicensesKeyUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: LicensesKeyCreateManySupplierInputEnvelope
    set?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    disconnect?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    delete?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    connect?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    update?: LicensesKeyUpdateWithWhereUniqueWithoutSupplierInput | LicensesKeyUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: LicensesKeyUpdateManyWithWhereWithoutSupplierInput | LicensesKeyUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: LicensesKeyScalarWhereInput | LicensesKeyScalarWhereInput[]
  }

  export type LicensesKeyUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<LicensesKeyCreateWithoutSupplierInput, LicensesKeyUncheckedCreateWithoutSupplierInput> | LicensesKeyCreateWithoutSupplierInput[] | LicensesKeyUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: LicensesKeyCreateOrConnectWithoutSupplierInput | LicensesKeyCreateOrConnectWithoutSupplierInput[]
    upsert?: LicensesKeyUpsertWithWhereUniqueWithoutSupplierInput | LicensesKeyUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: LicensesKeyCreateManySupplierInputEnvelope
    set?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    disconnect?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    delete?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    connect?: LicensesKeyWhereUniqueInput | LicensesKeyWhereUniqueInput[]
    update?: LicensesKeyUpdateWithWhereUniqueWithoutSupplierInput | LicensesKeyUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: LicensesKeyUpdateManyWithWhereWithoutSupplierInput | LicensesKeyUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: LicensesKeyScalarWhereInput | LicensesKeyScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type OrderItemsCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type PaymentsCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    connect?: PaymentsWhereUniqueInput
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    connect?: PaymentsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutOrderInput | OrderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutOrderInput | OrderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutOrderInput | OrderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type PaymentsUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    upsert?: PaymentsUpsertWithoutOrderInput
    disconnect?: PaymentsWhereInput | boolean
    delete?: PaymentsWhereInput | boolean
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutOrderInput, PaymentsUpdateWithoutOrderInput>, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutOrderInput | OrderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutOrderInput | OrderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutOrderInput | OrderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    upsert?: PaymentsUpsertWithoutOrderInput
    disconnect?: PaymentsWhereInput | boolean
    delete?: PaymentsWhereInput | boolean
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutOrderInput, PaymentsUpdateWithoutOrderInput>, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type OrdersCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrdersCreateWithoutOrderItemsInput, OrdersUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderItemsInput
    connect?: OrdersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductsCreateWithoutOrderItemsInput, ProductsUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrderItemsInput
    connect?: ProductsWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrdersCreateWithoutOrderItemsInput, OrdersUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderItemsInput
    upsert?: OrdersUpsertWithoutOrderItemsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrderItemsInput, OrdersUpdateWithoutOrderItemsInput>, OrdersUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductsUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductsCreateWithoutOrderItemsInput, ProductsUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductsUpsertWithoutOrderItemsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutOrderItemsInput, ProductsUpdateWithoutOrderItemsInput>, ProductsUncheckedUpdateWithoutOrderItemsInput>
  }

  export type UsersCreateNestedOneWithoutTestimonialsInput = {
    create?: XOR<UsersCreateWithoutTestimonialsInput, UsersUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTestimonialsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTestimonialsNestedInput = {
    create?: XOR<UsersCreateWithoutTestimonialsInput, UsersUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTestimonialsInput
    upsert?: UsersUpsertWithoutTestimonialsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTestimonialsInput, UsersUpdateWithoutTestimonialsInput>, UsersUncheckedUpdateWithoutTestimonialsInput>
  }

  export type PaymentConfirmationsCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PaymentConfirmationsCreateWithoutPaymentInput, PaymentConfirmationsUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentConfirmationsCreateOrConnectWithoutPaymentInput
    connect?: PaymentConfirmationsWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput
    connect?: OrdersWhereUniqueInput
  }

  export type PaymentConfirmationsUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PaymentConfirmationsCreateWithoutPaymentInput, PaymentConfirmationsUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentConfirmationsCreateOrConnectWithoutPaymentInput
    connect?: PaymentConfirmationsWhereUniqueInput
  }

  export type PaymentConfirmationsUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<PaymentConfirmationsCreateWithoutPaymentInput, PaymentConfirmationsUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentConfirmationsCreateOrConnectWithoutPaymentInput
    upsert?: PaymentConfirmationsUpsertWithoutPaymentInput
    disconnect?: PaymentConfirmationsWhereInput | boolean
    delete?: PaymentConfirmationsWhereInput | boolean
    connect?: PaymentConfirmationsWhereUniqueInput
    update?: XOR<XOR<PaymentConfirmationsUpdateToOneWithWhereWithoutPaymentInput, PaymentConfirmationsUpdateWithoutPaymentInput>, PaymentConfirmationsUncheckedUpdateWithoutPaymentInput>
  }

  export type OrdersUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput
    upsert?: OrdersUpsertWithoutPaymentInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutPaymentInput, OrdersUpdateWithoutPaymentInput>, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentConfirmationsUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<PaymentConfirmationsCreateWithoutPaymentInput, PaymentConfirmationsUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentConfirmationsCreateOrConnectWithoutPaymentInput
    upsert?: PaymentConfirmationsUpsertWithoutPaymentInput
    disconnect?: PaymentConfirmationsWhereInput | boolean
    delete?: PaymentConfirmationsWhereInput | boolean
    connect?: PaymentConfirmationsWhereUniqueInput
    update?: XOR<XOR<PaymentConfirmationsUpdateToOneWithWhereWithoutPaymentInput, PaymentConfirmationsUpdateWithoutPaymentInput>, PaymentConfirmationsUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentsCreateNestedOneWithoutPaymentConfirmationsInput = {
    create?: XOR<PaymentsCreateWithoutPaymentConfirmationsInput, PaymentsUncheckedCreateWithoutPaymentConfirmationsInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutPaymentConfirmationsInput
    connect?: PaymentsWhereUniqueInput
  }

  export type PaymentsUpdateOneRequiredWithoutPaymentConfirmationsNestedInput = {
    create?: XOR<PaymentsCreateWithoutPaymentConfirmationsInput, PaymentsUncheckedCreateWithoutPaymentConfirmationsInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutPaymentConfirmationsInput
    upsert?: PaymentsUpsertWithoutPaymentConfirmationsInput
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutPaymentConfirmationsInput, PaymentsUpdateWithoutPaymentConfirmationsInput>, PaymentsUncheckedUpdateWithoutPaymentConfirmationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ContactsCreateWithoutUserInput = {
    contact: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUncheckedCreateWithoutUserInput = {
    id?: number
    contact: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsCreateOrConnectWithoutUserInput = {
    where: ContactsWhereUniqueInput
    create: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput>
  }

  export type TestimonialsCreateWithoutUserInput = {
    content: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialsUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialsCreateOrConnectWithoutUserInput = {
    where: TestimonialsWhereUniqueInput
    create: XOR<TestimonialsCreateWithoutUserInput, TestimonialsUncheckedCreateWithoutUserInput>
  }

  export type TestimonialsCreateManyUserInputEnvelope = {
    data: TestimonialsCreateManyUserInput | TestimonialsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUserInput = {
    amount: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemsCreateNestedManyWithoutOrderInput
    payment?: PaymentsCreateNestedOneWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    id?: number
    amount: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentsUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContactsUpsertWithoutUserInput = {
    update: XOR<ContactsUpdateWithoutUserInput, ContactsUncheckedUpdateWithoutUserInput>
    create: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput>
    where?: ContactsWhereInput
  }

  export type ContactsUpdateToOneWithWhereWithoutUserInput = {
    where?: ContactsWhereInput
    data: XOR<ContactsUpdateWithoutUserInput, ContactsUncheckedUpdateWithoutUserInput>
  }

  export type ContactsUpdateWithoutUserInput = {
    contact?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialsUpsertWithWhereUniqueWithoutUserInput = {
    where: TestimonialsWhereUniqueInput
    update: XOR<TestimonialsUpdateWithoutUserInput, TestimonialsUncheckedUpdateWithoutUserInput>
    create: XOR<TestimonialsCreateWithoutUserInput, TestimonialsUncheckedCreateWithoutUserInput>
  }

  export type TestimonialsUpdateWithWhereUniqueWithoutUserInput = {
    where: TestimonialsWhereUniqueInput
    data: XOR<TestimonialsUpdateWithoutUserInput, TestimonialsUncheckedUpdateWithoutUserInput>
  }

  export type TestimonialsUpdateManyWithWhereWithoutUserInput = {
    where: TestimonialsScalarWhereInput
    data: XOR<TestimonialsUpdateManyMutationInput, TestimonialsUncheckedUpdateManyWithoutUserInput>
  }

  export type TestimonialsScalarWhereInput = {
    AND?: TestimonialsScalarWhereInput | TestimonialsScalarWhereInput[]
    OR?: TestimonialsScalarWhereInput[]
    NOT?: TestimonialsScalarWhereInput | TestimonialsScalarWhereInput[]
    id?: IntFilter<"Testimonials"> | number
    content?: StringFilter<"Testimonials"> | string
    rating?: IntFilter<"Testimonials"> | number
    createdAt?: DateTimeFilter<"Testimonials"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonials"> | Date | string
    userId?: IntFilter<"Testimonials"> | number
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    amount?: StringFilter<"Orders"> | string
    status?: IntFilter<"Orders"> | number
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    userId?: IntFilter<"Orders"> | number
  }

  export type UsersCreateWithoutContactsInput = {
    fullname: string
    email: string
    password: string
    role?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    testimonials?: TestimonialsCreateNestedManyWithoutUserInput
    orders?: OrdersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutContactsInput = {
    id?: number
    fullname: string
    email: string
    password: string
    role?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    testimonials?: TestimonialsUncheckedCreateNestedManyWithoutUserInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutContactsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
  }

  export type UsersUpsertWithoutContactsInput = {
    update: XOR<UsersUpdateWithoutContactsInput, UsersUncheckedUpdateWithoutContactsInput>
    create: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutContactsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutContactsInput, UsersUncheckedUpdateWithoutContactsInput>
  }

  export type UsersUpdateWithoutContactsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testimonials?: TestimonialsUpdateManyWithoutUserNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutContactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testimonials?: TestimonialsUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductsCreateWithoutCategoriesInput = {
    name: string
    description?: string | null
    price: string
    stock: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicensesKeyCreateNestedManyWithoutProductInput
    orderItems?: OrderItemsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    description?: string | null
    price: string
    stock: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicensesKeyUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductsCreateManyCategoriesInputEnvelope = {
    data: ProductsCreateManyCategoriesInput | ProductsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoriesInput, ProductsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoriesInput, ProductsUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoriesInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    price?: StringFilter<"Products"> | string
    stock?: IntFilter<"Products"> | number
    status?: IntFilter<"Products"> | number
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    categoryId?: IntFilter<"Products"> | number
  }

  export type CategoriesCreateWithoutProductsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesCreateOrConnectWithoutProductsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
  }

  export type LicensesKeyCreateWithoutProductInput = {
    encryptedKey: string
    keyHash: string
    activationLimit: number
    status: number
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier?: supplierCreateNestedOneWithoutLicensesInput
  }

  export type LicensesKeyUncheckedCreateWithoutProductInput = {
    id?: number
    encryptedKey: string
    keyHash: string
    activationLimit: number
    status: number
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierId?: number | null
  }

  export type LicensesKeyCreateOrConnectWithoutProductInput = {
    where: LicensesKeyWhereUniqueInput
    create: XOR<LicensesKeyCreateWithoutProductInput, LicensesKeyUncheckedCreateWithoutProductInput>
  }

  export type LicensesKeyCreateManyProductInputEnvelope = {
    data: LicensesKeyCreateManyProductInput | LicensesKeyCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemsCreateWithoutProductInput = {
    quantity: number
    price: string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemsUncheckedCreateWithoutProductInput = {
    id?: number
    quantity: number
    price: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: number
  }

  export type OrderItemsCreateOrConnectWithoutProductInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput>
  }

  export type OrderItemsCreateManyProductInputEnvelope = {
    data: OrderItemsCreateManyProductInput | OrderItemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutProductsInput = {
    update: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicensesKeyUpsertWithWhereUniqueWithoutProductInput = {
    where: LicensesKeyWhereUniqueInput
    update: XOR<LicensesKeyUpdateWithoutProductInput, LicensesKeyUncheckedUpdateWithoutProductInput>
    create: XOR<LicensesKeyCreateWithoutProductInput, LicensesKeyUncheckedCreateWithoutProductInput>
  }

  export type LicensesKeyUpdateWithWhereUniqueWithoutProductInput = {
    where: LicensesKeyWhereUniqueInput
    data: XOR<LicensesKeyUpdateWithoutProductInput, LicensesKeyUncheckedUpdateWithoutProductInput>
  }

  export type LicensesKeyUpdateManyWithWhereWithoutProductInput = {
    where: LicensesKeyScalarWhereInput
    data: XOR<LicensesKeyUpdateManyMutationInput, LicensesKeyUncheckedUpdateManyWithoutProductInput>
  }

  export type LicensesKeyScalarWhereInput = {
    AND?: LicensesKeyScalarWhereInput | LicensesKeyScalarWhereInput[]
    OR?: LicensesKeyScalarWhereInput[]
    NOT?: LicensesKeyScalarWhereInput | LicensesKeyScalarWhereInput[]
    id?: IntFilter<"LicensesKey"> | number
    encryptedKey?: StringFilter<"LicensesKey"> | string
    keyHash?: StringFilter<"LicensesKey"> | string
    activationLimit?: IntFilter<"LicensesKey"> | number
    status?: IntFilter<"LicensesKey"> | number
    soldAt?: DateTimeNullableFilter<"LicensesKey"> | Date | string | null
    createdAt?: DateTimeFilter<"LicensesKey"> | Date | string
    updatedAt?: DateTimeFilter<"LicensesKey"> | Date | string
    productId?: IntFilter<"LicensesKey"> | number
    supplierId?: IntNullableFilter<"LicensesKey"> | number | null
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutProductInput, OrderItemsUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutProductInput, OrderItemsUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemsScalarWhereInput = {
    AND?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
    OR?: OrderItemsScalarWhereInput[]
    NOT?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
    id?: IntFilter<"OrderItems"> | number
    quantity?: IntFilter<"OrderItems"> | number
    price?: StringFilter<"OrderItems"> | string
    createdAt?: DateTimeFilter<"OrderItems"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItems"> | Date | string
    orderId?: IntFilter<"OrderItems"> | number
    productId?: IntFilter<"OrderItems"> | number
  }

  export type ProductsCreateWithoutLicensesInput = {
    name: string
    description?: string | null
    price: string
    stock: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories: CategoriesCreateNestedOneWithoutProductsInput
    orderItems?: OrderItemsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutLicensesInput = {
    id?: number
    name: string
    description?: string | null
    price: string
    stock: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutLicensesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutLicensesInput, ProductsUncheckedCreateWithoutLicensesInput>
  }

  export type supplierCreateWithoutLicensesInput = {
    name: string
    contact: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type supplierUncheckedCreateWithoutLicensesInput = {
    id?: number
    name: string
    contact: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type supplierCreateOrConnectWithoutLicensesInput = {
    where: supplierWhereUniqueInput
    create: XOR<supplierCreateWithoutLicensesInput, supplierUncheckedCreateWithoutLicensesInput>
  }

  export type ProductsUpsertWithoutLicensesInput = {
    update: XOR<ProductsUpdateWithoutLicensesInput, ProductsUncheckedUpdateWithoutLicensesInput>
    create: XOR<ProductsCreateWithoutLicensesInput, ProductsUncheckedCreateWithoutLicensesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutLicensesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutLicensesInput, ProductsUncheckedUpdateWithoutLicensesInput>
  }

  export type ProductsUpdateWithoutLicensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    orderItems?: OrderItemsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutLicensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    orderItems?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type supplierUpsertWithoutLicensesInput = {
    update: XOR<supplierUpdateWithoutLicensesInput, supplierUncheckedUpdateWithoutLicensesInput>
    create: XOR<supplierCreateWithoutLicensesInput, supplierUncheckedCreateWithoutLicensesInput>
    where?: supplierWhereInput
  }

  export type supplierUpdateToOneWithWhereWithoutLicensesInput = {
    where?: supplierWhereInput
    data: XOR<supplierUpdateWithoutLicensesInput, supplierUncheckedUpdateWithoutLicensesInput>
  }

  export type supplierUpdateWithoutLicensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type supplierUncheckedUpdateWithoutLicensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicensesKeyCreateWithoutSupplierInput = {
    encryptedKey: string
    keyHash: string
    activationLimit: number
    status: number
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductsCreateNestedOneWithoutLicensesInput
  }

  export type LicensesKeyUncheckedCreateWithoutSupplierInput = {
    id?: number
    encryptedKey: string
    keyHash: string
    activationLimit: number
    status: number
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
  }

  export type LicensesKeyCreateOrConnectWithoutSupplierInput = {
    where: LicensesKeyWhereUniqueInput
    create: XOR<LicensesKeyCreateWithoutSupplierInput, LicensesKeyUncheckedCreateWithoutSupplierInput>
  }

  export type LicensesKeyCreateManySupplierInputEnvelope = {
    data: LicensesKeyCreateManySupplierInput | LicensesKeyCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type LicensesKeyUpsertWithWhereUniqueWithoutSupplierInput = {
    where: LicensesKeyWhereUniqueInput
    update: XOR<LicensesKeyUpdateWithoutSupplierInput, LicensesKeyUncheckedUpdateWithoutSupplierInput>
    create: XOR<LicensesKeyCreateWithoutSupplierInput, LicensesKeyUncheckedCreateWithoutSupplierInput>
  }

  export type LicensesKeyUpdateWithWhereUniqueWithoutSupplierInput = {
    where: LicensesKeyWhereUniqueInput
    data: XOR<LicensesKeyUpdateWithoutSupplierInput, LicensesKeyUncheckedUpdateWithoutSupplierInput>
  }

  export type LicensesKeyUpdateManyWithWhereWithoutSupplierInput = {
    where: LicensesKeyScalarWhereInput
    data: XOR<LicensesKeyUpdateManyMutationInput, LicensesKeyUncheckedUpdateManyWithoutSupplierInput>
  }

  export type UsersCreateWithoutOrdersInput = {
    fullname: string
    email: string
    password: string
    role?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactsCreateNestedOneWithoutUserInput
    testimonials?: TestimonialsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    id?: number
    fullname: string
    email: string
    password: string
    role?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactsUncheckedCreateNestedOneWithoutUserInput
    testimonials?: TestimonialsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemsCreateWithoutOrderInput = {
    quantity: number
    price: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductsCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemsUncheckedCreateWithoutOrderInput = {
    id?: number
    quantity: number
    price: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
  }

  export type OrderItemsCreateOrConnectWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemsCreateManyOrderInputEnvelope = {
    data: OrderItemsCreateManyOrderInput | OrderItemsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentsCreateWithoutOrderInput = {
    amount: string
    method: string
    code: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentConfirmations?: PaymentConfirmationsCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateWithoutOrderInput = {
    id?: number
    amount: string
    method: string
    code: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentConfirmations?: PaymentConfirmationsUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsCreateOrConnectWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactsUpdateOneWithoutUserNestedInput
    testimonials?: TestimonialsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactsUncheckedUpdateOneWithoutUserNestedInput
    testimonials?: TestimonialsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutOrderInput, OrderItemsUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutOrderInput, OrderItemsUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentsUpsertWithoutOrderInput = {
    update: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    where?: PaymentsWhereInput
  }

  export type PaymentsUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentsWhereInput
    data: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentsUpdateWithoutOrderInput = {
    amount?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentConfirmations?: PaymentConfirmationsUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentConfirmations?: PaymentConfirmationsUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type OrdersCreateWithoutOrderItemsInput = {
    amount: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutOrdersInput
    payment?: PaymentsCreateNestedOneWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    amount: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    payment?: PaymentsUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutOrderItemsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrderItemsInput, OrdersUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductsCreateWithoutOrderItemsInput = {
    name: string
    description?: string | null
    price: string
    stock: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories: CategoriesCreateNestedOneWithoutProductsInput
    licenses?: LicensesKeyCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    name: string
    description?: string | null
    price: string
    stock: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    licenses?: LicensesKeyUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutOrderItemsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutOrderItemsInput, ProductsUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrdersUpsertWithoutOrderItemsInput = {
    update: XOR<OrdersUpdateWithoutOrderItemsInput, OrdersUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrdersCreateWithoutOrderItemsInput, OrdersUncheckedCreateWithoutOrderItemsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrderItemsInput, OrdersUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrdersUpdateWithoutOrderItemsInput = {
    amount?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    payment?: PaymentsUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    payment?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type ProductsUpsertWithoutOrderItemsInput = {
    update: XOR<ProductsUpdateWithoutOrderItemsInput, ProductsUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductsCreateWithoutOrderItemsInput, ProductsUncheckedCreateWithoutOrderItemsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutOrderItemsInput, ProductsUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductsUpdateWithoutOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    licenses?: LicensesKeyUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    licenses?: LicensesKeyUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UsersCreateWithoutTestimonialsInput = {
    fullname: string
    email: string
    password: string
    role?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactsCreateNestedOneWithoutUserInput
    orders?: OrdersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTestimonialsInput = {
    id?: number
    fullname: string
    email: string
    password: string
    role?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactsUncheckedCreateNestedOneWithoutUserInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTestimonialsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTestimonialsInput, UsersUncheckedCreateWithoutTestimonialsInput>
  }

  export type UsersUpsertWithoutTestimonialsInput = {
    update: XOR<UsersUpdateWithoutTestimonialsInput, UsersUncheckedUpdateWithoutTestimonialsInput>
    create: XOR<UsersCreateWithoutTestimonialsInput, UsersUncheckedCreateWithoutTestimonialsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTestimonialsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTestimonialsInput, UsersUncheckedUpdateWithoutTestimonialsInput>
  }

  export type UsersUpdateWithoutTestimonialsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactsUpdateOneWithoutUserNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTestimonialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactsUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentConfirmationsCreateWithoutPaymentInput = {
    bankName: string
    bankAccountName: string
    bankAccountNumber: string
    code: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentConfirmationsUncheckedCreateWithoutPaymentInput = {
    id?: number
    bankName: string
    bankAccountName: string
    bankAccountNumber: string
    code: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentConfirmationsCreateOrConnectWithoutPaymentInput = {
    where: PaymentConfirmationsWhereUniqueInput
    create: XOR<PaymentConfirmationsCreateWithoutPaymentInput, PaymentConfirmationsUncheckedCreateWithoutPaymentInput>
  }

  export type OrdersCreateWithoutPaymentInput = {
    amount: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutPaymentInput = {
    id?: number
    amount: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutPaymentInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentConfirmationsUpsertWithoutPaymentInput = {
    update: XOR<PaymentConfirmationsUpdateWithoutPaymentInput, PaymentConfirmationsUncheckedUpdateWithoutPaymentInput>
    create: XOR<PaymentConfirmationsCreateWithoutPaymentInput, PaymentConfirmationsUncheckedCreateWithoutPaymentInput>
    where?: PaymentConfirmationsWhereInput
  }

  export type PaymentConfirmationsUpdateToOneWithWhereWithoutPaymentInput = {
    where?: PaymentConfirmationsWhereInput
    data: XOR<PaymentConfirmationsUpdateWithoutPaymentInput, PaymentConfirmationsUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentConfirmationsUpdateWithoutPaymentInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    bankAccountName?: StringFieldUpdateOperationsInput | string
    bankAccountNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentConfirmationsUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    bankAccountName?: StringFieldUpdateOperationsInput | string
    bankAccountNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpsertWithoutPaymentInput = {
    update: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type OrdersUpdateWithoutPaymentInput = {
    amount?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: OrderItemsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    orderItems?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type PaymentsCreateWithoutPaymentConfirmationsInput = {
    amount: string
    method: string
    code: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateWithoutPaymentConfirmationsInput = {
    id?: number
    amount: string
    method: string
    code: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: number
  }

  export type PaymentsCreateOrConnectWithoutPaymentConfirmationsInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutPaymentConfirmationsInput, PaymentsUncheckedCreateWithoutPaymentConfirmationsInput>
  }

  export type PaymentsUpsertWithoutPaymentConfirmationsInput = {
    update: XOR<PaymentsUpdateWithoutPaymentConfirmationsInput, PaymentsUncheckedUpdateWithoutPaymentConfirmationsInput>
    create: XOR<PaymentsCreateWithoutPaymentConfirmationsInput, PaymentsUncheckedCreateWithoutPaymentConfirmationsInput>
    where?: PaymentsWhereInput
  }

  export type PaymentsUpdateToOneWithWhereWithoutPaymentConfirmationsInput = {
    where?: PaymentsWhereInput
    data: XOR<PaymentsUpdateWithoutPaymentConfirmationsInput, PaymentsUncheckedUpdateWithoutPaymentConfirmationsInput>
  }

  export type PaymentsUpdateWithoutPaymentConfirmationsInput = {
    amount?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutPaymentConfirmationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type TestimonialsCreateManyUserInput = {
    id?: number
    content: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateManyUserInput = {
    id?: number
    amount: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialsUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutUserInput = {
    amount?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemsUpdateManyWithoutOrderNestedInput
    payment?: PaymentsUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateManyCategoriesInput = {
    id?: number
    name: string
    description?: string | null
    price: string
    stock: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicensesKeyUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicensesKeyUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicensesKeyCreateManyProductInput = {
    id?: number
    encryptedKey: string
    keyHash: string
    activationLimit: number
    status: number
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierId?: number | null
  }

  export type OrderItemsCreateManyProductInput = {
    id?: number
    quantity: number
    price: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: number
  }

  export type LicensesKeyUpdateWithoutProductInput = {
    encryptedKey?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    activationLimit?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: supplierUpdateOneWithoutLicensesNestedInput
  }

  export type LicensesKeyUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    encryptedKey?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    activationLimit?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LicensesKeyUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    encryptedKey?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    activationLimit?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderItemsUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemsUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type LicensesKeyCreateManySupplierInput = {
    id?: number
    encryptedKey: string
    keyHash: string
    activationLimit: number
    status: number
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
  }

  export type LicensesKeyUpdateWithoutSupplierInput = {
    encryptedKey?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    activationLimit?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutLicensesNestedInput
  }

  export type LicensesKeyUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    encryptedKey?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    activationLimit?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type LicensesKeyUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    encryptedKey?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    activationLimit?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemsCreateManyOrderInput = {
    id?: number
    quantity: number
    price: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
  }

  export type OrderItemsUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}