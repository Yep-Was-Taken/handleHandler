(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\n  <router-outlet></router-outlet>\n</app-layout>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h2>\n    Angular 8 App with Azure Function and Cosmos DB\n  </h2>\n  <p>\n    Welcome to our new single-page application build with below technologies. Made by Group 14\n  </p>\n  <img width=\"700\" alt=\"Angular Logo\"\n    src=\"../../assets/angular-function-cosmos.png\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posting/posting-detail/posting-detail.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posting/posting-detail/posting-detail.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">  \n  <div class=\"card-header\"  \n       *ngIf=\"posting\">  \n    {{pageTitle + \": \" + posting.name}}  \n  </div>  \n  <div class=\"card-body\"  \n       *ngIf=\"posting\">  \n    <div class=\"row\">  \n      <div class=\"col-md-8\">  \n        <div class=\"row\">  \n          <div class=\"col-md-3\">Handle:</div>  \n          <div class=\"col-md-6\">{{posting.handle}}</div>  \n        </div>  \n        <div class=\"row\">  \n          <div class=\"col-md-3\">Price:</div>  \n          <div class=\"col-md-6\">{{posting.price}}</div>  \n        </div>  \n        </div>  \n      </div>  \n    </div>  \n    <div class=\"row mt-4\">  \n      <div class=\"col-md-4\">  \n        <button class=\"btn btn-outline-secondary mr-3\"  \n                style=\"width:80px\"  \n                (click)=\"onBack()\">  \n          <i class=\"fa fa-chevron-left\"></i> Back  \n        </button>  \n        <button class=\"btn btn-outline-primary\"  \n                style=\"width:80px\"  \n                [routerLink]=\"['/postings', posting.id, posting.cityname, 'edit']\">  \n          Edit  \n        </button>  \n      </div>  \n    </div>  \n  </div>  \n  <div class=\"alert alert-danger\"  \n       *ngIf=\"errorMessage\">  \n    {{errorMessage}}  \n  </div>  \n</div>  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posting/posting-edit/posting-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posting/posting-edit/posting-edit.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">  \n  <div class=\"card-header\">  \n    {{pageTitle}}  \n  </div>  \n  \n  <div class=\"card-body\">  \n    <form novalidate  \n          (ngSubmit)=\"savePosting()\"  \n          [formGroup]=\"postingForm\">  \n  \n      <div class=\"form-group row mb-2\">  \n        <label class=\"col-md-2 col-form-label\"  \n               for=\"handleId\">Handle</label>  \n        <div class=\"col-md-8\">  \n          <input class=\"form-control\"  \n                 id=\"handleId\"  \n                 type=\"text\"  \n                 placeholder=\"@\"  \n                 formControlName=\"handle\"  \n                 [ngClass]=\"{'is-invalid': displayMessage.handle }\" />  \n          <span class=\"invalid-feedback\">  \n            {{displayMessage.handle}}  \n          </span>  \n        </div>  \n      </div>  \n  \n      <div class=\"form-group row mb-2\">  \n        <label class=\"col-md-2 col-form-label\"  \n               for=\"priceId\">Price</label>  \n        <div class=\"col-md-8\">  \n          <input class=\"form-control\"  \n                 id=\"priceid\"  \n                 type=\"text\"  \n                 placeholder=\"$\"  \n                 formControlName=\"price\"  \n                 [ngClass]=\"{'is-invalid': displayMessage.price}\" />  \n          <span class=\"invalid-feedback\">  \n            {{displayMessage.price}}  \n          </span>  \n        </div>  \n      </div>\n\n      <div class=\"form-group row mb-2\">  \n        <div class=\"offset-md-2 col-md-4\">  \n          <button class=\"btn btn-primary mr-3\"  \n                  style=\"width:80px;\"  \n                  type=\"submit\"  \n                  [title]=\"postingForm.valid ? 'Save your entered data' : 'Disabled until the form data is valid'\"  \n                  [disabled]=\"!postingForm.valid\">  \n            Save  \n          </button>  \n          <button class=\"btn btn-outline-secondary mr-3\"  \n                  style=\"width:80px;\"  \n                  type=\"button\"  \n                  title=\"Cancel your edits\"  \n                  [routerLink]=\"['/postings']\">  \n            Cancel  \n          </button>  \n          <button class=\"btn btn-outline-warning\" *ngIf=\"pageTitle != 'Add Posting'\"  \n                  style=\"width:80px\"  \n                  type=\"button\"  \n                  title=\"Delete this product\"  \n                  (click)=\"deletePosting()\">  \n            Delete  \n          </button>  \n        </div>  \n      </div>  \n    </form>  \n  </div>  \n  \n  <div class=\"alert alert-danger\"  \n       *ngIf=\"errorMessage\">{{errorMessage}}  \n  </div>  \n</div>  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posting/posting-list/posting-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posting/posting-list/posting-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    {{pageTitle}}\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\" style=\"margin-bottom:15px;\">\n      <div class=\"col-md-2\">Filter by:</div>\n      <div class=\"col-md-4\">\n        <input type=\"text\" [(ngModel)]=\"listFilter\" />\n      </div>\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-3\">\n        <button class=\"btn btn-primary mr-3\" [routerLink]=\"['/postings/0/0/edit']\">\n          <i class=\"fa fa-plus\"></i> New Posting\n        </button>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"listFilter\">\n      <div class=\"col-md-6\">\n        <h4>Filtered by: {{listFilter}}</h4>\n      </div>\n    </div>\n    <div class=\"table-responsive\">\n      <table class=\"table mb-0\" *ngIf=\"postings && postings.length\">\n        <thead>\n          <tr>\n            <th>Handle</th>\n            <th>Price</th>\n            <th></th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let posting of filteredPostings\">\n            <td>\n              <a [routerLink]=\"['/postings', posting.id,posting.handle]\">\n                {{ posting.handle }}\n              </a>\n            </td>\n            <td>{{ posting.price }}</td>\n            <td>\n              <button class=\"btn btn-outline-primary btn-sm\"\n                [routerLink]=\"['/postings', posting.id, posting.cityname, 'edit']\">\n                <i class=\"fa fa-edit\"></i> Edit\n              </button>\n            </td>\n            <td>\n              <button class=\"btn btn-outline-warning btn-sm\"\n                (click)=\"deletePosting(posting.id,  posting.name,posting.cityname);\">\n                <i class=\"fa fa-trash\"></i> Delete\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n  Error: {{ errorMessage }}\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/footer/footer.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/footer/footer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\n  <div class=\"navbar-expand m-auto navbar-text\">\n    Developed by Group 14 @UC\n  </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/header/header.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/header/header.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-5\">\n  <a class=\"navbar-brand\" href=\"/\">Handle Handler</a>\n  <div class=\"navbar-expand mr-auto\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" routerLink=\"home\" routerLinkActive=\"active\">Home</a>\n      <a class=\"nav-item nav-link\" routerLink=\"postings\">Postings</a>\n    </div>\n  </div>\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" href=\"https://github.com/Yep-Was-Taken/handleHandler/\" target=\"_blank\">\n        <i class=\"fa fa-github\"></i>\n      </a>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/layout/layout.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/layout/layout.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <ng-content></ng-content>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Angular8Cosmos';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _posting_posting_list_posting_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./posting/posting-list/posting-list.component */ "./src/app/posting/posting-list/posting-list.component.ts");
/* harmony import */ var _posting_posting_edit_posting_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./posting/posting-edit/posting-edit.component */ "./src/app/posting/posting-edit/posting-edit.component.ts");
/* harmony import */ var _posting_posting_detail_posting_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posting/posting-detail/posting-detail.component */ "./src/app/posting/posting-detail/posting-detail.component.ts");
/* harmony import */ var _posting_posting_edit_posting_edit_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./posting/posting-edit/posting-edit-guard */ "./src/app/posting/posting-edit/posting-edit-guard.ts");
/* harmony import */ var _posting_posting_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./posting/posting.service */ "./src/app/posting/posting.service.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _ui_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _posting_posting_list_posting_list_component__WEBPACK_IMPORTED_MODULE_12__["PostingListComponent"],
            _posting_posting_edit_posting_edit_component__WEBPACK_IMPORTED_MODULE_13__["PostingEditComponent"],
            _posting_posting_detail_posting_detail_component__WEBPACK_IMPORTED_MODULE_14__["PostingDetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                {
                    path: 'home',
                    component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
                },
                {
                    path: 'postings',
                    component: _posting_posting_list_posting_list_component__WEBPACK_IMPORTED_MODULE_12__["PostingListComponent"]
                },
                {
                    path: 'postings/:id/:handle',
                    component: _posting_posting_detail_posting_detail_component__WEBPACK_IMPORTED_MODULE_14__["PostingDetailComponent"]
                },
                {
                    path: 'postings/:id/:handle/edit',
                    canDeactivate: [_posting_posting_edit_posting_edit_guard__WEBPACK_IMPORTED_MODULE_15__["PostingEditGuard"]],
                    component: _posting_posting_edit_posting_edit_component__WEBPACK_IMPORTED_MODULE_13__["PostingEditComponent"]
                },
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                {
                    path: '**',
                    redirectTo: 'home',
                    pathMatch: 'full'
                }
            ])
        ],
        providers: [
            _posting_posting_service__WEBPACK_IMPORTED_MODULE_16__["PostingService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/posting/posting-detail/posting-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/posting/posting-detail/posting-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RpbmcvcG9zdGluZy1kZXRhaWwvcG9zdGluZy1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/posting/posting-detail/posting-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/posting/posting-detail/posting-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: PostingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingDetailComponent", function() { return PostingDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posting.service */ "./src/app/posting/posting.service.ts");




let PostingDetailComponent = class PostingDetailComponent {
    constructor(route, router, postingService) {
        this.route = route;
        this.router = router;
        this.postingService = postingService;
        this.pageTitle = 'Posting Detail';
        this.errorMessage = '';
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        const handle = this.route.snapshot.paramMap.get('handle');
        if (id && handle) {
            this.getPosting(id, handle);
        }
    }
    getPosting(id, handle) {
        this.postingService.getPosting(id, handle).subscribe(posting => this.posting = posting, error => this.errorMessage = error);
    }
    onBack() {
        this.router.navigate(['/postings']);
    }
};
PostingDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posting-detail',
        template: __webpack_require__(/*! raw-loader!./posting-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/posting/posting-detail/posting-detail.component.html"),
        styles: [__webpack_require__(/*! ./posting-detail.component.css */ "./src/app/posting/posting-detail/posting-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _posting_service__WEBPACK_IMPORTED_MODULE_3__["PostingService"]])
], PostingDetailComponent);



/***/ }),

