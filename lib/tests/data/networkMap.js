"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkMapSample = void 0;
exports.NetworkMapSample = [
    [
        {
            messages: [
                {
                    id: '001@1.0',
                    host: 'http://gateway.openfaas:8080',
                    cfg: '1.0',
                    txTp: 'pain.001.001.11',
                    channels: [
                        {
                            id: '001@1.0',
                            host: 'http://gateway.openfaas:8080/function/off-channel-aggregation-decisioning-processor',
                            cfg: '1.0',
                            typologies: [
                                {
                                    id: '028@1.0',
                                    host: 'http://gateway.openfaas:8080/function/off-typology-processor',
                                    cfg: '1.0',
                                    rules: [
                                        { id: '003@1.0', host: 'http://gateway.openfaas:8080/function/off-rule-003', cfg: '1.0' },
                                        { id: '028@1.0', host: 'http://gateway.openfaas:8080/function/off-rule-028', cfg: '1.0' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: '002@1.0',
                    host: 'http://gateway.openfaas:8080',
                    cfg: '1.0',
                    txTp: 'pain.013.001.09',
                    channels: [
                        {
                            id: '001@1.0',
                            host: 'http://gateway.openfaas:8080/function/off-channel-aggregation-decisioning-processor',
                            cfg: '1.0',
                            typologies: [
                                {
                                    id: '028@1.0',
                                    host: 'http://gateway.openfaas:8080/function/off-typology-processor',
                                    cfg: '1.0',
                                    rules: [
                                        { id: '003@1.0', host: 'http://gateway.openfaas:8080/function/off-rule-003', cfg: '1.0' },
                                        { id: '028@1.0', host: 'http://gateway.openfaas:8080/function/off-rule-028', cfg: '1.0' },
                                    ],
                                },
                                {
                                    id: '029@1.0',
                                    host: 'http://gateway.openfaas:8080/function/off-typology-processor',
                                    cfg: '1.0',
                                    rules: [
                                        { id: '003@1.0', host: 'http://gateway.openfaas:8080/function/off-rule-003', cfg: '1.0' },
                                        { id: '028@1.0', host: 'http://gateway.openfaas:8080/function/off-rule-028', cfg: '1.0' },
                                    ],
                                },
                            ],
                        },
                        {
                            id: '002@1.0',
                            host: 'http://gateway.openfaas:8080/function/off-channel-aggregation-decisioning-processor',
                            cfg: '1.0',
                            typologies: [
                                {
                                    id: '030@1.0',
                                    host: 'http://gateway.openfaas:8080/function/off-typology-processor',
                                    cfg: '1.0',
                                    rules: [
                                        { id: '003@1.0', host: 'http://gateway.openfaas:8080/function/off-rule-003', cfg: '1.0' },
                                        { id: '028@1.0', host: 'http://gateway.openfaas:8080/function/off-rule-028', cfg: '1.0' },
                                    ],
                                },
                                {
                                    id: '031@1.0',
                                    host: 'http://gateway.openfaas:8080/function/off-typology-processor',
                                    cfg: '1.0',
                                    rules: [
                                        { id: '003@1.0', host: 'http://gateway.openfaas:8080/function/off-rule-003', cfg: '1.0' },
                                        { id: '028@1.0', host: 'http://gateway.openfaas:8080/function/off-rule-028', cfg: '1.0' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: '004@1.0.0',
                    host: 'https://gateway.openfaas:8080/function/off-transaction-aggregation-decisioning-processor-rel-1-1-0',
                    cfg: '1.0.0',
                    txTp: 'pacs.002.001.12',
                    channels: [
                        {
                            id: '001@1.0.0',
                            host: 'https://gateway.openfaas:8080/function/off-channel-aggregation-decisioning-processor-rel-1-1-0',
                            cfg: '1.0.0',
                            typologies: [
                                {
                                    id: '028@1.0.0',
                                    host: 'https://gateway.openfaas:8080/function/off-typology-processor-rel-1-0-0',
                                    cfg: '1.0.0',
                                    rules: [{ id: '018@1.0', host: 'https://gateway.openfaas:8080/function/off-rule-018-rel-1-0-0', cfg: '1.0.0' }],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: '005@1.0.0',
                    host: 'https://gateway.openfaas:8080/function/off-transaction-aggregation-decisioning-processor-rel-1-1-0',
                    cfg: '1.0.0',
                    txTp: 'pacs.008.001.10',
                    channels: [
                        {
                            id: '001@1.0.0',
                            host: 'https://gateway.openfaas:8080/function/off-channel-aggregation-decisioning-processor-rel-1-1-0',
                            cfg: '1.0.0',
                            typologies: [
                                {
                                    id: '028@1.0.0',
                                    host: 'https://gateway.openfaas:8080/function/off-typology-processor-rel-1-0-0',
                                    cfg: '1.0.0',
                                    rules: [{ id: '018@1.0', host: 'https://gateway.openfaas:8080/function/off-rule-018-rel-1-0-0', cfg: '1.0.0' }],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
];
//# sourceMappingURL=networkMap.js.map