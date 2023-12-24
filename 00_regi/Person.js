import {Class} from "./Class.js";

let Person = Class.create();
Person.prototype = {
    initialize: function (fullName, age, DEBUG) {
        this.DEBUG = DEBUG === "DEBUG";
        this._fullName = fullName || 'Unknown Unknown';
        this._age = age

    },

    set fullName(value) {
        this._fullName = value;
    },

    set age(value) {
        this._age = value;
    },

    get fullName() {
        return this._fullName;
    },

    get age() {
        return this._age;
    },

    get firstName() {
        if (this.fullName) {
            var _names = this.fullName.split(' ');
            var _len = _names.length;
            return (_len > 0 && _names[0]) ? _names[0] : '<Unknown>';
        }
        else {
            return '<unknown>';
        }
    },

    get lastName() {
        var _names = this.fullName.split(' ');
        var _len = _names.length;
        return (_len > 1 && _names[_len - 1]) ? _names[_len - 1] : '<Unknown>';
    },

    toString: function() {
        return 'Full Name: "' + this.fullName + '", Age: "' + this.age + '", First Name: "' + this.firstName + '", Last: "' + this.lastName + '".';
    }


};

export { Person };

