CC=emcc
CFLAGS=\
    -Iexternal/include
EXPORTED_FUNCTIONS=\
    -s EXPORTED_FUNCTIONS='[\
    "_fann_activation",\
    "_fann_activation_derived",\
    "_fann_allocate_connections",\
    "_fann_allocate_neurons",\
    "_fann_allocate_scale",\
    "_fann_backpropagate_MSE",\
    "_fann_cascadetrain_on_data",\
    "_fann_cascadetrain_on_file",\
    "_fann_check_input_output_sizes",\
    "_fann_clear_scaling_params",\
    "_fann_clear_train_arrays",\
    "_fann_compute_MSE",\
    "_fann_copy",\
    "_fann_create_from_file",\
    "_fann_create_shortcut",\
    "_fann_create_shortcut_array",\
    "_fann_create_sparse",\
    "_fann_create_sparse_array",\
    "_fann_create_standard",\
    "_fann_create_standard_array",\
    "_fann_create_train",\
    "_fann_create_train_from_callback",\
    "_fann_descale_input",\
    "_fann_descale_output",\
    "_fann_descale_train",\
    "_fann_desired_error_reached",\
    "_fann_destroy",\
    "_fann_destroy_train",\
    "_fann_duplicate_train_data",\
    "_fann_error",\
    "_fann_get_MSE",\
    "_fann_get_activation_function",\
    "_fann_get_activation_steepness",\
    "_fann_get_bias_array",\
    "_fann_get_bit_fail",\
    "_fann_get_bit_fail_limit",\
    "_fann_get_cascade_activation_functions",\
    "_fann_get_cascade_activation_functions_count",\
    "_fann_get_cascade_activation_steepnesses",\
    "_fann_get_cascade_activation_steepnesses_count",\
    "_fann_get_cascade_candidate_change_fraction",\
    "_fann_get_cascade_candidate_limit",\
    "_fann_get_cascade_candidate_stagnation_epochs",\
    "_fann_get_cascade_max_cand_epochs",\
    "_fann_get_cascade_max_out_epochs",\
    "_fann_get_cascade_min_cand_epochs",\
    "_fann_get_cascade_min_out_epochs",\
    "_fann_get_cascade_num_candidate_groups",\
    "_fann_get_cascade_num_candidates",\
    "_fann_get_cascade_output_change_fraction",\
    "_fann_get_cascade_output_stagnation_epochs",\
    "_fann_get_cascade_weight_multiplier",\
    "_fann_get_connection_array",\
    "_fann_get_connection_rate",\
    "_fann_get_errno",\
    "_fann_get_errstr",\
    "_fann_get_layer_array",\
    "_fann_get_learning_momentum",\
    "_fann_get_learning_rate",\
    "_fann_get_network_type",\
    "_fann_get_num_input",\
    "_fann_get_num_layers",\
    "_fann_get_num_output",\
    "_fann_get_quickprop_decay",\
    "_fann_get_quickprop_mu",\
    "_fann_get_rprop_decrease_factor",\
    "_fann_get_rprop_delta_max",\
    "_fann_get_rprop_delta_min",\
    "_fann_get_rprop_delta_zero",\
    "_fann_get_rprop_increase_factor",\
    "_fann_get_sarprop_step_error_shift",\
    "_fann_get_sarprop_step_error_threshold_factor",\
    "_fann_get_sarprop_temperature",\
    "_fann_get_sarprop_weight_decay_shift",\
    "_fann_get_total_connections",\
    "_fann_get_total_neurons",\
    "_fann_get_train_error_function",\
    "_fann_get_train_stop_function",\
    "_fann_get_training_algorithm",\
    "_fann_get_user_data",\
    "_fann_init_error_data",\
    "_fann_init_weights",\
    "_fann_initialize_candidates",\
    "_fann_install_candidate",\
    "_fann_length_train_data",\
    "_fann_merge_train_data",\
    "_fann_num_input_train_data",\
    "_fann_num_output_train_data",\
    "_fann_print_connections",\
    "_fann_print_error",\
    "_fann_print_parameters",\
    "_fann_randomize_weights",\
    "_fann_read_train_from_file",\
    "_fann_reset_MSE",\
    "_fann_reset_errno",\
    "_fann_reset_errstr",\
    "_fann_run",\
    "_fann_save",\
    "_fann_save_internal",\
    "_fann_save_internal_fd",\
    "_fann_save_to_fixed",\
    "_fann_save_train",\
    "_fann_save_train_internal",\
    "_fann_save_train_internal_fd",\
    "_fann_save_train_to_fixed",\
    "_fann_scale_input",\
    "_fann_scale_input_train_data",\
    "_fann_scale_output",\
    "_fann_scale_output_train_data",\
    "_fann_scale_train",\
    "_fann_scale_train_data",\
    "_fann_seed_rand",\
    "_fann_set_activation_function",\
    "_fann_set_activation_function_hidden",\
    "_fann_set_activation_function_layer",\
    "_fann_set_activation_function_output",\
    "_fann_set_activation_steepness",\
    "_fann_set_activation_steepness_hidden",\
    "_fann_set_activation_steepness_layer",\
    "_fann_set_activation_steepness_output",\
    "_fann_set_bit_fail_limit",\
    "_fann_set_callback",\
    "_fann_set_cascade_activation_functions",\
    "_fann_set_cascade_activation_steepnesses",\
    "_fann_set_cascade_candidate_change_fraction",\
    "_fann_set_cascade_candidate_limit",\
    "_fann_set_cascade_candidate_stagnation_epochs",\
    "_fann_set_cascade_max_cand_epochs",\
    "_fann_set_cascade_max_out_epochs",\
    "_fann_set_cascade_min_cand_epochs",\
    "_fann_set_cascade_min_out_epochs",\
    "_fann_set_cascade_num_candidate_groups",\
    "_fann_set_cascade_output_change_fraction",\
    "_fann_set_cascade_output_stagnation_epochs",\
    "_fann_set_cascade_weight_multiplier",\
    "_fann_set_error_log",\
    "_fann_set_input_scaling_params",\
    "_fann_set_learning_momentum",\
    "_fann_set_learning_rate",\
    "_fann_set_output_scaling_params",\
    "_fann_set_quickprop_decay",\
    "_fann_set_quickprop_mu",\
    "_fann_set_rprop_decrease_factor",\
    "_fann_set_rprop_delta_max",\
    "_fann_set_rprop_delta_min",\
    "_fann_set_rprop_delta_zero",\
    "_fann_set_rprop_increase_factor",\
    "_fann_set_sarprop_step_error_shift",\
    "_fann_set_sarprop_step_error_threshold_factor",\
    "_fann_set_sarprop_temperature",\
    "_fann_set_sarprop_weight_decay_shift",\
    "_fann_set_scaling_params",\
    "_fann_set_shortcut_connections",\
    "_fann_set_train_error_function",\
    "_fann_set_train_stop_function",\
    "_fann_set_training_algorithm",\
    "_fann_set_user_data",\
    "_fann_set_weight",\
    "_fann_set_weight_array",\
    "_fann_shuffle_train_data",\
    "_fann_subset_train_data",\
    "_fann_test",\
    "_fann_test_data",\
    "_fann_train",\
    "_fann_train_candidates",\
    "_fann_train_candidates_epoch",\
    "_fann_train_epoch",\
    "_fann_train_on_data",\
    "_fann_train_on_file",\
    "_fann_train_outputs",\
    "_fann_train_outputs_epoch",\
    "_fann_update_slopes_batch",\
    "_fann_update_weights",\
    "_fann_update_weights_batch",\
    "_fann_update_weights_irpropm",\
    "_fann_update_weights_quickprop",\
    "_fann_update_weights_sarprop",\
    "_my_file_read",\
    "_my_file_remove",\
    "_my_file_write",\
    "_my_print_constants",\
    "_my_test"\
]'

all: fann example
clean:
		rm *.net tmp/build/*.mem tmp/build/*.out tmp/build/*.js 2>/dev/null || true
example:
		gcc example.c -o tmp/build/example.out -Iexternal/include
fann:
		$(CC) -o tmp/build/fann.js fann.c $(CFLAGS) $(EXPORTED_FUNCTIONS) && \
		printf "\nModule.FS=FS;\n" >> tmp/fann.js
test: example
		tmp/build/example.out && \
		printf "\n\ntest.xor.data\n" && \
		cat test.xor.data && \
		printf "\n\ntest.xor_double.net\n" && \
		cat test.xor_double.net && \
		rm *.net
