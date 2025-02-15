## 0.4.0

### Enhancements

- Implement the DecompressionStream builtin [`#160`](https://github.com/fastly/js-compute-runtime/pull/160)
- Improve performace of Regular Expression literals via precompilation [`#146`](https://github.com/fastly/js-compute-runtime/pull/146)

### Fixes

- Calling `tee` on the client request no longer causes the application to hang [`#156`](https://github.com/fastly/js-compute-runtime/pull/156)

## [0.5.0](https://github.com/fastly/js-compute-runtime/compare/js-compute-runtime-v0.4.1...js-compute-runtime-v0.5.0) (2022-08-26)


### Features

* add btoa and atob native implementations ([#227](https://github.com/fastly/js-compute-runtime/issues/227)) ([8b8c31f](https://github.com/fastly/js-compute-runtime/commit/8b8c31fa9ad70337b1060a3242b8e3495ae47df3))
* Improve console output for all types ([#204](https://github.com/fastly/js-compute-runtime/issues/204)) ([a621d26](https://github.com/fastly/js-compute-runtime/commit/a621d26a27ee9ee18b01c5b110a5e74538f671f4))


### Bug Fixes

* Fix our api website implementation ([#229](https://github.com/fastly/js-compute-runtime/issues/229)) ([a54a137](https://github.com/fastly/js-compute-runtime/commit/a54a1371f8a63d1ac11a6f8ecb1d95e6baf96174))

## 0.3.0

### Enhancements

- Implement the CompressionStream builtin
  [#84](https://github.com/fastly/js-compute-runtime/pull/84)
- Removed the requirement for a fastly.toml file to be present when using js-compute-runtimes CLI to compile a WASM file
- **Breaking change:** Removed --skip-pkg argument from js-compute-runtime's CLI
  [#108](https://github.com/fastly/js-compute-runtime/pull/108)
- **Breaking change:** Removed `console.trace` method

### Fixes

- Fix the response error message text
- Throw an error if constructors are called as plain functions
- Fix the behavior of `console.debug`
- Allow builtin classes to be extended

## 0.2.5 (2022-04-12)

### Fixes

* Increase max uri length to 8k (https://github.com/fastly/js-compute-runtime/pull/71)
* Properly forward http headers to upstream requests even if the headers aren't ever read from (https://github.com/fastly/js-compute-runtime/pull/75)

## 0.2.4 (2022-02-09)

### Enhancements

* Support streaming upstream request bodies (https://github.com/fastly/js-compute-runtime/pull/67)

## 0.2.3 (2022-02-01)

### Fixes

* Avoid waiting for async tasks that weren't passed to `FetchEvent#waitUntil` (https://github.com/fastly/js-compute-runtime/pull/53)
* Significantly improve spec-compliance of Request and Response builtins (https://github.com/fastly/js-compute-runtime/pull/64)
### Enhancements

* Increase max supported header size from 4096 bytes to 69000 bytes (https://github.com/fastly/js-compute-runtime/pull/58)
* Update to SpiderMonkey 96 beta (https://github.com/fastly/js-compute-runtime/pull/61)
* Add full support for TransformStreams (https://github.com/fastly/js-compute-runtime/pull/61)
* Support directly piping Request/Response bodies to other Requests/Responses instead of manually copying every chunk (https://github.com/fastly/js-compute-runtime/pull/62)
* Add support for the `queueMicrotask` global function (https://github.com/fastly/js-compute-runtime/pull/65)
* Add support for the `structuredClone` global function (https://github.com/fastly/js-compute-runtime/pull/65)
* Add support for the `location` global object as an instance of `WorkerLocation` (https://github.com/fastly/js-compute-runtime/pull/65)
* Support Big{Ui,I}nt64Array in crypto.getRandomValues (https://github.com/fastly/js-compute-runtime/pull/65)
* Enable class static blocks syntax (https://github.com/fastly/js-compute-runtime/pull/65)

### Fixes

* Ensure we're not waiting for async tasks not passed to `FetchEvent#waitUntil` (https://github.com/fastly/js-compute-runtime/pull/53)

## 0.2.2 (2021-11-10)

### Fixes

* Strip leading `?` in `URLSearchParams` constructor (https://github.com/fastly/js-compute-runtime/pull/35)
* Error the ReadableStream when a body read fails in the hostcall (https://github.com/fastly/js-compute-runtime/pull/36)
* Report uncaught exceptions in the request handler to stderr (https://github.com/fastly/js-compute-runtime/pull/44)
* Fix geo-lookup hostcall invocation (https://github.com/fastly/js-compute-runtime/pull/46)

### Enhancements

* Resolve URLs passed to `Request` and `fetch` relative to the client request URL's origin (https://github.com/fastly/js-compute-runtime/pull/38)
* Return null instead of throwing on missing key in `Dictionary#get` (https://github.com/fastly/js-compute-runtime/pull/41)
* Update to SpiderMonkey 94 beta (https://github.com/fastly/js-compute-runtime/pull/45)
* Expose environment variables via the `fastly.env.get` function (https://github.com/fastly/js-compute-runtime/pull/50)

## 0.2.1 (2021-08-27)

### Fixes

- Properly support `base` argument in `URL` constructor
  [#33](https://github.com/fastly/js-compute-runtime/pull/33)

## 0.2.0 (2021-08-24)

### Enhancements

- Implement the WHATWG URL and URLSearchParam classes
  [#4](https://github.com/fastly/js-compute-runtime/pull/4)

- Enable private class fields and methods, plus ergonomic brand checks
  [#13](https://github.com/fastly/js-compute-runtime/pull/13)

- **Breaking change:** Implement FetchEvent#waitUntil
  [#14](https://github.com/fastly/js-compute-runtime/pull/14)

- Mark builtins that rely on hostcalls as request-handler-only
  [#20](https://github.com/fastly/js-compute-runtime/pull/20)

- Add support for including binary files, and for using typed arrays as Response bodies
  [#22](https://github.com/fastly/js-compute-runtime/pull/22)

- Improve handling of hostcall errors
  [#24](https://github.com/fastly/js-compute-runtime/pull/24)

### Fixes

- **Breaking change:** Make FetchEvent handling more spec-compliant
  [#8](https://github.com/fastly/js-compute-runtime/pull/8)

- Normalize HTTP method names when constructing Requests
  [#15](https://github.com/fastly/js-compute-runtime/pull/15)

- Don't trap when trying to delete a non-existent header
  [#16](https://github.com/fastly/js-compute-runtime/pull/16)

- Reject fetch promise on network error
  [#29](https://github.com/fastly/js-compute-runtime/pull/29)

## 0.1.0 (2021-07-29)

- Initial release.