/***/ "./src/app/posting/posting-edit/posting-edit-guard.ts":
/*!************************************************************!*\
  !*** ./src/app/posting/posting-edit/posting-edit-guard.ts ***!
  \************************************************************/
/*! exports provided: PostingEditGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingEditGuard", function() { return PostingEditGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostingEditGuard = class PostingEditGuard {
    canDeactivate(component) {
        if (component.postingForm.dirty) {
            return confirm(`Navigate away and lose all changes?`);
        }
        return true;
    }
};
PostingEditGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostingEditGuard);



/***/ }),

/***/ "./src/app/posting/posting-edit/posting-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/posting/posting-edit/posting-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RpbmcvcG9zdGluZy1lZGl0L3Bvc3RpbmctZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/posting/posting-edit/posting-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/posting/posting-edit/posting-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: PostingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingEditComponent", function() { return PostingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posting.service */ "./src/app/posting/posting.service.ts");
/* harmony import */ var src_app_shared_genericvalidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/genericvalidator */ "./src/app/shared/genericvalidator.ts");






let PostingEditComponent = class PostingEditComponent {
    constructor(fb, route, router, postingService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.postingService = postingService;
        this.pageTitle = 'Posting Edit';
        this.displayMessage = {};
        this.validationMessages = {
            handle: {
                required: 'Handle is required.',
                minlength: 'Handle must be at least three characters.',
                maxlength: 'Handle cannot exceed 50 characters.'
            },
            price: {
                required: 'Price is required.',
            }
        };
        this.genericValidator = new src_app_shared_genericvalidator__WEBPACK_IMPORTED_MODULE_5__["GenericValidator"](this.validationMessages);
    }
    ngOnInit() {
        this.tranMode = "new";
        this.postingForm = this.fb.group({
            handle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            price: '',
        });
        this.sub = this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            const handle = params.get('handle');
            if (id == '0') {
                const posting = { id: "0", handle: "", price: "" };
                this.displayPosting(posting);
            }
            else {
                this.getPosting(id, handle);
            }
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getPosting(id, handle) {
        this.postingService.getPosting(id, handle)
            .subscribe((posting) => this.displayPosting(posting), (error) => this.errorMessage = error);
    }
    displayPosting(posting) {
        if (this.postingForm) {
            this.postingForm.reset();
        }
        this.posting = posting;
        if (this.posting.id == '0') {
            this.pageTitle = 'Add Posting';
        }
        else {
            this.pageTitle = `Edit Posting: ${this.posting.handle}`;
        }
        this.postingForm.patchValue({
            handle: this.posting.handle,
            price: this.posting.price
        });
    }
    deletePosting() {
        if (this.posting.id == '0') {
            this.onSaveComplete();
        }
        else {
            if (confirm(`Are you sure want to delete this Posting: ${this.posting.handle}?`)) {
                this.postingService.deletePosting(this.posting.id, this.posting.handle)
                    .subscribe(() => this.onSaveComplete(), (error) => this.errorMessage = error);
            }
        }
    }
    savePosting() {
        if (this.postingForm.valid) {
            if (this.postingForm.dirty) {
                const p = Object.assign({}, this.posting, this.postingForm.value);
                if (p.id === '0') {
                    this.postingService.createPosting(p)
                        .subscribe(() => this.onSaveComplete(), (error) => this.errorMessage = error);
                }
                else {
                    this.postingService.updatePosting(p)
                        .subscribe(() => this.onSaveComplete(), (error) => this.errorMessage = error);
                }
            }
            else {
                this.onSaveComplete();
            }
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }
    onSaveComplete() {
        this.postingForm.reset();
        this.router.navigate(['/postings']);
    }
};
PostingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posting-edit',
        template: __webpack_require__(/*! raw-loader!./posting-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/posting/posting-edit/posting-edit.component.html"),
        styles: [__webpack_require__(/*! ./posting-edit.component.css */ "./src/app/posting/posting-edit/posting-edit.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _posting_service__WEBPACK_IMPORTED_MODULE_4__["PostingService"]])
], PostingEditComponent);



/***/ }),

