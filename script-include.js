var EmployeeOnboardingUtils = Class.create();

EmployeeOnboardingUtils.prototype = {

    initialize: function() {
    },

    validateEmployee: function(userId) {

        var user = new GlideRecord('sys_user');

        if (user.get(userId)) {
            return true;
        }

        return false;
    },

    getEmployeeDetails: function(userId) {

        var user = new GlideRecord('sys_user');

        if (user.get(userId)) {
            return {
                name: user.getDisplayValue('name'),
                email: user.getValue('email'),
                department: user.getDisplayValue('department')
            };
        }

        return null;
    },

    type: 'EmployeeOnboardingUtils'
};
