(function executeRule(current, previous /*null when async*/) {

    if (current.onboarding_status == 'Approved') {
        current.onboarding_status = 'In Progress';
    }

})(current, previous);
