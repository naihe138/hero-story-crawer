require('source-map-support/register')
module.exports =
  /******/
  (function (modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/
      if (installedModules[moduleId])
      /******/
        return installedModules[moduleId].exports;
      /******/
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/
        i: moduleId,
        /******/
        l: false,
        /******/
        exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/
      module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // identity function for calling harmony imports with the correct context
    /******/
    __webpack_require__.i = function (value) { return value; };
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
      /******/
      if (!__webpack_require__.o(exports, name)) {
        /******/
        Object.defineProperty(exports, name, {
          /******/
          configurable: false,
          /******/
          enumerable: true,
          /******/
          get: getter
            /******/
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
        /******/
        function getDefault() { return module['default']; } :
        /******/
        function getModuleExports() { return module; };
      /******/
      __webpack_require__.d(getter, 'a', getter);
      /******/
      return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "/";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 20);
    /******/
  })
  /************************************************************************/
  /******/
  ([
    /* 0 */
    /***/
    function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(19);


      /***/
    },
    /* 1 */
    /***/
    function (module, exports) {

      module.exports = require("fs");

      /***/
    },
    /* 2 */
    /***/
    function (module, exports) {

      module.exports = require("cheerio");

      /***/
    },
    /* 3 */
    /***/
    function (module, exports) {

      module.exports = require("path");

      /***/
    },
    /* 4 */
    /***/
    function (module, exports) {

      module.exports = require("request-promise");

      /***/
    },
    /* 5 */
    /***/
    function (module, exports) {

      module.exports = require("iconv");

      /***/
    },
    /* 6 */
    /***/
    function (module, exports) {

      module.exports = {
        /*
         ** Headers of the page
         */
        head: {
          title: 'starter',
          meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
          link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        },
        /*
         ** Global CSS
         */
        css: ['~static/css/main.css'],
        /*
         ** Customize the progress-bar color
         */
        loading: { color: '#3B8070' }
      };

      /***/
    },
    /* 7 */
    /***/
    function (module, exports, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(18);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_1__controllers_story__ = __webpack_require__(13);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_2__controllers_word__ = __webpack_require__(14);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_3__controllers_appreciate__ = __webpack_require__(12);
      /**
       * @file
       * @author 何文林
       * @date 2017/9/16
       */




      var router = function router(app) {
        var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

        // story
        router.get('/api/hero', __WEBPACK_IMPORTED_MODULE_1__controllers_story__["a" /* default */ ].fetchHeroList);
        router.post('/api/heroDetail', __WEBPACK_IMPORTED_MODULE_1__controllers_story__["a" /* default */ ].fetchHeroDetail);

        // word
        router.get('/api/word', __WEBPACK_IMPORTED_MODULE_2__controllers_word__["a" /* default */ ].fetchWord);
        router.get('/api/wordNav', __WEBPACK_IMPORTED_MODULE_2__controllers_word__["a" /* default */ ].fetchWordNav);
        router.post('/api/wordDetail', __WEBPACK_IMPORTED_MODULE_2__controllers_word__["a" /* default */ ].fetchWordDetail);

        // 鉴赏
        router.get('/api/skin', __WEBPACK_IMPORTED_MODULE_3__controllers_appreciate__["a" /* default */ ].fetchSkin);
        router.get('/api/voiceNav', __WEBPACK_IMPORTED_MODULE_3__controllers_appreciate__["a" /* default */ ].fetchVoiceNav);
        router.get('/api/voiceDetail', __WEBPACK_IMPORTED_MODULE_3__controllers_appreciate__["a" /* default */ ].fetchVoiceDetail);
        router.get('/api/music', __WEBPACK_IMPORTED_MODULE_3__controllers_appreciate__["a" /* default */ ].fetchMusic);

        app.use(router.routes());
        app.use(router.allowedMethods());
      };

      /* harmony default export */
      exports["a"] = router;

      /***/
    },
    /* 8 */
    /***/
    function (module, exports) {

      module.exports = require("koa");

      /***/
    },
    /* 9 */
    /***/
    function (module, exports) {

      module.exports = require("koa-bodyparser");

      /***/
    },
    /* 10 */
    /***/
    function (module, exports) {

      module.exports = require("nuxt");

      /***/
    },
    /* 11 */
    /***/
    function (module, exports, __webpack_require__) {

      "use strict";
      var wordNavUrl = {
        '482175': {
          url1: 'https://pvp.qq.com//webplat/info/news_version3/15592/18024/23901/24878/24883/24901/m15567/list_1.shtml',
          url2: 'https://pvp.qq.com//webplat/info/news_version3/15592/18024/23901/24878/24883/24902/m15565/list_1.shtml'
        },
        '482168': {
          url1: 'https://pvp.qq.com//webplat/info/news_version3/15592/18024/23901/24878/24882/24899/m15567/list_1.shtml',
          url2: 'https://pvp.qq.com//webplat/info/news_version3/15592/18024/23901/24878/24882/24900/m15565/list_1.shtml'
        },
        '482154': {
          url1: 'https://pvp.qq.com//webplat/info/news_version3/15592/18024/23901/24878/24881/24897/m15567/list_1.shtml',
          url2: 'https://pvp.qq.com//webplat/info/news_version3/15592/18024/23901/24878/24881/24898/m15565/list_1.shtml'
        },
        '482143': {
          url1: 'https://pvp.qq.com//webplat/info/news_version3/15592/18024/23901/24878/24880/24895/m15567/list_1.shtml',
          url2: 'https://pvp.qq.com//webplat/info/news_version3/15592/18024/23901/24878/24880/24896/m15565/list_1.shtml'
        },
        '482129': {
          url1: 'https://pvp.qq.com//webplat/info/news_version3/15592/18024/23901/24878/24879/24893/m15567/list_1.shtml',
          url2: 'https://pvp.qq.com//webplat/info/news_version3/15592/18024/23901/24878/24879/24894/m15565/list_1.shtml'
        }
      };

      /* harmony default export */
      exports["a"] = wordNavUrl;

      /***/
    },
    /* 12 */
    /***/
    function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (__dirname) { /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(3);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__cr_appreciate__ = __webpack_require__(15);


        var _this = this;

        function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) {
              function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

        // 鉴赏 爬虫 api





        var resolvePath = function resolvePath(url) {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["resolve"])(__dirname, url);
        };

        var fetchSkin = function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
            var isNew, filePath, exists, result;
            return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                case 0:
                  isNew = ctx.query.isNew;
                  filePath = resolvePath('../crawerdb/skin.json');
                  exists = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync(filePath);
                  result = null;

                  if (!(exists && !isNew)) {
                    _context.next = 12;
                    break;
                  }

                  _context.next = 7;
                  return __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(filePath);

                case 7:
                  result = _context.sent;

                  result = result.toString();
                  result = JSON.parse(result);
                  _context.next = 15;
                  break;

                case 12:
                  _context.next = 14;
                  return __WEBPACK_IMPORTED_MODULE_3__cr_appreciate__["a" /* default */ ].getSkin();

                case 14:
                  result = _context.sent;

                case 15:
                  ctx.body = {
                    success: true,
                    data: result
                  };

                case 16:
                case 'end':
                  return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          return function fetchSkin(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        var fetchVoiceNav = function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
            var isNew, filePath, exists, result;
            return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                case 0:
                  isNew = ctx.query.isNew;
                  filePath = resolvePath('../crawerdb/voice-nav.json');
                  exists = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync(filePath);
                  result = null;

                  if (!(exists && !isNew)) {
                    _context2.next = 12;
                    break;
                  }

                  _context2.next = 7;
                  return __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(filePath);

                case 7:
                  result = _context2.sent;

                  result = result.toString();
                  result = JSON.parse(result);
                  _context2.next = 15;
                  break;

                case 12:
                  _context2.next = 14;
                  return __WEBPACK_IMPORTED_MODULE_3__cr_appreciate__["a" /* default */ ].getVoiceNav();

                case 14:
                  result = _context2.sent;

                case 15:
                  ctx.body = {
                    success: true,
                    data: result
                  };

                case 16:
                case 'end':
                  return _context2.stop();
                }
              }
            }, _callee2, _this);
          }));

          return function fetchVoiceNav(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }();

        var fetchVoiceDetail = function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
            var prams, id, isNew, filePath, exists, result;
            return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                case 0:
                  prams = ctx.query;
                  id = prams.id;
                  isNew = prams.isNew;
                  filePath = resolvePath('../crawerdb/voice-' + id + '.json');
                  exists = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync(filePath);
                  result = null;

                  if (!(exists && !isNew)) {
                    _context3.next = 14;
                    break;
                  }

                  _context3.next = 9;
                  return __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(filePath);

                case 9:
                  result = _context3.sent;

                  result = result.toString();
                  result = JSON.parse(result);
                  _context3.next = 17;
                  break;

                case 14:
                  _context3.next = 16;
                  return __WEBPACK_IMPORTED_MODULE_3__cr_appreciate__["a" /* default */ ].getVoiceDetail(id);

                case 16:
                  result = _context3.sent;

                case 17:

                  ctx.body = {
                    success: true,
                    data: result
                  };

                case 18:
                case 'end':
                  return _context3.stop();
                }
              }
            }, _callee3, _this);
          }));

          return function fetchVoiceDetail(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }();

        var fetchMusic = function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
            var prams, isNew, filePath, exists, result;
            return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                case 0:
                  prams = ctx.query;
                  isNew = prams.isNew;
                  filePath = resolvePath('../crawerdb/music.json');
                  exists = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync(filePath);
                  result = null;

                  if (!(exists && !isNew)) {
                    _context4.next = 13;
                    break;
                  }

                  _context4.next = 8;
                  return __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(filePath);

                case 8:
                  result = _context4.sent;

                  result = result.toString();
                  result = JSON.parse(result);
                  _context4.next = 16;
                  break;

                case 13:
                  _context4.next = 15;
                  return __WEBPACK_IMPORTED_MODULE_3__cr_appreciate__["a" /* default */ ].getMusic();

                case 15:
                  result = _context4.sent;

                case 16:

                  ctx.body = {
                    success: true,
                    data: result
                  };

                case 17:
                case 'end':
                  return _context4.stop();
                }
              }
            }, _callee4, _this);
          }));

          return function fetchMusic(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }();

        /* harmony default export */
        exports["a"] = {
          fetchSkin: fetchSkin,
          fetchVoiceNav: fetchVoiceNav,
          fetchVoiceDetail: fetchVoiceDetail,
          fetchMusic: fetchMusic
        };
        /* WEBPACK VAR INJECTION */
      }.call(exports, "server/controllers"))

      /***/
    },
    /* 13 */
    /***/
    function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (__dirname) { /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__cr_story__ = __webpack_require__(16);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_fs__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fs__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__(3);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);


        var _this = this;

        function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) {
              function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





        var resolvePath = function resolvePath(url) {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_path__["resolve"])(__dirname, url);
        };

        var fetchHeroList = function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
            var isNew, filePath, exists, result;
            return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                case 0:
                  isNew = ctx.query.isNew;
                  filePath = resolvePath('../crawerdb/heroList.json');
                  exists = __WEBPACK_IMPORTED_MODULE_2_fs___default.a.existsSync(filePath);
                  result = null;

                  if (!(exists && !isNew)) {
                    _context.next = 12;
                    break;
                  }

                  _context.next = 7;
                  return __WEBPACK_IMPORTED_MODULE_2_fs___default.a.readFileSync(filePath);

                case 7:
                  result = _context.sent;

                  result = result.toString();
                  result = JSON.parse(result);
                  _context.next = 15;
                  break;

                case 12:
                  _context.next = 14;
                  return __WEBPACK_IMPORTED_MODULE_1__cr_story__["a" /* default */ ].getHeroStory();

                case 14:
                  result = _context.sent;

                case 15:
                  ctx.body = {
                    success: true,
                    data: result
                  };

                case 16:
                case 'end':
                  return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          return function fetchHeroList(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        var fetchHeroDetail = function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
            var prams, id, url, isNew, filePath, exists, result;
            return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                case 0:
                  prams = ctx.request.body;
                  id = prams.id;
                  url = prams.url;
                  isNew = prams.isNew;
                  filePath = resolvePath('../crawerdb/herodetail' + id + '.json');
                  exists = __WEBPACK_IMPORTED_MODULE_2_fs___default.a.existsSync(filePath);
                  result = null;

                  if (!(exists && !isNew)) {
                    _context2.next = 15;
                    break;
                  }

                  _context2.next = 10;
                  return __WEBPACK_IMPORTED_MODULE_2_fs___default.a.readFileSync(filePath);

                case 10:
                  result = _context2.sent;

                  result = result.toString();
                  result = JSON.parse(result);
                  _context2.next = 19;
                  break;

                case 15:
                  if (!/^http/.test(url)) {
                    url = 'https:' + url;
                  }
                  _context2.next = 18;
                  return __WEBPACK_IMPORTED_MODULE_1__cr_story__["a" /* default */ ].getHeroDatail(url, id);

                case 18:
                  result = _context2.sent;

                case 19:
                  ctx.body = {
                    success: true,
                    data: result
                  };

                case 20:
                case 'end':
                  return _context2.stop();
                }
              }
            }, _callee2, _this);
          }));

          return function fetchHeroDetail(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }();

        /* harmony default export */
        exports["a"] = {
          fetchHeroList: fetchHeroList,
          fetchHeroDetail: fetchHeroDetail
        };
        /* WEBPACK VAR INJECTION */
      }.call(exports, "server/controllers"))

      /***/
    },
    /* 14 */
    /***/
    function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (__dirname) { /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(3);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__cr_word__ = __webpack_require__(17);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__config_word__ = __webpack_require__(11);


        var _this = this;

        function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) {
              function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






        var resolvePath = function resolvePath(url) {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["resolve"])(__dirname, url);
        };

        // 获取世界首页数据
        var fetchWord = function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
            var isNew, id, filePath, exists, result;
            return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                case 0:
                  isNew = ctx.query.isNew;
                  id = ctx.query.id; // word id

                  filePath = resolvePath('../crawerdb/wordnav' + id + '.json');
                  exists = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync(filePath);
                  result = null;

                  if (!(exists && !isNew)) {
                    _context.next = 13;
                    break;
                  }

                  _context.next = 8;
                  return __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(filePath);

                case 8:
                  result = _context.sent;

                  result = result.toString();
                  result = JSON.parse(result);
                  _context.next = 16;
                  break;

                case 13:
                  _context.next = 15;
                  return __WEBPACK_IMPORTED_MODULE_3__cr_word__["a" /* default */ ].getWord();

                case 15:
                  result = _context.sent;

                case 16:
                  ctx.body = {
                    success: true,
                    data: result
                  };

                case 17:
                case 'end':
                  return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          return function fetchWord(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        // 获取某个世界的顶部导航
        var fetchWordNav = function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
            var isNew, id, urlOpt, filePath, exists, result;
            return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                case 0:
                  isNew = ctx.query.isNew;
                  id = ctx.query.id; // word id

                  urlOpt = __WEBPACK_IMPORTED_MODULE_4__config_word__["a" /* default */ ][id];
                  filePath = resolvePath('../crawerdb/wordnav' + id + '.json');
                  exists = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync(filePath);
                  result = null;

                  if (!(exists && !isNew)) {
                    _context2.next = 14;
                    break;
                  }

                  _context2.next = 9;
                  return __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(filePath);

                case 9:
                  result = _context2.sent;

                  result = result.toString();
                  result = JSON.parse(result);
                  _context2.next = 17;
                  break;

                case 14:
                  _context2.next = 16;
                  return __WEBPACK_IMPORTED_MODULE_3__cr_word__["a" /* default */ ].getWordNav(urlOpt.url1, urlOpt.url2, id);

                case 16:
                  result = _context2.sent;

                case 17:
                  ctx.body = {
                    success: true,
                    data: result
                  };

                case 18:
                case 'end':
                  return _context2.stop();
                }
              }
            }, _callee2, _this);
          }));

          return function fetchWordNav(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }();

        // 获取某个世界内容
        var fetchWordDetail = function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
            var isNew, id, contentUrl, filePath, exists, result;
            return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                case 0:
                  isNew = ctx.request.body.isNew;
                  id = ctx.request.body.id; // word id

                  contentUrl = 'https://pvp.qq.com' + ctx.request.body.url; // 某个世界导航下面的内容

                  filePath = resolvePath('../crawerdb/worddetail' + id + '.json');
                  exists = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync(filePath);
                  result = null;

                  if (!(exists && !isNew)) {
                    _context3.next = 14;
                    break;
                  }

                  _context3.next = 9;
                  return __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(filePath);

                case 9:
                  result = _context3.sent;

                  result = result.toString();
                  result = JSON.parse(result);
                  _context3.next = 17;
                  break;

                case 14:
                  _context3.next = 16;
                  return __WEBPACK_IMPORTED_MODULE_3__cr_word__["a" /* default */ ].getWordDetail(contentUrl, id);

                case 16:
                  result = _context3.sent;

                case 17:
                  ctx.body = {
                    success: true,
                    data: result
                  };

                case 18:
                case 'end':
                  return _context3.stop();
                }
              }
            }, _callee3, _this);
          }));

          return function fetchWordDetail(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }();

        /* harmony default export */
        exports["a"] = {
          fetchWord: fetchWord,
          fetchWordNav: fetchWordNav,
          fetchWordDetail: fetchWordDetail
        };
        /* WEBPACK VAR INJECTION */
      }.call(exports, "server/controllers"))

      /***/
    },
    /* 15 */
    /***/
    function (module, exports, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_1_request_promise__ = __webpack_require__(4);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_1_request_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_request_promise__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_2_cheerio__ = __webpack_require__(2);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_2_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cheerio__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_3_fs__ = __webpack_require__(1);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_3_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fs__);


      var _this = this;

      function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) {
            function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





      var getSkin = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
          var options, $, result;
          return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
              case 0:
                options = {
                  encoding: null,
                  uri: 'https://pvp.qq.com/act/a20160510story/appreciateSkin.htm',
                  transform: function transform(body) {
                    return __WEBPACK_IMPORTED_MODULE_2_cheerio___default.a.load(body);
                  }
                };
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_1_request_promise___default()(options);

              case 3:
                $ = _context.sent;
                result = [];

                $('.img-list-wp li').each(function () {
                  var url = $(this).find('a').attr('href');
                  var title = $(this).find('img').attr('title');
                  var img = $(this).find('img').attr('src');
                  result.push({
                    url: url,
                    title: title,
                    img: img
                  });
                });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"])('./server/crawerdb/skin.json', JSON.stringify(result, null, 2), 'utf-8');
                return _context.abrupt('return', result);

              case 8:
              case 'end':
                return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function getSkin() {
          return _ref.apply(this, arguments);
        };
      }();

      var getVoiceNav = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
          var options, result;
          return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
              case 0:
                options = {
                  uri: 'http://game.gtimg.cn/images/yxzj/wtc_static_yxzj/datas/data_zlk_yyjsyx.json'
                };
                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_1_request_promise___default()(options);

              case 3:
                result = _context2.sent;

                result = JSON.parse(result);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"])('./server/crawerdb/voice-nav.json', JSON.stringify(result, null, 2), 'utf-8');
                return _context2.abrupt('return', result);

              case 7:
              case 'end':
                return _context2.stop();
              }
            }
          }, _callee2, _this);
        }));

        return function getVoiceNav() {
          return _ref2.apply(this, arguments);
        };
      }();

      var getVoiceDetail = function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(id) {
          var options, result;
          return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
              case 0:
                options = {
                  uri: 'http://game.gtimg.cn/images/yxzj/wtc_static_yxzj/datas/hid' + id + '.json'
                };
                _context3.next = 3;
                return __WEBPACK_IMPORTED_MODULE_1_request_promise___default()(options);

              case 3:
                result = _context3.sent;

                result = JSON.parse(result);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"])('./server/crawerdb/voice-' + id + '.json', JSON.stringify(result, null, 2), 'utf-8');
                return _context3.abrupt('return', result);

              case 7:
              case 'end':
                return _context3.stop();
              }
            }
          }, _callee3, _this);
        }));

        return function getVoiceDetail(_x) {
          return _ref3.apply(this, arguments);
        };
      }();

      var getMusic = function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
          var options, result;
          return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
              case 0:
                options = {
                  uri: 'http://game.gtimg.cn/images/yxzj/wtc_static_yxzj/datas/data_zlk_ylzj.json'
                };
                _context4.next = 3;
                return __WEBPACK_IMPORTED_MODULE_1_request_promise___default()(options);

              case 3:
                result = _context4.sent;

                result = JSON.parse(result);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"])('./server/crawerdb/music.json', JSON.stringify(result, null, 2), 'utf-8');
                return _context4.abrupt('return', result);

              case 7:
              case 'end':
                return _context4.stop();
              }
            }
          }, _callee4, _this);
        }));

        return function getMusic() {
          return _ref4.apply(this, arguments);
        };
      }();

      /* harmony default export */
      exports["a"] = {
        getSkin: getSkin,
        getVoiceNav: getVoiceNav,
        getVoiceDetail: getVoiceDetail,
        getMusic: getMusic
      };

      /***/
    },
    /* 16 */
    /***/
    function (module, exports, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_1_request_promise__ = __webpack_require__(4);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_1_request_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_request_promise__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_2_cheerio__ = __webpack_require__(2);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_2_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cheerio__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_3_fs__ = __webpack_require__(1);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_3_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fs__);


      var _this = this;

      function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) {
            function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





      var Iconv = __webpack_require__(5).Iconv;
      var iconv = new Iconv('GBK', 'UTF-8');

      // request 国外网站的时候使用本地的 VPN
      // import Agent from 'socks5-http-client/lib/Agent'

      // 爬取英雄列表
      var getHeroStory = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
          var options, $, navArr, heroList, hreodata, str, r, result;
          return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
              case 0:
                options = {
                  uri: 'https://pvp.qq.com/act/a20160510story/herostory.htm',
                  // agentClass: Agent,
                  // agentOptions: {
                  //   socksHost: 'localhost',
                  //   socksPort: 1080 // 本地 VPN 的端口，这里用的 shadowsocks
                  // },
                  transform: function transform(body) {
                    return __WEBPACK_IMPORTED_MODULE_2_cheerio___default.a.load(body);
                  }
                };
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_1_request_promise___default()(options);

              case 3:
                $ = _context.sent;
                navArr = [];
                heroList = [];

                $('#campNav li').each(function () {
                  var type = $(this).attr('data-camptype');
                  var text = $(this).find('a').text();
                  navArr.push({ type: type, text: text });
                });

                _context.next = 9;
                return __WEBPACK_IMPORTED_MODULE_1_request_promise___default()({
                  uri: 'https://pvp.qq.com/webplat/info/news_version3/15592/18024/23901/24397/24398/m17330/list_1.shtml'
                });

              case 9:
                hreodata = _context.sent;
                str = hreodata.replace('createHeroList(', '');

                str = str.substr(0, str.length - 1);
                r = JSON.parse(str);

                heroList = r.data.filter(function (item) {
                  return item;
                });

                result = {
                  nav: navArr,
                  heroList: heroList
                };

                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"])('./server/crawerdb/heroList.json', JSON.stringify(result, null, 2), 'utf-8');

                return _context.abrupt('return', result);

              case 17:
              case 'end':
                return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function getHeroStory() {
          return _ref.apply(this, arguments);
        };
      }();

      // 爬取英雄的详细介绍
      var getHeroDatail = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(url, _id) {
          var option, $, heroName, heroDetail, ht, hc, hStr, result;
          return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
              case 0:
                option = {
                  encoding: null,
                  url: url
                };
                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_1_request_promise___default()(option).then(function (body) {
                  var result = iconv.convert(new Buffer(body, 'binary')).toString();
                  return __WEBPACK_IMPORTED_MODULE_2_cheerio___default.a.load(result);
                });

              case 3:
                $ = _context2.sent;
                heroName = '';
                heroDetail = [];
                ht = '';
                hc = '';

                if ($('#heroStory').length) {
                  heroName = $('.hero_name pf').text();
                  $('#heroStory p').each(function () {
                    var text = $(this).text().trim();
                    heroDetail.push({
                      type: 'text',
                      text: text
                    });
                  });
                } else if ($('.textboxs').length) {
                  $('.textboxs p').each(function () {
                    if ($(this).find('img').length) {
                      var src = $(this).find('img').attr('src');
                      heroDetail.push({
                        type: 'img',
                        text: 'https:' + src
                      });
                    } else {
                      var text = $(this).text().trim();
                      heroDetail.push({
                        type: 'text',
                        text: text
                      });
                    }
                  });
                }
                hStr = $('#history_content').text().replace(/(^\s+)|(\s+$)/g, '');


                if (hStr.length > 0) {
                  ht = $('.history_story h3').text();
                  hc = $('#history_content').text();
                }
                result = {
                  heroName: heroName,
                  heroDetail: heroDetail,
                  historyTitle: ht,
                  historyContent: hc
                };

                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"])('./server/crawerdb/herodetail' + _id + '.json', JSON.stringify(result, null, 2), 'utf-8');
                return _context2.abrupt('return', result);

              case 14:
              case 'end':
                return _context2.stop();
              }
            }
          }, _callee2, _this);
        }));

        return function getHeroDatail(_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }();

      /* harmony default export */
      exports["a"] = {
        getHeroStory: getHeroStory,
        getHeroDatail: getHeroDatail
      };

      /***/
    },
    /* 17 */
    /***/
    function (module, exports, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_1_request_promise__ = __webpack_require__(4);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_1_request_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_request_promise__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_2_cheerio__ = __webpack_require__(2);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_2_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cheerio__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_3_fs__ = __webpack_require__(1);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_3_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fs__);
      /* unused harmony export getWordNav */
      /* unused harmony export getWordDetail */


      var _this = this;

      function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) {
            function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





      var Iconv = __webpack_require__(5).Iconv;
      var iconv = new Iconv('GBK', 'UTF-8');

      // 获取每一个世界起源
      var getWord = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
          var options, $, result;
          return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
              case 0:
                options = {
                  uri: 'https://pvp.qq.com/act/a20160510story/origin.htm',
                  transform: function transform(body) {
                    return __WEBPACK_IMPORTED_MODULE_2_cheerio___default.a.load(body);
                  }
                };
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_1_request_promise___default()(options);

              case 3:
                $ = _context.sent;
                result = [];

                $('.cell_box .cell_left, .cell_right').each(function () {
                  var time = $(this).find('.cell_title').text();
                  var url = $(this).find('a').attr('href');
                  var idArr = url.match(/\/(\d+).shtml/);
                  var id = idArr[1];
                  var title = $(this).find('a').attr('title');
                  var img = $(this).find('img').attr('src');
                  result.push({
                    time: time,
                    url: url,
                    id: id,
                    title: title,
                    img: img
                  });
                });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"])('./server/crawerdb/word.json', JSON.stringify(result, null, 2), 'utf-8');
                return _context.abrupt('return', result);

              case 8:
              case 'end':
                return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function getWord() {
          return _ref.apply(this, arguments);
        };
      }();

      // 格式化数据
      function tofromData(str, typestr) {
        str = str.replace(typestr, '');
        str = str.substr(0, str.length - 1);
        var data = JSON.parse(str);
        return data.data.filter(function (item) {
          return item;
        });
      }
      // 获取某个世界的导航
      var getWordNav = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(url1, url2, id) {
          var main, sub, result;
          return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_request_promise___default()({
                  encoding: null,
                  uri: url1
                }).then(function (body) {
                  var result = iconv.convert(new Buffer(body, 'binary')).toString();
                  return result;
                });

              case 2:
                main = _context2.sent;


                main = tofromData(main, 'jsonpCallfnBtn(');

                _context2.next = 6;
                return __WEBPACK_IMPORTED_MODULE_1_request_promise___default()({
                  encoding: null,
                  uri: url2
                }).then(function (body) {
                  var result = iconv.convert(new Buffer(body, 'binary')).toString();
                  return result;
                });

              case 6:
                sub = _context2.sent;


                sub = tofromData(sub, 'jsonpCallfn(');

                result = main.concat(sub);


                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"])('./server/crawerdb/wordnav' + id + '.json', JSON.stringify(result, null, 2), 'utf-8');
                return _context2.abrupt('return', result);

              case 11:
              case 'end':
                return _context2.stop();
              }
            }
          }, _callee2, _this);
        }));

        return function getWordNav(_x, _x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }();

      // 爬取每某一个导航下的内容
      var getWordDetail = function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(url, id) {
          var options, $, title, time, textContent, result;
          return __WEBPACK_IMPORTED_MODULE_0__Users_naihe_my_project_wangzhe_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
              case 0:
                options = {
                  encoding: null,
                  uri: url
                };
                _context3.next = 3;
                return __WEBPACK_IMPORTED_MODULE_1_request_promise___default()(options).then(function (body) {
                  var result = iconv.convert(new Buffer(body, 'binary')).toString();
                  return __WEBPACK_IMPORTED_MODULE_2_cheerio___default.a.load(result);
                });

              case 3:
                $ = _context3.sent;
                title = $('.txtbox h2').text();
                time = $('.txtbox .time').text() || '';
                textContent = [];

                $('.txtcon p').each(function () {
                  textContent.push($(this).text());
                });

                result = {
                  title: title,
                  time: time,
                  textContent: textContent
                };

                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"])('./server/crawerdb/worddetail' + id + '.json', JSON.stringify(result, null, 2), 'utf-8');
                return _context3.abrupt('return', result);

              case 11:
              case 'end':
                return _context3.stop();
              }
            }
          }, _callee3, _this);
        }));

        return function getWordDetail(_x4, _x5) {
          return _ref3.apply(this, arguments);
        };
      }();

      /* harmony default export */
      exports["a"] = {
        getWord: getWord,
        getWordNav: getWordNav,
        getWordDetail: getWordDetail
      };

      /***/
    },
    /* 18 */
    /***/
    function (module, exports) {

      module.exports = require("koa-router");

      /***/
    },
    /* 19 */
    /***/
    function (module, exports) {

      module.exports = require("regenerator-runtime");

      /***/
    },
    /* 20 */
    /***/
    function (module, exports, __webpack_require__) {

      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(8);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(10);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_2_koa_bodyparser__ = __webpack_require__(9);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_2_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_bodyparser__);
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_3__middlwares_router__ = __webpack_require__(7);
      var _createClass = function () {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






      var host = process.env.HOST || '127.0.0.1';
      var port = process.env.PORT || 8080;

      // Import and Set Nuxt.js options
      var config = __webpack_require__(6);
      config.dev = !(process.env === 'production');

      var Server = function () {
        function Server() {
          _classCallCheck(this, Server);

          this.app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
          this.useMiddleWares(this.app);
        }

        _createClass(Server, [{
          key: 'useMiddleWares',
          value: function useMiddleWares(app) {
            app.use(__WEBPACK_IMPORTED_MODULE_2_koa_bodyparser___default()());
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__middlwares_router__["a" /* default */ ])(app);
          }
        }, {
          key: 'start',
          value: function start() {
            // Instantiate nuxt.js
            var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

            // Build in development
            if (config.dev) {
              var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
              builder.build().catch(function (e) {
                console.error(e); // eslint-disable-line no-console
                process.exit(1);
              });
            }

            this.app.use(function (ctx) {
              ctx.status = 200; // koa defaults to 404 when it sees that status is unset

              return new Promise(function (resolve, reject) {
                ctx.res.on('close', resolve);
                ctx.res.on('finish', resolve);
                nuxt.render(ctx.req, ctx.res, function (promise) {
                  // nuxt.render passes a rejected promise into callback on error.
                  promise.then(resolve).catch(reject);
                });
              });
            });

            this.app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
          }
        }]);

        return Server;
      }();

      var app = new Server();
      app.start();

      /***/
    }
    /******/
  ]);
//# sourceMappingURL=main.map
