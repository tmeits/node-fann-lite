/* istanbul instrument in package fann-lite */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 8,
    maxlen: 96,
    node: true,
    nomen: true,
    regexp: true,
    stupid: true
*/
(function () {
    'use strict';
    var local, options;



    // run shared js-env code - pre-init
    (function () {
        // init Error.stackTraceLimit
        Error.stackTraceLimit = Infinity;
        // init local
        local = {};
        // init modeJs
        local.modeJs = (function () {
            try {
                return typeof navigator.userAgent === 'string' &&
                    typeof document.querySelector('body') === 'object' &&
                    typeof XMLHttpRequest.prototype.open === 'function' &&
                    'browser';
            } catch (errorCaughtBrowser) {
                return module.exports &&
                    typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            }
        }());
        switch (local.modeJs) {
        // re-init local from window.local
        case 'browser':
            local = window.local;
            break;
        // re-init local from example.js
        case 'node':
            local = require('utility2').local;
            // require module
            local.fann = require('./tmp/build/fann.js');
            break;
        }
        // local.fann._my_print_constants();
        local.fann.FANN_COS = 17;
        local.fann.FANN_COS_SYMMETRIC = 15;
        local.fann.FANN_ELLIOT = 10;
        local.fann.FANN_ELLIOT_SYMMETRIC = 11;
        local.fann.FANN_ERRORFUNC_LINEAR = 0;
        local.fann.FANN_ERRORFUNC_TANH = 1;
        local.fann.FANN_ERRSTR_MAX = 128;
        local.fann.FANN_E_CANT_ALLOCATE_MEM = 11;
        local.fann.FANN_E_CANT_OPEN_CONFIG_R = 1;
        local.fann.FANN_E_CANT_OPEN_CONFIG_W = 2;
        local.fann.FANN_E_CANT_OPEN_TD_R = 9;
        local.fann.FANN_E_CANT_OPEN_TD_W = 8;
        local.fann.FANN_E_CANT_READ_CONFIG = 4;
        local.fann.FANN_E_CANT_READ_CONNECTIONS = 6;
        local.fann.FANN_E_CANT_READ_NEURON = 5;
        local.fann.FANN_E_CANT_READ_TD = 10;
        local.fann.FANN_E_CANT_TRAIN_ACTIVATION = 12;
        local.fann.FANN_E_CANT_USE_ACTIVATION = 13;
        local.fann.FANN_E_CANT_USE_TRAIN_ALG = 15;
        local.fann.FANN_E_INDEX_OUT_OF_BOUND = 17;
        local.fann.FANN_E_INPUT_NO_MATCH = 19;
        local.fann.FANN_E_NO_ERROR = 0;
        local.fann.FANN_E_OUTPUT_NO_MATCH = 20;
        local.fann.FANN_E_SCALE_NOT_PRESENT = 18;
        local.fann.FANN_E_TRAIN_DATA_MISMATCH = 14;
        local.fann.FANN_E_TRAIN_DATA_SUBSET = 16;
        local.fann.FANN_E_WRONG_CONFIG_VERSION = 3;
        local.fann.FANN_E_WRONG_NUM_CONNECTIONS = 7;
        local.fann.FANN_GAUSSIAN = 7;
        local.fann.FANN_GAUSSIAN_STEPWISE = 9;
        local.fann.FANN_GAUSSIAN_SYMMETRIC = 8;
        local.fann.FANN_LINEAR = 0;
        local.fann.FANN_LINEAR_PIECE = 12;
        local.fann.FANN_LINEAR_PIECE_SYMMETRIC = 13;
        local.fann.FANN_NETTYPE_LAYER = 0;
        local.fann.FANN_NETTYPE_SHORTCUT = 1;
        local.fann.FANN_SIGMOID = 3;
        local.fann.FANN_SIGMOID_STEPWISE = 4;
        local.fann.FANN_SIGMOID_SYMMETRIC = 5;
        local.fann.FANN_SIGMOID_SYMMETRIC_STEPWISE = 6;
        local.fann.FANN_SIN = 16;
        local.fann.FANN_SIN_SYMMETRIC = 14;
        local.fann.FANN_STOPFUNC_BIT = 1;
        local.fann.FANN_STOPFUNC_MSE = 0;
        local.fann.FANN_THRESHOLD = 1;
        local.fann.FANN_THRESHOLD_SYMMETRIC = 2;
        local.fann.FANN_TRAIN_BATCH = 1;
        local.fann.FANN_TRAIN_INCREMENTAL = 0;
        local.fann.FANN_TRAIN_QUICKPROP = 3;
        local.fann.FANN_TRAIN_RPROP = 2;
        local.fann.FANN_TRAIN_SARPROP = 4;
    }());
    switch (local.modeJs) {



    // run node js-env code post-init
    case 'node':
        [
            'fann_create_from_file',
            'fann_read_train_from_file',
            'fann_save',
            'fann_save_train',
            'fann_cascadetrain_on_file',
            'fann_train_on_file',
            'my_array_double_from_string',
            'my_array_double_to_string',
            'my_array_int_from_string',
            'my_array_int_to_string',
            'my_file_read',
            'my_file_remove',
            'my_file_write',
            'my_test'
        ].forEach(function (key) {
            var value;
            switch (key) {
            case 'my_test':
                value = local.fann.cwrap(key, 'number', []);
                break;
            case 'fann_create_from_file':
            case 'fann_read_train_from_file':
            case 'my_array_double_from_string':
            case 'my_array_int_from_string':
                value = local.fann.cwrap(key, 'number', ['string']);
                break;
            case 'fann_save':
            case 'fann_save_train':
                value = local.fann.cwrap(key, 'number', ['number', 'string']);
                break;
            case 'fann_cascadetrain_on_file':
            case 'fann_train_on_file':
                value = local.fann.cwrap(
                    key,
                    'number',
                    ['number', 'string', 'number', 'number', 'number']
                );
                break;
            case 'my_array_double_to_string':
            case 'my_array_int_to_string':
                value = local.fann.cwrap(key, 'string', ['number', 'number']);
                break;
            case 'my_file_read':
            case 'my_file_remove':
                value = local.fann.cwrap(key, 'string', ['string']);
                break;
            case 'my_file_write':
                value = local.fann.cwrap(key, 'string', ['string', 'string']);
                break;
            }
            local.fann['_' + key + '_2'] = value;
        });

        local.fann.fann_ann_from_array = function (layerList) {
        /*
         * this function will create an ann from the config layerList
         */
            return local.fann._fann_create_standard_array(
                layerList.length,
                local.fann.my_array_int_set(layerList)
            );
        };

        //!! local.fann.fann_ann_from_cascadetrain = function (
            //!! data,
            //!! max_neuron,
            //!! neurons_between_reports,
            //!! desired_error
        //!! ) {
        //!! /*
         //!! * this function will create an ann, cascade-trained from the training data
         //!! */
            //!! var ann;
            //!! data = local.fann.fann_read_train_from_string(data);
            //!! ann = [
                //!! local.fann._fann_num_input_train_data(data),
                //!! local.fann._fann_num_output_train_data(data)
            //!! ];
            //!! ann = local.fann._fann_create_shortcut_array(
                //!! ann.length,
                //!! local.fann.my_array_int_set(debugPrint(ann))
            //!! );
            //!! local.fann._fann_cascadetrain_on_data(
                //!! ann,
                //!! data,
                //!! max_neuron || 256,
                //!! neurons_between_reports || 1000,
                //!! desired_error || 0.001
            //!! );
            //!! return ann;
        //!! };

        local.fann.fann_ann_from_string = function (text) {
        /*
         * this function will create an ann from the config text
         */
            local.fann._my_file_write_2('ann.net', text);
            return local.fann._fann_create_from_file_2('ann.net');
        };

        local.fann.fann_ann_to_string = function (ann) {
        /*
         * this function will save the ann to the config text
         */
            local.fann._fann_save_2(ann, 'ann.net');
            return local.fann._my_file_read_2('ann.net');
        };

        local.fann.fann_read_train_from_string = function (text) {
        /*
         * this function will read the training data from the training text
         * e.g. for xor
            4 2 1
            -1 -1
            -1
            -1 1
            1
            1 -1
            1
            1 1
            -1
         */
            local.fann._my_file_write_2('train.data', text);
            return local.fann._fann_read_train_from_file_2('train.data');
        };

        local.fann.fann_run = function (ann, inputList) {
        /*
         * this function will run the ann with the inputList, and return the outputList
         */
            return local.fann.my_array_double_get(
                local.fann._fann_run(ann, local.fann.my_array_double_set(inputList)),
                local.fann._fann_get_num_output(ann)
            );
        };

        local.fann.fann_train = function (options) {
        /*
         * this function will create an ann from the config list
         */
            var dataTrain
            local.fann._fann_set_activation_function_hidden(
                options.ann,
                options.activation || local.fann.FANN_SIGMOID_SYMMETRIC
            );
            local.fann._fann_set_activation_function_output(
                options.ann,
                options.activation || local.fann.FANN_SIGMOID_SYMMETRIC
            );
            dataTrain = local.fann.fann_read_train_from_string(options.dataTrain);
            // Initialize the weights using Widrow + Nguyen’s algorithm
            local.fann._fann_init_weights(options.ann, dataTrain);
            // defaults from http://leenissen.dk/fann/html/files2/gettingstarted-txt.html
            local.fann._fann_train_on_data(
                options.ann,
                dataTrain,
                options.maxEpochs || 500000,
                options.epochsBetweenReports || 1000,
                options.desiredError || 0.001
            );
        };

        local.fann.my_array_double_get = function (ptr, length) {
        /*
         * this function will get the double-array ptr as a javascript-array
         */
            return local.fann._my_array_double_to_string_2(ptr, length).split(' ').map(Number);
        };

        local.fann.my_array_double_set = function (list) {
        /*
         * this function will set the javascript-array list as an double-array,
         * and return its ptr
         */
            local.fann._my_array_double_from_string_2(list.join(' '));
            return local.fann._my_array_double_get();
        };

        local.fann.my_array_int_get = function (ptr, length) {
        /*
         * this function will get the int-array ptr as a javascript-array
         */
            return local.fann._my_array_int_to_string_2(ptr, length).split(' ').map(Number);
        };

        local.fann.my_array_int_set = function (list) {
        /*
         * this function will set the javascript-array list as an int-array,
         * and return its ptr
         */
            local.fann._my_array_int_from_string_2(list.join(' '));
            return local.fann._my_array_int_get();
        };

        options = {};
        options.desiredError = 0.001;
        options.epochsBetweenReports = 1000;
        options.maxEpochs = 500000;
        options.numInput = 2;
        options.numLayers = 3;
        options.numNeuronsHidden = 3;
        options.numOutput = 1;
        // ann - init
        options.ann = local.fann.fann_ann_from_array([2, 3, 1]);
        // ann - train
        options.dataTrain = local.fs.readFileSync('test.xor.data', 'utf8');
        local.fann.fann_train(options);


        //!! options.ann = local.fann.fann_ann_from_cascadetrain(
            //!! local.fs.readFileSync('test.xor.data', 'utf8')
        //!! );


        // ann - debug
        console.log(
            local.fann.fann_ann_to_string(options.ann)
        );
        // ann - test
        console.log(
            local.fann.fann_run(options.ann, [-1, 1])
        );
        console.log(
            local.fann.fann_run(options.ann, [1, 1])
        );
        break;
    }
}());
