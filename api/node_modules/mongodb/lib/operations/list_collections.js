"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCollectionsCursor = exports.ListCollectionsOperation = void 0;
const abstract_cursor_1 = require("../cursor/abstract_cursor");
const utils_1 = require("../utils");
const command_1 = require("./command");
const execute_operation_1 = require("./execute_operation");
const operation_1 = require("./operation");
/** @internal */
class ListCollectionsOperation extends command_1.CommandOperation {
    constructor(db, filter, options) {
        super(db, options);
        this.options = options !== null && options !== void 0 ? options : {};
        this.db = db;
        this.filter = filter;
        this.nameOnly = !!this.options.nameOnly;
        this.authorizedCollections = !!this.options.authorizedCollections;
        if (typeof this.options.batchSize === 'number') {
            this.batchSize = this.options.batchSize;
        }
    }
    execute(server, session, callback) {
        return super.executeCommand(server, session, this.generateCommand((0, utils_1.maxWireVersion)(server)), callback);
    }
    /* This is here for the purpose of unit testing the final command that gets sent. */
    generateCommand(wireVersion) {
        const command = {
            listCollections: 1,
            filter: this.filter,
            cursor: this.batchSize ? { batchSize: this.batchSize } : {},
            nameOnly: this.nameOnly,
            authorizedCollections: this.authorizedCollections
        };
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if (wireVersion >= 9 && this.options.comment !== undefined) {
            command.comment = this.options.comment;
        }
        return command;
    }
}
exports.ListCollectionsOperation = ListCollectionsOperation;
/** @public */
class ListCollectionsCursor extends abstract_cursor_1.AbstractCursor {
    constructor(db, filter, options) {
        super((0, utils_1.getTopology)(db), db.s.namespace, options);
        this.parent = db;
        this.filter = filter;
        this.options = options;
    }
    clone() {
        return new ListCollectionsCursor(this.parent, this.filter, {
            ...this.options,
            ...this.cursorOptions
        });
    }
    /** @internal */
    _initialize(session, callback) {
        const operation = new ListCollectionsOperation(this.parent, this.filter, {
            ...this.cursorOptions,
            ...this.options,
            session
        });
        (0, execute_operation_1.executeOperation)(this.parent, operation, (err, response) => {
            if (err || response == null)
                return callback(err);
            // TODO: NODE-2882
            callback(undefined, { server: operation.server, session, response });
        });
    }
}
exports.ListCollectionsCursor = ListCollectionsCursor;
(0, operation_1.defineAspects)(ListCollectionsOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.CURSOR_CREATING
]);
//# sourceMappingURL=list_collections.js.map