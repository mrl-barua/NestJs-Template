
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
 * Model Proponent
 * 
 */
export type Proponent = $Result.DefaultSelection<Prisma.$ProponentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProponentType: {
  Insider: 'Insider',
  Outsider: 'Outsider'
};

export type ProponentType = (typeof ProponentType)[keyof typeof ProponentType]


export const ProponentStatus: {
  Pending: 'Pending',
  Approved: 'Approved',
  Rejected: 'Rejected'
};

export type ProponentStatus = (typeof ProponentStatus)[keyof typeof ProponentStatus]

}

export type ProponentType = $Enums.ProponentType

export const ProponentType: typeof $Enums.ProponentType

export type ProponentStatus = $Enums.ProponentStatus

export const ProponentStatus: typeof $Enums.ProponentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Proponents
 * const proponents = await prisma.proponent.findMany()
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
   * // Fetch zero or more Proponents
   * const proponents = await prisma.proponent.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.proponent`: Exposes CRUD operations for the **Proponent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proponents
    * const proponents = await prisma.proponent.findMany()
    * ```
    */
  get proponent(): Prisma.ProponentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Proponent: 'Proponent'
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
      modelProps: "proponent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Proponent: {
        payload: Prisma.$ProponentPayload<ExtArgs>
        fields: Prisma.ProponentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProponentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProponentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProponentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProponentPayload>
          }
          findFirst: {
            args: Prisma.ProponentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProponentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProponentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProponentPayload>
          }
          findMany: {
            args: Prisma.ProponentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProponentPayload>[]
          }
          create: {
            args: Prisma.ProponentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProponentPayload>
          }
          createMany: {
            args: Prisma.ProponentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProponentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProponentPayload>
          }
          update: {
            args: Prisma.ProponentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProponentPayload>
          }
          deleteMany: {
            args: Prisma.ProponentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProponentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProponentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProponentPayload>
          }
          aggregate: {
            args: Prisma.ProponentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProponent>
          }
          groupBy: {
            args: Prisma.ProponentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProponentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProponentCountArgs<ExtArgs>
            result: $Utils.Optional<ProponentCountAggregateOutputType> | number
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
    proponent?: ProponentOmit
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
   * Models
   */

  /**
   * Model Proponent
   */

  export type AggregateProponent = {
    _count: ProponentCountAggregateOutputType | null
    _avg: ProponentAvgAggregateOutputType | null
    _sum: ProponentSumAggregateOutputType | null
    _min: ProponentMinAggregateOutputType | null
    _max: ProponentMaxAggregateOutputType | null
  }

  export type ProponentAvgAggregateOutputType = {
    id: number | null
    departmentId: number | null
    officeId: number | null
  }

  export type ProponentSumAggregateOutputType = {
    id: number | null
    departmentId: number | null
    officeId: number | null
  }

  export type ProponentMinAggregateOutputType = {
    id: number | null
    proponentId: string | null
    departmentId: number | null
    officeId: number | null
    proponentType: $Enums.ProponentType | null
    proponentStatus: $Enums.ProponentStatus | null
    fullName: string | null
    email: string | null
    password: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type ProponentMaxAggregateOutputType = {
    id: number | null
    proponentId: string | null
    departmentId: number | null
    officeId: number | null
    proponentType: $Enums.ProponentType | null
    proponentStatus: $Enums.ProponentStatus | null
    fullName: string | null
    email: string | null
    password: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type ProponentCountAggregateOutputType = {
    id: number
    proponentId: number
    departmentId: number
    officeId: number
    proponentType: number
    proponentStatus: number
    fullName: number
    email: number
    password: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type ProponentAvgAggregateInputType = {
    id?: true
    departmentId?: true
    officeId?: true
  }

  export type ProponentSumAggregateInputType = {
    id?: true
    departmentId?: true
    officeId?: true
  }

  export type ProponentMinAggregateInputType = {
    id?: true
    proponentId?: true
    departmentId?: true
    officeId?: true
    proponentType?: true
    proponentStatus?: true
    fullName?: true
    email?: true
    password?: true
    isDeleted?: true
    createdAt?: true
  }

  export type ProponentMaxAggregateInputType = {
    id?: true
    proponentId?: true
    departmentId?: true
    officeId?: true
    proponentType?: true
    proponentStatus?: true
    fullName?: true
    email?: true
    password?: true
    isDeleted?: true
    createdAt?: true
  }

  export type ProponentCountAggregateInputType = {
    id?: true
    proponentId?: true
    departmentId?: true
    officeId?: true
    proponentType?: true
    proponentStatus?: true
    fullName?: true
    email?: true
    password?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type ProponentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proponent to aggregate.
     */
    where?: ProponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proponents to fetch.
     */
    orderBy?: ProponentOrderByWithRelationInput | ProponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proponents
    **/
    _count?: true | ProponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProponentMaxAggregateInputType
  }

  export type GetProponentAggregateType<T extends ProponentAggregateArgs> = {
        [P in keyof T & keyof AggregateProponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProponent[P]>
      : GetScalarType<T[P], AggregateProponent[P]>
  }




  export type ProponentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProponentWhereInput
    orderBy?: ProponentOrderByWithAggregationInput | ProponentOrderByWithAggregationInput[]
    by: ProponentScalarFieldEnum[] | ProponentScalarFieldEnum
    having?: ProponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProponentCountAggregateInputType | true
    _avg?: ProponentAvgAggregateInputType
    _sum?: ProponentSumAggregateInputType
    _min?: ProponentMinAggregateInputType
    _max?: ProponentMaxAggregateInputType
  }

  export type ProponentGroupByOutputType = {
    id: number
    proponentId: string
    departmentId: number | null
    officeId: number | null
    proponentType: $Enums.ProponentType
    proponentStatus: $Enums.ProponentStatus
    fullName: string
    email: string
    password: string
    isDeleted: boolean
    createdAt: Date
    _count: ProponentCountAggregateOutputType | null
    _avg: ProponentAvgAggregateOutputType | null
    _sum: ProponentSumAggregateOutputType | null
    _min: ProponentMinAggregateOutputType | null
    _max: ProponentMaxAggregateOutputType | null
  }

  type GetProponentGroupByPayload<T extends ProponentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProponentGroupByOutputType[P]>
            : GetScalarType<T[P], ProponentGroupByOutputType[P]>
        }
      >
    >


  export type ProponentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proponentId?: boolean
    departmentId?: boolean
    officeId?: boolean
    proponentType?: boolean
    proponentStatus?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["proponent"]>



  export type ProponentSelectScalar = {
    id?: boolean
    proponentId?: boolean
    departmentId?: boolean
    officeId?: boolean
    proponentType?: boolean
    proponentStatus?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type ProponentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "proponentId" | "departmentId" | "officeId" | "proponentType" | "proponentStatus" | "fullName" | "email" | "password" | "isDeleted" | "createdAt", ExtArgs["result"]["proponent"]>

  export type $ProponentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proponent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      proponentId: string
      departmentId: number | null
      officeId: number | null
      proponentType: $Enums.ProponentType
      proponentStatus: $Enums.ProponentStatus
      fullName: string
      email: string
      password: string
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["proponent"]>
    composites: {}
  }

  type ProponentGetPayload<S extends boolean | null | undefined | ProponentDefaultArgs> = $Result.GetResult<Prisma.$ProponentPayload, S>

  type ProponentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProponentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProponentCountAggregateInputType | true
    }

  export interface ProponentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proponent'], meta: { name: 'Proponent' } }
    /**
     * Find zero or one Proponent that matches the filter.
     * @param {ProponentFindUniqueArgs} args - Arguments to find a Proponent
     * @example
     * // Get one Proponent
     * const proponent = await prisma.proponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProponentFindUniqueArgs>(args: SelectSubset<T, ProponentFindUniqueArgs<ExtArgs>>): Prisma__ProponentClient<$Result.GetResult<Prisma.$ProponentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proponent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProponentFindUniqueOrThrowArgs} args - Arguments to find a Proponent
     * @example
     * // Get one Proponent
     * const proponent = await prisma.proponent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProponentFindUniqueOrThrowArgs>(args: SelectSubset<T, ProponentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProponentClient<$Result.GetResult<Prisma.$ProponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProponentFindFirstArgs} args - Arguments to find a Proponent
     * @example
     * // Get one Proponent
     * const proponent = await prisma.proponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProponentFindFirstArgs>(args?: SelectSubset<T, ProponentFindFirstArgs<ExtArgs>>): Prisma__ProponentClient<$Result.GetResult<Prisma.$ProponentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proponent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProponentFindFirstOrThrowArgs} args - Arguments to find a Proponent
     * @example
     * // Get one Proponent
     * const proponent = await prisma.proponent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProponentFindFirstOrThrowArgs>(args?: SelectSubset<T, ProponentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProponentClient<$Result.GetResult<Prisma.$ProponentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProponentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proponents
     * const proponents = await prisma.proponent.findMany()
     * 
     * // Get first 10 Proponents
     * const proponents = await prisma.proponent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proponentWithIdOnly = await prisma.proponent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProponentFindManyArgs>(args?: SelectSubset<T, ProponentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proponent.
     * @param {ProponentCreateArgs} args - Arguments to create a Proponent.
     * @example
     * // Create one Proponent
     * const Proponent = await prisma.proponent.create({
     *   data: {
     *     // ... data to create a Proponent
     *   }
     * })
     * 
     */
    create<T extends ProponentCreateArgs>(args: SelectSubset<T, ProponentCreateArgs<ExtArgs>>): Prisma__ProponentClient<$Result.GetResult<Prisma.$ProponentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proponents.
     * @param {ProponentCreateManyArgs} args - Arguments to create many Proponents.
     * @example
     * // Create many Proponents
     * const proponent = await prisma.proponent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProponentCreateManyArgs>(args?: SelectSubset<T, ProponentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Proponent.
     * @param {ProponentDeleteArgs} args - Arguments to delete one Proponent.
     * @example
     * // Delete one Proponent
     * const Proponent = await prisma.proponent.delete({
     *   where: {
     *     // ... filter to delete one Proponent
     *   }
     * })
     * 
     */
    delete<T extends ProponentDeleteArgs>(args: SelectSubset<T, ProponentDeleteArgs<ExtArgs>>): Prisma__ProponentClient<$Result.GetResult<Prisma.$ProponentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proponent.
     * @param {ProponentUpdateArgs} args - Arguments to update one Proponent.
     * @example
     * // Update one Proponent
     * const proponent = await prisma.proponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProponentUpdateArgs>(args: SelectSubset<T, ProponentUpdateArgs<ExtArgs>>): Prisma__ProponentClient<$Result.GetResult<Prisma.$ProponentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proponents.
     * @param {ProponentDeleteManyArgs} args - Arguments to filter Proponents to delete.
     * @example
     * // Delete a few Proponents
     * const { count } = await prisma.proponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProponentDeleteManyArgs>(args?: SelectSubset<T, ProponentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proponents
     * const proponent = await prisma.proponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProponentUpdateManyArgs>(args: SelectSubset<T, ProponentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proponent.
     * @param {ProponentUpsertArgs} args - Arguments to update or create a Proponent.
     * @example
     * // Update or create a Proponent
     * const proponent = await prisma.proponent.upsert({
     *   create: {
     *     // ... data to create a Proponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proponent we want to update
     *   }
     * })
     */
    upsert<T extends ProponentUpsertArgs>(args: SelectSubset<T, ProponentUpsertArgs<ExtArgs>>): Prisma__ProponentClient<$Result.GetResult<Prisma.$ProponentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProponentCountArgs} args - Arguments to filter Proponents to count.
     * @example
     * // Count the number of Proponents
     * const count = await prisma.proponent.count({
     *   where: {
     *     // ... the filter for the Proponents we want to count
     *   }
     * })
    **/
    count<T extends ProponentCountArgs>(
      args?: Subset<T, ProponentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProponentAggregateArgs>(args: Subset<T, ProponentAggregateArgs>): Prisma.PrismaPromise<GetProponentAggregateType<T>>

    /**
     * Group by Proponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProponentGroupByArgs} args - Group by arguments.
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
      T extends ProponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProponentGroupByArgs['orderBy'] }
        : { orderBy?: ProponentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proponent model
   */
  readonly fields: ProponentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proponent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProponentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Proponent model
   */
  interface ProponentFieldRefs {
    readonly id: FieldRef<"Proponent", 'Int'>
    readonly proponentId: FieldRef<"Proponent", 'String'>
    readonly departmentId: FieldRef<"Proponent", 'Int'>
    readonly officeId: FieldRef<"Proponent", 'Int'>
    readonly proponentType: FieldRef<"Proponent", 'ProponentType'>
    readonly proponentStatus: FieldRef<"Proponent", 'ProponentStatus'>
    readonly fullName: FieldRef<"Proponent", 'String'>
    readonly email: FieldRef<"Proponent", 'String'>
    readonly password: FieldRef<"Proponent", 'String'>
    readonly isDeleted: FieldRef<"Proponent", 'Boolean'>
    readonly createdAt: FieldRef<"Proponent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proponent findUnique
   */
  export type ProponentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proponent
     */
    select?: ProponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proponent
     */
    omit?: ProponentOmit<ExtArgs> | null
    /**
     * Filter, which Proponent to fetch.
     */
    where: ProponentWhereUniqueInput
  }

  /**
   * Proponent findUniqueOrThrow
   */
  export type ProponentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proponent
     */
    select?: ProponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proponent
     */
    omit?: ProponentOmit<ExtArgs> | null
    /**
     * Filter, which Proponent to fetch.
     */
    where: ProponentWhereUniqueInput
  }

  /**
   * Proponent findFirst
   */
  export type ProponentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proponent
     */
    select?: ProponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proponent
     */
    omit?: ProponentOmit<ExtArgs> | null
    /**
     * Filter, which Proponent to fetch.
     */
    where?: ProponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proponents to fetch.
     */
    orderBy?: ProponentOrderByWithRelationInput | ProponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proponents.
     */
    cursor?: ProponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proponents.
     */
    distinct?: ProponentScalarFieldEnum | ProponentScalarFieldEnum[]
  }

  /**
   * Proponent findFirstOrThrow
   */
  export type ProponentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proponent
     */
    select?: ProponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proponent
     */
    omit?: ProponentOmit<ExtArgs> | null
    /**
     * Filter, which Proponent to fetch.
     */
    where?: ProponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proponents to fetch.
     */
    orderBy?: ProponentOrderByWithRelationInput | ProponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proponents.
     */
    cursor?: ProponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proponents.
     */
    distinct?: ProponentScalarFieldEnum | ProponentScalarFieldEnum[]
  }

  /**
   * Proponent findMany
   */
  export type ProponentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proponent
     */
    select?: ProponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proponent
     */
    omit?: ProponentOmit<ExtArgs> | null
    /**
     * Filter, which Proponents to fetch.
     */
    where?: ProponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proponents to fetch.
     */
    orderBy?: ProponentOrderByWithRelationInput | ProponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proponents.
     */
    cursor?: ProponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proponents.
     */
    skip?: number
    distinct?: ProponentScalarFieldEnum | ProponentScalarFieldEnum[]
  }

  /**
   * Proponent create
   */
  export type ProponentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proponent
     */
    select?: ProponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proponent
     */
    omit?: ProponentOmit<ExtArgs> | null
    /**
     * The data needed to create a Proponent.
     */
    data: XOR<ProponentCreateInput, ProponentUncheckedCreateInput>
  }

  /**
   * Proponent createMany
   */
  export type ProponentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proponents.
     */
    data: ProponentCreateManyInput | ProponentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proponent update
   */
  export type ProponentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proponent
     */
    select?: ProponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proponent
     */
    omit?: ProponentOmit<ExtArgs> | null
    /**
     * The data needed to update a Proponent.
     */
    data: XOR<ProponentUpdateInput, ProponentUncheckedUpdateInput>
    /**
     * Choose, which Proponent to update.
     */
    where: ProponentWhereUniqueInput
  }

  /**
   * Proponent updateMany
   */
  export type ProponentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proponents.
     */
    data: XOR<ProponentUpdateManyMutationInput, ProponentUncheckedUpdateManyInput>
    /**
     * Filter which Proponents to update
     */
    where?: ProponentWhereInput
    /**
     * Limit how many Proponents to update.
     */
    limit?: number
  }

  /**
   * Proponent upsert
   */
  export type ProponentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proponent
     */
    select?: ProponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proponent
     */
    omit?: ProponentOmit<ExtArgs> | null
    /**
     * The filter to search for the Proponent to update in case it exists.
     */
    where: ProponentWhereUniqueInput
    /**
     * In case the Proponent found by the `where` argument doesn't exist, create a new Proponent with this data.
     */
    create: XOR<ProponentCreateInput, ProponentUncheckedCreateInput>
    /**
     * In case the Proponent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProponentUpdateInput, ProponentUncheckedUpdateInput>
  }

  /**
   * Proponent delete
   */
  export type ProponentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proponent
     */
    select?: ProponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proponent
     */
    omit?: ProponentOmit<ExtArgs> | null
    /**
     * Filter which Proponent to delete.
     */
    where: ProponentWhereUniqueInput
  }

  /**
   * Proponent deleteMany
   */
  export type ProponentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proponents to delete
     */
    where?: ProponentWhereInput
    /**
     * Limit how many Proponents to delete.
     */
    limit?: number
  }

  /**
   * Proponent without action
   */
  export type ProponentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proponent
     */
    select?: ProponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proponent
     */
    omit?: ProponentOmit<ExtArgs> | null
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


  export const ProponentScalarFieldEnum: {
    id: 'id',
    proponentId: 'proponentId',
    departmentId: 'departmentId',
    officeId: 'officeId',
    proponentType: 'proponentType',
    proponentStatus: 'proponentStatus',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type ProponentScalarFieldEnum = (typeof ProponentScalarFieldEnum)[keyof typeof ProponentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ProponentOrderByRelevanceFieldEnum: {
    proponentId: 'proponentId',
    fullName: 'fullName',
    email: 'email',
    password: 'password'
  };

  export type ProponentOrderByRelevanceFieldEnum = (typeof ProponentOrderByRelevanceFieldEnum)[keyof typeof ProponentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'ProponentType'
   */
  export type EnumProponentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProponentType'>
    


  /**
   * Reference to a field of type 'ProponentStatus'
   */
  export type EnumProponentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProponentStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProponentWhereInput = {
    AND?: ProponentWhereInput | ProponentWhereInput[]
    OR?: ProponentWhereInput[]
    NOT?: ProponentWhereInput | ProponentWhereInput[]
    id?: IntFilter<"Proponent"> | number
    proponentId?: StringFilter<"Proponent"> | string
    departmentId?: IntNullableFilter<"Proponent"> | number | null
    officeId?: IntNullableFilter<"Proponent"> | number | null
    proponentType?: EnumProponentTypeFilter<"Proponent"> | $Enums.ProponentType
    proponentStatus?: EnumProponentStatusFilter<"Proponent"> | $Enums.ProponentStatus
    fullName?: StringFilter<"Proponent"> | string
    email?: StringFilter<"Proponent"> | string
    password?: StringFilter<"Proponent"> | string
    isDeleted?: BoolFilter<"Proponent"> | boolean
    createdAt?: DateTimeFilter<"Proponent"> | Date | string
  }

  export type ProponentOrderByWithRelationInput = {
    id?: SortOrder
    proponentId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    officeId?: SortOrderInput | SortOrder
    proponentType?: SortOrder
    proponentStatus?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _relevance?: ProponentOrderByRelevanceInput
  }

  export type ProponentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    proponentId?: string
    email?: string
    AND?: ProponentWhereInput | ProponentWhereInput[]
    OR?: ProponentWhereInput[]
    NOT?: ProponentWhereInput | ProponentWhereInput[]
    departmentId?: IntNullableFilter<"Proponent"> | number | null
    officeId?: IntNullableFilter<"Proponent"> | number | null
    proponentType?: EnumProponentTypeFilter<"Proponent"> | $Enums.ProponentType
    proponentStatus?: EnumProponentStatusFilter<"Proponent"> | $Enums.ProponentStatus
    fullName?: StringFilter<"Proponent"> | string
    password?: StringFilter<"Proponent"> | string
    isDeleted?: BoolFilter<"Proponent"> | boolean
    createdAt?: DateTimeFilter<"Proponent"> | Date | string
  }, "id" | "proponentId" | "email">

  export type ProponentOrderByWithAggregationInput = {
    id?: SortOrder
    proponentId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    officeId?: SortOrderInput | SortOrder
    proponentType?: SortOrder
    proponentStatus?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: ProponentCountOrderByAggregateInput
    _avg?: ProponentAvgOrderByAggregateInput
    _max?: ProponentMaxOrderByAggregateInput
    _min?: ProponentMinOrderByAggregateInput
    _sum?: ProponentSumOrderByAggregateInput
  }

  export type ProponentScalarWhereWithAggregatesInput = {
    AND?: ProponentScalarWhereWithAggregatesInput | ProponentScalarWhereWithAggregatesInput[]
    OR?: ProponentScalarWhereWithAggregatesInput[]
    NOT?: ProponentScalarWhereWithAggregatesInput | ProponentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Proponent"> | number
    proponentId?: StringWithAggregatesFilter<"Proponent"> | string
    departmentId?: IntNullableWithAggregatesFilter<"Proponent"> | number | null
    officeId?: IntNullableWithAggregatesFilter<"Proponent"> | number | null
    proponentType?: EnumProponentTypeWithAggregatesFilter<"Proponent"> | $Enums.ProponentType
    proponentStatus?: EnumProponentStatusWithAggregatesFilter<"Proponent"> | $Enums.ProponentStatus
    fullName?: StringWithAggregatesFilter<"Proponent"> | string
    email?: StringWithAggregatesFilter<"Proponent"> | string
    password?: StringWithAggregatesFilter<"Proponent"> | string
    isDeleted?: BoolWithAggregatesFilter<"Proponent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Proponent"> | Date | string
  }

  export type ProponentCreateInput = {
    proponentId: string
    departmentId?: number | null
    officeId?: number | null
    proponentType: $Enums.ProponentType
    proponentStatus: $Enums.ProponentStatus
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ProponentUncheckedCreateInput = {
    id?: number
    proponentId: string
    departmentId?: number | null
    officeId?: number | null
    proponentType: $Enums.ProponentType
    proponentStatus: $Enums.ProponentStatus
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ProponentUpdateInput = {
    proponentId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    proponentType?: EnumProponentTypeFieldUpdateOperationsInput | $Enums.ProponentType
    proponentStatus?: EnumProponentStatusFieldUpdateOperationsInput | $Enums.ProponentStatus
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProponentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    proponentId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    proponentType?: EnumProponentTypeFieldUpdateOperationsInput | $Enums.ProponentType
    proponentStatus?: EnumProponentStatusFieldUpdateOperationsInput | $Enums.ProponentStatus
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProponentCreateManyInput = {
    id?: number
    proponentId: string
    departmentId?: number | null
    officeId?: number | null
    proponentType: $Enums.ProponentType
    proponentStatus: $Enums.ProponentStatus
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ProponentUpdateManyMutationInput = {
    proponentId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    proponentType?: EnumProponentTypeFieldUpdateOperationsInput | $Enums.ProponentType
    proponentStatus?: EnumProponentStatusFieldUpdateOperationsInput | $Enums.ProponentStatus
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProponentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    proponentId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    proponentType?: EnumProponentTypeFieldUpdateOperationsInput | $Enums.ProponentType
    proponentStatus?: EnumProponentStatusFieldUpdateOperationsInput | $Enums.ProponentStatus
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumProponentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProponentType | EnumProponentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProponentType[]
    notIn?: $Enums.ProponentType[]
    not?: NestedEnumProponentTypeFilter<$PrismaModel> | $Enums.ProponentType
  }

  export type EnumProponentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProponentStatus | EnumProponentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProponentStatus[]
    notIn?: $Enums.ProponentStatus[]
    not?: NestedEnumProponentStatusFilter<$PrismaModel> | $Enums.ProponentStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProponentOrderByRelevanceInput = {
    fields: ProponentOrderByRelevanceFieldEnum | ProponentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProponentCountOrderByAggregateInput = {
    id?: SortOrder
    proponentId?: SortOrder
    departmentId?: SortOrder
    officeId?: SortOrder
    proponentType?: SortOrder
    proponentStatus?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ProponentAvgOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    officeId?: SortOrder
  }

  export type ProponentMaxOrderByAggregateInput = {
    id?: SortOrder
    proponentId?: SortOrder
    departmentId?: SortOrder
    officeId?: SortOrder
    proponentType?: SortOrder
    proponentStatus?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ProponentMinOrderByAggregateInput = {
    id?: SortOrder
    proponentId?: SortOrder
    departmentId?: SortOrder
    officeId?: SortOrder
    proponentType?: SortOrder
    proponentStatus?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ProponentSumOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    officeId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type EnumProponentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProponentType | EnumProponentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProponentType[]
    notIn?: $Enums.ProponentType[]
    not?: NestedEnumProponentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProponentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProponentTypeFilter<$PrismaModel>
    _max?: NestedEnumProponentTypeFilter<$PrismaModel>
  }

  export type EnumProponentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProponentStatus | EnumProponentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProponentStatus[]
    notIn?: $Enums.ProponentStatus[]
    not?: NestedEnumProponentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProponentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProponentStatusFilter<$PrismaModel>
    _max?: NestedEnumProponentStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProponentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProponentType
  }

  export type EnumProponentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProponentStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProponentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProponentType | EnumProponentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProponentType[]
    notIn?: $Enums.ProponentType[]
    not?: NestedEnumProponentTypeFilter<$PrismaModel> | $Enums.ProponentType
  }

  export type NestedEnumProponentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProponentStatus | EnumProponentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProponentStatus[]
    notIn?: $Enums.ProponentStatus[]
    not?: NestedEnumProponentStatusFilter<$PrismaModel> | $Enums.ProponentStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProponentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProponentType | EnumProponentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProponentType[]
    notIn?: $Enums.ProponentType[]
    not?: NestedEnumProponentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProponentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProponentTypeFilter<$PrismaModel>
    _max?: NestedEnumProponentTypeFilter<$PrismaModel>
  }

  export type NestedEnumProponentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProponentStatus | EnumProponentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProponentStatus[]
    notIn?: $Enums.ProponentStatus[]
    not?: NestedEnumProponentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProponentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProponentStatusFilter<$PrismaModel>
    _max?: NestedEnumProponentStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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