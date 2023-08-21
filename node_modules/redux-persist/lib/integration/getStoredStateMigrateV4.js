"use strict";

exports.__esModule = true;
exports.default = getStoredState;

var _getStoredState = _interopRequireDefault(require("../getStoredState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getStoredState(v4Config) {
  return function (v5Config) {
    return (0, _getStoredState.default)(v5Config).then(function (state) {
      if (state) return state;else return getStoredStateV4(v4Config);
    });
  };
}

var KEY_PREFIX = 'reduxPersist:';

function hasLocalStorage() {
  if ((typeof self === "undefined" ? "undefined" : _typeof(self)) !== 'object' || !('localStorage' in self)) {
    return false;
  }

  try {
    var storage = self.localStorage;
    var testKey = "redux-persist localStorage test";
    storage.setItem(testKey, 'test');
    storage.getItem(testKey);
    storage.removeItem(testKey);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') console.warn("redux-persist localStorage test failed, persistence will be disabled.");
    return false;
  }

  return true;
}

var noop = function noop() {
  /* noop */
  return null;
};

var noStorage = {
  getItem: noop,
  setItem: noop,
  removeItem: noop,
  getAllKeys: noop
};

var createAsyncLocalStorage = function createAsyncLocalStorage() {
  if (!hasLocalStorage()) return noStorage;
  var localStorage = self.localStorage;
  return {
    getAllKeys: function getAllKeys(cb) {
      try {
        var keys = [];

        for (var i = 0; i < localStorage.length; i++) {
          keys.push(localStorage.key(i));
        }

        cb(null, keys);
      } catch (e) {
        cb(e);
      }
    },
    getItem: function getItem(key, cb) {
      try {
        var s = localStorage.getItem(key);
        cb(null, s);
      } catch (e) {
        cb(e);
      }
    },
    setItem: function setItem(key, string, cb) {
      try {
        localStorage.setItem(key, string);
        cb(null);
      } catch (e) {
        cb(e);
      }
    },
    removeItem: function removeItem(key, cb) {
      try {
        localStorage.removeItem(key);
        cb && cb(null);
      } catch (e) {
        cb(e);
      }
    }
  };
};

function getStoredStateV4(v4Config) {
  return new Promise(function (resolve, reject) {
    var storage = v4Config.storage || createAsyncLocalStorage();
    var deserializer = v4Config.serialize === false ? function (data) {
      return data;
    } : function (serial) {
      return JSON.parse(serial);
    };
    var blacklist = v4Config.blacklist || [];
    var whitelist = v4Config.whitelist || false;
    var transforms = v4Config.transforms || [];
    var keyPrefix = v4Config.keyPrefix !== undefined ? v4Config.keyPrefix : KEY_PREFIX; // fallback getAllKeys to `keys` if present (LocalForage compatability)

    if (storage.keys && !storage.getAllKeys) storage = _objectSpread({}, storage, {
      getAllKeys: storage.keys
    });
    var restoredState = {};
    var completionCount = 0;
    storage.getAllKeys(function (err) {
      var allKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (err) {
        if (process.env.NODE_ENV !== 'production') console.warn('redux-persist/getStoredState: Error in storage.getAllKeys');
        return reject(err);
      }

      var persistKeys = allKeys.filter(function (key) {
        return key.indexOf(keyPrefix) === 0;
      }).map(function (key) {
        return key.slice(keyPrefix.length);
      });
      var keysToRestore = persistKeys.filter(passWhitelistBlacklist);
      var restoreCount = keysToRestore.length;
      if (restoreCount === 0) resolve(undefined);
      keysToRestore.forEach(function (key) {
        storage.getItem(createStorageKey(key), function (err, serialized) {
          if (err && process.env.NODE_ENV !== 'production') console.warn('redux-persist/getStoredState: Error restoring data for key:', key, err);else restoredState[key] = rehydrate(key, serialized);
          completionCount += 1;
          if (completionCount === restoreCount) resolve(restoredState);
        });
      });
    });

    function rehydrate(key, serialized) {
      var state = null;

      try {
        var data = serialized ? deserializer(serialized) : undefined;
        state = transforms.reduceRight(function (subState, transformer) {
          return transformer.out(subState, key, {});
        }, data);
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') console.warn('redux-persist/getStoredState: Error restoring data for key:', key, err);
      }

      return state;
    }

    function passWhitelistBlacklist(key) {
      if (whitelist && whitelist.indexOf(key) === -1) return false;
      if (blacklist.indexOf(key) !== -1) return false;
      return true;
    }

    function createStorageKey(key) {
      return "".concat(keyPrefix).concat(key);
    }
  });
}

function defaultDeserializer(serial) {
  return JSON.parse(serial);
}