"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expression029 = exports.expression028 = void 0;
exports.expression028 = {
    cfg: '1.0.0',
    id: '028@1.0.0',
    workflow: { alertThreshold: '25', interdictionThreshold: '50' },
    rules: [
        { id: '003@1.0.0', cfg: '1.0.0', ref: '.01', true: 100, false: 2 },
        { id: '004@1.0.0', cfg: '1.0.0', ref: '.01', true: 50, false: 2 },
    ],
    expression: {
        operator: '+',
        terms: [
            { id: '003@1.0.0', cfg: '1.0.0' },
            { id: '004@1.0.0', cfg: '1.0.0' },
        ],
        expression: {
            operator: '-',
            terms: [
                { id: '003@1.0.0', cfg: '1.0.0' },
                { id: '004@1.0.0', cfg: '1.0.0' },
            ],
            expression: {
                operator: '*',
                terms: [
                    { id: '003@1.0.0', cfg: '1.0.0' },
                    { id: '004@1.0.0', cfg: '1.0.0' },
                ],
                expression: {
                    operator: '/',
                    terms: [
                        { id: '003@1.0.0', cfg: '1.0.0' },
                        { id: '004@1.0.0', cfg: '1.0.0' },
                    ],
                    expression: {
                        operator: '/',
                        terms: [
                            { id: '003@1.0.0', cfg: '1.0.0' },
                            { id: '004@1.0.0', cfg: '1.0.0' },
                        ],
                        expression: undefined,
                    },
                },
            },
        },
    },
};
exports.expression029 = {
    cfg: '1.0.0',
    id: '029@1.0.0',
    workflow: { alertThreshold: '25', interdictionThreshold: '50' },
    rules: [
        { id: '003@1.0.0', cfg: '1.0.0', ref: '.01', true: 100, false: 2 },
        { id: '004@1.0.0', cfg: '1.0.0', ref: '.01', true: 50, false: 2 },
    ],
    expression: {
        operator: '+',
        terms: [
            { id: '003@1.0.0', cfg: '1.0.0' },
            { id: '004@1.0.0', cfg: '1.0.0' },
        ],
        expression: {
            operator: '-',
            terms: [
                { id: '003@1.0.0', cfg: '1.0.0' },
                { id: '004@1.0.0', cfg: '1.0.0' },
            ],
            expression: {
                operator: '*',
                terms: [
                    { id: '003@1.0.0', cfg: '1.0.0' },
                    { id: '004@1.0.0', cfg: '1.0.0' },
                ],
                expression: {
                    operator: '/',
                    terms: [
                        { id: '003@1.0.0', cfg: '1.0.0' },
                        { id: '004@1.0.0', cfg: '1.0.0' },
                    ],
                    expression: {
                        operator: '/',
                        terms: [
                            { id: '003@1.0.0', cfg: '1.0.0' },
                            { id: '004@1.0.0', cfg: '1.0.0' },
                        ],
                        expression: undefined,
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=expressions.js.map