/***/ "./src/app/posting/posting-list/posting-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/posting/posting-list/posting-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead {  \r\n    color: #337AB7;  \r\n  }  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdGluZy9wb3N0aW5nLWxpc3QvcG9zdGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcG9zdGluZy9wb3N0aW5nLWxpc3QvcG9zdGluZy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aGVhZCB7ICBcclxuICAgIGNvbG9yOiAjMzM3QUI3OyAgXHJcbiAgfSAgIl19 */"

/***/ }),

/***/ "./src/app/posting/posting-list/posting-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/posting/posting-list/posting-list.component.ts ***!
  \****************************************************************/
/*! exports provided: PostingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingListComponent", function() { return PostingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _posting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posting.service */ "./src/app/posting/posting.service.ts");



let PostingListComponent = class PostingListComponent {
    constructor(postingService) {
        this.postingService = postingService;
        this.pageTitle = 'Posting List';
        this.filteredPostings = [];
        this.postings = [];
        this.errorMessage = '';
        this._listFilter = '';
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredPostings = this.listFilter ? this.performFilter(this.listFilter) : this.postings;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.postings.filter((posting) => posting.handle.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    ngOnInit() {
        this.postingService.getPostings().subscribe(postings => {
            this.postings = postings;
            this.filteredPostings = this.postings;
        }, error => this.errorMessage = error);
    }
    deletePosting(id, handle) {
        if (id === '') {
            this.onSaveComplete();
        }
        else {
            if (confirm(`Are you sure want to delete this Posting: ${handle}?`)) {
                this.postingService.deletePosting(id, handle)
                    .subscribe(() => this.onSaveComplete(), (error) => this.errorMessage = error);
            }
        }
    }
    onSaveComplete() {
        this.postingService.getPostings().subscribe(postings => {
            this.postings = postings;
            this.filteredPostings = this.postings;
        }, error => this.errorMessage = error);
    }
};
PostingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posting-list',
        template: __webpack_require__(/*! raw-loader!./posting-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/posting/posting-list/posting-list.component.html"),
        styles: [__webpack_require__(/*! ./posting-list.component.css */ "./src/app/posting/posting-list/posting-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posting_service__WEBPACK_IMPORTED_MODULE_2__["PostingService"]])
], PostingListComponent);



/***/ }),

