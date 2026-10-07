function onChange(control, oldValue, newValue, isLoading) {

    if (isLoading) {
        return;
    }

    if (newValue == 'true') {
        g_form.setMandatory('system_access_required', true);
    }
}
