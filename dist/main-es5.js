function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n  <div class=\"container main-container\">\n    <router-outlet></router-outlet>\n  </div>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/buscar/buscar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/buscar/buscar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBuscarBuscarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron jumbotron-fluid margenSuperior\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n          <div class=\"form-group\">\n            <label> <strong>Buscar:</strong> </label>\n            <input class=\"form-control\" [(ngModel)]=\"buscador\" type=\"text\" name=\"buscador\" (keypress)=\"buscarPelicula()\" placeholder=\"Buscar pelicula...\">\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row animated fadeIn slow\">\n  <!-- Card deck -->\n  <div class=\"card-deck\" *ngFor=\"let pelicula of _peliSrv.peliculas\">\n    <!-- Card -->\n    <div class=\"card mb-4\">\n      <!--Card image-->\n      <div class=\"view overlay\">\n        <img class=\"card-img-top\" [src]=\"pelicula | peliculaImagen\" [alt]=\"pelicula.original_title\">\n        <a href=\"#!\">\n          <div class=\"mask rgba-white-slight\"></div>\n        </a>\n      </div>\n\n      <!--Card content-->\n      <div class=\"card-body\">\n        <!--Title-->\n        <h4 class=\"card-title\">{{ pelicula.original_title }}</h4>\n        <!--Text-->\n        <p class=\"card-text text-justify\">{{ pelicula.overview | slice:0:250 }}...</p>\n        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n        <button type=\"button\" class=\"btn blue-gradient btn-md\" [routerLink]=\"['/pelicula', pelicula.id, 'buscar', buscador]\">Leer mas ... </button>\n      </div>\n    </div>\n    <!-- Card -->\n  </div>\n  <!-- Card deck -->\n</div>\n\n<div *ngIf=\"!cargando && _peliSrv.peliculas.length === 0\" class=\"alert alert-warning text-center mt-3\">\n  <h4 class=\"alert-heading\">No hay registros</h4>\n  <p><i class=\"fa fa-exclamation fa-2x\"></i></p>\n</div>\n\n<div *ngIf=\"cargando\" class=\"alert alert-info text-center mt-3\">\n  <h4 class=\"alert-heading\">Cargando</h4>\n  <p><i class=\"fa fa-spinner fa-spin fa-2x\"></i></p>\n  <p class=\"mb-0\">Espere por favor...</p>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/galeria.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/galeria.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeGaleriaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>{{titulo}}</h1>\n<hr>\n\n<div class=\"row animated fadeIn slow\" *ngIf=\"peliculas\">\n  <div class=\"col-sm-6\">\n    <div class=\"row\">\n      <div class=\"col-md-12 div-pic-1 puntero\"\n          [routerLink]=\"['/pelicula', peliculas[0].id, 'home']\"\n          [ngStyle]=\"{ 'background-image': 'url( ' + (peliculas[0] | peliculaImagen) + ' )'  }\">\n          <p class=\"pic-titulo\">{{ peliculas[0].original_title }}</p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-6 div-pic-2 puntero\"\n            [routerLink]=\"['/pelicula', peliculas[1].id, 'home']\"\n            [ngStyle]=\"{ 'background-image': 'url( ' + (peliculas[1] | peliculaImagen) + ' )'  }\">\n            <p class=\"pic-titulo\">{{ peliculas[1].original_title }}</p>\n      </div>\n      <div class=\"col-sm-6 div-pic-2 puntero\"\n            [routerLink]=\"['/pelicula', peliculas[2].id, 'home']\"\n            [ngStyle]=\"{ 'background-image': 'url( ' + (peliculas[2] | peliculaImagen) + ' )'  }\">\n            <p class=\"pic-titulo\">{{ peliculas[2].original_title }}</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 div-pic-2 puntero\"\n            [routerLink]=\"['/pelicula', peliculas[3].id, 'home']\"\n            [ngStyle]=\"{ 'background-image': 'url( ' + (peliculas[3] | peliculaImagen) + ' )'  }\">\n            <p class=\"pic-titulo\">{{ peliculas[3].original_title }}</p>\n      </div>\n      <div class=\"col-sm-6 div-pic-2 puntero\"\n            [routerLink]=\"['/pelicula', peliculas[4].id, 'home']\"\n            [ngStyle]=\"{ 'background-image': 'url( ' + (peliculas[4] | peliculaImagen) + '  )'  }\">\n            <p class=\"pic-titulo\">{{ peliculas[4].original_title }}</p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 div-pic-1 puntero\"\n            [routerLink]=\"['/pelicula', peliculas[5].id, 'home']\"\n            [ngStyle]=\"{ 'background-image': 'url( ' + (peliculas[5] | peliculaImagen) + '  )'  }\">\n            <p class=\"pic-titulo\">{{ peliculas[5].original_title }}</p>\n    </div>\n  </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron jumbotron-fluid margenSuperior\">\n  <div class=\"container text-center\">\n    <h2 class=\"display-4\"> BlockBuster </h2>\n    <p class=\"lead\"> Buscador y visualizacion de peliculas. </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <br>\n  <app-galeria [peliculas]=\"cartelera|slice:0:6\" titulo=\"Peliculas en cartelera\"></app-galeria>\n  <app-galeria [peliculas]=\"populares|slice:0:6\" titulo=\"Peliculas populares\"></app-galeria>\n  <app-galeria [peliculas]=\"peliskids|slice:0:6\" titulo=\"Peliculas populares para niños\"></app-galeria>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pelicula/pelicula.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pelicula/pelicula.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPeliculaPeliculaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"pelicula\" class=\"margenSuperior animated fadeIn slow\">\n  <h1>{{ pelicula.original_title }}</h1>\n\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <img class=\"img-thumbnail img-fluid\" [src]=\"pelicula | peliculaImagen:true\" [alt]=\"pelicula.original_title\">\n    </div>\n    <div class=\"col-sm-7\">\n      <h3> <strong>Sinopsis</strong> </h3>\n      <hr>\n      <p class=\"text-justify\">{{ pelicula.overview }}</p>\n      <h4>Frase:</h4>\n      <p>{{ pelicula.tagline }}</p>\n      <p><strong>Popularidad:</strong> <span class=\"badge badge-info\"> {{ pelicula.popularity | number:\".0-0\" }} / sobre 10. </span></p>\n      <br>\n      <p><strong>Votos:</strong> <span class=\"badge badge-info\"> {{ pelicula.vote.average}} </span></p>\n      <button class=\"btn blue-gradient\" [routerLink]=\"['/'+btnVolver, busqueda]\"><i class=\"fa fa-arrow-left left\"></i> Volver </button>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Footer -->\n<footer class=\"footer-light font-small fixed-bottom blue-gradient\">\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3\">\n    © {{ year }} Copyright: Carlos Mur <a href=\"https://github.com/cmurestudillos/appMovieDB\" target=\"_blank\"><i class=\"fab fa-github text-white\"></i></a>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Navbar-->\n<nav class=\"navbar fixed-top navbar-expand-lg navbar-light blue-gradient lighten-5\">\n\n  <!-- Navbar brand -->\n  <a class=\"navbar-brand\" [routerLink]=\"['home']\">\n    <img src=\"assets/img/logo.png\" height=\"38\" alt=\"mdb logo\">\n  </a>\n\n  <!-- Collapse button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#basicExampleNav\"\n    aria-controls=\"basicExampleNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Collapsible content -->\n  <div class=\"collapse navbar-collapse\" id=\"basicExampleNav\">\n\n    <!-- Links -->\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['home']\" routerLinkActive=\"active\"> Inicio </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['buscar']\" routerLinkActive=\"active\">Buscar</a>\n      </li>\n    </ul>\n    <!-- Links -->\n\n    <form class=\"form-inline\" (ngSubmit)=\"buscarPelicula(buscarPeli.value)\">\n      <div class=\"md-form my-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Buscar ...\" aria-label=\"Search\" #buscarPeli>\n        <button class=\"btn btn-outline-white btn-md my-2 my-sm-0 ml-3\" type=\"submit\">Buscar</button>\n      </div>\n    </form>\n  </div>\n  <!-- Collapsible content -->\n\n</nav>\n<!--/.Navbar-->\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/buscar/buscar.component */
    "./src/app/components/buscar/buscar.component.ts");
    /* harmony import */


    var _components_pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/pelicula/pelicula.component */
    "./src/app/components/pelicula/pelicula.component.ts"); // Rutas
    // Componentes


    var routes = [{
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'buscar',
      component: _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"]
    }, {
      path: 'buscar/:texto',
      component: _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"]
    }, {
      path: 'pelicula/:id/:pag',
      component: _components_pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_5__["PeliculaComponent"]
    }, {
      path: 'pelicula/:id/:pag/:busqueda',
      component: _components_pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_5__["PeliculaComponent"]
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add styles to this file */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBzdHlsZXMgdG8gdGhpcyBmaWxlICovXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/peliculas.service */
    "./src/app/services/peliculas.service.ts"); //Importamos el servicio


    var AppComponent = function AppComponent(_pelisrv) {
      _classCallCheck(this, AppComponent);

      this._pelisrv = _pelisrv;

      this._pelisrv.getPopulares().subscribe(function (data) {
        console.log(data);
      });
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/peliculas.service */
    "./src/app/services/peliculas.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _pipes_pelicula_imagen_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pipes/pelicula-imagen.pipe */
    "./src/app/pipes/pelicula-imagen.pipe.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/pelicula/pelicula.component */
    "./src/app/components/pelicula/pelicula.component.ts");
    /* harmony import */


    var _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/buscar/buscar.component */
    "./src/app/components/buscar/buscar.component.ts");
    /* harmony import */


    var _components_home_galeria_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/home/galeria.component */
    "./src/app/components/home/galeria.component.ts"); //Servicios
    // Pipes
    // Componentes


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _components_pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_12__["PeliculaComponent"], _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_13__["BuscarComponent"], _pipes_pelicula_imagen_pipe__WEBPACK_IMPORTED_MODULE_7__["PeliculaImagenPipe"], _components_home_galeria_component__WEBPACK_IMPORTED_MODULE_14__["GaleriaComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      providers: [_services_peliculas_service__WEBPACK_IMPORTED_MODULE_5__["PeliculasService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/buscar/buscar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/buscar/buscar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBuscarBuscarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Incluir estilos especificos del componente */\r\n.margenSuperior{\r\n  margin-top: 75px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXNjYXIvYnVzY2FyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXNjYXIvYnVzY2FyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbmNsdWlyIGVzdGlsb3MgZXNwZWNpZmljb3MgZGVsIGNvbXBvbmVudGUgKi9cclxuLm1hcmdlblN1cGVyaW9ye1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/buscar/buscar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/buscar/buscar.component.ts ***!
    \*******************************************************/

  /*! exports provided: BuscarComponent */

  /***/
  function srcAppComponentsBuscarBuscarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuscarComponent", function () {
      return BuscarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/peliculas.service */
    "./src/app/services/peliculas.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // Servicios
    //Rutas


    var BuscarComponent =
    /*#__PURE__*/
    function () {
      function BuscarComponent(_peliSrv, route) {
        var _this = this;

        _classCallCheck(this, BuscarComponent);

        this._peliSrv = _peliSrv;
        this.route = route;
        this.buscador = "";
        this.cargando = false;
        this.cargando = true;
        this.route.params.subscribe(function (parametros) {
          if (parametros['texto']) {
            _this.cargando = false;
            _this.buscador = parametros['texto'];

            _this.buscarPelicula();
          }
        });
      }

      _createClass(BuscarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buscarPelicula",
        value: function buscarPelicula() {
          if (this.buscador.length === 0) {
            return;
          }

          this._peliSrv.buscarPelicula(this.buscador).subscribe();
        }
      }]);

      return BuscarComponent;
    }();

    BuscarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    BuscarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buscar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buscar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/buscar/buscar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buscar.component.css */
      "./src/app/components/buscar/buscar.component.css")).default]
    })], BuscarComponent);
    /***/
  },

  /***/
  "./src/app/components/home/galeria.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/home/galeria.component.ts ***!
    \******************************************************/

  /*! exports provided: GaleriaComponent */

  /***/
  function srcAppComponentsHomeGaleriaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GaleriaComponent", function () {
      return GaleriaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GaleriaComponent =
    /*#__PURE__*/
    function () {
      function GaleriaComponent() {
        _classCallCheck(this, GaleriaComponent);
      }

      _createClass(GaleriaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GaleriaComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('peliculas')], GaleriaComponent.prototype, "peliculas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('titulo')], GaleriaComponent.prototype, "titulo", void 0);
    GaleriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-galeria',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./galeria.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/galeria.component.html")).default
    })], GaleriaComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Incluir estilos especificos del componente */\r\n.margenSuperior{\r\n  margin-top: 75px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0M7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW5jbHVpciBlc3RpbG9zIGVzcGVjaWZpY29zIGRlbCBjb21wb25lbnRlICovXHJcbi5tYXJnZW5TdXBlcmlvcntcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/peliculas.service */
    "./src/app/services/peliculas.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(_peliSrv) {
        var _this2 = this;

        _classCallCheck(this, HomeComponent);

        this._peliSrv = _peliSrv;

        this._peliSrv.getCartelera().subscribe(function (data) {
          _this2.cartelera = data;
        });

        this._peliSrv.getPopulares().subscribe(function (data) {
          _this2.populares = data;
        });

        this._peliSrv.getPopularesKids().subscribe(function (data) {
          _this2.peliskids = data;
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/pelicula/pelicula.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/pelicula/pelicula.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPeliculaPeliculaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Insertar estilos especificos del componente aqui */\r\n.margenSuperior{\r\n  margin-top: 75px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZWxpY3VsYS9wZWxpY3VsYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFEQUFxRDtBQUNyRDtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVsaWN1bGEvcGVsaWN1bGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEluc2VydGFyIGVzdGlsb3MgZXNwZWNpZmljb3MgZGVsIGNvbXBvbmVudGUgYXF1aSAqL1xyXG4ubWFyZ2VuU3VwZXJpb3J7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/pelicula/pelicula.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/pelicula/pelicula.component.ts ***!
    \***********************************************************/

  /*! exports provided: PeliculaComponent */

  /***/
  function srcAppComponentsPeliculaPeliculaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeliculaComponent", function () {
      return PeliculaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/peliculas.service */
    "./src/app/services/peliculas.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // Servicios
    //Rutas


    var PeliculaComponent =
    /*#__PURE__*/
    function () {
      function PeliculaComponent(_peliSrv, route) {
        var _this3 = this;

        _classCallCheck(this, PeliculaComponent);

        this._peliSrv = _peliSrv;
        this.route = route;
        this.btnVolver = "";
        this.busqueda = "";
        this.route.params.subscribe(function (parametros) {
          _this3.btnVolver = parametros['pag'];

          if (parametros['busqueda']) {
            _this3.busqueda = parametros['busqueda'];
          }

          _this3._peliSrv.getPelicula(parametros['id']).subscribe(function (pelicula) {
            _this3.pelicula = pelicula;
          });
        });
      }

      _createClass(PeliculaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PeliculaComponent;
    }();

    PeliculaComponent.ctorParameters = function () {
      return [{
        type: src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    PeliculaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pelicula',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pelicula.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pelicula/pelicula.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pelicula.component.css */
      "./src/app/components/pelicula/pelicula.component.css")).default]
    })], PeliculaComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/footer/footer.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Insertar estilos del footer aqui */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEluc2VydGFyIGVzdGlsb3MgZGVsIGZvb3RlciBhcXVpICovXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.year = new Date().getFullYear();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/shared/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/navbar/navbar.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/components/shared/navbar/navbar.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Insertar estilos del navbar aqui */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEluc2VydGFyIGVzdGlsb3MgZGVsIG5hdmJhciBhcXVpICovXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // Rutas


    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(router) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buscarPelicula",
        value: function buscarPelicula(texto) {
          if (texto.length === 0) {
            return;
          }

          this.router.navigate(['buscar', texto]);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/shared/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/pipes/pelicula-imagen.pipe.ts":
  /*!***********************************************!*\
    !*** ./src/app/pipes/pelicula-imagen.pipe.ts ***!
    \***********************************************/

  /*! exports provided: PeliculaImagenPipe */

  /***/
  function srcAppPipesPeliculaImagenPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeliculaImagenPipe", function () {
      return PeliculaImagenPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PeliculaImagenPipe =
    /*#__PURE__*/
    function () {
      function PeliculaImagenPipe() {
        _classCallCheck(this, PeliculaImagenPipe);
      }

      _createClass(PeliculaImagenPipe, [{
        key: "transform",
        value: function transform(pelicula) {
          var poster = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var url = "http://image.tmdb.org/t/p/w500";

          if (poster) {
            return url + pelicula.poster_path;
          }

          if (pelicula.backdrop_path) {
            return url + pelicula.backdrop_path;
          } else {
            if (pelicula.poster_path) {
              return url + pelicula.poster_path;
            } else {
              return "assets/img/no_image.png";
            }
          }
        }
      }]);

      return PeliculaImagenPipe;
    }();

    PeliculaImagenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'peliculaImagen'
    })], PeliculaImagenPipe);
    /***/
  },

  /***/
  "./src/app/services/peliculas.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/peliculas.service.ts ***!
    \***********************************************/

  /*! exports provided: PeliculasService */

  /***/
  function srcAppServicesPeliculasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeliculasService", function () {
      return PeliculasService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PeliculasService =
    /*#__PURE__*/
    function () {
      function PeliculasService(http) {
        _classCallCheck(this, PeliculasService);

        this.http = http;
        this.apikey = "c2748618c1998925f6d77c978bff9418";
        this.urlMoviedb = " https://api.themoviedb.org/3";
        this.peliculas = [];
      } //Obtenemos un listado de las peliculas en cartelera


      _createClass(PeliculasService, [{
        key: "getCartelera",
        value: function getCartelera() {
          var yearDesde = new Date().getFullYear();
          var monthDesde = new Date().getMonth();
          var dayDesde = new Date().getDate();
          var yearHasta = new Date().getFullYear();
          var monthHasta = new Date().getMonth();
          var dayHasta = new Date().getDate() + 7;
          var fechaDesde = "".concat(yearDesde, "-").concat(monthDesde, "-").concat(dayDesde);
          var fechaHasta = "".concat(yearHasta, "-").concat(monthHasta, "-").concat(dayHasta);
          var url = "".concat(this.urlMoviedb, "/discover/movie?primary_release_date.gte=").concat(fechaDesde, "&primary_release_date.lte=").concat(fechaHasta, "&api_key=").concat(this.apikey);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            resp.results;
            return resp.results;
          }));
        } //Obtenemos un listado de las peliculas mas populares para los niños

      }, {
        key: "getPopularesKids",
        value: function getPopularesKids() {
          var url = "".concat(this.urlMoviedb, "/discover/movie?certification_country=ES&certification.lte=G&sort_by=popularity.desc&api_key=").concat(this.apikey);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            resp.results;
            return resp.results;
          }));
        } //Obtenemos un listado de las peliculas mas populares

      }, {
        key: "getPopulares",
        value: function getPopulares() {
          var url = "".concat(this.urlMoviedb, "/discover/movie?sort_by=popularity.desc&api_key=").concat(this.apikey);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            resp.results;
            return resp.results;
          }));
        } // Buscador de peliculas

      }, {
        key: "buscarPelicula",
        value: function buscarPelicula(texto) {
          var _this4 = this;

          var url = "".concat(this.urlMoviedb, "/search/movie?query=").concat(texto, "&sort_by=popularity.desc&api_key=").concat(this.apikey);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            _this4.peliculas = resp.results;
            return resp.results;
          }));
        } //Obtenemos los datos especificos de una pelicula

      }, {
        key: "getPelicula",
        value: function getPelicula(id) {
          var url = "".concat(this.urlMoviedb, "/movie/").concat(id, "?api_key=").concat(this.apikey);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            return resp;
          }));
        }
      }]);

      return PeliculasService;
    }();

    PeliculasService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PeliculasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PeliculasService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\cme022es\Documents\Carlos Mur\visual-code\curso_angular\Angular\11-appMovieDB\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map