# Employee Onboarding Management System

## 1. Project Summary

This project is designed to automate the employee onboarding process using ServiceNow concepts.

The system connects HR, managers, and IT teams and helps manage employee onboarding activities from request submission to completion.

## 2. Business Problem

In a manual onboarding process, HR needs to coordinate with managers and IT teams for multiple activities such as:

* Employee information
* Manager approval
* Laptop requirements
* System access
* IT tasks
* Onboarding completion

Manual coordination can cause delays and make it difficult to track onboarding progress.

## 3. Proposed Solution

The ServiceNow Employee Onboarding Management System automates these activities using:

* Service Catalog
* Flow Designer
* Catalog Client Scripts
* Business Rules
* Script Includes
* GlideRecord
* ACLs
* Notifications

## 4. Process

The onboarding process follows these steps:

1. HR or manager submits an onboarding request.
2. Employee information is captured.
3. Manager approval is requested.
4. If rejected, the request is marked as Rejected.
5. If approved, IT tasks are created.
6. Laptop setup is performed if required.
7. System access is provided if required.
8. HR receives status notifications.
9. All tasks are completed.
10. Onboarding request is marked as Completed.

## 5. Roles and Responsibilities

### HR

* Create onboarding requests
* Track onboarding status
* Monitor completion

### Manager

* Review onboarding request
* Approve or reject request

### IT Team

* Process laptop requirements
* Provide system access
* Complete IT tasks

### Employee

* Provide required information
* View onboarding information

## 6. ServiceNow Components

### Service Catalog

Used to create the Employee Onboarding Request form.

### Flow Designer

Used to automate approvals, task creation, notifications, and status updates.

### Catalog Client Script

Used for client-side validation and dynamic form behavior.

### Business Rule

Used for server-side processing and data validation.

### Script Include

Used for reusable server-side JavaScript logic.

### GlideRecord

Used to retrieve and update ServiceNow records.

### ACL

Used to control access to onboarding records.

### Notifications

Used to inform HR, managers, and IT about important onboarding events.

## 7. Expected Benefits

* Faster employee onboarding
* Less manual work
* Better communication
* Improved tracking
* Automated approvals
* Better security
* Centralized onboarding information

## 8. Future Enhancements

The project can be enhanced by adding:

* Automatic email notifications
* Employee onboarding dashboard
* Integration with HR systems
* Automatic account provisioning
* Asset management integration
* Reports and performance analytics

## 9. Skills Demonstrated

* ServiceNow Development
* ServiceNow Administration
* ITSM
* Service Catalog
* Flow Designer
* JavaScript
* GlideRecord
* Client Scripts
* Business Rules
* Script Includes
* ACL
* Workflow Automation
