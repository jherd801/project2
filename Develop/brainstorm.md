// Basic input form to capture user information including name and email

// After inputting user info the person is redirected to input form
    POST request

// View other previously reported hazards 
    GET request
    SELECT based on user who submitted
    SELECT based on status (open vs closed)

// What data do we want to collect and work with?
    User data
        id
        Name
        Email

    Hazard data
        id
        Classification
        Severity
        Location
        Description of hazard
        Further action required? (yes / no)
        Assign corrective action selected from current user table
        Date / Time Stamp

// Roadmap
    Create directories and base files in MVC structure
        Follow week 14 homework and / or week 14 Blog-CRUD
        Boilerplate HTML files
    Get server up and running
    Create database
        Schema file
        Seeds file
    Create user information input form
    Create hazard reporting form
    Deploy basic application to Heroku
    Start on presentation material
    
// Parking lot
    Visually render a pinpoint of where a hazard was submitted, select the pinpoint to view hazard information