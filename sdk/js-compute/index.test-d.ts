/// <reference path="./index.d.ts" />
import {expectError, expectType} from 'tsd';

// atob
{    
    expectError(atob());
    expectError(atob(1));
    expectError(atob({}));
    expectError(atob([]));
    expectError(atob(true));
    expectError(atob(Symbol()));
    expectError(atob(function(){}));
    expectType<string>(atob(''));
}

// btoa
{    
    expectError(btoa());
    expectError(btoa(1));
    expectError(btoa({}));
    expectError(btoa([]));
    expectError(btoa(true));
    expectError(btoa(Symbol()));
    expectError(btoa(function(){}));
    expectType<string>(btoa(''));
}

// ObjectStore
{
    expectError(ObjectStore())
    expectError(ObjectStore('secrets'))
    expectType<ObjectStore>(new ObjectStore("secrets"))
    expectError(new ObjectStore('secrets', {}))
    const store = new ObjectStore('secrets')
    expectError(store.get())
    expectError(store.get(1))
    expectType<Promise<ObjectStoreEntry|null>>(store.get('cat'))
    expectError(store.put())
    expectError(store.put('cat'))
    expectError(store.put('cat', 1))
    expectType<Promise<undefined>>(store.put('cat', 'Aki'))
}

// ObjectStoreEntry
{
    const entry = {} as ObjectStoreEntry
    expectType<ReadableStream<any>>(entry.body)
    expectType<boolean>(entry.bodyUsed)
    expectType<Promise<ArrayBuffer>>(entry.arrayBuffer())
    expectType<Promise<object>>(entry.json())
    expectType<Promise<string>>(entry.text())
}

// onfetch
{
    expectType<FetchEventListener>(onfetch)
}

// addEventListener
{
    // Both parameters are required:
    //  - The first parameter _has_ to be 'fetch'
    //  - The second parameter _has_ to be a function
    expectError(addEventListener('magic'));
    expectError(addEventListener('fetch'));
    expectError<void>(addEventListener('magic', () => {}));
    expectType<void>(addEventListener('fetch', () => {}));
    expectType<void>(addEventListener('fetch', (event) => {
        expectType<FetchEvent>(event)
    }));
}

// FetchEventListener
{
    let listener = (()=>{}) as FetchEventListener;
    expectType<(event: FetchEvent) => any>(listener)
}

// FetchEvent
{
    const event = {} as FetchEvent
    expectType<ClientInfo>(event.client)
    expectType<Request>(event.request)
    expectType<(response: Response | PromiseLike<Response>) => void>(event.respondWith)
    expectType<(promise: Promise<any>) => void>(event.waitUntil)
}

// CacheOverrideMode
{
    const cacheOverride = {} as CacheOverrideMode
    expectType<"none" | "pass" | "override">(cacheOverride)
}

// CacheOverride
{
    expectType<CacheOverride>(new CacheOverride("none"))
    expectType<CacheOverride>(new CacheOverride("pass"))
    expectType<CacheOverride>(new CacheOverride("override"))
    expectType<CacheOverride>(new CacheOverride("none", {ttl: undefined}))
    expectType<CacheOverride>(new CacheOverride("none", {ttl: 1}))
    expectType<CacheOverride>(new CacheOverride("none", {swr: undefined}))
    expectType<CacheOverride>(new CacheOverride("none", {swr: 1}))
    expectType<CacheOverride>(new CacheOverride("none", {surrogateKey: undefined}))
    expectType<CacheOverride>(new CacheOverride("none", {surrogateKey: 'undefined'}))
    expectType<CacheOverride>(new CacheOverride("none", {pci: undefined}))
    expectType<CacheOverride>(new CacheOverride("none", {pci: true}))
    expectType<CacheOverride>(new CacheOverride("pass", {}))
    expectType<CacheOverride>(new CacheOverride("override", {}))
    const cacheOverride = new CacheOverride('none');
    expectType<CacheOverrideMode>(cacheOverride.mode)
    expectType<boolean | undefined>(cacheOverride.pci)
    expectType<number | undefined>(cacheOverride.ttl)
    expectType<number | undefined>(cacheOverride.swr)
    expectType<string | undefined>(cacheOverride.surrogateKey)
}