/***/ "./src/app/posting/posting.service.ts":
/*!********************************************!*\
  !*** ./src/app/posting/posting.service.ts ***!
  \********************************************/
/*! exports provided: PostingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingService", function() { return PostingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PostingService = class PostingService {
    constructor(http) {
        this.http = http;
        this.postingsUrl = 'http://localhost:7071/api/';
    }
    getPostings() {
        return this.http.get(this.postingsUrl + 'Get')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getPosting(id, handle) {
        if (id === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.initializePosting());
        }
        const url = `${this.postingsUrl + 'Get'}/${id}/${handle}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    createPosting(posting) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.postingsUrl + 'CreateOrUpdate', posting, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deletePosting(id, handle) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const url = `${this.postingsUrl + 'Delete'}/${id}/${handle}`;
        return this.http.delete(url, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updatePosting(posting) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const url = this.postingsUrl + 'CreateOrUpdate';
        return this.http.put(url, posting, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => posting), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
    initializePosting() {
        return {
            id: null,
            handle: null,
            price: null
        };
    }
};
PostingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PostingService);



/***/ }),

/***/ "./src/app/shared/genericvalidator.ts":
/*!********************************************!*\
  !*** ./src/app/shared/genericvalidator.ts ***!
  \********************************************/
/*! exports provided: GenericValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericValidator", function() { return GenericValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class GenericValidator {
    constructor(validationMessages) {
        this.validationMessages = validationMessages;
    }
    processMessages(container) {
        const messages = {};
        for (const controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                const c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.  
                if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                    const childMessages = this.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control  
                    if (this.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(messageKey => {
                                if (this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += this.validationMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        }
        return messages;
    }
    getErrorCount(container) {
        let errorCount = 0;
        for (const controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                if (container.controls[controlKey].errors) {
                    errorCount += Object.keys(container.controls[controlKey].errors).length;
                    console.log(errorCount);
                }
            }
        }
        return errorCount;
    }
}


/***/ }),

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-heart {\r\n    color: hotpink;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1oZWFydCB7XHJcbiAgICBjb2xvcjogaG90cGluaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/ui/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/ui/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/ui/layout/layout.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/layout/layout.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/ui/layout/layout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Herre\OneDrive\Desktop\cosmosGroup\handleHandler\handleHandler\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map