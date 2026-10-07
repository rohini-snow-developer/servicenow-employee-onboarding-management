# Employee Onboarding Flow Designer

## Flow Name

Employee Onboarding Automation

## Trigger

Employee Onboarding Request is submitted.

## Flow Steps

1. Trigger when onboarding request is submitted.
2. Create onboarding record.
3. Send approval request to the manager.
4. Check approval result.
5. If approved, create IT onboarding tasks.
6. Create laptop setup task if laptop is required.
7. Create system access task if access is required.
8. Notify HR about the onboarding progress.
9. Update onboarding status.
10. Mark the request as Completed after all tasks are completed.

## Flow Logic

Employee Onboarding Request
        |
        v
Manager Approval
     /       \
 Approved   Rejected
    |           |
    v           v
Create IT     Update Status
Tasks         to Rejected
    |
    v
Laptop Setup
    |
    v
System Access
    |
    v
Notify HR
    |
    v
Completed