// CacheOverrideInit
{
    const cacheOverrideInit = {} as CacheOverrideInit
    expectType<boolean | undefined>(cacheOverrideInit.pci)
    expectType<number | undefined>(cacheOverrideInit.ttl)
    expectType<number | undefined>(cacheOverrideInit.swr)
    expectType<string | undefined>(cacheOverrideInit.surrogateKey)
}

// ClientInfo
{
    const client = {} as ClientInfo
    expectType<string>(client.address)
    expectType<Geolocation>(client.geo)
    // They are readonly properties
    expectError(client.address = '')
    expectError(client.geo = {} as Geolocation)
}

// ConfigStore
{
    expectError(new ConfigStore())
    expectError(ConfigStore('example'))
    expectError(ConfigStore())
    expectType<ConfigStore>(new ConfigStore('example'))
    expectType<(key:string) => string>(new ConfigStore('example').get)
}

// Dictionary
{
    expectError(new Dictionary())
    expectError(Dictionary('example'))
    expectError(Dictionary())
    expectType<Dictionary>(new Dictionary('example'))
    expectType<(key:string) => string>(new Dictionary('example').get)
}

// Env
{
    expectError(Env())
    expectError(Env('example'))
    expectError(new Env('example'))
    expectType<Env>(new Env())
    expectType<(key:string) => string>(new Env().get)
}

// Geolocation
{
    const geo = {} as Geolocation
    expectType<string|null>(geo.as_name)
    expectType<number|null>(geo.as_number)
    expectType<number|null>(geo.area_code)
    expectType<string|null>(geo.city)
    expectType<string|null>(geo.conn_speed)
    expectType<string|null>(geo.conn_type)
    expectType<string|null>(geo.continent)
    expectType<string|null>(geo.country_code)
    expectType<string|null>(geo.country_code3)
    expectType<string|null>(geo.gmt_offset)
    expectType<number|null>(geo.latitude)
    expectType<number|null>(geo.longitude)
    expectType<number|null>(geo.metro_code)
    expectType<string|null>(geo.postal_code)
    expectType<string|null>(geo.proxy_description)
    expectType<string|null>(geo.proxy_type)
    expectType<string|null>(geo.region)
    expectType<number|null>(geo.utc_offset)
}

// URL
{
    expectError(new URL())
    expectError(URL('example'))
    expectError(URL('example', 'base'))
    expectError(URL('example', new URL('example')))
    expectError(URL())
    expectType<URL>(new URL('example'))
    expectType<URL>(new URL('example', 'base'))
    expectType<URL>(new URL('example', new URL('example')))

    expectType<string>(new URL('').href)
    new URL('').href = 'example'
    expectError((new URL('').href = 7))

    expectType<string>(new URL('').origin)
    expectError(new URL('').origin = 'example')

    expectType<string>(new URL('').protocol)
    new URL('').protocol = '7'
    expectError((new URL('').protocol = 7))

    expectType<string>(new URL('').username)
    new URL('').username = '7'
    expectError((new URL('').username = 7))

    expectType<string>(new URL('').password)
    new URL('').password = '7'
    expectError((new URL('').password = 7))

    expectType<string>(new URL('').host)
    new URL('').host = '7'
    expectError((new URL('').host = 7))

    expectType<string>(new URL('').hostname)
    new URL('').hostname = '7'
    expectError((new URL('').hostname = 7))

    expectType<string>(new URL('').port)
    new URL('').port = '7'
    expectError((new URL('').port = 7))

    expectType<string>(new URL('').pathname)
    new URL('').pathname = '7'
    expectError((new URL('').pathname = 7))

    expectType<string>(new URL('').search)
    new URL('').search = '7'
    expectError((new URL('').search = 7))

    expectType<URLSearchParams>(new URL('').searchParams)

    expectType<string>(new URL('').hash)
    new URL('').hash = '7'
    expectError((new URL('').hash = 7))
}

