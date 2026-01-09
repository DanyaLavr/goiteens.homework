var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//! 1
function getPromise() {
    return new Promise(function (resolve) {
        resolve(["Text", 50]);
    });
}
getPromise().then(function (data) {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
console.log(compare({ name: "Danylo", color: "red" }, { position: 1, weight: 76 }));
//! 3
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
console.log(merge({ type: "submit" }, { action: "sell" }));
//! 4
var Component = /** @class */ (function () {
    function Component(props) {
        this.props = props;
    }
    return Component;
}());
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.pageInfo = function () {
        console.log(this.props.title);
    };
    return Page;
}(Component));
var page = new Page({ title: "title" });
page.pageInfo();
