# servicenow-employee-onboarding-management
# Employee Onboarding Management System – ServiceNow

## Project Overview

The Employee Onboarding Management System is a ServiceNow-based solution designed to automate and manage the employee onboarding process.

The system helps HR, managers, and IT teams coordinate onboarding activities such as employee information collection, laptop requests, system access, and task assignment.

## Objectives

* Automate employee onboarding activities
* Reduce manual coordination between HR and IT teams
* Create onboarding tasks automatically
* Manage system access requests
* Track onboarding progress
* Improve the employee onboarding experience

## Technologies Used

* ServiceNow
* Service Catalog
* Flow Designer
* Catalog Client Scripts
* Catalog UI Policies
* Business Rules
* Script Includes
* GlideRecord
* UI Policies
* ACL
* Notifications
* JavaScript

## Main Features

### 1. Employee Onboarding Request

HR or the manager can submit an onboarding request with details such as:

* Employee Name
* Employee ID
* Department
* Job Title
* Manager
* Joining Date
* Location
* Laptop Required
* System Access Required

### 2. Approval Process

After the onboarding request is submitted:

```text
Employee Onboarding Request
            ↓
       Manager Approval
            ↓
       Approved?
        /       \
      Yes        No
       ↓          ↓
Create Tasks    Rejected
       ↓
 IT Processing
       ↓
Access & Laptop Setup
       ↓
Onboarding Completed
```

## Service Catalog

### Catalog Item

**Name:** Employee Onboarding Request

The catalog item collects the required employee information and starts the onboarding process.

### Variables

* Employee Name
* Employee ID
* Department
* Job Title
* Manager
* Joining Date
* Location
* Laptop Required
* System Access Required

## Flow Designer

The onboarding automation can be implemented using Flow Designer.

### Flow

```text
Trigger:
Employee Onboarding Request Submitted

        ↓

Create Onboarding Record

        ↓

Request Manager Approval

        ↓

If Approved

        ↓

Create IT Onboarding Tasks

        ↓

Laptop Setup Task

        ↓

System Access Task

        ↓

Notify HR

        ↓

Update Status to Completed
```

If the request is rejected, the status is updated to **Rejected** and the requester is notified.

## Business Rules

Business Rules can be used for server-side validation and automation.

Example:

* Validate joining date
* Update onboarding status
* Create related records
* Maintain data consistency

## Catalog Client Script

Catalog Client Scripts can be used to dynamically control the onboarding form.

Example use cases:

* Make fields mandatory
* Validate employee information
* Show or hide fields
* Set default values

## Example Catalog Client Script

```javascript
function onChange(control, oldValue, newValue, isLoading) {

    if (isLoading || newValue == '') {
        return;
    }

    if (newValue == 'true') {
        g_form.setMandatory('system_access_required', true);
    }
}
```

## Script Include

A Script Include can be used for reusable server-side logic.

Example:

```javascript
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

    type: 'EmployeeOnboardingUtils'
};
```

## GlideRecord

GlideRecord can be used to retrieve and update onboarding records.

Example:

```javascript
var onboarding = new GlideRecord('x_employee_onboarding_request');

onboarding.addQuery('onboarding_status', 'In Progress');
onboarding.query();

while (onboarding.next()) {
    gs.info(onboarding.employee_name);
}
```

## UI Policies

UI Policies can control field behavior based on selected values.

Example:

If **Laptop Required = Yes**, laptop-related information can be displayed or made mandatory.

## ACL

Access Controls can restrict access to onboarding records.

Example:

* HR users can create onboarding requests.
* Managers can approve requests.
* IT users can process IT tasks.
* Unauthorized users cannot modify onboarding records.

## Notifications

Notifications can be configured for:

* New onboarding request
* Approval required
* Request approved
* Request rejected
* IT task assigned
* Onboarding completed

## Onboarding Status

The request can move through the following stages:

```text
Requested
    ↓
Pending Approval
    ↓
Approved
    ↓
In Progress
    ↓
Completed
```

Alternative status:

```text
Rejected
```

## Testing Scenarios

### Test Case 1 – Submit Request

Submit an employee onboarding request.

**Expected Result:**
A new onboarding request should be created.

### Test Case 2 – Manager Approval

Manager approves the request.

**Expected Result:**
The onboarding process should continue and IT tasks should be created.

### Test Case 3 – Manager Rejection

Manager rejects the request.

**Expected Result:**
Request status should change to Rejected and notification should be sent.

### Test Case 4 – IT Processing

IT team completes laptop and system access tasks.

**Expected Result:**
Onboarding status should be updated accordingly.

### Test Case 5 – Completion

All onboarding tasks are completed.

**Expected Result:**
Employee onboarding status should become Completed.

## ServiceNow Concepts Demonstrated

* Service Catalog
* Catalog Client Script
* Catalog UI Policy
* Flow Designer
* Business Rules
* Script Includes
* GlideRecord
* UI Policies
* ACL
* Notifications
* ITSM Automation

## Project Outcome

This project demonstrates how ServiceNow can automate employee onboarding by connecting HR, managers, and IT teams through automated requests, approvals, task creation, notifications, and status tracking.

## Author

**Rohini Barkhade**

ServiceNow Developer | ServiceNow Administrator | ITSM