// URLSearchParams
{
    expectError(URLSearchParams())
    expectError(new URLSearchParams(false))
    expectType<URLSearchParams>(new URLSearchParams([]))
    expectType<URLSearchParams>(new URLSearchParams({
        [Symbol.iterator]: function* () {
            yield '';
        }
    }))
    expectType<URLSearchParams>(new URLSearchParams({}))
    expectType<URLSearchParams>(new URLSearchParams({a:'a'}))
    expectType<URLSearchParams>(new URLSearchParams(''))
    const searchParams = new URLSearchParams

    expectType<(name: string, value: string) => void>(searchParams.append);
    expectType<(name: string) => void>(searchParams.delete);
    expectType<(name: string) => string | null>(searchParams.get);
    expectType<(name: string) => string[]>(searchParams.getAll);
    expectType<(name: string) => boolean>(searchParams.has);
    expectType<(name: string, value: string) => void>(searchParams.set);
    expectType<() => void>(searchParams.sort);

    expectType<() => IterableIterator<string>>(searchParams.keys);
    expectType<() => IterableIterator<string>>(searchParams.values);
    expectType<() => IterableIterator<[name:string, value:string]>>(searchParams.entries);
    expectType<<THIS_ARG = void>(callback: (this: THIS_ARG, value: string, name: string, searchParams: URLSearchParams) => void, thisArg?: THIS_ARG) => void>(searchParams.forEach)

    expectType<'URLSearchParams'>(searchParams[Symbol.toStringTag])
    expectError(searchParams[Symbol.toStringTag] = 'f')
    expectType<IterableIterator<[name: string, value: string]>>(searchParams[Symbol.iterator]())
}

// console
{
    expectType<Console>(console)
    expectType<(...objects: any[])=>void>(console.log);
    expectType<(...objects: any[])=>void>(console.debug);
    expectType<(...objects: any[])=>void>(console.info);
    expectType<(...objects: any[])=>void>(console.warn);
    expectType<(...objects: any[])=>void>(console.error);
}

// TextDecoder
{
    expectError(TextDecoder())
    expectError(new TextDecoder(''))
    const decoder = new TextDecoder
    expectType<TextDecoder>(decoder)
    expectType<(input?: ArrayBuffer | ArrayBufferView) => string>(decoder.decode)
    expectType<string>(decoder.encoding)
    expectError(decoder.encoding = 'd')
}

// TextEncoder
{
    expectError(TextEncoder())
    expectError(new TextEncoder(''))
    const encoder = new TextEncoder
    expectType<TextEncoder>(encoder)
    expectType<(input?: string) => Uint8Array>(encoder.encode)
    expectType<string>(encoder.encoding)
    expectError(encoder.encoding = 'd')
}

// Logger
{
    const logger = {} as Logger
    expectType<(message:any) => void>(logger.log)
}

// Fastly
{
    expectType<Fastly>(fastly)
    expectType<URL | null>(fastly.baseURL);
    fastly.baseURL = new URL('.');
    fastly.baseURL = null;
    fastly.baseURL = undefined;
    expectType<string>(fastly.defaultBackend);
    fastly.defaultBackend = '.';
    expectType<Env>(fastly.env);
    expectType<(endpoint: string)=> Logger>(fastly.getLogger);
    expectType<(enabled: boolean) => void>(fastly.enableDebugLogging);
    expectType<(address: string)=>Geolocation>(fastly.getGeolocationForIpAddress);
    expectType<(path: string)=>Uint8Array>(fastly.includeBytes);
}

// CompressionStreamFormat
{
    const format = {} as CompressionStreamFormat
    expectType<"deflate" | "deflate-raw" | "gzip">(format)
}

// CompressionStream
{
    expectError(CompressionStream())
    expectError(new CompressionStream(''))
    let stream = new CompressionStream('deflate')
    stream = new CompressionStream('deflate-raw')
    stream = new CompressionStream('gzip')
    expectType<ReadableStream<Uint8Array>>(stream.readable)
    expectError(stream.readable = 'd')
    expectType<WritableStream<Uint8Array>>(stream.writable)
    expectError(stream.writable = 'd')
}

// DecompressionStreamFormat
{
    const format = {} as DecompressionStreamFormat
    expectType<"deflate" | "deflate-raw" | "gzip">(format)
}

// DecompressionStream
{
    expectError(DecompressionStream())
    expectError(new DecompressionStream(''))
    let stream = new DecompressionStream('deflate')
    stream = new DecompressionStream('deflate-raw')
    stream = new DecompressionStream('gzip')
    expectType<ReadableStream<Uint8Array>>(stream.readable)
    expectError(stream.readable = 'd')
    expectType<WritableStream<Uint8Array>>(stream.writable)
    expectError(stream.writable = 'd')
}
