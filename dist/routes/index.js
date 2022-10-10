"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var axios_1 = __importDefault(require("axios"));
var routes = (0, express_1.Router)();
routes.get('/api', function (req, res) {
    res.send('Welcome to TransformUs');
});
routes.get('/api/people', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var apiRes, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default.get('https://swapi.dev/api/people/')];
            case 1:
                apiRes = _a.sent();
                res.send(apiRes.data.results);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                res.status(500).send('Something went wrong');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
routes.get('/api/people/name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name, apiRes, allpepole, actor, i, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = req.query.name;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default.get('https://swapi.dev/api/people/')];
            case 2:
                apiRes = _a.sent();
                allpepole = apiRes.data.results;
                actor = [];
                for (i = 0; i < allpepole.length; i++) {
                    if (allpepole[i].name.toLowerCase() === name.toLocaleLowerCase()) {
                        actor = [allpepole[i]];
                        break;
                    }
                }
                res.send(actor);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.log(err_2);
                res.status(500).send('actor not found');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
routes.get('/api/movies', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var apiRes, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default.get('https://swapi.dev/api/films/')];
            case 1:
                apiRes = _a.sent();
                res.send(apiRes.data.results);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.log(err_3);
                res.status(500).send('Something went wrong');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
routes.get('/api/movies/title', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movieName, apiRes, allMovies, getMovieByName, i, cast, i, castName, movieByNameWithCast, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                movieName = req.query.movieName;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                return [4 /*yield*/, axios_1.default.get('https://swapi.dev/api/films')];
            case 2:
                apiRes = _a.sent();
                allMovies = apiRes.data.results;
                getMovieByName = [];
                for (i = 0; i < allMovies.length; i++) {
                    if (allMovies[i].title.toLowerCase() === movieName.toLowerCase()) {
                        getMovieByName = [allMovies[i]];
                        break;
                    }
                }
                cast = [];
                i = 0;
                _a.label = 3;
            case 3:
                if (!(i < (getMovieByName === null || getMovieByName === void 0 ? void 0 : getMovieByName[0].characters.length))) return [3 /*break*/, 7];
                return [4 /*yield*/, axios_1.default.get(getMovieByName === null || getMovieByName === void 0 ? void 0 : getMovieByName[0].characters[i])];
            case 4: return [4 /*yield*/, (_a.sent()).data.name];
            case 5:
                castName = _a.sent();
                cast.push(castName);
                _a.label = 6;
            case 6:
                i++;
                return [3 /*break*/, 3];
            case 7:
                movieByNameWithCast = __spreadArray(__spreadArray([], getMovieByName, true), [cast], false);
                res.send(movieByNameWithCast);
                return [3 /*break*/, 9];
            case 8:
                err_4 = _a.sent();
                console.log(err_4);
                res.status(500).send('movie not found');
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
exports.default = routes;
