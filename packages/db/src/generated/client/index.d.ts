
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
 * Model Merchant
 * 
 */
export type Merchant = $Result.DefaultSelection<Prisma.$MerchantPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ConnectorInstance
 * 
 */
export type ConnectorInstance = $Result.DefaultSelection<Prisma.$ConnectorInstancePayload>
/**
 * Model UnifiedOrder
 * 
 */
export type UnifiedOrder = $Result.DefaultSelection<Prisma.$UnifiedOrderPayload>
/**
 * Model UnifiedCustomer
 * 
 */
export type UnifiedCustomer = $Result.DefaultSelection<Prisma.$UnifiedCustomerPayload>
/**
 * Model UnifiedCampaign
 * 
 */
export type UnifiedCampaign = $Result.DefaultSelection<Prisma.$UnifiedCampaignPayload>
/**
 * Model UnifiedInventory
 * 
 */
export type UnifiedInventory = $Result.DefaultSelection<Prisma.$UnifiedInventoryPayload>
/**
 * Model AgentRecommendation
 * 
 */
export type AgentRecommendation = $Result.DefaultSelection<Prisma.$AgentRecommendationPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model AgentRunLog
 * 
 */
export type AgentRunLog = $Result.DefaultSelection<Prisma.$AgentRunLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Merchants
 * const merchants = await prisma.merchant.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Merchants
   * const merchants = await prisma.merchant.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.merchant`: Exposes CRUD operations for the **Merchant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merchants
    * const merchants = await prisma.merchant.findMany()
    * ```
    */
  get merchant(): Prisma.MerchantDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.connectorInstance`: Exposes CRUD operations for the **ConnectorInstance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConnectorInstances
    * const connectorInstances = await prisma.connectorInstance.findMany()
    * ```
    */
  get connectorInstance(): Prisma.ConnectorInstanceDelegate<ExtArgs>;

  /**
   * `prisma.unifiedOrder`: Exposes CRUD operations for the **UnifiedOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnifiedOrders
    * const unifiedOrders = await prisma.unifiedOrder.findMany()
    * ```
    */
  get unifiedOrder(): Prisma.UnifiedOrderDelegate<ExtArgs>;

  /**
   * `prisma.unifiedCustomer`: Exposes CRUD operations for the **UnifiedCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnifiedCustomers
    * const unifiedCustomers = await prisma.unifiedCustomer.findMany()
    * ```
    */
  get unifiedCustomer(): Prisma.UnifiedCustomerDelegate<ExtArgs>;

  /**
   * `prisma.unifiedCampaign`: Exposes CRUD operations for the **UnifiedCampaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnifiedCampaigns
    * const unifiedCampaigns = await prisma.unifiedCampaign.findMany()
    * ```
    */
  get unifiedCampaign(): Prisma.UnifiedCampaignDelegate<ExtArgs>;

  /**
   * `prisma.unifiedInventory`: Exposes CRUD operations for the **UnifiedInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnifiedInventories
    * const unifiedInventories = await prisma.unifiedInventory.findMany()
    * ```
    */
  get unifiedInventory(): Prisma.UnifiedInventoryDelegate<ExtArgs>;

  /**
   * `prisma.agentRecommendation`: Exposes CRUD operations for the **AgentRecommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentRecommendations
    * const agentRecommendations = await prisma.agentRecommendation.findMany()
    * ```
    */
  get agentRecommendation(): Prisma.AgentRecommendationDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.agentRunLog`: Exposes CRUD operations for the **AgentRunLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentRunLogs
    * const agentRunLogs = await prisma.agentRunLog.findMany()
    * ```
    */
  get agentRunLog(): Prisma.AgentRunLogDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Merchant: 'Merchant',
    User: 'User',
    ConnectorInstance: 'ConnectorInstance',
    UnifiedOrder: 'UnifiedOrder',
    UnifiedCustomer: 'UnifiedCustomer',
    UnifiedCampaign: 'UnifiedCampaign',
    UnifiedInventory: 'UnifiedInventory',
    AgentRecommendation: 'AgentRecommendation',
    AuditLog: 'AuditLog',
    AgentRunLog: 'AgentRunLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "merchant" | "user" | "connectorInstance" | "unifiedOrder" | "unifiedCustomer" | "unifiedCampaign" | "unifiedInventory" | "agentRecommendation" | "auditLog" | "agentRunLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Merchant: {
        payload: Prisma.$MerchantPayload<ExtArgs>
        fields: Prisma.MerchantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findFirst: {
            args: Prisma.MerchantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findMany: {
            args: Prisma.MerchantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          create: {
            args: Prisma.MerchantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          createMany: {
            args: Prisma.MerchantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          delete: {
            args: Prisma.MerchantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          update: {
            args: Prisma.MerchantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          deleteMany: {
            args: Prisma.MerchantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MerchantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          aggregate: {
            args: Prisma.MerchantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchant>
          }
          groupBy: {
            args: Prisma.MerchantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchantCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ConnectorInstance: {
        payload: Prisma.$ConnectorInstancePayload<ExtArgs>
        fields: Prisma.ConnectorInstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectorInstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorInstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectorInstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorInstancePayload>
          }
          findFirst: {
            args: Prisma.ConnectorInstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorInstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectorInstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorInstancePayload>
          }
          findMany: {
            args: Prisma.ConnectorInstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorInstancePayload>[]
          }
          create: {
            args: Prisma.ConnectorInstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorInstancePayload>
          }
          createMany: {
            args: Prisma.ConnectorInstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectorInstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorInstancePayload>[]
          }
          delete: {
            args: Prisma.ConnectorInstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorInstancePayload>
          }
          update: {
            args: Prisma.ConnectorInstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorInstancePayload>
          }
          deleteMany: {
            args: Prisma.ConnectorInstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectorInstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConnectorInstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorInstancePayload>
          }
          aggregate: {
            args: Prisma.ConnectorInstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnectorInstance>
          }
          groupBy: {
            args: Prisma.ConnectorInstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectorInstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectorInstanceCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectorInstanceCountAggregateOutputType> | number
          }
        }
      }
      UnifiedOrder: {
        payload: Prisma.$UnifiedOrderPayload<ExtArgs>
        fields: Prisma.UnifiedOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnifiedOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnifiedOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedOrderPayload>
          }
          findFirst: {
            args: Prisma.UnifiedOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnifiedOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedOrderPayload>
          }
          findMany: {
            args: Prisma.UnifiedOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedOrderPayload>[]
          }
          create: {
            args: Prisma.UnifiedOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedOrderPayload>
          }
          createMany: {
            args: Prisma.UnifiedOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnifiedOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedOrderPayload>[]
          }
          delete: {
            args: Prisma.UnifiedOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedOrderPayload>
          }
          update: {
            args: Prisma.UnifiedOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedOrderPayload>
          }
          deleteMany: {
            args: Prisma.UnifiedOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnifiedOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnifiedOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedOrderPayload>
          }
          aggregate: {
            args: Prisma.UnifiedOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnifiedOrder>
          }
          groupBy: {
            args: Prisma.UnifiedOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnifiedOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnifiedOrderCountArgs<ExtArgs>
            result: $Utils.Optional<UnifiedOrderCountAggregateOutputType> | number
          }
        }
      }
      UnifiedCustomer: {
        payload: Prisma.$UnifiedCustomerPayload<ExtArgs>
        fields: Prisma.UnifiedCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnifiedCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnifiedCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCustomerPayload>
          }
          findFirst: {
            args: Prisma.UnifiedCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnifiedCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCustomerPayload>
          }
          findMany: {
            args: Prisma.UnifiedCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCustomerPayload>[]
          }
          create: {
            args: Prisma.UnifiedCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCustomerPayload>
          }
          createMany: {
            args: Prisma.UnifiedCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnifiedCustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCustomerPayload>[]
          }
          delete: {
            args: Prisma.UnifiedCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCustomerPayload>
          }
          update: {
            args: Prisma.UnifiedCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCustomerPayload>
          }
          deleteMany: {
            args: Prisma.UnifiedCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnifiedCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnifiedCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCustomerPayload>
          }
          aggregate: {
            args: Prisma.UnifiedCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnifiedCustomer>
          }
          groupBy: {
            args: Prisma.UnifiedCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnifiedCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnifiedCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<UnifiedCustomerCountAggregateOutputType> | number
          }
        }
      }
      UnifiedCampaign: {
        payload: Prisma.$UnifiedCampaignPayload<ExtArgs>
        fields: Prisma.UnifiedCampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnifiedCampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnifiedCampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCampaignPayload>
          }
          findFirst: {
            args: Prisma.UnifiedCampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnifiedCampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCampaignPayload>
          }
          findMany: {
            args: Prisma.UnifiedCampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCampaignPayload>[]
          }
          create: {
            args: Prisma.UnifiedCampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCampaignPayload>
          }
          createMany: {
            args: Prisma.UnifiedCampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnifiedCampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCampaignPayload>[]
          }
          delete: {
            args: Prisma.UnifiedCampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCampaignPayload>
          }
          update: {
            args: Prisma.UnifiedCampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCampaignPayload>
          }
          deleteMany: {
            args: Prisma.UnifiedCampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnifiedCampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnifiedCampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedCampaignPayload>
          }
          aggregate: {
            args: Prisma.UnifiedCampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnifiedCampaign>
          }
          groupBy: {
            args: Prisma.UnifiedCampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnifiedCampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnifiedCampaignCountArgs<ExtArgs>
            result: $Utils.Optional<UnifiedCampaignCountAggregateOutputType> | number
          }
        }
      }
      UnifiedInventory: {
        payload: Prisma.$UnifiedInventoryPayload<ExtArgs>
        fields: Prisma.UnifiedInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnifiedInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnifiedInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedInventoryPayload>
          }
          findFirst: {
            args: Prisma.UnifiedInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnifiedInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedInventoryPayload>
          }
          findMany: {
            args: Prisma.UnifiedInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedInventoryPayload>[]
          }
          create: {
            args: Prisma.UnifiedInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedInventoryPayload>
          }
          createMany: {
            args: Prisma.UnifiedInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnifiedInventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedInventoryPayload>[]
          }
          delete: {
            args: Prisma.UnifiedInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedInventoryPayload>
          }
          update: {
            args: Prisma.UnifiedInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedInventoryPayload>
          }
          deleteMany: {
            args: Prisma.UnifiedInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnifiedInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnifiedInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiedInventoryPayload>
          }
          aggregate: {
            args: Prisma.UnifiedInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnifiedInventory>
          }
          groupBy: {
            args: Prisma.UnifiedInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnifiedInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnifiedInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<UnifiedInventoryCountAggregateOutputType> | number
          }
        }
      }
      AgentRecommendation: {
        payload: Prisma.$AgentRecommendationPayload<ExtArgs>
        fields: Prisma.AgentRecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentRecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentRecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRecommendationPayload>
          }
          findFirst: {
            args: Prisma.AgentRecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentRecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRecommendationPayload>
          }
          findMany: {
            args: Prisma.AgentRecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRecommendationPayload>[]
          }
          create: {
            args: Prisma.AgentRecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRecommendationPayload>
          }
          createMany: {
            args: Prisma.AgentRecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentRecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRecommendationPayload>[]
          }
          delete: {
            args: Prisma.AgentRecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRecommendationPayload>
          }
          update: {
            args: Prisma.AgentRecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRecommendationPayload>
          }
          deleteMany: {
            args: Prisma.AgentRecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentRecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentRecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRecommendationPayload>
          }
          aggregate: {
            args: Prisma.AgentRecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentRecommendation>
          }
          groupBy: {
            args: Prisma.AgentRecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentRecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentRecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<AgentRecommendationCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      AgentRunLog: {
        payload: Prisma.$AgentRunLogPayload<ExtArgs>
        fields: Prisma.AgentRunLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentRunLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentRunLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunLogPayload>
          }
          findFirst: {
            args: Prisma.AgentRunLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentRunLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunLogPayload>
          }
          findMany: {
            args: Prisma.AgentRunLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunLogPayload>[]
          }
          create: {
            args: Prisma.AgentRunLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunLogPayload>
          }
          createMany: {
            args: Prisma.AgentRunLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentRunLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunLogPayload>[]
          }
          delete: {
            args: Prisma.AgentRunLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunLogPayload>
          }
          update: {
            args: Prisma.AgentRunLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunLogPayload>
          }
          deleteMany: {
            args: Prisma.AgentRunLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentRunLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentRunLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunLogPayload>
          }
          aggregate: {
            args: Prisma.AgentRunLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentRunLog>
          }
          groupBy: {
            args: Prisma.AgentRunLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentRunLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentRunLogCountArgs<ExtArgs>
            result: $Utils.Optional<AgentRunLogCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type MerchantCountOutputType
   */

  export type MerchantCountOutputType = {
    connectorInstances: number
    orders: number
    customers: number
    campaigns: number
    inventory: number
    recommendations: number
    auditLogs: number
  }

  export type MerchantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connectorInstances?: boolean | MerchantCountOutputTypeCountConnectorInstancesArgs
    orders?: boolean | MerchantCountOutputTypeCountOrdersArgs
    customers?: boolean | MerchantCountOutputTypeCountCustomersArgs
    campaigns?: boolean | MerchantCountOutputTypeCountCampaignsArgs
    inventory?: boolean | MerchantCountOutputTypeCountInventoryArgs
    recommendations?: boolean | MerchantCountOutputTypeCountRecommendationsArgs
    auditLogs?: boolean | MerchantCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCountOutputType
     */
    select?: MerchantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountConnectorInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectorInstanceWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnifiedOrderWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnifiedCustomerWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnifiedCampaignWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnifiedInventoryWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentRecommendationWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Merchant
   */

  export type AggregateMerchant = {
    _count: MerchantCountAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  export type MerchantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    timezone: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type MerchantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    timezone: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type MerchantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    timezone: number
    createdAt: number
    isActive: number
    _all: number
  }


  export type MerchantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    timezone?: true
    createdAt?: true
    isActive?: true
  }

  export type MerchantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    timezone?: true
    createdAt?: true
    isActive?: true
  }

  export type MerchantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    timezone?: true
    createdAt?: true
    isActive?: true
    _all?: true
  }

  export type MerchantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchant to aggregate.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Merchants
    **/
    _count?: true | MerchantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantMaxAggregateInputType
  }

  export type GetMerchantAggregateType<T extends MerchantAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchant[P]>
      : GetScalarType<T[P], AggregateMerchant[P]>
  }




  export type MerchantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantWhereInput
    orderBy?: MerchantOrderByWithAggregationInput | MerchantOrderByWithAggregationInput[]
    by: MerchantScalarFieldEnum[] | MerchantScalarFieldEnum
    having?: MerchantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantCountAggregateInputType | true
    _min?: MerchantMinAggregateInputType
    _max?: MerchantMaxAggregateInputType
  }

  export type MerchantGroupByOutputType = {
    id: string
    name: string
    slug: string
    timezone: string
    createdAt: Date
    isActive: boolean
    _count: MerchantCountAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  type GetMerchantGroupByPayload<T extends MerchantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantGroupByOutputType[P]>
        }
      >
    >


  export type MerchantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    timezone?: boolean
    createdAt?: boolean
    isActive?: boolean
    user?: boolean | Merchant$userArgs<ExtArgs>
    connectorInstances?: boolean | Merchant$connectorInstancesArgs<ExtArgs>
    orders?: boolean | Merchant$ordersArgs<ExtArgs>
    customers?: boolean | Merchant$customersArgs<ExtArgs>
    campaigns?: boolean | Merchant$campaignsArgs<ExtArgs>
    inventory?: boolean | Merchant$inventoryArgs<ExtArgs>
    recommendations?: boolean | Merchant$recommendationsArgs<ExtArgs>
    auditLogs?: boolean | Merchant$auditLogsArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    timezone?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    timezone?: boolean
    createdAt?: boolean
    isActive?: boolean
  }

  export type MerchantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Merchant$userArgs<ExtArgs>
    connectorInstances?: boolean | Merchant$connectorInstancesArgs<ExtArgs>
    orders?: boolean | Merchant$ordersArgs<ExtArgs>
    customers?: boolean | Merchant$customersArgs<ExtArgs>
    campaigns?: boolean | Merchant$campaignsArgs<ExtArgs>
    inventory?: boolean | Merchant$inventoryArgs<ExtArgs>
    recommendations?: boolean | Merchant$recommendationsArgs<ExtArgs>
    auditLogs?: boolean | Merchant$auditLogsArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MerchantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MerchantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Merchant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      connectorInstances: Prisma.$ConnectorInstancePayload<ExtArgs>[]
      orders: Prisma.$UnifiedOrderPayload<ExtArgs>[]
      customers: Prisma.$UnifiedCustomerPayload<ExtArgs>[]
      campaigns: Prisma.$UnifiedCampaignPayload<ExtArgs>[]
      inventory: Prisma.$UnifiedInventoryPayload<ExtArgs>[]
      recommendations: Prisma.$AgentRecommendationPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      timezone: string
      createdAt: Date
      isActive: boolean
    }, ExtArgs["result"]["merchant"]>
    composites: {}
  }

  type MerchantGetPayload<S extends boolean | null | undefined | MerchantDefaultArgs> = $Result.GetResult<Prisma.$MerchantPayload, S>

  type MerchantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MerchantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MerchantCountAggregateInputType | true
    }

  export interface MerchantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Merchant'], meta: { name: 'Merchant' } }
    /**
     * Find zero or one Merchant that matches the filter.
     * @param {MerchantFindUniqueArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchantFindUniqueArgs>(args: SelectSubset<T, MerchantFindUniqueArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Merchant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MerchantFindUniqueOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchantFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Merchant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchantFindFirstArgs>(args?: SelectSubset<T, MerchantFindFirstArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Merchant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchantFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merchants
     * const merchants = await prisma.merchant.findMany()
     * 
     * // Get first 10 Merchants
     * const merchants = await prisma.merchant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantWithIdOnly = await prisma.merchant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchantFindManyArgs>(args?: SelectSubset<T, MerchantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Merchant.
     * @param {MerchantCreateArgs} args - Arguments to create a Merchant.
     * @example
     * // Create one Merchant
     * const Merchant = await prisma.merchant.create({
     *   data: {
     *     // ... data to create a Merchant
     *   }
     * })
     * 
     */
    create<T extends MerchantCreateArgs>(args: SelectSubset<T, MerchantCreateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Merchants.
     * @param {MerchantCreateManyArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchantCreateManyArgs>(args?: SelectSubset<T, MerchantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merchants and returns the data saved in the database.
     * @param {MerchantCreateManyAndReturnArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchantCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Merchant.
     * @param {MerchantDeleteArgs} args - Arguments to delete one Merchant.
     * @example
     * // Delete one Merchant
     * const Merchant = await prisma.merchant.delete({
     *   where: {
     *     // ... filter to delete one Merchant
     *   }
     * })
     * 
     */
    delete<T extends MerchantDeleteArgs>(args: SelectSubset<T, MerchantDeleteArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Merchant.
     * @param {MerchantUpdateArgs} args - Arguments to update one Merchant.
     * @example
     * // Update one Merchant
     * const merchant = await prisma.merchant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchantUpdateArgs>(args: SelectSubset<T, MerchantUpdateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Merchants.
     * @param {MerchantDeleteManyArgs} args - Arguments to filter Merchants to delete.
     * @example
     * // Delete a few Merchants
     * const { count } = await prisma.merchant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchantDeleteManyArgs>(args?: SelectSubset<T, MerchantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchantUpdateManyArgs>(args: SelectSubset<T, MerchantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Merchant.
     * @param {MerchantUpsertArgs} args - Arguments to update or create a Merchant.
     * @example
     * // Update or create a Merchant
     * const merchant = await prisma.merchant.upsert({
     *   create: {
     *     // ... data to create a Merchant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merchant we want to update
     *   }
     * })
     */
    upsert<T extends MerchantUpsertArgs>(args: SelectSubset<T, MerchantUpsertArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCountArgs} args - Arguments to filter Merchants to count.
     * @example
     * // Count the number of Merchants
     * const count = await prisma.merchant.count({
     *   where: {
     *     // ... the filter for the Merchants we want to count
     *   }
     * })
    **/
    count<T extends MerchantCountArgs>(
      args?: Subset<T, MerchantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MerchantAggregateArgs>(args: Subset<T, MerchantAggregateArgs>): Prisma.PrismaPromise<GetMerchantAggregateType<T>>

    /**
     * Group by Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantGroupByArgs} args - Group by arguments.
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
      T extends MerchantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchantGroupByArgs['orderBy'] }
        : { orderBy?: MerchantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MerchantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Merchant model
   */
  readonly fields: MerchantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Merchant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Merchant$userArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    connectorInstances<T extends Merchant$connectorInstancesArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$connectorInstancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectorInstancePayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends Merchant$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiedOrderPayload<ExtArgs>, T, "findMany"> | Null>
    customers<T extends Merchant$customersArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiedCustomerPayload<ExtArgs>, T, "findMany"> | Null>
    campaigns<T extends Merchant$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiedCampaignPayload<ExtArgs>, T, "findMany"> | Null>
    inventory<T extends Merchant$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiedInventoryPayload<ExtArgs>, T, "findMany"> | Null>
    recommendations<T extends Merchant$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRecommendationPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends Merchant$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Merchant model
   */ 
  interface MerchantFieldRefs {
    readonly id: FieldRef<"Merchant", 'String'>
    readonly name: FieldRef<"Merchant", 'String'>
    readonly slug: FieldRef<"Merchant", 'String'>
    readonly timezone: FieldRef<"Merchant", 'String'>
    readonly createdAt: FieldRef<"Merchant", 'DateTime'>
    readonly isActive: FieldRef<"Merchant", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Merchant findUnique
   */
  export type MerchantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findUniqueOrThrow
   */
  export type MerchantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findFirst
   */
  export type MerchantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findFirstOrThrow
   */
  export type MerchantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findMany
   */
  export type MerchantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchants to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant create
   */
  export type MerchantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to create a Merchant.
     */
    data: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
  }

  /**
   * Merchant createMany
   */
  export type MerchantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant createManyAndReturn
   */
  export type MerchantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant update
   */
  export type MerchantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to update a Merchant.
     */
    data: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
    /**
     * Choose, which Merchant to update.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant updateMany
   */
  export type MerchantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
  }

  /**
   * Merchant upsert
   */
  export type MerchantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The filter to search for the Merchant to update in case it exists.
     */
    where: MerchantWhereUniqueInput
    /**
     * In case the Merchant found by the `where` argument doesn't exist, create a new Merchant with this data.
     */
    create: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
    /**
     * In case the Merchant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
  }

  /**
   * Merchant delete
   */
  export type MerchantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter which Merchant to delete.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant deleteMany
   */
  export type MerchantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchants to delete
     */
    where?: MerchantWhereInput
  }

  /**
   * Merchant.user
   */
  export type Merchant$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Merchant.connectorInstances
   */
  export type Merchant$connectorInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorInstance
     */
    select?: ConnectorInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInstanceInclude<ExtArgs> | null
    where?: ConnectorInstanceWhereInput
    orderBy?: ConnectorInstanceOrderByWithRelationInput | ConnectorInstanceOrderByWithRelationInput[]
    cursor?: ConnectorInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectorInstanceScalarFieldEnum | ConnectorInstanceScalarFieldEnum[]
  }

  /**
   * Merchant.orders
   */
  export type Merchant$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedOrder
     */
    select?: UnifiedOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedOrderInclude<ExtArgs> | null
    where?: UnifiedOrderWhereInput
    orderBy?: UnifiedOrderOrderByWithRelationInput | UnifiedOrderOrderByWithRelationInput[]
    cursor?: UnifiedOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnifiedOrderScalarFieldEnum | UnifiedOrderScalarFieldEnum[]
  }

  /**
   * Merchant.customers
   */
  export type Merchant$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCustomer
     */
    select?: UnifiedCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCustomerInclude<ExtArgs> | null
    where?: UnifiedCustomerWhereInput
    orderBy?: UnifiedCustomerOrderByWithRelationInput | UnifiedCustomerOrderByWithRelationInput[]
    cursor?: UnifiedCustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnifiedCustomerScalarFieldEnum | UnifiedCustomerScalarFieldEnum[]
  }

  /**
   * Merchant.campaigns
   */
  export type Merchant$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCampaign
     */
    select?: UnifiedCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCampaignInclude<ExtArgs> | null
    where?: UnifiedCampaignWhereInput
    orderBy?: UnifiedCampaignOrderByWithRelationInput | UnifiedCampaignOrderByWithRelationInput[]
    cursor?: UnifiedCampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnifiedCampaignScalarFieldEnum | UnifiedCampaignScalarFieldEnum[]
  }

  /**
   * Merchant.inventory
   */
  export type Merchant$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedInventory
     */
    select?: UnifiedInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedInventoryInclude<ExtArgs> | null
    where?: UnifiedInventoryWhereInput
    orderBy?: UnifiedInventoryOrderByWithRelationInput | UnifiedInventoryOrderByWithRelationInput[]
    cursor?: UnifiedInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnifiedInventoryScalarFieldEnum | UnifiedInventoryScalarFieldEnum[]
  }

  /**
   * Merchant.recommendations
   */
  export type Merchant$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRecommendation
     */
    select?: AgentRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRecommendationInclude<ExtArgs> | null
    where?: AgentRecommendationWhereInput
    orderBy?: AgentRecommendationOrderByWithRelationInput | AgentRecommendationOrderByWithRelationInput[]
    cursor?: AgentRecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentRecommendationScalarFieldEnum | AgentRecommendationScalarFieldEnum[]
  }

  /**
   * Merchant.auditLogs
   */
  export type Merchant$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Merchant without action
   */
  export type MerchantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    merchantId: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    merchantId: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    merchantId: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    merchantId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    merchantId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    merchantId?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    merchantId: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    merchantId?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    merchantId?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    merchantId?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      merchantId: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly merchantId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ConnectorInstance
   */

  export type AggregateConnectorInstance = {
    _count: ConnectorInstanceCountAggregateOutputType | null
    _min: ConnectorInstanceMinAggregateOutputType | null
    _max: ConnectorInstanceMaxAggregateOutputType | null
  }

  export type ConnectorInstanceMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    connectorType: string | null
    status: string | null
    lastSyncedAt: Date | null
    createdAt: Date | null
  }

  export type ConnectorInstanceMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    connectorType: string | null
    status: string | null
    lastSyncedAt: Date | null
    createdAt: Date | null
  }

  export type ConnectorInstanceCountAggregateOutputType = {
    id: number
    merchantId: number
    connectorType: number
    status: number
    lastSyncedAt: number
    syncCursor: number
    config: number
    createdAt: number
    _all: number
  }


  export type ConnectorInstanceMinAggregateInputType = {
    id?: true
    merchantId?: true
    connectorType?: true
    status?: true
    lastSyncedAt?: true
    createdAt?: true
  }

  export type ConnectorInstanceMaxAggregateInputType = {
    id?: true
    merchantId?: true
    connectorType?: true
    status?: true
    lastSyncedAt?: true
    createdAt?: true
  }

  export type ConnectorInstanceCountAggregateInputType = {
    id?: true
    merchantId?: true
    connectorType?: true
    status?: true
    lastSyncedAt?: true
    syncCursor?: true
    config?: true
    createdAt?: true
    _all?: true
  }

  export type ConnectorInstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectorInstance to aggregate.
     */
    where?: ConnectorInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectorInstances to fetch.
     */
    orderBy?: ConnectorInstanceOrderByWithRelationInput | ConnectorInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectorInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectorInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectorInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConnectorInstances
    **/
    _count?: true | ConnectorInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectorInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectorInstanceMaxAggregateInputType
  }

  export type GetConnectorInstanceAggregateType<T extends ConnectorInstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateConnectorInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnectorInstance[P]>
      : GetScalarType<T[P], AggregateConnectorInstance[P]>
  }




  export type ConnectorInstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectorInstanceWhereInput
    orderBy?: ConnectorInstanceOrderByWithAggregationInput | ConnectorInstanceOrderByWithAggregationInput[]
    by: ConnectorInstanceScalarFieldEnum[] | ConnectorInstanceScalarFieldEnum
    having?: ConnectorInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectorInstanceCountAggregateInputType | true
    _min?: ConnectorInstanceMinAggregateInputType
    _max?: ConnectorInstanceMaxAggregateInputType
  }

  export type ConnectorInstanceGroupByOutputType = {
    id: string
    merchantId: string
    connectorType: string
    status: string
    lastSyncedAt: Date | null
    syncCursor: JsonValue | null
    config: JsonValue | null
    createdAt: Date
    _count: ConnectorInstanceCountAggregateOutputType | null
    _min: ConnectorInstanceMinAggregateOutputType | null
    _max: ConnectorInstanceMaxAggregateOutputType | null
  }

  type GetConnectorInstanceGroupByPayload<T extends ConnectorInstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectorInstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectorInstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectorInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectorInstanceGroupByOutputType[P]>
        }
      >
    >


  export type ConnectorInstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    connectorType?: boolean
    status?: boolean
    lastSyncedAt?: boolean
    syncCursor?: boolean
    config?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connectorInstance"]>

  export type ConnectorInstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    connectorType?: boolean
    status?: boolean
    lastSyncedAt?: boolean
    syncCursor?: boolean
    config?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connectorInstance"]>

  export type ConnectorInstanceSelectScalar = {
    id?: boolean
    merchantId?: boolean
    connectorType?: boolean
    status?: boolean
    lastSyncedAt?: boolean
    syncCursor?: boolean
    config?: boolean
    createdAt?: boolean
  }

  export type ConnectorInstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type ConnectorInstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $ConnectorInstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConnectorInstance"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      connectorType: string
      status: string
      lastSyncedAt: Date | null
      syncCursor: Prisma.JsonValue | null
      config: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["connectorInstance"]>
    composites: {}
  }

  type ConnectorInstanceGetPayload<S extends boolean | null | undefined | ConnectorInstanceDefaultArgs> = $Result.GetResult<Prisma.$ConnectorInstancePayload, S>

  type ConnectorInstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConnectorInstanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConnectorInstanceCountAggregateInputType | true
    }

  export interface ConnectorInstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConnectorInstance'], meta: { name: 'ConnectorInstance' } }
    /**
     * Find zero or one ConnectorInstance that matches the filter.
     * @param {ConnectorInstanceFindUniqueArgs} args - Arguments to find a ConnectorInstance
     * @example
     * // Get one ConnectorInstance
     * const connectorInstance = await prisma.connectorInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectorInstanceFindUniqueArgs>(args: SelectSubset<T, ConnectorInstanceFindUniqueArgs<ExtArgs>>): Prisma__ConnectorInstanceClient<$Result.GetResult<Prisma.$ConnectorInstancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ConnectorInstance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConnectorInstanceFindUniqueOrThrowArgs} args - Arguments to find a ConnectorInstance
     * @example
     * // Get one ConnectorInstance
     * const connectorInstance = await prisma.connectorInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectorInstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectorInstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectorInstanceClient<$Result.GetResult<Prisma.$ConnectorInstancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ConnectorInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorInstanceFindFirstArgs} args - Arguments to find a ConnectorInstance
     * @example
     * // Get one ConnectorInstance
     * const connectorInstance = await prisma.connectorInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectorInstanceFindFirstArgs>(args?: SelectSubset<T, ConnectorInstanceFindFirstArgs<ExtArgs>>): Prisma__ConnectorInstanceClient<$Result.GetResult<Prisma.$ConnectorInstancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ConnectorInstance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorInstanceFindFirstOrThrowArgs} args - Arguments to find a ConnectorInstance
     * @example
     * // Get one ConnectorInstance
     * const connectorInstance = await prisma.connectorInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectorInstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectorInstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectorInstanceClient<$Result.GetResult<Prisma.$ConnectorInstancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ConnectorInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorInstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConnectorInstances
     * const connectorInstances = await prisma.connectorInstance.findMany()
     * 
     * // Get first 10 ConnectorInstances
     * const connectorInstances = await prisma.connectorInstance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectorInstanceWithIdOnly = await prisma.connectorInstance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectorInstanceFindManyArgs>(args?: SelectSubset<T, ConnectorInstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectorInstancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ConnectorInstance.
     * @param {ConnectorInstanceCreateArgs} args - Arguments to create a ConnectorInstance.
     * @example
     * // Create one ConnectorInstance
     * const ConnectorInstance = await prisma.connectorInstance.create({
     *   data: {
     *     // ... data to create a ConnectorInstance
     *   }
     * })
     * 
     */
    create<T extends ConnectorInstanceCreateArgs>(args: SelectSubset<T, ConnectorInstanceCreateArgs<ExtArgs>>): Prisma__ConnectorInstanceClient<$Result.GetResult<Prisma.$ConnectorInstancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ConnectorInstances.
     * @param {ConnectorInstanceCreateManyArgs} args - Arguments to create many ConnectorInstances.
     * @example
     * // Create many ConnectorInstances
     * const connectorInstance = await prisma.connectorInstance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectorInstanceCreateManyArgs>(args?: SelectSubset<T, ConnectorInstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConnectorInstances and returns the data saved in the database.
     * @param {ConnectorInstanceCreateManyAndReturnArgs} args - Arguments to create many ConnectorInstances.
     * @example
     * // Create many ConnectorInstances
     * const connectorInstance = await prisma.connectorInstance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConnectorInstances and only return the `id`
     * const connectorInstanceWithIdOnly = await prisma.connectorInstance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectorInstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectorInstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectorInstancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ConnectorInstance.
     * @param {ConnectorInstanceDeleteArgs} args - Arguments to delete one ConnectorInstance.
     * @example
     * // Delete one ConnectorInstance
     * const ConnectorInstance = await prisma.connectorInstance.delete({
     *   where: {
     *     // ... filter to delete one ConnectorInstance
     *   }
     * })
     * 
     */
    delete<T extends ConnectorInstanceDeleteArgs>(args: SelectSubset<T, ConnectorInstanceDeleteArgs<ExtArgs>>): Prisma__ConnectorInstanceClient<$Result.GetResult<Prisma.$ConnectorInstancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ConnectorInstance.
     * @param {ConnectorInstanceUpdateArgs} args - Arguments to update one ConnectorInstance.
     * @example
     * // Update one ConnectorInstance
     * const connectorInstance = await prisma.connectorInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectorInstanceUpdateArgs>(args: SelectSubset<T, ConnectorInstanceUpdateArgs<ExtArgs>>): Prisma__ConnectorInstanceClient<$Result.GetResult<Prisma.$ConnectorInstancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ConnectorInstances.
     * @param {ConnectorInstanceDeleteManyArgs} args - Arguments to filter ConnectorInstances to delete.
     * @example
     * // Delete a few ConnectorInstances
     * const { count } = await prisma.connectorInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectorInstanceDeleteManyArgs>(args?: SelectSubset<T, ConnectorInstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectorInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConnectorInstances
     * const connectorInstance = await prisma.connectorInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectorInstanceUpdateManyArgs>(args: SelectSubset<T, ConnectorInstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConnectorInstance.
     * @param {ConnectorInstanceUpsertArgs} args - Arguments to update or create a ConnectorInstance.
     * @example
     * // Update or create a ConnectorInstance
     * const connectorInstance = await prisma.connectorInstance.upsert({
     *   create: {
     *     // ... data to create a ConnectorInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConnectorInstance we want to update
     *   }
     * })
     */
    upsert<T extends ConnectorInstanceUpsertArgs>(args: SelectSubset<T, ConnectorInstanceUpsertArgs<ExtArgs>>): Prisma__ConnectorInstanceClient<$Result.GetResult<Prisma.$ConnectorInstancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ConnectorInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorInstanceCountArgs} args - Arguments to filter ConnectorInstances to count.
     * @example
     * // Count the number of ConnectorInstances
     * const count = await prisma.connectorInstance.count({
     *   where: {
     *     // ... the filter for the ConnectorInstances we want to count
     *   }
     * })
    **/
    count<T extends ConnectorInstanceCountArgs>(
      args?: Subset<T, ConnectorInstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectorInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConnectorInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConnectorInstanceAggregateArgs>(args: Subset<T, ConnectorInstanceAggregateArgs>): Prisma.PrismaPromise<GetConnectorInstanceAggregateType<T>>

    /**
     * Group by ConnectorInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorInstanceGroupByArgs} args - Group by arguments.
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
      T extends ConnectorInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectorInstanceGroupByArgs['orderBy'] }
        : { orderBy?: ConnectorInstanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConnectorInstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectorInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConnectorInstance model
   */
  readonly fields: ConnectorInstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConnectorInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectorInstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ConnectorInstance model
   */ 
  interface ConnectorInstanceFieldRefs {
    readonly id: FieldRef<"ConnectorInstance", 'String'>
    readonly merchantId: FieldRef<"ConnectorInstance", 'String'>
    readonly connectorType: FieldRef<"ConnectorInstance", 'String'>
    readonly status: FieldRef<"ConnectorInstance", 'String'>
    readonly lastSyncedAt: FieldRef<"ConnectorInstance", 'DateTime'>
    readonly syncCursor: FieldRef<"ConnectorInstance", 'Json'>
    readonly config: FieldRef<"ConnectorInstance", 'Json'>
    readonly createdAt: FieldRef<"ConnectorInstance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConnectorInstance findUnique
   */
  export type ConnectorInstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorInstance
     */
    select?: ConnectorInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInstanceInclude<ExtArgs> | null
    /**
     * Filter, which ConnectorInstance to fetch.
     */
    where: ConnectorInstanceWhereUniqueInput
  }

  /**
   * ConnectorInstance findUniqueOrThrow
   */
  export type ConnectorInstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorInstance
     */
    select?: ConnectorInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInstanceInclude<ExtArgs> | null
    /**
     * Filter, which ConnectorInstance to fetch.
     */
    where: ConnectorInstanceWhereUniqueInput
  }

  /**
   * ConnectorInstance findFirst
   */
  export type ConnectorInstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorInstance
     */
    select?: ConnectorInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInstanceInclude<ExtArgs> | null
    /**
     * Filter, which ConnectorInstance to fetch.
     */
    where?: ConnectorInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectorInstances to fetch.
     */
    orderBy?: ConnectorInstanceOrderByWithRelationInput | ConnectorInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectorInstances.
     */
    cursor?: ConnectorInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectorInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectorInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectorInstances.
     */
    distinct?: ConnectorInstanceScalarFieldEnum | ConnectorInstanceScalarFieldEnum[]
  }

  /**
   * ConnectorInstance findFirstOrThrow
   */
  export type ConnectorInstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorInstance
     */
    select?: ConnectorInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInstanceInclude<ExtArgs> | null
    /**
     * Filter, which ConnectorInstance to fetch.
     */
    where?: ConnectorInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectorInstances to fetch.
     */
    orderBy?: ConnectorInstanceOrderByWithRelationInput | ConnectorInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectorInstances.
     */
    cursor?: ConnectorInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectorInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectorInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectorInstances.
     */
    distinct?: ConnectorInstanceScalarFieldEnum | ConnectorInstanceScalarFieldEnum[]
  }

  /**
   * ConnectorInstance findMany
   */
  export type ConnectorInstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorInstance
     */
    select?: ConnectorInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInstanceInclude<ExtArgs> | null
    /**
     * Filter, which ConnectorInstances to fetch.
     */
    where?: ConnectorInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectorInstances to fetch.
     */
    orderBy?: ConnectorInstanceOrderByWithRelationInput | ConnectorInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConnectorInstances.
     */
    cursor?: ConnectorInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectorInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectorInstances.
     */
    skip?: number
    distinct?: ConnectorInstanceScalarFieldEnum | ConnectorInstanceScalarFieldEnum[]
  }

  /**
   * ConnectorInstance create
   */
  export type ConnectorInstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorInstance
     */
    select?: ConnectorInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a ConnectorInstance.
     */
    data: XOR<ConnectorInstanceCreateInput, ConnectorInstanceUncheckedCreateInput>
  }

  /**
   * ConnectorInstance createMany
   */
  export type ConnectorInstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConnectorInstances.
     */
    data: ConnectorInstanceCreateManyInput | ConnectorInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConnectorInstance createManyAndReturn
   */
  export type ConnectorInstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorInstance
     */
    select?: ConnectorInstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ConnectorInstances.
     */
    data: ConnectorInstanceCreateManyInput | ConnectorInstanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInstanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConnectorInstance update
   */
  export type ConnectorInstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorInstance
     */
    select?: ConnectorInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a ConnectorInstance.
     */
    data: XOR<ConnectorInstanceUpdateInput, ConnectorInstanceUncheckedUpdateInput>
    /**
     * Choose, which ConnectorInstance to update.
     */
    where: ConnectorInstanceWhereUniqueInput
  }

  /**
   * ConnectorInstance updateMany
   */
  export type ConnectorInstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConnectorInstances.
     */
    data: XOR<ConnectorInstanceUpdateManyMutationInput, ConnectorInstanceUncheckedUpdateManyInput>
    /**
     * Filter which ConnectorInstances to update
     */
    where?: ConnectorInstanceWhereInput
  }

  /**
   * ConnectorInstance upsert
   */
  export type ConnectorInstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorInstance
     */
    select?: ConnectorInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the ConnectorInstance to update in case it exists.
     */
    where: ConnectorInstanceWhereUniqueInput
    /**
     * In case the ConnectorInstance found by the `where` argument doesn't exist, create a new ConnectorInstance with this data.
     */
    create: XOR<ConnectorInstanceCreateInput, ConnectorInstanceUncheckedCreateInput>
    /**
     * In case the ConnectorInstance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectorInstanceUpdateInput, ConnectorInstanceUncheckedUpdateInput>
  }

  /**
   * ConnectorInstance delete
   */
  export type ConnectorInstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorInstance
     */
    select?: ConnectorInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInstanceInclude<ExtArgs> | null
    /**
     * Filter which ConnectorInstance to delete.
     */
    where: ConnectorInstanceWhereUniqueInput
  }

  /**
   * ConnectorInstance deleteMany
   */
  export type ConnectorInstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectorInstances to delete
     */
    where?: ConnectorInstanceWhereInput
  }

  /**
   * ConnectorInstance without action
   */
  export type ConnectorInstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorInstance
     */
    select?: ConnectorInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInstanceInclude<ExtArgs> | null
  }


  /**
   * Model UnifiedOrder
   */

  export type AggregateUnifiedOrder = {
    _count: UnifiedOrderCountAggregateOutputType | null
    _avg: UnifiedOrderAvgAggregateOutputType | null
    _sum: UnifiedOrderSumAggregateOutputType | null
    _min: UnifiedOrderMinAggregateOutputType | null
    _max: UnifiedOrderMaxAggregateOutputType | null
  }

  export type UnifiedOrderAvgAggregateOutputType = {
    subtotalAmount: Decimal | null
    discountAmount: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
    refundedAmount: Decimal | null
    itemCount: number | null
  }

  export type UnifiedOrderSumAggregateOutputType = {
    subtotalAmount: Decimal | null
    discountAmount: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
    refundedAmount: Decimal | null
    itemCount: number | null
  }

  export type UnifiedOrderMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    sourceId: string | null
    sourceConnector: string | null
    sourceSyncedAt: Date | null
    connectorVersion: string | null
    orderNumber: string | null
    status: string | null
    currency: string | null
    subtotalAmount: Decimal | null
    discountAmount: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
    refundedAmount: Decimal | null
    itemCount: number | null
    orderedAt: Date | null
    fulfilledAt: Date | null
    cancelledAt: Date | null
    checksum: string | null
    createdAt: Date | null
  }

  export type UnifiedOrderMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    sourceId: string | null
    sourceConnector: string | null
    sourceSyncedAt: Date | null
    connectorVersion: string | null
    orderNumber: string | null
    status: string | null
    currency: string | null
    subtotalAmount: Decimal | null
    discountAmount: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
    refundedAmount: Decimal | null
    itemCount: number | null
    orderedAt: Date | null
    fulfilledAt: Date | null
    cancelledAt: Date | null
    checksum: string | null
    createdAt: Date | null
  }

  export type UnifiedOrderCountAggregateOutputType = {
    id: number
    merchantId: number
    sourceId: number
    sourceConnector: number
    sourceSyncedAt: number
    connectorVersion: number
    orderNumber: number
    status: number
    currency: number
    subtotalAmount: number
    discountAmount: number
    taxAmount: number
    totalAmount: number
    refundedAmount: number
    itemCount: number
    orderedAt: number
    fulfilledAt: number
    cancelledAt: number
    rawPayload: number
    checksum: number
    createdAt: number
    _all: number
  }


  export type UnifiedOrderAvgAggregateInputType = {
    subtotalAmount?: true
    discountAmount?: true
    taxAmount?: true
    totalAmount?: true
    refundedAmount?: true
    itemCount?: true
  }

  export type UnifiedOrderSumAggregateInputType = {
    subtotalAmount?: true
    discountAmount?: true
    taxAmount?: true
    totalAmount?: true
    refundedAmount?: true
    itemCount?: true
  }

  export type UnifiedOrderMinAggregateInputType = {
    id?: true
    merchantId?: true
    sourceId?: true
    sourceConnector?: true
    sourceSyncedAt?: true
    connectorVersion?: true
    orderNumber?: true
    status?: true
    currency?: true
    subtotalAmount?: true
    discountAmount?: true
    taxAmount?: true
    totalAmount?: true
    refundedAmount?: true
    itemCount?: true
    orderedAt?: true
    fulfilledAt?: true
    cancelledAt?: true
    checksum?: true
    createdAt?: true
  }

  export type UnifiedOrderMaxAggregateInputType = {
    id?: true
    merchantId?: true
    sourceId?: true
    sourceConnector?: true
    sourceSyncedAt?: true
    connectorVersion?: true
    orderNumber?: true
    status?: true
    currency?: true
    subtotalAmount?: true
    discountAmount?: true
    taxAmount?: true
    totalAmount?: true
    refundedAmount?: true
    itemCount?: true
    orderedAt?: true
    fulfilledAt?: true
    cancelledAt?: true
    checksum?: true
    createdAt?: true
  }

  export type UnifiedOrderCountAggregateInputType = {
    id?: true
    merchantId?: true
    sourceId?: true
    sourceConnector?: true
    sourceSyncedAt?: true
    connectorVersion?: true
    orderNumber?: true
    status?: true
    currency?: true
    subtotalAmount?: true
    discountAmount?: true
    taxAmount?: true
    totalAmount?: true
    refundedAmount?: true
    itemCount?: true
    orderedAt?: true
    fulfilledAt?: true
    cancelledAt?: true
    rawPayload?: true
    checksum?: true
    createdAt?: true
    _all?: true
  }

  export type UnifiedOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnifiedOrder to aggregate.
     */
    where?: UnifiedOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedOrders to fetch.
     */
    orderBy?: UnifiedOrderOrderByWithRelationInput | UnifiedOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnifiedOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnifiedOrders
    **/
    _count?: true | UnifiedOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnifiedOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnifiedOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnifiedOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnifiedOrderMaxAggregateInputType
  }

  export type GetUnifiedOrderAggregateType<T extends UnifiedOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateUnifiedOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnifiedOrder[P]>
      : GetScalarType<T[P], AggregateUnifiedOrder[P]>
  }




  export type UnifiedOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnifiedOrderWhereInput
    orderBy?: UnifiedOrderOrderByWithAggregationInput | UnifiedOrderOrderByWithAggregationInput[]
    by: UnifiedOrderScalarFieldEnum[] | UnifiedOrderScalarFieldEnum
    having?: UnifiedOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnifiedOrderCountAggregateInputType | true
    _avg?: UnifiedOrderAvgAggregateInputType
    _sum?: UnifiedOrderSumAggregateInputType
    _min?: UnifiedOrderMinAggregateInputType
    _max?: UnifiedOrderMaxAggregateInputType
  }

  export type UnifiedOrderGroupByOutputType = {
    id: string
    merchantId: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date
    connectorVersion: string
    orderNumber: string | null
    status: string | null
    currency: string
    subtotalAmount: Decimal
    discountAmount: Decimal
    taxAmount: Decimal
    totalAmount: Decimal
    refundedAmount: Decimal
    itemCount: number
    orderedAt: Date | null
    fulfilledAt: Date | null
    cancelledAt: Date | null
    rawPayload: JsonValue | null
    checksum: string | null
    createdAt: Date
    _count: UnifiedOrderCountAggregateOutputType | null
    _avg: UnifiedOrderAvgAggregateOutputType | null
    _sum: UnifiedOrderSumAggregateOutputType | null
    _min: UnifiedOrderMinAggregateOutputType | null
    _max: UnifiedOrderMaxAggregateOutputType | null
  }

  type GetUnifiedOrderGroupByPayload<T extends UnifiedOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnifiedOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnifiedOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnifiedOrderGroupByOutputType[P]>
            : GetScalarType<T[P], UnifiedOrderGroupByOutputType[P]>
        }
      >
    >


  export type UnifiedOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    sourceId?: boolean
    sourceConnector?: boolean
    sourceSyncedAt?: boolean
    connectorVersion?: boolean
    orderNumber?: boolean
    status?: boolean
    currency?: boolean
    subtotalAmount?: boolean
    discountAmount?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    refundedAmount?: boolean
    itemCount?: boolean
    orderedAt?: boolean
    fulfilledAt?: boolean
    cancelledAt?: boolean
    rawPayload?: boolean
    checksum?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unifiedOrder"]>

  export type UnifiedOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    sourceId?: boolean
    sourceConnector?: boolean
    sourceSyncedAt?: boolean
    connectorVersion?: boolean
    orderNumber?: boolean
    status?: boolean
    currency?: boolean
    subtotalAmount?: boolean
    discountAmount?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    refundedAmount?: boolean
    itemCount?: boolean
    orderedAt?: boolean
    fulfilledAt?: boolean
    cancelledAt?: boolean
    rawPayload?: boolean
    checksum?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unifiedOrder"]>

  export type UnifiedOrderSelectScalar = {
    id?: boolean
    merchantId?: boolean
    sourceId?: boolean
    sourceConnector?: boolean
    sourceSyncedAt?: boolean
    connectorVersion?: boolean
    orderNumber?: boolean
    status?: boolean
    currency?: boolean
    subtotalAmount?: boolean
    discountAmount?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    refundedAmount?: boolean
    itemCount?: boolean
    orderedAt?: boolean
    fulfilledAt?: boolean
    cancelledAt?: boolean
    rawPayload?: boolean
    checksum?: boolean
    createdAt?: boolean
  }

  export type UnifiedOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type UnifiedOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $UnifiedOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnifiedOrder"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      sourceId: string
      sourceConnector: string
      sourceSyncedAt: Date
      connectorVersion: string
      orderNumber: string | null
      status: string | null
      currency: string
      subtotalAmount: Prisma.Decimal
      discountAmount: Prisma.Decimal
      taxAmount: Prisma.Decimal
      totalAmount: Prisma.Decimal
      refundedAmount: Prisma.Decimal
      itemCount: number
      orderedAt: Date | null
      fulfilledAt: Date | null
      cancelledAt: Date | null
      rawPayload: Prisma.JsonValue | null
      checksum: string | null
      createdAt: Date
    }, ExtArgs["result"]["unifiedOrder"]>
    composites: {}
  }

  type UnifiedOrderGetPayload<S extends boolean | null | undefined | UnifiedOrderDefaultArgs> = $Result.GetResult<Prisma.$UnifiedOrderPayload, S>

  type UnifiedOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UnifiedOrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UnifiedOrderCountAggregateInputType | true
    }

  export interface UnifiedOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnifiedOrder'], meta: { name: 'UnifiedOrder' } }
    /**
     * Find zero or one UnifiedOrder that matches the filter.
     * @param {UnifiedOrderFindUniqueArgs} args - Arguments to find a UnifiedOrder
     * @example
     * // Get one UnifiedOrder
     * const unifiedOrder = await prisma.unifiedOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnifiedOrderFindUniqueArgs>(args: SelectSubset<T, UnifiedOrderFindUniqueArgs<ExtArgs>>): Prisma__UnifiedOrderClient<$Result.GetResult<Prisma.$UnifiedOrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UnifiedOrder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UnifiedOrderFindUniqueOrThrowArgs} args - Arguments to find a UnifiedOrder
     * @example
     * // Get one UnifiedOrder
     * const unifiedOrder = await prisma.unifiedOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnifiedOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, UnifiedOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnifiedOrderClient<$Result.GetResult<Prisma.$UnifiedOrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UnifiedOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedOrderFindFirstArgs} args - Arguments to find a UnifiedOrder
     * @example
     * // Get one UnifiedOrder
     * const unifiedOrder = await prisma.unifiedOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnifiedOrderFindFirstArgs>(args?: SelectSubset<T, UnifiedOrderFindFirstArgs<ExtArgs>>): Prisma__UnifiedOrderClient<$Result.GetResult<Prisma.$UnifiedOrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UnifiedOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedOrderFindFirstOrThrowArgs} args - Arguments to find a UnifiedOrder
     * @example
     * // Get one UnifiedOrder
     * const unifiedOrder = await prisma.unifiedOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnifiedOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, UnifiedOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnifiedOrderClient<$Result.GetResult<Prisma.$UnifiedOrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UnifiedOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnifiedOrders
     * const unifiedOrders = await prisma.unifiedOrder.findMany()
     * 
     * // Get first 10 UnifiedOrders
     * const unifiedOrders = await prisma.unifiedOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unifiedOrderWithIdOnly = await prisma.unifiedOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnifiedOrderFindManyArgs>(args?: SelectSubset<T, UnifiedOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiedOrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UnifiedOrder.
     * @param {UnifiedOrderCreateArgs} args - Arguments to create a UnifiedOrder.
     * @example
     * // Create one UnifiedOrder
     * const UnifiedOrder = await prisma.unifiedOrder.create({
     *   data: {
     *     // ... data to create a UnifiedOrder
     *   }
     * })
     * 
     */
    create<T extends UnifiedOrderCreateArgs>(args: SelectSubset<T, UnifiedOrderCreateArgs<ExtArgs>>): Prisma__UnifiedOrderClient<$Result.GetResult<Prisma.$UnifiedOrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UnifiedOrders.
     * @param {UnifiedOrderCreateManyArgs} args - Arguments to create many UnifiedOrders.
     * @example
     * // Create many UnifiedOrders
     * const unifiedOrder = await prisma.unifiedOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnifiedOrderCreateManyArgs>(args?: SelectSubset<T, UnifiedOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnifiedOrders and returns the data saved in the database.
     * @param {UnifiedOrderCreateManyAndReturnArgs} args - Arguments to create many UnifiedOrders.
     * @example
     * // Create many UnifiedOrders
     * const unifiedOrder = await prisma.unifiedOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnifiedOrders and only return the `id`
     * const unifiedOrderWithIdOnly = await prisma.unifiedOrder.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnifiedOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, UnifiedOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiedOrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UnifiedOrder.
     * @param {UnifiedOrderDeleteArgs} args - Arguments to delete one UnifiedOrder.
     * @example
     * // Delete one UnifiedOrder
     * const UnifiedOrder = await prisma.unifiedOrder.delete({
     *   where: {
     *     // ... filter to delete one UnifiedOrder
     *   }
     * })
     * 
     */
    delete<T extends UnifiedOrderDeleteArgs>(args: SelectSubset<T, UnifiedOrderDeleteArgs<ExtArgs>>): Prisma__UnifiedOrderClient<$Result.GetResult<Prisma.$UnifiedOrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UnifiedOrder.
     * @param {UnifiedOrderUpdateArgs} args - Arguments to update one UnifiedOrder.
     * @example
     * // Update one UnifiedOrder
     * const unifiedOrder = await prisma.unifiedOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnifiedOrderUpdateArgs>(args: SelectSubset<T, UnifiedOrderUpdateArgs<ExtArgs>>): Prisma__UnifiedOrderClient<$Result.GetResult<Prisma.$UnifiedOrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UnifiedOrders.
     * @param {UnifiedOrderDeleteManyArgs} args - Arguments to filter UnifiedOrders to delete.
     * @example
     * // Delete a few UnifiedOrders
     * const { count } = await prisma.unifiedOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnifiedOrderDeleteManyArgs>(args?: SelectSubset<T, UnifiedOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnifiedOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnifiedOrders
     * const unifiedOrder = await prisma.unifiedOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnifiedOrderUpdateManyArgs>(args: SelectSubset<T, UnifiedOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UnifiedOrder.
     * @param {UnifiedOrderUpsertArgs} args - Arguments to update or create a UnifiedOrder.
     * @example
     * // Update or create a UnifiedOrder
     * const unifiedOrder = await prisma.unifiedOrder.upsert({
     *   create: {
     *     // ... data to create a UnifiedOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnifiedOrder we want to update
     *   }
     * })
     */
    upsert<T extends UnifiedOrderUpsertArgs>(args: SelectSubset<T, UnifiedOrderUpsertArgs<ExtArgs>>): Prisma__UnifiedOrderClient<$Result.GetResult<Prisma.$UnifiedOrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UnifiedOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedOrderCountArgs} args - Arguments to filter UnifiedOrders to count.
     * @example
     * // Count the number of UnifiedOrders
     * const count = await prisma.unifiedOrder.count({
     *   where: {
     *     // ... the filter for the UnifiedOrders we want to count
     *   }
     * })
    **/
    count<T extends UnifiedOrderCountArgs>(
      args?: Subset<T, UnifiedOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnifiedOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnifiedOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnifiedOrderAggregateArgs>(args: Subset<T, UnifiedOrderAggregateArgs>): Prisma.PrismaPromise<GetUnifiedOrderAggregateType<T>>

    /**
     * Group by UnifiedOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedOrderGroupByArgs} args - Group by arguments.
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
      T extends UnifiedOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnifiedOrderGroupByArgs['orderBy'] }
        : { orderBy?: UnifiedOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnifiedOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnifiedOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnifiedOrder model
   */
  readonly fields: UnifiedOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnifiedOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnifiedOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UnifiedOrder model
   */ 
  interface UnifiedOrderFieldRefs {
    readonly id: FieldRef<"UnifiedOrder", 'String'>
    readonly merchantId: FieldRef<"UnifiedOrder", 'String'>
    readonly sourceId: FieldRef<"UnifiedOrder", 'String'>
    readonly sourceConnector: FieldRef<"UnifiedOrder", 'String'>
    readonly sourceSyncedAt: FieldRef<"UnifiedOrder", 'DateTime'>
    readonly connectorVersion: FieldRef<"UnifiedOrder", 'String'>
    readonly orderNumber: FieldRef<"UnifiedOrder", 'String'>
    readonly status: FieldRef<"UnifiedOrder", 'String'>
    readonly currency: FieldRef<"UnifiedOrder", 'String'>
    readonly subtotalAmount: FieldRef<"UnifiedOrder", 'Decimal'>
    readonly discountAmount: FieldRef<"UnifiedOrder", 'Decimal'>
    readonly taxAmount: FieldRef<"UnifiedOrder", 'Decimal'>
    readonly totalAmount: FieldRef<"UnifiedOrder", 'Decimal'>
    readonly refundedAmount: FieldRef<"UnifiedOrder", 'Decimal'>
    readonly itemCount: FieldRef<"UnifiedOrder", 'Int'>
    readonly orderedAt: FieldRef<"UnifiedOrder", 'DateTime'>
    readonly fulfilledAt: FieldRef<"UnifiedOrder", 'DateTime'>
    readonly cancelledAt: FieldRef<"UnifiedOrder", 'DateTime'>
    readonly rawPayload: FieldRef<"UnifiedOrder", 'Json'>
    readonly checksum: FieldRef<"UnifiedOrder", 'String'>
    readonly createdAt: FieldRef<"UnifiedOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnifiedOrder findUnique
   */
  export type UnifiedOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedOrder
     */
    select?: UnifiedOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedOrderInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedOrder to fetch.
     */
    where: UnifiedOrderWhereUniqueInput
  }

  /**
   * UnifiedOrder findUniqueOrThrow
   */
  export type UnifiedOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedOrder
     */
    select?: UnifiedOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedOrderInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedOrder to fetch.
     */
    where: UnifiedOrderWhereUniqueInput
  }

  /**
   * UnifiedOrder findFirst
   */
  export type UnifiedOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedOrder
     */
    select?: UnifiedOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedOrderInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedOrder to fetch.
     */
    where?: UnifiedOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedOrders to fetch.
     */
    orderBy?: UnifiedOrderOrderByWithRelationInput | UnifiedOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnifiedOrders.
     */
    cursor?: UnifiedOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnifiedOrders.
     */
    distinct?: UnifiedOrderScalarFieldEnum | UnifiedOrderScalarFieldEnum[]
  }

  /**
   * UnifiedOrder findFirstOrThrow
   */
  export type UnifiedOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedOrder
     */
    select?: UnifiedOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedOrderInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedOrder to fetch.
     */
    where?: UnifiedOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedOrders to fetch.
     */
    orderBy?: UnifiedOrderOrderByWithRelationInput | UnifiedOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnifiedOrders.
     */
    cursor?: UnifiedOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnifiedOrders.
     */
    distinct?: UnifiedOrderScalarFieldEnum | UnifiedOrderScalarFieldEnum[]
  }

  /**
   * UnifiedOrder findMany
   */
  export type UnifiedOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedOrder
     */
    select?: UnifiedOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedOrderInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedOrders to fetch.
     */
    where?: UnifiedOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedOrders to fetch.
     */
    orderBy?: UnifiedOrderOrderByWithRelationInput | UnifiedOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnifiedOrders.
     */
    cursor?: UnifiedOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedOrders.
     */
    skip?: number
    distinct?: UnifiedOrderScalarFieldEnum | UnifiedOrderScalarFieldEnum[]
  }

  /**
   * UnifiedOrder create
   */
  export type UnifiedOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedOrder
     */
    select?: UnifiedOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a UnifiedOrder.
     */
    data: XOR<UnifiedOrderCreateInput, UnifiedOrderUncheckedCreateInput>
  }

  /**
   * UnifiedOrder createMany
   */
  export type UnifiedOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnifiedOrders.
     */
    data: UnifiedOrderCreateManyInput | UnifiedOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnifiedOrder createManyAndReturn
   */
  export type UnifiedOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedOrder
     */
    select?: UnifiedOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UnifiedOrders.
     */
    data: UnifiedOrderCreateManyInput | UnifiedOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnifiedOrder update
   */
  export type UnifiedOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedOrder
     */
    select?: UnifiedOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a UnifiedOrder.
     */
    data: XOR<UnifiedOrderUpdateInput, UnifiedOrderUncheckedUpdateInput>
    /**
     * Choose, which UnifiedOrder to update.
     */
    where: UnifiedOrderWhereUniqueInput
  }

  /**
   * UnifiedOrder updateMany
   */
  export type UnifiedOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnifiedOrders.
     */
    data: XOR<UnifiedOrderUpdateManyMutationInput, UnifiedOrderUncheckedUpdateManyInput>
    /**
     * Filter which UnifiedOrders to update
     */
    where?: UnifiedOrderWhereInput
  }

  /**
   * UnifiedOrder upsert
   */
  export type UnifiedOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedOrder
     */
    select?: UnifiedOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the UnifiedOrder to update in case it exists.
     */
    where: UnifiedOrderWhereUniqueInput
    /**
     * In case the UnifiedOrder found by the `where` argument doesn't exist, create a new UnifiedOrder with this data.
     */
    create: XOR<UnifiedOrderCreateInput, UnifiedOrderUncheckedCreateInput>
    /**
     * In case the UnifiedOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnifiedOrderUpdateInput, UnifiedOrderUncheckedUpdateInput>
  }

  /**
   * UnifiedOrder delete
   */
  export type UnifiedOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedOrder
     */
    select?: UnifiedOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedOrderInclude<ExtArgs> | null
    /**
     * Filter which UnifiedOrder to delete.
     */
    where: UnifiedOrderWhereUniqueInput
  }

  /**
   * UnifiedOrder deleteMany
   */
  export type UnifiedOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnifiedOrders to delete
     */
    where?: UnifiedOrderWhereInput
  }

  /**
   * UnifiedOrder without action
   */
  export type UnifiedOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedOrder
     */
    select?: UnifiedOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedOrderInclude<ExtArgs> | null
  }


  /**
   * Model UnifiedCustomer
   */

  export type AggregateUnifiedCustomer = {
    _count: UnifiedCustomerCountAggregateOutputType | null
    _avg: UnifiedCustomerAvgAggregateOutputType | null
    _sum: UnifiedCustomerSumAggregateOutputType | null
    _min: UnifiedCustomerMinAggregateOutputType | null
    _max: UnifiedCustomerMaxAggregateOutputType | null
  }

  export type UnifiedCustomerAvgAggregateOutputType = {
    orderCount: number | null
    totalSpent: Decimal | null
    avgOrderValue: Decimal | null
  }

  export type UnifiedCustomerSumAggregateOutputType = {
    orderCount: number | null
    totalSpent: Decimal | null
    avgOrderValue: Decimal | null
  }

  export type UnifiedCustomerMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    sourceId: string | null
    sourceConnector: string | null
    sourceSyncedAt: Date | null
    emailHash: string | null
    firstName: string | null
    lastName: string | null
    orderCount: number | null
    totalSpent: Decimal | null
    avgOrderValue: Decimal | null
    firstOrderAt: Date | null
    lastOrderAt: Date | null
    checksum: string | null
    createdAt: Date | null
  }

  export type UnifiedCustomerMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    sourceId: string | null
    sourceConnector: string | null
    sourceSyncedAt: Date | null
    emailHash: string | null
    firstName: string | null
    lastName: string | null
    orderCount: number | null
    totalSpent: Decimal | null
    avgOrderValue: Decimal | null
    firstOrderAt: Date | null
    lastOrderAt: Date | null
    checksum: string | null
    createdAt: Date | null
  }

  export type UnifiedCustomerCountAggregateOutputType = {
    id: number
    merchantId: number
    sourceId: number
    sourceConnector: number
    sourceSyncedAt: number
    emailHash: number
    firstName: number
    lastName: number
    orderCount: number
    totalSpent: number
    avgOrderValue: number
    firstOrderAt: number
    lastOrderAt: number
    tags: number
    rawPayload: number
    checksum: number
    createdAt: number
    _all: number
  }


  export type UnifiedCustomerAvgAggregateInputType = {
    orderCount?: true
    totalSpent?: true
    avgOrderValue?: true
  }

  export type UnifiedCustomerSumAggregateInputType = {
    orderCount?: true
    totalSpent?: true
    avgOrderValue?: true
  }

  export type UnifiedCustomerMinAggregateInputType = {
    id?: true
    merchantId?: true
    sourceId?: true
    sourceConnector?: true
    sourceSyncedAt?: true
    emailHash?: true
    firstName?: true
    lastName?: true
    orderCount?: true
    totalSpent?: true
    avgOrderValue?: true
    firstOrderAt?: true
    lastOrderAt?: true
    checksum?: true
    createdAt?: true
  }

  export type UnifiedCustomerMaxAggregateInputType = {
    id?: true
    merchantId?: true
    sourceId?: true
    sourceConnector?: true
    sourceSyncedAt?: true
    emailHash?: true
    firstName?: true
    lastName?: true
    orderCount?: true
    totalSpent?: true
    avgOrderValue?: true
    firstOrderAt?: true
    lastOrderAt?: true
    checksum?: true
    createdAt?: true
  }

  export type UnifiedCustomerCountAggregateInputType = {
    id?: true
    merchantId?: true
    sourceId?: true
    sourceConnector?: true
    sourceSyncedAt?: true
    emailHash?: true
    firstName?: true
    lastName?: true
    orderCount?: true
    totalSpent?: true
    avgOrderValue?: true
    firstOrderAt?: true
    lastOrderAt?: true
    tags?: true
    rawPayload?: true
    checksum?: true
    createdAt?: true
    _all?: true
  }

  export type UnifiedCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnifiedCustomer to aggregate.
     */
    where?: UnifiedCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedCustomers to fetch.
     */
    orderBy?: UnifiedCustomerOrderByWithRelationInput | UnifiedCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnifiedCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnifiedCustomers
    **/
    _count?: true | UnifiedCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnifiedCustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnifiedCustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnifiedCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnifiedCustomerMaxAggregateInputType
  }

  export type GetUnifiedCustomerAggregateType<T extends UnifiedCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateUnifiedCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnifiedCustomer[P]>
      : GetScalarType<T[P], AggregateUnifiedCustomer[P]>
  }




  export type UnifiedCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnifiedCustomerWhereInput
    orderBy?: UnifiedCustomerOrderByWithAggregationInput | UnifiedCustomerOrderByWithAggregationInput[]
    by: UnifiedCustomerScalarFieldEnum[] | UnifiedCustomerScalarFieldEnum
    having?: UnifiedCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnifiedCustomerCountAggregateInputType | true
    _avg?: UnifiedCustomerAvgAggregateInputType
    _sum?: UnifiedCustomerSumAggregateInputType
    _min?: UnifiedCustomerMinAggregateInputType
    _max?: UnifiedCustomerMaxAggregateInputType
  }

  export type UnifiedCustomerGroupByOutputType = {
    id: string
    merchantId: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date
    emailHash: string | null
    firstName: string | null
    lastName: string | null
    orderCount: number
    totalSpent: Decimal
    avgOrderValue: Decimal | null
    firstOrderAt: Date | null
    lastOrderAt: Date | null
    tags: string[]
    rawPayload: JsonValue | null
    checksum: string | null
    createdAt: Date
    _count: UnifiedCustomerCountAggregateOutputType | null
    _avg: UnifiedCustomerAvgAggregateOutputType | null
    _sum: UnifiedCustomerSumAggregateOutputType | null
    _min: UnifiedCustomerMinAggregateOutputType | null
    _max: UnifiedCustomerMaxAggregateOutputType | null
  }

  type GetUnifiedCustomerGroupByPayload<T extends UnifiedCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnifiedCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnifiedCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnifiedCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], UnifiedCustomerGroupByOutputType[P]>
        }
      >
    >


  export type UnifiedCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    sourceId?: boolean
    sourceConnector?: boolean
    sourceSyncedAt?: boolean
    emailHash?: boolean
    firstName?: boolean
    lastName?: boolean
    orderCount?: boolean
    totalSpent?: boolean
    avgOrderValue?: boolean
    firstOrderAt?: boolean
    lastOrderAt?: boolean
    tags?: boolean
    rawPayload?: boolean
    checksum?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unifiedCustomer"]>

  export type UnifiedCustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    sourceId?: boolean
    sourceConnector?: boolean
    sourceSyncedAt?: boolean
    emailHash?: boolean
    firstName?: boolean
    lastName?: boolean
    orderCount?: boolean
    totalSpent?: boolean
    avgOrderValue?: boolean
    firstOrderAt?: boolean
    lastOrderAt?: boolean
    tags?: boolean
    rawPayload?: boolean
    checksum?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unifiedCustomer"]>

  export type UnifiedCustomerSelectScalar = {
    id?: boolean
    merchantId?: boolean
    sourceId?: boolean
    sourceConnector?: boolean
    sourceSyncedAt?: boolean
    emailHash?: boolean
    firstName?: boolean
    lastName?: boolean
    orderCount?: boolean
    totalSpent?: boolean
    avgOrderValue?: boolean
    firstOrderAt?: boolean
    lastOrderAt?: boolean
    tags?: boolean
    rawPayload?: boolean
    checksum?: boolean
    createdAt?: boolean
  }

  export type UnifiedCustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type UnifiedCustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $UnifiedCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnifiedCustomer"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      sourceId: string
      sourceConnector: string
      sourceSyncedAt: Date
      emailHash: string | null
      firstName: string | null
      lastName: string | null
      orderCount: number
      totalSpent: Prisma.Decimal
      avgOrderValue: Prisma.Decimal | null
      firstOrderAt: Date | null
      lastOrderAt: Date | null
      tags: string[]
      rawPayload: Prisma.JsonValue | null
      checksum: string | null
      createdAt: Date
    }, ExtArgs["result"]["unifiedCustomer"]>
    composites: {}
  }

  type UnifiedCustomerGetPayload<S extends boolean | null | undefined | UnifiedCustomerDefaultArgs> = $Result.GetResult<Prisma.$UnifiedCustomerPayload, S>

  type UnifiedCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UnifiedCustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UnifiedCustomerCountAggregateInputType | true
    }

  export interface UnifiedCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnifiedCustomer'], meta: { name: 'UnifiedCustomer' } }
    /**
     * Find zero or one UnifiedCustomer that matches the filter.
     * @param {UnifiedCustomerFindUniqueArgs} args - Arguments to find a UnifiedCustomer
     * @example
     * // Get one UnifiedCustomer
     * const unifiedCustomer = await prisma.unifiedCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnifiedCustomerFindUniqueArgs>(args: SelectSubset<T, UnifiedCustomerFindUniqueArgs<ExtArgs>>): Prisma__UnifiedCustomerClient<$Result.GetResult<Prisma.$UnifiedCustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UnifiedCustomer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UnifiedCustomerFindUniqueOrThrowArgs} args - Arguments to find a UnifiedCustomer
     * @example
     * // Get one UnifiedCustomer
     * const unifiedCustomer = await prisma.unifiedCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnifiedCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, UnifiedCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnifiedCustomerClient<$Result.GetResult<Prisma.$UnifiedCustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UnifiedCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCustomerFindFirstArgs} args - Arguments to find a UnifiedCustomer
     * @example
     * // Get one UnifiedCustomer
     * const unifiedCustomer = await prisma.unifiedCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnifiedCustomerFindFirstArgs>(args?: SelectSubset<T, UnifiedCustomerFindFirstArgs<ExtArgs>>): Prisma__UnifiedCustomerClient<$Result.GetResult<Prisma.$UnifiedCustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UnifiedCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCustomerFindFirstOrThrowArgs} args - Arguments to find a UnifiedCustomer
     * @example
     * // Get one UnifiedCustomer
     * const unifiedCustomer = await prisma.unifiedCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnifiedCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, UnifiedCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnifiedCustomerClient<$Result.GetResult<Prisma.$UnifiedCustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UnifiedCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnifiedCustomers
     * const unifiedCustomers = await prisma.unifiedCustomer.findMany()
     * 
     * // Get first 10 UnifiedCustomers
     * const unifiedCustomers = await prisma.unifiedCustomer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unifiedCustomerWithIdOnly = await prisma.unifiedCustomer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnifiedCustomerFindManyArgs>(args?: SelectSubset<T, UnifiedCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiedCustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UnifiedCustomer.
     * @param {UnifiedCustomerCreateArgs} args - Arguments to create a UnifiedCustomer.
     * @example
     * // Create one UnifiedCustomer
     * const UnifiedCustomer = await prisma.unifiedCustomer.create({
     *   data: {
     *     // ... data to create a UnifiedCustomer
     *   }
     * })
     * 
     */
    create<T extends UnifiedCustomerCreateArgs>(args: SelectSubset<T, UnifiedCustomerCreateArgs<ExtArgs>>): Prisma__UnifiedCustomerClient<$Result.GetResult<Prisma.$UnifiedCustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UnifiedCustomers.
     * @param {UnifiedCustomerCreateManyArgs} args - Arguments to create many UnifiedCustomers.
     * @example
     * // Create many UnifiedCustomers
     * const unifiedCustomer = await prisma.unifiedCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnifiedCustomerCreateManyArgs>(args?: SelectSubset<T, UnifiedCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnifiedCustomers and returns the data saved in the database.
     * @param {UnifiedCustomerCreateManyAndReturnArgs} args - Arguments to create many UnifiedCustomers.
     * @example
     * // Create many UnifiedCustomers
     * const unifiedCustomer = await prisma.unifiedCustomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnifiedCustomers and only return the `id`
     * const unifiedCustomerWithIdOnly = await prisma.unifiedCustomer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnifiedCustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, UnifiedCustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiedCustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UnifiedCustomer.
     * @param {UnifiedCustomerDeleteArgs} args - Arguments to delete one UnifiedCustomer.
     * @example
     * // Delete one UnifiedCustomer
     * const UnifiedCustomer = await prisma.unifiedCustomer.delete({
     *   where: {
     *     // ... filter to delete one UnifiedCustomer
     *   }
     * })
     * 
     */
    delete<T extends UnifiedCustomerDeleteArgs>(args: SelectSubset<T, UnifiedCustomerDeleteArgs<ExtArgs>>): Prisma__UnifiedCustomerClient<$Result.GetResult<Prisma.$UnifiedCustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UnifiedCustomer.
     * @param {UnifiedCustomerUpdateArgs} args - Arguments to update one UnifiedCustomer.
     * @example
     * // Update one UnifiedCustomer
     * const unifiedCustomer = await prisma.unifiedCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnifiedCustomerUpdateArgs>(args: SelectSubset<T, UnifiedCustomerUpdateArgs<ExtArgs>>): Prisma__UnifiedCustomerClient<$Result.GetResult<Prisma.$UnifiedCustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UnifiedCustomers.
     * @param {UnifiedCustomerDeleteManyArgs} args - Arguments to filter UnifiedCustomers to delete.
     * @example
     * // Delete a few UnifiedCustomers
     * const { count } = await prisma.unifiedCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnifiedCustomerDeleteManyArgs>(args?: SelectSubset<T, UnifiedCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnifiedCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnifiedCustomers
     * const unifiedCustomer = await prisma.unifiedCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnifiedCustomerUpdateManyArgs>(args: SelectSubset<T, UnifiedCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UnifiedCustomer.
     * @param {UnifiedCustomerUpsertArgs} args - Arguments to update or create a UnifiedCustomer.
     * @example
     * // Update or create a UnifiedCustomer
     * const unifiedCustomer = await prisma.unifiedCustomer.upsert({
     *   create: {
     *     // ... data to create a UnifiedCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnifiedCustomer we want to update
     *   }
     * })
     */
    upsert<T extends UnifiedCustomerUpsertArgs>(args: SelectSubset<T, UnifiedCustomerUpsertArgs<ExtArgs>>): Prisma__UnifiedCustomerClient<$Result.GetResult<Prisma.$UnifiedCustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UnifiedCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCustomerCountArgs} args - Arguments to filter UnifiedCustomers to count.
     * @example
     * // Count the number of UnifiedCustomers
     * const count = await prisma.unifiedCustomer.count({
     *   where: {
     *     // ... the filter for the UnifiedCustomers we want to count
     *   }
     * })
    **/
    count<T extends UnifiedCustomerCountArgs>(
      args?: Subset<T, UnifiedCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnifiedCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnifiedCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnifiedCustomerAggregateArgs>(args: Subset<T, UnifiedCustomerAggregateArgs>): Prisma.PrismaPromise<GetUnifiedCustomerAggregateType<T>>

    /**
     * Group by UnifiedCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCustomerGroupByArgs} args - Group by arguments.
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
      T extends UnifiedCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnifiedCustomerGroupByArgs['orderBy'] }
        : { orderBy?: UnifiedCustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnifiedCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnifiedCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnifiedCustomer model
   */
  readonly fields: UnifiedCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnifiedCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnifiedCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UnifiedCustomer model
   */ 
  interface UnifiedCustomerFieldRefs {
    readonly id: FieldRef<"UnifiedCustomer", 'String'>
    readonly merchantId: FieldRef<"UnifiedCustomer", 'String'>
    readonly sourceId: FieldRef<"UnifiedCustomer", 'String'>
    readonly sourceConnector: FieldRef<"UnifiedCustomer", 'String'>
    readonly sourceSyncedAt: FieldRef<"UnifiedCustomer", 'DateTime'>
    readonly emailHash: FieldRef<"UnifiedCustomer", 'String'>
    readonly firstName: FieldRef<"UnifiedCustomer", 'String'>
    readonly lastName: FieldRef<"UnifiedCustomer", 'String'>
    readonly orderCount: FieldRef<"UnifiedCustomer", 'Int'>
    readonly totalSpent: FieldRef<"UnifiedCustomer", 'Decimal'>
    readonly avgOrderValue: FieldRef<"UnifiedCustomer", 'Decimal'>
    readonly firstOrderAt: FieldRef<"UnifiedCustomer", 'DateTime'>
    readonly lastOrderAt: FieldRef<"UnifiedCustomer", 'DateTime'>
    readonly tags: FieldRef<"UnifiedCustomer", 'String[]'>
    readonly rawPayload: FieldRef<"UnifiedCustomer", 'Json'>
    readonly checksum: FieldRef<"UnifiedCustomer", 'String'>
    readonly createdAt: FieldRef<"UnifiedCustomer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnifiedCustomer findUnique
   */
  export type UnifiedCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCustomer
     */
    select?: UnifiedCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCustomerInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedCustomer to fetch.
     */
    where: UnifiedCustomerWhereUniqueInput
  }

  /**
   * UnifiedCustomer findUniqueOrThrow
   */
  export type UnifiedCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCustomer
     */
    select?: UnifiedCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCustomerInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedCustomer to fetch.
     */
    where: UnifiedCustomerWhereUniqueInput
  }

  /**
   * UnifiedCustomer findFirst
   */
  export type UnifiedCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCustomer
     */
    select?: UnifiedCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCustomerInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedCustomer to fetch.
     */
    where?: UnifiedCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedCustomers to fetch.
     */
    orderBy?: UnifiedCustomerOrderByWithRelationInput | UnifiedCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnifiedCustomers.
     */
    cursor?: UnifiedCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnifiedCustomers.
     */
    distinct?: UnifiedCustomerScalarFieldEnum | UnifiedCustomerScalarFieldEnum[]
  }

  /**
   * UnifiedCustomer findFirstOrThrow
   */
  export type UnifiedCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCustomer
     */
    select?: UnifiedCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCustomerInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedCustomer to fetch.
     */
    where?: UnifiedCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedCustomers to fetch.
     */
    orderBy?: UnifiedCustomerOrderByWithRelationInput | UnifiedCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnifiedCustomers.
     */
    cursor?: UnifiedCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnifiedCustomers.
     */
    distinct?: UnifiedCustomerScalarFieldEnum | UnifiedCustomerScalarFieldEnum[]
  }

  /**
   * UnifiedCustomer findMany
   */
  export type UnifiedCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCustomer
     */
    select?: UnifiedCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCustomerInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedCustomers to fetch.
     */
    where?: UnifiedCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedCustomers to fetch.
     */
    orderBy?: UnifiedCustomerOrderByWithRelationInput | UnifiedCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnifiedCustomers.
     */
    cursor?: UnifiedCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedCustomers.
     */
    skip?: number
    distinct?: UnifiedCustomerScalarFieldEnum | UnifiedCustomerScalarFieldEnum[]
  }

  /**
   * UnifiedCustomer create
   */
  export type UnifiedCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCustomer
     */
    select?: UnifiedCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a UnifiedCustomer.
     */
    data: XOR<UnifiedCustomerCreateInput, UnifiedCustomerUncheckedCreateInput>
  }

  /**
   * UnifiedCustomer createMany
   */
  export type UnifiedCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnifiedCustomers.
     */
    data: UnifiedCustomerCreateManyInput | UnifiedCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnifiedCustomer createManyAndReturn
   */
  export type UnifiedCustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCustomer
     */
    select?: UnifiedCustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UnifiedCustomers.
     */
    data: UnifiedCustomerCreateManyInput | UnifiedCustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnifiedCustomer update
   */
  export type UnifiedCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCustomer
     */
    select?: UnifiedCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a UnifiedCustomer.
     */
    data: XOR<UnifiedCustomerUpdateInput, UnifiedCustomerUncheckedUpdateInput>
    /**
     * Choose, which UnifiedCustomer to update.
     */
    where: UnifiedCustomerWhereUniqueInput
  }

  /**
   * UnifiedCustomer updateMany
   */
  export type UnifiedCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnifiedCustomers.
     */
    data: XOR<UnifiedCustomerUpdateManyMutationInput, UnifiedCustomerUncheckedUpdateManyInput>
    /**
     * Filter which UnifiedCustomers to update
     */
    where?: UnifiedCustomerWhereInput
  }

  /**
   * UnifiedCustomer upsert
   */
  export type UnifiedCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCustomer
     */
    select?: UnifiedCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the UnifiedCustomer to update in case it exists.
     */
    where: UnifiedCustomerWhereUniqueInput
    /**
     * In case the UnifiedCustomer found by the `where` argument doesn't exist, create a new UnifiedCustomer with this data.
     */
    create: XOR<UnifiedCustomerCreateInput, UnifiedCustomerUncheckedCreateInput>
    /**
     * In case the UnifiedCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnifiedCustomerUpdateInput, UnifiedCustomerUncheckedUpdateInput>
  }

  /**
   * UnifiedCustomer delete
   */
  export type UnifiedCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCustomer
     */
    select?: UnifiedCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCustomerInclude<ExtArgs> | null
    /**
     * Filter which UnifiedCustomer to delete.
     */
    where: UnifiedCustomerWhereUniqueInput
  }

  /**
   * UnifiedCustomer deleteMany
   */
  export type UnifiedCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnifiedCustomers to delete
     */
    where?: UnifiedCustomerWhereInput
  }

  /**
   * UnifiedCustomer without action
   */
  export type UnifiedCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCustomer
     */
    select?: UnifiedCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCustomerInclude<ExtArgs> | null
  }


  /**
   * Model UnifiedCampaign
   */

  export type AggregateUnifiedCampaign = {
    _count: UnifiedCampaignCountAggregateOutputType | null
    _avg: UnifiedCampaignAvgAggregateOutputType | null
    _sum: UnifiedCampaignSumAggregateOutputType | null
    _min: UnifiedCampaignMinAggregateOutputType | null
    _max: UnifiedCampaignMaxAggregateOutputType | null
  }

  export type UnifiedCampaignAvgAggregateOutputType = {
    spendAmount: Decimal | null
    impressions: number | null
    clicks: number | null
    conversions: number | null
    conversionValue: Decimal | null
    roas: Decimal | null
    sends: number | null
    opens: number | null
    revenueAttributed: Decimal | null
  }

  export type UnifiedCampaignSumAggregateOutputType = {
    spendAmount: Decimal | null
    impressions: bigint | null
    clicks: bigint | null
    conversions: number | null
    conversionValue: Decimal | null
    roas: Decimal | null
    sends: number | null
    opens: number | null
    revenueAttributed: Decimal | null
  }

  export type UnifiedCampaignMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    sourceId: string | null
    sourceConnector: string | null
    sourceSyncedAt: Date | null
    name: string | null
    type: string | null
    status: string | null
    channel: string | null
    periodStart: Date | null
    periodEnd: Date | null
    spendAmount: Decimal | null
    impressions: bigint | null
    clicks: bigint | null
    conversions: number | null
    conversionValue: Decimal | null
    roas: Decimal | null
    sends: number | null
    opens: number | null
    revenueAttributed: Decimal | null
    checksum: string | null
    createdAt: Date | null
  }

  export type UnifiedCampaignMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    sourceId: string | null
    sourceConnector: string | null
    sourceSyncedAt: Date | null
    name: string | null
    type: string | null
    status: string | null
    channel: string | null
    periodStart: Date | null
    periodEnd: Date | null
    spendAmount: Decimal | null
    impressions: bigint | null
    clicks: bigint | null
    conversions: number | null
    conversionValue: Decimal | null
    roas: Decimal | null
    sends: number | null
    opens: number | null
    revenueAttributed: Decimal | null
    checksum: string | null
    createdAt: Date | null
  }

  export type UnifiedCampaignCountAggregateOutputType = {
    id: number
    merchantId: number
    sourceId: number
    sourceConnector: number
    sourceSyncedAt: number
    name: number
    type: number
    status: number
    channel: number
    periodStart: number
    periodEnd: number
    spendAmount: number
    impressions: number
    clicks: number
    conversions: number
    conversionValue: number
    roas: number
    sends: number
    opens: number
    revenueAttributed: number
    rawPayload: number
    checksum: number
    createdAt: number
    _all: number
  }


  export type UnifiedCampaignAvgAggregateInputType = {
    spendAmount?: true
    impressions?: true
    clicks?: true
    conversions?: true
    conversionValue?: true
    roas?: true
    sends?: true
    opens?: true
    revenueAttributed?: true
  }

  export type UnifiedCampaignSumAggregateInputType = {
    spendAmount?: true
    impressions?: true
    clicks?: true
    conversions?: true
    conversionValue?: true
    roas?: true
    sends?: true
    opens?: true
    revenueAttributed?: true
  }

  export type UnifiedCampaignMinAggregateInputType = {
    id?: true
    merchantId?: true
    sourceId?: true
    sourceConnector?: true
    sourceSyncedAt?: true
    name?: true
    type?: true
    status?: true
    channel?: true
    periodStart?: true
    periodEnd?: true
    spendAmount?: true
    impressions?: true
    clicks?: true
    conversions?: true
    conversionValue?: true
    roas?: true
    sends?: true
    opens?: true
    revenueAttributed?: true
    checksum?: true
    createdAt?: true
  }

  export type UnifiedCampaignMaxAggregateInputType = {
    id?: true
    merchantId?: true
    sourceId?: true
    sourceConnector?: true
    sourceSyncedAt?: true
    name?: true
    type?: true
    status?: true
    channel?: true
    periodStart?: true
    periodEnd?: true
    spendAmount?: true
    impressions?: true
    clicks?: true
    conversions?: true
    conversionValue?: true
    roas?: true
    sends?: true
    opens?: true
    revenueAttributed?: true
    checksum?: true
    createdAt?: true
  }

  export type UnifiedCampaignCountAggregateInputType = {
    id?: true
    merchantId?: true
    sourceId?: true
    sourceConnector?: true
    sourceSyncedAt?: true
    name?: true
    type?: true
    status?: true
    channel?: true
    periodStart?: true
    periodEnd?: true
    spendAmount?: true
    impressions?: true
    clicks?: true
    conversions?: true
    conversionValue?: true
    roas?: true
    sends?: true
    opens?: true
    revenueAttributed?: true
    rawPayload?: true
    checksum?: true
    createdAt?: true
    _all?: true
  }

  export type UnifiedCampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnifiedCampaign to aggregate.
     */
    where?: UnifiedCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedCampaigns to fetch.
     */
    orderBy?: UnifiedCampaignOrderByWithRelationInput | UnifiedCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnifiedCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnifiedCampaigns
    **/
    _count?: true | UnifiedCampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnifiedCampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnifiedCampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnifiedCampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnifiedCampaignMaxAggregateInputType
  }

  export type GetUnifiedCampaignAggregateType<T extends UnifiedCampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateUnifiedCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnifiedCampaign[P]>
      : GetScalarType<T[P], AggregateUnifiedCampaign[P]>
  }




  export type UnifiedCampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnifiedCampaignWhereInput
    orderBy?: UnifiedCampaignOrderByWithAggregationInput | UnifiedCampaignOrderByWithAggregationInput[]
    by: UnifiedCampaignScalarFieldEnum[] | UnifiedCampaignScalarFieldEnum
    having?: UnifiedCampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnifiedCampaignCountAggregateInputType | true
    _avg?: UnifiedCampaignAvgAggregateInputType
    _sum?: UnifiedCampaignSumAggregateInputType
    _min?: UnifiedCampaignMinAggregateInputType
    _max?: UnifiedCampaignMaxAggregateInputType
  }

  export type UnifiedCampaignGroupByOutputType = {
    id: string
    merchantId: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date
    name: string | null
    type: string | null
    status: string | null
    channel: string | null
    periodStart: Date
    periodEnd: Date
    spendAmount: Decimal | null
    impressions: bigint | null
    clicks: bigint | null
    conversions: number | null
    conversionValue: Decimal | null
    roas: Decimal | null
    sends: number | null
    opens: number | null
    revenueAttributed: Decimal | null
    rawPayload: JsonValue | null
    checksum: string | null
    createdAt: Date
    _count: UnifiedCampaignCountAggregateOutputType | null
    _avg: UnifiedCampaignAvgAggregateOutputType | null
    _sum: UnifiedCampaignSumAggregateOutputType | null
    _min: UnifiedCampaignMinAggregateOutputType | null
    _max: UnifiedCampaignMaxAggregateOutputType | null
  }

  type GetUnifiedCampaignGroupByPayload<T extends UnifiedCampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnifiedCampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnifiedCampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnifiedCampaignGroupByOutputType[P]>
            : GetScalarType<T[P], UnifiedCampaignGroupByOutputType[P]>
        }
      >
    >


  export type UnifiedCampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    sourceId?: boolean
    sourceConnector?: boolean
    sourceSyncedAt?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    channel?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    spendAmount?: boolean
    impressions?: boolean
    clicks?: boolean
    conversions?: boolean
    conversionValue?: boolean
    roas?: boolean
    sends?: boolean
    opens?: boolean
    revenueAttributed?: boolean
    rawPayload?: boolean
    checksum?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unifiedCampaign"]>

  export type UnifiedCampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    sourceId?: boolean
    sourceConnector?: boolean
    sourceSyncedAt?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    channel?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    spendAmount?: boolean
    impressions?: boolean
    clicks?: boolean
    conversions?: boolean
    conversionValue?: boolean
    roas?: boolean
    sends?: boolean
    opens?: boolean
    revenueAttributed?: boolean
    rawPayload?: boolean
    checksum?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unifiedCampaign"]>

  export type UnifiedCampaignSelectScalar = {
    id?: boolean
    merchantId?: boolean
    sourceId?: boolean
    sourceConnector?: boolean
    sourceSyncedAt?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    channel?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    spendAmount?: boolean
    impressions?: boolean
    clicks?: boolean
    conversions?: boolean
    conversionValue?: boolean
    roas?: boolean
    sends?: boolean
    opens?: boolean
    revenueAttributed?: boolean
    rawPayload?: boolean
    checksum?: boolean
    createdAt?: boolean
  }

  export type UnifiedCampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type UnifiedCampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $UnifiedCampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnifiedCampaign"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      sourceId: string
      sourceConnector: string
      sourceSyncedAt: Date
      name: string | null
      type: string | null
      status: string | null
      channel: string | null
      periodStart: Date
      periodEnd: Date
      spendAmount: Prisma.Decimal | null
      impressions: bigint | null
      clicks: bigint | null
      conversions: number | null
      conversionValue: Prisma.Decimal | null
      roas: Prisma.Decimal | null
      sends: number | null
      opens: number | null
      revenueAttributed: Prisma.Decimal | null
      rawPayload: Prisma.JsonValue | null
      checksum: string | null
      createdAt: Date
    }, ExtArgs["result"]["unifiedCampaign"]>
    composites: {}
  }

  type UnifiedCampaignGetPayload<S extends boolean | null | undefined | UnifiedCampaignDefaultArgs> = $Result.GetResult<Prisma.$UnifiedCampaignPayload, S>

  type UnifiedCampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UnifiedCampaignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UnifiedCampaignCountAggregateInputType | true
    }

  export interface UnifiedCampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnifiedCampaign'], meta: { name: 'UnifiedCampaign' } }
    /**
     * Find zero or one UnifiedCampaign that matches the filter.
     * @param {UnifiedCampaignFindUniqueArgs} args - Arguments to find a UnifiedCampaign
     * @example
     * // Get one UnifiedCampaign
     * const unifiedCampaign = await prisma.unifiedCampaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnifiedCampaignFindUniqueArgs>(args: SelectSubset<T, UnifiedCampaignFindUniqueArgs<ExtArgs>>): Prisma__UnifiedCampaignClient<$Result.GetResult<Prisma.$UnifiedCampaignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UnifiedCampaign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UnifiedCampaignFindUniqueOrThrowArgs} args - Arguments to find a UnifiedCampaign
     * @example
     * // Get one UnifiedCampaign
     * const unifiedCampaign = await prisma.unifiedCampaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnifiedCampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, UnifiedCampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnifiedCampaignClient<$Result.GetResult<Prisma.$UnifiedCampaignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UnifiedCampaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCampaignFindFirstArgs} args - Arguments to find a UnifiedCampaign
     * @example
     * // Get one UnifiedCampaign
     * const unifiedCampaign = await prisma.unifiedCampaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnifiedCampaignFindFirstArgs>(args?: SelectSubset<T, UnifiedCampaignFindFirstArgs<ExtArgs>>): Prisma__UnifiedCampaignClient<$Result.GetResult<Prisma.$UnifiedCampaignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UnifiedCampaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCampaignFindFirstOrThrowArgs} args - Arguments to find a UnifiedCampaign
     * @example
     * // Get one UnifiedCampaign
     * const unifiedCampaign = await prisma.unifiedCampaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnifiedCampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, UnifiedCampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnifiedCampaignClient<$Result.GetResult<Prisma.$UnifiedCampaignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UnifiedCampaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnifiedCampaigns
     * const unifiedCampaigns = await prisma.unifiedCampaign.findMany()
     * 
     * // Get first 10 UnifiedCampaigns
     * const unifiedCampaigns = await prisma.unifiedCampaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unifiedCampaignWithIdOnly = await prisma.unifiedCampaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnifiedCampaignFindManyArgs>(args?: SelectSubset<T, UnifiedCampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiedCampaignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UnifiedCampaign.
     * @param {UnifiedCampaignCreateArgs} args - Arguments to create a UnifiedCampaign.
     * @example
     * // Create one UnifiedCampaign
     * const UnifiedCampaign = await prisma.unifiedCampaign.create({
     *   data: {
     *     // ... data to create a UnifiedCampaign
     *   }
     * })
     * 
     */
    create<T extends UnifiedCampaignCreateArgs>(args: SelectSubset<T, UnifiedCampaignCreateArgs<ExtArgs>>): Prisma__UnifiedCampaignClient<$Result.GetResult<Prisma.$UnifiedCampaignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UnifiedCampaigns.
     * @param {UnifiedCampaignCreateManyArgs} args - Arguments to create many UnifiedCampaigns.
     * @example
     * // Create many UnifiedCampaigns
     * const unifiedCampaign = await prisma.unifiedCampaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnifiedCampaignCreateManyArgs>(args?: SelectSubset<T, UnifiedCampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnifiedCampaigns and returns the data saved in the database.
     * @param {UnifiedCampaignCreateManyAndReturnArgs} args - Arguments to create many UnifiedCampaigns.
     * @example
     * // Create many UnifiedCampaigns
     * const unifiedCampaign = await prisma.unifiedCampaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnifiedCampaigns and only return the `id`
     * const unifiedCampaignWithIdOnly = await prisma.unifiedCampaign.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnifiedCampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, UnifiedCampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiedCampaignPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UnifiedCampaign.
     * @param {UnifiedCampaignDeleteArgs} args - Arguments to delete one UnifiedCampaign.
     * @example
     * // Delete one UnifiedCampaign
     * const UnifiedCampaign = await prisma.unifiedCampaign.delete({
     *   where: {
     *     // ... filter to delete one UnifiedCampaign
     *   }
     * })
     * 
     */
    delete<T extends UnifiedCampaignDeleteArgs>(args: SelectSubset<T, UnifiedCampaignDeleteArgs<ExtArgs>>): Prisma__UnifiedCampaignClient<$Result.GetResult<Prisma.$UnifiedCampaignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UnifiedCampaign.
     * @param {UnifiedCampaignUpdateArgs} args - Arguments to update one UnifiedCampaign.
     * @example
     * // Update one UnifiedCampaign
     * const unifiedCampaign = await prisma.unifiedCampaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnifiedCampaignUpdateArgs>(args: SelectSubset<T, UnifiedCampaignUpdateArgs<ExtArgs>>): Prisma__UnifiedCampaignClient<$Result.GetResult<Prisma.$UnifiedCampaignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UnifiedCampaigns.
     * @param {UnifiedCampaignDeleteManyArgs} args - Arguments to filter UnifiedCampaigns to delete.
     * @example
     * // Delete a few UnifiedCampaigns
     * const { count } = await prisma.unifiedCampaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnifiedCampaignDeleteManyArgs>(args?: SelectSubset<T, UnifiedCampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnifiedCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnifiedCampaigns
     * const unifiedCampaign = await prisma.unifiedCampaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnifiedCampaignUpdateManyArgs>(args: SelectSubset<T, UnifiedCampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UnifiedCampaign.
     * @param {UnifiedCampaignUpsertArgs} args - Arguments to update or create a UnifiedCampaign.
     * @example
     * // Update or create a UnifiedCampaign
     * const unifiedCampaign = await prisma.unifiedCampaign.upsert({
     *   create: {
     *     // ... data to create a UnifiedCampaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnifiedCampaign we want to update
     *   }
     * })
     */
    upsert<T extends UnifiedCampaignUpsertArgs>(args: SelectSubset<T, UnifiedCampaignUpsertArgs<ExtArgs>>): Prisma__UnifiedCampaignClient<$Result.GetResult<Prisma.$UnifiedCampaignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UnifiedCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCampaignCountArgs} args - Arguments to filter UnifiedCampaigns to count.
     * @example
     * // Count the number of UnifiedCampaigns
     * const count = await prisma.unifiedCampaign.count({
     *   where: {
     *     // ... the filter for the UnifiedCampaigns we want to count
     *   }
     * })
    **/
    count<T extends UnifiedCampaignCountArgs>(
      args?: Subset<T, UnifiedCampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnifiedCampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnifiedCampaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnifiedCampaignAggregateArgs>(args: Subset<T, UnifiedCampaignAggregateArgs>): Prisma.PrismaPromise<GetUnifiedCampaignAggregateType<T>>

    /**
     * Group by UnifiedCampaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedCampaignGroupByArgs} args - Group by arguments.
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
      T extends UnifiedCampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnifiedCampaignGroupByArgs['orderBy'] }
        : { orderBy?: UnifiedCampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnifiedCampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnifiedCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnifiedCampaign model
   */
  readonly fields: UnifiedCampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnifiedCampaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnifiedCampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UnifiedCampaign model
   */ 
  interface UnifiedCampaignFieldRefs {
    readonly id: FieldRef<"UnifiedCampaign", 'String'>
    readonly merchantId: FieldRef<"UnifiedCampaign", 'String'>
    readonly sourceId: FieldRef<"UnifiedCampaign", 'String'>
    readonly sourceConnector: FieldRef<"UnifiedCampaign", 'String'>
    readonly sourceSyncedAt: FieldRef<"UnifiedCampaign", 'DateTime'>
    readonly name: FieldRef<"UnifiedCampaign", 'String'>
    readonly type: FieldRef<"UnifiedCampaign", 'String'>
    readonly status: FieldRef<"UnifiedCampaign", 'String'>
    readonly channel: FieldRef<"UnifiedCampaign", 'String'>
    readonly periodStart: FieldRef<"UnifiedCampaign", 'DateTime'>
    readonly periodEnd: FieldRef<"UnifiedCampaign", 'DateTime'>
    readonly spendAmount: FieldRef<"UnifiedCampaign", 'Decimal'>
    readonly impressions: FieldRef<"UnifiedCampaign", 'BigInt'>
    readonly clicks: FieldRef<"UnifiedCampaign", 'BigInt'>
    readonly conversions: FieldRef<"UnifiedCampaign", 'Int'>
    readonly conversionValue: FieldRef<"UnifiedCampaign", 'Decimal'>
    readonly roas: FieldRef<"UnifiedCampaign", 'Decimal'>
    readonly sends: FieldRef<"UnifiedCampaign", 'Int'>
    readonly opens: FieldRef<"UnifiedCampaign", 'Int'>
    readonly revenueAttributed: FieldRef<"UnifiedCampaign", 'Decimal'>
    readonly rawPayload: FieldRef<"UnifiedCampaign", 'Json'>
    readonly checksum: FieldRef<"UnifiedCampaign", 'String'>
    readonly createdAt: FieldRef<"UnifiedCampaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnifiedCampaign findUnique
   */
  export type UnifiedCampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCampaign
     */
    select?: UnifiedCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCampaignInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedCampaign to fetch.
     */
    where: UnifiedCampaignWhereUniqueInput
  }

  /**
   * UnifiedCampaign findUniqueOrThrow
   */
  export type UnifiedCampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCampaign
     */
    select?: UnifiedCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCampaignInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedCampaign to fetch.
     */
    where: UnifiedCampaignWhereUniqueInput
  }

  /**
   * UnifiedCampaign findFirst
   */
  export type UnifiedCampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCampaign
     */
    select?: UnifiedCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCampaignInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedCampaign to fetch.
     */
    where?: UnifiedCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedCampaigns to fetch.
     */
    orderBy?: UnifiedCampaignOrderByWithRelationInput | UnifiedCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnifiedCampaigns.
     */
    cursor?: UnifiedCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnifiedCampaigns.
     */
    distinct?: UnifiedCampaignScalarFieldEnum | UnifiedCampaignScalarFieldEnum[]
  }

  /**
   * UnifiedCampaign findFirstOrThrow
   */
  export type UnifiedCampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCampaign
     */
    select?: UnifiedCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCampaignInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedCampaign to fetch.
     */
    where?: UnifiedCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedCampaigns to fetch.
     */
    orderBy?: UnifiedCampaignOrderByWithRelationInput | UnifiedCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnifiedCampaigns.
     */
    cursor?: UnifiedCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnifiedCampaigns.
     */
    distinct?: UnifiedCampaignScalarFieldEnum | UnifiedCampaignScalarFieldEnum[]
  }

  /**
   * UnifiedCampaign findMany
   */
  export type UnifiedCampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCampaign
     */
    select?: UnifiedCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCampaignInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedCampaigns to fetch.
     */
    where?: UnifiedCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedCampaigns to fetch.
     */
    orderBy?: UnifiedCampaignOrderByWithRelationInput | UnifiedCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnifiedCampaigns.
     */
    cursor?: UnifiedCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedCampaigns.
     */
    skip?: number
    distinct?: UnifiedCampaignScalarFieldEnum | UnifiedCampaignScalarFieldEnum[]
  }

  /**
   * UnifiedCampaign create
   */
  export type UnifiedCampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCampaign
     */
    select?: UnifiedCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a UnifiedCampaign.
     */
    data: XOR<UnifiedCampaignCreateInput, UnifiedCampaignUncheckedCreateInput>
  }

  /**
   * UnifiedCampaign createMany
   */
  export type UnifiedCampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnifiedCampaigns.
     */
    data: UnifiedCampaignCreateManyInput | UnifiedCampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnifiedCampaign createManyAndReturn
   */
  export type UnifiedCampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCampaign
     */
    select?: UnifiedCampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UnifiedCampaigns.
     */
    data: UnifiedCampaignCreateManyInput | UnifiedCampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnifiedCampaign update
   */
  export type UnifiedCampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCampaign
     */
    select?: UnifiedCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a UnifiedCampaign.
     */
    data: XOR<UnifiedCampaignUpdateInput, UnifiedCampaignUncheckedUpdateInput>
    /**
     * Choose, which UnifiedCampaign to update.
     */
    where: UnifiedCampaignWhereUniqueInput
  }

  /**
   * UnifiedCampaign updateMany
   */
  export type UnifiedCampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnifiedCampaigns.
     */
    data: XOR<UnifiedCampaignUpdateManyMutationInput, UnifiedCampaignUncheckedUpdateManyInput>
    /**
     * Filter which UnifiedCampaigns to update
     */
    where?: UnifiedCampaignWhereInput
  }

  /**
   * UnifiedCampaign upsert
   */
  export type UnifiedCampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCampaign
     */
    select?: UnifiedCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the UnifiedCampaign to update in case it exists.
     */
    where: UnifiedCampaignWhereUniqueInput
    /**
     * In case the UnifiedCampaign found by the `where` argument doesn't exist, create a new UnifiedCampaign with this data.
     */
    create: XOR<UnifiedCampaignCreateInput, UnifiedCampaignUncheckedCreateInput>
    /**
     * In case the UnifiedCampaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnifiedCampaignUpdateInput, UnifiedCampaignUncheckedUpdateInput>
  }

  /**
   * UnifiedCampaign delete
   */
  export type UnifiedCampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCampaign
     */
    select?: UnifiedCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCampaignInclude<ExtArgs> | null
    /**
     * Filter which UnifiedCampaign to delete.
     */
    where: UnifiedCampaignWhereUniqueInput
  }

  /**
   * UnifiedCampaign deleteMany
   */
  export type UnifiedCampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnifiedCampaigns to delete
     */
    where?: UnifiedCampaignWhereInput
  }

  /**
   * UnifiedCampaign without action
   */
  export type UnifiedCampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedCampaign
     */
    select?: UnifiedCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedCampaignInclude<ExtArgs> | null
  }


  /**
   * Model UnifiedInventory
   */

  export type AggregateUnifiedInventory = {
    _count: UnifiedInventoryCountAggregateOutputType | null
    _avg: UnifiedInventoryAvgAggregateOutputType | null
    _sum: UnifiedInventorySumAggregateOutputType | null
    _min: UnifiedInventoryMinAggregateOutputType | null
    _max: UnifiedInventoryMaxAggregateOutputType | null
  }

  export type UnifiedInventoryAvgAggregateOutputType = {
    quantityAvailable: number | null
    quantityCommitted: number | null
    quantityIncoming: number | null
    unitCost: Decimal | null
    unitPrice: Decimal | null
  }

  export type UnifiedInventorySumAggregateOutputType = {
    quantityAvailable: number | null
    quantityCommitted: number | null
    quantityIncoming: number | null
    unitCost: Decimal | null
    unitPrice: Decimal | null
  }

  export type UnifiedInventoryMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    sourceId: string | null
    sourceConnector: string | null
    sourceSyncedAt: Date | null
    productId: string | null
    variantId: string | null
    sku: string | null
    productName: string | null
    variantName: string | null
    quantityAvailable: number | null
    quantityCommitted: number | null
    quantityIncoming: number | null
    unitCost: Decimal | null
    unitPrice: Decimal | null
    createdAt: Date | null
  }

  export type UnifiedInventoryMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    sourceId: string | null
    sourceConnector: string | null
    sourceSyncedAt: Date | null
    productId: string | null
    variantId: string | null
    sku: string | null
    productName: string | null
    variantName: string | null
    quantityAvailable: number | null
    quantityCommitted: number | null
    quantityIncoming: number | null
    unitCost: Decimal | null
    unitPrice: Decimal | null
    createdAt: Date | null
  }

  export type UnifiedInventoryCountAggregateOutputType = {
    id: number
    merchantId: number
    sourceId: number
    sourceConnector: number
    sourceSyncedAt: number
    productId: number
    variantId: number
    sku: number
    productName: number
    variantName: number
    quantityAvailable: number
    quantityCommitted: number
    quantityIncoming: number
    unitCost: number
    unitPrice: number
    rawPayload: number
    createdAt: number
    _all: number
  }


  export type UnifiedInventoryAvgAggregateInputType = {
    quantityAvailable?: true
    quantityCommitted?: true
    quantityIncoming?: true
    unitCost?: true
    unitPrice?: true
  }

  export type UnifiedInventorySumAggregateInputType = {
    quantityAvailable?: true
    quantityCommitted?: true
    quantityIncoming?: true
    unitCost?: true
    unitPrice?: true
  }

  export type UnifiedInventoryMinAggregateInputType = {
    id?: true
    merchantId?: true
    sourceId?: true
    sourceConnector?: true
    sourceSyncedAt?: true
    productId?: true
    variantId?: true
    sku?: true
    productName?: true
    variantName?: true
    quantityAvailable?: true
    quantityCommitted?: true
    quantityIncoming?: true
    unitCost?: true
    unitPrice?: true
    createdAt?: true
  }

  export type UnifiedInventoryMaxAggregateInputType = {
    id?: true
    merchantId?: true
    sourceId?: true
    sourceConnector?: true
    sourceSyncedAt?: true
    productId?: true
    variantId?: true
    sku?: true
    productName?: true
    variantName?: true
    quantityAvailable?: true
    quantityCommitted?: true
    quantityIncoming?: true
    unitCost?: true
    unitPrice?: true
    createdAt?: true
  }

  export type UnifiedInventoryCountAggregateInputType = {
    id?: true
    merchantId?: true
    sourceId?: true
    sourceConnector?: true
    sourceSyncedAt?: true
    productId?: true
    variantId?: true
    sku?: true
    productName?: true
    variantName?: true
    quantityAvailable?: true
    quantityCommitted?: true
    quantityIncoming?: true
    unitCost?: true
    unitPrice?: true
    rawPayload?: true
    createdAt?: true
    _all?: true
  }

  export type UnifiedInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnifiedInventory to aggregate.
     */
    where?: UnifiedInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedInventories to fetch.
     */
    orderBy?: UnifiedInventoryOrderByWithRelationInput | UnifiedInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnifiedInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnifiedInventories
    **/
    _count?: true | UnifiedInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnifiedInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnifiedInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnifiedInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnifiedInventoryMaxAggregateInputType
  }

  export type GetUnifiedInventoryAggregateType<T extends UnifiedInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUnifiedInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnifiedInventory[P]>
      : GetScalarType<T[P], AggregateUnifiedInventory[P]>
  }




  export type UnifiedInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnifiedInventoryWhereInput
    orderBy?: UnifiedInventoryOrderByWithAggregationInput | UnifiedInventoryOrderByWithAggregationInput[]
    by: UnifiedInventoryScalarFieldEnum[] | UnifiedInventoryScalarFieldEnum
    having?: UnifiedInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnifiedInventoryCountAggregateInputType | true
    _avg?: UnifiedInventoryAvgAggregateInputType
    _sum?: UnifiedInventorySumAggregateInputType
    _min?: UnifiedInventoryMinAggregateInputType
    _max?: UnifiedInventoryMaxAggregateInputType
  }

  export type UnifiedInventoryGroupByOutputType = {
    id: string
    merchantId: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date
    productId: string | null
    variantId: string | null
    sku: string | null
    productName: string | null
    variantName: string | null
    quantityAvailable: number
    quantityCommitted: number
    quantityIncoming: number
    unitCost: Decimal | null
    unitPrice: Decimal | null
    rawPayload: JsonValue | null
    createdAt: Date
    _count: UnifiedInventoryCountAggregateOutputType | null
    _avg: UnifiedInventoryAvgAggregateOutputType | null
    _sum: UnifiedInventorySumAggregateOutputType | null
    _min: UnifiedInventoryMinAggregateOutputType | null
    _max: UnifiedInventoryMaxAggregateOutputType | null
  }

  type GetUnifiedInventoryGroupByPayload<T extends UnifiedInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnifiedInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnifiedInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnifiedInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], UnifiedInventoryGroupByOutputType[P]>
        }
      >
    >


  export type UnifiedInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    sourceId?: boolean
    sourceConnector?: boolean
    sourceSyncedAt?: boolean
    productId?: boolean
    variantId?: boolean
    sku?: boolean
    productName?: boolean
    variantName?: boolean
    quantityAvailable?: boolean
    quantityCommitted?: boolean
    quantityIncoming?: boolean
    unitCost?: boolean
    unitPrice?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unifiedInventory"]>

  export type UnifiedInventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    sourceId?: boolean
    sourceConnector?: boolean
    sourceSyncedAt?: boolean
    productId?: boolean
    variantId?: boolean
    sku?: boolean
    productName?: boolean
    variantName?: boolean
    quantityAvailable?: boolean
    quantityCommitted?: boolean
    quantityIncoming?: boolean
    unitCost?: boolean
    unitPrice?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unifiedInventory"]>

  export type UnifiedInventorySelectScalar = {
    id?: boolean
    merchantId?: boolean
    sourceId?: boolean
    sourceConnector?: boolean
    sourceSyncedAt?: boolean
    productId?: boolean
    variantId?: boolean
    sku?: boolean
    productName?: boolean
    variantName?: boolean
    quantityAvailable?: boolean
    quantityCommitted?: boolean
    quantityIncoming?: boolean
    unitCost?: boolean
    unitPrice?: boolean
    rawPayload?: boolean
    createdAt?: boolean
  }

  export type UnifiedInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type UnifiedInventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $UnifiedInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnifiedInventory"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      sourceId: string
      sourceConnector: string
      sourceSyncedAt: Date
      productId: string | null
      variantId: string | null
      sku: string | null
      productName: string | null
      variantName: string | null
      quantityAvailable: number
      quantityCommitted: number
      quantityIncoming: number
      unitCost: Prisma.Decimal | null
      unitPrice: Prisma.Decimal | null
      rawPayload: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["unifiedInventory"]>
    composites: {}
  }

  type UnifiedInventoryGetPayload<S extends boolean | null | undefined | UnifiedInventoryDefaultArgs> = $Result.GetResult<Prisma.$UnifiedInventoryPayload, S>

  type UnifiedInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UnifiedInventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UnifiedInventoryCountAggregateInputType | true
    }

  export interface UnifiedInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnifiedInventory'], meta: { name: 'UnifiedInventory' } }
    /**
     * Find zero or one UnifiedInventory that matches the filter.
     * @param {UnifiedInventoryFindUniqueArgs} args - Arguments to find a UnifiedInventory
     * @example
     * // Get one UnifiedInventory
     * const unifiedInventory = await prisma.unifiedInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnifiedInventoryFindUniqueArgs>(args: SelectSubset<T, UnifiedInventoryFindUniqueArgs<ExtArgs>>): Prisma__UnifiedInventoryClient<$Result.GetResult<Prisma.$UnifiedInventoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UnifiedInventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UnifiedInventoryFindUniqueOrThrowArgs} args - Arguments to find a UnifiedInventory
     * @example
     * // Get one UnifiedInventory
     * const unifiedInventory = await prisma.unifiedInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnifiedInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UnifiedInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnifiedInventoryClient<$Result.GetResult<Prisma.$UnifiedInventoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UnifiedInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedInventoryFindFirstArgs} args - Arguments to find a UnifiedInventory
     * @example
     * // Get one UnifiedInventory
     * const unifiedInventory = await prisma.unifiedInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnifiedInventoryFindFirstArgs>(args?: SelectSubset<T, UnifiedInventoryFindFirstArgs<ExtArgs>>): Prisma__UnifiedInventoryClient<$Result.GetResult<Prisma.$UnifiedInventoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UnifiedInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedInventoryFindFirstOrThrowArgs} args - Arguments to find a UnifiedInventory
     * @example
     * // Get one UnifiedInventory
     * const unifiedInventory = await prisma.unifiedInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnifiedInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UnifiedInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnifiedInventoryClient<$Result.GetResult<Prisma.$UnifiedInventoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UnifiedInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnifiedInventories
     * const unifiedInventories = await prisma.unifiedInventory.findMany()
     * 
     * // Get first 10 UnifiedInventories
     * const unifiedInventories = await prisma.unifiedInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unifiedInventoryWithIdOnly = await prisma.unifiedInventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnifiedInventoryFindManyArgs>(args?: SelectSubset<T, UnifiedInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiedInventoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UnifiedInventory.
     * @param {UnifiedInventoryCreateArgs} args - Arguments to create a UnifiedInventory.
     * @example
     * // Create one UnifiedInventory
     * const UnifiedInventory = await prisma.unifiedInventory.create({
     *   data: {
     *     // ... data to create a UnifiedInventory
     *   }
     * })
     * 
     */
    create<T extends UnifiedInventoryCreateArgs>(args: SelectSubset<T, UnifiedInventoryCreateArgs<ExtArgs>>): Prisma__UnifiedInventoryClient<$Result.GetResult<Prisma.$UnifiedInventoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UnifiedInventories.
     * @param {UnifiedInventoryCreateManyArgs} args - Arguments to create many UnifiedInventories.
     * @example
     * // Create many UnifiedInventories
     * const unifiedInventory = await prisma.unifiedInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnifiedInventoryCreateManyArgs>(args?: SelectSubset<T, UnifiedInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnifiedInventories and returns the data saved in the database.
     * @param {UnifiedInventoryCreateManyAndReturnArgs} args - Arguments to create many UnifiedInventories.
     * @example
     * // Create many UnifiedInventories
     * const unifiedInventory = await prisma.unifiedInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnifiedInventories and only return the `id`
     * const unifiedInventoryWithIdOnly = await prisma.unifiedInventory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnifiedInventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, UnifiedInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiedInventoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UnifiedInventory.
     * @param {UnifiedInventoryDeleteArgs} args - Arguments to delete one UnifiedInventory.
     * @example
     * // Delete one UnifiedInventory
     * const UnifiedInventory = await prisma.unifiedInventory.delete({
     *   where: {
     *     // ... filter to delete one UnifiedInventory
     *   }
     * })
     * 
     */
    delete<T extends UnifiedInventoryDeleteArgs>(args: SelectSubset<T, UnifiedInventoryDeleteArgs<ExtArgs>>): Prisma__UnifiedInventoryClient<$Result.GetResult<Prisma.$UnifiedInventoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UnifiedInventory.
     * @param {UnifiedInventoryUpdateArgs} args - Arguments to update one UnifiedInventory.
     * @example
     * // Update one UnifiedInventory
     * const unifiedInventory = await prisma.unifiedInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnifiedInventoryUpdateArgs>(args: SelectSubset<T, UnifiedInventoryUpdateArgs<ExtArgs>>): Prisma__UnifiedInventoryClient<$Result.GetResult<Prisma.$UnifiedInventoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UnifiedInventories.
     * @param {UnifiedInventoryDeleteManyArgs} args - Arguments to filter UnifiedInventories to delete.
     * @example
     * // Delete a few UnifiedInventories
     * const { count } = await prisma.unifiedInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnifiedInventoryDeleteManyArgs>(args?: SelectSubset<T, UnifiedInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnifiedInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnifiedInventories
     * const unifiedInventory = await prisma.unifiedInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnifiedInventoryUpdateManyArgs>(args: SelectSubset<T, UnifiedInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UnifiedInventory.
     * @param {UnifiedInventoryUpsertArgs} args - Arguments to update or create a UnifiedInventory.
     * @example
     * // Update or create a UnifiedInventory
     * const unifiedInventory = await prisma.unifiedInventory.upsert({
     *   create: {
     *     // ... data to create a UnifiedInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnifiedInventory we want to update
     *   }
     * })
     */
    upsert<T extends UnifiedInventoryUpsertArgs>(args: SelectSubset<T, UnifiedInventoryUpsertArgs<ExtArgs>>): Prisma__UnifiedInventoryClient<$Result.GetResult<Prisma.$UnifiedInventoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UnifiedInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedInventoryCountArgs} args - Arguments to filter UnifiedInventories to count.
     * @example
     * // Count the number of UnifiedInventories
     * const count = await prisma.unifiedInventory.count({
     *   where: {
     *     // ... the filter for the UnifiedInventories we want to count
     *   }
     * })
    **/
    count<T extends UnifiedInventoryCountArgs>(
      args?: Subset<T, UnifiedInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnifiedInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnifiedInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnifiedInventoryAggregateArgs>(args: Subset<T, UnifiedInventoryAggregateArgs>): Prisma.PrismaPromise<GetUnifiedInventoryAggregateType<T>>

    /**
     * Group by UnifiedInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiedInventoryGroupByArgs} args - Group by arguments.
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
      T extends UnifiedInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnifiedInventoryGroupByArgs['orderBy'] }
        : { orderBy?: UnifiedInventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnifiedInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnifiedInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnifiedInventory model
   */
  readonly fields: UnifiedInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnifiedInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnifiedInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UnifiedInventory model
   */ 
  interface UnifiedInventoryFieldRefs {
    readonly id: FieldRef<"UnifiedInventory", 'String'>
    readonly merchantId: FieldRef<"UnifiedInventory", 'String'>
    readonly sourceId: FieldRef<"UnifiedInventory", 'String'>
    readonly sourceConnector: FieldRef<"UnifiedInventory", 'String'>
    readonly sourceSyncedAt: FieldRef<"UnifiedInventory", 'DateTime'>
    readonly productId: FieldRef<"UnifiedInventory", 'String'>
    readonly variantId: FieldRef<"UnifiedInventory", 'String'>
    readonly sku: FieldRef<"UnifiedInventory", 'String'>
    readonly productName: FieldRef<"UnifiedInventory", 'String'>
    readonly variantName: FieldRef<"UnifiedInventory", 'String'>
    readonly quantityAvailable: FieldRef<"UnifiedInventory", 'Int'>
    readonly quantityCommitted: FieldRef<"UnifiedInventory", 'Int'>
    readonly quantityIncoming: FieldRef<"UnifiedInventory", 'Int'>
    readonly unitCost: FieldRef<"UnifiedInventory", 'Decimal'>
    readonly unitPrice: FieldRef<"UnifiedInventory", 'Decimal'>
    readonly rawPayload: FieldRef<"UnifiedInventory", 'Json'>
    readonly createdAt: FieldRef<"UnifiedInventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnifiedInventory findUnique
   */
  export type UnifiedInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedInventory
     */
    select?: UnifiedInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedInventoryInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedInventory to fetch.
     */
    where: UnifiedInventoryWhereUniqueInput
  }

  /**
   * UnifiedInventory findUniqueOrThrow
   */
  export type UnifiedInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedInventory
     */
    select?: UnifiedInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedInventoryInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedInventory to fetch.
     */
    where: UnifiedInventoryWhereUniqueInput
  }

  /**
   * UnifiedInventory findFirst
   */
  export type UnifiedInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedInventory
     */
    select?: UnifiedInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedInventoryInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedInventory to fetch.
     */
    where?: UnifiedInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedInventories to fetch.
     */
    orderBy?: UnifiedInventoryOrderByWithRelationInput | UnifiedInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnifiedInventories.
     */
    cursor?: UnifiedInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnifiedInventories.
     */
    distinct?: UnifiedInventoryScalarFieldEnum | UnifiedInventoryScalarFieldEnum[]
  }

  /**
   * UnifiedInventory findFirstOrThrow
   */
  export type UnifiedInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedInventory
     */
    select?: UnifiedInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedInventoryInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedInventory to fetch.
     */
    where?: UnifiedInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedInventories to fetch.
     */
    orderBy?: UnifiedInventoryOrderByWithRelationInput | UnifiedInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnifiedInventories.
     */
    cursor?: UnifiedInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnifiedInventories.
     */
    distinct?: UnifiedInventoryScalarFieldEnum | UnifiedInventoryScalarFieldEnum[]
  }

  /**
   * UnifiedInventory findMany
   */
  export type UnifiedInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedInventory
     */
    select?: UnifiedInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedInventoryInclude<ExtArgs> | null
    /**
     * Filter, which UnifiedInventories to fetch.
     */
    where?: UnifiedInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiedInventories to fetch.
     */
    orderBy?: UnifiedInventoryOrderByWithRelationInput | UnifiedInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnifiedInventories.
     */
    cursor?: UnifiedInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiedInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiedInventories.
     */
    skip?: number
    distinct?: UnifiedInventoryScalarFieldEnum | UnifiedInventoryScalarFieldEnum[]
  }

  /**
   * UnifiedInventory create
   */
  export type UnifiedInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedInventory
     */
    select?: UnifiedInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UnifiedInventory.
     */
    data: XOR<UnifiedInventoryCreateInput, UnifiedInventoryUncheckedCreateInput>
  }

  /**
   * UnifiedInventory createMany
   */
  export type UnifiedInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnifiedInventories.
     */
    data: UnifiedInventoryCreateManyInput | UnifiedInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnifiedInventory createManyAndReturn
   */
  export type UnifiedInventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedInventory
     */
    select?: UnifiedInventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UnifiedInventories.
     */
    data: UnifiedInventoryCreateManyInput | UnifiedInventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedInventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnifiedInventory update
   */
  export type UnifiedInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedInventory
     */
    select?: UnifiedInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UnifiedInventory.
     */
    data: XOR<UnifiedInventoryUpdateInput, UnifiedInventoryUncheckedUpdateInput>
    /**
     * Choose, which UnifiedInventory to update.
     */
    where: UnifiedInventoryWhereUniqueInput
  }

  /**
   * UnifiedInventory updateMany
   */
  export type UnifiedInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnifiedInventories.
     */
    data: XOR<UnifiedInventoryUpdateManyMutationInput, UnifiedInventoryUncheckedUpdateManyInput>
    /**
     * Filter which UnifiedInventories to update
     */
    where?: UnifiedInventoryWhereInput
  }

  /**
   * UnifiedInventory upsert
   */
  export type UnifiedInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedInventory
     */
    select?: UnifiedInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UnifiedInventory to update in case it exists.
     */
    where: UnifiedInventoryWhereUniqueInput
    /**
     * In case the UnifiedInventory found by the `where` argument doesn't exist, create a new UnifiedInventory with this data.
     */
    create: XOR<UnifiedInventoryCreateInput, UnifiedInventoryUncheckedCreateInput>
    /**
     * In case the UnifiedInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnifiedInventoryUpdateInput, UnifiedInventoryUncheckedUpdateInput>
  }

  /**
   * UnifiedInventory delete
   */
  export type UnifiedInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedInventory
     */
    select?: UnifiedInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedInventoryInclude<ExtArgs> | null
    /**
     * Filter which UnifiedInventory to delete.
     */
    where: UnifiedInventoryWhereUniqueInput
  }

  /**
   * UnifiedInventory deleteMany
   */
  export type UnifiedInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnifiedInventories to delete
     */
    where?: UnifiedInventoryWhereInput
  }

  /**
   * UnifiedInventory without action
   */
  export type UnifiedInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiedInventory
     */
    select?: UnifiedInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnifiedInventoryInclude<ExtArgs> | null
  }


  /**
   * Model AgentRecommendation
   */

  export type AggregateAgentRecommendation = {
    _count: AgentRecommendationCountAggregateOutputType | null
    _avg: AgentRecommendationAvgAggregateOutputType | null
    _sum: AgentRecommendationSumAggregateOutputType | null
    _min: AgentRecommendationMinAggregateOutputType | null
    _max: AgentRecommendationMaxAggregateOutputType | null
  }

  export type AgentRecommendationAvgAggregateOutputType = {
    reorderQuantity: number | null
    daysToDepletion: number | null
    revenueAtRisk: Decimal | null
    confidenceScore: number | null
  }

  export type AgentRecommendationSumAggregateOutputType = {
    reorderQuantity: number | null
    daysToDepletion: number | null
    revenueAtRisk: Decimal | null
    confidenceScore: number | null
  }

  export type AgentRecommendationMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    agentRunId: string | null
    createdAt: Date | null
    sku: string | null
    productName: string | null
    riskLevel: string | null
    recommendedAction: string | null
    reorderQuantity: number | null
    daysToDepletion: number | null
    revenueAtRisk: Decimal | null
    confidenceScore: number | null
    reasoningSummary: string | null
    status: string | null
    reviewedAt: Date | null
    reviewedBy: string | null
  }

  export type AgentRecommendationMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    agentRunId: string | null
    createdAt: Date | null
    sku: string | null
    productName: string | null
    riskLevel: string | null
    recommendedAction: string | null
    reorderQuantity: number | null
    daysToDepletion: number | null
    revenueAtRisk: Decimal | null
    confidenceScore: number | null
    reasoningSummary: string | null
    status: string | null
    reviewedAt: Date | null
    reviewedBy: string | null
  }

  export type AgentRecommendationCountAggregateOutputType = {
    id: number
    merchantId: number
    agentRunId: number
    createdAt: number
    sku: number
    productName: number
    riskLevel: number
    recommendedAction: number
    reorderQuantity: number
    daysToDepletion: number
    revenueAtRisk: number
    confidenceScore: number
    reasoningSummary: number
    citations: number
    status: number
    reviewedAt: number
    reviewedBy: number
    _all: number
  }


  export type AgentRecommendationAvgAggregateInputType = {
    reorderQuantity?: true
    daysToDepletion?: true
    revenueAtRisk?: true
    confidenceScore?: true
  }

  export type AgentRecommendationSumAggregateInputType = {
    reorderQuantity?: true
    daysToDepletion?: true
    revenueAtRisk?: true
    confidenceScore?: true
  }

  export type AgentRecommendationMinAggregateInputType = {
    id?: true
    merchantId?: true
    agentRunId?: true
    createdAt?: true
    sku?: true
    productName?: true
    riskLevel?: true
    recommendedAction?: true
    reorderQuantity?: true
    daysToDepletion?: true
    revenueAtRisk?: true
    confidenceScore?: true
    reasoningSummary?: true
    status?: true
    reviewedAt?: true
    reviewedBy?: true
  }

  export type AgentRecommendationMaxAggregateInputType = {
    id?: true
    merchantId?: true
    agentRunId?: true
    createdAt?: true
    sku?: true
    productName?: true
    riskLevel?: true
    recommendedAction?: true
    reorderQuantity?: true
    daysToDepletion?: true
    revenueAtRisk?: true
    confidenceScore?: true
    reasoningSummary?: true
    status?: true
    reviewedAt?: true
    reviewedBy?: true
  }

  export type AgentRecommendationCountAggregateInputType = {
    id?: true
    merchantId?: true
    agentRunId?: true
    createdAt?: true
    sku?: true
    productName?: true
    riskLevel?: true
    recommendedAction?: true
    reorderQuantity?: true
    daysToDepletion?: true
    revenueAtRisk?: true
    confidenceScore?: true
    reasoningSummary?: true
    citations?: true
    status?: true
    reviewedAt?: true
    reviewedBy?: true
    _all?: true
  }

  export type AgentRecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentRecommendation to aggregate.
     */
    where?: AgentRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRecommendations to fetch.
     */
    orderBy?: AgentRecommendationOrderByWithRelationInput | AgentRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentRecommendations
    **/
    _count?: true | AgentRecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentRecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentRecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentRecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentRecommendationMaxAggregateInputType
  }

  export type GetAgentRecommendationAggregateType<T extends AgentRecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentRecommendation[P]>
      : GetScalarType<T[P], AggregateAgentRecommendation[P]>
  }




  export type AgentRecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentRecommendationWhereInput
    orderBy?: AgentRecommendationOrderByWithAggregationInput | AgentRecommendationOrderByWithAggregationInput[]
    by: AgentRecommendationScalarFieldEnum[] | AgentRecommendationScalarFieldEnum
    having?: AgentRecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentRecommendationCountAggregateInputType | true
    _avg?: AgentRecommendationAvgAggregateInputType
    _sum?: AgentRecommendationSumAggregateInputType
    _min?: AgentRecommendationMinAggregateInputType
    _max?: AgentRecommendationMaxAggregateInputType
  }

  export type AgentRecommendationGroupByOutputType = {
    id: string
    merchantId: string
    agentRunId: string
    createdAt: Date
    sku: string | null
    productName: string | null
    riskLevel: string
    recommendedAction: string
    reorderQuantity: number | null
    daysToDepletion: number | null
    revenueAtRisk: Decimal | null
    confidenceScore: number | null
    reasoningSummary: string | null
    citations: JsonValue | null
    status: string
    reviewedAt: Date | null
    reviewedBy: string | null
    _count: AgentRecommendationCountAggregateOutputType | null
    _avg: AgentRecommendationAvgAggregateOutputType | null
    _sum: AgentRecommendationSumAggregateOutputType | null
    _min: AgentRecommendationMinAggregateOutputType | null
    _max: AgentRecommendationMaxAggregateOutputType | null
  }

  type GetAgentRecommendationGroupByPayload<T extends AgentRecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentRecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentRecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentRecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], AgentRecommendationGroupByOutputType[P]>
        }
      >
    >


  export type AgentRecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    agentRunId?: boolean
    createdAt?: boolean
    sku?: boolean
    productName?: boolean
    riskLevel?: boolean
    recommendedAction?: boolean
    reorderQuantity?: boolean
    daysToDepletion?: boolean
    revenueAtRisk?: boolean
    confidenceScore?: boolean
    reasoningSummary?: boolean
    citations?: boolean
    status?: boolean
    reviewedAt?: boolean
    reviewedBy?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentRecommendation"]>

  export type AgentRecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    agentRunId?: boolean
    createdAt?: boolean
    sku?: boolean
    productName?: boolean
    riskLevel?: boolean
    recommendedAction?: boolean
    reorderQuantity?: boolean
    daysToDepletion?: boolean
    revenueAtRisk?: boolean
    confidenceScore?: boolean
    reasoningSummary?: boolean
    citations?: boolean
    status?: boolean
    reviewedAt?: boolean
    reviewedBy?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentRecommendation"]>

  export type AgentRecommendationSelectScalar = {
    id?: boolean
    merchantId?: boolean
    agentRunId?: boolean
    createdAt?: boolean
    sku?: boolean
    productName?: boolean
    riskLevel?: boolean
    recommendedAction?: boolean
    reorderQuantity?: boolean
    daysToDepletion?: boolean
    revenueAtRisk?: boolean
    confidenceScore?: boolean
    reasoningSummary?: boolean
    citations?: boolean
    status?: boolean
    reviewedAt?: boolean
    reviewedBy?: boolean
  }

  export type AgentRecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type AgentRecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $AgentRecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentRecommendation"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      agentRunId: string
      createdAt: Date
      sku: string | null
      productName: string | null
      riskLevel: string
      recommendedAction: string
      reorderQuantity: number | null
      daysToDepletion: number | null
      revenueAtRisk: Prisma.Decimal | null
      confidenceScore: number | null
      reasoningSummary: string | null
      citations: Prisma.JsonValue | null
      status: string
      reviewedAt: Date | null
      reviewedBy: string | null
    }, ExtArgs["result"]["agentRecommendation"]>
    composites: {}
  }

  type AgentRecommendationGetPayload<S extends boolean | null | undefined | AgentRecommendationDefaultArgs> = $Result.GetResult<Prisma.$AgentRecommendationPayload, S>

  type AgentRecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AgentRecommendationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AgentRecommendationCountAggregateInputType | true
    }

  export interface AgentRecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentRecommendation'], meta: { name: 'AgentRecommendation' } }
    /**
     * Find zero or one AgentRecommendation that matches the filter.
     * @param {AgentRecommendationFindUniqueArgs} args - Arguments to find a AgentRecommendation
     * @example
     * // Get one AgentRecommendation
     * const agentRecommendation = await prisma.agentRecommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentRecommendationFindUniqueArgs>(args: SelectSubset<T, AgentRecommendationFindUniqueArgs<ExtArgs>>): Prisma__AgentRecommendationClient<$Result.GetResult<Prisma.$AgentRecommendationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AgentRecommendation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AgentRecommendationFindUniqueOrThrowArgs} args - Arguments to find a AgentRecommendation
     * @example
     * // Get one AgentRecommendation
     * const agentRecommendation = await prisma.agentRecommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentRecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentRecommendationClient<$Result.GetResult<Prisma.$AgentRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AgentRecommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRecommendationFindFirstArgs} args - Arguments to find a AgentRecommendation
     * @example
     * // Get one AgentRecommendation
     * const agentRecommendation = await prisma.agentRecommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentRecommendationFindFirstArgs>(args?: SelectSubset<T, AgentRecommendationFindFirstArgs<ExtArgs>>): Prisma__AgentRecommendationClient<$Result.GetResult<Prisma.$AgentRecommendationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AgentRecommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRecommendationFindFirstOrThrowArgs} args - Arguments to find a AgentRecommendation
     * @example
     * // Get one AgentRecommendation
     * const agentRecommendation = await prisma.agentRecommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentRecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentRecommendationClient<$Result.GetResult<Prisma.$AgentRecommendationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AgentRecommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentRecommendations
     * const agentRecommendations = await prisma.agentRecommendation.findMany()
     * 
     * // Get first 10 AgentRecommendations
     * const agentRecommendations = await prisma.agentRecommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentRecommendationWithIdOnly = await prisma.agentRecommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentRecommendationFindManyArgs>(args?: SelectSubset<T, AgentRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRecommendationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AgentRecommendation.
     * @param {AgentRecommendationCreateArgs} args - Arguments to create a AgentRecommendation.
     * @example
     * // Create one AgentRecommendation
     * const AgentRecommendation = await prisma.agentRecommendation.create({
     *   data: {
     *     // ... data to create a AgentRecommendation
     *   }
     * })
     * 
     */
    create<T extends AgentRecommendationCreateArgs>(args: SelectSubset<T, AgentRecommendationCreateArgs<ExtArgs>>): Prisma__AgentRecommendationClient<$Result.GetResult<Prisma.$AgentRecommendationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AgentRecommendations.
     * @param {AgentRecommendationCreateManyArgs} args - Arguments to create many AgentRecommendations.
     * @example
     * // Create many AgentRecommendations
     * const agentRecommendation = await prisma.agentRecommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentRecommendationCreateManyArgs>(args?: SelectSubset<T, AgentRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentRecommendations and returns the data saved in the database.
     * @param {AgentRecommendationCreateManyAndReturnArgs} args - Arguments to create many AgentRecommendations.
     * @example
     * // Create many AgentRecommendations
     * const agentRecommendation = await prisma.agentRecommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentRecommendations and only return the `id`
     * const agentRecommendationWithIdOnly = await prisma.agentRecommendation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentRecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRecommendationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AgentRecommendation.
     * @param {AgentRecommendationDeleteArgs} args - Arguments to delete one AgentRecommendation.
     * @example
     * // Delete one AgentRecommendation
     * const AgentRecommendation = await prisma.agentRecommendation.delete({
     *   where: {
     *     // ... filter to delete one AgentRecommendation
     *   }
     * })
     * 
     */
    delete<T extends AgentRecommendationDeleteArgs>(args: SelectSubset<T, AgentRecommendationDeleteArgs<ExtArgs>>): Prisma__AgentRecommendationClient<$Result.GetResult<Prisma.$AgentRecommendationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AgentRecommendation.
     * @param {AgentRecommendationUpdateArgs} args - Arguments to update one AgentRecommendation.
     * @example
     * // Update one AgentRecommendation
     * const agentRecommendation = await prisma.agentRecommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentRecommendationUpdateArgs>(args: SelectSubset<T, AgentRecommendationUpdateArgs<ExtArgs>>): Prisma__AgentRecommendationClient<$Result.GetResult<Prisma.$AgentRecommendationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AgentRecommendations.
     * @param {AgentRecommendationDeleteManyArgs} args - Arguments to filter AgentRecommendations to delete.
     * @example
     * // Delete a few AgentRecommendations
     * const { count } = await prisma.agentRecommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentRecommendationDeleteManyArgs>(args?: SelectSubset<T, AgentRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentRecommendations
     * const agentRecommendation = await prisma.agentRecommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentRecommendationUpdateManyArgs>(args: SelectSubset<T, AgentRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AgentRecommendation.
     * @param {AgentRecommendationUpsertArgs} args - Arguments to update or create a AgentRecommendation.
     * @example
     * // Update or create a AgentRecommendation
     * const agentRecommendation = await prisma.agentRecommendation.upsert({
     *   create: {
     *     // ... data to create a AgentRecommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentRecommendation we want to update
     *   }
     * })
     */
    upsert<T extends AgentRecommendationUpsertArgs>(args: SelectSubset<T, AgentRecommendationUpsertArgs<ExtArgs>>): Prisma__AgentRecommendationClient<$Result.GetResult<Prisma.$AgentRecommendationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AgentRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRecommendationCountArgs} args - Arguments to filter AgentRecommendations to count.
     * @example
     * // Count the number of AgentRecommendations
     * const count = await prisma.agentRecommendation.count({
     *   where: {
     *     // ... the filter for the AgentRecommendations we want to count
     *   }
     * })
    **/
    count<T extends AgentRecommendationCountArgs>(
      args?: Subset<T, AgentRecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentRecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentRecommendationAggregateArgs>(args: Subset<T, AgentRecommendationAggregateArgs>): Prisma.PrismaPromise<GetAgentRecommendationAggregateType<T>>

    /**
     * Group by AgentRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRecommendationGroupByArgs} args - Group by arguments.
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
      T extends AgentRecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentRecommendationGroupByArgs['orderBy'] }
        : { orderBy?: AgentRecommendationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentRecommendation model
   */
  readonly fields: AgentRecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentRecommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentRecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AgentRecommendation model
   */ 
  interface AgentRecommendationFieldRefs {
    readonly id: FieldRef<"AgentRecommendation", 'String'>
    readonly merchantId: FieldRef<"AgentRecommendation", 'String'>
    readonly agentRunId: FieldRef<"AgentRecommendation", 'String'>
    readonly createdAt: FieldRef<"AgentRecommendation", 'DateTime'>
    readonly sku: FieldRef<"AgentRecommendation", 'String'>
    readonly productName: FieldRef<"AgentRecommendation", 'String'>
    readonly riskLevel: FieldRef<"AgentRecommendation", 'String'>
    readonly recommendedAction: FieldRef<"AgentRecommendation", 'String'>
    readonly reorderQuantity: FieldRef<"AgentRecommendation", 'Int'>
    readonly daysToDepletion: FieldRef<"AgentRecommendation", 'Float'>
    readonly revenueAtRisk: FieldRef<"AgentRecommendation", 'Decimal'>
    readonly confidenceScore: FieldRef<"AgentRecommendation", 'Float'>
    readonly reasoningSummary: FieldRef<"AgentRecommendation", 'String'>
    readonly citations: FieldRef<"AgentRecommendation", 'Json'>
    readonly status: FieldRef<"AgentRecommendation", 'String'>
    readonly reviewedAt: FieldRef<"AgentRecommendation", 'DateTime'>
    readonly reviewedBy: FieldRef<"AgentRecommendation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AgentRecommendation findUnique
   */
  export type AgentRecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRecommendation
     */
    select?: AgentRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which AgentRecommendation to fetch.
     */
    where: AgentRecommendationWhereUniqueInput
  }

  /**
   * AgentRecommendation findUniqueOrThrow
   */
  export type AgentRecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRecommendation
     */
    select?: AgentRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which AgentRecommendation to fetch.
     */
    where: AgentRecommendationWhereUniqueInput
  }

  /**
   * AgentRecommendation findFirst
   */
  export type AgentRecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRecommendation
     */
    select?: AgentRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which AgentRecommendation to fetch.
     */
    where?: AgentRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRecommendations to fetch.
     */
    orderBy?: AgentRecommendationOrderByWithRelationInput | AgentRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentRecommendations.
     */
    cursor?: AgentRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentRecommendations.
     */
    distinct?: AgentRecommendationScalarFieldEnum | AgentRecommendationScalarFieldEnum[]
  }

  /**
   * AgentRecommendation findFirstOrThrow
   */
  export type AgentRecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRecommendation
     */
    select?: AgentRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which AgentRecommendation to fetch.
     */
    where?: AgentRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRecommendations to fetch.
     */
    orderBy?: AgentRecommendationOrderByWithRelationInput | AgentRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentRecommendations.
     */
    cursor?: AgentRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentRecommendations.
     */
    distinct?: AgentRecommendationScalarFieldEnum | AgentRecommendationScalarFieldEnum[]
  }

  /**
   * AgentRecommendation findMany
   */
  export type AgentRecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRecommendation
     */
    select?: AgentRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which AgentRecommendations to fetch.
     */
    where?: AgentRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRecommendations to fetch.
     */
    orderBy?: AgentRecommendationOrderByWithRelationInput | AgentRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentRecommendations.
     */
    cursor?: AgentRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRecommendations.
     */
    skip?: number
    distinct?: AgentRecommendationScalarFieldEnum | AgentRecommendationScalarFieldEnum[]
  }

  /**
   * AgentRecommendation create
   */
  export type AgentRecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRecommendation
     */
    select?: AgentRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentRecommendation.
     */
    data: XOR<AgentRecommendationCreateInput, AgentRecommendationUncheckedCreateInput>
  }

  /**
   * AgentRecommendation createMany
   */
  export type AgentRecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentRecommendations.
     */
    data: AgentRecommendationCreateManyInput | AgentRecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentRecommendation createManyAndReturn
   */
  export type AgentRecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRecommendation
     */
    select?: AgentRecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AgentRecommendations.
     */
    data: AgentRecommendationCreateManyInput | AgentRecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentRecommendation update
   */
  export type AgentRecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRecommendation
     */
    select?: AgentRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentRecommendation.
     */
    data: XOR<AgentRecommendationUpdateInput, AgentRecommendationUncheckedUpdateInput>
    /**
     * Choose, which AgentRecommendation to update.
     */
    where: AgentRecommendationWhereUniqueInput
  }

  /**
   * AgentRecommendation updateMany
   */
  export type AgentRecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentRecommendations.
     */
    data: XOR<AgentRecommendationUpdateManyMutationInput, AgentRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which AgentRecommendations to update
     */
    where?: AgentRecommendationWhereInput
  }

  /**
   * AgentRecommendation upsert
   */
  export type AgentRecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRecommendation
     */
    select?: AgentRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentRecommendation to update in case it exists.
     */
    where: AgentRecommendationWhereUniqueInput
    /**
     * In case the AgentRecommendation found by the `where` argument doesn't exist, create a new AgentRecommendation with this data.
     */
    create: XOR<AgentRecommendationCreateInput, AgentRecommendationUncheckedCreateInput>
    /**
     * In case the AgentRecommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentRecommendationUpdateInput, AgentRecommendationUncheckedUpdateInput>
  }

  /**
   * AgentRecommendation delete
   */
  export type AgentRecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRecommendation
     */
    select?: AgentRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRecommendationInclude<ExtArgs> | null
    /**
     * Filter which AgentRecommendation to delete.
     */
    where: AgentRecommendationWhereUniqueInput
  }

  /**
   * AgentRecommendation deleteMany
   */
  export type AgentRecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentRecommendations to delete
     */
    where?: AgentRecommendationWhereInput
  }

  /**
   * AgentRecommendation without action
   */
  export type AgentRecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRecommendation
     */
    select?: AgentRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRecommendationInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    actorId: string | null
    actorType: string | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    actorId: string | null
    actorType: string | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    merchantId: number
    actorId: number
    actorType: number
    action: number
    resourceType: number
    resourceId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    merchantId?: true
    actorId?: true
    actorType?: true
    action?: true
    resourceType?: true
    resourceId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    merchantId?: true
    actorId?: true
    actorType?: true
    action?: true
    resourceType?: true
    resourceId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    merchantId?: true
    actorId?: true
    actorType?: true
    action?: true
    resourceType?: true
    resourceId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
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
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    merchantId: string | null
    actorId: string | null
    actorType: string | null
    action: string
    resourceType: string | null
    resourceId: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    actorId?: boolean
    actorType?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    createdAt?: boolean
    merchant?: boolean | AuditLog$merchantArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    actorId?: boolean
    actorType?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    createdAt?: boolean
    merchant?: boolean | AuditLog$merchantArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    merchantId?: boolean
    actorId?: boolean
    actorType?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | AuditLog$merchantArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | AuditLog$merchantArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string | null
      actorId: string | null
      actorType: string | null
      action: string
      resourceType: string | null
      resourceId: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends AuditLog$merchantArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$merchantArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly merchantId: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly actorType: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly resourceType: FieldRef<"AuditLog", 'String'>
    readonly resourceId: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
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
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
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
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
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
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog.merchant
   */
  export type AuditLog$merchantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    where?: MerchantWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model AgentRunLog
   */

  export type AggregateAgentRunLog = {
    _count: AgentRunLogCountAggregateOutputType | null
    _avg: AgentRunLogAvgAggregateOutputType | null
    _sum: AgentRunLogSumAggregateOutputType | null
    _min: AgentRunLogMinAggregateOutputType | null
    _max: AgentRunLogMaxAggregateOutputType | null
  }

  export type AgentRunLogAvgAggregateOutputType = {
    durationMs: number | null
  }

  export type AgentRunLogSumAggregateOutputType = {
    durationMs: number | null
  }

  export type AgentRunLogMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    agent: string | null
    triggeredBy: string | null
    startedAt: Date | null
    completedAt: Date | null
    durationMs: number | null
    status: string | null
    createdAt: Date | null
  }

  export type AgentRunLogMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    agent: string | null
    triggeredBy: string | null
    startedAt: Date | null
    completedAt: Date | null
    durationMs: number | null
    status: string | null
    createdAt: Date | null
  }

  export type AgentRunLogCountAggregateOutputType = {
    id: number
    merchantId: number
    agent: number
    triggeredBy: number
    startedAt: number
    completedAt: number
    durationMs: number
    status: number
    nodesExecuted: number
    llmCalls: number
    errors: number
    createdAt: number
    _all: number
  }


  export type AgentRunLogAvgAggregateInputType = {
    durationMs?: true
  }

  export type AgentRunLogSumAggregateInputType = {
    durationMs?: true
  }

  export type AgentRunLogMinAggregateInputType = {
    id?: true
    merchantId?: true
    agent?: true
    triggeredBy?: true
    startedAt?: true
    completedAt?: true
    durationMs?: true
    status?: true
    createdAt?: true
  }

  export type AgentRunLogMaxAggregateInputType = {
    id?: true
    merchantId?: true
    agent?: true
    triggeredBy?: true
    startedAt?: true
    completedAt?: true
    durationMs?: true
    status?: true
    createdAt?: true
  }

  export type AgentRunLogCountAggregateInputType = {
    id?: true
    merchantId?: true
    agent?: true
    triggeredBy?: true
    startedAt?: true
    completedAt?: true
    durationMs?: true
    status?: true
    nodesExecuted?: true
    llmCalls?: true
    errors?: true
    createdAt?: true
    _all?: true
  }

  export type AgentRunLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentRunLog to aggregate.
     */
    where?: AgentRunLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRunLogs to fetch.
     */
    orderBy?: AgentRunLogOrderByWithRelationInput | AgentRunLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentRunLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRunLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRunLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentRunLogs
    **/
    _count?: true | AgentRunLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentRunLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentRunLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentRunLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentRunLogMaxAggregateInputType
  }

  export type GetAgentRunLogAggregateType<T extends AgentRunLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentRunLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentRunLog[P]>
      : GetScalarType<T[P], AggregateAgentRunLog[P]>
  }




  export type AgentRunLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentRunLogWhereInput
    orderBy?: AgentRunLogOrderByWithAggregationInput | AgentRunLogOrderByWithAggregationInput[]
    by: AgentRunLogScalarFieldEnum[] | AgentRunLogScalarFieldEnum
    having?: AgentRunLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentRunLogCountAggregateInputType | true
    _avg?: AgentRunLogAvgAggregateInputType
    _sum?: AgentRunLogSumAggregateInputType
    _min?: AgentRunLogMinAggregateInputType
    _max?: AgentRunLogMaxAggregateInputType
  }

  export type AgentRunLogGroupByOutputType = {
    id: string
    merchantId: string
    agent: string
    triggeredBy: string
    startedAt: Date
    completedAt: Date | null
    durationMs: number | null
    status: string
    nodesExecuted: JsonValue | null
    llmCalls: JsonValue | null
    errors: JsonValue | null
    createdAt: Date
    _count: AgentRunLogCountAggregateOutputType | null
    _avg: AgentRunLogAvgAggregateOutputType | null
    _sum: AgentRunLogSumAggregateOutputType | null
    _min: AgentRunLogMinAggregateOutputType | null
    _max: AgentRunLogMaxAggregateOutputType | null
  }

  type GetAgentRunLogGroupByPayload<T extends AgentRunLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentRunLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentRunLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentRunLogGroupByOutputType[P]>
            : GetScalarType<T[P], AgentRunLogGroupByOutputType[P]>
        }
      >
    >


  export type AgentRunLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    agent?: boolean
    triggeredBy?: boolean
    startedAt?: boolean
    completedAt?: boolean
    durationMs?: boolean
    status?: boolean
    nodesExecuted?: boolean
    llmCalls?: boolean
    errors?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agentRunLog"]>

  export type AgentRunLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    agent?: boolean
    triggeredBy?: boolean
    startedAt?: boolean
    completedAt?: boolean
    durationMs?: boolean
    status?: boolean
    nodesExecuted?: boolean
    llmCalls?: boolean
    errors?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agentRunLog"]>

  export type AgentRunLogSelectScalar = {
    id?: boolean
    merchantId?: boolean
    agent?: boolean
    triggeredBy?: boolean
    startedAt?: boolean
    completedAt?: boolean
    durationMs?: boolean
    status?: boolean
    nodesExecuted?: boolean
    llmCalls?: boolean
    errors?: boolean
    createdAt?: boolean
  }


  export type $AgentRunLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentRunLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      agent: string
      triggeredBy: string
      startedAt: Date
      completedAt: Date | null
      durationMs: number | null
      status: string
      nodesExecuted: Prisma.JsonValue | null
      llmCalls: Prisma.JsonValue | null
      errors: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["agentRunLog"]>
    composites: {}
  }

  type AgentRunLogGetPayload<S extends boolean | null | undefined | AgentRunLogDefaultArgs> = $Result.GetResult<Prisma.$AgentRunLogPayload, S>

  type AgentRunLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AgentRunLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AgentRunLogCountAggregateInputType | true
    }

  export interface AgentRunLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentRunLog'], meta: { name: 'AgentRunLog' } }
    /**
     * Find zero or one AgentRunLog that matches the filter.
     * @param {AgentRunLogFindUniqueArgs} args - Arguments to find a AgentRunLog
     * @example
     * // Get one AgentRunLog
     * const agentRunLog = await prisma.agentRunLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentRunLogFindUniqueArgs>(args: SelectSubset<T, AgentRunLogFindUniqueArgs<ExtArgs>>): Prisma__AgentRunLogClient<$Result.GetResult<Prisma.$AgentRunLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AgentRunLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AgentRunLogFindUniqueOrThrowArgs} args - Arguments to find a AgentRunLog
     * @example
     * // Get one AgentRunLog
     * const agentRunLog = await prisma.agentRunLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentRunLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentRunLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentRunLogClient<$Result.GetResult<Prisma.$AgentRunLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AgentRunLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunLogFindFirstArgs} args - Arguments to find a AgentRunLog
     * @example
     * // Get one AgentRunLog
     * const agentRunLog = await prisma.agentRunLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentRunLogFindFirstArgs>(args?: SelectSubset<T, AgentRunLogFindFirstArgs<ExtArgs>>): Prisma__AgentRunLogClient<$Result.GetResult<Prisma.$AgentRunLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AgentRunLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunLogFindFirstOrThrowArgs} args - Arguments to find a AgentRunLog
     * @example
     * // Get one AgentRunLog
     * const agentRunLog = await prisma.agentRunLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentRunLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentRunLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentRunLogClient<$Result.GetResult<Prisma.$AgentRunLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AgentRunLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentRunLogs
     * const agentRunLogs = await prisma.agentRunLog.findMany()
     * 
     * // Get first 10 AgentRunLogs
     * const agentRunLogs = await prisma.agentRunLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentRunLogWithIdOnly = await prisma.agentRunLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentRunLogFindManyArgs>(args?: SelectSubset<T, AgentRunLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRunLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AgentRunLog.
     * @param {AgentRunLogCreateArgs} args - Arguments to create a AgentRunLog.
     * @example
     * // Create one AgentRunLog
     * const AgentRunLog = await prisma.agentRunLog.create({
     *   data: {
     *     // ... data to create a AgentRunLog
     *   }
     * })
     * 
     */
    create<T extends AgentRunLogCreateArgs>(args: SelectSubset<T, AgentRunLogCreateArgs<ExtArgs>>): Prisma__AgentRunLogClient<$Result.GetResult<Prisma.$AgentRunLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AgentRunLogs.
     * @param {AgentRunLogCreateManyArgs} args - Arguments to create many AgentRunLogs.
     * @example
     * // Create many AgentRunLogs
     * const agentRunLog = await prisma.agentRunLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentRunLogCreateManyArgs>(args?: SelectSubset<T, AgentRunLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentRunLogs and returns the data saved in the database.
     * @param {AgentRunLogCreateManyAndReturnArgs} args - Arguments to create many AgentRunLogs.
     * @example
     * // Create many AgentRunLogs
     * const agentRunLog = await prisma.agentRunLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentRunLogs and only return the `id`
     * const agentRunLogWithIdOnly = await prisma.agentRunLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentRunLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentRunLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRunLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AgentRunLog.
     * @param {AgentRunLogDeleteArgs} args - Arguments to delete one AgentRunLog.
     * @example
     * // Delete one AgentRunLog
     * const AgentRunLog = await prisma.agentRunLog.delete({
     *   where: {
     *     // ... filter to delete one AgentRunLog
     *   }
     * })
     * 
     */
    delete<T extends AgentRunLogDeleteArgs>(args: SelectSubset<T, AgentRunLogDeleteArgs<ExtArgs>>): Prisma__AgentRunLogClient<$Result.GetResult<Prisma.$AgentRunLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AgentRunLog.
     * @param {AgentRunLogUpdateArgs} args - Arguments to update one AgentRunLog.
     * @example
     * // Update one AgentRunLog
     * const agentRunLog = await prisma.agentRunLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentRunLogUpdateArgs>(args: SelectSubset<T, AgentRunLogUpdateArgs<ExtArgs>>): Prisma__AgentRunLogClient<$Result.GetResult<Prisma.$AgentRunLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AgentRunLogs.
     * @param {AgentRunLogDeleteManyArgs} args - Arguments to filter AgentRunLogs to delete.
     * @example
     * // Delete a few AgentRunLogs
     * const { count } = await prisma.agentRunLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentRunLogDeleteManyArgs>(args?: SelectSubset<T, AgentRunLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentRunLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentRunLogs
     * const agentRunLog = await prisma.agentRunLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentRunLogUpdateManyArgs>(args: SelectSubset<T, AgentRunLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AgentRunLog.
     * @param {AgentRunLogUpsertArgs} args - Arguments to update or create a AgentRunLog.
     * @example
     * // Update or create a AgentRunLog
     * const agentRunLog = await prisma.agentRunLog.upsert({
     *   create: {
     *     // ... data to create a AgentRunLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentRunLog we want to update
     *   }
     * })
     */
    upsert<T extends AgentRunLogUpsertArgs>(args: SelectSubset<T, AgentRunLogUpsertArgs<ExtArgs>>): Prisma__AgentRunLogClient<$Result.GetResult<Prisma.$AgentRunLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AgentRunLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunLogCountArgs} args - Arguments to filter AgentRunLogs to count.
     * @example
     * // Count the number of AgentRunLogs
     * const count = await prisma.agentRunLog.count({
     *   where: {
     *     // ... the filter for the AgentRunLogs we want to count
     *   }
     * })
    **/
    count<T extends AgentRunLogCountArgs>(
      args?: Subset<T, AgentRunLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentRunLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentRunLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentRunLogAggregateArgs>(args: Subset<T, AgentRunLogAggregateArgs>): Prisma.PrismaPromise<GetAgentRunLogAggregateType<T>>

    /**
     * Group by AgentRunLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunLogGroupByArgs} args - Group by arguments.
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
      T extends AgentRunLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentRunLogGroupByArgs['orderBy'] }
        : { orderBy?: AgentRunLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentRunLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentRunLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentRunLog model
   */
  readonly fields: AgentRunLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentRunLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentRunLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AgentRunLog model
   */ 
  interface AgentRunLogFieldRefs {
    readonly id: FieldRef<"AgentRunLog", 'String'>
    readonly merchantId: FieldRef<"AgentRunLog", 'String'>
    readonly agent: FieldRef<"AgentRunLog", 'String'>
    readonly triggeredBy: FieldRef<"AgentRunLog", 'String'>
    readonly startedAt: FieldRef<"AgentRunLog", 'DateTime'>
    readonly completedAt: FieldRef<"AgentRunLog", 'DateTime'>
    readonly durationMs: FieldRef<"AgentRunLog", 'Int'>
    readonly status: FieldRef<"AgentRunLog", 'String'>
    readonly nodesExecuted: FieldRef<"AgentRunLog", 'Json'>
    readonly llmCalls: FieldRef<"AgentRunLog", 'Json'>
    readonly errors: FieldRef<"AgentRunLog", 'Json'>
    readonly createdAt: FieldRef<"AgentRunLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgentRunLog findUnique
   */
  export type AgentRunLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRunLog
     */
    select?: AgentRunLogSelect<ExtArgs> | null
    /**
     * Filter, which AgentRunLog to fetch.
     */
    where: AgentRunLogWhereUniqueInput
  }

  /**
   * AgentRunLog findUniqueOrThrow
   */
  export type AgentRunLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRunLog
     */
    select?: AgentRunLogSelect<ExtArgs> | null
    /**
     * Filter, which AgentRunLog to fetch.
     */
    where: AgentRunLogWhereUniqueInput
  }

  /**
   * AgentRunLog findFirst
   */
  export type AgentRunLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRunLog
     */
    select?: AgentRunLogSelect<ExtArgs> | null
    /**
     * Filter, which AgentRunLog to fetch.
     */
    where?: AgentRunLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRunLogs to fetch.
     */
    orderBy?: AgentRunLogOrderByWithRelationInput | AgentRunLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentRunLogs.
     */
    cursor?: AgentRunLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRunLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRunLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentRunLogs.
     */
    distinct?: AgentRunLogScalarFieldEnum | AgentRunLogScalarFieldEnum[]
  }

  /**
   * AgentRunLog findFirstOrThrow
   */
  export type AgentRunLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRunLog
     */
    select?: AgentRunLogSelect<ExtArgs> | null
    /**
     * Filter, which AgentRunLog to fetch.
     */
    where?: AgentRunLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRunLogs to fetch.
     */
    orderBy?: AgentRunLogOrderByWithRelationInput | AgentRunLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentRunLogs.
     */
    cursor?: AgentRunLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRunLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRunLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentRunLogs.
     */
    distinct?: AgentRunLogScalarFieldEnum | AgentRunLogScalarFieldEnum[]
  }

  /**
   * AgentRunLog findMany
   */
  export type AgentRunLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRunLog
     */
    select?: AgentRunLogSelect<ExtArgs> | null
    /**
     * Filter, which AgentRunLogs to fetch.
     */
    where?: AgentRunLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRunLogs to fetch.
     */
    orderBy?: AgentRunLogOrderByWithRelationInput | AgentRunLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentRunLogs.
     */
    cursor?: AgentRunLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRunLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRunLogs.
     */
    skip?: number
    distinct?: AgentRunLogScalarFieldEnum | AgentRunLogScalarFieldEnum[]
  }

  /**
   * AgentRunLog create
   */
  export type AgentRunLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRunLog
     */
    select?: AgentRunLogSelect<ExtArgs> | null
    /**
     * The data needed to create a AgentRunLog.
     */
    data: XOR<AgentRunLogCreateInput, AgentRunLogUncheckedCreateInput>
  }

  /**
   * AgentRunLog createMany
   */
  export type AgentRunLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentRunLogs.
     */
    data: AgentRunLogCreateManyInput | AgentRunLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentRunLog createManyAndReturn
   */
  export type AgentRunLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRunLog
     */
    select?: AgentRunLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AgentRunLogs.
     */
    data: AgentRunLogCreateManyInput | AgentRunLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentRunLog update
   */
  export type AgentRunLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRunLog
     */
    select?: AgentRunLogSelect<ExtArgs> | null
    /**
     * The data needed to update a AgentRunLog.
     */
    data: XOR<AgentRunLogUpdateInput, AgentRunLogUncheckedUpdateInput>
    /**
     * Choose, which AgentRunLog to update.
     */
    where: AgentRunLogWhereUniqueInput
  }

  /**
   * AgentRunLog updateMany
   */
  export type AgentRunLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentRunLogs.
     */
    data: XOR<AgentRunLogUpdateManyMutationInput, AgentRunLogUncheckedUpdateManyInput>
    /**
     * Filter which AgentRunLogs to update
     */
    where?: AgentRunLogWhereInput
  }

  /**
   * AgentRunLog upsert
   */
  export type AgentRunLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRunLog
     */
    select?: AgentRunLogSelect<ExtArgs> | null
    /**
     * The filter to search for the AgentRunLog to update in case it exists.
     */
    where: AgentRunLogWhereUniqueInput
    /**
     * In case the AgentRunLog found by the `where` argument doesn't exist, create a new AgentRunLog with this data.
     */
    create: XOR<AgentRunLogCreateInput, AgentRunLogUncheckedCreateInput>
    /**
     * In case the AgentRunLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentRunLogUpdateInput, AgentRunLogUncheckedUpdateInput>
  }

  /**
   * AgentRunLog delete
   */
  export type AgentRunLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRunLog
     */
    select?: AgentRunLogSelect<ExtArgs> | null
    /**
     * Filter which AgentRunLog to delete.
     */
    where: AgentRunLogWhereUniqueInput
  }

  /**
   * AgentRunLog deleteMany
   */
  export type AgentRunLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentRunLogs to delete
     */
    where?: AgentRunLogWhereInput
  }

  /**
   * AgentRunLog without action
   */
  export type AgentRunLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRunLog
     */
    select?: AgentRunLogSelect<ExtArgs> | null
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


  export const MerchantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    timezone: 'timezone',
    createdAt: 'createdAt',
    isActive: 'isActive'
  };

  export type MerchantScalarFieldEnum = (typeof MerchantScalarFieldEnum)[keyof typeof MerchantScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    merchantId: 'merchantId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ConnectorInstanceScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    connectorType: 'connectorType',
    status: 'status',
    lastSyncedAt: 'lastSyncedAt',
    syncCursor: 'syncCursor',
    config: 'config',
    createdAt: 'createdAt'
  };

  export type ConnectorInstanceScalarFieldEnum = (typeof ConnectorInstanceScalarFieldEnum)[keyof typeof ConnectorInstanceScalarFieldEnum]


  export const UnifiedOrderScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    sourceId: 'sourceId',
    sourceConnector: 'sourceConnector',
    sourceSyncedAt: 'sourceSyncedAt',
    connectorVersion: 'connectorVersion',
    orderNumber: 'orderNumber',
    status: 'status',
    currency: 'currency',
    subtotalAmount: 'subtotalAmount',
    discountAmount: 'discountAmount',
    taxAmount: 'taxAmount',
    totalAmount: 'totalAmount',
    refundedAmount: 'refundedAmount',
    itemCount: 'itemCount',
    orderedAt: 'orderedAt',
    fulfilledAt: 'fulfilledAt',
    cancelledAt: 'cancelledAt',
    rawPayload: 'rawPayload',
    checksum: 'checksum',
    createdAt: 'createdAt'
  };

  export type UnifiedOrderScalarFieldEnum = (typeof UnifiedOrderScalarFieldEnum)[keyof typeof UnifiedOrderScalarFieldEnum]


  export const UnifiedCustomerScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    sourceId: 'sourceId',
    sourceConnector: 'sourceConnector',
    sourceSyncedAt: 'sourceSyncedAt',
    emailHash: 'emailHash',
    firstName: 'firstName',
    lastName: 'lastName',
    orderCount: 'orderCount',
    totalSpent: 'totalSpent',
    avgOrderValue: 'avgOrderValue',
    firstOrderAt: 'firstOrderAt',
    lastOrderAt: 'lastOrderAt',
    tags: 'tags',
    rawPayload: 'rawPayload',
    checksum: 'checksum',
    createdAt: 'createdAt'
  };

  export type UnifiedCustomerScalarFieldEnum = (typeof UnifiedCustomerScalarFieldEnum)[keyof typeof UnifiedCustomerScalarFieldEnum]


  export const UnifiedCampaignScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    sourceId: 'sourceId',
    sourceConnector: 'sourceConnector',
    sourceSyncedAt: 'sourceSyncedAt',
    name: 'name',
    type: 'type',
    status: 'status',
    channel: 'channel',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    spendAmount: 'spendAmount',
    impressions: 'impressions',
    clicks: 'clicks',
    conversions: 'conversions',
    conversionValue: 'conversionValue',
    roas: 'roas',
    sends: 'sends',
    opens: 'opens',
    revenueAttributed: 'revenueAttributed',
    rawPayload: 'rawPayload',
    checksum: 'checksum',
    createdAt: 'createdAt'
  };

  export type UnifiedCampaignScalarFieldEnum = (typeof UnifiedCampaignScalarFieldEnum)[keyof typeof UnifiedCampaignScalarFieldEnum]


  export const UnifiedInventoryScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    sourceId: 'sourceId',
    sourceConnector: 'sourceConnector',
    sourceSyncedAt: 'sourceSyncedAt',
    productId: 'productId',
    variantId: 'variantId',
    sku: 'sku',
    productName: 'productName',
    variantName: 'variantName',
    quantityAvailable: 'quantityAvailable',
    quantityCommitted: 'quantityCommitted',
    quantityIncoming: 'quantityIncoming',
    unitCost: 'unitCost',
    unitPrice: 'unitPrice',
    rawPayload: 'rawPayload',
    createdAt: 'createdAt'
  };

  export type UnifiedInventoryScalarFieldEnum = (typeof UnifiedInventoryScalarFieldEnum)[keyof typeof UnifiedInventoryScalarFieldEnum]


  export const AgentRecommendationScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    agentRunId: 'agentRunId',
    createdAt: 'createdAt',
    sku: 'sku',
    productName: 'productName',
    riskLevel: 'riskLevel',
    recommendedAction: 'recommendedAction',
    reorderQuantity: 'reorderQuantity',
    daysToDepletion: 'daysToDepletion',
    revenueAtRisk: 'revenueAtRisk',
    confidenceScore: 'confidenceScore',
    reasoningSummary: 'reasoningSummary',
    citations: 'citations',
    status: 'status',
    reviewedAt: 'reviewedAt',
    reviewedBy: 'reviewedBy'
  };

  export type AgentRecommendationScalarFieldEnum = (typeof AgentRecommendationScalarFieldEnum)[keyof typeof AgentRecommendationScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    actorId: 'actorId',
    actorType: 'actorType',
    action: 'action',
    resourceType: 'resourceType',
    resourceId: 'resourceId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const AgentRunLogScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    agent: 'agent',
    triggeredBy: 'triggeredBy',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    durationMs: 'durationMs',
    status: 'status',
    nodesExecuted: 'nodesExecuted',
    llmCalls: 'llmCalls',
    errors: 'errors',
    createdAt: 'createdAt'
  };

  export type AgentRunLogScalarFieldEnum = (typeof AgentRunLogScalarFieldEnum)[keyof typeof AgentRunLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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


  export type MerchantWhereInput = {
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    id?: StringFilter<"Merchant"> | string
    name?: StringFilter<"Merchant"> | string
    slug?: StringFilter<"Merchant"> | string
    timezone?: StringFilter<"Merchant"> | string
    createdAt?: DateTimeFilter<"Merchant"> | Date | string
    isActive?: BoolFilter<"Merchant"> | boolean
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    connectorInstances?: ConnectorInstanceListRelationFilter
    orders?: UnifiedOrderListRelationFilter
    customers?: UnifiedCustomerListRelationFilter
    campaigns?: UnifiedCampaignListRelationFilter
    inventory?: UnifiedInventoryListRelationFilter
    recommendations?: AgentRecommendationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type MerchantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
    connectorInstances?: ConnectorInstanceOrderByRelationAggregateInput
    orders?: UnifiedOrderOrderByRelationAggregateInput
    customers?: UnifiedCustomerOrderByRelationAggregateInput
    campaigns?: UnifiedCampaignOrderByRelationAggregateInput
    inventory?: UnifiedInventoryOrderByRelationAggregateInput
    recommendations?: AgentRecommendationOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type MerchantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    name?: StringFilter<"Merchant"> | string
    timezone?: StringFilter<"Merchant"> | string
    createdAt?: DateTimeFilter<"Merchant"> | Date | string
    isActive?: BoolFilter<"Merchant"> | boolean
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    connectorInstances?: ConnectorInstanceListRelationFilter
    orders?: UnifiedOrderListRelationFilter
    customers?: UnifiedCustomerListRelationFilter
    campaigns?: UnifiedCampaignListRelationFilter
    inventory?: UnifiedInventoryListRelationFilter
    recommendations?: AgentRecommendationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "slug">

  export type MerchantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    _count?: MerchantCountOrderByAggregateInput
    _max?: MerchantMaxOrderByAggregateInput
    _min?: MerchantMinOrderByAggregateInput
  }

  export type MerchantScalarWhereWithAggregatesInput = {
    AND?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    OR?: MerchantScalarWhereWithAggregatesInput[]
    NOT?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Merchant"> | string
    name?: StringWithAggregatesFilter<"Merchant"> | string
    slug?: StringWithAggregatesFilter<"Merchant"> | string
    timezone?: StringWithAggregatesFilter<"Merchant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Merchant"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Merchant"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    merchantId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    merchantId?: SortOrder
    createdAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    merchantId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id" | "email" | "merchantId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    merchantId?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    merchantId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ConnectorInstanceWhereInput = {
    AND?: ConnectorInstanceWhereInput | ConnectorInstanceWhereInput[]
    OR?: ConnectorInstanceWhereInput[]
    NOT?: ConnectorInstanceWhereInput | ConnectorInstanceWhereInput[]
    id?: StringFilter<"ConnectorInstance"> | string
    merchantId?: StringFilter<"ConnectorInstance"> | string
    connectorType?: StringFilter<"ConnectorInstance"> | string
    status?: StringFilter<"ConnectorInstance"> | string
    lastSyncedAt?: DateTimeNullableFilter<"ConnectorInstance"> | Date | string | null
    syncCursor?: JsonNullableFilter<"ConnectorInstance">
    config?: JsonNullableFilter<"ConnectorInstance">
    createdAt?: DateTimeFilter<"ConnectorInstance"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type ConnectorInstanceOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    syncCursor?: SortOrderInput | SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type ConnectorInstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    merchantId_connectorType?: ConnectorInstanceMerchantIdConnectorTypeCompoundUniqueInput
    AND?: ConnectorInstanceWhereInput | ConnectorInstanceWhereInput[]
    OR?: ConnectorInstanceWhereInput[]
    NOT?: ConnectorInstanceWhereInput | ConnectorInstanceWhereInput[]
    merchantId?: StringFilter<"ConnectorInstance"> | string
    connectorType?: StringFilter<"ConnectorInstance"> | string
    status?: StringFilter<"ConnectorInstance"> | string
    lastSyncedAt?: DateTimeNullableFilter<"ConnectorInstance"> | Date | string | null
    syncCursor?: JsonNullableFilter<"ConnectorInstance">
    config?: JsonNullableFilter<"ConnectorInstance">
    createdAt?: DateTimeFilter<"ConnectorInstance"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id" | "merchantId_connectorType">

  export type ConnectorInstanceOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    syncCursor?: SortOrderInput | SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ConnectorInstanceCountOrderByAggregateInput
    _max?: ConnectorInstanceMaxOrderByAggregateInput
    _min?: ConnectorInstanceMinOrderByAggregateInput
  }

  export type ConnectorInstanceScalarWhereWithAggregatesInput = {
    AND?: ConnectorInstanceScalarWhereWithAggregatesInput | ConnectorInstanceScalarWhereWithAggregatesInput[]
    OR?: ConnectorInstanceScalarWhereWithAggregatesInput[]
    NOT?: ConnectorInstanceScalarWhereWithAggregatesInput | ConnectorInstanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConnectorInstance"> | string
    merchantId?: StringWithAggregatesFilter<"ConnectorInstance"> | string
    connectorType?: StringWithAggregatesFilter<"ConnectorInstance"> | string
    status?: StringWithAggregatesFilter<"ConnectorInstance"> | string
    lastSyncedAt?: DateTimeNullableWithAggregatesFilter<"ConnectorInstance"> | Date | string | null
    syncCursor?: JsonNullableWithAggregatesFilter<"ConnectorInstance">
    config?: JsonNullableWithAggregatesFilter<"ConnectorInstance">
    createdAt?: DateTimeWithAggregatesFilter<"ConnectorInstance"> | Date | string
  }

  export type UnifiedOrderWhereInput = {
    AND?: UnifiedOrderWhereInput | UnifiedOrderWhereInput[]
    OR?: UnifiedOrderWhereInput[]
    NOT?: UnifiedOrderWhereInput | UnifiedOrderWhereInput[]
    id?: StringFilter<"UnifiedOrder"> | string
    merchantId?: StringFilter<"UnifiedOrder"> | string
    sourceId?: StringFilter<"UnifiedOrder"> | string
    sourceConnector?: StringFilter<"UnifiedOrder"> | string
    sourceSyncedAt?: DateTimeFilter<"UnifiedOrder"> | Date | string
    connectorVersion?: StringFilter<"UnifiedOrder"> | string
    orderNumber?: StringNullableFilter<"UnifiedOrder"> | string | null
    status?: StringNullableFilter<"UnifiedOrder"> | string | null
    currency?: StringFilter<"UnifiedOrder"> | string
    subtotalAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    refundedAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    itemCount?: IntFilter<"UnifiedOrder"> | number
    orderedAt?: DateTimeNullableFilter<"UnifiedOrder"> | Date | string | null
    fulfilledAt?: DateTimeNullableFilter<"UnifiedOrder"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"UnifiedOrder"> | Date | string | null
    rawPayload?: JsonNullableFilter<"UnifiedOrder">
    checksum?: StringNullableFilter<"UnifiedOrder"> | string | null
    createdAt?: DateTimeFilter<"UnifiedOrder"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type UnifiedOrderOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    connectorVersion?: SortOrder
    orderNumber?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    currency?: SortOrder
    subtotalAmount?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    refundedAmount?: SortOrder
    itemCount?: SortOrder
    orderedAt?: SortOrderInput | SortOrder
    fulfilledAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    rawPayload?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type UnifiedOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    merchantId_sourceConnector_sourceId?: UnifiedOrderMerchantIdSourceConnectorSourceIdCompoundUniqueInput
    AND?: UnifiedOrderWhereInput | UnifiedOrderWhereInput[]
    OR?: UnifiedOrderWhereInput[]
    NOT?: UnifiedOrderWhereInput | UnifiedOrderWhereInput[]
    merchantId?: StringFilter<"UnifiedOrder"> | string
    sourceId?: StringFilter<"UnifiedOrder"> | string
    sourceConnector?: StringFilter<"UnifiedOrder"> | string
    sourceSyncedAt?: DateTimeFilter<"UnifiedOrder"> | Date | string
    connectorVersion?: StringFilter<"UnifiedOrder"> | string
    orderNumber?: StringNullableFilter<"UnifiedOrder"> | string | null
    status?: StringNullableFilter<"UnifiedOrder"> | string | null
    currency?: StringFilter<"UnifiedOrder"> | string
    subtotalAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    refundedAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    itemCount?: IntFilter<"UnifiedOrder"> | number
    orderedAt?: DateTimeNullableFilter<"UnifiedOrder"> | Date | string | null
    fulfilledAt?: DateTimeNullableFilter<"UnifiedOrder"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"UnifiedOrder"> | Date | string | null
    rawPayload?: JsonNullableFilter<"UnifiedOrder">
    checksum?: StringNullableFilter<"UnifiedOrder"> | string | null
    createdAt?: DateTimeFilter<"UnifiedOrder"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id" | "merchantId_sourceConnector_sourceId">

  export type UnifiedOrderOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    connectorVersion?: SortOrder
    orderNumber?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    currency?: SortOrder
    subtotalAmount?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    refundedAmount?: SortOrder
    itemCount?: SortOrder
    orderedAt?: SortOrderInput | SortOrder
    fulfilledAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    rawPayload?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UnifiedOrderCountOrderByAggregateInput
    _avg?: UnifiedOrderAvgOrderByAggregateInput
    _max?: UnifiedOrderMaxOrderByAggregateInput
    _min?: UnifiedOrderMinOrderByAggregateInput
    _sum?: UnifiedOrderSumOrderByAggregateInput
  }

  export type UnifiedOrderScalarWhereWithAggregatesInput = {
    AND?: UnifiedOrderScalarWhereWithAggregatesInput | UnifiedOrderScalarWhereWithAggregatesInput[]
    OR?: UnifiedOrderScalarWhereWithAggregatesInput[]
    NOT?: UnifiedOrderScalarWhereWithAggregatesInput | UnifiedOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnifiedOrder"> | string
    merchantId?: StringWithAggregatesFilter<"UnifiedOrder"> | string
    sourceId?: StringWithAggregatesFilter<"UnifiedOrder"> | string
    sourceConnector?: StringWithAggregatesFilter<"UnifiedOrder"> | string
    sourceSyncedAt?: DateTimeWithAggregatesFilter<"UnifiedOrder"> | Date | string
    connectorVersion?: StringWithAggregatesFilter<"UnifiedOrder"> | string
    orderNumber?: StringNullableWithAggregatesFilter<"UnifiedOrder"> | string | null
    status?: StringNullableWithAggregatesFilter<"UnifiedOrder"> | string | null
    currency?: StringWithAggregatesFilter<"UnifiedOrder"> | string
    subtotalAmount?: DecimalWithAggregatesFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalWithAggregatesFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalWithAggregatesFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    refundedAmount?: DecimalWithAggregatesFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    itemCount?: IntWithAggregatesFilter<"UnifiedOrder"> | number
    orderedAt?: DateTimeNullableWithAggregatesFilter<"UnifiedOrder"> | Date | string | null
    fulfilledAt?: DateTimeNullableWithAggregatesFilter<"UnifiedOrder"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"UnifiedOrder"> | Date | string | null
    rawPayload?: JsonNullableWithAggregatesFilter<"UnifiedOrder">
    checksum?: StringNullableWithAggregatesFilter<"UnifiedOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UnifiedOrder"> | Date | string
  }

  export type UnifiedCustomerWhereInput = {
    AND?: UnifiedCustomerWhereInput | UnifiedCustomerWhereInput[]
    OR?: UnifiedCustomerWhereInput[]
    NOT?: UnifiedCustomerWhereInput | UnifiedCustomerWhereInput[]
    id?: StringFilter<"UnifiedCustomer"> | string
    merchantId?: StringFilter<"UnifiedCustomer"> | string
    sourceId?: StringFilter<"UnifiedCustomer"> | string
    sourceConnector?: StringFilter<"UnifiedCustomer"> | string
    sourceSyncedAt?: DateTimeFilter<"UnifiedCustomer"> | Date | string
    emailHash?: StringNullableFilter<"UnifiedCustomer"> | string | null
    firstName?: StringNullableFilter<"UnifiedCustomer"> | string | null
    lastName?: StringNullableFilter<"UnifiedCustomer"> | string | null
    orderCount?: IntFilter<"UnifiedCustomer"> | number
    totalSpent?: DecimalFilter<"UnifiedCustomer"> | Decimal | DecimalJsLike | number | string
    avgOrderValue?: DecimalNullableFilter<"UnifiedCustomer"> | Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: DateTimeNullableFilter<"UnifiedCustomer"> | Date | string | null
    lastOrderAt?: DateTimeNullableFilter<"UnifiedCustomer"> | Date | string | null
    tags?: StringNullableListFilter<"UnifiedCustomer">
    rawPayload?: JsonNullableFilter<"UnifiedCustomer">
    checksum?: StringNullableFilter<"UnifiedCustomer"> | string | null
    createdAt?: DateTimeFilter<"UnifiedCustomer"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type UnifiedCustomerOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    emailHash?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    orderCount?: SortOrder
    totalSpent?: SortOrder
    avgOrderValue?: SortOrderInput | SortOrder
    firstOrderAt?: SortOrderInput | SortOrder
    lastOrderAt?: SortOrderInput | SortOrder
    tags?: SortOrder
    rawPayload?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type UnifiedCustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    merchantId_sourceConnector_sourceId?: UnifiedCustomerMerchantIdSourceConnectorSourceIdCompoundUniqueInput
    AND?: UnifiedCustomerWhereInput | UnifiedCustomerWhereInput[]
    OR?: UnifiedCustomerWhereInput[]
    NOT?: UnifiedCustomerWhereInput | UnifiedCustomerWhereInput[]
    merchantId?: StringFilter<"UnifiedCustomer"> | string
    sourceId?: StringFilter<"UnifiedCustomer"> | string
    sourceConnector?: StringFilter<"UnifiedCustomer"> | string
    sourceSyncedAt?: DateTimeFilter<"UnifiedCustomer"> | Date | string
    emailHash?: StringNullableFilter<"UnifiedCustomer"> | string | null
    firstName?: StringNullableFilter<"UnifiedCustomer"> | string | null
    lastName?: StringNullableFilter<"UnifiedCustomer"> | string | null
    orderCount?: IntFilter<"UnifiedCustomer"> | number
    totalSpent?: DecimalFilter<"UnifiedCustomer"> | Decimal | DecimalJsLike | number | string
    avgOrderValue?: DecimalNullableFilter<"UnifiedCustomer"> | Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: DateTimeNullableFilter<"UnifiedCustomer"> | Date | string | null
    lastOrderAt?: DateTimeNullableFilter<"UnifiedCustomer"> | Date | string | null
    tags?: StringNullableListFilter<"UnifiedCustomer">
    rawPayload?: JsonNullableFilter<"UnifiedCustomer">
    checksum?: StringNullableFilter<"UnifiedCustomer"> | string | null
    createdAt?: DateTimeFilter<"UnifiedCustomer"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id" | "merchantId_sourceConnector_sourceId">

  export type UnifiedCustomerOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    emailHash?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    orderCount?: SortOrder
    totalSpent?: SortOrder
    avgOrderValue?: SortOrderInput | SortOrder
    firstOrderAt?: SortOrderInput | SortOrder
    lastOrderAt?: SortOrderInput | SortOrder
    tags?: SortOrder
    rawPayload?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UnifiedCustomerCountOrderByAggregateInput
    _avg?: UnifiedCustomerAvgOrderByAggregateInput
    _max?: UnifiedCustomerMaxOrderByAggregateInput
    _min?: UnifiedCustomerMinOrderByAggregateInput
    _sum?: UnifiedCustomerSumOrderByAggregateInput
  }

  export type UnifiedCustomerScalarWhereWithAggregatesInput = {
    AND?: UnifiedCustomerScalarWhereWithAggregatesInput | UnifiedCustomerScalarWhereWithAggregatesInput[]
    OR?: UnifiedCustomerScalarWhereWithAggregatesInput[]
    NOT?: UnifiedCustomerScalarWhereWithAggregatesInput | UnifiedCustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnifiedCustomer"> | string
    merchantId?: StringWithAggregatesFilter<"UnifiedCustomer"> | string
    sourceId?: StringWithAggregatesFilter<"UnifiedCustomer"> | string
    sourceConnector?: StringWithAggregatesFilter<"UnifiedCustomer"> | string
    sourceSyncedAt?: DateTimeWithAggregatesFilter<"UnifiedCustomer"> | Date | string
    emailHash?: StringNullableWithAggregatesFilter<"UnifiedCustomer"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"UnifiedCustomer"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"UnifiedCustomer"> | string | null
    orderCount?: IntWithAggregatesFilter<"UnifiedCustomer"> | number
    totalSpent?: DecimalWithAggregatesFilter<"UnifiedCustomer"> | Decimal | DecimalJsLike | number | string
    avgOrderValue?: DecimalNullableWithAggregatesFilter<"UnifiedCustomer"> | Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: DateTimeNullableWithAggregatesFilter<"UnifiedCustomer"> | Date | string | null
    lastOrderAt?: DateTimeNullableWithAggregatesFilter<"UnifiedCustomer"> | Date | string | null
    tags?: StringNullableListFilter<"UnifiedCustomer">
    rawPayload?: JsonNullableWithAggregatesFilter<"UnifiedCustomer">
    checksum?: StringNullableWithAggregatesFilter<"UnifiedCustomer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UnifiedCustomer"> | Date | string
  }

  export type UnifiedCampaignWhereInput = {
    AND?: UnifiedCampaignWhereInput | UnifiedCampaignWhereInput[]
    OR?: UnifiedCampaignWhereInput[]
    NOT?: UnifiedCampaignWhereInput | UnifiedCampaignWhereInput[]
    id?: StringFilter<"UnifiedCampaign"> | string
    merchantId?: StringFilter<"UnifiedCampaign"> | string
    sourceId?: StringFilter<"UnifiedCampaign"> | string
    sourceConnector?: StringFilter<"UnifiedCampaign"> | string
    sourceSyncedAt?: DateTimeFilter<"UnifiedCampaign"> | Date | string
    name?: StringNullableFilter<"UnifiedCampaign"> | string | null
    type?: StringNullableFilter<"UnifiedCampaign"> | string | null
    status?: StringNullableFilter<"UnifiedCampaign"> | string | null
    channel?: StringNullableFilter<"UnifiedCampaign"> | string | null
    periodStart?: DateTimeFilter<"UnifiedCampaign"> | Date | string
    periodEnd?: DateTimeFilter<"UnifiedCampaign"> | Date | string
    spendAmount?: DecimalNullableFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    impressions?: BigIntNullableFilter<"UnifiedCampaign"> | bigint | number | null
    clicks?: BigIntNullableFilter<"UnifiedCampaign"> | bigint | number | null
    conversions?: IntNullableFilter<"UnifiedCampaign"> | number | null
    conversionValue?: DecimalNullableFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    roas?: DecimalNullableFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    sends?: IntNullableFilter<"UnifiedCampaign"> | number | null
    opens?: IntNullableFilter<"UnifiedCampaign"> | number | null
    revenueAttributed?: DecimalNullableFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    rawPayload?: JsonNullableFilter<"UnifiedCampaign">
    checksum?: StringNullableFilter<"UnifiedCampaign"> | string | null
    createdAt?: DateTimeFilter<"UnifiedCampaign"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type UnifiedCampaignOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    channel?: SortOrderInput | SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    spendAmount?: SortOrderInput | SortOrder
    impressions?: SortOrderInput | SortOrder
    clicks?: SortOrderInput | SortOrder
    conversions?: SortOrderInput | SortOrder
    conversionValue?: SortOrderInput | SortOrder
    roas?: SortOrderInput | SortOrder
    sends?: SortOrderInput | SortOrder
    opens?: SortOrderInput | SortOrder
    revenueAttributed?: SortOrderInput | SortOrder
    rawPayload?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type UnifiedCampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    merchantId_sourceConnector_sourceId_periodStart?: UnifiedCampaignMerchantIdSourceConnectorSourceIdPeriodStartCompoundUniqueInput
    AND?: UnifiedCampaignWhereInput | UnifiedCampaignWhereInput[]
    OR?: UnifiedCampaignWhereInput[]
    NOT?: UnifiedCampaignWhereInput | UnifiedCampaignWhereInput[]
    merchantId?: StringFilter<"UnifiedCampaign"> | string
    sourceId?: StringFilter<"UnifiedCampaign"> | string
    sourceConnector?: StringFilter<"UnifiedCampaign"> | string
    sourceSyncedAt?: DateTimeFilter<"UnifiedCampaign"> | Date | string
    name?: StringNullableFilter<"UnifiedCampaign"> | string | null
    type?: StringNullableFilter<"UnifiedCampaign"> | string | null
    status?: StringNullableFilter<"UnifiedCampaign"> | string | null
    channel?: StringNullableFilter<"UnifiedCampaign"> | string | null
    periodStart?: DateTimeFilter<"UnifiedCampaign"> | Date | string
    periodEnd?: DateTimeFilter<"UnifiedCampaign"> | Date | string
    spendAmount?: DecimalNullableFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    impressions?: BigIntNullableFilter<"UnifiedCampaign"> | bigint | number | null
    clicks?: BigIntNullableFilter<"UnifiedCampaign"> | bigint | number | null
    conversions?: IntNullableFilter<"UnifiedCampaign"> | number | null
    conversionValue?: DecimalNullableFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    roas?: DecimalNullableFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    sends?: IntNullableFilter<"UnifiedCampaign"> | number | null
    opens?: IntNullableFilter<"UnifiedCampaign"> | number | null
    revenueAttributed?: DecimalNullableFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    rawPayload?: JsonNullableFilter<"UnifiedCampaign">
    checksum?: StringNullableFilter<"UnifiedCampaign"> | string | null
    createdAt?: DateTimeFilter<"UnifiedCampaign"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id" | "merchantId_sourceConnector_sourceId_periodStart">

  export type UnifiedCampaignOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    channel?: SortOrderInput | SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    spendAmount?: SortOrderInput | SortOrder
    impressions?: SortOrderInput | SortOrder
    clicks?: SortOrderInput | SortOrder
    conversions?: SortOrderInput | SortOrder
    conversionValue?: SortOrderInput | SortOrder
    roas?: SortOrderInput | SortOrder
    sends?: SortOrderInput | SortOrder
    opens?: SortOrderInput | SortOrder
    revenueAttributed?: SortOrderInput | SortOrder
    rawPayload?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UnifiedCampaignCountOrderByAggregateInput
    _avg?: UnifiedCampaignAvgOrderByAggregateInput
    _max?: UnifiedCampaignMaxOrderByAggregateInput
    _min?: UnifiedCampaignMinOrderByAggregateInput
    _sum?: UnifiedCampaignSumOrderByAggregateInput
  }

  export type UnifiedCampaignScalarWhereWithAggregatesInput = {
    AND?: UnifiedCampaignScalarWhereWithAggregatesInput | UnifiedCampaignScalarWhereWithAggregatesInput[]
    OR?: UnifiedCampaignScalarWhereWithAggregatesInput[]
    NOT?: UnifiedCampaignScalarWhereWithAggregatesInput | UnifiedCampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnifiedCampaign"> | string
    merchantId?: StringWithAggregatesFilter<"UnifiedCampaign"> | string
    sourceId?: StringWithAggregatesFilter<"UnifiedCampaign"> | string
    sourceConnector?: StringWithAggregatesFilter<"UnifiedCampaign"> | string
    sourceSyncedAt?: DateTimeWithAggregatesFilter<"UnifiedCampaign"> | Date | string
    name?: StringNullableWithAggregatesFilter<"UnifiedCampaign"> | string | null
    type?: StringNullableWithAggregatesFilter<"UnifiedCampaign"> | string | null
    status?: StringNullableWithAggregatesFilter<"UnifiedCampaign"> | string | null
    channel?: StringNullableWithAggregatesFilter<"UnifiedCampaign"> | string | null
    periodStart?: DateTimeWithAggregatesFilter<"UnifiedCampaign"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"UnifiedCampaign"> | Date | string
    spendAmount?: DecimalNullableWithAggregatesFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    impressions?: BigIntNullableWithAggregatesFilter<"UnifiedCampaign"> | bigint | number | null
    clicks?: BigIntNullableWithAggregatesFilter<"UnifiedCampaign"> | bigint | number | null
    conversions?: IntNullableWithAggregatesFilter<"UnifiedCampaign"> | number | null
    conversionValue?: DecimalNullableWithAggregatesFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    roas?: DecimalNullableWithAggregatesFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    sends?: IntNullableWithAggregatesFilter<"UnifiedCampaign"> | number | null
    opens?: IntNullableWithAggregatesFilter<"UnifiedCampaign"> | number | null
    revenueAttributed?: DecimalNullableWithAggregatesFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    rawPayload?: JsonNullableWithAggregatesFilter<"UnifiedCampaign">
    checksum?: StringNullableWithAggregatesFilter<"UnifiedCampaign"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UnifiedCampaign"> | Date | string
  }

  export type UnifiedInventoryWhereInput = {
    AND?: UnifiedInventoryWhereInput | UnifiedInventoryWhereInput[]
    OR?: UnifiedInventoryWhereInput[]
    NOT?: UnifiedInventoryWhereInput | UnifiedInventoryWhereInput[]
    id?: StringFilter<"UnifiedInventory"> | string
    merchantId?: StringFilter<"UnifiedInventory"> | string
    sourceId?: StringFilter<"UnifiedInventory"> | string
    sourceConnector?: StringFilter<"UnifiedInventory"> | string
    sourceSyncedAt?: DateTimeFilter<"UnifiedInventory"> | Date | string
    productId?: StringNullableFilter<"UnifiedInventory"> | string | null
    variantId?: StringNullableFilter<"UnifiedInventory"> | string | null
    sku?: StringNullableFilter<"UnifiedInventory"> | string | null
    productName?: StringNullableFilter<"UnifiedInventory"> | string | null
    variantName?: StringNullableFilter<"UnifiedInventory"> | string | null
    quantityAvailable?: IntFilter<"UnifiedInventory"> | number
    quantityCommitted?: IntFilter<"UnifiedInventory"> | number
    quantityIncoming?: IntFilter<"UnifiedInventory"> | number
    unitCost?: DecimalNullableFilter<"UnifiedInventory"> | Decimal | DecimalJsLike | number | string | null
    unitPrice?: DecimalNullableFilter<"UnifiedInventory"> | Decimal | DecimalJsLike | number | string | null
    rawPayload?: JsonNullableFilter<"UnifiedInventory">
    createdAt?: DateTimeFilter<"UnifiedInventory"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type UnifiedInventoryOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    productId?: SortOrderInput | SortOrder
    variantId?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    variantName?: SortOrderInput | SortOrder
    quantityAvailable?: SortOrder
    quantityCommitted?: SortOrder
    quantityIncoming?: SortOrder
    unitCost?: SortOrderInput | SortOrder
    unitPrice?: SortOrderInput | SortOrder
    rawPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type UnifiedInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    merchantId_sourceConnector_sourceId?: UnifiedInventoryMerchantIdSourceConnectorSourceIdCompoundUniqueInput
    AND?: UnifiedInventoryWhereInput | UnifiedInventoryWhereInput[]
    OR?: UnifiedInventoryWhereInput[]
    NOT?: UnifiedInventoryWhereInput | UnifiedInventoryWhereInput[]
    merchantId?: StringFilter<"UnifiedInventory"> | string
    sourceId?: StringFilter<"UnifiedInventory"> | string
    sourceConnector?: StringFilter<"UnifiedInventory"> | string
    sourceSyncedAt?: DateTimeFilter<"UnifiedInventory"> | Date | string
    productId?: StringNullableFilter<"UnifiedInventory"> | string | null
    variantId?: StringNullableFilter<"UnifiedInventory"> | string | null
    sku?: StringNullableFilter<"UnifiedInventory"> | string | null
    productName?: StringNullableFilter<"UnifiedInventory"> | string | null
    variantName?: StringNullableFilter<"UnifiedInventory"> | string | null
    quantityAvailable?: IntFilter<"UnifiedInventory"> | number
    quantityCommitted?: IntFilter<"UnifiedInventory"> | number
    quantityIncoming?: IntFilter<"UnifiedInventory"> | number
    unitCost?: DecimalNullableFilter<"UnifiedInventory"> | Decimal | DecimalJsLike | number | string | null
    unitPrice?: DecimalNullableFilter<"UnifiedInventory"> | Decimal | DecimalJsLike | number | string | null
    rawPayload?: JsonNullableFilter<"UnifiedInventory">
    createdAt?: DateTimeFilter<"UnifiedInventory"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id" | "merchantId_sourceConnector_sourceId">

  export type UnifiedInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    productId?: SortOrderInput | SortOrder
    variantId?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    variantName?: SortOrderInput | SortOrder
    quantityAvailable?: SortOrder
    quantityCommitted?: SortOrder
    quantityIncoming?: SortOrder
    unitCost?: SortOrderInput | SortOrder
    unitPrice?: SortOrderInput | SortOrder
    rawPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UnifiedInventoryCountOrderByAggregateInput
    _avg?: UnifiedInventoryAvgOrderByAggregateInput
    _max?: UnifiedInventoryMaxOrderByAggregateInput
    _min?: UnifiedInventoryMinOrderByAggregateInput
    _sum?: UnifiedInventorySumOrderByAggregateInput
  }

  export type UnifiedInventoryScalarWhereWithAggregatesInput = {
    AND?: UnifiedInventoryScalarWhereWithAggregatesInput | UnifiedInventoryScalarWhereWithAggregatesInput[]
    OR?: UnifiedInventoryScalarWhereWithAggregatesInput[]
    NOT?: UnifiedInventoryScalarWhereWithAggregatesInput | UnifiedInventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnifiedInventory"> | string
    merchantId?: StringWithAggregatesFilter<"UnifiedInventory"> | string
    sourceId?: StringWithAggregatesFilter<"UnifiedInventory"> | string
    sourceConnector?: StringWithAggregatesFilter<"UnifiedInventory"> | string
    sourceSyncedAt?: DateTimeWithAggregatesFilter<"UnifiedInventory"> | Date | string
    productId?: StringNullableWithAggregatesFilter<"UnifiedInventory"> | string | null
    variantId?: StringNullableWithAggregatesFilter<"UnifiedInventory"> | string | null
    sku?: StringNullableWithAggregatesFilter<"UnifiedInventory"> | string | null
    productName?: StringNullableWithAggregatesFilter<"UnifiedInventory"> | string | null
    variantName?: StringNullableWithAggregatesFilter<"UnifiedInventory"> | string | null
    quantityAvailable?: IntWithAggregatesFilter<"UnifiedInventory"> | number
    quantityCommitted?: IntWithAggregatesFilter<"UnifiedInventory"> | number
    quantityIncoming?: IntWithAggregatesFilter<"UnifiedInventory"> | number
    unitCost?: DecimalNullableWithAggregatesFilter<"UnifiedInventory"> | Decimal | DecimalJsLike | number | string | null
    unitPrice?: DecimalNullableWithAggregatesFilter<"UnifiedInventory"> | Decimal | DecimalJsLike | number | string | null
    rawPayload?: JsonNullableWithAggregatesFilter<"UnifiedInventory">
    createdAt?: DateTimeWithAggregatesFilter<"UnifiedInventory"> | Date | string
  }

  export type AgentRecommendationWhereInput = {
    AND?: AgentRecommendationWhereInput | AgentRecommendationWhereInput[]
    OR?: AgentRecommendationWhereInput[]
    NOT?: AgentRecommendationWhereInput | AgentRecommendationWhereInput[]
    id?: StringFilter<"AgentRecommendation"> | string
    merchantId?: StringFilter<"AgentRecommendation"> | string
    agentRunId?: StringFilter<"AgentRecommendation"> | string
    createdAt?: DateTimeFilter<"AgentRecommendation"> | Date | string
    sku?: StringNullableFilter<"AgentRecommendation"> | string | null
    productName?: StringNullableFilter<"AgentRecommendation"> | string | null
    riskLevel?: StringFilter<"AgentRecommendation"> | string
    recommendedAction?: StringFilter<"AgentRecommendation"> | string
    reorderQuantity?: IntNullableFilter<"AgentRecommendation"> | number | null
    daysToDepletion?: FloatNullableFilter<"AgentRecommendation"> | number | null
    revenueAtRisk?: DecimalNullableFilter<"AgentRecommendation"> | Decimal | DecimalJsLike | number | string | null
    confidenceScore?: FloatNullableFilter<"AgentRecommendation"> | number | null
    reasoningSummary?: StringNullableFilter<"AgentRecommendation"> | string | null
    citations?: JsonNullableFilter<"AgentRecommendation">
    status?: StringFilter<"AgentRecommendation"> | string
    reviewedAt?: DateTimeNullableFilter<"AgentRecommendation"> | Date | string | null
    reviewedBy?: StringNullableFilter<"AgentRecommendation"> | string | null
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type AgentRecommendationOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    agentRunId?: SortOrder
    createdAt?: SortOrder
    sku?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    riskLevel?: SortOrder
    recommendedAction?: SortOrder
    reorderQuantity?: SortOrderInput | SortOrder
    daysToDepletion?: SortOrderInput | SortOrder
    revenueAtRisk?: SortOrderInput | SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    reasoningSummary?: SortOrderInput | SortOrder
    citations?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type AgentRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgentRecommendationWhereInput | AgentRecommendationWhereInput[]
    OR?: AgentRecommendationWhereInput[]
    NOT?: AgentRecommendationWhereInput | AgentRecommendationWhereInput[]
    merchantId?: StringFilter<"AgentRecommendation"> | string
    agentRunId?: StringFilter<"AgentRecommendation"> | string
    createdAt?: DateTimeFilter<"AgentRecommendation"> | Date | string
    sku?: StringNullableFilter<"AgentRecommendation"> | string | null
    productName?: StringNullableFilter<"AgentRecommendation"> | string | null
    riskLevel?: StringFilter<"AgentRecommendation"> | string
    recommendedAction?: StringFilter<"AgentRecommendation"> | string
    reorderQuantity?: IntNullableFilter<"AgentRecommendation"> | number | null
    daysToDepletion?: FloatNullableFilter<"AgentRecommendation"> | number | null
    revenueAtRisk?: DecimalNullableFilter<"AgentRecommendation"> | Decimal | DecimalJsLike | number | string | null
    confidenceScore?: FloatNullableFilter<"AgentRecommendation"> | number | null
    reasoningSummary?: StringNullableFilter<"AgentRecommendation"> | string | null
    citations?: JsonNullableFilter<"AgentRecommendation">
    status?: StringFilter<"AgentRecommendation"> | string
    reviewedAt?: DateTimeNullableFilter<"AgentRecommendation"> | Date | string | null
    reviewedBy?: StringNullableFilter<"AgentRecommendation"> | string | null
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id">

  export type AgentRecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    agentRunId?: SortOrder
    createdAt?: SortOrder
    sku?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    riskLevel?: SortOrder
    recommendedAction?: SortOrder
    reorderQuantity?: SortOrderInput | SortOrder
    daysToDepletion?: SortOrderInput | SortOrder
    revenueAtRisk?: SortOrderInput | SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    reasoningSummary?: SortOrderInput | SortOrder
    citations?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    _count?: AgentRecommendationCountOrderByAggregateInput
    _avg?: AgentRecommendationAvgOrderByAggregateInput
    _max?: AgentRecommendationMaxOrderByAggregateInput
    _min?: AgentRecommendationMinOrderByAggregateInput
    _sum?: AgentRecommendationSumOrderByAggregateInput
  }

  export type AgentRecommendationScalarWhereWithAggregatesInput = {
    AND?: AgentRecommendationScalarWhereWithAggregatesInput | AgentRecommendationScalarWhereWithAggregatesInput[]
    OR?: AgentRecommendationScalarWhereWithAggregatesInput[]
    NOT?: AgentRecommendationScalarWhereWithAggregatesInput | AgentRecommendationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentRecommendation"> | string
    merchantId?: StringWithAggregatesFilter<"AgentRecommendation"> | string
    agentRunId?: StringWithAggregatesFilter<"AgentRecommendation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AgentRecommendation"> | Date | string
    sku?: StringNullableWithAggregatesFilter<"AgentRecommendation"> | string | null
    productName?: StringNullableWithAggregatesFilter<"AgentRecommendation"> | string | null
    riskLevel?: StringWithAggregatesFilter<"AgentRecommendation"> | string
    recommendedAction?: StringWithAggregatesFilter<"AgentRecommendation"> | string
    reorderQuantity?: IntNullableWithAggregatesFilter<"AgentRecommendation"> | number | null
    daysToDepletion?: FloatNullableWithAggregatesFilter<"AgentRecommendation"> | number | null
    revenueAtRisk?: DecimalNullableWithAggregatesFilter<"AgentRecommendation"> | Decimal | DecimalJsLike | number | string | null
    confidenceScore?: FloatNullableWithAggregatesFilter<"AgentRecommendation"> | number | null
    reasoningSummary?: StringNullableWithAggregatesFilter<"AgentRecommendation"> | string | null
    citations?: JsonNullableWithAggregatesFilter<"AgentRecommendation">
    status?: StringWithAggregatesFilter<"AgentRecommendation"> | string
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"AgentRecommendation"> | Date | string | null
    reviewedBy?: StringNullableWithAggregatesFilter<"AgentRecommendation"> | string | null
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    merchantId?: StringNullableFilter<"AuditLog"> | string | null
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    actorType?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resourceType?: StringNullableFilter<"AuditLog"> | string | null
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    merchant?: XOR<MerchantNullableRelationFilter, MerchantWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    actorType?: SortOrderInput | SortOrder
    action?: SortOrder
    resourceType?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    merchantId?: StringNullableFilter<"AuditLog"> | string | null
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    actorType?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resourceType?: StringNullableFilter<"AuditLog"> | string | null
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    merchant?: XOR<MerchantNullableRelationFilter, MerchantWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    actorType?: SortOrderInput | SortOrder
    action?: SortOrder
    resourceType?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    merchantId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    actorId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    actorType?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    resourceType?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    resourceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type AgentRunLogWhereInput = {
    AND?: AgentRunLogWhereInput | AgentRunLogWhereInput[]
    OR?: AgentRunLogWhereInput[]
    NOT?: AgentRunLogWhereInput | AgentRunLogWhereInput[]
    id?: StringFilter<"AgentRunLog"> | string
    merchantId?: StringFilter<"AgentRunLog"> | string
    agent?: StringFilter<"AgentRunLog"> | string
    triggeredBy?: StringFilter<"AgentRunLog"> | string
    startedAt?: DateTimeFilter<"AgentRunLog"> | Date | string
    completedAt?: DateTimeNullableFilter<"AgentRunLog"> | Date | string | null
    durationMs?: IntNullableFilter<"AgentRunLog"> | number | null
    status?: StringFilter<"AgentRunLog"> | string
    nodesExecuted?: JsonNullableFilter<"AgentRunLog">
    llmCalls?: JsonNullableFilter<"AgentRunLog">
    errors?: JsonNullableFilter<"AgentRunLog">
    createdAt?: DateTimeFilter<"AgentRunLog"> | Date | string
  }

  export type AgentRunLogOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    agent?: SortOrder
    triggeredBy?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    status?: SortOrder
    nodesExecuted?: SortOrderInput | SortOrder
    llmCalls?: SortOrderInput | SortOrder
    errors?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AgentRunLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgentRunLogWhereInput | AgentRunLogWhereInput[]
    OR?: AgentRunLogWhereInput[]
    NOT?: AgentRunLogWhereInput | AgentRunLogWhereInput[]
    merchantId?: StringFilter<"AgentRunLog"> | string
    agent?: StringFilter<"AgentRunLog"> | string
    triggeredBy?: StringFilter<"AgentRunLog"> | string
    startedAt?: DateTimeFilter<"AgentRunLog"> | Date | string
    completedAt?: DateTimeNullableFilter<"AgentRunLog"> | Date | string | null
    durationMs?: IntNullableFilter<"AgentRunLog"> | number | null
    status?: StringFilter<"AgentRunLog"> | string
    nodesExecuted?: JsonNullableFilter<"AgentRunLog">
    llmCalls?: JsonNullableFilter<"AgentRunLog">
    errors?: JsonNullableFilter<"AgentRunLog">
    createdAt?: DateTimeFilter<"AgentRunLog"> | Date | string
  }, "id">

  export type AgentRunLogOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    agent?: SortOrder
    triggeredBy?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    status?: SortOrder
    nodesExecuted?: SortOrderInput | SortOrder
    llmCalls?: SortOrderInput | SortOrder
    errors?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AgentRunLogCountOrderByAggregateInput
    _avg?: AgentRunLogAvgOrderByAggregateInput
    _max?: AgentRunLogMaxOrderByAggregateInput
    _min?: AgentRunLogMinOrderByAggregateInput
    _sum?: AgentRunLogSumOrderByAggregateInput
  }

  export type AgentRunLogScalarWhereWithAggregatesInput = {
    AND?: AgentRunLogScalarWhereWithAggregatesInput | AgentRunLogScalarWhereWithAggregatesInput[]
    OR?: AgentRunLogScalarWhereWithAggregatesInput[]
    NOT?: AgentRunLogScalarWhereWithAggregatesInput | AgentRunLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentRunLog"> | string
    merchantId?: StringWithAggregatesFilter<"AgentRunLog"> | string
    agent?: StringWithAggregatesFilter<"AgentRunLog"> | string
    triggeredBy?: StringWithAggregatesFilter<"AgentRunLog"> | string
    startedAt?: DateTimeWithAggregatesFilter<"AgentRunLog"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"AgentRunLog"> | Date | string | null
    durationMs?: IntNullableWithAggregatesFilter<"AgentRunLog"> | number | null
    status?: StringWithAggregatesFilter<"AgentRunLog"> | string
    nodesExecuted?: JsonNullableWithAggregatesFilter<"AgentRunLog">
    llmCalls?: JsonNullableWithAggregatesFilter<"AgentRunLog">
    errors?: JsonNullableWithAggregatesFilter<"AgentRunLog">
    createdAt?: DateTimeWithAggregatesFilter<"AgentRunLog"> | Date | string
  }

  export type MerchantCreateInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserUncheckedCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceUncheckedCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderUncheckedCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerUncheckedCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignUncheckedCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryUncheckedCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationUncheckedCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUncheckedUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUncheckedUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUncheckedUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUncheckedUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUncheckedUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateManyInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type MerchantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MerchantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    merchantId: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    merchantId: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorInstanceCreateInput = {
    id?: string
    connectorType: string
    status?: string
    lastSyncedAt?: Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutConnectorInstancesInput
  }

  export type ConnectorInstanceUncheckedCreateInput = {
    id?: string
    merchantId: string
    connectorType: string
    status?: string
    lastSyncedAt?: Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConnectorInstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutConnectorInstancesNestedInput
  }

  export type ConnectorInstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    connectorType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorInstanceCreateManyInput = {
    id?: string
    merchantId: string
    connectorType: string
    status?: string
    lastSyncedAt?: Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConnectorInstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorInstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    connectorType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedOrderCreateInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    connectorVersion?: string
    orderNumber?: string | null
    status?: string | null
    currency?: string
    subtotalAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    refundedAmount?: Decimal | DecimalJsLike | number | string
    itemCount?: number
    orderedAt?: Date | string | null
    fulfilledAt?: Date | string | null
    cancelledAt?: Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutOrdersInput
  }

  export type UnifiedOrderUncheckedCreateInput = {
    id?: string
    merchantId: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    connectorVersion?: string
    orderNumber?: string | null
    status?: string | null
    currency?: string
    subtotalAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    refundedAmount?: Decimal | DecimalJsLike | number | string
    itemCount?: number
    orderedAt?: Date | string | null
    fulfilledAt?: Date | string | null
    cancelledAt?: Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectorVersion?: StringFieldUpdateOperationsInput | string
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    itemCount?: IntFieldUpdateOperationsInput | number
    orderedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfilledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type UnifiedOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectorVersion?: StringFieldUpdateOperationsInput | string
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    itemCount?: IntFieldUpdateOperationsInput | number
    orderedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfilledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedOrderCreateManyInput = {
    id?: string
    merchantId: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    connectorVersion?: string
    orderNumber?: string | null
    status?: string | null
    currency?: string
    subtotalAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    refundedAmount?: Decimal | DecimalJsLike | number | string
    itemCount?: number
    orderedAt?: Date | string | null
    fulfilledAt?: Date | string | null
    cancelledAt?: Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectorVersion?: StringFieldUpdateOperationsInput | string
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    itemCount?: IntFieldUpdateOperationsInput | number
    orderedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfilledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectorVersion?: StringFieldUpdateOperationsInput | string
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    itemCount?: IntFieldUpdateOperationsInput | number
    orderedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfilledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedCustomerCreateInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    emailHash?: string | null
    firstName?: string | null
    lastName?: string | null
    orderCount?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    avgOrderValue?: Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: Date | string | null
    lastOrderAt?: Date | string | null
    tags?: UnifiedCustomerCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutCustomersInput
  }

  export type UnifiedCustomerUncheckedCreateInput = {
    id?: string
    merchantId: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    emailHash?: string | null
    firstName?: string | null
    lastName?: string | null
    orderCount?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    avgOrderValue?: Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: Date | string | null
    lastOrderAt?: Date | string | null
    tags?: UnifiedCustomerCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedCustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    orderCount?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: UnifiedCustomerUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type UnifiedCustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    orderCount?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: UnifiedCustomerUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedCustomerCreateManyInput = {
    id?: string
    merchantId: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    emailHash?: string | null
    firstName?: string | null
    lastName?: string | null
    orderCount?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    avgOrderValue?: Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: Date | string | null
    lastOrderAt?: Date | string | null
    tags?: UnifiedCustomerCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedCustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    orderCount?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: UnifiedCustomerUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedCustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    orderCount?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: UnifiedCustomerUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedCampaignCreateInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    name?: string | null
    type?: string | null
    status?: string | null
    channel?: string | null
    periodStart: Date | string
    periodEnd: Date | string
    spendAmount?: Decimal | DecimalJsLike | number | string | null
    impressions?: bigint | number | null
    clicks?: bigint | number | null
    conversions?: number | null
    conversionValue?: Decimal | DecimalJsLike | number | string | null
    roas?: Decimal | DecimalJsLike | number | string | null
    sends?: number | null
    opens?: number | null
    revenueAttributed?: Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutCampaignsInput
  }

  export type UnifiedCampaignUncheckedCreateInput = {
    id?: string
    merchantId: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    name?: string | null
    type?: string | null
    status?: string | null
    channel?: string | null
    periodStart: Date | string
    periodEnd: Date | string
    spendAmount?: Decimal | DecimalJsLike | number | string | null
    impressions?: bigint | number | null
    clicks?: bigint | number | null
    conversions?: number | null
    conversionValue?: Decimal | DecimalJsLike | number | string | null
    roas?: Decimal | DecimalJsLike | number | string | null
    sends?: number | null
    opens?: number | null
    revenueAttributed?: Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedCampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    spendAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impressions?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    clicks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    conversions?: NullableIntFieldUpdateOperationsInput | number | null
    conversionValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    roas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sends?: NullableIntFieldUpdateOperationsInput | number | null
    opens?: NullableIntFieldUpdateOperationsInput | number | null
    revenueAttributed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type UnifiedCampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    spendAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impressions?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    clicks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    conversions?: NullableIntFieldUpdateOperationsInput | number | null
    conversionValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    roas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sends?: NullableIntFieldUpdateOperationsInput | number | null
    opens?: NullableIntFieldUpdateOperationsInput | number | null
    revenueAttributed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedCampaignCreateManyInput = {
    id?: string
    merchantId: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    name?: string | null
    type?: string | null
    status?: string | null
    channel?: string | null
    periodStart: Date | string
    periodEnd: Date | string
    spendAmount?: Decimal | DecimalJsLike | number | string | null
    impressions?: bigint | number | null
    clicks?: bigint | number | null
    conversions?: number | null
    conversionValue?: Decimal | DecimalJsLike | number | string | null
    roas?: Decimal | DecimalJsLike | number | string | null
    sends?: number | null
    opens?: number | null
    revenueAttributed?: Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedCampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    spendAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impressions?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    clicks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    conversions?: NullableIntFieldUpdateOperationsInput | number | null
    conversionValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    roas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sends?: NullableIntFieldUpdateOperationsInput | number | null
    opens?: NullableIntFieldUpdateOperationsInput | number | null
    revenueAttributed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedCampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    spendAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impressions?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    clicks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    conversions?: NullableIntFieldUpdateOperationsInput | number | null
    conversionValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    roas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sends?: NullableIntFieldUpdateOperationsInput | number | null
    opens?: NullableIntFieldUpdateOperationsInput | number | null
    revenueAttributed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedInventoryCreateInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    productId?: string | null
    variantId?: string | null
    sku?: string | null
    productName?: string | null
    variantName?: string | null
    quantityAvailable?: number
    quantityCommitted?: number
    quantityIncoming?: number
    unitCost?: Decimal | DecimalJsLike | number | string | null
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutInventoryInput
  }

  export type UnifiedInventoryUncheckedCreateInput = {
    id?: string
    merchantId: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    productId?: string | null
    variantId?: string | null
    sku?: string | null
    productName?: string | null
    variantName?: string | null
    quantityAvailable?: number
    quantityCommitted?: number
    quantityIncoming?: number
    unitCost?: Decimal | DecimalJsLike | number | string | null
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UnifiedInventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    variantName?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    quantityCommitted?: IntFieldUpdateOperationsInput | number
    quantityIncoming?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type UnifiedInventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    variantName?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    quantityCommitted?: IntFieldUpdateOperationsInput | number
    quantityIncoming?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedInventoryCreateManyInput = {
    id?: string
    merchantId: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    productId?: string | null
    variantId?: string | null
    sku?: string | null
    productName?: string | null
    variantName?: string | null
    quantityAvailable?: number
    quantityCommitted?: number
    quantityIncoming?: number
    unitCost?: Decimal | DecimalJsLike | number | string | null
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UnifiedInventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    variantName?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    quantityCommitted?: IntFieldUpdateOperationsInput | number
    quantityIncoming?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedInventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    variantName?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    quantityCommitted?: IntFieldUpdateOperationsInput | number
    quantityIncoming?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRecommendationCreateInput = {
    id?: string
    agentRunId: string
    createdAt?: Date | string
    sku?: string | null
    productName?: string | null
    riskLevel: string
    recommendedAction: string
    reorderQuantity?: number | null
    daysToDepletion?: number | null
    revenueAtRisk?: Decimal | DecimalJsLike | number | string | null
    confidenceScore?: number | null
    reasoningSummary?: string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    merchant: MerchantCreateNestedOneWithoutRecommendationsInput
  }

  export type AgentRecommendationUncheckedCreateInput = {
    id?: string
    merchantId: string
    agentRunId: string
    createdAt?: Date | string
    sku?: string | null
    productName?: string | null
    riskLevel: string
    recommendedAction: string
    reorderQuantity?: number | null
    daysToDepletion?: number | null
    revenueAtRisk?: Decimal | DecimalJsLike | number | string | null
    confidenceScore?: number | null
    reasoningSummary?: string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
  }

  export type AgentRecommendationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentRunId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    reorderQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    daysToDepletion?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueAtRisk?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasoningSummary?: NullableStringFieldUpdateOperationsInput | string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    merchant?: MerchantUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type AgentRecommendationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    agentRunId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    reorderQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    daysToDepletion?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueAtRisk?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasoningSummary?: NullableStringFieldUpdateOperationsInput | string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentRecommendationCreateManyInput = {
    id?: string
    merchantId: string
    agentRunId: string
    createdAt?: Date | string
    sku?: string | null
    productName?: string | null
    riskLevel: string
    recommendedAction: string
    reorderQuantity?: number | null
    daysToDepletion?: number | null
    revenueAtRisk?: Decimal | DecimalJsLike | number | string | null
    confidenceScore?: number | null
    reasoningSummary?: string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
  }

  export type AgentRecommendationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentRunId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    reorderQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    daysToDepletion?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueAtRisk?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasoningSummary?: NullableStringFieldUpdateOperationsInput | string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentRecommendationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    agentRunId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    reorderQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    daysToDepletion?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueAtRisk?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasoningSummary?: NullableStringFieldUpdateOperationsInput | string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateInput = {
    id?: string
    actorId?: string | null
    actorType?: string | null
    action: string
    resourceType?: string | null
    resourceId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    merchant?: MerchantCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    merchantId?: string | null
    actorId?: string | null
    actorType?: string | null
    action: string
    resourceType?: string | null
    resourceId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    merchantId?: string | null
    actorId?: string | null
    actorType?: string | null
    action: string
    resourceType?: string | null
    resourceId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunLogCreateInput = {
    id?: string
    merchantId: string
    agent: string
    triggeredBy: string
    startedAt: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
    status: string
    nodesExecuted?: NullableJsonNullValueInput | InputJsonValue
    llmCalls?: NullableJsonNullValueInput | InputJsonValue
    errors?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AgentRunLogUncheckedCreateInput = {
    id?: string
    merchantId: string
    agent: string
    triggeredBy: string
    startedAt: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
    status: string
    nodesExecuted?: NullableJsonNullValueInput | InputJsonValue
    llmCalls?: NullableJsonNullValueInput | InputJsonValue
    errors?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AgentRunLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    nodesExecuted?: NullableJsonNullValueInput | InputJsonValue
    llmCalls?: NullableJsonNullValueInput | InputJsonValue
    errors?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    nodesExecuted?: NullableJsonNullValueInput | InputJsonValue
    llmCalls?: NullableJsonNullValueInput | InputJsonValue
    errors?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunLogCreateManyInput = {
    id?: string
    merchantId: string
    agent: string
    triggeredBy: string
    startedAt: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
    status: string
    nodesExecuted?: NullableJsonNullValueInput | InputJsonValue
    llmCalls?: NullableJsonNullValueInput | InputJsonValue
    errors?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AgentRunLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    nodesExecuted?: NullableJsonNullValueInput | InputJsonValue
    llmCalls?: NullableJsonNullValueInput | InputJsonValue
    errors?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    nodesExecuted?: NullableJsonNullValueInput | InputJsonValue
    llmCalls?: NullableJsonNullValueInput | InputJsonValue
    errors?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ConnectorInstanceListRelationFilter = {
    every?: ConnectorInstanceWhereInput
    some?: ConnectorInstanceWhereInput
    none?: ConnectorInstanceWhereInput
  }

  export type UnifiedOrderListRelationFilter = {
    every?: UnifiedOrderWhereInput
    some?: UnifiedOrderWhereInput
    none?: UnifiedOrderWhereInput
  }

  export type UnifiedCustomerListRelationFilter = {
    every?: UnifiedCustomerWhereInput
    some?: UnifiedCustomerWhereInput
    none?: UnifiedCustomerWhereInput
  }

  export type UnifiedCampaignListRelationFilter = {
    every?: UnifiedCampaignWhereInput
    some?: UnifiedCampaignWhereInput
    none?: UnifiedCampaignWhereInput
  }

  export type UnifiedInventoryListRelationFilter = {
    every?: UnifiedInventoryWhereInput
    some?: UnifiedInventoryWhereInput
    none?: UnifiedInventoryWhereInput
  }

  export type AgentRecommendationListRelationFilter = {
    every?: AgentRecommendationWhereInput
    some?: AgentRecommendationWhereInput
    none?: AgentRecommendationWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type ConnectorInstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnifiedOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnifiedCustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnifiedCampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnifiedInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentRecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MerchantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type MerchantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type MerchantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MerchantRelationFilter = {
    is?: MerchantWhereInput
    isNot?: MerchantWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    merchantId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    merchantId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    merchantId?: SortOrder
    createdAt?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConnectorInstanceMerchantIdConnectorTypeCompoundUniqueInput = {
    merchantId: string
    connectorType: string
  }

  export type ConnectorInstanceCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    lastSyncedAt?: SortOrder
    syncCursor?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectorInstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectorInstanceMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type UnifiedOrderMerchantIdSourceConnectorSourceIdCompoundUniqueInput = {
    merchantId: string
    sourceConnector: string
    sourceId: string
  }

  export type UnifiedOrderCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    connectorVersion?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    subtotalAmount?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    refundedAmount?: SortOrder
    itemCount?: SortOrder
    orderedAt?: SortOrder
    fulfilledAt?: SortOrder
    cancelledAt?: SortOrder
    rawPayload?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
  }

  export type UnifiedOrderAvgOrderByAggregateInput = {
    subtotalAmount?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    refundedAmount?: SortOrder
    itemCount?: SortOrder
  }

  export type UnifiedOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    connectorVersion?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    subtotalAmount?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    refundedAmount?: SortOrder
    itemCount?: SortOrder
    orderedAt?: SortOrder
    fulfilledAt?: SortOrder
    cancelledAt?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
  }

  export type UnifiedOrderMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    connectorVersion?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    subtotalAmount?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    refundedAmount?: SortOrder
    itemCount?: SortOrder
    orderedAt?: SortOrder
    fulfilledAt?: SortOrder
    cancelledAt?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
  }

  export type UnifiedOrderSumOrderByAggregateInput = {
    subtotalAmount?: SortOrder
    discountAmount?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    refundedAmount?: SortOrder
    itemCount?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UnifiedCustomerMerchantIdSourceConnectorSourceIdCompoundUniqueInput = {
    merchantId: string
    sourceConnector: string
    sourceId: string
  }

  export type UnifiedCustomerCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    emailHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    orderCount?: SortOrder
    totalSpent?: SortOrder
    avgOrderValue?: SortOrder
    firstOrderAt?: SortOrder
    lastOrderAt?: SortOrder
    tags?: SortOrder
    rawPayload?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
  }

  export type UnifiedCustomerAvgOrderByAggregateInput = {
    orderCount?: SortOrder
    totalSpent?: SortOrder
    avgOrderValue?: SortOrder
  }

  export type UnifiedCustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    emailHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    orderCount?: SortOrder
    totalSpent?: SortOrder
    avgOrderValue?: SortOrder
    firstOrderAt?: SortOrder
    lastOrderAt?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
  }

  export type UnifiedCustomerMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    emailHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    orderCount?: SortOrder
    totalSpent?: SortOrder
    avgOrderValue?: SortOrder
    firstOrderAt?: SortOrder
    lastOrderAt?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
  }

  export type UnifiedCustomerSumOrderByAggregateInput = {
    orderCount?: SortOrder
    totalSpent?: SortOrder
    avgOrderValue?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type UnifiedCampaignMerchantIdSourceConnectorSourceIdPeriodStartCompoundUniqueInput = {
    merchantId: string
    sourceConnector: string
    sourceId: string
    periodStart: Date | string
  }

  export type UnifiedCampaignCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    channel?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    spendAmount?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    conversions?: SortOrder
    conversionValue?: SortOrder
    roas?: SortOrder
    sends?: SortOrder
    opens?: SortOrder
    revenueAttributed?: SortOrder
    rawPayload?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
  }

  export type UnifiedCampaignAvgOrderByAggregateInput = {
    spendAmount?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    conversions?: SortOrder
    conversionValue?: SortOrder
    roas?: SortOrder
    sends?: SortOrder
    opens?: SortOrder
    revenueAttributed?: SortOrder
  }

  export type UnifiedCampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    channel?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    spendAmount?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    conversions?: SortOrder
    conversionValue?: SortOrder
    roas?: SortOrder
    sends?: SortOrder
    opens?: SortOrder
    revenueAttributed?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
  }

  export type UnifiedCampaignMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    channel?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    spendAmount?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    conversions?: SortOrder
    conversionValue?: SortOrder
    roas?: SortOrder
    sends?: SortOrder
    opens?: SortOrder
    revenueAttributed?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
  }

  export type UnifiedCampaignSumOrderByAggregateInput = {
    spendAmount?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    conversions?: SortOrder
    conversionValue?: SortOrder
    roas?: SortOrder
    sends?: SortOrder
    opens?: SortOrder
    revenueAttributed?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type UnifiedInventoryMerchantIdSourceConnectorSourceIdCompoundUniqueInput = {
    merchantId: string
    sourceConnector: string
    sourceId: string
  }

  export type UnifiedInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    sku?: SortOrder
    productName?: SortOrder
    variantName?: SortOrder
    quantityAvailable?: SortOrder
    quantityCommitted?: SortOrder
    quantityIncoming?: SortOrder
    unitCost?: SortOrder
    unitPrice?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
  }

  export type UnifiedInventoryAvgOrderByAggregateInput = {
    quantityAvailable?: SortOrder
    quantityCommitted?: SortOrder
    quantityIncoming?: SortOrder
    unitCost?: SortOrder
    unitPrice?: SortOrder
  }

  export type UnifiedInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    sku?: SortOrder
    productName?: SortOrder
    variantName?: SortOrder
    quantityAvailable?: SortOrder
    quantityCommitted?: SortOrder
    quantityIncoming?: SortOrder
    unitCost?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type UnifiedInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    sourceId?: SortOrder
    sourceConnector?: SortOrder
    sourceSyncedAt?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    sku?: SortOrder
    productName?: SortOrder
    variantName?: SortOrder
    quantityAvailable?: SortOrder
    quantityCommitted?: SortOrder
    quantityIncoming?: SortOrder
    unitCost?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type UnifiedInventorySumOrderByAggregateInput = {
    quantityAvailable?: SortOrder
    quantityCommitted?: SortOrder
    quantityIncoming?: SortOrder
    unitCost?: SortOrder
    unitPrice?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AgentRecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    agentRunId?: SortOrder
    createdAt?: SortOrder
    sku?: SortOrder
    productName?: SortOrder
    riskLevel?: SortOrder
    recommendedAction?: SortOrder
    reorderQuantity?: SortOrder
    daysToDepletion?: SortOrder
    revenueAtRisk?: SortOrder
    confidenceScore?: SortOrder
    reasoningSummary?: SortOrder
    citations?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrder
    reviewedBy?: SortOrder
  }

  export type AgentRecommendationAvgOrderByAggregateInput = {
    reorderQuantity?: SortOrder
    daysToDepletion?: SortOrder
    revenueAtRisk?: SortOrder
    confidenceScore?: SortOrder
  }

  export type AgentRecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    agentRunId?: SortOrder
    createdAt?: SortOrder
    sku?: SortOrder
    productName?: SortOrder
    riskLevel?: SortOrder
    recommendedAction?: SortOrder
    reorderQuantity?: SortOrder
    daysToDepletion?: SortOrder
    revenueAtRisk?: SortOrder
    confidenceScore?: SortOrder
    reasoningSummary?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrder
    reviewedBy?: SortOrder
  }

  export type AgentRecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    agentRunId?: SortOrder
    createdAt?: SortOrder
    sku?: SortOrder
    productName?: SortOrder
    riskLevel?: SortOrder
    recommendedAction?: SortOrder
    reorderQuantity?: SortOrder
    daysToDepletion?: SortOrder
    revenueAtRisk?: SortOrder
    confidenceScore?: SortOrder
    reasoningSummary?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrder
    reviewedBy?: SortOrder
  }

  export type AgentRecommendationSumOrderByAggregateInput = {
    reorderQuantity?: SortOrder
    daysToDepletion?: SortOrder
    revenueAtRisk?: SortOrder
    confidenceScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MerchantNullableRelationFilter = {
    is?: MerchantWhereInput | null
    isNot?: MerchantWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentRunLogCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    agent?: SortOrder
    triggeredBy?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    durationMs?: SortOrder
    status?: SortOrder
    nodesExecuted?: SortOrder
    llmCalls?: SortOrder
    errors?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentRunLogAvgOrderByAggregateInput = {
    durationMs?: SortOrder
  }

  export type AgentRunLogMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    agent?: SortOrder
    triggeredBy?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    durationMs?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentRunLogMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    agent?: SortOrder
    triggeredBy?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    durationMs?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentRunLogSumOrderByAggregateInput = {
    durationMs?: SortOrder
  }

  export type UserCreateNestedOneWithoutMerchantInput = {
    create?: XOR<UserCreateWithoutMerchantInput, UserUncheckedCreateWithoutMerchantInput>
    connectOrCreate?: UserCreateOrConnectWithoutMerchantInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectorInstanceCreateNestedManyWithoutMerchantInput = {
    create?: XOR<ConnectorInstanceCreateWithoutMerchantInput, ConnectorInstanceUncheckedCreateWithoutMerchantInput> | ConnectorInstanceCreateWithoutMerchantInput[] | ConnectorInstanceUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: ConnectorInstanceCreateOrConnectWithoutMerchantInput | ConnectorInstanceCreateOrConnectWithoutMerchantInput[]
    createMany?: ConnectorInstanceCreateManyMerchantInputEnvelope
    connect?: ConnectorInstanceWhereUniqueInput | ConnectorInstanceWhereUniqueInput[]
  }

  export type UnifiedOrderCreateNestedManyWithoutMerchantInput = {
    create?: XOR<UnifiedOrderCreateWithoutMerchantInput, UnifiedOrderUncheckedCreateWithoutMerchantInput> | UnifiedOrderCreateWithoutMerchantInput[] | UnifiedOrderUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedOrderCreateOrConnectWithoutMerchantInput | UnifiedOrderCreateOrConnectWithoutMerchantInput[]
    createMany?: UnifiedOrderCreateManyMerchantInputEnvelope
    connect?: UnifiedOrderWhereUniqueInput | UnifiedOrderWhereUniqueInput[]
  }

  export type UnifiedCustomerCreateNestedManyWithoutMerchantInput = {
    create?: XOR<UnifiedCustomerCreateWithoutMerchantInput, UnifiedCustomerUncheckedCreateWithoutMerchantInput> | UnifiedCustomerCreateWithoutMerchantInput[] | UnifiedCustomerUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedCustomerCreateOrConnectWithoutMerchantInput | UnifiedCustomerCreateOrConnectWithoutMerchantInput[]
    createMany?: UnifiedCustomerCreateManyMerchantInputEnvelope
    connect?: UnifiedCustomerWhereUniqueInput | UnifiedCustomerWhereUniqueInput[]
  }

  export type UnifiedCampaignCreateNestedManyWithoutMerchantInput = {
    create?: XOR<UnifiedCampaignCreateWithoutMerchantInput, UnifiedCampaignUncheckedCreateWithoutMerchantInput> | UnifiedCampaignCreateWithoutMerchantInput[] | UnifiedCampaignUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedCampaignCreateOrConnectWithoutMerchantInput | UnifiedCampaignCreateOrConnectWithoutMerchantInput[]
    createMany?: UnifiedCampaignCreateManyMerchantInputEnvelope
    connect?: UnifiedCampaignWhereUniqueInput | UnifiedCampaignWhereUniqueInput[]
  }

  export type UnifiedInventoryCreateNestedManyWithoutMerchantInput = {
    create?: XOR<UnifiedInventoryCreateWithoutMerchantInput, UnifiedInventoryUncheckedCreateWithoutMerchantInput> | UnifiedInventoryCreateWithoutMerchantInput[] | UnifiedInventoryUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedInventoryCreateOrConnectWithoutMerchantInput | UnifiedInventoryCreateOrConnectWithoutMerchantInput[]
    createMany?: UnifiedInventoryCreateManyMerchantInputEnvelope
    connect?: UnifiedInventoryWhereUniqueInput | UnifiedInventoryWhereUniqueInput[]
  }

  export type AgentRecommendationCreateNestedManyWithoutMerchantInput = {
    create?: XOR<AgentRecommendationCreateWithoutMerchantInput, AgentRecommendationUncheckedCreateWithoutMerchantInput> | AgentRecommendationCreateWithoutMerchantInput[] | AgentRecommendationUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: AgentRecommendationCreateOrConnectWithoutMerchantInput | AgentRecommendationCreateOrConnectWithoutMerchantInput[]
    createMany?: AgentRecommendationCreateManyMerchantInputEnvelope
    connect?: AgentRecommendationWhereUniqueInput | AgentRecommendationWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutMerchantInput = {
    create?: XOR<AuditLogCreateWithoutMerchantInput, AuditLogUncheckedCreateWithoutMerchantInput> | AuditLogCreateWithoutMerchantInput[] | AuditLogUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutMerchantInput | AuditLogCreateOrConnectWithoutMerchantInput[]
    createMany?: AuditLogCreateManyMerchantInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutMerchantInput = {
    create?: XOR<UserCreateWithoutMerchantInput, UserUncheckedCreateWithoutMerchantInput>
    connectOrCreate?: UserCreateOrConnectWithoutMerchantInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectorInstanceUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<ConnectorInstanceCreateWithoutMerchantInput, ConnectorInstanceUncheckedCreateWithoutMerchantInput> | ConnectorInstanceCreateWithoutMerchantInput[] | ConnectorInstanceUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: ConnectorInstanceCreateOrConnectWithoutMerchantInput | ConnectorInstanceCreateOrConnectWithoutMerchantInput[]
    createMany?: ConnectorInstanceCreateManyMerchantInputEnvelope
    connect?: ConnectorInstanceWhereUniqueInput | ConnectorInstanceWhereUniqueInput[]
  }

  export type UnifiedOrderUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<UnifiedOrderCreateWithoutMerchantInput, UnifiedOrderUncheckedCreateWithoutMerchantInput> | UnifiedOrderCreateWithoutMerchantInput[] | UnifiedOrderUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedOrderCreateOrConnectWithoutMerchantInput | UnifiedOrderCreateOrConnectWithoutMerchantInput[]
    createMany?: UnifiedOrderCreateManyMerchantInputEnvelope
    connect?: UnifiedOrderWhereUniqueInput | UnifiedOrderWhereUniqueInput[]
  }

  export type UnifiedCustomerUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<UnifiedCustomerCreateWithoutMerchantInput, UnifiedCustomerUncheckedCreateWithoutMerchantInput> | UnifiedCustomerCreateWithoutMerchantInput[] | UnifiedCustomerUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedCustomerCreateOrConnectWithoutMerchantInput | UnifiedCustomerCreateOrConnectWithoutMerchantInput[]
    createMany?: UnifiedCustomerCreateManyMerchantInputEnvelope
    connect?: UnifiedCustomerWhereUniqueInput | UnifiedCustomerWhereUniqueInput[]
  }

  export type UnifiedCampaignUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<UnifiedCampaignCreateWithoutMerchantInput, UnifiedCampaignUncheckedCreateWithoutMerchantInput> | UnifiedCampaignCreateWithoutMerchantInput[] | UnifiedCampaignUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedCampaignCreateOrConnectWithoutMerchantInput | UnifiedCampaignCreateOrConnectWithoutMerchantInput[]
    createMany?: UnifiedCampaignCreateManyMerchantInputEnvelope
    connect?: UnifiedCampaignWhereUniqueInput | UnifiedCampaignWhereUniqueInput[]
  }

  export type UnifiedInventoryUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<UnifiedInventoryCreateWithoutMerchantInput, UnifiedInventoryUncheckedCreateWithoutMerchantInput> | UnifiedInventoryCreateWithoutMerchantInput[] | UnifiedInventoryUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedInventoryCreateOrConnectWithoutMerchantInput | UnifiedInventoryCreateOrConnectWithoutMerchantInput[]
    createMany?: UnifiedInventoryCreateManyMerchantInputEnvelope
    connect?: UnifiedInventoryWhereUniqueInput | UnifiedInventoryWhereUniqueInput[]
  }

  export type AgentRecommendationUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<AgentRecommendationCreateWithoutMerchantInput, AgentRecommendationUncheckedCreateWithoutMerchantInput> | AgentRecommendationCreateWithoutMerchantInput[] | AgentRecommendationUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: AgentRecommendationCreateOrConnectWithoutMerchantInput | AgentRecommendationCreateOrConnectWithoutMerchantInput[]
    createMany?: AgentRecommendationCreateManyMerchantInputEnvelope
    connect?: AgentRecommendationWhereUniqueInput | AgentRecommendationWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<AuditLogCreateWithoutMerchantInput, AuditLogUncheckedCreateWithoutMerchantInput> | AuditLogCreateWithoutMerchantInput[] | AuditLogUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutMerchantInput | AuditLogCreateOrConnectWithoutMerchantInput[]
    createMany?: AuditLogCreateManyMerchantInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutMerchantNestedInput = {
    create?: XOR<UserCreateWithoutMerchantInput, UserUncheckedCreateWithoutMerchantInput>
    connectOrCreate?: UserCreateOrConnectWithoutMerchantInput
    upsert?: UserUpsertWithoutMerchantInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMerchantInput, UserUpdateWithoutMerchantInput>, UserUncheckedUpdateWithoutMerchantInput>
  }

  export type ConnectorInstanceUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<ConnectorInstanceCreateWithoutMerchantInput, ConnectorInstanceUncheckedCreateWithoutMerchantInput> | ConnectorInstanceCreateWithoutMerchantInput[] | ConnectorInstanceUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: ConnectorInstanceCreateOrConnectWithoutMerchantInput | ConnectorInstanceCreateOrConnectWithoutMerchantInput[]
    upsert?: ConnectorInstanceUpsertWithWhereUniqueWithoutMerchantInput | ConnectorInstanceUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: ConnectorInstanceCreateManyMerchantInputEnvelope
    set?: ConnectorInstanceWhereUniqueInput | ConnectorInstanceWhereUniqueInput[]
    disconnect?: ConnectorInstanceWhereUniqueInput | ConnectorInstanceWhereUniqueInput[]
    delete?: ConnectorInstanceWhereUniqueInput | ConnectorInstanceWhereUniqueInput[]
    connect?: ConnectorInstanceWhereUniqueInput | ConnectorInstanceWhereUniqueInput[]
    update?: ConnectorInstanceUpdateWithWhereUniqueWithoutMerchantInput | ConnectorInstanceUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: ConnectorInstanceUpdateManyWithWhereWithoutMerchantInput | ConnectorInstanceUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: ConnectorInstanceScalarWhereInput | ConnectorInstanceScalarWhereInput[]
  }

  export type UnifiedOrderUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<UnifiedOrderCreateWithoutMerchantInput, UnifiedOrderUncheckedCreateWithoutMerchantInput> | UnifiedOrderCreateWithoutMerchantInput[] | UnifiedOrderUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedOrderCreateOrConnectWithoutMerchantInput | UnifiedOrderCreateOrConnectWithoutMerchantInput[]
    upsert?: UnifiedOrderUpsertWithWhereUniqueWithoutMerchantInput | UnifiedOrderUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: UnifiedOrderCreateManyMerchantInputEnvelope
    set?: UnifiedOrderWhereUniqueInput | UnifiedOrderWhereUniqueInput[]
    disconnect?: UnifiedOrderWhereUniqueInput | UnifiedOrderWhereUniqueInput[]
    delete?: UnifiedOrderWhereUniqueInput | UnifiedOrderWhereUniqueInput[]
    connect?: UnifiedOrderWhereUniqueInput | UnifiedOrderWhereUniqueInput[]
    update?: UnifiedOrderUpdateWithWhereUniqueWithoutMerchantInput | UnifiedOrderUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: UnifiedOrderUpdateManyWithWhereWithoutMerchantInput | UnifiedOrderUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: UnifiedOrderScalarWhereInput | UnifiedOrderScalarWhereInput[]
  }

  export type UnifiedCustomerUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<UnifiedCustomerCreateWithoutMerchantInput, UnifiedCustomerUncheckedCreateWithoutMerchantInput> | UnifiedCustomerCreateWithoutMerchantInput[] | UnifiedCustomerUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedCustomerCreateOrConnectWithoutMerchantInput | UnifiedCustomerCreateOrConnectWithoutMerchantInput[]
    upsert?: UnifiedCustomerUpsertWithWhereUniqueWithoutMerchantInput | UnifiedCustomerUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: UnifiedCustomerCreateManyMerchantInputEnvelope
    set?: UnifiedCustomerWhereUniqueInput | UnifiedCustomerWhereUniqueInput[]
    disconnect?: UnifiedCustomerWhereUniqueInput | UnifiedCustomerWhereUniqueInput[]
    delete?: UnifiedCustomerWhereUniqueInput | UnifiedCustomerWhereUniqueInput[]
    connect?: UnifiedCustomerWhereUniqueInput | UnifiedCustomerWhereUniqueInput[]
    update?: UnifiedCustomerUpdateWithWhereUniqueWithoutMerchantInput | UnifiedCustomerUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: UnifiedCustomerUpdateManyWithWhereWithoutMerchantInput | UnifiedCustomerUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: UnifiedCustomerScalarWhereInput | UnifiedCustomerScalarWhereInput[]
  }

  export type UnifiedCampaignUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<UnifiedCampaignCreateWithoutMerchantInput, UnifiedCampaignUncheckedCreateWithoutMerchantInput> | UnifiedCampaignCreateWithoutMerchantInput[] | UnifiedCampaignUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedCampaignCreateOrConnectWithoutMerchantInput | UnifiedCampaignCreateOrConnectWithoutMerchantInput[]
    upsert?: UnifiedCampaignUpsertWithWhereUniqueWithoutMerchantInput | UnifiedCampaignUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: UnifiedCampaignCreateManyMerchantInputEnvelope
    set?: UnifiedCampaignWhereUniqueInput | UnifiedCampaignWhereUniqueInput[]
    disconnect?: UnifiedCampaignWhereUniqueInput | UnifiedCampaignWhereUniqueInput[]
    delete?: UnifiedCampaignWhereUniqueInput | UnifiedCampaignWhereUniqueInput[]
    connect?: UnifiedCampaignWhereUniqueInput | UnifiedCampaignWhereUniqueInput[]
    update?: UnifiedCampaignUpdateWithWhereUniqueWithoutMerchantInput | UnifiedCampaignUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: UnifiedCampaignUpdateManyWithWhereWithoutMerchantInput | UnifiedCampaignUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: UnifiedCampaignScalarWhereInput | UnifiedCampaignScalarWhereInput[]
  }

  export type UnifiedInventoryUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<UnifiedInventoryCreateWithoutMerchantInput, UnifiedInventoryUncheckedCreateWithoutMerchantInput> | UnifiedInventoryCreateWithoutMerchantInput[] | UnifiedInventoryUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedInventoryCreateOrConnectWithoutMerchantInput | UnifiedInventoryCreateOrConnectWithoutMerchantInput[]
    upsert?: UnifiedInventoryUpsertWithWhereUniqueWithoutMerchantInput | UnifiedInventoryUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: UnifiedInventoryCreateManyMerchantInputEnvelope
    set?: UnifiedInventoryWhereUniqueInput | UnifiedInventoryWhereUniqueInput[]
    disconnect?: UnifiedInventoryWhereUniqueInput | UnifiedInventoryWhereUniqueInput[]
    delete?: UnifiedInventoryWhereUniqueInput | UnifiedInventoryWhereUniqueInput[]
    connect?: UnifiedInventoryWhereUniqueInput | UnifiedInventoryWhereUniqueInput[]
    update?: UnifiedInventoryUpdateWithWhereUniqueWithoutMerchantInput | UnifiedInventoryUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: UnifiedInventoryUpdateManyWithWhereWithoutMerchantInput | UnifiedInventoryUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: UnifiedInventoryScalarWhereInput | UnifiedInventoryScalarWhereInput[]
  }

  export type AgentRecommendationUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<AgentRecommendationCreateWithoutMerchantInput, AgentRecommendationUncheckedCreateWithoutMerchantInput> | AgentRecommendationCreateWithoutMerchantInput[] | AgentRecommendationUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: AgentRecommendationCreateOrConnectWithoutMerchantInput | AgentRecommendationCreateOrConnectWithoutMerchantInput[]
    upsert?: AgentRecommendationUpsertWithWhereUniqueWithoutMerchantInput | AgentRecommendationUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: AgentRecommendationCreateManyMerchantInputEnvelope
    set?: AgentRecommendationWhereUniqueInput | AgentRecommendationWhereUniqueInput[]
    disconnect?: AgentRecommendationWhereUniqueInput | AgentRecommendationWhereUniqueInput[]
    delete?: AgentRecommendationWhereUniqueInput | AgentRecommendationWhereUniqueInput[]
    connect?: AgentRecommendationWhereUniqueInput | AgentRecommendationWhereUniqueInput[]
    update?: AgentRecommendationUpdateWithWhereUniqueWithoutMerchantInput | AgentRecommendationUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: AgentRecommendationUpdateManyWithWhereWithoutMerchantInput | AgentRecommendationUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: AgentRecommendationScalarWhereInput | AgentRecommendationScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<AuditLogCreateWithoutMerchantInput, AuditLogUncheckedCreateWithoutMerchantInput> | AuditLogCreateWithoutMerchantInput[] | AuditLogUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutMerchantInput | AuditLogCreateOrConnectWithoutMerchantInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutMerchantInput | AuditLogUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: AuditLogCreateManyMerchantInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutMerchantInput | AuditLogUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutMerchantInput | AuditLogUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutMerchantNestedInput = {
    create?: XOR<UserCreateWithoutMerchantInput, UserUncheckedCreateWithoutMerchantInput>
    connectOrCreate?: UserCreateOrConnectWithoutMerchantInput
    upsert?: UserUpsertWithoutMerchantInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMerchantInput, UserUpdateWithoutMerchantInput>, UserUncheckedUpdateWithoutMerchantInput>
  }

  export type ConnectorInstanceUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<ConnectorInstanceCreateWithoutMerchantInput, ConnectorInstanceUncheckedCreateWithoutMerchantInput> | ConnectorInstanceCreateWithoutMerchantInput[] | ConnectorInstanceUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: ConnectorInstanceCreateOrConnectWithoutMerchantInput | ConnectorInstanceCreateOrConnectWithoutMerchantInput[]
    upsert?: ConnectorInstanceUpsertWithWhereUniqueWithoutMerchantInput | ConnectorInstanceUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: ConnectorInstanceCreateManyMerchantInputEnvelope
    set?: ConnectorInstanceWhereUniqueInput | ConnectorInstanceWhereUniqueInput[]
    disconnect?: ConnectorInstanceWhereUniqueInput | ConnectorInstanceWhereUniqueInput[]
    delete?: ConnectorInstanceWhereUniqueInput | ConnectorInstanceWhereUniqueInput[]
    connect?: ConnectorInstanceWhereUniqueInput | ConnectorInstanceWhereUniqueInput[]
    update?: ConnectorInstanceUpdateWithWhereUniqueWithoutMerchantInput | ConnectorInstanceUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: ConnectorInstanceUpdateManyWithWhereWithoutMerchantInput | ConnectorInstanceUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: ConnectorInstanceScalarWhereInput | ConnectorInstanceScalarWhereInput[]
  }

  export type UnifiedOrderUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<UnifiedOrderCreateWithoutMerchantInput, UnifiedOrderUncheckedCreateWithoutMerchantInput> | UnifiedOrderCreateWithoutMerchantInput[] | UnifiedOrderUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedOrderCreateOrConnectWithoutMerchantInput | UnifiedOrderCreateOrConnectWithoutMerchantInput[]
    upsert?: UnifiedOrderUpsertWithWhereUniqueWithoutMerchantInput | UnifiedOrderUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: UnifiedOrderCreateManyMerchantInputEnvelope
    set?: UnifiedOrderWhereUniqueInput | UnifiedOrderWhereUniqueInput[]
    disconnect?: UnifiedOrderWhereUniqueInput | UnifiedOrderWhereUniqueInput[]
    delete?: UnifiedOrderWhereUniqueInput | UnifiedOrderWhereUniqueInput[]
    connect?: UnifiedOrderWhereUniqueInput | UnifiedOrderWhereUniqueInput[]
    update?: UnifiedOrderUpdateWithWhereUniqueWithoutMerchantInput | UnifiedOrderUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: UnifiedOrderUpdateManyWithWhereWithoutMerchantInput | UnifiedOrderUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: UnifiedOrderScalarWhereInput | UnifiedOrderScalarWhereInput[]
  }

  export type UnifiedCustomerUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<UnifiedCustomerCreateWithoutMerchantInput, UnifiedCustomerUncheckedCreateWithoutMerchantInput> | UnifiedCustomerCreateWithoutMerchantInput[] | UnifiedCustomerUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedCustomerCreateOrConnectWithoutMerchantInput | UnifiedCustomerCreateOrConnectWithoutMerchantInput[]
    upsert?: UnifiedCustomerUpsertWithWhereUniqueWithoutMerchantInput | UnifiedCustomerUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: UnifiedCustomerCreateManyMerchantInputEnvelope
    set?: UnifiedCustomerWhereUniqueInput | UnifiedCustomerWhereUniqueInput[]
    disconnect?: UnifiedCustomerWhereUniqueInput | UnifiedCustomerWhereUniqueInput[]
    delete?: UnifiedCustomerWhereUniqueInput | UnifiedCustomerWhereUniqueInput[]
    connect?: UnifiedCustomerWhereUniqueInput | UnifiedCustomerWhereUniqueInput[]
    update?: UnifiedCustomerUpdateWithWhereUniqueWithoutMerchantInput | UnifiedCustomerUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: UnifiedCustomerUpdateManyWithWhereWithoutMerchantInput | UnifiedCustomerUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: UnifiedCustomerScalarWhereInput | UnifiedCustomerScalarWhereInput[]
  }

  export type UnifiedCampaignUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<UnifiedCampaignCreateWithoutMerchantInput, UnifiedCampaignUncheckedCreateWithoutMerchantInput> | UnifiedCampaignCreateWithoutMerchantInput[] | UnifiedCampaignUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedCampaignCreateOrConnectWithoutMerchantInput | UnifiedCampaignCreateOrConnectWithoutMerchantInput[]
    upsert?: UnifiedCampaignUpsertWithWhereUniqueWithoutMerchantInput | UnifiedCampaignUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: UnifiedCampaignCreateManyMerchantInputEnvelope
    set?: UnifiedCampaignWhereUniqueInput | UnifiedCampaignWhereUniqueInput[]
    disconnect?: UnifiedCampaignWhereUniqueInput | UnifiedCampaignWhereUniqueInput[]
    delete?: UnifiedCampaignWhereUniqueInput | UnifiedCampaignWhereUniqueInput[]
    connect?: UnifiedCampaignWhereUniqueInput | UnifiedCampaignWhereUniqueInput[]
    update?: UnifiedCampaignUpdateWithWhereUniqueWithoutMerchantInput | UnifiedCampaignUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: UnifiedCampaignUpdateManyWithWhereWithoutMerchantInput | UnifiedCampaignUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: UnifiedCampaignScalarWhereInput | UnifiedCampaignScalarWhereInput[]
  }

  export type UnifiedInventoryUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<UnifiedInventoryCreateWithoutMerchantInput, UnifiedInventoryUncheckedCreateWithoutMerchantInput> | UnifiedInventoryCreateWithoutMerchantInput[] | UnifiedInventoryUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: UnifiedInventoryCreateOrConnectWithoutMerchantInput | UnifiedInventoryCreateOrConnectWithoutMerchantInput[]
    upsert?: UnifiedInventoryUpsertWithWhereUniqueWithoutMerchantInput | UnifiedInventoryUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: UnifiedInventoryCreateManyMerchantInputEnvelope
    set?: UnifiedInventoryWhereUniqueInput | UnifiedInventoryWhereUniqueInput[]
    disconnect?: UnifiedInventoryWhereUniqueInput | UnifiedInventoryWhereUniqueInput[]
    delete?: UnifiedInventoryWhereUniqueInput | UnifiedInventoryWhereUniqueInput[]
    connect?: UnifiedInventoryWhereUniqueInput | UnifiedInventoryWhereUniqueInput[]
    update?: UnifiedInventoryUpdateWithWhereUniqueWithoutMerchantInput | UnifiedInventoryUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: UnifiedInventoryUpdateManyWithWhereWithoutMerchantInput | UnifiedInventoryUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: UnifiedInventoryScalarWhereInput | UnifiedInventoryScalarWhereInput[]
  }

  export type AgentRecommendationUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<AgentRecommendationCreateWithoutMerchantInput, AgentRecommendationUncheckedCreateWithoutMerchantInput> | AgentRecommendationCreateWithoutMerchantInput[] | AgentRecommendationUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: AgentRecommendationCreateOrConnectWithoutMerchantInput | AgentRecommendationCreateOrConnectWithoutMerchantInput[]
    upsert?: AgentRecommendationUpsertWithWhereUniqueWithoutMerchantInput | AgentRecommendationUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: AgentRecommendationCreateManyMerchantInputEnvelope
    set?: AgentRecommendationWhereUniqueInput | AgentRecommendationWhereUniqueInput[]
    disconnect?: AgentRecommendationWhereUniqueInput | AgentRecommendationWhereUniqueInput[]
    delete?: AgentRecommendationWhereUniqueInput | AgentRecommendationWhereUniqueInput[]
    connect?: AgentRecommendationWhereUniqueInput | AgentRecommendationWhereUniqueInput[]
    update?: AgentRecommendationUpdateWithWhereUniqueWithoutMerchantInput | AgentRecommendationUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: AgentRecommendationUpdateManyWithWhereWithoutMerchantInput | AgentRecommendationUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: AgentRecommendationScalarWhereInput | AgentRecommendationScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<AuditLogCreateWithoutMerchantInput, AuditLogUncheckedCreateWithoutMerchantInput> | AuditLogCreateWithoutMerchantInput[] | AuditLogUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutMerchantInput | AuditLogCreateOrConnectWithoutMerchantInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutMerchantInput | AuditLogUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: AuditLogCreateManyMerchantInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutMerchantInput | AuditLogUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutMerchantInput | AuditLogUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type MerchantCreateNestedOneWithoutUserInput = {
    create?: XOR<MerchantCreateWithoutUserInput, MerchantUncheckedCreateWithoutUserInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutUserInput
    connect?: MerchantWhereUniqueInput
  }

  export type MerchantUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<MerchantCreateWithoutUserInput, MerchantUncheckedCreateWithoutUserInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutUserInput
    upsert?: MerchantUpsertWithoutUserInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutUserInput, MerchantUpdateWithoutUserInput>, MerchantUncheckedUpdateWithoutUserInput>
  }

  export type MerchantCreateNestedOneWithoutConnectorInstancesInput = {
    create?: XOR<MerchantCreateWithoutConnectorInstancesInput, MerchantUncheckedCreateWithoutConnectorInstancesInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutConnectorInstancesInput
    connect?: MerchantWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MerchantUpdateOneRequiredWithoutConnectorInstancesNestedInput = {
    create?: XOR<MerchantCreateWithoutConnectorInstancesInput, MerchantUncheckedCreateWithoutConnectorInstancesInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutConnectorInstancesInput
    upsert?: MerchantUpsertWithoutConnectorInstancesInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutConnectorInstancesInput, MerchantUpdateWithoutConnectorInstancesInput>, MerchantUncheckedUpdateWithoutConnectorInstancesInput>
  }

  export type MerchantCreateNestedOneWithoutOrdersInput = {
    create?: XOR<MerchantCreateWithoutOrdersInput, MerchantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutOrdersInput
    connect?: MerchantWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MerchantUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<MerchantCreateWithoutOrdersInput, MerchantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutOrdersInput
    upsert?: MerchantUpsertWithoutOrdersInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutOrdersInput, MerchantUpdateWithoutOrdersInput>, MerchantUncheckedUpdateWithoutOrdersInput>
  }

  export type UnifiedCustomerCreatetagsInput = {
    set: string[]
  }

  export type MerchantCreateNestedOneWithoutCustomersInput = {
    create?: XOR<MerchantCreateWithoutCustomersInput, MerchantUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutCustomersInput
    connect?: MerchantWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UnifiedCustomerUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MerchantUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<MerchantCreateWithoutCustomersInput, MerchantUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutCustomersInput
    upsert?: MerchantUpsertWithoutCustomersInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutCustomersInput, MerchantUpdateWithoutCustomersInput>, MerchantUncheckedUpdateWithoutCustomersInput>
  }

  export type MerchantCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<MerchantCreateWithoutCampaignsInput, MerchantUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutCampaignsInput
    connect?: MerchantWhereUniqueInput
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MerchantUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<MerchantCreateWithoutCampaignsInput, MerchantUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutCampaignsInput
    upsert?: MerchantUpsertWithoutCampaignsInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutCampaignsInput, MerchantUpdateWithoutCampaignsInput>, MerchantUncheckedUpdateWithoutCampaignsInput>
  }

  export type MerchantCreateNestedOneWithoutInventoryInput = {
    create?: XOR<MerchantCreateWithoutInventoryInput, MerchantUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutInventoryInput
    connect?: MerchantWhereUniqueInput
  }

  export type MerchantUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<MerchantCreateWithoutInventoryInput, MerchantUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutInventoryInput
    upsert?: MerchantUpsertWithoutInventoryInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutInventoryInput, MerchantUpdateWithoutInventoryInput>, MerchantUncheckedUpdateWithoutInventoryInput>
  }

  export type MerchantCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<MerchantCreateWithoutRecommendationsInput, MerchantUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutRecommendationsInput
    connect?: MerchantWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MerchantUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<MerchantCreateWithoutRecommendationsInput, MerchantUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutRecommendationsInput
    upsert?: MerchantUpsertWithoutRecommendationsInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutRecommendationsInput, MerchantUpdateWithoutRecommendationsInput>, MerchantUncheckedUpdateWithoutRecommendationsInput>
  }

  export type MerchantCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<MerchantCreateWithoutAuditLogsInput, MerchantUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutAuditLogsInput
    connect?: MerchantWhereUniqueInput
  }

  export type MerchantUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<MerchantCreateWithoutAuditLogsInput, MerchantUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutAuditLogsInput
    upsert?: MerchantUpsertWithoutAuditLogsInput
    disconnect?: MerchantWhereInput | boolean
    delete?: MerchantWhereInput | boolean
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutAuditLogsInput, MerchantUpdateWithoutAuditLogsInput>, MerchantUncheckedUpdateWithoutAuditLogsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutMerchantInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutMerchantInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutMerchantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMerchantInput, UserUncheckedCreateWithoutMerchantInput>
  }

  export type ConnectorInstanceCreateWithoutMerchantInput = {
    id?: string
    connectorType: string
    status?: string
    lastSyncedAt?: Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConnectorInstanceUncheckedCreateWithoutMerchantInput = {
    id?: string
    connectorType: string
    status?: string
    lastSyncedAt?: Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConnectorInstanceCreateOrConnectWithoutMerchantInput = {
    where: ConnectorInstanceWhereUniqueInput
    create: XOR<ConnectorInstanceCreateWithoutMerchantInput, ConnectorInstanceUncheckedCreateWithoutMerchantInput>
  }

  export type ConnectorInstanceCreateManyMerchantInputEnvelope = {
    data: ConnectorInstanceCreateManyMerchantInput | ConnectorInstanceCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type UnifiedOrderCreateWithoutMerchantInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    connectorVersion?: string
    orderNumber?: string | null
    status?: string | null
    currency?: string
    subtotalAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    refundedAmount?: Decimal | DecimalJsLike | number | string
    itemCount?: number
    orderedAt?: Date | string | null
    fulfilledAt?: Date | string | null
    cancelledAt?: Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedOrderUncheckedCreateWithoutMerchantInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    connectorVersion?: string
    orderNumber?: string | null
    status?: string | null
    currency?: string
    subtotalAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    refundedAmount?: Decimal | DecimalJsLike | number | string
    itemCount?: number
    orderedAt?: Date | string | null
    fulfilledAt?: Date | string | null
    cancelledAt?: Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedOrderCreateOrConnectWithoutMerchantInput = {
    where: UnifiedOrderWhereUniqueInput
    create: XOR<UnifiedOrderCreateWithoutMerchantInput, UnifiedOrderUncheckedCreateWithoutMerchantInput>
  }

  export type UnifiedOrderCreateManyMerchantInputEnvelope = {
    data: UnifiedOrderCreateManyMerchantInput | UnifiedOrderCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type UnifiedCustomerCreateWithoutMerchantInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    emailHash?: string | null
    firstName?: string | null
    lastName?: string | null
    orderCount?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    avgOrderValue?: Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: Date | string | null
    lastOrderAt?: Date | string | null
    tags?: UnifiedCustomerCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedCustomerUncheckedCreateWithoutMerchantInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    emailHash?: string | null
    firstName?: string | null
    lastName?: string | null
    orderCount?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    avgOrderValue?: Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: Date | string | null
    lastOrderAt?: Date | string | null
    tags?: UnifiedCustomerCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedCustomerCreateOrConnectWithoutMerchantInput = {
    where: UnifiedCustomerWhereUniqueInput
    create: XOR<UnifiedCustomerCreateWithoutMerchantInput, UnifiedCustomerUncheckedCreateWithoutMerchantInput>
  }

  export type UnifiedCustomerCreateManyMerchantInputEnvelope = {
    data: UnifiedCustomerCreateManyMerchantInput | UnifiedCustomerCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type UnifiedCampaignCreateWithoutMerchantInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    name?: string | null
    type?: string | null
    status?: string | null
    channel?: string | null
    periodStart: Date | string
    periodEnd: Date | string
    spendAmount?: Decimal | DecimalJsLike | number | string | null
    impressions?: bigint | number | null
    clicks?: bigint | number | null
    conversions?: number | null
    conversionValue?: Decimal | DecimalJsLike | number | string | null
    roas?: Decimal | DecimalJsLike | number | string | null
    sends?: number | null
    opens?: number | null
    revenueAttributed?: Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedCampaignUncheckedCreateWithoutMerchantInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    name?: string | null
    type?: string | null
    status?: string | null
    channel?: string | null
    periodStart: Date | string
    periodEnd: Date | string
    spendAmount?: Decimal | DecimalJsLike | number | string | null
    impressions?: bigint | number | null
    clicks?: bigint | number | null
    conversions?: number | null
    conversionValue?: Decimal | DecimalJsLike | number | string | null
    roas?: Decimal | DecimalJsLike | number | string | null
    sends?: number | null
    opens?: number | null
    revenueAttributed?: Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedCampaignCreateOrConnectWithoutMerchantInput = {
    where: UnifiedCampaignWhereUniqueInput
    create: XOR<UnifiedCampaignCreateWithoutMerchantInput, UnifiedCampaignUncheckedCreateWithoutMerchantInput>
  }

  export type UnifiedCampaignCreateManyMerchantInputEnvelope = {
    data: UnifiedCampaignCreateManyMerchantInput | UnifiedCampaignCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type UnifiedInventoryCreateWithoutMerchantInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    productId?: string | null
    variantId?: string | null
    sku?: string | null
    productName?: string | null
    variantName?: string | null
    quantityAvailable?: number
    quantityCommitted?: number
    quantityIncoming?: number
    unitCost?: Decimal | DecimalJsLike | number | string | null
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UnifiedInventoryUncheckedCreateWithoutMerchantInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    productId?: string | null
    variantId?: string | null
    sku?: string | null
    productName?: string | null
    variantName?: string | null
    quantityAvailable?: number
    quantityCommitted?: number
    quantityIncoming?: number
    unitCost?: Decimal | DecimalJsLike | number | string | null
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UnifiedInventoryCreateOrConnectWithoutMerchantInput = {
    where: UnifiedInventoryWhereUniqueInput
    create: XOR<UnifiedInventoryCreateWithoutMerchantInput, UnifiedInventoryUncheckedCreateWithoutMerchantInput>
  }

  export type UnifiedInventoryCreateManyMerchantInputEnvelope = {
    data: UnifiedInventoryCreateManyMerchantInput | UnifiedInventoryCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type AgentRecommendationCreateWithoutMerchantInput = {
    id?: string
    agentRunId: string
    createdAt?: Date | string
    sku?: string | null
    productName?: string | null
    riskLevel: string
    recommendedAction: string
    reorderQuantity?: number | null
    daysToDepletion?: number | null
    revenueAtRisk?: Decimal | DecimalJsLike | number | string | null
    confidenceScore?: number | null
    reasoningSummary?: string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
  }

  export type AgentRecommendationUncheckedCreateWithoutMerchantInput = {
    id?: string
    agentRunId: string
    createdAt?: Date | string
    sku?: string | null
    productName?: string | null
    riskLevel: string
    recommendedAction: string
    reorderQuantity?: number | null
    daysToDepletion?: number | null
    revenueAtRisk?: Decimal | DecimalJsLike | number | string | null
    confidenceScore?: number | null
    reasoningSummary?: string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
  }

  export type AgentRecommendationCreateOrConnectWithoutMerchantInput = {
    where: AgentRecommendationWhereUniqueInput
    create: XOR<AgentRecommendationCreateWithoutMerchantInput, AgentRecommendationUncheckedCreateWithoutMerchantInput>
  }

  export type AgentRecommendationCreateManyMerchantInputEnvelope = {
    data: AgentRecommendationCreateManyMerchantInput | AgentRecommendationCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutMerchantInput = {
    id?: string
    actorId?: string | null
    actorType?: string | null
    action: string
    resourceType?: string | null
    resourceId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutMerchantInput = {
    id?: string
    actorId?: string | null
    actorType?: string | null
    action: string
    resourceType?: string | null
    resourceId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutMerchantInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutMerchantInput, AuditLogUncheckedCreateWithoutMerchantInput>
  }

  export type AuditLogCreateManyMerchantInputEnvelope = {
    data: AuditLogCreateManyMerchantInput | AuditLogCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMerchantInput = {
    update: XOR<UserUpdateWithoutMerchantInput, UserUncheckedUpdateWithoutMerchantInput>
    create: XOR<UserCreateWithoutMerchantInput, UserUncheckedCreateWithoutMerchantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMerchantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMerchantInput, UserUncheckedUpdateWithoutMerchantInput>
  }

  export type UserUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorInstanceUpsertWithWhereUniqueWithoutMerchantInput = {
    where: ConnectorInstanceWhereUniqueInput
    update: XOR<ConnectorInstanceUpdateWithoutMerchantInput, ConnectorInstanceUncheckedUpdateWithoutMerchantInput>
    create: XOR<ConnectorInstanceCreateWithoutMerchantInput, ConnectorInstanceUncheckedCreateWithoutMerchantInput>
  }

  export type ConnectorInstanceUpdateWithWhereUniqueWithoutMerchantInput = {
    where: ConnectorInstanceWhereUniqueInput
    data: XOR<ConnectorInstanceUpdateWithoutMerchantInput, ConnectorInstanceUncheckedUpdateWithoutMerchantInput>
  }

  export type ConnectorInstanceUpdateManyWithWhereWithoutMerchantInput = {
    where: ConnectorInstanceScalarWhereInput
    data: XOR<ConnectorInstanceUpdateManyMutationInput, ConnectorInstanceUncheckedUpdateManyWithoutMerchantInput>
  }

  export type ConnectorInstanceScalarWhereInput = {
    AND?: ConnectorInstanceScalarWhereInput | ConnectorInstanceScalarWhereInput[]
    OR?: ConnectorInstanceScalarWhereInput[]
    NOT?: ConnectorInstanceScalarWhereInput | ConnectorInstanceScalarWhereInput[]
    id?: StringFilter<"ConnectorInstance"> | string
    merchantId?: StringFilter<"ConnectorInstance"> | string
    connectorType?: StringFilter<"ConnectorInstance"> | string
    status?: StringFilter<"ConnectorInstance"> | string
    lastSyncedAt?: DateTimeNullableFilter<"ConnectorInstance"> | Date | string | null
    syncCursor?: JsonNullableFilter<"ConnectorInstance">
    config?: JsonNullableFilter<"ConnectorInstance">
    createdAt?: DateTimeFilter<"ConnectorInstance"> | Date | string
  }

  export type UnifiedOrderUpsertWithWhereUniqueWithoutMerchantInput = {
    where: UnifiedOrderWhereUniqueInput
    update: XOR<UnifiedOrderUpdateWithoutMerchantInput, UnifiedOrderUncheckedUpdateWithoutMerchantInput>
    create: XOR<UnifiedOrderCreateWithoutMerchantInput, UnifiedOrderUncheckedCreateWithoutMerchantInput>
  }

  export type UnifiedOrderUpdateWithWhereUniqueWithoutMerchantInput = {
    where: UnifiedOrderWhereUniqueInput
    data: XOR<UnifiedOrderUpdateWithoutMerchantInput, UnifiedOrderUncheckedUpdateWithoutMerchantInput>
  }

  export type UnifiedOrderUpdateManyWithWhereWithoutMerchantInput = {
    where: UnifiedOrderScalarWhereInput
    data: XOR<UnifiedOrderUpdateManyMutationInput, UnifiedOrderUncheckedUpdateManyWithoutMerchantInput>
  }

  export type UnifiedOrderScalarWhereInput = {
    AND?: UnifiedOrderScalarWhereInput | UnifiedOrderScalarWhereInput[]
    OR?: UnifiedOrderScalarWhereInput[]
    NOT?: UnifiedOrderScalarWhereInput | UnifiedOrderScalarWhereInput[]
    id?: StringFilter<"UnifiedOrder"> | string
    merchantId?: StringFilter<"UnifiedOrder"> | string
    sourceId?: StringFilter<"UnifiedOrder"> | string
    sourceConnector?: StringFilter<"UnifiedOrder"> | string
    sourceSyncedAt?: DateTimeFilter<"UnifiedOrder"> | Date | string
    connectorVersion?: StringFilter<"UnifiedOrder"> | string
    orderNumber?: StringNullableFilter<"UnifiedOrder"> | string | null
    status?: StringNullableFilter<"UnifiedOrder"> | string | null
    currency?: StringFilter<"UnifiedOrder"> | string
    subtotalAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    refundedAmount?: DecimalFilter<"UnifiedOrder"> | Decimal | DecimalJsLike | number | string
    itemCount?: IntFilter<"UnifiedOrder"> | number
    orderedAt?: DateTimeNullableFilter<"UnifiedOrder"> | Date | string | null
    fulfilledAt?: DateTimeNullableFilter<"UnifiedOrder"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"UnifiedOrder"> | Date | string | null
    rawPayload?: JsonNullableFilter<"UnifiedOrder">
    checksum?: StringNullableFilter<"UnifiedOrder"> | string | null
    createdAt?: DateTimeFilter<"UnifiedOrder"> | Date | string
  }

  export type UnifiedCustomerUpsertWithWhereUniqueWithoutMerchantInput = {
    where: UnifiedCustomerWhereUniqueInput
    update: XOR<UnifiedCustomerUpdateWithoutMerchantInput, UnifiedCustomerUncheckedUpdateWithoutMerchantInput>
    create: XOR<UnifiedCustomerCreateWithoutMerchantInput, UnifiedCustomerUncheckedCreateWithoutMerchantInput>
  }

  export type UnifiedCustomerUpdateWithWhereUniqueWithoutMerchantInput = {
    where: UnifiedCustomerWhereUniqueInput
    data: XOR<UnifiedCustomerUpdateWithoutMerchantInput, UnifiedCustomerUncheckedUpdateWithoutMerchantInput>
  }

  export type UnifiedCustomerUpdateManyWithWhereWithoutMerchantInput = {
    where: UnifiedCustomerScalarWhereInput
    data: XOR<UnifiedCustomerUpdateManyMutationInput, UnifiedCustomerUncheckedUpdateManyWithoutMerchantInput>
  }

  export type UnifiedCustomerScalarWhereInput = {
    AND?: UnifiedCustomerScalarWhereInput | UnifiedCustomerScalarWhereInput[]
    OR?: UnifiedCustomerScalarWhereInput[]
    NOT?: UnifiedCustomerScalarWhereInput | UnifiedCustomerScalarWhereInput[]
    id?: StringFilter<"UnifiedCustomer"> | string
    merchantId?: StringFilter<"UnifiedCustomer"> | string
    sourceId?: StringFilter<"UnifiedCustomer"> | string
    sourceConnector?: StringFilter<"UnifiedCustomer"> | string
    sourceSyncedAt?: DateTimeFilter<"UnifiedCustomer"> | Date | string
    emailHash?: StringNullableFilter<"UnifiedCustomer"> | string | null
    firstName?: StringNullableFilter<"UnifiedCustomer"> | string | null
    lastName?: StringNullableFilter<"UnifiedCustomer"> | string | null
    orderCount?: IntFilter<"UnifiedCustomer"> | number
    totalSpent?: DecimalFilter<"UnifiedCustomer"> | Decimal | DecimalJsLike | number | string
    avgOrderValue?: DecimalNullableFilter<"UnifiedCustomer"> | Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: DateTimeNullableFilter<"UnifiedCustomer"> | Date | string | null
    lastOrderAt?: DateTimeNullableFilter<"UnifiedCustomer"> | Date | string | null
    tags?: StringNullableListFilter<"UnifiedCustomer">
    rawPayload?: JsonNullableFilter<"UnifiedCustomer">
    checksum?: StringNullableFilter<"UnifiedCustomer"> | string | null
    createdAt?: DateTimeFilter<"UnifiedCustomer"> | Date | string
  }

  export type UnifiedCampaignUpsertWithWhereUniqueWithoutMerchantInput = {
    where: UnifiedCampaignWhereUniqueInput
    update: XOR<UnifiedCampaignUpdateWithoutMerchantInput, UnifiedCampaignUncheckedUpdateWithoutMerchantInput>
    create: XOR<UnifiedCampaignCreateWithoutMerchantInput, UnifiedCampaignUncheckedCreateWithoutMerchantInput>
  }

  export type UnifiedCampaignUpdateWithWhereUniqueWithoutMerchantInput = {
    where: UnifiedCampaignWhereUniqueInput
    data: XOR<UnifiedCampaignUpdateWithoutMerchantInput, UnifiedCampaignUncheckedUpdateWithoutMerchantInput>
  }

  export type UnifiedCampaignUpdateManyWithWhereWithoutMerchantInput = {
    where: UnifiedCampaignScalarWhereInput
    data: XOR<UnifiedCampaignUpdateManyMutationInput, UnifiedCampaignUncheckedUpdateManyWithoutMerchantInput>
  }

  export type UnifiedCampaignScalarWhereInput = {
    AND?: UnifiedCampaignScalarWhereInput | UnifiedCampaignScalarWhereInput[]
    OR?: UnifiedCampaignScalarWhereInput[]
    NOT?: UnifiedCampaignScalarWhereInput | UnifiedCampaignScalarWhereInput[]
    id?: StringFilter<"UnifiedCampaign"> | string
    merchantId?: StringFilter<"UnifiedCampaign"> | string
    sourceId?: StringFilter<"UnifiedCampaign"> | string
    sourceConnector?: StringFilter<"UnifiedCampaign"> | string
    sourceSyncedAt?: DateTimeFilter<"UnifiedCampaign"> | Date | string
    name?: StringNullableFilter<"UnifiedCampaign"> | string | null
    type?: StringNullableFilter<"UnifiedCampaign"> | string | null
    status?: StringNullableFilter<"UnifiedCampaign"> | string | null
    channel?: StringNullableFilter<"UnifiedCampaign"> | string | null
    periodStart?: DateTimeFilter<"UnifiedCampaign"> | Date | string
    periodEnd?: DateTimeFilter<"UnifiedCampaign"> | Date | string
    spendAmount?: DecimalNullableFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    impressions?: BigIntNullableFilter<"UnifiedCampaign"> | bigint | number | null
    clicks?: BigIntNullableFilter<"UnifiedCampaign"> | bigint | number | null
    conversions?: IntNullableFilter<"UnifiedCampaign"> | number | null
    conversionValue?: DecimalNullableFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    roas?: DecimalNullableFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    sends?: IntNullableFilter<"UnifiedCampaign"> | number | null
    opens?: IntNullableFilter<"UnifiedCampaign"> | number | null
    revenueAttributed?: DecimalNullableFilter<"UnifiedCampaign"> | Decimal | DecimalJsLike | number | string | null
    rawPayload?: JsonNullableFilter<"UnifiedCampaign">
    checksum?: StringNullableFilter<"UnifiedCampaign"> | string | null
    createdAt?: DateTimeFilter<"UnifiedCampaign"> | Date | string
  }

  export type UnifiedInventoryUpsertWithWhereUniqueWithoutMerchantInput = {
    where: UnifiedInventoryWhereUniqueInput
    update: XOR<UnifiedInventoryUpdateWithoutMerchantInput, UnifiedInventoryUncheckedUpdateWithoutMerchantInput>
    create: XOR<UnifiedInventoryCreateWithoutMerchantInput, UnifiedInventoryUncheckedCreateWithoutMerchantInput>
  }

  export type UnifiedInventoryUpdateWithWhereUniqueWithoutMerchantInput = {
    where: UnifiedInventoryWhereUniqueInput
    data: XOR<UnifiedInventoryUpdateWithoutMerchantInput, UnifiedInventoryUncheckedUpdateWithoutMerchantInput>
  }

  export type UnifiedInventoryUpdateManyWithWhereWithoutMerchantInput = {
    where: UnifiedInventoryScalarWhereInput
    data: XOR<UnifiedInventoryUpdateManyMutationInput, UnifiedInventoryUncheckedUpdateManyWithoutMerchantInput>
  }

  export type UnifiedInventoryScalarWhereInput = {
    AND?: UnifiedInventoryScalarWhereInput | UnifiedInventoryScalarWhereInput[]
    OR?: UnifiedInventoryScalarWhereInput[]
    NOT?: UnifiedInventoryScalarWhereInput | UnifiedInventoryScalarWhereInput[]
    id?: StringFilter<"UnifiedInventory"> | string
    merchantId?: StringFilter<"UnifiedInventory"> | string
    sourceId?: StringFilter<"UnifiedInventory"> | string
    sourceConnector?: StringFilter<"UnifiedInventory"> | string
    sourceSyncedAt?: DateTimeFilter<"UnifiedInventory"> | Date | string
    productId?: StringNullableFilter<"UnifiedInventory"> | string | null
    variantId?: StringNullableFilter<"UnifiedInventory"> | string | null
    sku?: StringNullableFilter<"UnifiedInventory"> | string | null
    productName?: StringNullableFilter<"UnifiedInventory"> | string | null
    variantName?: StringNullableFilter<"UnifiedInventory"> | string | null
    quantityAvailable?: IntFilter<"UnifiedInventory"> | number
    quantityCommitted?: IntFilter<"UnifiedInventory"> | number
    quantityIncoming?: IntFilter<"UnifiedInventory"> | number
    unitCost?: DecimalNullableFilter<"UnifiedInventory"> | Decimal | DecimalJsLike | number | string | null
    unitPrice?: DecimalNullableFilter<"UnifiedInventory"> | Decimal | DecimalJsLike | number | string | null
    rawPayload?: JsonNullableFilter<"UnifiedInventory">
    createdAt?: DateTimeFilter<"UnifiedInventory"> | Date | string
  }

  export type AgentRecommendationUpsertWithWhereUniqueWithoutMerchantInput = {
    where: AgentRecommendationWhereUniqueInput
    update: XOR<AgentRecommendationUpdateWithoutMerchantInput, AgentRecommendationUncheckedUpdateWithoutMerchantInput>
    create: XOR<AgentRecommendationCreateWithoutMerchantInput, AgentRecommendationUncheckedCreateWithoutMerchantInput>
  }

  export type AgentRecommendationUpdateWithWhereUniqueWithoutMerchantInput = {
    where: AgentRecommendationWhereUniqueInput
    data: XOR<AgentRecommendationUpdateWithoutMerchantInput, AgentRecommendationUncheckedUpdateWithoutMerchantInput>
  }

  export type AgentRecommendationUpdateManyWithWhereWithoutMerchantInput = {
    where: AgentRecommendationScalarWhereInput
    data: XOR<AgentRecommendationUpdateManyMutationInput, AgentRecommendationUncheckedUpdateManyWithoutMerchantInput>
  }

  export type AgentRecommendationScalarWhereInput = {
    AND?: AgentRecommendationScalarWhereInput | AgentRecommendationScalarWhereInput[]
    OR?: AgentRecommendationScalarWhereInput[]
    NOT?: AgentRecommendationScalarWhereInput | AgentRecommendationScalarWhereInput[]
    id?: StringFilter<"AgentRecommendation"> | string
    merchantId?: StringFilter<"AgentRecommendation"> | string
    agentRunId?: StringFilter<"AgentRecommendation"> | string
    createdAt?: DateTimeFilter<"AgentRecommendation"> | Date | string
    sku?: StringNullableFilter<"AgentRecommendation"> | string | null
    productName?: StringNullableFilter<"AgentRecommendation"> | string | null
    riskLevel?: StringFilter<"AgentRecommendation"> | string
    recommendedAction?: StringFilter<"AgentRecommendation"> | string
    reorderQuantity?: IntNullableFilter<"AgentRecommendation"> | number | null
    daysToDepletion?: FloatNullableFilter<"AgentRecommendation"> | number | null
    revenueAtRisk?: DecimalNullableFilter<"AgentRecommendation"> | Decimal | DecimalJsLike | number | string | null
    confidenceScore?: FloatNullableFilter<"AgentRecommendation"> | number | null
    reasoningSummary?: StringNullableFilter<"AgentRecommendation"> | string | null
    citations?: JsonNullableFilter<"AgentRecommendation">
    status?: StringFilter<"AgentRecommendation"> | string
    reviewedAt?: DateTimeNullableFilter<"AgentRecommendation"> | Date | string | null
    reviewedBy?: StringNullableFilter<"AgentRecommendation"> | string | null
  }

  export type AuditLogUpsertWithWhereUniqueWithoutMerchantInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutMerchantInput, AuditLogUncheckedUpdateWithoutMerchantInput>
    create: XOR<AuditLogCreateWithoutMerchantInput, AuditLogUncheckedCreateWithoutMerchantInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutMerchantInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutMerchantInput, AuditLogUncheckedUpdateWithoutMerchantInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutMerchantInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutMerchantInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    merchantId?: StringNullableFilter<"AuditLog"> | string | null
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    actorType?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resourceType?: StringNullableFilter<"AuditLog"> | string | null
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type MerchantCreateWithoutUserInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    connectorInstances?: ConnectorInstanceCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    connectorInstances?: ConnectorInstanceUncheckedCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderUncheckedCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerUncheckedCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignUncheckedCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryUncheckedCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationUncheckedCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutUserInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutUserInput, MerchantUncheckedCreateWithoutUserInput>
  }

  export type MerchantUpsertWithoutUserInput = {
    update: XOR<MerchantUpdateWithoutUserInput, MerchantUncheckedUpdateWithoutUserInput>
    create: XOR<MerchantCreateWithoutUserInput, MerchantUncheckedCreateWithoutUserInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutUserInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutUserInput, MerchantUncheckedUpdateWithoutUserInput>
  }

  export type MerchantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectorInstances?: ConnectorInstanceUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectorInstances?: ConnectorInstanceUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUncheckedUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUncheckedUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUncheckedUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUncheckedUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUncheckedUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateWithoutConnectorInstancesInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserCreateNestedOneWithoutMerchantInput
    orders?: UnifiedOrderCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutConnectorInstancesInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserUncheckedCreateNestedOneWithoutMerchantInput
    orders?: UnifiedOrderUncheckedCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerUncheckedCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignUncheckedCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryUncheckedCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationUncheckedCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutConnectorInstancesInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutConnectorInstancesInput, MerchantUncheckedCreateWithoutConnectorInstancesInput>
  }

  export type MerchantUpsertWithoutConnectorInstancesInput = {
    update: XOR<MerchantUpdateWithoutConnectorInstancesInput, MerchantUncheckedUpdateWithoutConnectorInstancesInput>
    create: XOR<MerchantCreateWithoutConnectorInstancesInput, MerchantUncheckedCreateWithoutConnectorInstancesInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutConnectorInstancesInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutConnectorInstancesInput, MerchantUncheckedUpdateWithoutConnectorInstancesInput>
  }

  export type MerchantUpdateWithoutConnectorInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutMerchantNestedInput
    orders?: UnifiedOrderUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutConnectorInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutMerchantNestedInput
    orders?: UnifiedOrderUncheckedUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUncheckedUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUncheckedUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUncheckedUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUncheckedUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateWithoutOrdersInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserUncheckedCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceUncheckedCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerUncheckedCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignUncheckedCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryUncheckedCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationUncheckedCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutOrdersInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutOrdersInput, MerchantUncheckedCreateWithoutOrdersInput>
  }

  export type MerchantUpsertWithoutOrdersInput = {
    update: XOR<MerchantUpdateWithoutOrdersInput, MerchantUncheckedUpdateWithoutOrdersInput>
    create: XOR<MerchantCreateWithoutOrdersInput, MerchantUncheckedCreateWithoutOrdersInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutOrdersInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutOrdersInput, MerchantUncheckedUpdateWithoutOrdersInput>
  }

  export type MerchantUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUncheckedUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUncheckedUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUncheckedUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUncheckedUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUncheckedUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateWithoutCustomersInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutCustomersInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserUncheckedCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceUncheckedCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderUncheckedCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignUncheckedCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryUncheckedCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationUncheckedCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutCustomersInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutCustomersInput, MerchantUncheckedCreateWithoutCustomersInput>
  }

  export type MerchantUpsertWithoutCustomersInput = {
    update: XOR<MerchantUpdateWithoutCustomersInput, MerchantUncheckedUpdateWithoutCustomersInput>
    create: XOR<MerchantCreateWithoutCustomersInput, MerchantUncheckedCreateWithoutCustomersInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutCustomersInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutCustomersInput, MerchantUncheckedUpdateWithoutCustomersInput>
  }

  export type MerchantUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUncheckedUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUncheckedUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUncheckedUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUncheckedUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateWithoutCampaignsInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserUncheckedCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceUncheckedCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderUncheckedCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerUncheckedCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryUncheckedCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationUncheckedCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutCampaignsInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutCampaignsInput, MerchantUncheckedCreateWithoutCampaignsInput>
  }

  export type MerchantUpsertWithoutCampaignsInput = {
    update: XOR<MerchantUpdateWithoutCampaignsInput, MerchantUncheckedUpdateWithoutCampaignsInput>
    create: XOR<MerchantCreateWithoutCampaignsInput, MerchantUncheckedCreateWithoutCampaignsInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutCampaignsInput, MerchantUncheckedUpdateWithoutCampaignsInput>
  }

  export type MerchantUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUncheckedUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUncheckedUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUncheckedUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUncheckedUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateWithoutInventoryInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserUncheckedCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceUncheckedCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderUncheckedCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerUncheckedCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignUncheckedCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationUncheckedCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutInventoryInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutInventoryInput, MerchantUncheckedCreateWithoutInventoryInput>
  }

  export type MerchantUpsertWithoutInventoryInput = {
    update: XOR<MerchantUpdateWithoutInventoryInput, MerchantUncheckedUpdateWithoutInventoryInput>
    create: XOR<MerchantCreateWithoutInventoryInput, MerchantUncheckedCreateWithoutInventoryInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutInventoryInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutInventoryInput, MerchantUncheckedUpdateWithoutInventoryInput>
  }

  export type MerchantUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUncheckedUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUncheckedUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUncheckedUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUncheckedUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateWithoutRecommendationsInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutRecommendationsInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserUncheckedCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceUncheckedCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderUncheckedCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerUncheckedCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignUncheckedCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryUncheckedCreateNestedManyWithoutMerchantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutRecommendationsInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutRecommendationsInput, MerchantUncheckedCreateWithoutRecommendationsInput>
  }

  export type MerchantUpsertWithoutRecommendationsInput = {
    update: XOR<MerchantUpdateWithoutRecommendationsInput, MerchantUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<MerchantCreateWithoutRecommendationsInput, MerchantUncheckedCreateWithoutRecommendationsInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutRecommendationsInput, MerchantUncheckedUpdateWithoutRecommendationsInput>
  }

  export type MerchantUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUncheckedUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUncheckedUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUncheckedUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUncheckedUpdateManyWithoutMerchantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    isActive?: boolean
    user?: UserUncheckedCreateNestedOneWithoutMerchantInput
    connectorInstances?: ConnectorInstanceUncheckedCreateNestedManyWithoutMerchantInput
    orders?: UnifiedOrderUncheckedCreateNestedManyWithoutMerchantInput
    customers?: UnifiedCustomerUncheckedCreateNestedManyWithoutMerchantInput
    campaigns?: UnifiedCampaignUncheckedCreateNestedManyWithoutMerchantInput
    inventory?: UnifiedInventoryUncheckedCreateNestedManyWithoutMerchantInput
    recommendations?: AgentRecommendationUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutAuditLogsInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutAuditLogsInput, MerchantUncheckedCreateWithoutAuditLogsInput>
  }

  export type MerchantUpsertWithoutAuditLogsInput = {
    update: XOR<MerchantUpdateWithoutAuditLogsInput, MerchantUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<MerchantCreateWithoutAuditLogsInput, MerchantUncheckedCreateWithoutAuditLogsInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutAuditLogsInput, MerchantUncheckedUpdateWithoutAuditLogsInput>
  }

  export type MerchantUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutMerchantNestedInput
    connectorInstances?: ConnectorInstanceUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: UnifiedOrderUncheckedUpdateManyWithoutMerchantNestedInput
    customers?: UnifiedCustomerUncheckedUpdateManyWithoutMerchantNestedInput
    campaigns?: UnifiedCampaignUncheckedUpdateManyWithoutMerchantNestedInput
    inventory?: UnifiedInventoryUncheckedUpdateManyWithoutMerchantNestedInput
    recommendations?: AgentRecommendationUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type ConnectorInstanceCreateManyMerchantInput = {
    id?: string
    connectorType: string
    status?: string
    lastSyncedAt?: Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UnifiedOrderCreateManyMerchantInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    connectorVersion?: string
    orderNumber?: string | null
    status?: string | null
    currency?: string
    subtotalAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    refundedAmount?: Decimal | DecimalJsLike | number | string
    itemCount?: number
    orderedAt?: Date | string | null
    fulfilledAt?: Date | string | null
    cancelledAt?: Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedCustomerCreateManyMerchantInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    emailHash?: string | null
    firstName?: string | null
    lastName?: string | null
    orderCount?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    avgOrderValue?: Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: Date | string | null
    lastOrderAt?: Date | string | null
    tags?: UnifiedCustomerCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedCampaignCreateManyMerchantInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    name?: string | null
    type?: string | null
    status?: string | null
    channel?: string | null
    periodStart: Date | string
    periodEnd: Date | string
    spendAmount?: Decimal | DecimalJsLike | number | string | null
    impressions?: bigint | number | null
    clicks?: bigint | number | null
    conversions?: number | null
    conversionValue?: Decimal | DecimalJsLike | number | string | null
    roas?: Decimal | DecimalJsLike | number | string | null
    sends?: number | null
    opens?: number | null
    revenueAttributed?: Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    createdAt?: Date | string
  }

  export type UnifiedInventoryCreateManyMerchantInput = {
    id?: string
    sourceId: string
    sourceConnector: string
    sourceSyncedAt: Date | string
    productId?: string | null
    variantId?: string | null
    sku?: string | null
    productName?: string | null
    variantName?: string | null
    quantityAvailable?: number
    quantityCommitted?: number
    quantityIncoming?: number
    unitCost?: Decimal | DecimalJsLike | number | string | null
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AgentRecommendationCreateManyMerchantInput = {
    id?: string
    agentRunId: string
    createdAt?: Date | string
    sku?: string | null
    productName?: string | null
    riskLevel: string
    recommendedAction: string
    reorderQuantity?: number | null
    daysToDepletion?: number | null
    revenueAtRisk?: Decimal | DecimalJsLike | number | string | null
    confidenceScore?: number | null
    reasoningSummary?: string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
  }

  export type AuditLogCreateManyMerchantInput = {
    id?: string
    actorId?: string | null
    actorType?: string | null
    action: string
    resourceType?: string | null
    resourceId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConnectorInstanceUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorInstanceUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorInstanceUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncCursor?: NullableJsonNullValueInput | InputJsonValue
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedOrderUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectorVersion?: StringFieldUpdateOperationsInput | string
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    itemCount?: IntFieldUpdateOperationsInput | number
    orderedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfilledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedOrderUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectorVersion?: StringFieldUpdateOperationsInput | string
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    itemCount?: IntFieldUpdateOperationsInput | number
    orderedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfilledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedOrderUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectorVersion?: StringFieldUpdateOperationsInput | string
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    itemCount?: IntFieldUpdateOperationsInput | number
    orderedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfilledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedCustomerUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    orderCount?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: UnifiedCustomerUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedCustomerUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    orderCount?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: UnifiedCustomerUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedCustomerUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    orderCount?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    firstOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastOrderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: UnifiedCustomerUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedCampaignUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    spendAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impressions?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    clicks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    conversions?: NullableIntFieldUpdateOperationsInput | number | null
    conversionValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    roas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sends?: NullableIntFieldUpdateOperationsInput | number | null
    opens?: NullableIntFieldUpdateOperationsInput | number | null
    revenueAttributed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedCampaignUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    spendAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impressions?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    clicks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    conversions?: NullableIntFieldUpdateOperationsInput | number | null
    conversionValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    roas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sends?: NullableIntFieldUpdateOperationsInput | number | null
    opens?: NullableIntFieldUpdateOperationsInput | number | null
    revenueAttributed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedCampaignUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    spendAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impressions?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    clicks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    conversions?: NullableIntFieldUpdateOperationsInput | number | null
    conversionValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    roas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sends?: NullableIntFieldUpdateOperationsInput | number | null
    opens?: NullableIntFieldUpdateOperationsInput | number | null
    revenueAttributed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedInventoryUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    variantName?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    quantityCommitted?: IntFieldUpdateOperationsInput | number
    quantityIncoming?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedInventoryUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    variantName?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    quantityCommitted?: IntFieldUpdateOperationsInput | number
    quantityIncoming?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiedInventoryUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceConnector?: StringFieldUpdateOperationsInput | string
    sourceSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    variantName?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    quantityCommitted?: IntFieldUpdateOperationsInput | number
    quantityIncoming?: IntFieldUpdateOperationsInput | number
    unitCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRecommendationUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentRunId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    reorderQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    daysToDepletion?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueAtRisk?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasoningSummary?: NullableStringFieldUpdateOperationsInput | string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentRecommendationUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentRunId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    reorderQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    daysToDepletion?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueAtRisk?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasoningSummary?: NullableStringFieldUpdateOperationsInput | string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentRecommendationUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentRunId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    reorderQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    daysToDepletion?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueAtRisk?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasoningSummary?: NullableStringFieldUpdateOperationsInput | string | null
    citations?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MerchantCountOutputTypeDefaultArgs instead
     */
    export type MerchantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerchantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MerchantDefaultArgs instead
     */
    export type MerchantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerchantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConnectorInstanceDefaultArgs instead
     */
    export type ConnectorInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConnectorInstanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnifiedOrderDefaultArgs instead
     */
    export type UnifiedOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnifiedOrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnifiedCustomerDefaultArgs instead
     */
    export type UnifiedCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnifiedCustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnifiedCampaignDefaultArgs instead
     */
    export type UnifiedCampaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnifiedCampaignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnifiedInventoryDefaultArgs instead
     */
    export type UnifiedInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnifiedInventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgentRecommendationDefaultArgs instead
     */
    export type AgentRecommendationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgentRecommendationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgentRunLogDefaultArgs instead
     */
    export type AgentRunLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgentRunLogDefaultArgs<ExtArgs>

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